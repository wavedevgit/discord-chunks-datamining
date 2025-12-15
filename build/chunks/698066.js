/** Chunk was on 74783 **/
/** chunk id: 698066, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  let {
    problem: t,
    stream: n,
    feedback: l,
    streamApplication: i,
    analyticsData: o,
    location: c,
    rating: s = null,
    category: d,
    variant: u
  } = e;
  r.default.track(a.rMx.STREAM_REPORT_PROBLEM, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({
    reason: t,
    category: d,
    reason_variant: u,
    streamer_user_id: n.ownerId,
    stream_channel_id: n.channelId,
    guild_id: n.guildId,
    application_id: null != i ? i.id : null,
    application_name: null != i ? i.name : null,
    location: c,
    rating: s,
    feedback: l
  }, o))
}