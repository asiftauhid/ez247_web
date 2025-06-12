import React from 'react';
import Image from 'next/image';

const Background = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* small blue gradient top-left */}
      <div className="absolute left-[10%] top-[20%]">
        <Image
          src="/gradients/Ellipse1.png"
          alt="Blue gradient"
          width={200}
          height={200}
          className="opacity-60"
        />
      </div>
      {/* Large blue gradient bottom-right */}
      <div className="absolute right-[5%] bottom-[10%]">
        <Image
          src="/gradients/Ellipse2.png"
          alt="Blue gradient"
          width={600}
          height={600}
          className="opacity-60"
        />
      </div>
      {/* Small blue gradient top-right */}
      <div className="absolute right-[15%] top-[10%]">
        <Image
          src="/gradients/Ellipse3.png"
          alt="Small blue gradient"
          width={200}
          height={200}
          className="opacity-60"
        />
      </div>
      {/* yellow gradient middle-right */}
      <div className="absolute right-[70%] bottom-[40%]">
        <Image
          src="/gradients/Ellipse4.png"
          alt="yellow gradient"
          width={150}
          height={150}
          className="opacity-60"
        />
      </div>
    </div>
  );
};

export default Background; 