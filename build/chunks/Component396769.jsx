/** Chunk was on web.js **/
/** chunk id: 396769, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk791580 = require("./791580.js");

function l(e) {
  let {
    icon: t,
    onClick: n,
    label: l
  } = e;
  return (0, r.jsx)(i.zx, {
    look: i.zx.Looks.BLANK,
    size: i.zx.Sizes.MIN,
    className: s.button,
    onClick: n,
    children: (0, r.jsxs)(a.Z, {
      align: a.Z.Align.CENTER,
      children: [(0, r.jsx)("div", {
        className: s.buttonIcon,
        children: t
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "none",
        children: l
      })]
    })
  })
}