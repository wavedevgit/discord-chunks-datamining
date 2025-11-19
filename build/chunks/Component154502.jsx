/** Chunk was on 384 **/
/** chunk id: 154502, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk556012 = require("./556012.js"),
  Chunk335260 = require("./335260.js");

function s(e) {
  var t;
  let {
    action: n,
    actionType: s,
    triggerType: o
  } = e, c = (0, l.c)(null != (t = null == n ? true : n.type) ? t : s, n, o);
  if (null == c) return null;
  let {
    headerText: d,
    helperText: u,
    icon: g
  } = c;
  return (0, r.jsxs)("div", {
    className: a.actionContainer,
    children: [(0, r.jsx)("div", {
      className: a.actionIconContainer,
      children: (0, r.jsx)(g, {
        size: "custom",
        color: "currentColor",
        width: 14,
        height: 14,
        className: a.actionIcon
      })
    }), (0, r.jsx)("div", {
      className: a.actionTextContainer,
      children: (0, r.jsxs)(i.Text, {
        className: a.actionTextHeader,
        variant: "text-xs/medium",
        color: "interactive-normal",
        children: [d, null != u && (0, r.jsx)(i.Text, {
          className: a.actionTextHelper,
          variant: "text-xs/medium",
          color: "text-muted",
          tag: "span",
          children: u
        })]
      })
    })]
  })
}