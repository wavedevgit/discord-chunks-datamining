/** Chunk was on 31553 **/
/** chunk id: 389190, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk81897 = require("./81897.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk806729 = require("./806729.js"),
  Chunk857302 = require("./857302.js"),
  Chunk892001 = require("./892001.js"),
  Chunk252417 = require("./252417.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk883172 = require("./883172.js");

function h(e) {
  let {
    user: n,
    guildId: t,
    channelId: h,
    onClose: j
  } = e, {
    mutualFriends: x
  } = (0, c.Z)(n), {
    analyticsLocations: v
  } = (0, s.ZP)(), {
    context: g,
    trackUserProfileAction: b
  } = (0, a.KZ)(), y = (0, o.Z)();
  return i.useEffect(() => {
    (0, d.Z)(n.id, y)
  }, [n.id, y]), (0, l.jsx)(r.zJl, {
    className: p.listScroller,
    fade: true,
    children: null == x ? (0, l.jsx)("div", {
      className: p.empty,
      children: (0, l.jsx)(r.$jN, {})
    }) : 0 === x.length ? (0, l.jsxs)("div", {
      className: p.empty,
      children: [(0, l.jsx)("div", {
        className: p.emptyIconFriends
      }), (0, l.jsx)("div", {
        className: p.emptyText,
        children: m.intl.string(m.t["/5p4g4"])
      })]
    }) : x.map(e => {
      let {
        key: n,
        user: i,
        status: r
      } = e;
      return (0, l.jsx)(f.Z, {
        user: i,
        status: r,
        guildId: t,
        channelId: h,
        onSelect: () => {
          var e, n, t;
          null == j || j(), b({
            action: "PRESS_MUTUAL_FRIEND"
          }), e = i.id, (0, u.openUserProfileModal)((n = function(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {},
                l = Object.keys(t);
              "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
              }))), l.forEach(function(n) {
                var l;
                l = t[n], n in e ? Object.defineProperty(e, n, {
                  value: l,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[n] = l
              })
            }
            return e
          }({}, g), t = t = {
            userId: e,
            sourceAnalyticsLocations: v
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              t.push.apply(t, l)
            }
            return t
          })(Object(t)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
          }), n))
        }
      }, n)
    })
  })
}