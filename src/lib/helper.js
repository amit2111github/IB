import { v4 as uuidv4 } from 'uuid';
import { PDFDocument } from 'pdf-lib';

export const fileProcessing = async (file, courseType, title, subject) => {
  const reader = new FileReader();
  const result = await new Promise((resolve, reject) => {
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
  const fileDataUrl = result;
  const page = await getPageCount(file);
  console.log(page, 'is page');
  let workspace = JSON.parse(localStorage.getItem('workspace'));
  if (!workspace) workspace = [];
  const data = {
    id: uuidv4(),
    name: file.name,
    result: generateResult(),
    type: file.type,
    size: file.size,
    lastModified: file.lastModified,
    file: fileDataUrl,
    page,
    courseType,
    title,
    subject,
  };
  workspace.push(data);
  localStorage.setItem('workspace', JSON.stringify(workspace));
  return data.id;
};
export const getPageCount = async (file) => {
  try {
    const data = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);

      reader.readAsArrayBuffer(file);
    });

    const pdf = await PDFDocument.load(data);

    return pdf.getPageCount();
  } catch (err) {
    console.log(err);
    return 1;
  }
};

export const generateResult = () => {
  let result = {
    evaluationDate: getDate(),
    criteria: [
      {
        score: 7,
        maxScore: 10,
        name: 'Criteria A',
        description: 'Understanding Knowledge Question',
        info: 'The essay identifies and focuses on the knowledge question regarding the resolvability of disputes over knowledge claims within disciplines',
        strengths: [
          'Demonstrates a good understanding of the prescribed title and the associated knowledge questions.',
          'Demonstrates a good understanding of the prescribed title and the associated knowledge questions.',
        ],
        improvements: [
          'Demonstrates a good understanding of the prescribed title and the associated knowledge questions.',
          'Demonstrates a good understanding of the prescribed title and the associated knowledge questions.',
        ],
      },
      {
        score: 5,
        maxScore: 10,
        name: 'Criteria B',
        description: 'Understanding Knowledge Question',
        info: 'The essay identifies and focuses on the knowledge question regarding the resolvability of disputes over knowledge claims within disciplines',
        strengths: [
          'Demonstrates a good understanding of the prescribed title and the associated knowledge questions.',
          'Demonstrates a good understanding of the prescribed title and the associated knowledge questions.',
        ],
        improvements: [
          'Demonstrates a good understanding of the prescribed title and the associated knowledge questions.',
          'Demonstrates a good understanding of the prescribed title and the associated knowledge questions.',
        ],
      },
      {
        score: 3,
        maxScore: 10,
        name: 'Criteria C',
        description: 'Understanding Knowledge Question',
        info: 'The essay identifies and focuses on the knowledge question regarding the resolvability of disputes over knowledge claims within disciplines',
        strengths: [
          'Demonstrates a good understanding of the prescribed title and the associated knowledge questions.',
          'Demonstrates a good understanding of the prescribed title and the associated knowledge questions.',
        ],
        improvements: [
          'Demonstrates a good understanding of the prescribed title and the associated knowledge questions.',
          'Demonstrates a good understanding of the prescribed title and the associated knowledge questions.',
        ],
      },
    ],
  };
  return result;
};
export const getDate = () => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  var d = new Date();
  return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
};
