/** Chunk was on web.js **/
/** chunk id: 816395, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk310784 = require("./310784.js"),
  a = require.n(Chunk310784),
  Chunk508425 = require("./508425.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk998304 = require("./998304.js"),
  Chunk898985 = require("./898985.js");

function d(e) {
  var t;
  let {
    displayNameStyles: n,
    backgroundColor: i
  } = e, d = (0, s.bG)([l.A], () => l.A.desaturateUserColors ? l.A.saturation : 1), f = null != (t = null == n ? true : n.effectId) ? t : o.z.SOLID, p = (0, u._)(f);
  return r.useMemo(() => null == n ? [] : n.colors.map(e => (0, c.lZ)({
    foreground: a()(e),
    background: f === o.z.TOON ? a()("#333") : a()(i),
    ratio: p.minContrastRatio,
    saturationFactor: d
  }).hex()), [n, f, p.minContrastRatio, d, i])
}