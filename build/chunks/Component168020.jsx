/** Chunk was on 86111 **/
/** chunk id: 168020, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => s
}), require("./35282.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk774078 = require("./774078.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk64092 = require("./64092.js");
let s = e => {
  let {
    endDate: t,
    size: n = "md"
  } = e, {
    days: s,
    hours: c,
    minutes: u
  } = (0, l.Z)(t), d = function(e, t, n) {
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
      children: a.intl.format(a.t.j6IyVe, {
        days: s,
        hours: c,
        minutes: u
      })
    })]
  })
}