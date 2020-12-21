import React from 'react'
import Layout from './components/layout'

class CommentsPage extends React.Component {
    render() {
        return(
            <Layout>
                <h2>Thanks for visiting this moderately useless site!</h2>
                <p>
                    This is sort of a joke project. I tried to build an ironic Social Media Newsfeed™, complete with a Like Button™ and Infinite Scroll™. Shitpost / ad titles are generated using a Markov chain.<br /><br />
                    Feel free to "like" something if you like it! Or if you love it! Or if you're mostly neutral but you dislike it less than you like it!<br /><br />
                    See also: <a href="https://anli.io/portfolio" target="_blank" rel="noreferrer">my portfolio</a>, where I incorporated this ironic newsfeed <s>and where it's also serving a moderately useless purpose</s>.<br /><br />
                    <b>Technologies: React (react-grid-system, react-infinite-scroll-component, react-timeago)</b><br /><br />
                    <i>Note: because everything is newly generated each time, "likes" disappear upon refresh.</i>
                </p>
            </Layout>
        )
    }
}

export default CommentsPage
