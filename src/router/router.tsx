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
import { NavigationWrapper } from '../components/NavigationWrapper/NavigationWrapper'

const routes: RouteObject[] = [
    {
        path: '/',
        element: (
            <Suspense fallback={<span>loading...</span>}>
                <NavigationWrapper>
                    <Homepage />
                </NavigationWrapper>
            </Suspense>
        ),
    },
    {
        path: '/about',
        element: (
            <Suspense fallback={<span>loading...</span>}>
                <NavigationWrapper>
                    <About />
                </NavigationWrapper>
            </Suspense>
        ),
    },
    {
        path: '/services',
        element: (
            <Suspense fallback={<span>loading...</span>}>
                <NavigationWrapper>
                    <Services />
                </NavigationWrapper>
            </Suspense>
        ),
    },
    {
        path: '/contact',
        element: (
            <Suspense fallback={<span>loading...</span>}>
                <NavigationWrapper>
                    <Contact />
                </NavigationWrapper>
            </Suspense>
        ),
    },
]

const router = createBrowserRouter(routes)

export const Routes = () => {
    return <RouterProvider router={router} />
}
