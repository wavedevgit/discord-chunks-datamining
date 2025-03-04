/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => l
});
var r = n(192379),
  i = n(481060),
  o = n(1585),
  a = n(125988),
  s = n(287008);

function l(e) {
  let {
    user: t,
    guildId: n,
    size: l,
    showPending: c = !1,
    showTryItOut: u = !1,
    animateOnHover: d = !1,
    avatarDecorationOverride: f,
    avatarOverride: _
  } = e, {
    avatarSrc: p,
    isAvatarAnimating: h,
    eventHandlers: g
  } = (0, s.Z)({
    user: t,
    guildId: n,
    size: (0, i.pxk)(l),
    showPending: c,
    animateOnHover: d,
    avatarOverride: _
  }), {
    avatarPlaceholderSrc: m,
    avatarDecorationSrc: E,
    eventHandlers: v
  } = (0, a.Z)({
    user: t,
    guildId: null != n ? n : void 0,
    size: (0, o.y9)(l),
    showPending: c,
    onlyAnimateOnHover: d,
    avatarDecorationOverride: f,
    showTryItOut: u
  });
  return {
    avatarPlaceholderSrc: m,
    avatarDecorationSrc: E,
    avatarSrc: p,
    isAnimating: h,
    eventHandlers: {
      onMouseEnter: r.useCallback(() => {
        g.onMouseEnter(), v.onMouseEnter()
      }, [g, v]),
      onMouseLeave: r.useCallback(() => {
        g.onMouseLeave(), v.onMouseLeave()
      }, [g, v])
    }
  }
}