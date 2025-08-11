/** Chunk was on web.js **/
/** chunk id: 119315, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk576073 = require("./576073.js");
let s = e => {
  let {
    left: t,
    top: n = 0,
    right: i = 0,
    bottom: s,
    size: l = 8,
    alert: c = false,
    showBlurpleTreatment: u = false,
    maskColor: d = 2,
    additionalStyles: f
  } = e;
  return (0, r.jsx)("span", {
    className: o()(a.dot, {
      [a.alert]: c,
      [a.blurpleTreatment]: u,
      [a.maskPopout]: 0 === d,
      [a.maskPrimary]: 1 === d,
      [a.maskSecondary]: 2 === d,
      [a.maskBlack]: 3 === d,
      [null != f ? f : ""]: true !== f
    }),
    style: {
      height: l,
      width: l,
      left: t,
      top: n,
      right: i,
      bottom: s
    }
  })
}