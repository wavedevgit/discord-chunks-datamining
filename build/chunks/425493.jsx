/** Chunk was on web.js **/
/** chunk id: 425493, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk594619 = require("./594619.js"),
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
  return <div className={o()(c.container, u)}>{<s.P3F className={o()(c.closeButton, {
        [c.closeButtonBold]: "Bold" === n,
        [c.closeButtonSolid]: "Solid" === n
      })} onClick={t} aria-label={l.intl.string(l.t.cpT0Cg)}>{"Solid" === n ? (0, r.jsx)(s.k$p, {
        size: "md",
        color: "currentColor",
        "aria-hidden": true
      }) : (0, r.jsx)(s.Dio, {
        size: "sm",
        color: "currentColor",
        "aria-hidden": true
      })}</s.P3F>}{a.tq ? null : <div className={c.keybind} aria-hidden={true}>{i}</div>}</div>
}
d.Variants = u