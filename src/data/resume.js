const Resume = {
    first_name: 'Ivan',
    last_name: 'Huayraña',
    title: 'Software Engineer',
    contact: {
        phone: '+5491124599726',
        email: 'ivan@gmail.com',
        github: 'https://github.com/ivanhuay',
        address: 'Merlo, BsAs, Argentina',
    },
    profile:
        "I'm a frontend specialist with over a decade of full-stack experience, focusing on custom web solutions using React and Next.js. I create custom designed interfaces using SCSS, avoiding pre-built frameworks for a tailored user experience. My expertise extends to AWS administration, CI/CD, and headless CMS integrations (WordPress, Contentful, Strapi). I'm also skilled in integrating AI APIs like ChatGPT and Llama 2. Some of my projects include 3D environments with interactive elements using Three.js.",
    skills: ['Frontend specialist', 'Backend with nodejs or php', 'Linux enthusiast', 'Musician'],
    languages: ['JS', 'PHP', 'Python'],
    education: [
        {
            degree: 'Computer Engineering (incomplete)',
            institution: 'UnLam',
            years: '2009-2013',
        },
        {
            degree: 'High School - Chemical Technician',
            institution: 'E.E.T.n°2',
            year: '2009',
        },
    ],
    work_experience: [
        {
            position: 'Tech Lead',
            company: 'R/GA',
            period: '2019-NOW',
            technology_stack: [
                'React',
                'Nextjs',
                'Gatsby',
                'Nodejs',
                'CSS & SASS',
                'contentful',
                'WordPress',
                'GSAP',
                'AI integrations with Chatgpt, llama2, or Bedrock.',
                'Apps with React Native.',
                'CI & Deployments using AWS.',
                'Project management using Jira and similar tools.',
                'Gitlab, Github, Bitbucked.',
                'AI products development integrating chatGPT APIs and Llama2.',
                'React Native App with an interactive player experience.',
            ],
        },
        {
            position: 'Full Stack Developer',
            company: 'Grava.io',
            period: '2016-2019',
            technology_stack: [
                'Mean/Mern stack',
                'Python OpenCV, and TensorFlow',
                'Blockchain - Solidity, Hyperledger Sawtooth.',
                'Linux Administration',
                'Three.js',
                'Android, Ionic',
            ],
        },
        {
            position: 'Developer - NetSec Team',
            company: 'Despegar.com',
            period: '2016',
            technology_stack: ['Python scripting', 'Linux', 'Pentesting'],
        },
        {
            position: 'Full Stack Developer',
            company: 'Grava.io',
            period: '2014-2016',
            technology_stack: ['Linux', 'PHP', 'Nodejs', 'ccs/scss', 'Angular', 'React'],
        },
    ],
    portfolio: [
        {
            name: 'nejo-json-viewer',
            description:
                "Nejo is a React component that renders JSON objects in a pretty and customizable way, perfect for enhancing your application's data visualization",
            github_repo: 'https://github.com/ivanhuay/nejo-json-viewer',
            npm: 'https://www.npmjs.com/package/nejo-json-viewer',
        },
        {
            name: 'threejs-animation-example',
            description:
                'This project demonstrates a 3D visualization using Three.js, featuring a dynamic, animated landscape rendered with WebGL.',
            github_repo: 'https://github.com/ivanhuay/threejs-animation-example',
            demo: 'https://ivanhuay.github.io/threejs-animation-example/',
        },
        {
            name: 'ivanhuay.ar',
            description:
                'Welcome to my personal website repository! This project showcases my resume in a developer-friendly, JSON-like format using Next.js and my custom library, nejo-json-viewer.',
            github: 'https://github.com/ivanhuay/ivanhuay-site',
        },
    ],
};

export default Resume;
