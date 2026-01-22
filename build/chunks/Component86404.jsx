/** Chunk was on 64228 **/
/** chunk id: 86404, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk163126 = require("./163126.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk183555 = require("./183555.jsx"),
  Chunk913453 = require("./913453.js"),
  Chunk229187 = require("./229187.js"),
  Chunk657331 = require("./657331.js"),
  Chunk503062 = require("./503062.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk781425 = require("./781425.js");

function x(e) {
  let {
    user: l,
    guildId: t,
    channelId: x,
    onClose: A
  } = e, {
    mutualFriends: j
  } = (0, d.A)(l), {
    analyticsLocations: h
  } = (0, a.Ay)(), {
    context: g,
    trackUserProfileAction: v
  } = (0, o.NJ)(), b = (0, s.A)();
  return i.useEffect(() => {
    (0, c.A)(l.id, b)
  }, [l.id, b]), (0, n.jsx)(r.IpV, {
    className: m.DK,
    fade: true,
    children: null == j ? (0, n.jsx)("div", {
      className: m.Ie,
      children: (0, n.jsx)(r.y$y, {})
    }) : 0 === j.length ? (0, n.jsxs)("div", {
      className: m.Ie,
      children: [(0, n.jsx)("div", {
        className: m.on
      }), (0, n.jsx)("div", {
        className: m.BI,
        children: p.intl.string(p.t["/5p4gx"])
      })]
    }) : j.map(e => {
      let {
        key: l,
        user: i,
        status: r
      } = e;
      return (0, n.jsx)(f.A, {
        user: i,
        status: r,
        guildId: t,
        channelId: x,
        onSelect: () => {
          var e, l, t;
          null == A || A(), v({
            action: "PRESS_MUTUAL_FRIEND"
          }), e = i.id, (0, u.openUserProfileModal)((l = function(e) {
            for (var l = 1; l < arguments.length; l++) {
              var t = null != arguments[l] ? arguments[l] : {},
                n = Object.keys(t);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
              }))), n.forEach(function(l) {
                var n;
                n = t[l], l in e ? Object.defineProperty(e, l, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[l] = n
              })
            }
            return e
          }({}, g), t = t = {
            userId: e,
            sourceAnalyticsLocations: h
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(t)) : (function(e, l) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t.push.apply(t, n)
            }
            return t
          })(Object(t)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(t, e))
          }), l))
        }
      }, l)
    })
  })
}