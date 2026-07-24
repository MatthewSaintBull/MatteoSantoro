import { useEffect, useMemo, useRef, useState } from "react";

// N13 — spotlight ⌘K: apertura istantanea, filtro, ↑/↓, Invio, Esc, focus gestito.
const CommandPalette = ({ open, onClose, items }) => {
    const [query, setQuery] = useState("");
    const [active, setActive] = useState(0);
    const inputRef = useRef(null);
    const restoreRef = useRef(null);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return items;
        return items.filter(item => item.label.toLowerCase().includes(q));
    }, [items, query]);

    useEffect(() => {
        if (!open) return;
        setQuery("");
        setActive(0);
        restoreRef.current = document.activeElement;
        document.body.style.overflow = "hidden";
        inputRef.current?.focus();
        return () => {
            document.body.style.overflow = "";
            restoreRef.current?.focus?.();
        };
    }, [open]);

    useEffect(() => {
        setActive(0);
    }, [query]);

    if (!open) return null;

    const select = (item) => {
        onClose();
        if (item.hash) {
            const el = document.getElementById(item.hash);
            if (el) {
                const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
            }
        } else if (item.href?.startsWith("http")) {
            window.open(item.href, "_blank", "noopener,noreferrer");
        } else if (item.href) {
            window.location.href = item.href;
        }
    };

    const onKeyDown = (e) => {
        if (e.key === "Escape") {
            e.preventDefault();
            onClose();
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            setActive(i => Math.min(i + 1, filtered.length - 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActive(i => Math.max(i - 1, 0));
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (filtered[active]) select(filtered[active]);
        } else if (e.key === "Tab") {
            e.preventDefault();
        }
    };

    const groups = [...new Set(filtered.map(item => item.group))];
    let flatIndex = -1;

    return (
        <div className="cmdk" onKeyDown={onKeyDown}>
            <div className="cmdk__backdrop" onClick={onClose} />
            <div className="cmdk__panel" role="dialog" aria-modal="true" aria-label="Cerca nel sito">
                <div className="cmdk__field">
                    <input
                        ref={inputRef}
                        role="combobox"
                        aria-expanded="true"
                        aria-controls="cmdk-listbox"
                        aria-activedescendant={filtered[active] ? `cmdk-item-${active}` : undefined}
                        placeholder="Cerca una sezione o un link…"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                    <kbd>esc</kbd>
                </div>
                <div className="cmdk__results" id="cmdk-listbox" role="listbox">
                    {filtered.length === 0 && (
                        <p className="cmdk__empty">Nessun risultato per "{query}". Prova con "progetti" o "contatti".</p>
                    )}
                    {groups.map(group => (
                        <div key={group}>
                            <p className="cmdk__group label-mono">{group}</p>
                            {filtered.filter(item => item.group === group).map(item => {
                                flatIndex += 1;
                                const index = flatIndex;
                                return (
                                    <button
                                        key={item.label}
                                        id={`cmdk-item-${index}`}
                                        role="option"
                                        aria-selected={index === active}
                                        className={`cmdk__item${index === active ? " is-active" : ""}`}
                                        onMouseMove={() => setActive(index)}
                                        onClick={() => select(item)}
                                        tabIndex={-1}
                                        ref={index === active ? (el) => el?.scrollIntoView({ block: "nearest" }) : undefined}
                                    >
                                        <span>{item.label}</span>
                                        <span className="cmdk__hint">{item.hint}</span>
                                    </button>
                                );
                            })}
                        </div>
                    ))}
                </div>
                <div className="cmdk__foot">
                    <span><kbd>↑</kbd><kbd>↓</kbd> naviga</span>
                    <span><kbd>↵</kbd> apri</span>
                    <span><kbd>esc</kbd> chiudi</span>
                </div>
            </div>
        </div>
    );
};

export default CommandPalette;
