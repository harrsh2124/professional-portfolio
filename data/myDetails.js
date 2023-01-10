const getExperience = () => {
    const joiningDate = new Date(2019, 8, 1).getFullYear();
    const today = new Date().getFullYear();

    return today - joiningDate;
};

const MyData = {
    name: 'Harrsh Patel',
    description: 'Senior Software Developer',
    email: 'me@harrsh.com',
    call: '+91 9099976321',

    socialLinks: [
        {
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/harrsh2124'
        },
        {
            title: 'GitHub',
            url: 'https://github.com/harrsh2124'
        },
        {
            title: 'Instagram',
            url: 'https://instagram.com/harrsh2124'
        },
        {
            title: 'Dev.to',
            url: 'https://dev.to/harrsh2124'
        },
        {
            title: 'Resume',
            url: 'resume.pdf'
        }
    ],

    aboutMe: {
        totalExperience: getExperience(),
        blogLink: 'harsh2124.wordpress.com',
        details:
            'Experienced Software Developer, adept in bringing forth expertise in design, installation, testing, and maintenance of software systems. Equipped with a diverse and promising skill-set. Proficient in various platforms, languages, and embedded systems. Experienced with the latest cutting-edge development tools and procedures. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team. Bringing forth expertise in the design, installation, testing, and maintenance of web systems. Able to effectively self-manage during independent projects, as well as collaborate in a team setting. Knowledgeable in the user interface, testing, and debugging processes.'
    },

    techStack: [
        'React JS',
        'Next JS',
        'Express JS',
        'Mongo DB',
        'MySQL',
        'Linux',
        'AWS EC2',
        'Context API',
        'Prisma'
    ],

    workHistory: [
        {
            position: 'Full-stack Web Developer',
            company: 'Excellent WebWorld Pvt. Ltd.',
            companyURL: 'https://www.excellentwebworld.com/',
            place: 'Ahmedabad, Gujarat',
            duration: 'April 2022 - Present',
            details: [
                'Worked on a desktop app for IoT devices to measure ECG of patients.',
                'Worked on server and admin panel for a security company. Worked with a complete remote team and managing the server and admin panel effectively.',
                'Worked as a project technical lead for online salon services booking application, where I managed a team of backend and frontend developers. I Bootstrapped an admin panel for back office management and a server for the admin panel, app for customers and app for service providers.'
            ]
        },
        {
            position: 'Front-end Web Developer',
            company: 'TatvaSoft',
            companyURL: 'https://www.tatvasoft.com/',
            place: 'Ahmedabad, Gujarat',
            duration: 'May 2021 - April 2022',
            details: [
                'Worked on international Ed-Tech project and Transport management project.',
                'Worked to meet client deadlines.',
                'Effectively multi-tasked and worked well with internal and external teams.',
                'Helped to achieve a consistent look and visual theme across the website by promoting uniform fonts, formatting, images, and layout.',
                'Effectively multitasked and worked well with internal and external teams.',
                'Worked with a proficient understanding of code conversion tools.'
            ]
        },
        {
            position: 'Front-end Web Developer',
            company: 'SoftVan Pvt. Ltd.',
            companyURL: 'https://softvan.in/',
            place: 'Ahmedabad, Gujarat',
            duration: 'July 2020 - May 2021',
            details: [
                'Remained dedicated to emerging technology and the latest digital marketing concepts.',
                'Worked with a proficient understanding of code conversion tools.',
                'Worked to assess competing websites in regards to content, look, and feel.',
                'Worked to meet client deadlines.',
                'Successfully identified, diagnosed, and fixed website problems, including broken links, typographical errors, and formatting issues.'
            ]
        },
        {
            position: 'Python Developer Intern',
            company: 'Crest Data Systems Pvt. Ltd.',
            companyURL: 'https://www.crestdatasys.com/',
            place: 'Ahmedabad, Gujarat',
            duration: 'August 2019 - April 2020',
            details: [
                'Created, communicated, and managed project plans.',
                'Collaborated to create strategic initiatives to design, code, and test solutions.',
                'Effectively coded software changes and alterations based on specific design specifications.'
            ]
        }
    ]
};

export default MyData;
