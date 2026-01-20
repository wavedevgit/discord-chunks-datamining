/** Chunk was on web.js **/
/** chunk id: 682420, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk306278 = require("./306278.js");
let a = e => {
  let {
    bannerSrc: t,
    logoSrc: n,
    backgroundColor: a,
    children: o
  } = e;
  return (0, r.jsxs)("div", {
    className: i.hero,
    style: {
      backgroundImage: "url(".concat(t, ")"),
      backgroundColor: a
    },
    children: [null != n && (0, r.jsx)("img", {
      src: n,
      className: i.logo,
      alt: ""
    }), null != o && (0, r.jsx)("div", {
      className: i.children,
      children: o
    })]
  })
}