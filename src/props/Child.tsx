interface ChidlProps {
  color: string;
}

export const Child  = ({ color }: ChidlProps) => {
  return <div>{color}</div>
}

export const ChildAsFC: React.FC<ChidlProps> = ({ color })=> {
  return <div>{color}</div>
}
