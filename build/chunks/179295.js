/** Chunk was on 47387 **/
/** chunk id: 179295, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk569545 = require("./569545.js"),
  Chunk959457 = require("./959457.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function c(e, t) {
  let {
    handleMouseDown: n,
    handleMouseMove: c,
    handleMouseUp: d,
    handleMouseEnter: f
  } = e, p = r.useRef(null), m = (0, l.e7)([a.Z], () => a.Z.getRTCConnection((0, i.V9)(t))), E = r.useCallback((e, t, r) => {
    p.current = Date.now(), n(e, t, r)
  }, [n]);
  return {
    handleMouseUp: r.useCallback((e, t, n) => {
      if (d(e, t, n), null != p.current) {
        var r;
        null != m && (r = Date.now() - p.current, o.default.track(u.rMx.PREMIUM_FEATURE_USAGE, {
          feature_name: "".concat(s.QP.SHARED_CANVAS, "_").concat(e.type),
          feature_tier: s.h1.FREE,
          media_session_id: m.getMediaSessionId(),
          parent_media_session_id: m.parentMediaSessionId,
          guild_id: m.guildId,
          duration: r
        })), p.current = null
      }
    }, [d, m]),
    handleMouseDown: E,
    handleMouseMove: c,
    handleMouseEnter: f
  }
}