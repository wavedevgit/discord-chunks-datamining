/** Chunk was on 80760 **/
/** chunk id: 835806, original params: e,n,a (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function i(e) {
  let {
    problem: n,
    stream: a,
    feedback: i,
    streamApplication: l,
    analyticsData: o,
    location: d,
    rating: c = null,
    category: u,
    variant: f
  } = e;
  t.default.track(r.HAw.STREAM_REPORT_PROBLEM, function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var a = null != arguments[n] ? arguments[n] : {},
        t = Object.keys(a);
      "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
        return Object.getOwnPropertyDescriptor(a, e).enumerable
      }))), t.forEach(function(n) {
        var t;
        t = a[n], n in e ? Object.defineProperty(e, n, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = t
      })
    }
    return e
  }({
    reason: n,
    category: u,
    reason_variant: f,
    streamer_user_id: a.ownerId,
    stream_channel_id: a.channelId,
    guild_id: a.guildId,
    application_id: null != l ? l.id : null,
    application_name: null != l ? l.name : null,
    location: d,
    rating: c,
    feedback: i
  }, o))
}