'use client';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import PdfFullscreen from './PdfFullscreen';
import { scaleStore } from '@/store/file';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfRenderer = ({ url, page }) => {
  const scale = scaleStore((state) => state.scale);
  let pages = [];
  for (let num = 1; num <= page; num++) pages.push(num);

  return (
    <div className="w-full max-h-[600px] overflow-auto">
      <Document file={url}>
        {pages.map((pageNumber) => (
          <Page
            key={pageNumber}
            pageNumber={pageNumber}
            className="w-full"
            scale={scale}
          ></Page>
        ))}
      </Document>
      <PdfFullscreen fileUrl={url} page={page} />
    </div>
  );
};

export default PdfRenderer;
