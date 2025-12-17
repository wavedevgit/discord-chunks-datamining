/** Chunk was on 30474 **/
/** chunk id: 995348, original params: a,e,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk848118 = require("./848118.jsx"),
  Chunk180339 = require("./180339.js");

function u(a) {
  var e;
  let {
    imageUrl: n,
    backgroundImageUrl: u,
    altText: d,
    customClassNames: c
  } = a;
  return null == n ? null : (0, r.jsx)(s.p, {
    cardImage: n,
    cardBackgroundImage: u,
    altText: d,
    shape: null != c ? "custom" : "square",
    containerClassName: null != (e = null == c ? true : c.containerClassName) ? e : l.cardImage,
    backgroundImageClassName: null == c ? true : c.backgroundImageClassName,
    foregroundImageClassName: null == c ? true : c.foregroundImageClassName
  })
}