/** Chunk was on 59275 **/
/** chunk id: 854818, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  e: () => u
}), require("./747238.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk496431 = require("./496431.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk487604 = require("./487604.js");
let u = e => {
  let t, {
      endDate: n,
      size: l = "md",
      className: u
    } = e,
    {
      days: d,
      hours: g,
      minutes: f
    } = (0, i.A)(n),
    m = [(t = e => "".concat(e.toString().padStart(2, "0")))(d), t(g), t(f)].join(":");
  return (0, r.jsxs)("div", {
    className: s()(c.kL, u),
    role: "timer",
    children: [m.split("").map((e, t) => ":" === e ? (0, r.jsx)(a.Text, {
      color: "none",
      variant: "md" === l ? "heading-lg/extrabold" : "heading-xxl/extrabold",
      className: c.eC,
      "aria-hidden": true,
      tag: "div",
      children: e
    }, t) : (0, r.jsx)(a.Text, {
      color: "always-white",
      variant: "md" === l ? "heading-md/bold" : "heading-xl/bold",
      className: c.ai,
      "aria-hidden": true,
      tag: "div",
      children: e
    }, t)), (0, r.jsx)(a.AC4, {
      children: o.intl.format(o.t.j6IyVe, {
        days: d,
        hours: g,
        minutes: f
      })
    })]
  })
}