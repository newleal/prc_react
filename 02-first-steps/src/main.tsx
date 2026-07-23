import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirsstStepsApp } from './FirstSteepsApp'
import { MyAwesomeApp } from './MyAwesomeApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <FirsstStepsApp/>

    <MyAwesomeApp/>
          

  </StrictMode>,
)
