/** Chunk was on 47495 **/
/** chunk id: 768446, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z: () => d
});
var Chunk647438 = require("./647438.js"),
  Chunk522942 = require("./522942.js"),
  Chunk342905 = require("./342905.js"),
  Chunk809206 = require("./809206.js"),
  Chunk18438 = require("./18438.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
  let {
    hasChanges: t,
    selectedFontId: n,
    selectedEffectId: d,
    selectedColors: u,
    defaultColor: p,
    guildId: m,
    onClose: f
  } = e;
  return l.useCallback(() => {
    if (t) {
      let e = u;
      d === o.m.SOLID && u.length > 0 && u[0] === p && (e = []);
      let t = {
        fontId: n,
        effectId: d,
        colors: e
      };
      null != m ? (0, a.N_)(t) : (0, i.NI)(t), s.default.track(c.rMx.DISPLAY_NAME_STYLES_APPLIED, {
        font_name: r.C[n],
        effect_name: o.m[d],
        colors: u
      }), null == f || f()
    }
  }, [t, n, d, u, p, f, m])
}