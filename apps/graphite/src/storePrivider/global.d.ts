declare module 'redux-persist-indexeddb-storage' {
  const createIndexedDBStorage: (dbName: string, storeName: string) => any;
  export default createIndexedDBStorage;
}
