/** Chunk was on 75283 **/
/** chunk id: 311044, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk443680 = require("./443680.js");

function g(e) {
  let {
    user: t,
    guildId: n,
    channelId: g,
    onClose: h
  } = e, {
    analyticsLocations: x
  } = (0, a.ZP)(), {
    context: _,
    trackUserProfileAction: j
  } = (0, s.KZ)(), {
    mutualFriends: v,
    mutualFriendsCount: y
  } = (0, d.Z)(t), I = (0, l.Z)();
  return o.useEffect(() => {
    (0, u.Z)(t.id, I)
  }, [t.id, I]), (0, r.jsx)(i.Ttm, {
    className: b.scroller,
    fade: true,
    children: null == v ? Array.from({
      length: null != y ? y : 10
    }).map((e, t) => (0, r.jsxs)("div", {
      className: b.friendsLoadingItem,
      children: [(0, r.jsx)(c.ZT, {
        width: 40,
        opacity: .08
      }), (0, r.jsx)(c.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t)) : 0 === v.length ? (0, r.jsx)(m.s_, {}) : v.map(e => {
      let {
        key: t,
        user: o,
        status: i
      } = e;
      return (0, r.jsx)(p.Z, {
        user: o,
        status: i,
        guildId: n,
        channelId: g,
        onSelect: () => {
          var e, t;
          null == h || h(), j({
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
          }({}, _), t = t = {
            userId: o.id,
            sourceAnalyticsLocations: x
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