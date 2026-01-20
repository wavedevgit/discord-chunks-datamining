/** Chunk was on 18912 **/
/** chunk id: 698066, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function r(t) {
  let {
    problem: n,
    stream: e,
    feedback: r,
    streamApplication: a,
    analyticsData: s,
    location: o,
    rating: u = null,
    category: c,
    variant: d
  } = t;
  i.default.track(l.rMx.STREAM_REPORT_PROBLEM, function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {},
        i = Object.keys(e);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(e).filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), i.forEach(function(n) {
        var i;
        i = e[n], n in t ? Object.defineProperty(t, n, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[n] = i
      })
    }
    return t
  }({
    reason: n,
    category: c,
    reason_variant: d,
    streamer_user_id: e.ownerId,
    stream_channel_id: e.channelId,
    guild_id: e.guildId,
    application_id: null != a ? a.id : null,
    application_name: null != a ? a.name : null,
    location: o,
    rating: u,
    feedback: r
  }, s))
}