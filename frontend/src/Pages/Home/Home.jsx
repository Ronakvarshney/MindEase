import React from 'react'
import Programs from '../Programs/Programs'
import Footer from '../../Components/Footer'
import Expert from '../Experts/Expert'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  const generateQuiz = () => {
    navigate("/generateQuestion");
  }
  return (
    <div>
       <div className="flex flex-col justify-center items-center">
      {/* Container for the image with shadow and rounded corners */}
      <div className="relative w-full max-w-6xl">
        <img
          src='/src/assets/New-banner-Crisis.png.webp'
          alt="Crisis Banner"
          className='rounded-xl shadow-2xl transform transition-transform mt-4 duration-500 hover:scale-105 w-full'
        />

        {/* Overlay text */}
        <h2 className='absolute top-20 sm:top-40 left-4 sm:left-40 text-white text-xl sm:text-3xl font-bold'>
          𝓘𝓷 𝓪 𝓓𝓮𝓵𝓲𝓶𝓶𝓪 , 𝓸𝓻 𝓲𝓷 𝓓𝓮𝓹𝓻𝓮𝓼𝓼𝓲𝓸𝓷
        </h2>
        <p className='absolute top-32 sm:top-56 left-4 sm:left-40 mt-1 text-white text-sm sm:text-lg'>
          𝓒𝓸𝓷𝓽𝓪𝓬𝓽 𝓦𝓲𝓽𝓱𝓾𝓼 - Available 24/7 𝓱𝓻𝓼
        </p>
        <button onClick={() => navigate("/chatting")} className='bg-blue-500 text-white absolute top-40 sm:top-64 left-4 sm:left-44 mt-5 rounded-lg p-2 transform transition-transform duration-300 hover:bg-blue-600'>
          Chat With AI
        </button>
        <button className='absolute text-white p-2 rounded-lg bg-blue-500 top-40 sm:top-64 left-14 sm:left-72 mt-5 transform transition-transform duration-300 hover:bg-blue-600'>
          𝒸𝒶𝓁𝓁
        </button>
      </div>

      {/* Optional text content */}
      <div className="text-center mt-6 text-white px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">Welcome to Our Crisis Management Platform</h1>
        <p className="text-base sm:text-lg">We are here to help you navigate through tough times. Explore more below.</p>
      </div>

      <Programs />

      <div className='flex flex-col sm:flex-row  gap-6 sm:gap-20 mt-6'>
        <div className="w-full sm:w-1/2">
          <img src='/src/assets/5162744.jpg' className='w-1/2 ml-40 hover:scale-110  ease-in-out transition' />
        </div>
        <div className="w-full sm:w-1/2 mr-40 ">
          <h2 className='text-3xl sm:text-4xl mt-4 sm:mt-10'>
            ᴄʜᴀᴛ ᴡɪᴛʜ ᴀɪ ᴛᴏ ɢᴇᴛ ʀɪᴅ ꜰʀᴏᴍ ᴍᴇɴᴛᴀʟ ʜᴇᴀʟᴛʜ ɪꜱꜱᴜᴇꜱ
          </h2>
          <p className='mt-4 text-base sm:text-xl'>
            🇴​​🇵​​🇪​​🇳​​🇮​​🇳​​🇬​ ​🇺​​🇵​ ​🇦​​🇧​​🇴​​🇺​​🇹​ ​🇾​​🇴​​🇺​​🇷​ ​🇲​​🇪​​🇳​​🇹​​🇦​​🇱​ ​🇭​​🇪​​🇦​​🇱​​🇹​​🇭​ ​🇮​​🇸​ ​🇹​​🇭​​🇪​ ​🇫​​🇮​​🇷​​🇸​​🇹​ ​🇸​​🇹​​🇪​​🇵 -
          </p>
          <p className='mt-2 text-base sm:text-xs'>
            AI can play a significant role in addressing mental health issues by providing accessible, personalized, and effective support.
            Through advanced algorithms and machine learning, AI-powered tools can analyze patterns in speech, behavior, and emotions, helping to detect early signs of mental health conditions like depression, anxiety, or PTSD. Chatbots and virtual therapists, available 24/7, offer immediate, non-judgmental assistance, allowing individuals to express their feelings and receive guidance at any time. AI can also aid in tracking symptoms over time, suggesting coping strategies, and offering tailored therapeutic exercises, creating a more individualized approach to mental health care. Moreover, AI-powered platforms can help reduce the stigma surrounding mental health, making it easier for people to seek help discreetly and confidently. By complementing traditional treatment methods,
            AI has the potential to revolutionize mental health care, improving access, outcomes, and overall well-being.
          </p>
          <div className='flex items-center mt-5'>
            <button onClick={() => navigate("/chatting")} className='bg-blue-500 p-2 rounded-lg text-white '>Get Started</button>
          </div>
        </div>
      </div>

      <div className='mt-8'>
        <div className='m-2 mx-6 sm:mx-20'>
          <img src='/src/assets/7749176.jpg' className='w-full' />
        </div>
      </div>

      <div className='bg-yellow-100 w-full h-auto sm:h-96 flex flex-col sm:flex-row gap-6 sm:gap-20 '>
        <div className="w-full sm:w-1/2">
          <img src='/src/assets/62e54e7732c44c5f842541c4_ezgif.com-gif-maker (14).gif' className='h-1/2 sm:h-96 ml-20' />
        </div>
        <div className="w-full sm:w-1/2 mt-10 mr-20">
          <h2 className='text-2xl sm:text-5xl ml-4 sm:ml-1  sm:mt-3'>
            ᴘʀɪᴏʀɪᴛɪᴢᴇ ʏᴏᴜʀ ᴍᴇɴᴛᴀʟ ʜᴇᴀʟᴛʜ
          </h2>
          <p className='mt-2 sm:mt-3 text-base sm:text-xl'>
            𝒯𝒶𝓀𝑒 𝓉𝒽𝑒 𝒻𝒾𝓇𝓈𝓉 𝓈𝓉𝑒𝓅. <span className='text-orange-700'>𝒞heck Your Mental Health Condition With Ai Powered Quiz</span>
          </p>
          <p className='mt-2 text-base sm:text-xs'>
            AI-powered quizzes are becoming an important tool in analyzing mental health by providing a quick, accessible,
            and non-invasive way to assess an individual's emotional and psychological state. These quizzes, often based on psychological research and diagnostic frameworks, use AI to analyze responses and identify patterns related to mental health concerns like anxiety, depression, or stress.
          </p>
          <div className=' mt-2 sm:mt-5'>
            <button className='bg-red-500 p-3 rounded-lg font-semibold text-white' onClick={() => generateQuiz()}>
              Analysis Mental Health with AI Powered Quiz
            </button>
          </div>
        </div>
      </div>
      <div>
        <Expert />

      </div>

      <div className='mt-8'>
        <div className='flex flex-col justify-center items-center'>
          <p className='w-full bg-gray-100 p-4 rounded-lg text-base sm:text-2xl font-semibold mt-4 sm:mt-6'>
            Mental health issues can affect anyone, regardless of age, background, or life circumstances...
          </p>
          <div className="flex justify-between ">
            <div>
              <video
                autoPlay
                loop
                muted

                className="max-w-full max-h-[50vh] "
              >
                <source src="/src/assets/Woman Mental illness.mp4" type="video/mp4" />

              </video>
            </div>

            <div>
              <video
                autoPlay
                loop
                muted

                className="max-w-full max-h-[50vh]  "
              >
                <source src="/src/assets/Mental health.mp4" type="video/mp4" />

              </video>
            </div>
          </div>

        </div>
      </div>



     
    </div>
    <div>
   <Footer/>

      </div>
    </div>
  
  );
};

export default Home;
