import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBcqP4BX41uNkz7GbpPW20NKxHlRFfhJ1Y',
  authDomain: 'house-marketplace-app-b3c53.firebaseapp.com',
  projectId: 'house-marketplace-app-b3c53',
  storageBucket: 'house-marketplace-app-b3c53.appspot.com',
  messagingSenderId: '446562944501',
  appId: '1:446562944501:web:3c560a1039fb9a9eea0cbc',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore()
