import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section className='mb-5 py-5 banner-section'>
            <div className="container">
                <div className='d-flex align-items-center justify-content-between'>
                    <div className="col-md-6">
                        <div className='p-3'>
                            <h1 className='heading-title text-primary mb-3'>GIGABYTE MOTHERBOARD</h1>
                            <p>GIGABYTE Ultra Durable™ 3 series motherboards provide the stability, reliability and longevity essential to meet the power needs of high-end processors and other components running today's most demanding applications and games.</p>
                            <button className='btn btn-success'>Explore  Now</button>
                        </div>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <div>
                            <img className=' img-fluid banner' src="https://www.startech.com.bd/image/cache/catalog/motherboard/gigabyte/z690-aorus-master/z690-aorus-master-01-500x500.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;


