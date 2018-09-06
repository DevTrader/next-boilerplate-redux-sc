import App, { Container } from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import Link from "next/link";

class MyApp extends App {
	render() {
		const { Component, pageProps, reduxStore } = this.props;
		return (
			<Container>
				<div>
					<p>This is a global header</p>
					<Link href="/">
						<a href="">Index</a>
					</Link>
					<span> </span>
					<Link href="/home">
						<a href="">Home(Clock)</a>
					</Link>
				</div>

				<Provider store={reduxStore}>
					<Component {...pageProps} />
				</Provider>
			</Container>
		);
	}
}

export default withReduxStore(MyApp);