/** Chunk was on 47495 **/
/** chunk id: 768446, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk522942 = require("./522942.js"),
  Chunk342905 = require("./342905.js"),
  Chunk809206 = require("./809206.js"),
  Chunk18438 = require("./18438.js"),
  Chunk350327 = require("./350327.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  let {
    hasChanges: t,
    selectedFontId: n,
    selectedEffectId: u,
    selectedColors: p,
    defaultColor: m,
    guildId: f,
    isTryItOut: g,
    onClose: h
  } = e;
  return l.useCallback(() => {
    if (t) {
      let e = p;
      u === o.m.SOLID && p.length > 0 && p[0] === m && (e = []);
      let t = {
        fontId: n,
        effectId: u,
        colors: e
      };
      null != f ? (0, a.N_)(t) : g ? (0, s.rH)(t) : (0, i.NI)(t), c.default.track(d.rMx.DISPLAY_NAME_STYLES_APPLIED, {
        font_name: r.C[n],
        effect_name: o.m[u],
        colors: p
      }), null == h || h()
    }
  }, [t, n, u, p, m, h, f, g])
}