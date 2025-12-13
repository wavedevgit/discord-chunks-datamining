/** Chunk was on 93979 **/
/** chunk id: 389190, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk81897 = require("./81897.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk806729 = require("./806729.js"),
  Chunk857302 = require("./857302.js"),
  Chunk892001 = require("./892001.js"),
  Chunk252417 = require("./252417.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk940640 = require("./940640.js");

function x(e) {
  let {
    user: n,
    guildId: t,
    channelId: x,
    onClose: h
  } = e, {
    mutualFriends: v
  } = (0, s.Z)(n), {
    analyticsLocations: b
  } = (0, a.ZP)(), {
    context: j,
    trackUserProfileAction: g
  } = (0, c.KZ)(), I = (0, r.Z)();
  return i.useEffect(() => {
    (0, d.Z)(n.id, I)
  }, [n.id, I]), (0, l.jsx)(o.zJl, {
    className: p.listScroller,
    fade: true,
    children: null == v ? (0, l.jsx)("div", {
      className: p.empty,
      children: (0, l.jsx)(o.$jN, {})
    }) : 0 === v.length ? (0, l.jsxs)("div", {
      className: p.empty,
      children: [(0, l.jsx)("div", {
        className: p.emptyIconFriends
      }), (0, l.jsx)("div", {
        className: p.emptyText,
        children: m.intl.string(m.t["/5p4gx"])
      })]
    }) : v.map(e => {
      let {
        key: n,
        user: i,
        status: o
      } = e;
      return (0, l.jsx)(f.Z, {
        user: i,
        status: o,
        guildId: t,
        channelId: x,
        onSelect: () => {
          var e, n, t;
          null == h || h(), g({
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
          }({}, j), t = t = {
            userId: e,
            sourceAnalyticsLocations: b
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