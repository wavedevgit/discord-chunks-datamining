/** Chunk was on web.js **/
/** chunk id: 968435, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk70097 = require("./70097.jsx"),
  Chunk475595 = require("./475595.js");
let o = function(e) {
  let {
    quest: t,
    dimensions: n,
    className: o
  } = e, s = (0, a.fh)(t, a.eC.HERO_IMAGE), l = null != n ? (0, a.nK)(n.width, n.height) : true, c = (0, a.f0)(s.url, l);
  return null != c ? (0, r.jsx)("img", {
    src: c,
    alt: t.config.messages.questName,
    className: o
  }) : s.isAnimated ? (0, r.jsx)(i.Z, {
    className: o,
    autoPlay: false,
    loop: false,
    muted: true,
    playsInline: true,
    controls: false,
    src: s.url
  }) : null
}