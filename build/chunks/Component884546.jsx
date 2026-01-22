/** Chunk was on web.js **/
/** chunk id: 884546, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk38824 = require("./38824.js");

function c(e) {
  let {
    title: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(s.Heading, {
      variant: "text-md/medium",
      className: l.Vf,
      children: t
    }), n]
  })
}

function u(e) {
  let {
    children: t,
    className: n,
    layoutClassName: i,
    profilePreview: s,
    profilePreviewTitle: u,
    nameplatePreview: d
  } = e, f = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c, {
      title: null != u ? u : o.intl.string(o.t.Zb06yP),
      children: s
    }), null != d ? (0, r.jsx)(c, {
      title: o.intl.string(o.t["7KRt6R"]),
      children: d
    }) : null]
  });
  return (0, r.jsx)("div", {
    className: a()(l.UA, n),
    children: (0, r.jsxs)("div", {
      className: a()(l.yt, i),
      children: [(0, r.jsx)("div", {
        className: l.Fp,
        children: f()
      }), (0, r.jsx)("div", {
        className: l.oB,
        children: t
      })]
    })
  })
}