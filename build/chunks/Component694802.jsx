/** Chunk was on 50433 **/
/** chunk id: 694802, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./784620.js"), require("./973216.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk113434 = require("./113434.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk603558 = require("./603558.js");

function l(e) {
  let {
    header: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: i.card,
    children: [(0, r.jsxs)("div", {
      className: i.header,
      children: [(0, r.jsx)(s.Mgn, {
        size: "custom",
        color: "currentColor",
        className: i.icon,
        width: 16,
        height: 16
      }), (0, r.jsx)(s.Heading, {
        color: "text-default",
        variant: "heading-sm/medium",
        children: t
      })]
    }), (0, r.jsx)(s.Text, {
      color: "text-muted",
      variant: "text-xs/normal",
      className: i.warningBody,
      children: n
    })]
  })
}
let c = function(e) {
  let {
    quest: t
  } = e, n = (0, o.qb)(t);
  if (0 === n.length) return null;
  let s = n.at(0);
  return s === a.intl.string(a.t.BV6xDm) ? (0, r.jsx)(l, {
    header: a.intl.string(a.t.onh6ct),
    children: a.intl.string(a.t.arVHRA)
  }) : s === a.intl.string(a.t.MFGxFM) ? (0, r.jsx)(l, {
    header: a.intl.string(a.t.JPihZA),
    children: a.intl.string(a.t.MFGxFM)
  }) : null
}