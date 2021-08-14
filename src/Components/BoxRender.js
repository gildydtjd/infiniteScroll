import React, { useState, useEffect } from 'react';
import Box from './Box';
import './boxRender.css';
import axios from 'axios';

export default function BoxRender() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [target, setTarget] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(target);

  function countUp() {
    setCount(count + 1);
  }

  useEffect(() => {
    if (loading === true) {
      countUp();
    } else {
      async function responseData() {
        const axiosData = await axios.get(
          'https://jsonplaceholder.typicode.com/comments?_page=' +
            count +
            '_limit=10'
        );
        const appendData = data.concat(axiosData.data);
        setData(appendData);
      }
      responseData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(_onIntersect, { threshold: 0 });
      observer.observe(target);
    }

    return () => observer && observer.disconnect();
  }, [target]);

  const _onIntersect = ([entry]) => {
    if (entry.isIntersecting) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  };

  const BoxRender = data.map((box, index) => {
    return (
      <div className="boxrender">
        <Box key={index + 'box'} data={box}></Box>
      </div>
    );
  });

  return (
    <div>
      {BoxRender}
      <div ref={setTarget} style={{ height: '50px' }}>
        {loading ? <h2>...loading</h2> : ''}
      </div>
    </div>
  );
}
