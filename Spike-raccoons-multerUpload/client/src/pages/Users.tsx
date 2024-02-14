/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from 'react'
import { User } from '../@types/users';
import FindAFriend from '../components/FindAFriend';
import baseUrl from '../utils/baseurl';

function App() {
  const [allUsers, setAllUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchAllUsers = () => {
      fetch(`${baseUrl}/api/users/all`)
        .then((res) => res.json())
        .then((res) => {
          const foundUsers = res as User[];
          setAllUsers(foundUsers);

        })
        .catch(e => console.log(e));
    }
    fetchAllUsers()
  }, []);

  return (
    <div>
      <FindAFriend />
      <h2>Here are all users:</h2>
      { allUsers.map((user) => {
        return <div key={user._id}>
          <p>{user.email}</p>
        </div>
      }) }
    </div>
  )
}

export default App
