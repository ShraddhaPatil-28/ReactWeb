import React from 'react'
import Title from './Title'
import { Col, Container, Row } from 'react-bootstrap'
import cup from '../Assets/img/portfolio/portfolio-1.jpg'
import img2 from '../Assets/img/portfolio/portfolio-2.jpg'
import img3 from '../Assets/img/portfolio/portfolio-3.jpg'
import img4 from '../Assets/img/portfolio/portfolio-4.jpg'
import img5 from '../Assets/img/portfolio/portfolio-5.jpg'
import img6 from '../Assets/img/portfolio/portfolio-6.jpg'
import img7 from '../Assets/img/portfolio/portfolio-7.jpg'
import img8 from '../Assets/img/portfolio/portfolio-8.jpg'
import img9 from '../Assets/img/portfolio/portfolio-9.jpg'




const Portfolio = () => {
    const xyz = [{
        id: 1,
        Imgs: cup
    },
    {
        id: 2,
        Imgs:img2
    },
    {
        id: 3,
        Imgs: img3 
    },
    {
        id: 4,
        Imgs:img4
    },
    {
        id: 5,
        Imgs: img5
    },
    {
        id: 6,
        Imgs: img6
    },
    {
        id: 7,
        Imgs: img7
    },
    {
        id: 8,
        Imgs: img8
    },
    {
        id: 9,
        Imgs: img9
    },]
    return (
        <div>
            <Title titles="Portfolio" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />
            <Container>
                <Row>
                    {
                        xyz.map((abc) => {
                            return <>
                                <Col lg={4} className=' my-4'>
                                    <img src={abc.Imgs} alt="" className='img-fluid' /></Col>
                            </>
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio
