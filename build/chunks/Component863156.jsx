/** Chunk was on web.js **/
/** chunk id: 863156, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk899728 = require("./899728.js"),
  Chunk88001 = require("./88001.js"),
  Chunk183954 = require("./183954.js");

function u(e) {
  let {
    className: t,
    premiumGroupRole: n
  } = e, i = (0, o.A)(n, true);
  if (null == i) return null;
  let {
    subheaderString: u,
    bodyString: d
  } = i;
  return (0, r.jsxs)("div", {
    className: a()(c.kL, t),
    children: [(0, r.jsxs)(s.BJc, {
      direction: "horizontal",
      gap: 8,
      align: "center",
      className: c.wx,
      children: [(0, r.jsx)(s.Heading, {
        variant: "display-md",
        className: c.Ss,
        children: (0, l.DP)()
      }), (0, r.jsx)(s.Exy, {
        type: "beta",
        variant: "expressive"
      })]
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/medium",
      className: c.m_,
      color: "text-default",
      children: u
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/medium",
      color: "text-default",
      children: d
    })]
  })
}