import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import wisata1 from "../assets/img/wisata/01_wisata.png";
import wisata2 from "../assets/img/wisata/02_wisata.png";
import wisata3 from "../assets/img/wisata/03_wisata.png";
import wisata4 from "../assets/img/wisata/04_wisata.png";
import wisata5 from "../assets/img/wisata/05_wisata.png";
import wisata6 from "../assets/img/wisata/06_wisata.png";
import hotell from "../assets/img/hotel/01_hotel.png";
import hotel2 from "../assets/img/hotel/02_hotel.png";
import hotel3 from "../assets/img/hotel/03_hotel.png";
import hotel4 from "../assets/img/hotel/04_hotel.png";
import hotel5 from "../assets/img/hotel/05_hotel.png";
import hotel6 from "../assets/img/hotel/06_hotel.png";
import lembaga1 from "../assets/img/lembaga/01_lembaga.png";
import lembaga2 from "../assets/img/lembaga/02_lembaga.png";
import lembaga3 from "../assets/img/lembaga/03_lembaga.png";
import lembaga4 from "../assets/img/lembaga/04_lembaga.png";
import lembaga5 from "../assets/img/lembaga/05_lembaga.png";
import lembaga6 from "../assets/img/lembaga/06_lembaga.png";
import kuliner1 from "../assets/img/kuliner/01_kuliner.png";
import kuliner2 from "../assets/img/kuliner/02_kuliner.png";
import kuliner3 from "../assets/img/kuliner/03_kuliner.png";
import kuliner4 from "../assets/img/kuliner/04_kuliner.png";
import kuliner5 from "../assets/img/kuliner/05_kuliner.png";
import kuliner6 from "../assets/img/kuliner/06_kuliner.png";
import oleh1 from "../assets/img/oleh/01_oleh.png";
import oleh2 from "../assets/img/oleh/02_oleh.png";
import oleh3 from "../assets/img/oleh/03_oleh.png";
import oleh4 from "../assets/img/oleh/04_oleh.png";
import oleh5 from "../assets/img/oleh/05_oleh.png";
import oleh6 from "../assets/img/oleh/06_oleh.png";
import event1 from "../assets/img/event/01_event.png";
import event2 from "../assets/img/event/02_event.png";
import event3 from "../assets/img/event/03_event.png";
import event4 from "../assets/img/event/04_event.png";
import event5 from "../assets/img/event/05_event.png";
import event6 from "../assets/img/event/06_event.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const wisata = [
        {
            title: "Gunung Semeru",
            description: "Ngampo, Kec. Pasrujambe, Kabupaten Lumajang, Jawa Timur 67361",
            imgUrl: wisata1,
          },
          {
            title: "Air Terjun Antrukan Menjangan",
            description: "Krajan, Wonocepokoayu, Kec. Senduro, Kabupaten Lumajang, Jawa Timur 67361",
            imgUrl: wisata2,
          },
          {
            title: "Air Terjun Kapas Biru",
            description: "Mulyoarjo, Kec. Pronojiwo, Kabupaten Lumajang, Jawa Timur 67374",
            imgUrl: wisata3,
          },
          {
            title: "Puncak B29",
            description: "Ngampo, Kec. Pasrujambe, Kabupaten Lumajang, Jawa Timur 67361",
            imgUrl: wisata4,
          },
          {
            title: "Pemandian Selokambang",
            description: "Purworejo, Kec. Senduro, Kabupaten Lumajang, 67361",
            imgUrl: wisata5,
          },
          {
            title: "Ranu Kumbolo",
            description: "Tulungrejo, Pasrujambe, Kec. Pasrujambe, Kabupaten Lumajang, Jawa Timur 67361",
            imgUrl: wisata6,
          },
    ]

    const hotel = [
        {
            title: "Omah Nusantara Homestay",
            description: "jl. Serma Dohir No.167, Sumberagung, Sumberrejo, Kec. Senduro, Kabupaten Lumajang, Jawa Timur 67361",
            imgUrl: hotell,
          },
          {
            title: "RR Kost Syariah",
            description: "Perumahan Toga Residence, Jl. Gajah Mada No.44, Kepuharjo, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67316",
            imgUrl: hotel2,
          },
          {
            title: "Hotel Prima",
            description: "Jalan Ir. Soekarno Hatta No. 69, Sukodono, Biting Dua, Kutorenon, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67352",
            imgUrl: hotel3,
          },
          {
            title: "Hotel Maharaja",
            description: "Jl. Raya Klakah No.99, Curah Pakem, Mlawang, Kec. Klakah, Kabupaten Lumajang, Jawa Timur 67356",
            imgUrl: hotel4,
          },
          {
            title: "Hotel Lumajang",
            description: "Jl. Jend. A. Yani No.301-303, Tompokersan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67311",
            imgUrl: hotel5,
          },
          {
            title: "Griya Bunda Family",
            description: "Perumahan Grand ZamZam RKS, Jl. Brigjen Katamso No.7, Tompokersan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67316",
            imgUrl: hotel6,
          },
    ]

    const lembaga = [
        {
            title: "Kantor Bupati Lumajang",
            description: "Jl. Alun-Alun Utara No.7, Rogotrunan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67316",
            imgUrl: lembaga1,
          },
          {
            title: "Masjid Agung K.H. Anas Machfudz LTM.NU",
            description: "Jl. Abu Bakar Kelurahan No.1, Citrodiwangsan, Ditotrunan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67313",
            imgUrl: lembaga2,
          },
          {
            title: "Rumah Sakit Dr. Haryoto",
            description: "Jl. Basuki Rahmat No.5, Tompokersan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67311",
            imgUrl: lembaga3,
          },
          {
            title: "Perpustakaan Daerah",
            description: "Jl. Alun-Alun Selatan No.1, Ditotrunan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67316",
            imgUrl: lembaga4,
          },
          {
            title: "Pengadilan Agama Lumajang",
            description: "Jl. Soekarno Hatta No 11, Sukodono, Biting Dua, Kutorenon, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67352",
            imgUrl: lembaga5,
          },
          {
            title: "Dinas Perindustrian dan Perdagangan Lumajang",
            description: "Jl. Letkol Slamet Wardoyo No.43-45, Laban, Labruk Lor, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67316",
            imgUrl: lembaga6,
          },
    ]

    const kuliner = [
        {
            title: "Banana Prince",
            description: "Jl. Argopuro Gg. 3 No.17, Citrodiwangsan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67316",
            imgUrl: kuliner1,
          },
          {
            title: "Mie Semeru",
            description: "Jl. Komodor Yos Sudarso No.40, Citrodiwangsan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67316",
            imgUrl: kuliner2,
          },
          {
            title: "Ayam Geprek Mak Rumpit",
            description: "Jl. Kyai Ghozali No.96, Rogotrunan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67316",
            imgUrl: kuliner3,
          },
          {
            title: "Mie Gembeng",
            description: "Jl. Jendral Panjaitan No.7, Citrodiwangsan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67316",
            imgUrl: kuliner4,
          },
          {
            title: "Waffel Vision Vista",
            description: "Jl. Sastrodikoro No.70, Citrodiwangsan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67312",
            imgUrl: kuliner5,
          },
          {
            title: "Vale Toast",
            description: "Jl. Gajah Mada No.10a, Kepuharjo, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67316",
            imgUrl: kuliner6,
          },
    ]

    const oleh = [
        {
            title: "Tape Pisang",
            description: "Dusun Kalibendo Utara, RT.03/RW.03, Kalibendo Utara, Kalibendo, Kec. Pasirian, Kabupaten Lumajang, Jawa Timur 67372",
            imgUrl: oleh1,
          },
          {
            title: "Keripik Kulit Pisang",
            description: "Dusun Kalibendo Utara, RT.03/RW.03, Kalibendo Utara, Kalibendo, Kec. Pasirian, Kabupaten Lumajang, Jawa Timur 67372",
            imgUrl: oleh2,
          },
          {
            title: "Keripik Salak",
            description: "Pronojiwo-Lumajang, Jawa Timur",
            imgUrl: oleh3,
          },
          {
            title: "Keripik Talas",
            description: "Dusun Tulus Rejo I, RT.03/RW.02, Dusun Tulusrejo, Tempeh Lor, Kec. Tempeh, Kabupaten Lumajang, Jawa Timur 67371",
            imgUrl: oleh4,
          },
          {
            title: "Rambak Pisang",
            description: "Dusun Tulus Rejo I, RT.03/RW.02, Dusun Tulusrejo, Tempeh Lor, Kec. Tempeh, Kabupaten Lumajang, Jawa Timur 67371",
            imgUrl: oleh5,
          },
          {
            title: "Keripik Pisang Jati Arum",
            description: " jl. Mayor Jendral Sukartiko, no.240A, Jogotrunan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur",
            imgUrl: oleh6,
          },
    ]

    const event = [
        {
            title: "Gerak Jalan Candipuro - Lumajang(CandiL)",
            description: "28 Desember 2019, Candipuro - Lumajang",
            imgUrl: event1,
          },
          {
            title: "Lumajang Fashion Carnival 2022",
            description: "22 Maret 2022, Kawasan Wonorejo Terpadu Lumajang",
            imgUrl: event2,
          },
          {
            title: "Balos Night Carnival Exotica Mahameru",
            description: "16 November 2019, Alun - alun Lumajang",
            imgUrl: event3,
          },
          {
            title: "Festival Banjir Tahu",
            description: "14 Oktober 2019, Lapangan Desa Kunir Kidul",
            imgUrl: event4,
          },
          {
            title: "Pawai Jaran Kencak",
            description: "07 Desember 2019, Depan Pendopo Arya Wiraradja, Lumajang",
            imgUrl: event5,
          },
          {
            title: "Grand Final Duta Wisata Cacak Yuk",
            description: "03 Agustus 2019, Depan Pendopo Arya Wiraradja, Lumajang",
            imgUrl: event6,
          },
    ]

    return (
        <section className="project" id="destinasi">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Destinasi</h2>
                                    <p>Berbagai macam destinasi lokasi yang terdapat di Kabupaten Lumajang</p>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Tempat wisata</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Hotel</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Lembaga Pemerintah</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fourth">Kuliner</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fifth">Oleh - oleh</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="sixth">Event</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                {
                                                    wisata.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                        <Row>
                                                {
                                                    hotel.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                        <Row>
                                                {
                                                    lembaga.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth">
                                        <Row>
                                                {
                                                    kuliner.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fifth">
                                        <Row>
                                                {
                                                    oleh.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="sixth">
                                        <Row>
                                                {
                                                    event.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="colorSharp2"></img>
        </section>
    )
}