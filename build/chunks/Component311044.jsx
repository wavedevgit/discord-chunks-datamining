/** Chunk was on 30355 **/
/** chunk id: 311044, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk81897 = require("./81897.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk566898 = require("./566898.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk806729 = require("./806729.js"),
  Chunk857302 = require("./857302.js"),
  Chunk892001 = require("./892001.js"),
  Chunk252417 = require("./252417.jsx"),
  Chunk264481 = require("./264481.jsx"),
  Chunk661462 = require("./661462.jsx"),
  Chunk527639 = require("./527639.js");

function b(e) {
  let {
    user: t,
    guildId: r,
    channelId: b,
    onClose: j
  } = e, {
    analyticsLocations: O
  } = (0, a.ZP)(), {
    context: x,
    trackUserProfileAction: y
  } = (0, o.KZ)(), {
    mutualFriends: h,
    mutualFriendsCount: v
  } = (0, c.Z)(t), P = (0, i.Z)();
  return l.useEffect(() => {
    (0, u.Z)(t.id, P)
  }, [t.id, P]), (0, n.jsx)(p.F, {
    className: g.scroller,
    children: null == h ? Array.from({
      length: null != v ? v : 10
    }).map((e, t) => (0, n.jsxs)("div", {
      className: g.friendsLoadingItem,
      children: [(0, n.jsx)(s.ZT, {
        width: 40,
        opacity: .08
      }), (0, n.jsx)(s.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t)) : 0 === h.length ? (0, n.jsx)(m.s_, {}) : h.map(e => {
      let {
        key: t,
        user: l,
        status: i
      } = e;
      return (0, n.jsx)(f.Z, {
        user: l,
        status: i,
        guildId: r,
        channelId: b,
        onSelect: () => {
          var e, t;
          null == j || j(), y({
            action: "PRESS_MUTUAL_FRIEND"
          }), (0, d.openUserProfileModal)((e = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              }))), n.forEach(function(t) {
                var n;
                n = r[t], t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = n
              })
            }
            return e
          }({}, x), t = t = {
            userId: l.id,
            sourceAnalyticsLocations: O
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          }), e))
        }
      }, t)
    })
  })
}