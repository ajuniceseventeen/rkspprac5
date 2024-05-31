import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import App from './App.jsx'
import store from './reshenie/story.jsx'
import './index.css'
import AgreementForm from './reshenie/agreementForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AgreementForm />
    </Provider>
  </React.StrictMode>,
)
