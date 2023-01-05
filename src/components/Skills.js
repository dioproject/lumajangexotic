import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo1 from "../assets/img/logo/01_logo.png";
import logo2 from "../assets/img/logo/02_logo.png";
import logo3 from "../assets/img/logo/03_logo.png";
import logo4 from "../assets/img/logo/04_logo.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max : 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return (
        <section className="skill" id="lembagapemerintah">
            <Container>
                <Row>
                    <Col size={12}>
                        <div className="skill-bx wow zoomIn">
                            <h2>
                                Lembaga Pemerintah
                            </h2>
                            <p>Kabupaten Lumajang</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={logo1} alt="pemda" />
                                </div>
                                <div className="item">
                                    <img src={logo2} alt="bpbd" />
                                </div>
                                <div className="item">
                                    <img src={logo3} alt="kominfo" />
                                </div>
                                <div className="item">
                                    <img src={logo4} alt="lingkungan hidup" />
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="colorSharp"/>
        </section>
    )
}   