/** Chunk was on 12756 **/
/** chunk id: 389190, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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
  Chunk878449 = require("./878449.js");

function g(e) {
  let {
    user: t,
    guildId: n,
    channelId: g,
    onClose: b
  } = e, {
    mutualFriends: j
  } = (0, s.Z)(t), {
    analyticsLocations: y
  } = (0, a.ZP)(), {
    context: O,
    trackUserProfileAction: h
  } = (0, c.KZ)(), x = (0, o.Z)();
  return i.useEffect(() => {
    (0, d.Z)(t.id, x)
  }, [t.id, x]), (0, r.jsx)(l.zJl, {
    className: m.listScroller,
    fade: true,
    children: null == j ? (0, r.jsx)("div", {
      className: m.empty,
      children: (0, r.jsx)(l.$jN, {})
    }) : 0 === j.length ? (0, r.jsxs)("div", {
      className: m.empty,
      children: [(0, r.jsx)("div", {
        className: m.emptyIconFriends
      }), (0, r.jsx)("div", {
        className: m.emptyText,
        children: p.intl.string(p.t["/5p4g4"])
      })]
    }) : j.map(e => {
      let {
        key: t,
        user: i,
        status: l
      } = e;
      return (0, r.jsx)(f.Z, {
        user: i,
        status: l,
        guildId: n,
        channelId: g,
        onSelect: () => {
          var e, t, n;
          null == b || b(), h({
            action: "PRESS_MUTUAL_FRIEND"
          }), e = i.id, (0, u.openUserProfileModal)((t = function(e) {
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
          }({}, O), n = n = {
            userId: e,
            sourceAnalyticsLocations: y
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        }
      }, t)
    })
  })
}