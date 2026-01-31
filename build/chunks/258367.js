/** Chunk was on 17534 **/
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
    n = (0, l.bG)([s.default], () => s.default.locale),
    p = (0, l.bG)([c.A], () => c.A.getChangelog(null != t ? t : "", n), [t, n]),
    g = (0, d.A)(e),
    f = r.useRef(g ? Date.now() : null),
    m = (0, l.bG)([a.Ay], () => a.Ay.getUnreadCount(e), [e]),
    b = r.useRef(m);
  r.useEffect(() => {
    b.current = m
  }), r.useEffect(() => {
    f.current = Date.now()
  }, [g]), r.useEffect(() => {
    g && null != t && i.A.fetchChangelog(t, n, true)
  }, [t, n, g]), r.useEffect(() => {
    g && null != p && o.default.track(h.HAw.CHANGE_LOG_OPENED, {
      change_log_id: "".concat(p.date, ":").concat(p.revision),
      unread_count: b.current
    })
  }, [g, p]), r.useEffect(() => {
    let e = f.current;
    return () => {
      g && null != p && null != e && (o.default.track(h.HAw.CHANGE_LOG_CLOSED, {
        seconds_open: Math.round((Date.now() - e) / 1e3),
        change_log_id: "".concat(p.date, ":").concat(p.revision),
        unread_count: b.current
      }), f.current = 0)
    }
  }, [g, p])
}