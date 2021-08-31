import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, title = 'Chart Beast' }) => {
  return (
    <div className='layout'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/ChartBeast_head.png' />
      </Head>
      <header className='header'>
        <Link href='/' passHref>
          <a>
            <img src="color_logo_no_background.png"
              width='675'
              height='375'
              viewBox='0 0 675 375'
              className='coin_logo'
              ></img>
          </a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;