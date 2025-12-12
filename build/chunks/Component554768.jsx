/** Chunk was on 88499 **/
/** chunk id: 554768, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./784620.js"), require("./973216.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk968843 = require("./968843.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk231411 = require("./231411.js");

function o(e) {
  let {
    header: t,
    children: n
  } = e;
  return (0, a.jsxs)("div", {
    className: s.card,
    children: [(0, a.jsxs)("div", {
      className: s.header,
      children: [(0, a.jsx)(r.Mgn, {
        size: "custom",
        color: "currentColor",
        className: s.icon,
        width: 16,
        height: 16
      }), (0, a.jsx)(r.Heading, {
        color: "text-default",
        variant: "heading-sm/medium",
        children: t
      })]
    }), (0, a.jsx)(r.Text, {
      color: "text-muted",
      variant: "text-xs/normal",
      className: s.warningBody,
      children: n
    })]
  })
}
let c = function(e) {
  let {
    quest: t
  } = e, n = (0, i.qb)(t);
  if (0 === n.length) return null;
  let r = n.at(0);
  return r === l.intl.string(l.t.BV6xDm) ? (0, a.jsx)(o, {
    header: l.intl.string(l.t.onh6ct),
    children: l.intl.string(l.t.arVHRA)
  }) : r === l.intl.string(l.t.MFGxFM) ? (0, a.jsx)(o, {
    header: l.intl.string(l.t.JPihZA),
    children: l.intl.string(l.t.MFGxFM)
  }) : null
}