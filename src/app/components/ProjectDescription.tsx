import React from 'react';

interface ProjectDescriptionProps {
    projectName: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ projectName }) => {
    // Common full-stack MERN description
    const fullStackDescription = (
        <div className="space-y-4">
            <p className="text-white mb-2">
                Developed the full-stack application using <span className="font-semibold text-green-400">MERN stack</span> (MongoDB, Express.js, React.js, Node.js) ensuring robust backend and dynamic frontend.
            </p>
            <p className="text-white mb-2">
                Built scalable front-end with <span className="font-semibold text-blue-400">React & Next.js</span> and styled with <span className="font-semibold text-teal-400">Tailwind CSS</span> for modern responsive UI.
            </p>
            <p className="text-white mb-2">
                Managed global state efficiently using <span className="font-semibold text-red-500">Redux Toolkit</span> and handled API integration with <span className="font-semibold text-purple-500">Axios</span>.
            </p>
            <p className="text-white mb-2">
                Implemented <span className="font-semibold text-yellow-400">JWT-based authentication</span> and secure route protection to ensure data security.
            </p>
            <p className="text-white mb-2">
                Optimized performance through lazy loading, code splitting, and reusable component architecture.
            </p>
            <p className="text-white mb-2">
                Leveraged <span className="font-semibold text-gray-300">Git & GitHub</span> for version control and collaborative development.
            </p>
            <p className="text-white mb-2">
                Integrated <span className="font-semibold text-yellow-500">Firebase</span> and <span className="font-semibold text-green-500">MongoDB</span> for real-time database and backend operations.
            </p>
            <p className="text-white mb-2">
                Ensured cross-browser compatibility, responsive design, and seamless user experience across web and mobile devices.
            </p>
        </div>
    );

    // If you want project-specific tweaks
    switch (projectName) {
        case "Pieduet":
            return (
                <div>
                    {fullStackDescription}
                    <p className="text-white mb-2">
                        Spearheaded LMS-specific architecture and implemented learning modules with dynamic content delivery.
                    </p>
                </div>
            );
        case "PievCore":
            return (
                <div>
                    {fullStackDescription}
                    <p className="text-white mb-2">
                        Built interactive engineering forum features: Q&A, polls, tech-news, and job/startup board for Embedded Systems & IoT enthusiasts.
                    </p>
                </div>
            );
        default:
            return fullStackDescription;
    }
};

export default ProjectDescription;
