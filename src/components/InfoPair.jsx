import "./InfoPair.css";

function InfoPair({ title, text }) {
  return (
    <div className="info-pair">
      <p className="info-pair__title">{title}</p>
      <p>{text}</p>
    </div>
  );
}

export default InfoPair;
