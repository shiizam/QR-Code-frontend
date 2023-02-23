import React from 'react';
import './style.css';
import qrImage from '../assets/image-qr-code.png';

export const QR = () => {
	return (
		<div className='panel'>
				<img className='panel-qr-img' src={qrImage} alt="qr" />
				<h3 className='panel-title'>Improve your front-end skills by building projects</h3>
				<p className='panel-body'>
					Scan the QR code to visit Frontend Mentor and take your coding skills to
					the next level
				</p>
		</div>
	)
}
