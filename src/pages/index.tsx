import React, { useEffect, useState } from 'react';

import './style.css';

import ArrowLeftRed from '../assets/icons/arrow-left-red.svg';
import ArrowRightRed from '../assets/icons/arrow-right-red.svg';
import ArrowLeftBlue from '../assets/icons/arrow-left-blue.svg';
import ArrowRightBlue from '../assets/icons/arrow-right-blue.svg';
import FaultRed from '../assets/icons/fault-red.svg';
import FaultRedFalse from '../assets/icons/fault-red-false.svg';
import FaultBlue from '../assets/icons/fault-blue.svg';
import FaultBlueFalse from '../assets/icons/fault-blue-false.svg';
import PlayImg from '../assets/icons/play.svg';
import PauseImg from '../assets/icons/pause.svg';
import { PointsAka } from './style';

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
	const [minutes, setMinutes] = useState(1);
	const [seconds, setSeconds] = useState(0);
	const [time, setTime] = useState(0);
	const [timer, setTimer] = useState(false);
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
	function initializeTimer() {
		if (!timer) {
			if (time > 0) {
				setTimer(true);
				setPointsAka(0);
				setPointsAo(0);
			} else {
				alert('Impossivel iniciar sem um tempo');
			}
		} else {
			setTimer(false);
		}
	}

	if (timer) {
		if (time != 0) {
			setTimeout(() => {
				if (seconds != 0) {
					setSeconds(seconds - 1);
					setTime(time - 1);
				}
				if (seconds <= 0 && minutes > 0) {
					setSeconds(59);
				}
				setTime(time - 1);
			}, 1000);
		}
	}

	function clearTimer() {
		finishStates();
	}

	function finishStates() {
		setTimer(false);
		setTime(0);
		setSeconds(0);
		setMinutes(0);
		setPointsAka(0);
		setPointsAo(0);
		setAkaFaults(ArrayAkaFault);
		setAkaFaults2(ArrayAkaFault2);
		setAoFaults(ArrayAoFault);
		setAoFaults2(ArrayAoFault2);
	}
	useEffect(() => {
		setMinutes(Math.floor(time / 60));
		if (seconds > 59) {
			setSeconds(0);
		}

		if (time === 0 && timer) {
			if (pointsAka > pointsAo) {
				alert('Aka venceu');
			}
			if (pointsAo > pointsAka) {
				alert('Ao venceu');
			}
			finishStates();
		}
		if (pointsAka - pointsAo >= 8 && timer) {
			alert('Aka venceu');
			setTimer(false);
		}
		if (pointsAo - pointsAka >= 8 && timer) {
			alert('Ao venceu');
			setTimer(false);
		}
	}, [time]);

	function onMinutes() {
		setTime(time + 60);
		setSeconds(seconds + 60);
	}
	function onSeconds() {
		setTime(time + 30);
		setSeconds(seconds + 30);
	}

	console.log(minutes, '  ', seconds, '===', time);

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
					<div className="timer-buttons">
						<div
							className="timer-button"
							style={timer ? { visibility: 'hidden' } : { visibility: 'visible' }}
							onClick={onMinutes}
						>
							+1m
						</div>
						<div
							className="timer-button"
							style={timer ? { visibility: 'hidden' } : { visibility: 'visible' }}
							onClick={onSeconds}
						>
							+30s
						</div>
						<div
							className="timer-button"
							style={timer ? { visibility: 'hidden' } : { visibility: 'visible' }}
							onClick={() => clearTimer()}
						>
							clear
						</div>
					</div>
					<p
						style={
							seconds <= 30 && minutes == 0 ? { color: '#EB4137' } : { color: '#EBEBEB' }
						}
					>
						{minutes < 10 ? '0' + minutes : minutes}:
						{seconds < 10 ? '0' + seconds : seconds}
					</p>
					<div className="controller-timer" onClick={() => initializeTimer()}>
						<img
							src={`${!timer ? PlayImg : PauseImg}`}
							onClick={() => initializeTimer()}
						/>
					</div>
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
