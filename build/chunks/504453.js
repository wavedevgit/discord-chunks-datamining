/** Chunk was on web.js **/
/** chunk id: 504453, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk473749 = require("./473749.js"),
  Chunk688619 = require("./688619.js"),
  a = require.n(Chunk688619),
  Chunk522942 = require("./522942.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk302221 = require("./302221.js"),
  Chunk489511 = require("./489511.js");

function d(e) {
  var t;
  let {
    displayNameStyles: n,
    backgroundColor: i
  } = e, d = (0, s.e7)([l.Z], () => l.Z.desaturateUserColors ? l.Z.saturation : 1), f = null != (t = null == n ? true : n.effectId) ? t : o.m.SOLID, p = (0, u.R)(f);
  return r.useMemo(() => null == n ? [] : n.colors.map(e => (0, c.wh)({
    foreground: a()(e),
    background: f === o.m.TOON ? a()("#333") : a()(i),
    ratio: p.minContrastRatio,
    saturationFactor: d
  }).hex()), [n, f, p.minContrastRatio, d, i])
}