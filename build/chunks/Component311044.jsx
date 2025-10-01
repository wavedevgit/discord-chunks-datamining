/** Chunk was on 49902 **/
/** chunk id: 311044, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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

function m(e) {
  let {
    user: t,
    guildId: n,
    channelId: m,
    onClose: v
  } = e, {
    analyticsLocations: b
  } = (0, a.ZP)(), {
    context: y,
    trackUserProfileAction: j
  } = (0, o.KZ)(), {
    mutualFriends: O,
    mutualFriendsCount: x
  } = (0, c.Z)(t), P = (0, l.Z)();
  return i.useEffect(() => {
    (0, u.Z)(t.id, P)
  }, [t.id, P]), (0, r.jsx)(h.F, {
    className: p.scroller,
    children: null == O ? Array.from({
      length: null != x ? x : 10
    }).map((e, t) => (0, r.jsxs)("div", {
      className: p.friendsLoadingItem,
      children: [(0, r.jsx)(s.ZT, {
        width: 40,
        opacity: .08
      }), (0, r.jsx)(s.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t)) : 0 === O.length ? (0, r.jsx)(g.s_, {}) : O.map(e => {
      let {
        key: t,
        user: i,
        status: l
      } = e;
      return (0, r.jsx)(f.Z, {
        user: i,
        status: l,
        guildId: n,
        channelId: m,
        onSelect: () => {
          var e, t;
          null == v || v(), j({
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
          }({}, y), t = t = {
            userId: i.id,
            sourceAnalyticsLocations: b
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