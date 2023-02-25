import { useState } from 'react'
import {Configuration, OpenAIApi } from "openai ";
import './App.css'

function App() {
   const [promt, setPromt] = useState("");
   const [link, setLink] = useState('');

  const configuration = new Configuration({
    apiKey: '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',
  });
  const openai = new OpenAIApi(configuration);
  const generateImage=async()=>{
    const res=await openai.createImage({
      prompt: promt,
      n:1,
      size:"1024x1024"
    });
    setLink(res.data.data[0].url);
  }
  
  return (
    <div className="App">
      <h3>Generate Image uing OpenAi Api</h3>
      <input placeholder='Type Something to Generate Image' type="text" onChange={(e)=>{setPromt(e.target.value)}} className='text-input'/>
       <button className='result' onClick={generateImage}>Generate Image</button>
       {link.length>0?<img className='output' src={link} alt="" />:<></> }
    </div>
  )
}

export default App
