/** Chunk was on 29458 **/
/** chunk id: 311044, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk81897 = require("./81897.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk566898 = require("./566898.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk806729 = require("./806729.js"),
  Chunk857302 = require("./857302.js"),
  Chunk892001 = require("./892001.js"),
  Chunk252417 = require("./252417.jsx"),
  Chunk264481 = require("./264481.jsx"),
  Chunk824754 = require("./824754.js");

function g(e) {
  let {
    user: t,
    guildId: n,
    channelId: g,
    onClose: j
  } = e, {
    analyticsLocations: y
  } = (0, a.ZP)(), {
    context: x,
    trackUserProfileAction: O
  } = (0, s.KZ)(), {
    mutualFriends: h,
    mutualFriendsCount: v
  } = (0, d.Z)(t), _ = (0, o.Z)();
  return l.useEffect(() => {
    (0, u.Z)(t.id, _)
  }, [t.id, _]), (0, r.jsx)(i.Ttm, {
    className: b.scroller,
    fade: true,
    children: null == h ? Array.from({
      length: null != v ? v : 10
    }).map((e, t) => (0, r.jsxs)("div", {
      className: b.friendsLoadingItem,
      children: [(0, r.jsx)(c.ZT, {
        width: 40,
        opacity: .08
      }), (0, r.jsx)(c.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t)) : 0 === h.length ? (0, r.jsx)(m.s_, {}) : h.map(e => {
      let {
        key: t,
        user: l,
        status: i
      } = e;
      return (0, r.jsx)(p.Z, {
        user: l,
        status: i,
        guildId: n,
        channelId: g,
        onSelect: () => {
          var e, t;
          null == j || j(), O({
            action: "PRESS_MUTUAL_FRIEND"
          }), (0, f.openUserProfileModal)((e = function(e) {
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
          }({}, x), t = t = {
            userId: l.id,
            sourceAnalyticsLocations: y
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