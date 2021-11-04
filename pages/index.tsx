import type { NextPage } from 'next';
import React from 'react';
import Link from 'next/link';

const Home: NextPage = () => {
  return(
    <div className='bg-green-300'>
      <p>pagina index</p>
      <Link href='/admin/usuarios'>
        <a className='cursor-pointer'>ir admin usuarios</a>
      </Link>
    </div>
  );
};

export default Home
