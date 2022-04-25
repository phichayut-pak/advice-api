import Card from "./components/UI/Card";
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  
  const [id, setId] = useState('')
  const [quote, setQuote] = useState('')

  const fetchQuote = async () => {
    const response = await axios.get('https://api.adviceslip.com/advice')
    const id = response.data.slip.id
    const quote = response.data.slip.advice

    setId(id)
    setQuote(quote)
  }

  useEffect(() => {
    fetchQuote()
  }, [])
  

  return (
    <div className="bg-dark-blue min-h-screen flex justify-center items-center">
      <div className="w-11/12 desktop:w-[45%] ">
        <Card className={"rounded-2xl mb-32"}>
          <div className="mt-10 first-letter:my-3 tracking-widest text-neon-green text-md font-['Poppins']">
            ADVICE #{id}
          </div>
          <div className="mt-6 text-light-cyan font-manrope font-extrabold text-[28px] text-center px-20 desktop:px-5">
            {quote !== "" && `"${quote}"`}
          </div>
          <div className="mt-8">
            {window.innerWidth >= 1440 && <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg> }
            {window.innerWidth < 1440 && <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg> }
          </div>

          <div className="relative group top-8 rounded-full" onClick={fetchQuote}>
            {window.innerWidth >= 1400 && <div className="absolute w-16 h-16 rounded-full blur-md transition duration-200 ease-in group-hover:bg-neon-green"></div>}
            <button className="relative w-16 h-16 bg-neon-green rounded-full">
            <svg className="absolute top-1/2 left-1/2 transition duration-200 ease-in group-hover:rotate-360" style={{transform: 'translate(-50%, -50%)'}} width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
