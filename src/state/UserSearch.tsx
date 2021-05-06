import { useState } from "react";

const users = [
  { name: 'Regis', age: 27 },
  { name: 'Alex', age: 20 },
  { name: 'Micheal', age: 50 },
]



const UserSearch: React.FC = () => {
  const [name, setName] = useState('')

  const onClick = () => { }
  return <div>User Search
    <input value={name} onChange={e => setName(e.target.value)} />
    <button onClick={onClick} >Find User</button>
  </div>
}

export default UserSearch;