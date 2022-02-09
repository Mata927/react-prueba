export default function Garage({ cotxe }) {
  return (
    <>
      <h1>El teu Garage</h1>
      {cotxe.length > 0 ? (
        <ul>
          {cotxe.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      ) : (
        <p>El teu Garage esta buit </p>
      )}
    </>
  );
}
