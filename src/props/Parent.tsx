import { ChildAsFC } from './Child'

const Parent = () => {
  return <ChildAsFC onClick={() => console.log('Yeah ATEMENGUE!!')}  color="red">

  </ChildAsFC>
}

export default Parent