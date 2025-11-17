/** Chunk was on web.js **/
/** chunk id: 518950, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
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
    animateOnHover: f = false,
    avatarDecorationOverride: _,
    avatarOverride: p
  } = e, h = (0, i.e7)([l.default], () => l.default.getUser(t)), {
    avatarSrc: m,
    isAvatarAnimating: g,
    eventHandlers: E
  } = (0, c.Z)({
    user: h,
    guildId: n,
    size: (0, a.pxk)(u),
    showPending: d,
    animateOnHover: f,
    avatarOverride: p
  }), {
    avatarPlaceholderSrc: b,
    avatarDecorationSrc: y,
    eventHandlers: O
  } = (0, s.Z)({
    user: h,
    guildId: n,
    avatarDecorationOverride: _,
    size: (0, o.y9)(u),
    onlyAnimateOnHoverOrFocus: f
  });
  return {
    avatarPlaceholderSrc: b,
    avatarDecorationSrc: y,
    avatarSrc: m,
    isAnimating: g,
    eventHandlers: {
      onMouseEnter: r.useCallback(() => {
        E.onMouseEnter(), O.onMouseEnter()
      }, [E, O]),
      onMouseLeave: r.useCallback(() => {
        E.onMouseLeave(), O.onMouseLeave()
      }, [E, O])
    }
  }
}