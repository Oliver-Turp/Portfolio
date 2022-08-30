import { Helmet, HelmetProvider } from "react-helmet-async";

import Slider from './Backend/ImageSlider';
import { SliderData } from "./Backend/SliderData";

import '../../Styles/images__carousel.css';

const Carousel = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>UI Examples | Temp</title>
                </Helmet>
            </HelmetProvider>

            <Slider slides={SliderData} />
        </>
    )
}

export default Carousel