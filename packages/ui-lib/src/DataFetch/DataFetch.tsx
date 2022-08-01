import { useEffect, useState } from 'react';

const DataFetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // @ts-ignore
    fetch('http://localhost:2020/api/users/20202').then((res) => setData(res.data));
  }, []);
  return <div>{JSON.stringify(data)}</div>;
};

export default DataFetch;
