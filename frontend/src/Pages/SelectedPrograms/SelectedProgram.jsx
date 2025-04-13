import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom';

const SelectedProgram = () => {
  const location = useLocation();  
  const navigate = useNavigate();
  const { program } = location?.state || {};  

  if (!program) return <div>Program not found</div>;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-6">
    <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg p-8">
      {/* Program Title */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">{program.title}</h1>
      
      {/* Program Image */}
      <div className="w-full flex items-center justify-center h-96 mb-6">
        <img 
          src={program.image} 
          alt={program.title} 
          className="w-1/2 h-full object-cover rounded-lg shadow-md" 
        />
      </div>

      {/* Program Subtitle */}
      <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">{program.subtitle}</h2>

      {/* Program Description */}
      <p className="text-lg text-gray-600 text-center mb-6">{program.description}</p>
      
      {/* Lorem Ipsum Text */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">More Information</h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget ante purus. 
          Pellentesque tincidunt vel leo nec volutpat. Fusce non dolor vel libero vestibulum 
          consequat. Proin laoreet mollis diam. Curabitur et nulla sit amet lorem placerat gravida.
          Sed sit amet dui ut turpis vehicula condimentum. Aliquam erat volutpat. Etiam tempus nisl 
          nec lorem posuere, ut aliquet turpis posuere.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Suspendisse potenti. Phasellus vitae leo nec odio pharetra scelerisque. Ut vel velit 
          quam. Integer vitae arcu euismod, tempor lectus a, feugiat nisl. Cras ut dui vitae urna 
          consectetur euismod. Curabitur bibendum erat euismod turpis auctor, vel auctor odio varius.
        </p>
      </div>
    </div>
    <button onClick={()=>navigate("/")} className='bg-blue-500 p-2 px-4 text-white mt-2 text-xl rounded-xl'>Back</button>
  </div>
  );
};

export default SelectedProgram;
