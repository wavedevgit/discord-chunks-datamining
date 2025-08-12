/** Chunk was on web.js **/
/** chunk id: 319417, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk443603 = require("./443603.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk839402 = require("./839402.js");

function d(e) {
  let {
    onClick: t,
    disabled: n = false
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: u.separator
    }), (0, r.jsx)("div", {
      className: u.container,
      children: (0, r.jsx)("div", {
        className: u.buttonContainer,
        children: (0, r.jsx)(l.Z, {
          className: u.button,
          childClassName: a()(u.buttonChild, {
            [u.disabled]: n,
            [u.activeButtonChild]: !n
          }),
          onClick: t,
          disabled: n,
          isActive: false,
          noHover: n,
          "aria-label": c.intl.string(c.t.oeb1vr),
          children: (0, r.jsx)(s.Uuj, {
            size: "xs",
            color: "currentColor",
            className: u.sendIcon
          })
        })
      })
    })]
  })
}
let f = Chunk73800.memo(d)