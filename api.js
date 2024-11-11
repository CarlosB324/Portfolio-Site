import { initializeApp } from "firebase/app"
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where,
    documentId
} from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyB614YFuTJLkQ2ZFnMDI5U0KQ-nUfJlUJs",
    authDomain: "portfolio-7f13c.firebaseapp.com",
    projectId: "portfolio-7f13c",
    storageBucket: "portfolio-7f13c.firebasestorage.app",
    messagingSenderId: "421817995293",
    appId: "1:421817995293:web:4a0f73219bafba6e3d36f4"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const websitesCollectionRef = collection(db, "websites")

export async function getWebsites() {
    const snapshot = await getDocs(websitesCollectionRef)
    const websites = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return websites
}

export async function getWebsite(id) {
    const docRef = doc(db, "websites", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}