/** Chunk was on 60667 **/
/** chunk id: 502060, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o,
  G: () => a
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk645022 = require("./645022.js");

function a(e) {
  let {
    children: t,
    title: n,
    description: l
  } = e;
  return (0, r.jsxs)("div", {
    className: s.L1,
    children: [(null != n || null != l) && (0, r.jsxs)("div", {
      className: s.Km,
      children: [null != n && (0, r.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: n
      }), null != l && (0, r.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: l
      })]
    }), (0, r.jsx)("div", {
      className: s.Yq,
      children: t
    }), (0, r.jsx)(i.cGx, {
      className: s.yj
    })]
  })
}

function o(e) {
  let {
    children: t,
    title: n,
    description: i,
    webSetting: s
  } = e;
  return (0, r.jsx)(l.x, {
    setting: s,
    children: (0, r.jsx)(a, {
      title: n,
      description: i,
      children: t
    })
  })
}