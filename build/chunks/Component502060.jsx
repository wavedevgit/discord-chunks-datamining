/** Chunk was on 60449 **/
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
  return (0, i.jsxs)("div", {
    className: r.L1,
    children: [(null != n || null != l) && (0, i.jsxs)("div", {
      className: r.Km,
      children: [null != n && (0, i.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: n
      }), null != l && (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: l
      })]
    }), (0, i.jsx)("div", {
      className: r.Yq,
      children: t
    }), (0, i.jsx)(s.cGx, {
      className: r.yj
    })]
  })
}

function o(e) {
  let {
    children: t,
    title: n,
    description: s,
    webSetting: r
  } = e;
  return (0, i.jsx)(l.x, {
    setting: r,
    children: (0, i.jsx)(a, {
      title: n,
      description: s,
      children: t
    })
  })
}