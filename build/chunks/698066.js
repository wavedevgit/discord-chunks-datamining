/** Chunk was on 18912 **/
/** chunk id: 698066, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function i(t) {
  let {
    problem: n,
    stream: e,
    feedback: i,
    streamApplication: a,
    analyticsData: s,
    location: o,
    rating: u = null,
    category: c,
    variant: b
  } = t;
  l.default.track(r.rMx.STREAM_REPORT_PROBLEM, function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {},
        l = Object.keys(e);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(e).filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), l.forEach(function(n) {
        var l;
        l = e[n], n in t ? Object.defineProperty(t, n, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[n] = l
      })
    }
    return t
  }({
    reason: n,
    category: c,
    reason_variant: b,
    streamer_user_id: e.ownerId,
    stream_channel_id: e.channelId,
    guild_id: e.guildId,
    application_id: null != a ? a.id : null,
    application_name: null != a ? a.name : null,
    location: o,
    rating: u,
    feedback: i
  }, s))
}