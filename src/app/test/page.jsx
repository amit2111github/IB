'use client';

import PdfRenderer2 from '@/components/PdfRenderer';
import { useRef, useState } from 'react';
// import { AnyParams } from 'uploadthing/server';

const Test = () => {
  const [file, setFile] = useState(null);
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const fileDataUrl = reader.result;
      localStorage.setItem(
        'workspace',
        JSON.stringify({
          name: file.name,
          type: file.type,
          size: file.size,
          lastModified: file.lastModified,
          file: fileDataUrl,
        })
      );
    };
  };

  console.log('file', file);

  async function handleFileChange(e) {
    const inputFile = e.target.files[0];

    // we need to get the raw bytes
    const buffer = await inputFile.arrayBuffer();
    console.log('buffer', buffer);

    // each entry of array should contain 8 bits
    const bytes = new Uint8Array(buffer);

    console.log('bytes', bytes);

    console.log('inputFile', inputFile);

    const fileBlob = new File([bytes], inputFile.name, {
      type: inputFile.type,
    });

    const base64File = await getBase64(inputFile);

    const dataTOstor = {
      name: inputFile.name,
      type: inputFile.type,
      size: inputFile.size,
      lastModified: inputFile.lastModified,
      file: base64File,
    };

    localStorage.setItem('workspace', JSON.stringify(dataTOstor));

    // setFile(fileBlob);
  }

  function handleShow() {
    setShow(!show);

    // Process the file
    const data = JSON.parse(localStorage.getItem('workspace') || '{}');
    // const storedPdf = localStorage.getItem('workspace');

    console.log('storedPdf', data);

    // console.log('data', data);

    // let pdfBuffer = base64ToArrayBuffer(data.file);
    // const bytes = new Uint8Array(pdfBuffer);

    // console.log('bytes', bytes);

    // const fileBlob = new File([bytes], data.name, {
    //   type: 'application/pdf',
    // });

    // console.log('fileBlob', fileBlob);

    setFile(data.file);
  }

  // const url = window.URL.createObjectURL(
  //   new Blob([new Uint8Array(this.props.resumePDF.data).buffer])
  // );

  return (
    <div>
      <input
        type="file"
        placeholder="Enter your name"
        ref={ref}
        onChange={(e) => {
          // handleFileChange(e);
          handleFileUpload(e?.target?.files?.[0]);
        }}
      />

      <button onClick={handleShow}>Show</button>

      {show && <PdfRenderer2 url={file} />}
    </div>
  );
};

// function fileToBase64(file: any) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// }

export default Test;

async function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
  });
}

export function base64ToArrayBuffer(base64) {
  console.log('atob', base64);

  var binaryString = atob(base64);
  var bytes = new Uint8Array(binaryString.length);
  for (var i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}
