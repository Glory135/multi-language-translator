import { Keyboard, Mic } from '@mui/icons-material';
import React, { useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import SelectLanguage from '../components/SelectLanguage';
import { useQuery } from '@tanstack/react-query';
import {
	getLanguages,
	recognize_speech,
	text_translate,
} from '../utinFunctions';
import loadingani from '../assets/loading.gif';

const TranslateText = () => {
	const [type, setType] = useState('text');
	const [fromText, setFromText] = useState('');
	const [isRecording, setIsRecording] = useState(false);
	const [selectedFromLan, setSelectedFromLan] = useState({
		label: '',
		code: '',
	});
	const [selectedToLan1, setSelectedToLan1] = useState({
		label: '',
		code: '',
	});
	const [selectedToLan2, setSelectedToLan2] = useState({
		label: '',
		code: '',
	});
	const [selectedToLan3, setSelectedToLan3] = useState({
		label: '',
		code: '',
	});
	const [toText1, setToText1] = useState('');
	const [toText2, setToText2] = useState('');
	const [toText3, setToText3] = useState('');
	const [loadingText, seLoadingText] = useState(false);

	const { status, startRecording, stopRecording, mediaBlobUrl } =
		useReactMediaRecorder({ audio: true });

	const toggleType = () => {
		setType((prev) => (prev === 'audio' ? 'text' : 'audio'));
	};

	const rec = () => {
		if (isRecording) {
			stopRecording();
		} else {
			startRecording();
		}
		setIsRecording(!isRecording);
	};

	const {
		data: languagesData,
		isSuccess,
		isLoading,
	} = useQuery({
		queryKey: ['LANGUAGES'],
		queryFn: () => getLanguages(),
	});

	const loadLanguages = (lan, state, setState) => {
		if (isSuccess) {
			return (
				<SelectLanguage
					data={languagesData}
					selectedLan={state}
					setSelectedLan={setState}
					defaultSelectedLan={lan}
				/>
			);
		} else if (isLoading) {
			return <p>Loading languages...</p>;
		} else {
			return (
				<p className='error'>
					ERROR!! smething happened while loading languages
				</p>
			);
		}
	};

	const handleSubmit = async () => {
		seLoadingText(true);
		const bodyGen = (to) => {
			return {
				text: fromText,
				source_language: selectedFromLan.code,
				target_language: to,
			};
		};

		const to1 = await text_translate(bodyGen(selectedToLan1.code));
		const to2 = await text_translate(bodyGen(selectedToLan2.code));
		const to3 = await text_translate(bodyGen(selectedToLan3.code));
		setToText1(to1);
		setToText2(to2);
		setToText3(to3);
		seLoadingText(false);
	};

	return (
		<div className='translate-text-page'>
			<audio
				style={{ display: 'none' }}
				src={mediaBlobUrl}
				autoPlay></audio>
			<div className='heading'>
				<div className='first'>
					<h3 className='text'>Begin Your Translation</h3>
					{loadLanguages(
						'english',
						selectedFromLan,
						setSelectedFromLan
					)}
				</div>

				<div className='audio-btn-container'>
					<button
						style={{
							display: type === 'text' ? 'flex' : 'none',
						}}
						onClick={toggleType}
						className='btn small audio-btn'>
						<Mic />
						Audio
					</button>

					<button
						style={{
							display: type === 'audio' ? 'flex' : 'none',
						}}
						onClick={toggleType}
						className='btn small text-btn'>
						<Keyboard />
						Text
					</button>
				</div>
			</div>
			<div className='translateFrom'>
				<div
					style={{
						display: type === 'text' ? 'flex' : 'none',
					}}
					className='textfrom'
					data-aos='fade-down'>
					<label htmlFor='from'>
						<h3>Enter text to be translated...</h3>
					</label>
					<textarea
						value={fromText}
						onChange={(e) => setFromText(e.target.value)}
						id='from'
						name='from'></textarea>
					<button
						disabled={loadingText}
						className='transBtn'
						onClick={() => handleSubmit()}>
						Translate
					</button>
				</div>

				<div
					style={{
						display: type === 'audio' ? 'flex' : 'none',
					}}
					className='audiofrom'
					data-aos='fade-down'>
					<div className='status'>{status}...</div>
					<div
						style={{
							boxShadow:
								isRecording && '0px 0px 102px 22px #b292c4a1',
							transform: isRecording && 'scale(1.2)',
						}}
						onClick={() => rec()}
						className='mic-container'>
						<Mic className='recmic' />
					</div>
				</div>
			</div>
			<div className='translateTo' data-aos='fade-up'>
				<div className='toItem_comtainer'>
					<div className='toItemTop'>
						{loadLanguages(
							'spanish',
							selectedToLan1,
							setSelectedToLan1
						)}
					</div>
					<div className='toItem item1'>
						{loadingText ? (
							<div className='loadingimgcon'>
								<img src={loadingani} alt='loading' />
							</div>
						) : (
							toText1
						)}
					</div>
				</div>

				<div className='toItem_comtainer'>
					<div className='toItemTop'>
						{loadLanguages(
							'japanese',
							selectedToLan2,
							setSelectedToLan2
						)}
					</div>{' '}
					<div className='toItem item2'>
						{loadingText ? (
							<div className='loadingimgcon'>
								<img src={loadingani} alt='loading' />
							</div>
						) : (
							toText2
						)}
					</div>
				</div>
				<div className='toItem_comtainer'>
					<div className='toItemTop'>
						{loadLanguages(
							'german',
							selectedToLan3,
							setSelectedToLan3
						)}
					</div>
					<div className='toItem item3'>
						{loadingText ? (
							<div className='loadingimgcon'>
								<img src={loadingani} alt='loading' />
							</div>
						) : (
							toText3
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TranslateText;
