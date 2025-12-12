/** Chunk was on 7891 **/
/** chunk id: 119315, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk969183 = require("./969183.js");
let o = e => {
  let {
    left: t,
    top: n = 0,
    right: r = 0,
    bottom: o,
    size: s = 8,
    alert: c = false,
    showBlurpleTreatment: u = false,
    maskColor: d = 2,
    additionalStyles: p
  } = e;
  return (0, i.jsx)("span", {
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
      right: r,
      bottom: o
    }
  })
}