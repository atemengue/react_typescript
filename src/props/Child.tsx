interface ChidlProps {
  color: string;
  onClick: () => void;
}

export const Child  = ({ color, onClick }: ChidlProps) => {
  return <div>{color}
  <button onClick={onClick}>Click me</button>
  </div>
}

export const ChildAsFC: React.FC<ChidlProps> = ({ color, onClick })=> {
  return <div>{color}
  <button onClick={onClick}>Click me</button>
  </div>
}
