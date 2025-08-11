/** Chunk was on web.js **/
/** chunk id: 631937, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk661111 = require("./661111.js"),
  Chunk706454 = require("./706454.js"),
  Chunk306680 = require("./306680.js"),
  Chunk626135 = require("./626135.js"),
  Chunk802098 = require("./802098.js"),
  Chunk193701 = require("./193701.js"),
  Chunk702321 = require("./702321.js"),
  Chunk981631 = require("./981631.js");

function _(e) {
  let t = (0, u.Z)(e),
    n = (0, i.e7)([a.default], () => a.default.locale),
    _ = (0, i.e7)([c.Z], () => c.Z.getChangelog(null != t ? t : "", n), [t, n]),
    p = (0, d.Z)(e),
    h = r.useRef(p ? Date.now() : null),
    m = (0, i.e7)([s.ZP], () => s.ZP.getUnreadCount(e), [e]),
    g = r.useRef(m);
  r.useEffect(() => {
    g.current = m
  }), r.useEffect(() => {
    h.current = Date.now()
  }, [p]), r.useEffect(() => {
    p && null != t && o.Z.fetchChangelog(t, n, true)
  }, [t, n, p]), r.useEffect(() => {
    p && null != _ && l.default.track(f.rMx.CHANGE_LOG_OPENED, {
      change_log_id: "".concat(_.date, ":").concat(_.revision),
      unread_count: g.current
    })
  }, [p, _]), r.useEffect(() => {
    let e = h.current;
    return () => {
      p && null != _ && null != e && (l.default.track(f.rMx.CHANGE_LOG_CLOSED, {
        seconds_open: Math.round((Date.now() - e) / 1e3),
        change_log_id: "".concat(_.date, ":").concat(_.revision),
        unread_count: g.current
      }), h.current = 0)
    }
  }, [p, _])
}