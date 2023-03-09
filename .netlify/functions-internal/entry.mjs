import * as adapter from '@astrojs/netlify/netlify-functions.js';
import React, { createElement } from 'react';
import ReactDOM from 'react-dom/server';
import { h as server_default, i as deserializeManifest } from './chunks/astro.bd50e7dd.mjs';
import { _ as _page0, a as _page1, b as _page2, c as _page3, d as _page4, e as _page5, f as _page6, g as _page7, h as _page8, i as _page9, j as _page10 } from './chunks/pages/all.1b0287a0.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';
/* empty css                                *//* empty css                                 */import '@astrojs/rss';
/* empty css                                  */import 'dayjs';
/* empty css                                */import 'react-toastify';
/* empty css                                */import 'react/jsx-runtime';
import 'hamburger-react';
/* empty css                                */
/**
 * Astro passes `children` as a string of HTML, so we need
 * a wrapper `div` to render that content as VNodes.
 *
 * As a bonus, we can signal to React that this subtree is
 * entirely static and will never change via `shouldComponentUpdate`.
 */
const StaticHtml = ({ value, name }) => {
	if (!value) return null;
	return createElement('astro-slot', {
		name,
		suppressHydrationWarning: true,
		dangerouslySetInnerHTML: { __html: value },
	});
};

/**
 * This tells React to opt-out of re-rendering this subtree,
 * In addition to being a performance optimization,
 * this also allows other frameworks to attach to `children`.
 *
 * See https://preactjs.com/guide/v8/external-dom-mutations
 */
StaticHtml.shouldComponentUpdate = () => false;

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
const reactTypeof = Symbol.for('react.element');

function errorIsComingFromPreactComponent(err) {
	return (
		err.message &&
		(err.message.startsWith("Cannot read property '__H'") ||
			err.message.includes("(reading '__H')"))
	);
}

async function check(Component, props, children) {
	// Note: there are packages that do some unholy things to create "components".
	// Checking the $$typeof property catches most of these patterns.
	if (typeof Component === 'object') {
		const $$typeof = Component['$$typeof'];
		return $$typeof && $$typeof.toString().slice('Symbol('.length).startsWith('react');
	}
	if (typeof Component !== 'function') return false;

	if (Component.prototype != null && typeof Component.prototype.render === 'function') {
		return React.Component.isPrototypeOf(Component) || React.PureComponent.isPrototypeOf(Component);
	}

	let error = null;
	let isReactComponent = false;
	function Tester(...args) {
		try {
			const vnode = Component(...args);
			if (vnode && vnode['$$typeof'] === reactTypeof) {
				isReactComponent = true;
			}
		} catch (err) {
			if (!errorIsComingFromPreactComponent(err)) {
				error = err;
			}
		}

		return React.createElement('div');
	}

	await renderToStaticMarkup(Tester, props, children, {});

	if (error) {
		throw error;
	}
	return isReactComponent;
}

async function getNodeWritable() {
	let nodeStreamBuiltinModuleName = 'stream';
	let { Writable } = await import(/* @vite-ignore */ nodeStreamBuiltinModuleName);
	return Writable;
}

async function renderToStaticMarkup(Component, props, { default: children, ...slotted }, metadata) {
	delete props['class'];
	const slots = {};
	for (const [key, value] of Object.entries(slotted)) {
		const name = slotName(key);
		slots[name] = React.createElement(StaticHtml, { value, name });
	}
	// Note: create newProps to avoid mutating `props` before they are serialized
	const newProps = {
		...props,
		...slots,
	};
	const newChildren = children ?? props.children;
	if (newChildren != null) {
		newProps.children = React.createElement(StaticHtml, { value: newChildren });
	}
	const vnode = React.createElement(Component, newProps);
	let html;
	if (metadata && metadata.hydrate) {
		if ('renderToReadableStream' in ReactDOM) {
			html = await renderToReadableStreamAsync(vnode);
		} else {
			html = await renderToPipeableStreamAsync(vnode);
		}
	} else {
		if ('renderToReadableStream' in ReactDOM) {
			html = await renderToReadableStreamAsync(vnode);
		} else {
			html = await renderToStaticNodeStreamAsync(vnode);
		}
	}
	return { html };
}

