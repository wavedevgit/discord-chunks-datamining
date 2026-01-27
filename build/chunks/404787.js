/** Chunk was on web.js **/
/** chunk id: 404787, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk64700 = require("./64700.js"),
  Chunk279194 = require("./279194.js"),
  Chunk506774 = require("./506774.js"),
  Chunk77729 = require("./77729.js"),
  Chunk954571 = require("./954571.js"),
  Chunk837921 = require("./837921.js"),
  Chunk545459 = require("./545459.js"),
  Chunk652215 = require("./652215.js");

function d(e) {
  var t;
  return null == e || null == (t = e._state) ? true : t.lastTestTimestamp
}

function f() {
  return r.useEffect(() => {
    window.location.origin === window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN && true !== a.w.get(i.qx) && l.Ay.supportsFeature(u.BYE.USER_DATA_CACHE) && (c._r(), o.A.userDataCache.getCached().then(e => {
      if (null == e) {
        c.Py(), s.default.track(u.HAw.DOMAIN_MIGRATED, {
          success: false,
          has_data: false
        }, {
          flush: true
        });
        return
      }
      let t = Object.keys(e),
        n = 0 !== t.length,
        r = null != e.token,
        l = null == e.RTCRegionStore ? null : JSON.parse(e.RTCRegionStore),
        f = null == l || null == d(l) || d(l) <= d(a.w.get("RTCRegionStore"));
      n && r && !f && (a.w.clear(), t.forEach(t => {
        let n = e[t];
        try {
          a.w.set(t, JSON.parse(n))
        } catch (e) {}
      })), s.default.track(u.HAw.DOMAIN_MIGRATED, {
        success: true,
        current_is_newer: f,
        has_data: n
      }, {
        flush: true
      }), a.w.set(i.qx, true), o.A.userDataCache.deleteCache(), c.Yw()
    }))
  }, []), null
}