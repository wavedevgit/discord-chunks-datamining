/** Chunk was on 66692 **/
/** chunk id: 479335, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk144485 = require("./144485.jsx"),
  Chunk814278 = require("./814278.js"),
  Chunk259374 = require("./259374.js"),
  Chunk961350 = require("./961350.js"),
  Chunk985018 = require("./985018.jsx");

function b(e) {
  let {
    userId: t,
    channelId: n,
    guildId: b,
    minimal: f = false
  } = e, g = (0, u.k)({
    channelId: n
  }), A = (0, i.bG)([d.default], () => d.default.getId() === t), h = (0, o.Us)(), j = l.useCallback(() => {
    c.A.openSecureFramesUserVerificationModal(t, n, () => (0, s.z4)({
      userId: t,
      channelId: n,
      guildId: b
    }), h)
  }, [h, n, b, t]);
  return !g || A ? null : (0, r.jsx)(a.Drp, {
    id: "secure-frames-user-verification",
    label: p.intl.string(p.t["8ErYvY"]),
    action: j,
    icon: f ? a.V1C : null
  })
}