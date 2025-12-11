/** Chunk was on 17302 **/
/** chunk id: 737982, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk400580 = require("./400580.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk990963 = require("./990963.js");
let O = Chunk473749.memo(function(e) {
  let {
    guildId: t,
    selected: n
  } = e, O = (0, a.useHasAnyModalOpen)(), v = (0, l.e7)([f.Z], () => f.Z.hasLayers()), [j, x] = (0, c.ZT)([o.z.GAME_SERVER_HOSTING_NEW_BADGE], t), C = j === o.z.GAME_SERVER_HOSTING_NEW_BADGE, [E, S] = (0, c.ZT)(O || v || !C ? [] : [o.z.GAME_SERVER_HOSTING_NEW_COACHMARK], t), I = i.useCallback(e => {
    x(e), S(e)
  }, [x, S]), P = i.useCallback(() => {
    I(m.L.USER_DISMISS), (0, d.uL)(h.Z5c.CHANNEL(t, g.oC.GAME_SERVERS))
  }, [t, I]), N = i.useRef(null), Z = E === o.z.GAME_SERVER_HOSTING_NEW_COACHMARK, w = i.useCallback(() => (0, r.jsx)(p.En, {
    channelRowRef: N,
    guildId: t,
    markAsDismissed: I
  }), [t, I]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.m, {
      ref: N,
      id: "game-server-".concat(t),
      renderIcon: e => (0, r.jsx)(s.iWm, {
        size: "md",
        className: e,
        color: "currentColor"
      }),
      text: _.intl.string(b.default.vCzwM7),
      selected: n,
      onClick: P,
      trailing: C ? (0, r.jsx)(s.IGR, {
        disableColor: true,
        text: _.intl.string(_.t.y2b7CA),
        className: y.badge
      }) : null
    }), Z && w()]
  })
})