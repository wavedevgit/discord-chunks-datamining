/** Chunk was on 56710 **/
/** chunk id: 737982, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk434479 = require("./434479.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk819640 = require("./819640.js"),
  Chunk933104 = require("./933104.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk921944 = require("./921944.js"),
  Chunk269794 = require("./269794.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk990963 = require("./990963.js");
let y = Chunk647438.memo(function(e) {
  let {
    guildId: t,
    selected: n
  } = e, [y, v] = (0, c.ZT)([o.z.GAME_SERVER_HOSTING_NEW_BADGE], t), j = i.useCallback(() => {
    y === o.z.GAME_SERVER_HOSTING_NEW_BADGE && v(m.L.USER_DISMISS), (0, d.uL)(h.Z5c.CHANNEL(t, g.oC.GAME_SERVERS))
  }, [t, y, v]), C = i.useRef(null), E = y === o.z.GAME_SERVER_HOSTING_NEW_BADGE, x = (0, a.f9)(), S = (0, l.e7)([p.Z], () => p.Z.hasLayers());
  return (0, r.jsx)(s.yRy, {
    targetElementRef: C,
    shouldShow: E && !x && !S,
    nudgeAlignIntoViewport: true,
    animationPosition: "bottom",
    position: "right",
    renderPopout: () => (0, r.jsx)(f.En, {
      guildId: t,
      markAsDismissed: v
    }),
    children: e => {
      var i, l;
      return (0, r.jsx)(u.m, (i = function(e) {
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
        ref: C,
        id: "game-server-".concat(t),
        renderIcon: e => (0, r.jsx)(s.iWm, {
          size: "md",
          className: e,
          color: "currentColor"
        }),
        text: _.intl.string(b.default.vCzwM7),
        selected: n,
        onClick: j,
        trailing: E ? (0, r.jsx)(s.IGR, {
          disableColor: true,
          text: _.intl.string(_.t.y2b7CA),
          className: O.badge
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