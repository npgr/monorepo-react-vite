import { useEffect, useState } from 'react';
import fetch from 'cross-fetch';

export const DataFetch = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    // @ts-ignore
    fetch('http://localhost:2020/api/users/20202')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setData({ error: true }));
    setData({ ini: true });
  }, []);
  return (
    <>
      <div>{JSON.stringify(data, null, 2)}</div>
      <div>lastname: {data?.lastName}</div>
    </>
  );
};
