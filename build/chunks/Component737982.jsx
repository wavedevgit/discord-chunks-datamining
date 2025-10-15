/** Chunk was on 57695 **/
/** chunk id: 737982, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk704215 = require("./704215.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk434479 = require("./434479.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk933104 = require("./933104.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk921944 = require("./921944.js"),
  Chunk948208 = require("./948208.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk990963 = require("./990963.js");
let _ = Chunk647438.memo(function(e) {
  let {
    guildId: t,
    selected: n
  } = e, _ = (0, o.f9)(), [O, y] = (0, s.ZT)([l.z.GAME_SERVER_HOSTING_NEW_BADGE], t), v = i.useCallback(() => {
    O === l.z.GAME_SERVER_HOSTING_NEW_BADGE && y(f.L.USER_DISMISS), (0, u.uL)(p.Z5c.CHANNEL(t, h.oC.GAME_SERVERS))
  }, [t, O, y]), j = i.useRef(null), x = O === l.z.GAME_SERVER_HOSTING_NEW_BADGE;
  return (0, r.jsx)(a.yRy, {
    targetElementRef: j,
    shouldShow: x && !_,
    nudgeAlignIntoViewport: true,
    animationPosition: "bottom",
    position: "right",
    renderPopout: () => (0, r.jsx)(d.En, {
      guildId: t,
      markAsDismissed: y
    }),
    children: e => {
      var i, l;
      return (0, r.jsx)(c.m, (i = function(e) {
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
      }({}, e), l = l = {
        ref: j,
        id: "game-server-".concat(t),
        renderIcon: e => (0, r.jsx)(a.iWm, {
          size: "md",
          className: e,
          color: "currentColor"
        }),
        text: m.intl.string(g.default.vCzwMz),
        selected: n,
        onClick: v,
        trailing: x ? (0, r.jsx)(a.IGR, {
          disableColor: true,
          text: m.intl.string(m.t.y2b7CA),
          className: b.badge
        }) : null
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
      }), i))
    }
  })
})