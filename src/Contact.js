import React from 'react';
import { Icon } from 'react-icons-kit';
import Center from 'react-center';
import { iphone } from 'react-icons-kit/ikons/iphone';
import { location } from 'react-icons-kit/icomoon/location';
import { ic_mail_outline } from 'react-icons-kit/md/ic_mail_outline';
//import cv from './Files/CV.pdf';

function Contact() {
    return (
        <div className="Contact">
            <div className="title-4">Contact </div>
            <div className="dashed-line"></div>
            <Center>
                <div style={{ width: 48, height: 48, color: '#FF0000' }}>
                    <Icon size={'100%'} icon={location} />
                </div>
            </Center>
            <div className="location">Ramat-Gan, Israel</div>
            <Center>
                <div style={{ width: 48, height: 48, color: '#FF0000' }}>
                    <Icon size={'100%'} icon={iphone} />
                </div>
            </Center>
            <div className="phonenumber">+972-54-631-9894</div>
            <Center>
                <div style={{ width: 50, height: 50, color: '#FF0000' }}>
                    <Icon size={'100%'} icon={ic_mail_outline} />
                </div>
            </Center>
            <div className="mail">shirbata97@gmail.com</div>
            {/* <div className="cv">
                <a href={cv} download="My_File.pdf">
                    {' '}
                    Download CV{' '}
                </a>
            </div> */}
        </div>
    );
}

export default Contact;
