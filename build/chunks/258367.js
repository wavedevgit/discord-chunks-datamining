/** Chunk was on 97492 **/
/** chunk id: 258367, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk256311 = require("./256311.js"),
  Chunk773669 = require("./773669.js"),
  Chunk222823 = require("./222823.js"),
  Chunk954571 = require("./954571.js"),
  Chunk883600 = require("./883600.js"),
  Chunk942366 = require("./942366.js"),
  Chunk343328 = require("./343328.js"),
  Chunk652215 = require("./652215.js");

function p(e) {
  let t = (0, u.A)(e),
    n = (0, l.bG)([a.default], () => a.default.locale),
    p = (0, l.bG)([c.A], () => c.A.getChangelog(null != t ? t : "", n), [t, n]),
    h = (0, d.A)(e),
    b = r.useRef(h ? Date.now() : null),
    g = (0, l.bG)([s.Ay], () => s.Ay.getUnreadCount(e), [e]),
    m = r.useRef(g);
  r.useEffect(() => {
    m.current = g
  }), r.useEffect(() => {
    b.current = Date.now()
  }, [h]), r.useEffect(() => {
    h && null != t && i.A.fetchChangelog(t, n, true)
  }, [t, n, h]), r.useEffect(() => {
    h && null != p && o.default.track(f.HAw.CHANGE_LOG_OPENED, {
      change_log_id: "".concat(p.date, ":").concat(p.revision),
      unread_count: m.current
    })
  }, [h, p]), r.useEffect(() => {
    let e = b.current;
    return () => {
      h && null != p && null != e && (o.default.track(f.HAw.CHANGE_LOG_CLOSED, {
        seconds_open: Math.round((Date.now() - e) / 1e3),
        change_log_id: "".concat(p.date, ":").concat(p.revision),
        unread_count: m.current
      }), b.current = 0)
    }
  }, [h, p])
}