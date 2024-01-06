// eslint-disable-next-line react/prop-types
export default function TodoItem({ completed, title }) {
  return <li className={completed ? "strike-through" : undefined}>{title}</li>;
}
