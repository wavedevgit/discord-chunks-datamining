/** Chunk was on 34712 **/
/** chunk id: 389190, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => x
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

function x(e) {
  let {
    user: n,
    guildId: t,
    channelId: x,
    onClose: b
  } = e, {
    mutualFriends: h
  } = (0, s.Z)(n), {
    analyticsLocations: j
  } = (0, c.ZP)(), {
    context: g,
    trackUserProfileAction: v
  } = (0, a.KZ)(), y = (0, i.Z)();
  return l.useEffect(() => {
    (0, d.Z)(n.id, y)
  }, [n.id, y]), (0, o.jsx)(r.zJl, {
    className: m.listScroller,
    fade: true,
    children: null == h ? (0, o.jsx)("div", {
      className: m.empty,
      children: (0, o.jsx)(r.$jN, {})
    }) : 0 === h.length ? (0, o.jsxs)("div", {
      className: m.empty,
      children: [(0, o.jsx)("div", {
        className: m.emptyIconFriends
      }), (0, o.jsx)("div", {
        className: m.emptyText,
        children: p.intl.string(p.t["/5p4g4"])
      })]
    }) : h.map(e => {
      let {
        key: n,
        user: l,
        status: r
      } = e;
      return (0, o.jsx)(f.Z, {
        user: l,
        status: r,
        guildId: t,
        channelId: x,
        onSelect: () => {
          var e, n, t;
          null == b || b(), v({
            action: "PRESS_MUTUAL_FRIEND"
          }), e = l.id, (0, u.openUserProfileModal)((n = function(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {},
                o = Object.keys(t);
              "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
              }))), o.forEach(function(n) {
                var o;
                o = t[n], n in e ? Object.defineProperty(e, n, {
                  value: o,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[n] = o
              })
            }
            return e
          }({}, g), t = t = {
            userId: e,
            sourceAnalyticsLocations: j
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              t.push.apply(t, o)
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