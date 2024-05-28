/** @type {import("pliny/config").PlinyConfig } */
const aboutMedata = {
  introduce: {
    title: ['안녕하세요', '백엔드 개발자', '박경우입니다.'],
    subtitle: '방문해 주셔서 감사합니다.',
    memoticon: {
      default: 'static/images/mimoticon.png',
      mobile: 'static/images/mimoticon.png',
    },
    contents: [
      {
        title: '✈️차별화된 서비스 제공을 위한 성장을 추구합니다.',
        description: '- Tech 컨텐츠를 참고하여 기술 블로그의 10+ 포스팅을 하였습니다.',
      },
      {
        title: '🔥사용자 경험을 중요하게 생각합니다.',
        description: '- 수기 업무 자동화 서비스 개편을 통한 고객 만족도 효율성을 향상 시켰습니다.',
      },
    ],
  },
  skillStacks: {
    stacks: [
      {
        name: 'Back-End',
        skills: [
          {
            name: 'JAVA',
            src: 'https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white',
            description: '',
          },
          {
            name: 'Spring Boot',
            src: 'https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white',
            description: '',
          },
          {
            name: 'Oracle',
            src: 'https://img.shields.io/badge/oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white',
            description: '',
          },
          {
            name: 'MYSQL',
            src: 'https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white',
            description: '',
          },
          {
            name: 'Apache Kafka',
            src: 'https://img.shields.io/badge/ApacheKafka-231F20?style=for-the-badge&logo=ApacheKafka&logoColor=white',
            description: '',
          },
          {
            name: 'Redis',
            src: 'https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=Redis&logoColor=white',
            description: '',
          },
        ],
      },
      {
        name: 'Front-End',
        skills: [
          {
            name: 'JavaScipt',
            src: 'https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
            description: '',
          },
          { name: 'TypeScript', src: '', description: '' },
          {
            name: 'Vue',
            src: 'https://img.shields.io/badge/vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white',
            description: '',
          },
          {
            name: 'React',
            src: 'https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black',
            description: '',
          },
          { name: 'Next.js', src: '', description: '' },
        ],
      },
      {
        name: 'Tools',
        skills: [
          {
            name: 'Git',
            src: 'https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white',
            description: '',
          },
          {
            name: 'GitHub',
            src: 'https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white',
            description: '',
          },
          { name: 'GitLab', src: '', description: '' },
          { name: 'VSCode', src: '', description: '' },
        ],
      },
      {
        name: 'Devs Ops',
        skills: [
          { name: 'GitLab CI/CD', src: '', description: '' },
          { name: 'Docker', src: '', description: '' },
          { name: 'Kubernetes', src: '', description: '' },
        ],
      },
    ],
  },
}

module.exports = aboutMedata
