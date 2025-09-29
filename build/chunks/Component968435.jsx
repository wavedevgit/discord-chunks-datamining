/** Chunk was on 76418 **/
/** chunk id: 968435, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk70097 = require("./70097.jsx"),
  Chunk475595 = require("./475595.js");
let s = function(e) {
  let {
    quest: n,
    dimensions: t,
    className: s
  } = e, o = (0, i.fh)(n, i.eC.HERO_IMAGE), l = null != t ? (0, i.nK)(t.width, t.height) : true, c = (0, i.f0)(o.url, l);
  return null != c ? (0, a.jsx)("img", {
    src: c,
    alt: n.config.messages.questName,
    className: s
  }) : o.isAnimated ? (0, a.jsx)(r.Z, {
    className: s,
    autoPlay: false,
    loop: false,
    muted: true,
    playsInline: true,
    controls: false,
    src: o.url
  }) : null
}