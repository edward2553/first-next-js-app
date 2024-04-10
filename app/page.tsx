import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Buenas tardes'
}

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
       <span className='text-5xl'>Hola mundo</span>
    </main>
  );
}
