/** Chunk was on web.js **/
/** chunk id: 278539, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk338932 = require("./338932.js"),
  Chunk919395 = require("./919395.js"),
  Chunk696451 = require("./696451.js"),
  Chunk486020 = require("./486020.js"),
  Chunk325445 = require("./325445.js"),
  Chunk476324 = require("./476324.js");
let d = e => {
  let {
    user: t,
    guildId: n,
    size: d,
    avatarDecorationOverride: f,
    onlyAnimateOnHoverOrFocus: p = false
  } = e, [_, h] = r.useState(false), {
    canAnimate: m
  } = (0, a.T)(_, p), g = (0, i.bG)([s.Ay], () => null != n && null != t ? s.Ay.getMember(n, t.id) : null), E = (0, c.A)((0, o.lw)({
    userValue: null == t ? true : t.avatarDecoration,
    guildValue: null == g ? true : g.avatarDecoration,
    guildId: n
  })), y = r.useMemo(() => (0, l.F_)({
    avatarDecoration: true !== f ? f : E,
    canAnimate: m,
    size: d
  }), [f, E, m, d]);
  return {
    avatarPlaceholderSrc: u,
    avatarDecorationSrc: y,
    isAvatarDecorationAnimating: m,
    eventHandlers: {
      onMouseEnter: r.useCallback(() => h(true), []),
      onMouseLeave: r.useCallback(() => h(false), [])
    }
  }
}