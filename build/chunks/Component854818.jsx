/** Chunk was on 59275 **/
/** chunk id: 854818, original params: e,t,l (module,exports,require) **/
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
      endDate: l,
      size: r = "md",
      className: u
    } = e,
    {
      days: d,
      hours: f,
      minutes: b
    } = (0, i.A)(l),
    g = [(t = e => "".concat(e.toString().padStart(2, "0")))(d), t(f), t(b)].join(":");
  return (0, n.jsxs)("div", {
    className: s()(c.kL, u),
    role: "timer",
    children: [g.split("").map((e, t) => ":" === e ? (0, n.jsx)(a.Text, {
      color: "none",
      variant: "md" === r ? "heading-lg/extrabold" : "heading-xxl/extrabold",
      className: c.eC,
      "aria-hidden": true,
      tag: "div",
      children: e
    }, t) : (0, n.jsx)(a.Text, {
      color: "always-white",
      variant: "md" === r ? "heading-md/bold" : "heading-xl/bold",
      className: c.ai,
      "aria-hidden": true,
      tag: "div",
      children: e
    }, t)), (0, n.jsx)(a.AC4, {
      children: o.intl.format(o.t.j6IyVe, {
        days: d,
        hours: f,
        minutes: b
      })
    })]
  })
}