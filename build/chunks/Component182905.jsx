/** Chunk was on 86915 **/
/** chunk id: 182905, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk469244 = require("./469244.js");
let u = e => {
  let {
    className: t,
    icon: n,
    noticeText: l,
    buttonText: u,
    onClick: h,
    canSync: g
  } = e;
  return (0, i.jsx)(o.Zbd, {
    className: r()(t, d.card),
    children: (0, i.jsxs)(c.Z, {
      justify: c.Z.Justify.BETWEEN,
      align: c.Z.Align.CENTER,
      children: [(0, i.jsx)(n, {
        width: 20,
        height: 20,
        size: "custom",
        color: s.Z.unsafe_rawColors.YELLOW_300.css
      }), (0, i.jsx)("div", {
        className: d.label,
        children: (0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          children: l
        })
      }), g && (0, i.jsx)(a.zx, {
        size: a.zx.Sizes.SMALL,
        color: a.zx.Colors.PRIMARY,
        onClick: h,
        children: u
      })]
    })
  })
}