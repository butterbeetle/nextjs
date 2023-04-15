import Link from "next/link";

const Section = () => {
  return (
    <div>
      <h1>Section03</h1>
      <ul>
        <li>
          <Link href="/section03/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/section03/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
};
export default Section;
