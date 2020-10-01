import React, { useState } from 'react';

import './style.css';

import ArrowLeftRed from '../assets/icons/arrow-left-red.svg';
import ArrowRightRed from '../assets/icons/arrow-right-red.svg';
import ArrowLeftBlue from '../assets/icons/arrow-left-blue.svg';
import ArrowRightBlue from '../assets/icons/arrow-right-blue.svg';
import FaultRed from '../assets/icons/fault-red.svg';
import FaultRedFalse from '../assets/icons/fault-red-false.svg';
import FaultBlue from '../assets/icons/fault-blue.svg';
import FaultBlueFalse from '../assets/icons/fault-blue-false.svg';

function ScoreBoard() {
	const ArrayAkaFault = [
		{ id: 1, fault: false, name: 'C' },
		{ id: 2, fault: false, name: 'K' },
		{ id: 3, fault: false, name: 'HK' },
		{ id: 4, fault: false, name: 'H' },
	];
	const ArrayAkaFault2 = [
		{ id: 1, fault: false },
		{ id: 2, fault: false },
		{ id: 3, fault: false },
		{ id: 4, fault: false },
	];
	const ArrayAoFault = [
		{ id: 1, fault: false, name: 'C' },
		{ id: 2, fault: false, name: 'K' },
		{ id: 3, fault: false, name: 'HK' },
		{ id: 4, fault: false, name: 'H' },
	];
	const ArrayAoFault2 = [
		{ id: 1, fault: false },
		{ id: 2, fault: false },
		{ id: 3, fault: false },
		{ id: 4, fault: false },
	];

	const [pointsAka, setPointsAka] = useState(0);
	const [pointsAo, setPointsAo] = useState(0);
	const [minutes, setMinutes] = useState('00');
	const [seconds, setSeconds] = useState('00');
	const [timer, setTimer] = useState(true);
	const [akaFaults, setAkaFaults] = useState(ArrayAkaFault);
	const [akaFaults2, setAkaFaults2] = useState(ArrayAkaFault2);
	const [aoFaults, setAoFaults] = useState(ArrayAoFault);
	const [aoFaults2, setAoFaults2] = useState(ArrayAoFault2);

	function onFault1(item) {
		let newArray = akaFaults;

		newArray.map(id => {
			if (id.id === item.id) {
				item.fault = !item.fault;
				setAkaFaults([...newArray]);
			}
		});
	}

	function onFault2(item) {
		let newArray = akaFaults2;

		newArray.map(id => {
			if (id.id === item.id) {
				item.fault = !item.fault;
				setAkaFaults2([...newArray]);
			}
		});
	}

	function onFault3(item) {
		let newArray = aoFaults;

		newArray.map(id => {
			if (id.id === item.id) {
				item.fault = !item.fault;
				setAoFaults([...newArray]);
			}
		});
	}

	function onFault4(item) {
		let newArray = aoFaults2;

		newArray.map(id => {
			if (id.id === item.id) {
				item.fault = !item.fault;
				setAoFaults2([...newArray]);
			}
		});
	}

	return (
		<div id="container">
			<div className="header">
				<div className="layer-aka">
					<p>AKA</p>
				</div>
				<div className="spacer"></div>
				<div className="layer-ao">
					<p>AO</p>
				</div>
			</div>
			<div className="mid-page">
				<div className="points-aka">
					<img
						src={ArrowLeftRed}
						onClick={() => pointsAka > 0 && setPointsAka(pointsAka - 1)}
					/>
					<p>{pointsAka} </p>
					<img src={ArrowRightRed} onClick={() => setPointsAka(pointsAka + 1)} />
				</div>
				<div className="timer">
					<p>
						{minutes}:{seconds}
					</p>
				</div>
				<div className="points-ao">
					<img
						src={ArrowLeftBlue}
						onClick={() => pointsAo > 0 && setPointsAo(pointsAo - 1)}
					/>
					<p>{pointsAo} </p>
					<img src={ArrowRightBlue} onClick={() => setPointsAo(pointsAo + 1)} />
				</div>
			</div>
			<div className="footer">
				<div className="faults-aka">
					<div className="faults-group">
						{akaFaults.map(item => (
							<div className="fault" key={item.id} onClick={() => onFault1(item)}>
								<p>{item.name}</p>
								<img src={item.fault ? FaultRed : FaultRedFalse} />
							</div>
						))}
					</div>
					<div className="faults-group">
						{akaFaults2.map(item => (
							<div className="fault" key={item.id} onClick={() => onFault2(item)}>
								<img src={item.fault ? FaultRed : FaultRedFalse} />
							</div>
						))}
					</div>
				</div>

				<div className="spacer"></div>
				<div className="faults-ao">
					<div className="faults-group">
						{aoFaults.map(item => (
							<div className="fault" key={item.id} onClick={() => onFault3(item)}>
								<p>{item.name}</p>
								<img src={item.fault ? FaultBlue : FaultBlueFalse} />
							</div>
						))}
					</div>
					<div className="faults-group">
						{aoFaults2.map(item => (
							<div className="fault" key={item.id} onClick={() => onFault4(item)}>
								<img src={item.fault ? FaultBlue : FaultBlueFalse} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ScoreBoard;
