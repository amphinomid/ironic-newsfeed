import React from 'react'
import Layout from './components/layout'

class CommentsPage extends React.Component {
    render() {
        return(
            <Layout>
                <h2>Thanks for visiting this moderately useless site!</h2>
                <p>
                    This is sort of a joke project. I tried to build an ironic Social Media Newsfeed™, complete with a Like Button™ and Infinite Scroll™. Shitpost / ad titles are generated using a Markov chain.<br /><br />
                    <b>Technologies:</b> React (react-grid-system, react-infinite-scroll-component, react-timeago)<br /><br />
                    <i>Note: because everything is newly generated each time, "likes" disappear upon refresh.</i>
                </p>
            </Layout>
        )
    }
}

export default CommentsPage
