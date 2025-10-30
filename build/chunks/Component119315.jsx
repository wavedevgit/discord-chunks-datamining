/** Chunk was on 13873 **/
/** chunk id: 119315, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk798580 = require("./798580.js");
let o = e => {
  let {
    left: t,
    top: n = 0,
    right: i = 0,
    bottom: o,
    size: s = 8,
    alert: c = false,
    showBlurpleTreatment: u = false,
    maskColor: d = 2,
    additionalStyles: p
  } = e;
  return (0, r.jsx)("span", {
    className: l()(a.dot, {
      [a.alert]: c,
      [a.blurpleTreatment]: u,
      [a.maskPopout]: 0 === d,
      [a.maskPrimary]: 1 === d,
      [a.maskSecondary]: 2 === d,
      [a.maskBlack]: 3 === d,
      [null != p ? p : ""]: true !== p
    }),
    style: {
      height: s,
      width: s,
      left: t,
      top: n,
      right: i,
      bottom: o
    }
  })
}