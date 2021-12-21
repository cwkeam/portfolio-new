module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Chan Woo!',
    // Main Site Title
    title: `Chan Woo! | AI Research to Production`,
    // Description that goes under your name in main bio
    description: `🇰🇷🇨🇳🇺🇸 Born in Korea, raised in Shanghai, attending Williams College for college. My main research interests are in NLP and Computer Vision, especailly in relation to education technologies. For production services, I usually build solutions with React & Docker. Contact me at ck15@williams.edu.`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/codeandproduce`,
    medium: `https://medium.com/machine-learning-intuition`,
    instagram: `https://www.instagram.com/cwkeam/`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/chanwkim/`,
    // Content of the About Me section
    // about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis porro cumque ea error ab voluptatem. Temporibus adipisci exercitationem similique itaque quibusdam laudantium, qui molestiae quas, aut amet animi id.`,
    // // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    news: [
      {
        name: "Emergent Systems Colloquium @ Williams College",
        link: "https://csci.williams.edu/colloquium-emergent-system/",
      },
      {
        name: "My GAN-based animation presented at Peak Performances @ Montclair State University!",
        link: "https://www.peakperfs.org/event/grand-band/2020-02-14/"
      },
      {
        name: "Hackathon spotlight: My chat with WebHacks winner Milky 🙌",
        link: "https://medium.com/manifoldco/hackathon-spotlight-my-chat-with-webhacks-winner-milky-505dea8ddc9f"
      }
    ],
    projects: [
      {
        name: '[Project] nlp.1theta.com',
        image: "/images/nlp1theta.png",
        description:
          `This multipage streamlit app displays various NLP engines I developed in my free time. Its main concept is DLTR: Do Little Things Right, attempting to reliably master simpler and specific NLP operations in order to tackle the bigger problems.`,
        link: 'http://nlp.1theta.com',
      },
      {
        name: '[Patent] Automatic "Words in Context" Question Generation using Word Sense Disambiguation',
        image: "/images/comparison_wic.png",
        description:
          `As part of my work at LXPER Inc., I've filed for patent in Korea a novel NLP engine I built that automatically generates high-level vocabulary questions. LXPER aims to build an AI-based platform to automatically generate test questions to more rapidly create educational content. My work uses BERT-based models to generate questions that test one of the core parts of learning vocabulary: the many meanings words have with nuanced differences in different contexts.`,
        link: 'http://m.kipris.or.kr/mobile/remoteFile.do?method=patentFullText&applno=1020200120614&pub_reg=R',
      },
      {
        name: "[Production] danmooji",
        image: "/images/danmooji.png",
        description: `After developing a series of NLP question generation engines at LXPER, I proposed and launched a new product for the company: danmooji. danmooji is an English learning app that utilizes our QG engines to directly customize the learning experience for each user.
        I took part in the initial ideation and design, business modeling, user interviews, UI/UX research, back-end development, and AI engine development. This was a full team effort, involving software developers from reputable companies in Korea, who joined in later in the project. 
        The development was systematic, involving thorough internal documentations for each functionality, technology, business logic, and APIs that were utilized for building this product. 
        `,
        link: "https://play.google.com/store/apps/details?id=com.danmooji&hl=en_US&gl=US"
      },
      {
        name: "EMERGENT SYSTEMS: PEAK Performance",
        image: "/images/grandband.jpg",
        description: `
        Paper for <a style="color:blue" href="/files/framesequencegan.pdf">FrameSequenceGAN</a>, the novel animation generation model that was developed for this project.
        </br>
        </br>
        Please understand that the paper only explains the model architecture but excludes the actual animated outputs since I am not yet authorized to publically allow access to them. EMERGENT SYSTEMS is a short film animated by Joshua Frankel to music composed by Missy Mazzoli that was performed on six grand pianos by Grand Band. You can find the program <a style="color:blue" href="https://issuu.com/montclair210/docs/grand_band_01-31-20/2">here</a>.
        </br>
        </br>
        I worked with Joshua with the role of Deep Learning Engineer. My role was to build an original generative model that would learn from his animation and produce an original animation that would be appended to his own. This new model's original animation was premiered with his work at PEAK Performances @ Montclair State University. Currently I'm developing a more advanced model for a more interesting output for the official online release.
`,
        link: "https://www.peakperfs.org/event/grand-band/2020-02-14/"
      },
      {
        name: "[Publication] NtMalDetect: A Machine Learning Approach to Malware Detection Using Native API System Calls",
        image: "",
        link: "https://arxiv.org/abs/1802.05412",
        description: `Advised by <a href="https://scholar.google.com/citations?user=pP6yo9EAAAAJ&hl=en" style="color:blue">Dr. Hyrum Anderson</a>. An ML approach to malware detection using NLP methods. At the <a style="color:blue" href="https://en.wikipedia.org/wiki/International_Science_and_Engineering_Fair">Intel International Science and Engineering Fair 2018</a> with 1800+ participants, this project won the following awards: $1000 Special Award from the <a style="color:blue" href="https://www.unicef.org/gulf/press-releases/king-abdulaziz-his-companions-foundation-giftedness-creativity-mawhiba-supports">King Abdulaziz Foundation for Giftedness</a>, $1200 Special Award from the <a style="color:blue" href="http://english.cast.org.cn/">China Association for Science and Technology</a>, 4th Place Grand Award for Systems Software. At the regional Sichuan Science Fair, this project won 1st place and the <a style="color:blue" href="https://ysea.org/">Yale Science and Engineering Award</a>.`
      }
      
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'LXPER Inc. | AI Researcher, Full Stack Developer | June 2020 ~ Dec 2020',
        description: `During my time at LXPER, I've filed for three patents for novel NLP pipelines for automatic question generation. With these patented pipelines and other miscellaneous engines, I launched a new product at the company: danmoooji. </br></br>`,
        link: 'https://www.lxper.com/',
      },
      {
        name: 'Williams College | CSCI 237 Teaching Assistant, Alumni Fund Stewardship | Dec 2019 ~ Mar 2020',
        description: `[CSCI 237 TA] Ran T.A. sessions for students in need of help for CSCI 237 Computer Organization. </br>[AF Stewardship] One of 4 selected students for this role to serve as an intermediary between the Alumni Fund office and the school's alumni. Communicate with alumni and donors as requested by Alumni Fund staff, including prompt responses to messages received. Assist with Alumni Fund and OCR events as scheduled.</br></br>`,
        link: 'https://williams.com',
      },
      {
        name: 'Blueprint Education Shanghai (蓝图教育) | SWE Intern | July 2019 ~ Aug 2019',
        description: `Blueprint is a college consulting service based in Shanghai, China. Developed a WeChat Mini App, a minimal app that exists in the WeChat
        ecosystem that significantly accelerates customer acquisition. The front-end was built using WeChat's XML system,
        API server with Node.js, and database using PostgreSQL. Held meetings determining the company's requirements,
        made proposals of designs, and legally registered the app in the system.</br></br>`,
        link: 'http://www.blueprint.cn.com/',
      },
      {
        name: 'Edugo.ai | Full-Stack Developer Intern | Dec 2017 ~ Jan 2018',
        description: `Edugo.ai is a Shanghai based start-up, using AI to enhance English language learning. Learned how to build back-end structures using Node.js, PostgreSQL, Docker,
        and general systems administration techniques. As one of the only two software developers at the time, my code in
        the last few weeks was pushed to production. The <a style="color:blue" href="https://www.gv.com/sprint/">Design Sprint-GV</a>. The “sprint” is a 5-day process for answering critical business questions. As a brand
        new startup, they were undergoing major pivoting, and I took part of this process in ideation.`,
        link: 'https://www.edugo.ai/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    links: [
      {
        name: 'Resume',
        link: "/files/resume.pdf",
        description: ""
      }
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/unnamed.jpg`,
      },
    },
  ],
};
