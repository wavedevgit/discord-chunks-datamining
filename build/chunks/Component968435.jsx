/** Chunk was on 70154 **/
/** chunk id: 968435, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk70097 = require("./70097.jsx"),
  Chunk475595 = require("./475595.js");
let i = function(e) {
  let {
    quest: n,
    dimensions: t,
    className: i
  } = e, l = (0, r.fh)(n, r.eC.HERO_IMAGE), s = null != t ? (0, r.nK)(t.width, t.height) : true, d = (0, r.f0)(l.url, s);
  return null != d ? (0, a.jsx)("img", {
    src: d,
    alt: n.config.messages.questName,
    className: i
  }) : l.isAnimated ? (0, a.jsx)(o.Z, {
    className: i,
    autoPlay: false,
    loop: false,
    muted: true,
    playsInline: true,
    controls: false,
    src: l.url
  }) : null
}