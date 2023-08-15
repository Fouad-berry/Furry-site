import React from 'react';
import './Home.css';
import { NavBar } from './NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import limage from '../../Assets/Images/limage.png';

export const Home = () => {
    return (
        <Container fluid className='container-style'>
            <Container className='home-container'>
                <Row className='TheBig'>
                    <Col className='theone align-items-center'>
                        <div>
                        <h5 className='mr'>MR</h5>
                        <h5 className='peabody'>PEABODY</h5>
                        <h5 className='sherman'>& SHERMAN</h5>
                        </div>
                    </Col>
                    <Col>
                        <img src={limage} alt="limage" className="limage" />
                    </Col>
                    <Col>
                    <h4 className='Synopsis'>Synopsis</h4>
                      <h5>
                      La série suit les aventures de Mr. Peabody, un chien extraordinairement intelligent, et de son fils adoptif, Sherman. Grâce à une machine à voyager dans le temps appelée le "WABAC", ils embarquent dans des voyages à travers l'histoire. Cependant, lorsque Sherman utilise la machine sans permission, ils créent des distorsions temporelles et doivent travailler ensemble pour rétablir l'ordre tout en interagissant avec des personnages historiques. Cette série mélange humour et éducation en explorant le passé tout en transmettant des leçons importantes.                      </h5>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

