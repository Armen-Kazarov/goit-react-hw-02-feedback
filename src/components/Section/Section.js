import { Component } from 'react';
import PropTypes from 'prop-types';
import s from '../../components/Section/Section.module.css';

class Section extends Component {
  render() {
    return (
      <section className={s.section}>
        <h2 className={s.title}>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;
