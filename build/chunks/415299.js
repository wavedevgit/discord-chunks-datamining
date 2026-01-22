/** Chunk was on 15682 **/
/** chunk id: 415299, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  v: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk508425 = require("./508425.js"),
  Chunk559949 = require("./559949.js"),
  Chunk631670 = require("./631670.js"),
  Chunk159001 = require("./159001.js"),
  Chunk207803 = require("./207803.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function u(e) {
  let {
    hasChanges: t,
    selectedFontId: l,
    selectedEffectId: u,
    selectedColors: f,
    defaultColor: m,
    guildId: b,
    isTryItOut: p,
    onClose: x
  } = e;
  return n.useCallback(() => {
    if (t) {
      let e = f;
      u === a.z.SOLID && f.length > 0 && f[0] === m && (e = []);
      let t = {
        fontId: l,
        effectId: u,
        colors: e
      };
      null != b ? (0, i.mZ)(t) : p ? (0, o.EW)(t) : (0, r.dM)(t), c.default.track(d.HAw.DISPLAY_NAME_STYLES_APPLIED, {
        font_name: s.x[l],
        effect_name: a.z[u],
        colors: f
      }), null == x || x()
    }
  }, [t, l, u, f, m, x, b, p])
}