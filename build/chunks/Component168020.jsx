/** Chunk was on 45620 **/
/** chunk id: 168020, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  R: () => s
}), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk774078 = require("./774078.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk64092 = require("./64092.js");
let s = e => {
  let {
    endDate: t,
    size: r = "md"
  } = e, {
    days: s,
    hours: c,
    minutes: u
  } = (0, a.Z)(t), d = function(e, t, r) {
    let n = e => "".concat(e.toString().padStart(2, "0"));
    return [n(e), n(t), n(r)].join(":")
  }(s, c, u);
  return (0, n.jsxs)("div", {
    className: o.container,
    role: "timer",
    children: [d.split("").map((e, t) => ":" === e ? (0, n.jsx)(l.Text, {
      color: "none",
      variant: "md" === r ? "heading-lg/extrabold" : "heading-xxl/extrabold",
      className: o.delineator,
      "aria-hidden": true,
      tag: "div",
      children: e
    }, t) : (0, n.jsx)(l.Text, {
      color: "always-white",
      variant: "md" === r ? "heading-md/bold" : "heading-xl/bold",
      className: o.number,
      "aria-hidden": true,
      tag: "div",
      children: e
    }, t)), (0, n.jsx)(l.nn4, {
      children: i.intl.format(i.t.j6IyVV, {
        days: s,
        hours: c,
        minutes: u
      })
    })]
  })
}