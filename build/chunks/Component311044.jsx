/** Chunk was on 65414 **/
/** chunk id: 311044, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk98420 = require("./98420.js");

function b(e) {
  let {
    user: t,
    guildId: n,
    channelId: b,
    onClose: y
  } = e, {
    analyticsLocations: j
  } = (0, a.ZP)(), {
    context: h,
    trackUserProfileAction: O
  } = (0, c.KZ)(), {
    mutualFriends: v,
    mutualFriendsCount: x
  } = (0, s.Z)(t), P = (0, l.Z)();
  return i.useEffect(() => {
    (0, u.Z)(t.id, P)
  }, [t.id, P]), (0, r.jsx)(p.F, {
    className: m.scroller,
    children: null == v ? Array.from({
      length: null != x ? x : 10
    }).map((e, t) => (0, r.jsxs)("div", {
      className: m.friendsLoadingItem,
      children: [(0, r.jsx)(o.ZT, {
        width: 40,
        opacity: .08
      }), (0, r.jsx)(o.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t)) : 0 === v.length ? (0, r.jsx)(g.s_, {}) : v.map(e => {
      let {
        key: t,
        user: i,
        status: l
      } = e;
      return (0, r.jsx)(f.Z, {
        user: i,
        status: l,
        guildId: n,
        channelId: b,
        onSelect: () => {
          var e, t;
          null == y || y(), O({
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
          }({}, h), t = t = {
            userId: i.id,
            sourceAnalyticsLocations: j
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