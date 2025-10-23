/** Chunk was on web.js **/
/** chunk id: 532425, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk546237 = require("./546237.js");
let u = e => {
  let {
    hasContent: t,
    onClear: n,
    className: i,
    isLoading: u,
    size: d = "sm"
  } = e;
  return (0, r.jsx)(o.P3F, {
    className: a()(i, c.iconLayout, {
      [c.pointer]: t
    }),
    "data-size": d,
    onClick: e => {
      e.stopPropagation(), null != n && n(e)
    },
    tabIndex: t ? 0 : false,
    "aria-hidden": !t,
    onMouseDown: e => {
      e.preventDefault(), e.stopPropagation()
    },
    children: (0, r.jsx)("div", {
      className: c.iconContainer,
      children: u ? (0, r.jsx)(o.$jN, {
        type: o.$jN.Type.SPINNING_CIRCLE,
        className: a()(c.icon, c.visible)
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s._Ve, {
          color: "currentColor",
          className: a()(c.icon, {
            [c.visible]: !t
          }),
          "aria-label": l.intl.string(l.t["5h0QOP"])
        }), (0, r.jsx)(s.Dio, {
          color: "currentColor",
          className: a()(c.clear, {
            [c.visible]: t
          }),
          "aria-label": l.intl.string(l.t.VkKicb)
        })]
      })
    })
  })
}