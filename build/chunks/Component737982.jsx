/** Chunk was on 51235 **/
/** chunk id: 737982, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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
  Chunk160589 = require("./160589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk498374 = require("./498374.js");
let v = Chunk473749.memo(function(e) {
  let {
    guildId: t,
    selected: n
  } = e, v = (0, o.useHasAnyModalOpen)(), j = (0, l.e7)([f.Z], () => f.Z.hasLayers()), [C, x] = (0, c.ZT)([a.z.GAME_SERVER_HOSTING_NEW_BADGE], t), E = C === a.z.GAME_SERVER_HOSTING_NEW_BADGE, [S, I] = (0, c.ZT)(v || j || !E ? [] : [a.z.GAME_SERVER_HOSTING_NEW_COACHMARK], t), _ = i.useCallback(e => {
    x(e), I(e)
  }, [x, I]), P = i.useCallback(() => {
    _(b.L.USER_DISMISS), (0, d.uL)(p.Z5c.CHANNEL(t, g.oC.GAME_SERVERS))
  }, [t, _]), N = i.useRef(null), Z = S === a.z.GAME_SERVER_HOSTING_NEW_COACHMARK, w = i.useCallback(() => (0, r.jsx)(h.En, {
    channelRowRef: N,
    guildId: t,
    markAsDismissed: _
  }), [t, _]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.m, {
      ref: N,
      id: "game-server-".concat(t),
      renderIcon: e => (0, r.jsx)(s.iWm, {
        size: "md",
        className: e,
        color: "currentColor"
      }),
      text: y.intl.string(m.default.vCzwM7),
      selected: n,
      onClick: P,
      trailing: E ? (0, r.jsx)(s.IGR, {
        disableColor: true,
        text: y.intl.string(y.t.y2b7CA),
        className: O.badge
      }) : null
    }), Z && w()]
  })
})