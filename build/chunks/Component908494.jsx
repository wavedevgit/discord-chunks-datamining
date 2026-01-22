/** Chunk was on 78888 **/
/** chunk id: 908494, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk302284 = require("./302284.js");
let u = e => {
  let {
    className: t,
    icon: n,
    noticeText: i,
    buttonText: u,
    onClick: h,
    canSync: g
  } = e;
  return (0, l.jsx)(o.ZpM, {
    className: r()(t, d.N),
    children: (0, l.jsxs)(c.A, {
      justify: c.A.Justify.BETWEEN,
      align: c.A.Align.CENTER,
      children: [(0, l.jsx)(n, {
        width: 20,
        height: 20,
        size: "custom",
        color: s.A.unsafe_rawColors.YELLOW_300.css
      }), (0, l.jsx)("div", {
        className: d.P,
        children: (0, l.jsx)(o.Text, {
          variant: "text-md/normal",
          children: i
        })
      }), g && (0, l.jsx)(a.$n, {
        size: a.$n.Sizes.SMALL,
        color: a.$n.Colors.PRIMARY,
        onClick: h,
        children: u
      })]
    })
  })
}