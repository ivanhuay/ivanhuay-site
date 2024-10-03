import { Roboto, Open_Sans } from 'next/font/google';

import './globals.scss';

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-roboto',
});

const openSans = Open_Sans({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-open-sans',
});

export const metadata = {
    title: 'Ivan Huayrana',
    description: 'Just a resume in json format',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${roboto.variable} ${openSans.variable}`}>{children}</body>
        </html>
    );
}
