import {
    createBrowserRouter,
    RouteObject,
    RouterProvider,
} from 'react-router-dom'
import { Suspense } from 'react'
import { Homepage } from '../components/Homepage/Homepage'
import { About } from '../components/About/About'
import { Services } from '../components/Services/Services'
import { Contact } from '../components/Contact/Contact'

const routes: RouteObject[] = [
    {
        path: '/',
        element: (
            <Suspense fallback={<span>loading...</span>}>
                <Homepage />
            </Suspense>
        ),
    },
    {
        path: '/about',
        element: (
            <Suspense fallback={<span>loading...</span>}>
                <About />
            </Suspense>
        ),
    },
    {
        path: '/services',
        element: (
            <Suspense fallback={<span>loading...</span>}>
                <Services />
            </Suspense>
        ),
    },
    {
        path: '/contact',
        element: (
            <Suspense fallback={<span>loading...</span>}>
                <Contact />
            </Suspense>
        ),
    },
]

const router = createBrowserRouter(routes)

export const Routes = () => {
    return <RouterProvider router={router} />
}
