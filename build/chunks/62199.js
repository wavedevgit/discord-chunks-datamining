/** Chunk was on web.js **/
/** chunk id: 62199, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk385612 = require("./385612.jsx"),
  Chunk101058 = require("./101058.js"),
  Chunk696451 = require("./696451.js"),
  Chunk352413 = require("./352413.js"),
  Chunk45837 = require("./45837.js");

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
    onMouseLeave: h,
    shouldAnimate: m
  } = (0, c.A)(f), {
    pendingAvatar: g
  } = (0, l.A)({
    guildId: null === n ? true : n
  }), E = d && null != t ? (0, s.V7)({
    userId: t.id,
    image: g,
    canAnimate: m,
    size: u
  }) : true, b = true !== p ? p : E, y = (0, i.bG)([o.Ay], () => null != n && null != t ? o.Ay.getMember(n, t.id) : null);
  return {
    avatarSrc: r.useMemo(() => null != t ? (0, a.sv)(b, y, t, {
      canAnimate: m,
      size: u
    }) : true, [b, y, t, m, u]),
    isAvatarAnimating: m,
    eventHandlers: {
      onMouseEnter: _,
      onMouseLeave: h
    }
  }
}