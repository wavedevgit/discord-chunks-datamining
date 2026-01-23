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
    selectedColors: m,
    defaultColor: p,
    guildId: f,
    isTryItOut: g,
    onClose: _
  } = e;
  return n.useCallback(() => {
    if (t) {
      let e = m;
      u === r.z.SOLID && m.length > 0 && m[0] === p && (e = []);
      let t = {
        fontId: l,
        effectId: u,
        colors: e
      };
      null != f ? (0, o.mZ)(t) : g ? (0, i.EW)(t) : (0, a.dM)(t), c.default.track(d.HAw.DISPLAY_NAME_STYLES_APPLIED, {
        font_name: s.x[l],
        effect_name: r.z[u],
        colors: m
      }), null == _ || _()
    }
  }, [t, l, u, m, p, _, f, g])
}