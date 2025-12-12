/** Chunk was on web.js **/
/** chunk id: 83949, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk473749 = require("./473749.js"),
  Chunk719711 = require("./719711.js"),
  Chunk433517 = require("./433517.js"),
  Chunk579806 = require("./579806.js"),
  Chunk626135 = require("./626135.js"),
  Chunk998502 = require("./998502.js"),
  Chunk286035 = require("./286035.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
  var t;
  return null == e || null == (t = e._state) ? true : t.lastTestTimestamp
}

function f() {
  return Chunk473749.useEffect(() => {
    window.location.origin === window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN && true !== Chunk433517.K.get(Chunk719711.SV) && Chunk998502.ZP.supportsFeature(Chunk981631.eRX.USER_DATA_CACHE) && (Chunk286035.Te(), Chunk579806.Z.userDataCache.getCached().then(e => {
      if (null == e) {
        c.kb(), s.default.track(u.rMx.DOMAIN_MIGRATED, {
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
        f = null == l || null == d(l) || d(l) <= d(o.K.get("RTCRegionStore"));
      n && r && !f && (o.K.clear(), t.forEach(t => {
        let n = e[t];
        try {
          o.K.set(t, JSON.parse(n))
        } catch (e) {}
      })), s.default.track(u.rMx.DOMAIN_MIGRATED, {
        success: true,
        current_is_newer: f,
        has_data: n
      }, {
        flush: true
      }), o.K.set(i.SV, true), a.Z.userDataCache.deleteCache(), c.Pg()
    }))
  }, []), null
}