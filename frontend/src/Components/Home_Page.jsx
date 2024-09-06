//Component imports
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Footer from './SubComponents/Footer'

const Home_Page = () => {
    return (
        <div className="w-full h-screen">
            <Page1 />
            <Page2 />
            <Page3 />
            <Footer />
        </div>
    )
}

export default Home_Page