/** Chunk was on web.js **/
/** chunk id: 532425, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk1561 = require("./1561.jsx"),
  Chunk922770 = require("./922770.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk546237 = require("./546237.js");
let d = e => {
  let {
    hasContent: t,
    onClear: n,
    className: i,
    isLoading: d,
    size: f = "sm"
  } = e;
  return (0, r.jsx)(o.P, {
    className: a()(i, u.iconLayout, {
      [u.pointer]: t
    }),
    "data-size": f,
    onClick: e => {
      e.stopPropagation(), null != n && n(e)
    },
    tabIndex: t ? 0 : false,
    "aria-hidden": !t,
    onMouseDown: e => {
      e.preventDefault(), e.stopPropagation()
    },
    children: (0, r.jsx)("div", {
      className: u.iconContainer,
      children: d ? (0, r.jsx)(s.$, {
        type: s.$.Type.SPINNING_CIRCLE,
        className: a()(u.icon, u.visible)
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l._Ve, {
          color: "currentColor",
          className: a()(u.icon, {
            [u.visible]: !t
          }),
          "aria-label": c.intl.string(c.t["5h0QOD"])
        }), (0, r.jsx)(l.Dio, {
          color: "currentColor",
          className: a()(u.clear, {
            [u.visible]: t
          }),
          "aria-label": c.intl.string(c.t.VkKicX)
        })]
      })
    })
  })
}