async function renderToPipeableStreamAsync(vnode) {
	const Writable = await getNodeWritable();
	let html = '';
	return new Promise((resolve, reject) => {
		let error = undefined;
		let stream = ReactDOM.renderToPipeableStream(vnode, {
			onError(err) {
				error = err;
				reject(error);
			},
			onAllReady() {
				stream.pipe(
					new Writable({
						write(chunk, _encoding, callback) {
							html += chunk.toString('utf-8');
							callback();
						},
						destroy() {
							resolve(html);
						},
					})
				);
			},
		});
	});
}

async function renderToStaticNodeStreamAsync(vnode) {
	const Writable = await getNodeWritable();
	let html = '';
	return new Promise((resolve, reject) => {
		let stream = ReactDOM.renderToStaticNodeStream(vnode);
		stream.on('error', (err) => {
			reject(err);
		});
		stream.pipe(
			new Writable({
				write(chunk, _encoding, callback) {
					html += chunk.toString('utf-8');
					callback();
				},
				destroy() {
					resolve(html);
				},
			})
		);
	});
}

/**
 * Use a while loop instead of "for await" due to cloudflare and Vercel Edge issues
 * See https://github.com/facebook/react/issues/24169
 */
async function readResult(stream) {
	const reader = stream.getReader();
	let result = '';
	const decoder = new TextDecoder('utf-8');
	while (true) {
		const { done, value } = await reader.read();
		if (done) {
			if (value) {
				result += decoder.decode(value);
			} else {
				// This closes the decoder
				decoder.decode(new Uint8Array());
			}

			return result;
		}
		result += decoder.decode(value, { stream: true });
	}
}

async function renderToReadableStreamAsync(vnode) {
	return await readResult(await ReactDOM.renderToReadableStream(vnode));
}

