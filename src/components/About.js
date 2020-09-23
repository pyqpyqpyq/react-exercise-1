import React, { Fragment } from 'react';

// class About extends Component {
//   render() {
//     return <h1> 24yo and this is my resume/cv </h1>;
//   }
// }
// export default About;

const About = (props) => {
  // console.log(props);
  return (
    <Fragment>
      <h1> This is About Page</h1>
      <botton
        className="btn btn-primary"
        onClick={() => {
          props.history.push('/');
        }}
      >
        go home
      </botton>
    </Fragment>
  );
};

export default About;
