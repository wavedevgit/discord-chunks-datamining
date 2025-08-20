/** Chunk was on 16811 **/
/** chunk id: 311044, original params: e,n,t (module,exports,require) **/
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
    user: n,
    guildId: t,
    channelId: g,
    onClose: x
  } = e, {
    analyticsLocations: h
  } = (0, c.ZP)(), {
    context: j,
    trackUserProfileAction: v
  } = (0, s.KZ)(), {
    mutualFriends: _,
    mutualFriendsCount: y
  } = (0, d.Z)(n), I = (0, i.Z)();
  return o.useEffect(() => {
    (0, u.Z)(n.id, I)
  }, [n.id, I]), (0, r.jsx)(l.Ttm, {
    className: b.scroller,
    fade: true,
    children: null == _ ? Array.from({
      length: null != y ? y : 10
    }).map((e, n) => (0, r.jsxs)("div", {
      className: b.friendsLoadingItem,
      children: [(0, r.jsx)(a.ZT, {
        width: 40,
        opacity: .08
      }), (0, r.jsx)(a.ZT, {
        width: 135,
        opacity: .08
      })]
    }, n)) : 0 === _.length ? (0, r.jsx)(p.s_, {}) : _.map(e => {
      let {
        key: n,
        user: o,
        status: l
      } = e;
      return (0, r.jsx)(m.Z, {
        user: o,
        status: l,
        guildId: t,
        channelId: g,
        onSelect: () => {
          var e, n;
          null == x || x(), v({
            action: "PRESS_MUTUAL_FRIEND"
          }), (0, f.openUserProfileModal)((e = function(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {},
                r = Object.keys(t);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
              }))), r.forEach(function(n) {
                var r;
                r = t[n], n in e ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[n] = r
              })
            }
            return e
          }({}, j), n = n = {
            userId: o.id,
            sourceAnalyticsLocations: h
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t.push.apply(t, r)
            }
            return t
          })(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }), e))
        }
      }, n)
    })
  })
}