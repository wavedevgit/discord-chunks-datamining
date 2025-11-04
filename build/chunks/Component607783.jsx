/** Chunk was on 98783 **/
/** chunk id: 607783, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk352954 = require("./352954.jsx"),
  Chunk630759 = require("./630759.js"),
  Chunk441894 = require("./441894.js"),
  Chunk314897 = require("./314897.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let {
    userId: t,
    channelId: n,
    guildId: f,
    minimal: b = false
  } = e, Z = (0, d.J)({
    channelId: n
  }), m = (0, r.e7)([c.default], () => c.default.getId() === t), v = (0, o.bp)(), p = l.useCallback(() => {
    s.Z.openSecureFramesUserVerificationModal(t, n, () => (0, u.fz)({
      userId: t,
      channelId: n,
      guildId: f
    }), v)
  }, [v, n, f, t]);
  return !Z || m ? null : (0, i.jsx)(a.sNh, {
    id: "secure-frames-user-verification",
    label: g.intl.string(g.t["8ErYvY"]),
    action: p,
    icon: b ? a._uN : null
  })
}