/** Chunk was on web.js **/
/** chunk id: 369111, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk311395 = require("./311395.js"),
  Chunk778825 = require("./778825.js"),
  Chunk150039 = require("./150039.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk350327 = require("./350327.js");

function d(e) {
  let {
    isTryItOut: t,
    analyticsLocations: n,
    guildId: d
  } = e, f = (0, i.e7)([c.default], () => c.default.getCurrentUser()), p = (0, o.Z)(n), {
    pendingAvatar: _,
    pendingAvatarDecoration: m,
    pendingErrors: h
  } = (0, i.cj)([l.Z, a.Z], () => ({
    pendingAvatar: t ? l.Z.getTryItOutAvatar() : null != d ? a.Z.getPendingAvatar() : l.Z.getPendingAvatar(),
    pendingAvatarDecoration: t ? l.Z.getTryItOutAvatarDecoration() : null != d ? a.Z.getPendingAvatarDecoration() : l.Z.getPendingAvatarDecoration(),
    pendingErrors: null != d ? a.Z.getErrors().avatarDecoration : l.Z.getErrors().avatarDecoration
  })), g = (0, r.useCallback)(e => (0, s.Jw)(e, null == f ? true : f.avatar), [null == f ? true : f.avatar]), E = (0, r.useCallback)(e => {
    (0, s.PO)(e, d), null != e && p(e)
  }, [p, d]);
  return {
    pendingAvatar: _,
    pendingAvatarDecoration: m,
    pendingErrors: h,
    setPendingAvatar: t ? u.c_ : g,
    setPendingAvatarDecoration: t ? u.Xz : E
  }
}