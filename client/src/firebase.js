import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyDgBnzgnVWsUNk_gX8n7FeTreS9KD1NMcA',
  authDomain: 'leelasewingacademy-9efb6.firebaseapp.com',
  projectId: 'leelasewingacademy-9efb6',
  storageBucket: 'leelasewingacademy-9efb6.firebasestorage.app',
  messagingSenderId: '728872510645',
  appId: '1:728872510645:web:cdcb9fb5471efe57ee8afc',
  measurementId: 'G-T9MYCNK4GX',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export { app, analytics }
