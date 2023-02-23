import fs from 'fs/promises';
import { skills } from './data';
export const addknowledge = async (knowledge: { [key: string]: string }) => {
  const initialString: string = await fs.readFile('data.js', {
    encoding: 'utf-8',
  });

  const data: any[] = JSON.parse(initialString);

  data.push(knowledge);

  const stringData = JSON.stringify(data);

  fs.writeFile('data.js', stringData, { encoding: 'utf-8' });
};

export const getAllKnowledge = async () => {
  const initialString: string = await fs.readFile('data.js', {
    encoding: 'utf-8',
  });
  const data: any[] = JSON.parse(initialString);

  fs.writeFile('data.js', data, { encoding: 'utf-8' });
};
