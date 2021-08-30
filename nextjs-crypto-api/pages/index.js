import Head from 'next/head';
import Coins from '../components/Coins';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chart Beast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchBar type="text" placeholder="Search"/>
      <Coins />
    </div>
  );
};
