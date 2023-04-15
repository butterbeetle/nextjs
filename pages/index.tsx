import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>Section Select</h1>
      <ul>
        <li>
          <Link href="/section03">Section03</Link>
        </li>
        <li>
          <Link href="/section04">Section04</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
