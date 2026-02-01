/** Chunk was on 93169 **/
/** chunk id: 479335, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => f
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

function f(e) {
  let {
    userId: t,
    channelId: n,
    guildId: f,
    minimal: g = false
  } = e, b = (0, u.k)({
    channelId: n
  }), p = (0, l.bG)([c.default], () => c.default.getId() === t), v = (0, s.Us)(), _ = r.useCallback(() => {
    o.A.openSecureFramesUserVerificationModal(t, n, () => (0, d.z4)({
      userId: t,
      channelId: n,
      guildId: f
    }), v)
  }, [v, n, f, t]);
  return !b || p ? null : (0, i.jsx)(a.Drp, {
    id: "secure-frames-user-verification",
    label: A.intl.string(A.t["8ErYvY"]),
    action: _,
    icon: g ? a.V1C : null,
    leadingAccessory: g ? {
      type: "icon",
      icon: a.V1C
    } : true
  })
}