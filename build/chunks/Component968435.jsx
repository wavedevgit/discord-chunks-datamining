/** Chunk was on 96861 **/
/** chunk id: 968435, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk70097 = require("./70097.jsx"),
  Chunk475595 = require("./475595.js");
let o = function(e) {
  let {
    quest: t,
    dimensions: n,
    className: o
  } = e, s = (0, i.fh)(t, i.eC.HERO_IMAGE), l = null != n ? (0, i.nK)(n.width, n.height) : true, c = (0, i.f0)(s.url, l);
  return null != c ? (0, r.jsx)("img", {
    src: c,
    alt: t.config.messages.questName,
    className: o
  }) : s.isAnimated ? (0, r.jsx)(a.Z, {
    className: o,
    autoPlay: false,
    loop: false,
    muted: true,
    playsInline: true,
    controls: false,
    src: s.url
  }) : null
}