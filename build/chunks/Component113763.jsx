/** Chunk was on 38663 **/
/** chunk id: 113763, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk163126 = require("./163126.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk114212 = require("./114212.jsx"),
  Chunk183555 = require("./183555.jsx"),
  Chunk913453 = require("./913453.js"),
  Chunk229187 = require("./229187.js"),
  Chunk657331 = require("./657331.js"),
  Chunk503062 = require("./503062.jsx"),
  Chunk782505 = require("./782505.jsx"),
  Chunk515054 = require("./515054.jsx"),
  Chunk828151 = require("./828151.js");

function b(e) {
  let {
    user: t,
    guildId: n,
    channelId: b,
    onClose: y
  } = e, {
    analyticsLocations: O
  } = (0, a.Ay)(), {
    context: j,
    trackUserProfileAction: x
  } = (0, s.NJ)(), {
    mutualFriends: h,
    mutualFriendsCount: v
  } = (0, c.A)(t), _ = (0, i.A)();
  return l.useEffect(() => {
    (0, u.A)(t.id, _)
  }, [t.id, _]), (0, r.jsx)(g.K, {
    className: m.XG,
    children: null == h ? Array.from({
      length: null != v ? v : 10
    }).map((e, t) => (0, r.jsxs)("div", {
      className: m.D$,
      children: [(0, r.jsx)(o.FQ, {
        width: 40,
        opacity: .08
      }), (0, r.jsx)(o.FQ, {
        width: 135,
        opacity: .08
      })]
    }, t)) : 0 === h.length ? (0, r.jsx)(p.IA, {}) : h.map(e => {
      let {
        key: t,
        user: l,
        status: i
      } = e;
      return (0, r.jsx)(f.A, {
        user: l,
        status: i,
        guildId: n,
        channelId: b,
        onSelect: () => {
          var e, t;
          null == y || y(), x({
            action: "PRESS_MUTUAL_FRIEND"
          }), (0, d.openUserProfileModal)((e = function(e) {
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
          }({}, j), t = t = {
            userId: l.id,
            sourceAnalyticsLocations: O
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }), e))
        }
      }, t)
    })
  })
}