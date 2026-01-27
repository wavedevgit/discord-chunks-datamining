/** Chunk was on web.js **/
/** chunk id: 352413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk727170 = require("./727170.js"),
  Chunk833336 = require("./833336.js"),
  Chunk919395 = require("./919395.js"),
  Chunk752319 = require("./752319.js"),
  Chunk287809 = require("./287809.js"),
  Chunk207803 = require("./207803.js");

function d(e) {
  let {
    isTryItOut: t,
    analyticsLocations: n,
    guildId: d
  } = e, f = (0, i.bG)([c.default], () => c.default.getCurrentUser()), p = (0, a.A)(n), {
    pendingAvatar: _,
    pendingAvatarDecoration: h,
    pendingErrors: m
  } = (0, i.cf)([l.A, o.A], () => ({
    pendingAvatar: t ? l.A.getTryItOutAvatar() : null != d ? o.A.getPendingAvatar() : l.A.getPendingAvatar(),
    pendingAvatarDecoration: t ? l.A.getTryItOutAvatarDecoration() : null != d ? o.A.getPendingAvatarDecoration() : l.A.getPendingAvatarDecoration(),
    pendingErrors: null != d ? o.A.getErrors().avatarDecoration : l.A.getErrors().avatarDecoration
  })), g = (0, r.useCallback)(e => (0, s.ru)(e, null == f ? true : f.avatar), [null == f ? true : f.avatar]), E = (0, r.useCallback)(e => {
    (0, s.Dx)(e, d), null != e && p(e)
  }, [p, d]);
  return {
    pendingAvatar: _,
    pendingAvatarDecoration: h,
    pendingErrors: m,
    setPendingAvatar: t ? u.e$ : g,
    setPendingAvatarDecoration: t ? u.Go : E
  }
}