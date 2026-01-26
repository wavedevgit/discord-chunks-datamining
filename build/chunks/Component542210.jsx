/** Chunk was on 39048 **/
/** chunk id: 542210, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk239705 = require("./239705.js"),
  Chunk300328 = require("./300328.js");

function a(e) {
  var t;
  let {
    action: n,
    actionType: a,
    triggerType: o
  } = e, c = (0, l.x)(null != (t = null == n ? true : n.type) ? t : a, n, o);
  if (null == c) return null;
  let {
    headerText: d,
    helperText: u,
    icon: g
  } = c;
  return (0, r.jsxs)("div", {
    className: s.Ik,
    children: [(0, r.jsx)("div", {
      className: s.TV,
      children: (0, r.jsx)(g, {
        size: "custom",
        color: "currentColor",
        width: 14,
        height: 14,
        className: s.gE
      })
    }), (0, r.jsx)("div", {
      className: s.xj,
      children: (0, r.jsxs)(i.Text, {
        className: s.XX,
        variant: "text-xs/medium",
        color: "interactive-text-default",
        children: [d, null != u && (0, r.jsx)(i.Text, {
          className: s.KE,
          variant: "text-xs/medium",
          color: "text-muted",
          tag: "span",
          children: u
        })]
      })
    })]
  })
}