/** Chunk was on 31748 **/
/** chunk id: 245704, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk652896 = require("./652896.js"),
  Chunk162605 = require("./162605.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");

function u(e, t) {
  let {
    handleMouseDown: n,
    handleMouseMove: u,
    handleMouseUp: d,
    handleMouseEnter: f
  } = e, p = r.useRef(null), g = (0, l.bG)([a.A], () => a.A.getRTCConnection((0, i._z)(t))), m = r.useCallback((e, t, r) => {
    p.current = Date.now(), n(e, t, r)
  }, [n]);
  return {
    handleMouseUp: r.useCallback((e, t, n) => {
      if (d(e, t, n), null != p.current) {
        var r;
        null != g && (r = Date.now() - p.current, o.default.track(s.HAw.PREMIUM_FEATURE_USAGE, {
          feature_name: "".concat(c.Ae.SHARED_CANVAS, "_").concat(e.type),
          feature_tier: c.tz.FREE,
          media_session_id: g.getMediaSessionId(),
          parent_media_session_id: g.parentMediaSessionId,
          guild_id: g.guildId,
          duration: r
        })), p.current = null
      }
    }, [d, g]),
    handleMouseDown: m,
    handleMouseMove: u,
    handleMouseEnter: f
  }
}