/** Chunk was on 83175 **/
/** chunk id: 968435, original params: e,n,t (module,exports,require) **/
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
    dimensions: t,
    className: i,
    assetRef: l
  } = e, s = (0, r.fh)(n, r.eC.HERO_IMAGE), d = null != t ? (0, r.nK)(t.width, t.height) : true, c = (0, r.f0)(s.url, d);
  return null != c ? (0, a.jsx)("img", {
    ref: l,
    src: c,
    alt: n.config.messages.questName,
    className: i
  }) : s.isAnimated ? (0, a.jsx)(o.Z, {
    ref: l,
    className: i,
    autoPlay: false,
    loop: false,
    muted: true,
    playsInline: true,
    controls: false,
    src: s.url
  }) : null
}