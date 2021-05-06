import { useEffect, useRef, useState } from "react";

const users = [
  { name: 'Regis', age: 27 },
  { name: 'Alex', age: 20 },
  { name: 'Micheal', age: 50 },
]

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null >(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: String, age: number } | undefined >()

  useEffect(() => {
    // tres important pour la grade
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus()
  }, [])

  const onClick = () => { 
    const foundUser = users.find(user => {
      return user.name === name
    })

   setUser(foundUser)

  }

  return <div>User Search
    <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
    <button onClick={onClick} >Find User</button>
    <div>
      {user && user.name}
      {user && user.age}
    </div>
  </div>
}

export default UserSearch;