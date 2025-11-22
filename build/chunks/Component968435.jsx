/** Chunk was on 10349 **/
/** chunk id: 968435, original params: e,n,a (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk70097 = require("./70097.jsx"),
  Chunk475595 = require("./475595.js");
let i = function(e) {
  let {
    quest: n,
    dimensions: a,
    className: i,
    assetRef: s
  } = e, l = (0, r.fh)(n, r.eC.HERO_IMAGE), d = null != a ? (0, r.nK)(a.width, a.height) : true, c = (0, r.f0)(l.url, d);
  return null != c ? (0, t.jsx)("img", {
    ref: s,
    src: c,
    alt: n.config.messages.questName,
    className: i
  }) : l.isAnimated ? (0, t.jsx)(o.Z, {
    ref: s,
    className: i,
    autoPlay: false,
    loop: false,
    muted: true,
    playsInline: true,
    controls: false,
    src: l.url
  }) : null
}