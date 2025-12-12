/** Chunk was on web.js **/
/** chunk id: 287008, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk654904 = require("./654904.jsx"),
  Chunk643879 = require("./643879.js"),
  Chunk271383 = require("./271383.js"),
  Chunk369111 = require("./369111.js"),
  Chunk442552 = require("./442552.js");

function u(e) {
  let {
    user: t,
    guildId: n,
    size: u,
    showPending: d = false,
    animateOnHover: f = false,
    avatarOverride: p
  } = e, {
    onMouseEnter: _,
    onMouseLeave: m,
    shouldAnimate: h
  } = (0, c.Z)(f), {
    pendingAvatar: g
  } = (0, l.Z)({}), E = d && null != t ? (0, a.SD)({
    userId: t.id,
    image: g,
    canAnimate: h,
    size: u
  }) : true, b = true !== p ? p : E, y = (0, i.e7)([s.ZP], () => null != n && null != t ? s.ZP.getMember(n, t.id) : null);
  return {
    avatarSrc: r.useMemo(() => null != t ? (0, o.SG)(b, y, t, {
      canAnimate: h,
      size: u
    }) : true, [b, y, t, h, u]),
    isAvatarAnimating: h,
    eventHandlers: {
      onMouseEnter: _,
      onMouseLeave: m
    }
  }
}