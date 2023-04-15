import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>The Home page</h1>
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
}

export default HomePage;
