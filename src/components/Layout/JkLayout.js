import React from 'react';

class JkLayout extends React.Component {
  render() {
    const{ children } = this.props;
    return (
      <main>
        { children }
      </main>
    );
  }
}

export default JkLayout;
