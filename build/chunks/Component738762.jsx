/** Chunk was on 1272 **/
/** chunk id: 738762, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk367907 = require("./367907.js"),
  Chunk205129 = require("./205129.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
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
}

function f(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    {
      priorityMembers: n,
      partiedMembers: f
    } = e,
    g = i.useContext(c.AnalyticsContext),
    h = n.map(e => {
      let {
        user: t
      } = e;
      return t.id
    }),
    m = 1 === f.length && 1 === n.length,
    b = n.length - f.length > 0;
  return (m || t) && !b && 0 !== h.length ? (0, r.jsx)(l.sNh, {
    id: "message",
    action: function() {
      a.Z.openPrivateChannel({
        recipientIds: h
      }).then(t => {
        var n, r;
        return o.ZP.trackWithMetadata(u.rMx.ACTIVITY_FEED_DM_VISITED, p({
          source: (n = p({}, g.location), r = r = {
            object: u.qAy.LIST_ITEM
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(r)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }), n),
          channel_id: t,
          recipient_id: "string" == typeof h ? h : h[0],
          af_recently_played: false
        }, (0, s.y)(e)))
      })
    },
    label: d.intl.string(d.t["g33r/P"])
  }) : null
}