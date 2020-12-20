import React from 'react'
import { Container, Row } from 'react-grid-system'
import InfiniteScroll from 'react-infinite-scroll-component'
import Layout from './components/layout'
import SocialMediaCard from './components/social-media-card.js'

// Infinite scroll built based on code from react-infinite-scroll-component docs, found here: https://codesandbox.io/s/yk7637p62z?file=/src/index.js:215-1101

class App extends React.Component {
  state = {
    SocialMediaCards: [
      <SocialMediaCard key={0} />,
      <SocialMediaCard key={1} />,
      <SocialMediaCard key={2} />,
      <SocialMediaCard key={3} />,
      <SocialMediaCard key={4} />,
      <SocialMediaCard key={5} />,
      <SocialMediaCard key={6} />,
      <SocialMediaCard key={7} />,
      <SocialMediaCard key={8} />
    ]
  }

  generateNextRow = () => {
    setTimeout(() => {
      this.setState({
        SocialMediaCards: this.state.SocialMediaCards.concat([
          <SocialMediaCard key={this.state.SocialMediaCards.length} />,
          <SocialMediaCard key={this.state.SocialMediaCards.length + 1} />,
          <SocialMediaCard key={this.state.SocialMediaCards.length + 2} />
        ])
      });
    }, 1500);
  };

  render() {
    return (
      <div>
        <Layout>
          <Container style={{ marginLeft: `-12.5px`, marginRight: `-27.5px` }}>
            <InfiniteScroll
              className='infinite-scroll'
              dataLength={this.state.SocialMediaCards.length}
              next={this.generateNextRow}
              hasMore={true}
              loading={<p>Loading...</p>}
            >
              <Row>
                {this.state.SocialMediaCards}
              </Row>
            </InfiniteScroll>
          </Container>
        </Layout>
      </div>
    );
  }
}

export default App
