/** Chunk was on 77313 **/
/** chunk id: 854818, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => u
}), require("./321073.js"), require("./747238.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk496431 = require("./496431.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk487604 = require("./487604.js");
let u = e => {
  let t, n, {
      endDate: l,
      size: u = "md",
      className: d,
      showSeconds: m = false
    } = e,
    {
      days: p,
      hours: f,
      minutes: x,
      seconds: v
    } = (0, s.A)(l),
    h = (n = [(t = e => "".concat(e.toString().padStart(2, "0")))(p), t(f), t(x)], m && n.push(t(v)), n.join(":"));
  return (0, r.jsxs)("div", {
    className: i()(c.kL, d),
    role: "timer",
    children: [h.split("").map((e, t) => ":" === e ? (0, r.jsx)(a.Text, {
      color: "none",
      variant: "md" === u ? "heading-lg/extrabold" : "heading-xxl/extrabold",
      className: c.eC,
      "aria-hidden": true,
      tag: "div",
      children: e
    }, t) : (0, r.jsx)(a.Text, {
      color: "always-white",
      variant: "md" === u ? "heading-md/bold" : "heading-xl/bold",
      className: c.ai,
      "aria-hidden": true,
      tag: "div",
      children: e
    }, t)), (0, r.jsx)(a.AC4, {
      children: o.intl.format(o.t.j6IyVe, {
        days: p,
        hours: f,
        minutes: x
      })
    })]
  })
}