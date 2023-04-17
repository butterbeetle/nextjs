import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>Section Select</h1>
      <ul>
        <li>
          <Link href="/section03">Section 03</Link>
        </li>
        <li>
          <Link href="/section04">Section 04</Link>
        </li>
        <li>
          <Link href="/section05">Section 05</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
