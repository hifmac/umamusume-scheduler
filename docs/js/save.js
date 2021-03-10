/**
 * @file save.js
 * @description umamusume scheduler save
 * @author hifmac(E328456 of the Frea server)
 * @copyright (c) 2021 hifmac
 * @license MIT-License
 */
export class Save {
    static DATABASE = "UMAMUSUME";
    static VERSION = 1;
    static STORE = "save";
    static INDEXED_DB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    /** @type {IDBDatabase} */
    db = null;

    init() {
        return new Promise((resolve, rejected) => {
            if (!Save.INDEXED_DB) {
                rejected(new Error("indexedDB is not available"));
                return ;
            }
     
            try {
                const openDB = indexedDB.open(Save.DATABASE, Save.VERSION);
    
                openDB.onupgradeneeded = (e) => {
                    const db = e.target.result;
                    const transaction = e.target.transaction;
                    let objectStore = null;
                    if (db.objectStoreNames.contains(Save.STORE)) {
                        objectStore = transaction.objectStore(Save.STORE);
                    }
                    else {
                        objectStore = db.createObjectStore(Save.STORE, { keyPath: "id" });
                    }
                    objectStore.clear();
                };
        
                openDB.onerror = (e) => {
                    rejected(new Error("can not open indexedDB database: " + e.message));
                };

                openDB.onsuccess = (e) => {
                    this.db = e.target.result;
                    resolve(this);
                };
            }
            catch(e) {
                rejected(new Error("indexedDB access denied"));
            }
        });
    }

    save(data) {
        return new Promise((resolve, reject) => {
            if (!Save.INDEXED_DB) {
                reject(new Error("indexedDB is not available"));
            }
            else if (!this.db) {
                reject(new Error("indexedDB is not opende"));
            }
            else {
                const saveRequest = this.db.transaction([Save.STORE], "readwrite")
                    .objectStore(Save.STORE)
                    .put(data);

                saveRequest.onerror = (e) => {
                    reject(new Error("failed to save request into indexedDB cache"));
                };

                saveRequest.onsuccess = () => {
                    resolve(this);
                };
            }
        });
    }

    load(id) {
        return new Promise((resolve, reject) => {
            if (!Save.INDEXED_DB) {
                reject(new Error("indexedDB is not available"));
            }
            else if (!this.db) {
                reject(new Error("indexedDB is not opende"));
            }
            else {
                const loadRequest = this.db.transaction([Save.STORE], "readonly")
                    .objectStore(Save.STORE)
                    .get(id);

                loadRequest.onerror = (e) => {
                    reject(new Error("failed to load request into indexedDB cache"));
                };

                loadRequest.onsuccess = (e) => {
                    resolve(e.target.result);
                };
            }
        });
    }

    clear() {
        return new Promise((resolve, reject) => {
            if (!Save.INDEXED_DB) {
                reject(new Error("indexedDB is not available"));
            }
            else if (!this.db) {
                reject(new Error("indexedDB is not opende"));
            }
            else {
                const loadRequest = this.db.transaction([Save.STORE], "readwrite")
                    .objectStore(Save.STORE)
                    .clear();

                loadRequest.onerror = (e) => {
                    reject(new Error("failed to load request into indexedDB cache"));
                };

                loadRequest.onsuccess = () => {
                    resolve(this);
                };
            }
        });
    }
}
