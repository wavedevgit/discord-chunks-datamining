/** Chunk was on web.js **/
/** chunk id: 684136, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk607399 = require("./607399.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk462674 = require("./462674.js"),
  u = function(e) {
    return e.DEFAULT = "", e.BOLD = "Bold", e.SOLID = "Solid", e
  }(u || {});

function d(e) {
  let {
    closeAction: t,
    variant: n = "",
    keybind: i,
    className: u
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(c.kL, u),
    children: [(0, r.jsx)(s.DUT, {
      className: a()(c.b, {
        [c.EH]: "Bold" === n,
        [c.O3]: "Solid" === n
      }),
      onClick: t,
      "aria-label": l.intl.string(l.t.cpT0Cq),
      children: "Solid" === n ? (0, r.jsx)(s.aXh, {
        size: "md",
        color: "currentColor",
        "aria-hidden": true
      }) : (0, r.jsx)(s.PGe, {
        size: "sm",
        color: "currentColor",
        "aria-hidden": true
      })
    }), o.Fr ? null : (0, r.jsx)("div", {
      className: c.P,
      "aria-hidden": true,
      children: i
    })]
  })
}
d.Variants = u