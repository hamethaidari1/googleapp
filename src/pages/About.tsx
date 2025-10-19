import { Code, Palette, Rocket, Award } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'Supabase'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Docker'] },
    { category: 'Other', items: ['UI/UX Design', 'SEO', 'Content Writing', 'Agile'] },
  ];

  const experience = [
    {
      title: 'Senior Web Developer',
      company: 'Tech Company',
      period: '2021 - Present',
      description:
        'Leading frontend development for enterprise applications, mentoring junior developers, and implementing best practices.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Inc.',
      period: '2019 - 2021',
      description:
        'Built and maintained web applications using React, Node.js, and PostgreSQL. Collaborated with designers and product managers.',
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '2017 - 2019',
      description:
        'Developed responsive websites and web applications for various clients. Gained experience in modern web technologies.',
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Published Writer',
      description: 'Over 50 technical articles published on various platforms',
    },
    {
      icon: Code,
      title: 'Open Source Contributor',
      description: 'Active contributor to popular open-source projects',
    },
    {
      icon: Rocket,
      title: 'Project Success',
      description: 'Successfully delivered 30+ projects on time and within budget',
    },
    {
      icon: Palette,
      title: 'Design Award',
      description: 'Winner of Best UI/UX Design Award 2023',
    },
  ];

  return (
    <>
      <SEO
        title="About Me"
        description="Learn more about my background, skills, and experience as a web developer and content creator."
        keywords="about, skills, experience, web developer, portfolio"
      />

      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About Me</h1>
            <p className="text-xl text-gray-600">
              Passionate developer, creative thinker, and lifelong learner
            </p>
          </div>

          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8 space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Hello, I'm Your Name</h2>
                  <p className="text-gray-600 leading-relaxed">
                    I'm a passionate web developer with over 5 years of experience creating beautiful,
                    functional, and user-friendly websites and applications. My journey in web development
                    started with a curiosity about how websites work, and it has evolved into a fulfilling
                    career where I get to solve complex problems and bring ideas to life.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    I specialize in modern web technologies, with a focus on React, TypeScript, and the
                    latest frontend frameworks. I'm also experienced in backend development, working with
                    Node.js and databases like PostgreSQL. Beyond coding, I enjoy writing technical articles
                    and sharing my knowledge with the developer community.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    When I'm not coding, you'll find me reading tech blogs, experimenting with new
                    technologies, or contributing to open-source projects. I believe in continuous learning
                    and staying up-to-date with the latest industry trends.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillSet) => (
                <div key={skillSet.category} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{skillSet.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience</h2>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <span className="text-sm text-gray-500 font-medium">{job.period}</span>
                  </div>
                  <p className="text-blue-600 font-medium mb-3">{job.company}</p>
                  <p className="text-gray-600 leading-relaxed">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
