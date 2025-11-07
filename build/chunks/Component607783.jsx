/** Chunk was on 80125 **/
/** chunk id: 607783, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => b
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

function b(e) {
  let {
    userId: t,
    channelId: n,
    guildId: b,
    minimal: g = false
  } = e, j = (0, u.J)({
    channelId: n
  }), m = (0, l.e7)([d.default], () => d.default.getId() === t), p = (0, c.bp)(), v = r.useCallback(() => {
    s.Z.openSecureFramesUserVerificationModal(t, n, () => (0, a.fz)({
      userId: t,
      channelId: n,
      guildId: b
    }), p)
  }, [p, n, b, t]);
  return !j || m ? null : (0, i.jsx)(o.sNh, {
    id: "secure-frames-user-verification",
    label: f.intl.string(f.t["8ErYvY"]),
    action: v,
    icon: g ? o._uN : null
  })
}