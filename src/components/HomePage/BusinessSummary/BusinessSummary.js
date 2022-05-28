import React from 'react';
import './BusinessSummary.css';
import { FaFlag, FaUserClock, FaStreetView, FaIndustry } from "react-icons/fa";
import CountUp from 'react-countup';

const BusinessSummary = () => {
    return (
        <section className=' mt-5 pt-5'>
            <div className='about-section'>
                <div className="container">
                    <div className='d-flex py-5 justify-content-between align-items-center '>
                        <div className="col-md-6">
                            <div>
                                <img className='img-fluid rounded-3' src="https://static.gigabyte.com/StaticFile/Image/Global/3c3e134d28940b95074b1b9097f9894e/Product/31469/png/500" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='ms-3 mb-3 mb-lg-0'>
                                <h1 className='my-4'>New Arrival</h1>
                                <p>Cleaner and more efficient power delivery to the CPU with better thermal performance ensure stability under high CPU frequencies and heavy loading.</p>
                                <div style={{ paddingLeft: '2rem' }}>
                                    <ul  >
                                        <li style={{ listStyle: 'disc' }} className='text-dark'>6+1+1 Phases Low RDS(on) MOSFETs</li>
                                        <li style={{ listStyle: 'disc' }} className='text-dark'>Solid capacitors to improve transient response and minimize oscillation.</li>
                                        <li style={{ listStyle: 'disc' }} className='text-dark'>8-pin Solid Pin CPU Power Connector.</li>
                                    </ul>
                                </div>

                                <button className='btn btn-primary'>Know More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='counter-section'>
                <div className='container'>
                    <div className=' py-5'>
                        <div className='d-flex py-5 flex-lg-row flex-column align-items-center justify-content-between text-center'>
                            <div className='my-3 my-lg-0'>
                                <h1 className='text-white'><FaFlag /></h1>
                                <h1 className='text-white'><CountUp
                                    end={192}
                                    duration={3}
                                />
                                </h1>
                                <h3 className='text-white'>Country</h3>
                            </div>
                            <div className='my-3 my-lg-0'>
                                <h1 className='text-white'><FaUserClock /></h1>
                                <h1 className='text-white'>
                                    <CountUp
                                        end={1250}
                                        duration={3}
                                    />+</h1>
                                <h3 className='text-white'>Happy Client</h3>
                            </div>
                            <div className='my-3 my-lg-0'>
                                <h1 className='text-white'><FaStreetView /></h1>
                                <h1 className='text-white'><CountUp
                                    end={980}
                                    duration={3}
                                />+</h1>
                                <h3 className='text-white'>Client Reviews</h3>
                            </div>
                            <div className='my-3 my-lg-0'>
                                <h1 className='text-white'><FaIndustry /></h1>
                                <h1 className='text-white'><CountUp
                                    end={68}
                                    duration={3}
                                /></h1>
                                <h3 className='text-white'>Branch</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;


