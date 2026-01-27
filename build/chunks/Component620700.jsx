/** Chunk was on web.js **/
/** chunk id: 620700, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./591487.js"), require("./727858.js"), require("./747238.js"), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk380610 = require("./380610.js"),
  Chunk348056 = require("./348056.jsx"),
  Chunk833291 = require("./833291.js"),
  Chunk100392 = require("./100392.js"),
  Chunk950980 = require("./950980.jsx"),
  Chunk836156 = require("./836156.js");
let d = Chunk64700.lazy(() => n.e("67696").then(n.bind(n, 881267)).then(e => ({
    default: e.PlaygroundEmbed
  }))),
  f = RegExp("^" + Chunk833291.st.source, Chunk833291.st.flags);

function p(e) {
  return {
    match: (e, t) => t.allowLinks && t.allowDevLinks ? f.exec(e) : null,
    parse: (e, t) => ({
      target: e,
      type: "devLink"
    }),
    react: (e, t, n) => {
      let s = e.target[0];
      return (0, a.h4)(s) ? (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)("span", {
          children: s
        }), (0, r.jsx)(o.A, {
          url: s
        }, s)]
      }, n.key) : (0, l.W0)(s) ? (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)("span", {
          children: s
        }), (0, r.jsx)(c.Z, {
          url: s
        })]
      }, n.key) : (0, u.i)(s) ? (0, r.jsx)(i.Fragment, {
        children: (0, r.jsxs)(i.Suspense, {
          fallback: null,
          children: [(0, r.jsx)("span", {
            children: s
          }), (0, r.jsx)(d, {
            url: s
          })]
        })
      }, n.key) : (0, r.jsx)("span", {
        children: s
      }, n.key)
    },
    order: 6
  }
}