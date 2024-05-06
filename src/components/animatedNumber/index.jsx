import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';

const AnimatedNumber = ({ end }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      {
        threshold: 0.9 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref}>
      {isVisible ? <CountUp start={0} end={end} duration={2.75} /> : null}
    </div>
  );
};

export default AnimatedNumber;
AnimatedNumber.propTypes = {
    end: PropTypes.number.isRequired,
}