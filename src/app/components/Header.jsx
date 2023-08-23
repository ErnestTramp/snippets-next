import Link from 'next/link';

export default function Header({page, nav}) {
    return (
        <header>
            <h1>Snippets Next</h1>
            <Link href={"/" + nav} className="MuiButton">{page}</Link>
        </header>
    )
}