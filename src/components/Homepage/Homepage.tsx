import { Features } from '../Features/Features'
import { HeroSection } from '../HeroSection/HeroSection'
import { CardList } from '../Price/CardList'
import { CallToAction } from '../CallToAction/CallToAction'
import { Review } from '../Review/Review'

export const Homepage = () => {
    return (
        <>
            <HeroSection />
            <Features />
            <CardList />
            <CallToAction />
            <Review />
        </>
    )
}
