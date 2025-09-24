/** Chunk was on web.js **/
/** chunk id: 694802, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
    className: s.card,
    children: [(0, r.jsxs)("div", {
      className: s.header,
      children: [(0, r.jsx)(i.Mgn, {
        size: "custom",
        color: "currentColor",
        className: s.icon,
        width: 16,
        height: 16
      }), (0, r.jsx)(i.X6q, {
        color: "text-default",
        variant: "heading-sm/medium",
        children: t
      })]
    }), (0, r.jsx)(i.Text, {
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
  } = e, n = (0, a.qb)(t);
  if (0 === n.length) return null;
  let i = n.at(0);
  return i === o.intl.string(o.t.BV6xDg) ? (0, r.jsx)(l, {
    header: o.intl.string(o.t.onh6cn),
    children: o.intl.string(o.t.arVHRE)
  }) : i === o.intl.string(o.t.MFGxFB) ? (0, r.jsx)(l, {
    header: o.intl.string(o.t.JPihZG),
    children: o.intl.string(o.t.MFGxFB)
  }) : null
}