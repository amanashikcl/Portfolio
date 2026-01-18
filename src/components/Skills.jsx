const skills = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'Django REST', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/djangorest/djangorest-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Celery', icon: 'https://docs.celeryq.dev/en/stable/_static/celery_512.png' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
];

const Skills = () => {
    return (
        <div className="py-8 px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
                {skills.map((skill, index) => (
                    <div
                        key={skill.name}
                        className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-base-200/50 hover:bg-base-200 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-24 h-24 transition-transform duration-300 group-hover:rotate-12"
                        />
                        <span className="text-lg font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
