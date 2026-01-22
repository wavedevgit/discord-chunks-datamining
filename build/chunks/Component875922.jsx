/** Chunk was on 21738 **/
/** chunk id: 875922, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk58149 = require("./58149.js"),
  Chunk231608 = require("./231608.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

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
    h = i.useContext(c.AnalyticsContext),
    A = n.map(e => {
      let {
        user: t
      } = e;
      return t.id
    }),
    g = 1 === f.length && 1 === n.length,
    m = n.length - f.length > 0;
  return (g || t) && !m && 0 !== A.length ? (0, r.jsx)(l.Drp, {
    id: "message",
    action: function() {
      a.A.openPrivateChannel({
        recipientIds: A
      }).then(t => {
        var n, r;
        return s.Ay.trackWithMetadata(u.HAw.ACTIVITY_FEED_DM_VISITED, p({
          source: (n = p({}, h.location), r = r = {
            object: u.ZSU.LIST_ITEM
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
          recipient_id: "string" == typeof A ? A : A[0],
          af_recently_played: false
        }, (0, o.o)(e)))
      })
    },
    label: d.intl.string(d.t["g33r/P"])
  }) : null
}