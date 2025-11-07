/** Chunk was on 86642 **/
/** chunk id: 179295, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk647438 = require("./647438.js"),
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
    handleMouseEnter: p
  } = e, f = i.useRef(null), h = (0, r.e7)([a.Z], () => a.Z.getRTCConnection((0, l.V9)(t))), m = i.useCallback((e, t, i) => {
    f.current = Date.now(), n(e, t, i)
  }, [n]);
  return {
    handleMouseUp: i.useCallback((e, t, n) => {
      if (d(e, t, n), null != f.current) {
        var i;
        null != h && (i = Date.now() - f.current, o.default.track(s.rMx.PREMIUM_FEATURE_USAGE, {
          feature_name: "".concat(c.QP.SHARED_CANVAS, "_").concat(e.type),
          feature_tier: c.h1.FREE,
          media_session_id: h.getMediaSessionId(),
          parent_media_session_id: h.parentMediaSessionId,
          guild_id: h.guildId,
          duration: i
        })), f.current = null
      }
    }, [d, h]),
    handleMouseDown: m,
    handleMouseMove: u,
    handleMouseEnter: p
  }
}