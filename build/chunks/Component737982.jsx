/** Chunk was on 81985 **/
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
  Chunk914820 = require("./914820.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk498374 = require("./498374.js");
let O = Chunk473749.memo(function(e) {
  let {
    guildId: t,
    selected: n
  } = e, O = (0, o.useHasAnyModalOpen)(), j = (0, l.e7)([p.Z], () => p.Z.hasLayers()), [x, C] = (0, c.ZT)([a.z.GAME_SERVER_HOSTING_NEW_BADGE], t), E = x === a.z.GAME_SERVER_HOSTING_NEW_BADGE, [S, _] = (0, c.ZT)(O || j || !E ? [] : [a.z.GAME_SERVER_HOSTING_NEW_COACHMARK], t), I = i.useCallback(e => {
    C(e), _(e)
  }, [C, _]), P = i.useCallback(() => {
    I(m.L.USER_DISMISS), (0, d.uL)(h.Z5c.CHANNEL(t, g.oC.GAME_SERVERS))
  }, [t, I]), Z = i.useRef(null), N = S === a.z.GAME_SERVER_HOSTING_NEW_COACHMARK, T = i.useCallback(() => (0, r.jsx)(f.En, {
    channelRowRef: Z,
    guildId: t,
    markAsDismissed: I
  }), [t, I]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.m, {
      ref: Z,
      id: "game-server-".concat(t),
      renderIcon: e => (0, r.jsx)(s.iWm, {
        size: "md",
        className: e,
        color: "currentColor"
      }),
      text: y.intl.string(b.default.vCzwM7),
      selected: n,
      onClick: P,
      trailing: E ? (0, r.jsx)(s.IGR, {
        disableColor: true,
        text: y.intl.string(y.t.y2b7CA),
        className: v.badge
      }) : null
    }), N && T()]
  })
})