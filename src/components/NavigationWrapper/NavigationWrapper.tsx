import { ReactNode } from "react"
import { Navigation } from "../Navigation/Navigation"
import { Footer } from "../Footer/Footer"

export const NavigationWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <Navigation />
            {children}
            <Footer />
        </div>
    )
}
