/** Chunk was on 69310 **/
/** chunk id: 601328, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk434479 = require("./434479.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk921944 = require("./921944.js"),
  Chunk440589 = require("./440589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk266389 = require("./266389.js");
let m = Chunk647438.memo(function(e) {
  let {
    guildId: t,
    selected: n
  } = e, [m, b] = (0, a.ZT)([l.z.GAME_SERVER_HOSTING_NEW_BADGE], t), _ = i.useCallback(() => {
    m === l.z.GAME_SERVER_HOSTING_NEW_BADGE && b(p.L.USER_DISMISS), (0, c.uL)(u.Z5c.CHANNEL(t, d.oC.PORTKEY))
  }, [t, m, b]);
  return (0, r.jsx)(s.m, {
    id: "portkey-".concat(t),
    renderIcon: e => (0, r.jsx)(o.iWm, {
      size: "md",
      className: e,
      color: "currentColor"
    }),
    text: f.intl.string(h.default.lH9Dio),
    selected: n,
    onClick: _,
    trailing: m === l.z.GAME_SERVER_HOSTING_NEW_BADGE ? (0, r.jsx)(o.IGR, {
      disableColor: true,
      text: f.intl.string(f.t.y2b7CA),
      className: g.badge
    }) : null
  })
})