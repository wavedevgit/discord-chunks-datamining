/** Chunk was on web.js **/
/** chunk id: 854627, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954921 = require("./954921.jsx"),
  Chunk278539 = require("./278539.js"),
  Chunk287809 = require("./287809.js"),
  Chunk62199 = require("./62199.js");

function u(e) {
  let {
    userId: t,
    guildId: n,
    size: u,
    showPending: d = false,
    animateOnHover: f = false,
    avatarDecorationOverride: p,
    avatarOverride: _
  } = e, h = (0, i.bG)([l.default], () => l.default.getUser(t)), {
    avatarSrc: m,
    isAvatarAnimating: g,
    eventHandlers: E
  } = (0, c.A)({
    user: h,
    guildId: n,
    size: (0, a.FT9)(u),
    showPending: d,
    animateOnHover: f,
    avatarOverride: _
  }), {
    avatarPlaceholderSrc: y,
    avatarDecorationSrc: b,
    eventHandlers: O
  } = (0, o.A)({
    user: h,
    guildId: n,
    avatarDecorationOverride: p,
    size: (0, s.Te)(u),
    onlyAnimateOnHoverOrFocus: f
  });
  return {
    avatarPlaceholderSrc: y,
    avatarDecorationSrc: b,
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