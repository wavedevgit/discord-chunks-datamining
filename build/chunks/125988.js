/** Chunk was on web.js **/
/** chunk id: 125988, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk812457 = require("./812457.js"),
  Chunk150039 = require("./150039.js"),
  Chunk271383 = require("./271383.js"),
  Chunk768581 = require("./768581.js"),
  Chunk676742 = require("./676742.js"),
  Chunk660097 = require("./660097.js");
let d = e => {
  let {
    user: t,
    guildId: n,
    size: d,
    avatarDecorationOverride: f,
    onlyAnimateOnHoverOrFocus: p = false
  } = e, [_, m] = r.useState(false), {
    canAnimate: h
  } = (0, a.j)(_, p), g = (0, i.e7)([s.ZP], () => null != n && null != t ? s.ZP.getMember(n, t.id) : null), E = (0, c.Z)((0, o.Ys)({
    userValue: null == t ? true : t.avatarDecoration,
    guildValue: null == g ? true : g.avatarDecoration,
    guildId: n
  })), b = r.useMemo(() => (0, l.NZ)({
    avatarDecoration: true !== f ? f : E,
    canAnimate: h,
    size: d
  }), [f, E, h, d]);
  return {
    avatarPlaceholderSrc: u,
    avatarDecorationSrc: b,
    isAvatarDecorationAnimating: h,
    eventHandlers: {
      onMouseEnter: r.useCallback(() => m(true), []),
      onMouseLeave: r.useCallback(() => m(false), [])
    }
  }
}