/** Chunk was on 50642 **/
/** chunk id: 631937, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk661111 = require("./661111.js"),
  Chunk706454 = require("./706454.js"),
  Chunk306680 = require("./306680.js"),
  Chunk626135 = require("./626135.js"),
  Chunk802098 = require("./802098.js"),
  Chunk193701 = require("./193701.js"),
  Chunk702321 = require("./702321.js"),
  Chunk981631 = require("./981631.js");

function h(e) {
  let t = (0, u.Z)(e),
    n = (0, r.e7)([a.default], () => a.default.locale),
    h = (0, r.e7)([c.Z], () => c.Z.getChangelog(null != t ? t : "", n), [t, n]),
    f = (0, d.Z)(e),
    m = i.useRef(f ? Date.now() : null),
    g = (0, r.e7)([o.ZP], () => o.ZP.getUnreadCount(e), [e]),
    b = i.useRef(g);
  i.useEffect(() => {
    b.current = g
  }), i.useEffect(() => {
    m.current = Date.now()
  }, [f]), i.useEffect(() => {
    f && null != t && l.Z.fetchChangelog(t, n, true)
  }, [t, n, f]), i.useEffect(() => {
    f && null != h && s.default.track(p.rMx.CHANGE_LOG_OPENED, {
      change_log_id: "".concat(h.date, ":").concat(h.revision),
      unread_count: b.current
    })
  }, [f, h]), i.useEffect(() => {
    let e = m.current;
    return () => {
      f && null != h && null != e && (s.default.track(p.rMx.CHANGE_LOG_CLOSED, {
        seconds_open: Math.round((Date.now() - e) / 1e3),
        change_log_id: "".concat(h.date, ":").concat(h.revision),
        unread_count: b.current
      }), m.current = 0)
    }
  }, [f, h])
}