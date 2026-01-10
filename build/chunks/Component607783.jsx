/** Chunk was on 92524 **/
/** chunk id: 607783, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
    minimal: m = false
  } = e, b = (0, d.J)({
    channelId: n
  }), Z = (0, r.e7)([c.default], () => c.default.getId() === t), v = (0, o.bp)(), p = i.useCallback(() => {
    u.Z.openSecureFramesUserVerificationModal(t, n, () => (0, s.fz)({
      userId: t,
      channelId: n,
      guildId: f
    }), v)
  }, [v, n, f, t]);
  return !b || Z ? null : (0, l.jsx)(a.sNh, {
    id: "secure-frames-user-verification",
    label: g.intl.string(g.t["8ErYvY"]),
    action: p,
    icon: m ? a._uN : null
  })
}