/** Chunk was on web.js **/
/** chunk id: 518950, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk125988 = require("./125988.js"),
  Chunk594174 = require("./594174.js"),
  Chunk287008 = require("./287008.js");

function u(e) {
  let {
    userId: t,
    guildId: n,
    size: u,
    showPending: d = false,
    showTryItOut: f = false,
    animateOnHover: _ = false,
    avatarDecorationOverride: p,
    avatarOverride: h
  } = e, m = (0, i.e7)([l.default], () => l.default.getUser(t)), {
    avatarSrc: g,
    isAvatarAnimating: E,
    eventHandlers: b
  } = (0, c.Z)({
    user: m,
    guildId: n,
    size: (0, a.pxk)(u),
    showPending: d,
    animateOnHover: _,
    avatarOverride: h
  }), {
    avatarPlaceholderSrc: y,
    avatarDecorationSrc: O,
    eventHandlers: v
  } = (0, s.Z)({
    user: m,
    guildId: null != n ? n : true,
    size: (0, o.y9)(u),
    showPending: d,
    onlyAnimateOnHoverOrFocus: _,
    avatarDecorationOverride: p,
    showTryItOut: f
  });
  return {
    avatarPlaceholderSrc: y,
    avatarDecorationSrc: O,
    avatarSrc: g,
    isAnimating: E,
    eventHandlers: {
      onMouseEnter: r.useCallback(() => {
        b.onMouseEnter(), v.onMouseEnter()
      }, [b, v]),
      onMouseLeave: r.useCallback(() => {
        b.onMouseLeave(), v.onMouseLeave()
      }, [b, v])
    }
  }
}