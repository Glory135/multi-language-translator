import { Keyboard, Mic, VolumeUp } from '@mui/icons-material'
import React, { useState } from 'react'
import { useReactMediaRecorder } from "react-media-recorder";


const TranslateText = () => {
    const [type, setType] = useState('text')
    const [isRecording, setIsRecording] = useState(false)

    const { status, startRecording, stopRecording, mediaBlobUrl } =
        useReactMediaRecorder({ audio: true })

    const toggleType = () => {
        setType(prev => prev === 'audio' ? 'text' : 'audio');
    }
    const rec = () => {
        if (isRecording) {
            stopRecording()
        } else {
            startRecording()
        }
        setIsRecording(!isRecording)
    }

    return (
        <div className='translate-text-page'>
            <audio style={{ display: 'none' }} src={mediaBlobUrl} autoPlay></audio>
            <div className="heading">
                <div className="first">
                    <h3 className="text">
                        Begin Your Translation
                    </h3>
                    <select>
                        <option value="">English</option>
                        <option value="">English</option>
                        <option value="">English</option>
                    </select>
                </div>

                <div className="audio-btn-container">
                    <button style={{
                        display: type === 'audio' ? 'flex' : 'none'
                    }} onClick={toggleType} className='btn small audio-btn'>
                        <Mic />
                        Audio
                    </button>

                    <button style={{
                        display: type === 'text' ? 'flex' : 'none'
                    }} onClick={toggleType} className='btn small text-btn'>
                        <Keyboard />
                        Text
                    </button>
                </div>
            </div>
            <div className="translateFrom">
                <div
                    style={{
                        display: type === 'text' ? 'flex' : 'none'
                    }}
                    className="textfrom">
                    <label htmlFor='from'>
                        <h3>
                            Enter text to be translated...
                        </h3>
                    </label>
                    <textarea id='from' name="from" ></textarea>
                </div>

                <div
                    style={{
                        display: type === 'audio' ? 'flex' : 'none',
                    }}
                    className="audiofrom">
                    <div className="status">
                        {status}...
                    </div>
                    <div
                        style={{
                            boxShadow: isRecording && '0px 0px 102px 22px #b292c4a1',
                            transform: isRecording && 'scale(1.2)'
                        }}
                        onClick={() => rec()} className="mic-container">
                        <Mic className='recmic' />
                    </div>
                </div>

            </div>
            <div className="translateTo">
                <div className="toItem_comtainer">
                    <div className="toItemTop">
                        <select>
                            <option value="">English</option>
                            <option value="">English</option>
                            <option value="">English</option>
                        </select>
                        <VolumeUp className='speaker' />
                    </div>
                    <div className="toItem item1">
                    </div>
                </div>

                <div className="toItem_comtainer">
                    <div className="toItemTop">
                        <select>
                            <option value="">English</option>
                            <option value="">English</option>
                            <option value="">English</option>
                        </select>
                        <VolumeUp className='speaker' />
                    </div> <div className="toItem item2"></div>
                </div>
                <div className="toItem_comtainer">
                    <div className="toItemTop">
                        <select>
                            <option value="">English</option>
                            <option value="">English</option>
                            <option value="">English</option>
                        </select>
                        <VolumeUp className='speaker' />
                    </div><div className="toItem item3"></div>
                </div>

            </div>
        </div>
    )
}

export default TranslateText