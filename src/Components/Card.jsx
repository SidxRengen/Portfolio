import PropTypes from "prop-types";
import "../App.css";

const Card = ({ project }) => {
  return (
    <article className="project-card">
      <a className="project-image-link" href={project.link} target="_blank" rel="noreferrer">
        <img src={project.image} alt={`${project.title} project preview`} />
      </a>
      <div className="project-info">
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <ul>
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <a href={project.link} target="_blank" rel="noreferrer" className="btn">
          View Project
        </a>
      </div>
    </article>
  );
};

Card.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Card;
