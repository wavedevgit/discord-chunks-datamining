/** Chunk was on 32923 **/
/** chunk id: 159361, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk581050 = require("./581050.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  var t, n;
  return {
    isApplicationRejected: (null == e || null == (t = e.latestRequest) ? true : t.state) === r.X.REJECTED,
    requestCooldownDuration: function(e) {
      if (null == e) return;
      let t = Date.parse(e),
        n = Date.now();
      if (isNaN(t) || t < n) return;
      let r = Math.round((t - n) / 6e4),
        l = e => Math.round(r / e);
      return r >= 43200 ? i.intl.formatToPlainString(i.t.kridzK, {
        months: l(43200)
      }) : r >= 10080 ? i.intl.formatToPlainString(i.t.EmoBD2, {
        weeks: l(10080)
      }) : r >= 1440 ? i.intl.formatToPlainString(i.t["k2UNz+"], {
        days: l(1440)
      }) : r >= 60 ? i.intl.formatToPlainString(i.t.xCjYxK, {
        hours: l(60)
      }) : i.intl.formatToPlainString(i.t.iXLF9W, {
        minutes: r
      })
    }(null == e || null == (n = e.rejection) ? true : n.can_reapply_at)
  }
}