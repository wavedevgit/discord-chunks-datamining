/** Chunk was on 384 **/
/** chunk id: 154502, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk556012 = require("./556012.js"),
  Chunk335260 = require("./335260.js");

function a(e) {
  var t;
  let {
    action: n,
    actionType: a,
    triggerType: o
  } = e, c = (0, l.c)(null != (t = null == n ? true : n.type) ? t : a, n, o);
  if (null == c) return null;
  let {
    headerText: u,
    helperText: d,
    icon: g
  } = c;
  return (0, r.jsxs)("div", {
    className: s.actionContainer,
    children: [(0, r.jsx)("div", {
      className: s.actionIconContainer,
      children: (0, r.jsx)(g, {
        size: "custom",
        color: "currentColor",
        width: 14,
        height: 14,
        className: s.actionIcon
      })
    }), (0, r.jsx)("div", {
      className: s.actionTextContainer,
      children: (0, r.jsxs)(i.Text, {
        className: s.actionTextHeader,
        variant: "text-xs/medium",
        color: "interactive-text-default",
        children: [u, null != d && (0, r.jsx)(i.Text, {
          className: s.actionTextHelper,
          variant: "text-xs/medium",
          color: "text-muted",
          tag: "span",
          children: d
        })]
      })
    })]
  })
}