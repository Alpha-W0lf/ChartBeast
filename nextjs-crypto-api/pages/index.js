import Head from 'next/head';
import CoinList from '../components/CoinList';
import SearchBar from '../components/SearchBar';
import Layout from '../components/Layout';

export default function Home({ filteredCoins }) {
  console.log(filteredCoins);
  return (
    <Layout>
      <Head>
        <title>Chart Beast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchBar type="text" placeholder="Search"/>
      <CoinList filteredCoins={filteredCoins} />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false"
  );

  const filteredCoins = await res.json()

  return {
    props: {
      filteredCoins
    }
  }
}