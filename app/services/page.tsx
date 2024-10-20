import React from 'react';

const studyServicesList = [
  'Tutoring Services',
  'Study Groups',
  'Career Counseling',
  'Academic Workshops',
  'Online Resources',
];

const Services = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Study Services</h2>
      <p className="mb-6 text-gray-600 text-center">
        We offer a variety of services to support your academic journey:
      </p>
      <ul className="list-disc list-inside">
        {studyServicesList.map((service, index) => (
          <li key={index} className="text-gray-800 mb-2">
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
