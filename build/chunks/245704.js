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
  } = e, p = l.useRef(null), b = (0, r.bG)([a.A], () => a.A.getRTCConnection((0, i._z)(t))), g = l.useCallback((e, t, l) => {
    p.current = Date.now(), n(e, t, l)
  }, [n]);
  return {
    handleMouseUp: l.useCallback((e, t, n) => {
      if (d(e, t, n), null != p.current) {
        var l;
        null != b && (l = Date.now() - p.current, s.default.track(o.HAw.PREMIUM_FEATURE_USAGE, {
          feature_name: "".concat(c.Ae.SHARED_CANVAS, "_").concat(e.type),
          feature_tier: c.tz.FREE,
          media_session_id: b.getMediaSessionId(),
          parent_media_session_id: b.parentMediaSessionId,
          guild_id: b.guildId,
          duration: l
        })), p.current = null
      }
    }, [d, b]),
    handleMouseDown: g,
    handleMouseMove: u,
    handleMouseEnter: f
  }
}