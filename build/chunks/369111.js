/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => f
});
var r = n(192379),
  i = n(399606),
  o = n(311395),
  a = n(778825),
  s = n(150039),
  l = n(271383),
  c = n(25990),
  u = n(594174),
  d = n(350327);

function f(e) {
  let {
    isTryItOut: t,
    analyticsLocations: n,
    guildId: f
  } = e, _ = (0, i.e7)([u.default], () => u.default.getCurrentUser()), p = (0, i.e7)([l.ZP], () => null != f && null != _ ? l.ZP.getMember(f, _.id) : null), h = null != p ? p.avatarDecoration : null == _ ? void 0 : _.avatarDecoration, m = (0, o.Z)(n), {
    pendingAvatar: g,
    pendingAvatarV2: E,
    pendingAvatarDecoration: v,
    pendingErrors: b
  } = (0, i.cj)([c.Z, a.Z], () => ({
    pendingAvatar: t ? c.Z.getTryItOutAvatar() : null != f ? a.Z.getPendingAvatar() : c.Z.getPendingAvatar(),
    pendingAvatarV2: t ? c.Z.getTryItOutAvatarV2() : null != f ? a.Z.getPendingAvatarV2() : c.Z.getPendingAvatarV2(),
    pendingAvatarDecoration: t ? c.Z.getTryItOutAvatarDecoration() : null != f ? a.Z.getPendingAvatarDecoration() : c.Z.getPendingAvatarDecoration(),
    pendingErrors: null != f ? a.Z.getErrors().avatarDecoration : c.Z.getErrors().avatarDecoration
  })), y = (0, r.useCallback)(e => (0, s.Jw)(e, null == _ ? void 0 : _.avatar), [null == _ ? void 0 : _.avatar]), O = (0, r.useCallback)(e => (0, s.RZ)(e, null == _ ? void 0 : _.avatar), [null == _ ? void 0 : _.avatar]), S = (0, r.useCallback)(e => {
    (0, s.PO)(f, e), null != e && m(e)
  }, [m, f]);
  return {
    pendingAvatar: g,
    pendingAvatarV2: E,
    pendingAvatarDecoration: v,
    setPendingAvatar: t ? d.c_ : y,
    setPendingAvatarV2: t ? d.US : O,
    setPendingAvatarDecoration: t ? d.Xz : S,
    savedAvatarDecoration: h,
    pendingErrors: b
  }
}