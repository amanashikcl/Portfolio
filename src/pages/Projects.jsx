const techIcons = {
    'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'Celery': 'https://docs.celeryq.dev/en/stable/_static/celery_512.png',
    'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'AI/ML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    'TailwindCSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
};

const projects = [
    {
        name: 'SubTracker',
        description: 'Tracks recurring subscriptions and visualizes monthly spending with dynamic doughnut charts. Scales using async task queues for automated billing alerts.',
        keyTech: ['Django', 'PostgreSQL', 'Celery', 'Redis', 'Docker'],
        github: 'https://github.com/amanashikcl/SubTracker',
    },
    {
        name: 'CityWatcher',
        description: 'CityWatcher is a centralized civic-issue management platform developed using Django, designed to streamline the reporting and resolution of urban infrastructure problems like potholes. The system utilizes a role-based architecture with three distinct modules.',
        keyTech: ['Django', 'Python'],
        github: 'https://github.com/amanashikcl/CityWatcher',
    },
];

const Projects = () => {
    return (
        <div className="max-w-5xl mx-auto px-8 py-8 space-y-6">
            {/* Header */}
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold">My Projects</h1>
                <p className="text-xl text-base-content/70">
                    Building real-world solutions with modern technologies
                </p>
            </div>

            {/* Project Cards */}
            <section className="space-y-8">
                {projects.map((project) => (
                    <div
                        key={project.name}
                        className="bg-base-200/50 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-2xl font-bold">{project.name}</h3>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-base-content/60 hover:text-white transition-colors"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                </div>
                                <p className="text-base-content/80">{project.description}</p>

                                {/* Key Tech with Icons */}
                                <div className="flex flex-wrap gap-3">
                                    {project.keyTech.map((tech) => (
                                        <div
                                            key={tech}
                                            className="flex items-center gap-2 px-3 py-1.5 bg-base-300/50 rounded-lg border border-white/5 hover:border-white/20 transition-colors"
                                        >
                                            <img
                                                src={techIcons[tech]}
                                                alt={tech}
                                                className="w-5 h-5"
                                            />
                                            <span className="text-sm text-base-content/80">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Resume Download */}
            <div className="text-center pt-8 space-y-4">
                <p className="text-xl">Want to know more about my experience?</p>
                <a
                    href="/amanashik_resume.pdf"
                    download
                    className="btn btn-primary btn-lg gap-2"
                >
                    Download Resume
                </a>
            </div>
        </div>
    );
};

export default Projects;
