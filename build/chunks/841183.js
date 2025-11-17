/** Chunk was on 89289 **/
/** chunk id: 841183, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk442552 = require("./442552.js"),
  Chunk314897 = require("./314897.js"),
  Chunk643879 = require("./643879.js"),
  Chunk27367 = require("./27367.js");

function u(e) {
  let {
    avatarId: t,
    storageHash: n,
    size: u
  } = e, {
    onMouseEnter: d,
    onMouseLeave: f,
    shouldAnimate: p
  } = (0, i.Z)(), g = (0, l.e7)([s.default], () => s.default.getId());
  return {
    avatarSrc: r.useMemo(() => (0, o.fD)({
      userId: g,
      avatarId: t,
      storageHash: n,
      canAnimate: p,
      size: (0, a.pxk)(null != u ? u : c.m)
    }), [g, t, n, p, u]),
    isAvatarAnimating: p,
    eventHandlers: {
      onMouseEnter: d,
      onMouseLeave: f
    }
  }
}