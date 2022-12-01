import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  const jateDb = await openDB('jate', 1);
  const trans = jateDb.transaction('jate', 'readwrite');
  const contact = trans.objectStore('jate');
  const request = contact.add({ content: content });
  const result = await request;
  console.log('New jate saved', result);
};

export const getDb = async () => {
  const jateDb = await openDB('jate', 1);
  const trans = jateDb.transaction('jate', 'readonly');
  const notes = trans.objectStore('jate');
  const request = notes.getAll();
  const result = await request;
<<<<<<< HEAD
  return result
=======
  return result;
>>>>>>> parent of 06f7882 (trouble shooting)
};

initdb();
