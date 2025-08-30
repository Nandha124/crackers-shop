import React, { useState, useEffect, useRef } from 'react';

const CounterComponent = () => {
  const [countersVisible, setCountersVisible] = useState(false);
  const containerRef = useRef(null);
  
  // Counter data
  const counterData = [
    { icon: 'eye', num: 10, text: 'Experience' },
    { icon: 'heart', num: 1000, text: 'Likes' },
    { icon: 'phone', num: 300, text: 'Calls' },
    { icon: 'user', num: 400, text: 'Users' }
  ];

  // Intersection Observer to detect when container is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div>
      {/* Header with placeholder text */}
 
      
      {/* Counter section */}
     
      <div 
        ref={containerRef}
        className="flex flex-col items-center min-h-[20vh] bg-gray-900 px-4 md:px-12 py-8 gap-10"
      >
            <h1 className='text-white text-3xl font-bold'>GVD CRACKERS</h1>
        <div className="flex flex-col md:flex-row justify-between items-center w-full h-full gap-6 md:gap-0">
       
          {counterData.map((item, index) => (
            <CounterBox 
              key={index}
              icon={item.icon}
              num={item.num}
              text={item.text}
              animate={countersVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Counter Box Component
const CounterBox = ({ icon, num, text, animate }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (animate) {
      let start = 0;
      const end = parseInt(num, 10);
      const duration = 2000; // 2 seconds total
      const incrementTime = duration / end;
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [animate, num]);

  // Get the appropriate icon class
  const getIconClass = () => {
    switch(icon) {
      case 'eye': return 'fa-solid fa-eye';
      case 'heart': return 'fa-solid fa-heart';
      case 'phone': return 'fa-solid fa-phone';
      case 'user': return 'fa-solid fa-user';
      default: return 'fa-solid fa-circle';
    }
  };

  return (
    <div className="w-full md:w-[calc(25%-30px)] bg-gray-800 rounded-lg p-6 md:p-8 flex flex-col items-center justify-evenly text-white">
      <div className="icon text-4xl md:text-5xl text-purple-300 mb-4">
        <i className={getIconClass()}></i>
      </div>
      <div className="num text-4xl md:text-5xl font-bold mb-2 text-red-600">
        {count}
      </div>
     <div>{text}</div>
    </div>
  );
};

export default CounterComponent;