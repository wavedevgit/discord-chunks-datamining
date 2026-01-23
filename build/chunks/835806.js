/** Chunk was on 80760 **/
/** chunk id: 835806, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  let {
    problem: t,
    stream: n,
    feedback: o,
    streamApplication: a,
    analyticsData: l,
    location: _,
    rating: c = null,
    category: s,
    variant: u
  } = e;
  r.default.track(i.HAw.STREAM_REPORT_PROBLEM, function(e) {
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
    category: s,
    reason_variant: u,
    streamer_user_id: n.ownerId,
    stream_channel_id: n.channelId,
    guild_id: n.guildId,
    application_id: null != a ? a.id : null,
    application_name: null != a ? a.name : null,
    location: _,
    rating: c,
    feedback: o
  }, l))
}