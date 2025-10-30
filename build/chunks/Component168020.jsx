/** Chunk was on 90020 **/
/** chunk id: 168020, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  R: () => s
}), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk774078 = require("./774078.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk321824 = require("./321824.js");
let s = e => {
  let {
    endDate: t,
    size: n = "md"
  } = e, {
    days: s,
    hours: c,
    minutes: u
  } = (0, a.Z)(t), d = function(e, t, n) {
    let r = e => "".concat(e.toString().padStart(2, "0"));
    return [r(e), r(t), r(n)].join(":")
  }(s, c, u);
  return (0, r.jsxs)("div", {
    className: o.container,
    role: "timer",
    children: [d.split("").map((e, t) => ":" === e ? (0, r.jsx)(i.Text, {
      color: "none",
      variant: "md" === n ? "heading-lg/extrabold" : "heading-xxl/extrabold",
      className: o.delineator,
      "aria-hidden": true,
      tag: "div",
      children: e
    }, t) : (0, r.jsx)(i.Text, {
      color: "always-white",
      variant: "md" === n ? "heading-md/bold" : "heading-xl/bold",
      className: o.number,
      "aria-hidden": true,
      tag: "div",
      children: e
    }, t)), (0, r.jsx)(i.nn4, {
      children: l.intl.format(l.t.j6IyVe, {
        days: s,
        hours: c,
        minutes: u
      })
    })]
  })
}