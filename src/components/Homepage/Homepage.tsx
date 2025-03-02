import { Features } from '../Features/Features'
import { Navigation } from '../Navigation/Navigation'
import { HeroSection } from '../HeroSection/HeroSection'
import { CardList } from '../Price/CardList'
import { CallToAction } from '../CallToAction/CallToAction'
import { Review } from '../Review/Review'
import { Footer } from '../Footer/Footer'

export const Homepage = () => {
    return (
        <>
            <Navigation />
            <HeroSection />
            <Features />
            <CardList />
            <CallToAction />
            <Review />
            <Footer />
        </>
    )
}
