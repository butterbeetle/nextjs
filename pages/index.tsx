import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>The Home page</h1>
      <ul>
        <h1>Section03</h1>
        <li>
          <Link href="/section03/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/section03/clients">Clients</Link>
        </li>
        <h1>Section04</h1>
        <li>
          <Link href="/section04/events">events</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
