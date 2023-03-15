import React, { useEffect } from 'react'
import resumePdf from '../../assets/CV.pdf'
import { Document, Page, pdfjs } from 'react-pdf';
import { useEffect } from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

function Resume() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    return (
        <div className='max-h-[40rem] overflow-y-scroll flex flex-col items-center lg:p-2 lg:space-y-4'>
            <div className='h-20 w-full bg-blue-100 rounded-md p-5'>
                You can download a pdf copy of my resume clicking <a href={resumePdf} target="_blank" className='text-red-600' > here </a>
            </div>
            <Document file={resumePdf} className='hidden lg:block'>
                <Page pageNumber={1} renderTextLayer={false} />
            </Document>
        </div>


    )
}

export default Resume