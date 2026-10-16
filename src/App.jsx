import { useEffect } from 'react';
import { useState } from 'react';
import Card from './components/Card';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await res.json();

        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  function filter(sourceData, searchName = '') {
    return sourceData.filter((v) =>
      v.name.toLowerCase().includes(searchName.toLowerCase()),
    );
  }

  return (
    <div className="m-5">
      <div className="bg-cyan-200 border-3 border-cyan-700 rounded-lg p-4">
        <h1 className="text-2xl font-bold text-cyan-700">Hasil Data User</h1>
        <hr className="my-4 text-cyan-300" />
        {data.length > 0 ? (
          filter(data, '').map((v, i) => {
            return (
              <Card variant="var2" key={i}>
                {v.name}
              </Card>
            );
          })
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>
    </div>
  );
}
