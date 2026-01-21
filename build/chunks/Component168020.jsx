/** Chunk was on 45620 **/
/** chunk id: 168020, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  R: () => u
}), require("./35282.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk774078 = require("./774078.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk594054 = require("./594054.js");
let u = e => {
  let {
    endDate: t,
    size: n = "md",
    className: l
  } = e, {
    days: u,
    hours: d,
    minutes: f
  } = (0, i.Z)(t), g = function(e, t, n) {
    let r = e => "".concat(e.toString().padStart(2, "0"));
    return [r(e), r(t), r(n)].join(":")
  }(u, d, f);
  return (0, r.jsxs)("div", {
    className: a()(c.container, l),
    role: "timer",
    children: [g.split("").map((e, t) => ":" === e ? (0, r.jsx)(s.Text, {
      color: "none",
      variant: "md" === n ? "heading-lg/extrabold" : "heading-xxl/extrabold",
      className: c.delineator,
      "aria-hidden": true,
      tag: "div",
      children: e
    }, t) : (0, r.jsx)(s.Text, {
      color: "always-white",
      variant: "md" === n ? "heading-md/bold" : "heading-xl/bold",
      className: c.number,
      "aria-hidden": true,
      tag: "div",
      children: e
    }, t)), (0, r.jsx)(s.nn4, {
      children: o.intl.format(o.t.j6IyVe, {
        days: u,
        hours: d,
        minutes: f
      })
    })]
  })
}