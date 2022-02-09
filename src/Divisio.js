export default function Divisio({ num1, num2 }) {
  return <>{num2 === 0 ? <h3>No es pot dividir entre 0</h3> : num1 / num2}</>;
}
