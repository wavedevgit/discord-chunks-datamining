/** Chunk was on 82008 **/
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
  Chunk878449 = require("./878449.js");

function h(e) {
  let {
    user: n,
    guildId: t,
    channelId: h,
    onClose: x
  } = e, {
    mutualFriends: b
  } = (0, a.Z)(n), {
    analyticsLocations: j
  } = (0, c.ZP)(), {
    context: g,
    trackUserProfileAction: v
  } = (0, s.KZ)(), y = (0, i.Z)();
  return l.useEffect(() => {
    (0, d.Z)(n.id, y)
  }, [n.id, y]), (0, r.jsx)(o.zJl, {
    className: p.listScroller,
    fade: true,
    children: null == b ? (0, r.jsx)("div", {
      className: p.empty,
      children: (0, r.jsx)(o.$jN, {})
    }) : 0 === b.length ? (0, r.jsxs)("div", {
      className: p.empty,
      children: [(0, r.jsx)("div", {
        className: p.emptyIconFriends
      }), (0, r.jsx)("div", {
        className: p.emptyText,
        children: m.intl.string(m.t["/5p4g4"])
      })]
    }) : b.map(e => {
      let {
        key: n,
        user: l,
        status: o
      } = e;
      return (0, r.jsx)(f.Z, {
        user: l,
        status: o,
        guildId: t,
        channelId: h,
        onSelect: () => {
          var e, n, t;
          null == x || x(), v({
            action: "PRESS_MUTUAL_FRIEND"
          }), e = l.id, (0, u.openUserProfileModal)((n = function(e) {
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
          }({}, g), t = t = {
            userId: e,
            sourceAnalyticsLocations: j
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t.push.apply(t, r)
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