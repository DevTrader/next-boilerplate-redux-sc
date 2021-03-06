import React from "react";
import { connect } from "react-redux";
import Link from 'next/link';


class ParamsExample extends React.Component {
	static getInitialProps({ query }) {
		console.log('[QUERY]', query)
		if(!query){
			query= {id: 'no query'}
		}
		return {query};
	}

	render() {
		console.log('PROPS', this.props)
		return (
			<div>
				<h1>Params Page</h1>
				<p>Adding params require you to start the server.js file instead of running next commands, hot reload breaks</p>
				<p>On routes.js define your route with params.</p>
				<p>Dyanmic routing is built with next-routes npm package, and is implemented by adding another server, make sure your port is correct</p>
				<p><a href="https://nextjs.org/learn/basics/create-dynamic-pages/" target="_blank">This is an alternative</a>, also see <a href="https://nextjs.org/learn/basics/fetching-data-for-pages/" target="_blank">fetching data for pages</a></p>
				<p><strong>If you want to get rid of dynamic routes</strong>, remove server.js and router.js and change package.json scripts to default next scripts</p>
				<p>Try adding a param to the url, it should show here: <span>{this.props.query.id}</span></p>
				<p>You can add another param, but that needs a different route and page.</p>
			</div>
		);
	}
}

export default connect()(ParamsExample);
