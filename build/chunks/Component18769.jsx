/** Chunk was on web.js **/
/** chunk id: 18769, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk653793 = require("./653793.jsx"),
  Chunk524025 = require("./524025.js");
let s = e => {
  let {
    backgroundImage: t,
    logoSrc: n,
    supplementalImage: s,
    href: l,
    ctaText: c
  } = e;
  return (0, r.jsxs)("div", {
    className: o.rJ,
    children: [(0, r.jsx)(a.A, {
      overflowable: true,
      children: (0, r.jsx)("div", {
        className: o.rf,
        style: {
          backgroundImage: "url(".concat(t, ")")
        },
        children: (0, r.jsxs)("div", {
          className: o.kb,
          children: [(0, r.jsx)("div", {}), (0, r.jsx)("img", {
            className: o.wm,
            src: n,
            alt: ""
          }), (0, r.jsx)(i.$nd, {
            text: c,
            variant: "overlay-primary"
          })]
        })
      })
    }), null != s && (0, r.jsx)("img", {
      className: o.hP,
      src: s,
      alt: ""
    })]
  })
}