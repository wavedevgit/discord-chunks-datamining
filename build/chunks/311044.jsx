/** Chunk was on 11776 **/
/** chunk id: 311044, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk81897 = require("./81897.js"),
  Chunk906732 = require("./906732.js"),
  Chunk566898 = require("./566898.js"),
  Chunk785717 = require("./785717.js"),
  Chunk806729 = require("./806729.js"),
  Chunk857302 = require("./857302.js"),
  Chunk892001 = require("./892001.js"),
  Chunk252417 = require("./252417.jsx"),
  Chunk264481 = require("./264481.jsx"),
  Chunk714905 = require("./714905.js");

function b(e) {
  let {
    user: t,
    guildId: n,
    channelId: b,
    onClose: j
  } = e, {
    analyticsLocations: h
  } = (0, a.ZP)(), {
    context: x,
    trackUserProfileAction: y
  } = (0, s.KZ)(), {
    mutualFriends: v,
    mutualFriendsCount: O
  } = (0, d.Z)(t), _ = (0, o.Z)();
  return l.useEffect(() => {
    (0, u.Z)(t.id, _)
  }, [t.id, _]), <i.Ttm className={g.scroller} fade={true}>{null == v ? Array.from({
      length: null != O ? O : 10
    }).map((e, t) => (0, r.jsxs)("div", {
      className: g.friendsLoadingItem,
      children: [(0, r.jsx)(c.ZT, {
        width: 40,
        opacity: .08
      }), (0, r.jsx)(c.ZT, {
        width: 135,
        opacity: .08
      })]
    }, t)) : 0 === v.length ? (0, r.jsx)(p.s_, {}) : v.map(e => {
      let {
        key: t,
        user: l,
        status: i
      } = e;
      return (0, r.jsx)(m.Z, {
        user: l,
        status: i,
        guildId: n,
        channelId: b,
        onSelect: () => {
          var e, t;
          null == j || j(), y({
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
            sourceAnalyticsLocations: h
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
    })}</i.Ttm>
}