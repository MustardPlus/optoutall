import Link from 'next/link';

export default function LinkBand({text, goto, color}){
    const myclass = "linkband fntOrelaga sm:text-4xl text-base "+color;
    return (
        <>
        <Link href={goto} target="_blank" rel="noreferrer">
        <div className={myclass}>
            {text}
        </div>
        </Link>
        </>
    );
}