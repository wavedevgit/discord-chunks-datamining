/** Chunk was on web.js **/
/** chunk id: 968435, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk70097 = require("./70097.jsx"),
  Chunk475595 = require("./475595.js");
let a = function(e) {
  let {
    quest: t,
    dimensions: n,
    className: a
  } = e, s = (0, o.fh)(t, o.eC.HERO_IMAGE), l = null != n ? (0, o.nK)(n.width, n.height) : true, c = (0, o.f0)(s.url, l);
  return null != c ? <img src={c} alt={t.config.messages.questName} className={a} /> : s.isAnimated ? <i.Z className={a} autoPlay={false} loop={false} muted={true} playsInline={true} controls={false} src={s.url} /> : null
}