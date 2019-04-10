import React from 'react';
const Projects = () => {
    return (
        <section>
            <div className="projects__container">
                <h2 className="projects__container-title">Projects</h2>
                <div className="projects__container-inner">
                    <div className="projects-1">
                        <a
                            href="http://makcatering.pl/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="drugi">
                                <span>MAK catering</span>
                            </div>
                        </a>
                    </div>
                    <div className="projects-2">
                        {' '}
                        <a
                            href="/public/snake.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="drugi1">
                                <span>SNAKE</span>
                            </div>
                        </a>
                    </div>
                    <div className="projects-3">
                        <div className="drugi2">
                            <span>Under Construction</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
