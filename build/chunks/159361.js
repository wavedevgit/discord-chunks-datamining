/** Chunk was on 22988 **/
/** chunk id: 159361, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk581050 = require("./581050.js"),
  Chunk388032 = require("./388032.js");

function l(e) {
  var t, n;
  return {
    isApplicationRejected: (null == e || null == (t = e.latestRequest) ? true : t.state) === r.X.REJECTED,
    requestCooldownDuration: function(e) {
      let t;
      if (null == e) return;
      let n = Date.parse(e),
        r = Date.now();
      if (isNaN(n) || n < r) return;
      let l = Math.round((n - r) / 6e4),
        a = e => Math.round(l / e);
      return l >= 43200 ? i.intl.formatToPlainString(i.t.kridzM, {
        months: a(43200)
      }) : l >= 10080 ? i.intl.formatToPlainString(i.t.EmoBDw, {
        weeks: a(10080)
      }) : l >= 1440 ? i.intl.formatToPlainString(i.t.k2UNz8, {
        days: a(1440)
      }) : l >= 60 ? i.intl.formatToPlainString(i.t.xCjYxM, {
        hours: a(60)
      }) : i.intl.formatToPlainString(i.t.iXLF9f, {
        minutes: l
      })
    }(null == e || null == (n = e.rejection) ? true : n.can_reapply_at)
  }
}