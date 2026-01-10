/** Chunk was on 69813 **/
/** chunk id: 179295, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk569545 = require("./569545.js"),
  Chunk959457 = require("./959457.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function u(e, t) {
  let {
    handleMouseDown: n,
    handleMouseMove: u,
    handleMouseUp: d,
    handleMouseEnter: f
  } = e, p = r.useRef(null), g = (0, l.e7)([a.Z], () => a.Z.getRTCConnection((0, i.V9)(t))), b = r.useCallback((e, t, r) => {
    p.current = Date.now(), n(e, t, r)
  }, [n]);
  return {
    handleMouseUp: r.useCallback((e, t, n) => {
      if (d(e, t, n), null != p.current) {
        var r;
        null != g && (r = Date.now() - p.current, o.default.track(c.rMx.PREMIUM_FEATURE_USAGE, {
          feature_name: "".concat(s.QP.SHARED_CANVAS, "_").concat(e.type),
          feature_tier: s.h1.FREE,
          media_session_id: g.getMediaSessionId(),
          parent_media_session_id: g.parentMediaSessionId,
          guild_id: g.guildId,
          duration: r
        })), p.current = null
      }
    }, [d, g]),
    handleMouseDown: b,
    handleMouseMove: u,
    handleMouseEnter: f
  }
}