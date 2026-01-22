/** Chunk was on 53653 **/
/** chunk id: 656925, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk45837 = require("./45837.js"),
  Chunk961350 = require("./961350.js"),
  Chunk101058 = require("./101058.js"),
  Chunk595535 = require("./595535.js");

function u(e) {
  let {
    avatarId: t,
    storageHash: r,
    size: u
  } = e, {
    onMouseEnter: f,
    onMouseLeave: d,
    shouldAnimate: p
  } = (0, i.A)(), g = (0, l.bG)([s.default], () => s.default.getId());
  return {
    avatarSrc: n.useMemo(() => (0, o.Xp)({
      userId: g,
      avatarId: t,
      storageHash: r,
      canAnimate: p,
      size: (0, a.FT9)(null != u ? u : c.q)
    }), [g, t, r, p, u]),
    isAvatarAnimating: p,
    eventHandlers: {
      onMouseEnter: f,
      onMouseLeave: d
    }
  }
}