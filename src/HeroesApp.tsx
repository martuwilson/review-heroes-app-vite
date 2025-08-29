import { RouterProvider } from 'react-router-dom'
import { appRouter } from './router/app.router'

const HeroesApp = () => {
  return (
    <>
    <RouterProvider router={appRouter} />
    </>
  )
}

export default HeroesApp