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
  Chunk287809 = require("./287809.js"),
  Chunk207803 = require("./207803.js"),
  Chunk836602 = require("./836602.js");

function d(e) {
  let {
    isTryItOut: t,
    analyticsLocations: n,
    guildId: d
  } = e, f = (0, i.bG)([l.default], () => l.default.getCurrentUser()), p = (0, a.A)(n), {
    pendingAvatar: _,
    pendingAvatarDecoration: h,
    pendingErrors: m
  } = (0, i.cf)([o.A, u.A], () => {
    if (t) {
      let e = u.A.getTryItOutChanges();
      return {
        pendingAvatar: e.tryItOutAvatar,
        pendingAvatarDecoration: e.tryItOutAvatarDecoration,
        pendingErrors: null != d ? o.A.getErrors().avatarDecoration : u.A.getErrors().avatarDecoration
      }
    }
    return {
      pendingAvatar: null != d ? o.A.getPendingAvatar() : u.A.getPendingChanges().pendingAvatar,
      pendingAvatarDecoration: null != d ? o.A.getPendingAvatarDecoration() : u.A.getPendingChanges().pendingAvatarDecoration,
      pendingErrors: null != d ? o.A.getErrors().avatarDecoration : u.A.getErrors().avatarDecoration
    }
  }), g = (0, r.useCallback)(e => (0, s.ru)(e, null == f ? true : f.avatar), [null == f ? true : f.avatar]), E = (0, r.useCallback)(e => {
    (0, s.Dx)(e, d), null != e && p(e)
  }, [p, d]);
  return {
    pendingAvatar: _,
    pendingAvatarDecoration: h,
    pendingErrors: m,
    setPendingAvatar: t ? c.e$ : g,
    setPendingAvatarDecoration: t ? c.Go : E
  }
}