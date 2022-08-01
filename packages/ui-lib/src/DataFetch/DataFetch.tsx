import { useEffect, useState } from 'react';

export const DataFetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // @ts-ignore
    fetch('http://localhost:2020/api/users/20202')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div>{JSON.stringify(data, null, 2)}</div>
    </>
  );
};
