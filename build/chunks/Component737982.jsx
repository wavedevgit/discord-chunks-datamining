/** Chunk was on 32118 **/
/** chunk id: 737982, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk434479 = require("./434479.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk933104 = require("./933104.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk921944 = require("./921944.js"),
  Chunk470658 = require("./470658.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk990963 = require("./990963.js");
let b = Chunk647438.memo(function(e) {
  let {
    guildId: t,
    selected: n
  } = e, [b, _] = (0, a.ZT)([l.z.GAME_SERVER_HOSTING_NEW_BADGE], t), O = i.useCallback(() => {
    b === l.z.GAME_SERVER_HOSTING_NEW_BADGE && _(h.L.USER_DISMISS), (0, c.uL)(d.Z5c.CHANNEL(t, p.oC.GAME_SERVERS))
  }, [t, b, _]), y = i.useRef(null), v = b === l.z.GAME_SERVER_HOSTING_NEW_BADGE;
  return (0, r.jsx)(o.yRy, {
    targetElementRef: y,
    shouldShow: v,
    nudgeAlignIntoViewport: true,
    animationPosition: "bottom",
    position: "right",
    renderPopout: () => (0, r.jsx)(u.En, {
      guildId: t,
      markAsDismissed: _
    }),
    children: e => {
      var i, l;
      return (0, r.jsx)(s.m, (i = function(e) {
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
        ref: y,
        id: "game-server-".concat(t),
        renderIcon: e => (0, r.jsx)(o.iWm, {
          size: "md",
          className: e,
          color: "currentColor"
        }),
        text: g.intl.string(f.default.vCzwM7),
        selected: n,
        onClick: O,
        trailing: v ? (0, r.jsx)(o.IGR, {
          disableColor: true,
          text: g.intl.string(g.t.y2b7CA),
          className: m.badge
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