import React from 'react';
import { useNavigate } from 'react-router-dom';

const Programs = () => {

  const navigate = useNavigate();
  const programs = [
    {
      title: "HopeLine",
      subtitle: "A 24/7 Phone Helpline",
      description: "24×7 hotline dedicated to providing confidential and compassionate assistance to individuals in distress.",
      image : "/src/assets/MINDLINE.png.webp"
    },
    {
      title: "Compassion Classroom",
      subtitle: "Volunteers and Counselor training",
      description: "Training programs tailored to equip volunteers with necessary skills for student counseling and mental health support.",
      image : "/src/assets/training.jpg.webp"
    },
    {
      title: "MindChat",
      subtitle: "Chat with Volunteers via MindMantra",
      description: "Mental health support via app and web platform, offering empathy, guidance, and resources instantly.",
      image : "/src/assets/MINDLINE.png.webp"
    },
    {
      title: "Mind Matters",
      subtitle: "Spreading Awareness",
      description: "Mental health camps, sessions to educate, destigmatize, and empower individuals in schools, corporations and communities.",
      image : "/src/assets/hope-talk.png.webp"
    },
    {
      title: "Brighter Tomorrow",
      subtitle: "Suicide Prevention Program",
      description: "Reducing suicide rates through education, support, open dialogue, & access to mental health resources and services.",
      image : "/src/assets/Suicide.jpg.webp"
    },
    {
      title: "Prideful Minds",
      subtitle: "LGBTQ Support Program",
      description: "Providing resources & advocacy to empower LGBTQ individuals, fostering inclusion, acceptance, & well-being.",
      image : "/src/assets/Suicide.jpg.webp"
    },
  ];

  return (
    <div className="min-h-screen  rounded-lg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">How Can We Help?</h2>
        
        <div className="grid grid-cols-1 p-4 rounded-lg sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              onClick={()=>navigate(`/programs/${program.title}` , {state : {program}})}
              key={index}
              className="bg-blue-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition duration-300 ease-in-out"
            >
              <img src={program.image}/>
              <h3 className="text-xl font-semibold mt-4 text-gray-800">{program.title}</h3>
              <h4 className="text-md text-gray-500 text-orange-600">{program.subtitle}</h4>
              <p className="mt-4 text-gray-700">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex items-center justify-center'>
      <button onClick={()=>navigate("/donate")} className='bg-blue-500 text-white p-2 mt-5'>Donate Now</button>

      </div>
    </div>
  );
};

export default Programs;
