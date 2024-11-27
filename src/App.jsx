import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WithHuman from './Components/withHuman'
import WithAi from './Components/Ai/WithAi'

function App() {
  const router = createBrowserRouter([
      {
        path: '/prodigy_wd_03/',
        element: <WithHuman/>
      },
      {
       path: '/prodigy_wd_03/withai',
       element: <WithAi />
      }
     
  ])

  return (
   
    <>
      <RouterProvider router={router}/>
    </>
  )
}
export default App
