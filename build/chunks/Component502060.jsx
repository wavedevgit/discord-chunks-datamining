/** Chunk was on web.js **/
/** chunk id: 502060, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l,
  G: () => o
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk645022 = require("./645022.js");

function o(e) {
  let {
    children: t,
    title: n,
    description: a
  } = e;
  return (0, r.jsxs)("div", {
    className: s.L1,
    children: [(null != n || null != a) && (0, r.jsxs)("div", {
      className: s.Km,
      children: [null != n && (0, r.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: n
      }), null != a && (0, r.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: a
      })]
    }), (0, r.jsx)("div", {
      className: s.Yq,
      children: t
    }), (0, r.jsx)(i.cGx, {
      className: s.yj
    })]
  })
}

function l(e) {
  let {
    children: t,
    title: n,
    description: i,
    webSetting: s
  } = e;
  return (0, r.jsx)(a.x, {
    setting: s,
    children: (0, r.jsx)(o, {
      title: n,
      description: i,
      children: t
    })
  })
}