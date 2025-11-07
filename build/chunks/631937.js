/** Chunk was on 86642 **/
/** chunk id: 631937, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
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

function f(e) {
  let t = (0, u.Z)(e),
    n = (0, r.e7)([a.default], () => a.default.locale),
    f = (0, r.e7)([c.Z], () => c.Z.getChangelog(null != t ? t : "", n), [t, n]),
    h = (0, d.Z)(e),
    m = i.useRef(h ? Date.now() : null),
    g = (0, r.e7)([o.ZP], () => o.ZP.getUnreadCount(e), [e]),
    b = i.useRef(g);
  i.useEffect(() => {
    b.current = g
  }), i.useEffect(() => {
    m.current = Date.now()
  }, [h]), i.useEffect(() => {
    h && null != t && l.Z.fetchChangelog(t, n, true)
  }, [t, n, h]), i.useEffect(() => {
    h && null != f && s.default.track(p.rMx.CHANGE_LOG_OPENED, {
      change_log_id: "".concat(f.date, ":").concat(f.revision),
      unread_count: b.current
    })
  }, [h, f]), i.useEffect(() => {
    let e = m.current;
    return () => {
      h && null != f && null != e && (s.default.track(p.rMx.CHANGE_LOG_CLOSED, {
        seconds_open: Math.round((Date.now() - e) / 1e3),
        change_log_id: "".concat(f.date, ":").concat(f.revision),
        unread_count: b.current
      }), m.current = 0)
    }
  }, [h, f])
}