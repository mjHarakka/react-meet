import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'
import { store } from './app/store'
import { Provider } from 'react-redux'

const container = document.getElementById('app')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
