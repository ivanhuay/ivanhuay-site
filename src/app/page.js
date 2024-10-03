import Nejo from 'nejo-json-viewer';

import Resume from '../data/resume';

import styles from './page.module.scss';

export default function Home() {
    return (
        <div className={styles.page}>
            <nav className={styles.nav}>
                <a className={styles.logo} href="/">
                    HELLO!
                </a>
                <div className={styles.right}>
                    <a href="/files/resume-2024-v2.pdf">PDF Resume</a>
                    <a href="https://github.com/ivanhuay">Linkedin</a>
                    <a href="https://www.linkedin.com/in/ivanhuay/">Github</a>
                </div>
            </nav>
            <main className={styles.main}>
                <h1>Ivan Huayraña</h1>
                <div className={styles.resume}>
                    <Nejo jsonData={Resume} className={styles.jsonViewer} />
                </div>
                <div className={styles.madeWith}>
                    Made with{' '}
                    <a href="https://www.npmjs.org/package/nejo-json-viewer">nejo-json-viewer</a>.
                </div>
            </main>
        </div>
    );
}
