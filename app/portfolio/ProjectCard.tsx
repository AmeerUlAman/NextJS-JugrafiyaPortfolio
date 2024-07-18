// components/ProjectCard.tsx
import Image from 'next/image';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  reverse: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, link, reverse }) => {
  return (
    <div className={`${styles.card} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.image}>
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover"/>
      </div>
      <div className={styles.content}>
    <center><h2 className={styles.title}>{title}</h2></center>    
        <p className={styles.description}>{description}</p>
        {/* <a className={styles.link} href={link} target="_blank" rel="noopener noreferrer">Visit!</a> */}
      </div>
    </div>
  );
};

export default ProjectCard;