const _renderer1 = {
	check,
	renderToStaticMarkup,
};

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/contact.astro", _page1],["src/pages/rss.xml.js", _page2],["src/pages/places.astro", _page3],["src/pages/search.astro", _page4],["src/pages/posts/Donde-conseguir-ratas.md", _page5],["src/pages/posts/introducing-astro.md", _page6],["src/pages/posts/post3.md", _page7],["src/pages/posts/post4.md", _page8],["src/pages/blog.astro", _page9],["src/pages/vets.astro", _page10],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),Object.assign({"name":"@astrojs/react","clientEntrypoint":"@astrojs/react/client.js","serverEntrypoint":"@astrojs/react/server.js","jsxImportSource":"react"}, { ssr: _renderer1 }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["_astro/blog.67873827.css","_astro/blog.789918be.css","_astro/index.5307add0.css"],"scripts":[{"type":"external","value":"_astro/hoisted.7e6c664d.js"},{"type":"external","value":"_astro/page.938b9eea.js"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/blog.67873827.css","_astro/blog.789918be.css"],"scripts":[{"type":"external","value":"_astro/hoisted.7e6c664d.js"},{"type":"external","value":"_astro/page.938b9eea.js"}],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/blog.67873827.css","_astro/blog.789918be.css"],"scripts":[{"type":"external","value":"_astro/hoisted.7e6c664d.js"},{"type":"external","value":"_astro/page.938b9eea.js"}],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/blog.67873827.css","_astro/blog.789918be.css","_astro/places.50ea0a2b.css"],"scripts":[{"type":"external","value":"_astro/hoisted.7e6c664d.js"},{"type":"external","value":"_astro/page.938b9eea.js"}],"routeData":{"route":"/places","type":"page","pattern":"^\\/places\\/?$","segments":[[{"content":"places","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/places.astro","pathname":"/places","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/blog.67873827.css","_astro/blog.789918be.css"],"scripts":[{"type":"external","value":"_astro/hoisted.ec98a902.js"},{"type":"external","value":"_astro/page.938b9eea.js"}],"routeData":{"route":"/search","type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/blog.67873827.css","_astro/blog.789918be.css"],"scripts":[{"type":"external","value":"_astro/hoisted.7e6c664d.js"},{"type":"external","value":"_astro/page.938b9eea.js"}],"routeData":{"route":"/posts/donde-conseguir-ratas","type":"page","pattern":"^\\/posts\\/Donde-conseguir-ratas\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"Donde-conseguir-ratas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/Donde-conseguir-ratas.md","pathname":"/posts/Donde-conseguir-ratas","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/blog.67873827.css","_astro/blog.789918be.css"],"scripts":[{"type":"external","value":"_astro/hoisted.7e6c664d.js"},{"type":"external","value":"_astro/page.938b9eea.js"}],"routeData":{"route":"/posts/introducing-astro","type":"page","pattern":"^\\/posts\\/introducing-astro\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"introducing-astro","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/introducing-astro.md","pathname":"/posts/introducing-astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/blog.67873827.css"],"scripts":[{"type":"external","value":"_astro/page.938b9eea.js"}],"routeData":{"route":"/posts/post3","type":"page","pattern":"^\\/posts\\/post3\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post3.md","pathname":"/posts/post3","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/blog.67873827.css"],"scripts":[{"type":"external","value":"_astro/page.938b9eea.js"}],"routeData":{"route":"/posts/post4","type":"page","pattern":"^\\/posts\\/post4\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post4","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post4.md","pathname":"/posts/post4","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/blog.67873827.css","_astro/blog.789918be.css","_astro/blog.30184920.css"],"scripts":[{"type":"external","value":"_astro/hoisted.7e6c664d.js"},{"type":"external","value":"_astro/page.938b9eea.js"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/blog.67873827.css","_astro/blog.789918be.css","_astro/vets.6aecb6b6.css"],"scripts":[{"type":"external","value":"_astro/hoisted.7e6c664d.js"},{"type":"external","value":"_astro/page.938b9eea.js"}],"routeData":{"route":"/vets","type":"page","pattern":"^\\/vets\\/?$","segments":[[{"content":"vets","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/vets.astro","pathname":"/vets","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"propagation":[],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.ec98a902.js","/astro/hoisted.js?q=1":"_astro/hoisted.7e6c664d.js","C:/Users/Bancita/Documents/Astrolanding/src/components/subscribebtn":"_astro/subscribebtn.3fafdd30.js","astro:scripts/page.js":"_astro/page.938b9eea.js","@astrojs/react/client.js":"_astro/client.8c593111.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/blog.30184920.css","/_astro/blog.789918be.css","/_astro/blog.67873827.css","/_astro/index.5307add0.css","/_astro/places.50ea0a2b.css","/_astro/vets.6aecb6b6.css","/favicon.svg","/images/adopciones.png","/images/batman.jpg","/images/certificado.png","/images/correo.png","/images/cuidado.png","/images/heladeria.jpg","/images/helados.jpg","/images/location-pin.png","/images/location.png","/images/nombresParaRatas.jfif","/images/productos.png","/images/rat.jfif","/images/rata_en_starbucks.mp4","/images/roertito.jpg","/images/salidas.png","/images/saunarat.jfif","/images/veterianaria_de_ratas.jpg","/_astro/client.8c593111.js","/_astro/hoisted.7e6c664d.js","/_astro/hoisted.ec98a902.js","/_astro/index.80e0782c.js","/_astro/page.938b9eea.js","/_astro/Scrollup.astro_astro_type_script_index_0_lang.fffe53aa.js","/_astro/subscribebtn.3fafdd30.js","/_astro/page.938b9eea.js"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
