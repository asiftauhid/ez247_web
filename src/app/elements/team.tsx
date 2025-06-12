import Image from 'next/image';
import Link from 'next/link';

const Team = () => {
  const teamMembers = [
    {
      name: 'Zhifei (Maggie) Li',
      role: 'CEO, Co-Founder',
      image: '/portraits/zhifei.png',
      linkedin: 'https://www.linkedin.com/in/zhifei-li-6b988b253/'
    },
    {
      name: 'Sohaila Mohammad',
      role: 'CTO, Co-Founder',
      image: '/portraits/sohaila.jpg',
      linkedin: 'https://www.linkedin.com/in/sohaila-abdulsattar-mohammed/'
    },
    {
      name: 'Prof. Yi Fang',
      role: 'Founder',
      image: '/portraits/fang.png',
    },
    {
      name: 'Zhenhua Li',
      role: 'Director of Development, Co-Founder',
      image: '/portraits/zhenhua.jpg',
    }
  ];

  return (
    <section id="team" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-[2.5rem] font-bold text-gray-900 mb-10">Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-50 rounded-3xl p-8 shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden">
            <div className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              {member.linkedin && (
                <Link 
                  href={member.linkedin}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team; 