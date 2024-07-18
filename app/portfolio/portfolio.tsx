 import ProjectCard from './ProjectCard';
import Nav from '../nav/nav';
import Foot from '../foot/foot';

 interface Project {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  }
  
  const projects: Project[] = [
    {
      title: 'GoDevelApp',
      description: 'GoDevelApp is a powerful tool for development appraisal and property sourcing. It offers essential information, options, and solutions for proposed projects, taking into account council and public body concerns. It includes a detailed development appraisal feature and provides comprehensive reports on build costs. The tool also offers user-friendly build cost and GDV calculators based on regional data.',
      imageUrl: '/p1.png',
      link: 'https://adventureguru.com',
    },
    {
        title: 'Adventure Guru',
        description: 'Adventure Guru is a inclusive video-based adventure guide that aims to address the diversity problem in outdoor recreation. Unlike other outlets that cater to a narrow demographic, Adventure Guru welcomes everyone, regardless of their gear or background. By showcasing people of all sizes, colors, ages, sexualities, and abilities, the platform inspires individuals worldwide to connect with nature and realize that outdoor adventures are for everyone.The main purpose of the app is to promote inclusivity and diversity in nature-based activities. ',
        imageUrl: '/p2.png',
        link: 'https://adventureguru.org/adventure/',
      },
        {
        title: 'AerialGis',
        description: 'AerialGIS is a dynamic platform that revolutionizes the real estate industry. With the power of Web GIS technologies, it offers an intuitive interface to access comprehensive plot information, including availability, reservation, and sold statuses. Experience the future of property exploration through AerialGIS, where a captivating 3D aerial imagery display provides unparalleled insights into the location of each plot. Discover the perfect property for your needs with AerialGIS today. ',
        imageUrl: '/p3.png',
        link: 'https://aerialgis.com',
      },
      {
        title: 'ORBIT3LABS',
        description: 'This WebGIS app was developed for Orbit3Labs that brings you real-time insights into Surface Urban Heat Island (SUHI) values for major cities worldwide. With an intuitive interface, the displays a color-based classification system indicating whether SUHI values are high, low, or normal. Additionally, it provides detailed inner and outer boundaries for each city, ensuring accurate data representation. Explore the impact of urban heat islands and make informed decisions with our powerful SUHI visualization tool',
        imageUrl: '/p4.png',
        link: 'http://20.245.232.60/',
      },
      {
        title: 'Yawater',
        description: 'This web app was created to inform people about the existence of powerful water sources on our planet that can greatly benefit the human body. It is inspired by the book "ONLY THE TRUTH CAN SET YOU FREE, THE NEWEST TESTAMENT" written by Omar Mashiach White. The main purpose of the website is to share the valuable treasures of the world and to actively combat the wickedness that poses a threat to nature.',
        imageUrl: '/p5.png',
        link: 'https://aerialgis.com',
      },
      {
        title: 'CrosspointsChurch',
        description: "Cross Points Church, located in Kansas City, has created an innovative platform designed to streamline and facilitate various church tasks for the local community. This user-friendly platform enables nearby citizens to log in and actively participate in important activities such as prayer, sharing, and caring. By updating their task statuses within the platform, individuals contribute to a collective effort that can be visualized on a web map featuring a sophisticated graduated color scheme. Experience the power of community engagement and collaboration with Cross Points Church's cutting-edge task monitoring and distribution platform.",
        imageUrl: '/p6.png',
        link: 'https://aerialgis.com',
      },
      {
        title: 'MyDisasterMap',
        description: 'My DisasterMap" is a powerful Web GIS App designed to empower users in reporting and tracking various categories of disasters. With its intuitive interface, users can quickly report disasters and provide crucial details such as location and specifics. The app also ensures seamless communication by notifying nearby users about reported disasters. By visualizing the reported incidents on an interactive map, users can stay informed and make informed decisions during critical situations',
        imageUrl: '/p7.png',
        link: 'https://aerialgis.com',
      },
      {
        title: 'Pridin Consulting Dashboard',
        description: 'The Pridin Consulting Dashboard is a sophisticated web portal designed specifically for Pridin Consulting Ltd. Its primary objective is to efficiently monitor tank locations throughout the country. This application serves as a vital tool for investors, providing them with timely updates and comprehensive overviews of their investments. Developed in response to the challenges posed by the COVID-19 pandemic, the dashboard incorporates advanced reporting capabilities, allowing users to apply filters based on specific sites and locations, thereby enhancing the overall reporting experience.',
        imageUrl: '/p8.jpeg',
        link: 'https://aerialgis.com',
      },
      {
        title: 'Internet Coverage - Tribal Areas',
        description: "This cutting-edge web-based Geographic Information System (WebGIS) application has been developed to address the internet connectivity needs in tribal areas. By leveraging various band spectrums, this solution offers extensive coverage for wireless internet networks. The application boasts a wide range of reporting tools, enabling users to analyze and evaluate the network's reach and performance.",
        imageUrl: '/p9.jpeg',
        link: 'https://aerialgis.com',
      },
      {
        title: 'Town Council WebGIS',
        description: 'The Town Council WebGIS is a comprehensive mapping tool developed exclusively for the Bletchley and Fenny Stratford Town Council. Its primary function is to facilitate the identification and highlighting of various landmarks owned by the council. This user-friendly web-based Geographic Information System (WebGIS) empowers council members to efficiently manage and showcase their properties and assets.',
        imageUrl: '/p10.jpeg',
        link: 'https://aerialgis.com',
      },
      {
        title: 'Student Management System',
        description: 'The Student Management System is an advanced mapping application designed for Indian Hills. It serves as a centralized platform for monitoring and assessing the status of enrolled and accepted students across all branches throughout the country. This application streamlines record-keeping processes and enables swift updates and data sharing with business partners. With its comprehensive features, the Student Management System significantly enhances overall student management and administrative efficiency for Indian Hills.',
        imageUrl: '/p11.jpeg',
        link: 'https://aerialgis.com',
      } 
  ];
  
  const Portfolio: React.FC = () => {
    return (
      <div>
        <Nav/>
        <center> <h1>My Portfolio</h1></center>
       
        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
<Foot/>
      </div>
    );
  };
  
  export default Portfolio;