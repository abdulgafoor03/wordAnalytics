

export default function Stats({stats}) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} type="Words" />
      <Stat number={stats.numberOfCharacters} type="Characters" />
      <Stat number={stats.instagramCharactersLeft} type="Instagram" />
      <Stat number={stats.facebookCharactersLeft} type="Facebook" />
    </section>

  )
}
function Stat({ number, type }) {
    return (
      <section className="stat">
        <span
          className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
        >
          {number}
        </span>
  
        <h2 className="second-heading">{type}</h2>
      </section>
    );
  }