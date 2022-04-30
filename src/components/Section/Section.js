import PropTypes from 'prop-types';
import './Section.css';

const Section = ({ children, title }) => (
  <section className="Section">
    <h2>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};

export default Section;
