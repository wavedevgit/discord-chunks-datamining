/** Chunk was on web.js **/
/** chunk id: 125988, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk812457 = require("./812457.js"),
  Chunk369111 = require("./369111.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk676742 = require("./676742.js"),
  Chunk660097 = require("./660097.js");
let f = e => {
  var t;
  let {
    user: n,
    guildId: f,
    size: _,
    onlyAnimateOnHover: p = false,
    showPending: h = false,
    showTryItOut: m = false,
    avatarDecorationOverride: g
  } = e, [E, b] = r.useState(false), {
    canAnimate: y
  } = (0, a.j)(E, p), O = (0, i.e7)([s.ZP], () => null != f && null != n ? s.ZP.getMember(f, n.id) : null), v = (0, i.e7)([l.default], () => {
    var e;
    return null == (e = l.default.getCurrentUser()) ? true : e.id
  }), I = null == O ? null == n ? true : n.avatarDecoration : null === O.avatarDecoration ? null : null != (t = O.avatarDecoration) ? t : null == n ? true : n.avatarDecoration, {
    pendingAvatarDecoration: T
  } = (0, o.Z)({
    isTryItOut: m,
    guildId: f
  }), S = h && true !== T && true !== v && v === (null == n ? true : n.id), A = null != f && null === T, N = (0, u.Z)(S ? A ? null == n ? true : n.avatarDecoration : null != T ? T : I : null != I ? I : null == n ? true : n.avatarDecoration), C = r.useMemo(() => (0, c.NZ)({
    avatarDecoration: true !== g ? g : N,
    canAnimate: y,
    size: _
  }), [N, y, _, g]);
  return {
    avatarPlaceholderSrc: d,
    avatarDecorationSrc: C,
    isAvatarDecorationAnimating: y,
    eventHandlers: {
      onMouseEnter: r.useCallback(() => b(true), []),
      onMouseLeave: r.useCallback(() => b(false), [])
    }
  }
}