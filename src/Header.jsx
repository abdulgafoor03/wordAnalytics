import Background from "./components/Background";


export default function Header() {
  return (
    <header>
        <Background/>
        <h1 className="first-heading">
        Word<span className="first-heading--thin">Analytics</span>
      </h1>
    </header>
  )
}
