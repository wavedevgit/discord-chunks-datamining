/** Chunk was on web.js **/
/** chunk id: 425493, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk676201 = require("./676201.js"),
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
    className: a()(c.container, u),
    children: [(0, r.jsx)(s.P3F, {
      className: a()(c.closeButton, {
        [c.closeButtonBold]: "Bold" === n,
        [c.closeButtonSolid]: "Solid" === n
      }),
      onClick: t,
      "aria-label": l.intl.string(l.t.cpT0Cq),
      children: "Solid" === n ? (0, r.jsx)(s.k$p, {
        size: "md",
        color: "currentColor",
        "aria-hidden": true
      }) : (0, r.jsx)(s.Dio, {
        size: "sm",
        color: "currentColor",
        "aria-hidden": true
      })
    }), o.tq ? null : (0, r.jsx)("div", {
      className: c.keybind,
      "aria-hidden": true,
      children: i
    })]
  })
}
d.Variants = u