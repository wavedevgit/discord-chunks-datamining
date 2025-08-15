/** Chunk was on web.js **/
/** chunk id: 369111, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk73800 = require("./73800.js"),
  Chunk399606 = require("./399606.js"),
  Chunk311395 = require("./311395.js"),
  Chunk778825 = require("./778825.js"),
  Chunk150039 = require("./150039.js"),
  Chunk271383 = require("./271383.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk350327 = require("./350327.js");

function f(e) {
  let {
    isTryItOut: t,
    analyticsLocations: n,
    guildId: f
  } = e, _ = (0, i.e7)([u.default], () => u.default.getCurrentUser()), p = (0, i.e7)([l.ZP], () => null != f && null != _ ? l.ZP.getMember(f, _.id) : null), h = null != p ? p.avatarDecoration : null == _ ? true : _.avatarDecoration, m = (0, a.Z)(n), {
    pendingAvatar: g,
    pendingAvatarDecoration: E,
    pendingErrors: b
  } = (0, i.cj)([c.Z, o.Z], () => ({
    pendingAvatar: t ? c.Z.getTryItOutAvatar() : null != f ? o.Z.getPendingAvatar() : c.Z.getPendingAvatar(),
    pendingAvatarDecoration: t ? c.Z.getTryItOutAvatarDecoration() : null != f ? o.Z.getPendingAvatarDecoration() : c.Z.getPendingAvatarDecoration(),
    pendingErrors: null != f ? o.Z.getErrors().avatarDecoration : c.Z.getErrors().avatarDecoration
  })), y = (0, r.useCallback)(e => (0, s.Jw)(e, null == _ ? true : _.avatar), [null == _ ? true : _.avatar]), O = (0, r.useCallback)(e => {
    (0, s.PO)(f, e), null != e && m(e)
  }, [m, f]);
  return {
    pendingAvatar: g,
    pendingAvatarDecoration: E,
    setPendingAvatar: t ? d.c_ : y,
    setPendingAvatarDecoration: t ? d.Xz : O,
    savedAvatarDecoration: h,
    pendingErrors: b
  }
}