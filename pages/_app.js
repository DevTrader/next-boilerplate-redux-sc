import App, { Container } from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
//import Link from "next/link";
import { Link } from "../routes";

class MyApp extends App {
	render() {
		const { Component, pageProps, reduxStore } = this.props;
		return (
			<Container>
				<div>
					<p>This is a global header (but it also skips 404)</p>
					<ul>
						<li>
							<Link href="/">
								<a href="">Index</a>
							</Link>
						</li>
						<li>
							<Link href="/home">
								<a href="">Home(Clock)</a>
							</Link>
						</li>
						<li>
							<Link href={`/params`} params={{ id: "some_param" }}>
								<a>Params Example2</a>
							</Link>
						</li>
					</ul>
				</div>

				<Provider store={reduxStore}>
					<Component {...pageProps} />
				</Provider>
			</Container>
		);
	}
}

export default withReduxStore(MyApp);
