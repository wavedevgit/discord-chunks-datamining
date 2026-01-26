/** Chunk was on 97887 **/
/** chunk id: 258367, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
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

function h(e) {
  let t = (0, u.A)(e),
    n = (0, l.bG)([s.default], () => s.default.locale),
    h = (0, l.bG)([c.A], () => c.A.getChangelog(null != t ? t : "", n), [t, n]),
    f = (0, d.A)(e),
    g = r.useRef(f ? Date.now() : null),
    m = (0, l.bG)([a.Ay], () => a.Ay.getUnreadCount(e), [e]),
    b = r.useRef(m);
  r.useEffect(() => {
    b.current = m
  }), r.useEffect(() => {
    g.current = Date.now()
  }, [f]), r.useEffect(() => {
    f && null != t && i.A.fetchChangelog(t, n, true)
  }, [t, n, f]), r.useEffect(() => {
    f && null != h && o.default.track(p.HAw.CHANGE_LOG_OPENED, {
      change_log_id: "".concat(h.date, ":").concat(h.revision),
      unread_count: b.current
    })
  }, [f, h]), r.useEffect(() => {
    let e = g.current;
    return () => {
      f && null != h && null != e && (o.default.track(p.HAw.CHANGE_LOG_CLOSED, {
        seconds_open: Math.round((Date.now() - e) / 1e3),
        change_log_id: "".concat(h.date, ":").concat(h.revision),
        unread_count: b.current
      }), g.current = 0)
    }
  }, [f, h])
}