/** Chunk was on 64228 **/
/** chunk id: 86404, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
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

function A(e) {
  let {
    user: t,
    guildId: n,
    channelId: A,
    onClose: x
  } = e, {
    mutualFriends: j
  } = (0, c.A)(t), {
    analyticsLocations: h
  } = (0, o.Ay)(), {
    context: g,
    trackUserProfileAction: v
  } = (0, a.NJ)(), b = (0, s.A)();
  return i.useEffect(() => {
    (0, d.A)(t.id, b)
  }, [t.id, b]), (0, l.jsx)(r.IpV, {
    className: f.DK,
    fade: true,
    children: null == j ? (0, l.jsx)("div", {
      className: f.Ie,
      children: (0, l.jsx)(r.y$y, {})
    }) : 0 === j.length ? (0, l.jsxs)("div", {
      className: f.Ie,
      children: [(0, l.jsx)("div", {
        className: f.on
      }), (0, l.jsx)("div", {
        className: f.BI,
        children: m.intl.string(m.t["/5p4gx"])
      })]
    }) : j.map(e => {
      let {
        key: t,
        user: i,
        status: r
      } = e;
      return (0, l.jsx)(p.A, {
        user: i,
        status: r,
        guildId: n,
        channelId: A,
        onSelect: () => {
          var e, t, n;
          null == x || x(), v({
            action: "PRESS_MUTUAL_FRIEND"
          }), e = i.id, (0, u.openUserProfileModal)((t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                l = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), l.forEach(function(t) {
                var l;
                l = n[t], t in e ? Object.defineProperty(e, t, {
                  value: l,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = l
              })
            }
            return e
          }({}, g), n = n = {
            userId: e,
            sourceAnalyticsLocations: h
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              n.push.apply(n, l)
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