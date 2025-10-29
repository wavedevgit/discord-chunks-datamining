/** Chunk was on web.js **/
/** chunk id: 125988, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
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
    onlyAnimateOnHoverOrFocus: _ = false
  } = e, [p, h] = r.useState(false), {
    canAnimate: m
  } = (0, a.j)(p, _), g = (0, i.e7)([s.ZP], () => null != n && null != t ? s.ZP.getMember(n, t.id) : null), E = (0, c.Z)((0, o.Ys)({
    userValue: null == t ? true : t.avatarDecoration,
    guildValue: null == g ? true : g.avatarDecoration,
    guildId: n
  })), b = r.useMemo(() => (0, l.NZ)({
    avatarDecoration: true !== f ? f : E,
    canAnimate: m,
    size: d
  }), [f, E, m, d]);
  return {
    avatarPlaceholderSrc: u,
    avatarDecorationSrc: b,
    isAvatarDecorationAnimating: m,
    eventHandlers: {
      onMouseEnter: r.useCallback(() => h(true), []),
      onMouseLeave: r.useCallback(() => h(false), [])
    }
  }
}