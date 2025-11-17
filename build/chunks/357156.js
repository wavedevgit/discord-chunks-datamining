/** Chunk was on web.js **/
/** chunk id: 357156, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gw: () => h,
  Ob: () => _,
  XJ: () => p
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk411198 = require("./411198.js"),
  Chunk85243 = require("./85243.js"),
  Chunk231338 = require("./231338.js");
let d = {
    canCreateExpressions: false,
    canCreateGuildEvent: false,
    canManageAllExpressions: false,
    canManageAllEvents: false,
    canManageGuildExpression: () => false,
    canManageGuildEvent: () => false
  },
  f = (e, t, n, r) => {
    if (null == e) returnfalse;
    if (n) returntrue;
    if ("creator_id" in e) return r && null != t && e.creator_id === t.id;
    if ("userId" in e) return r && null != t && e.userId === t.id;
    if ("user" in e) {
      var i;
      return r && null != t && (null == (i = e.user) ? true : i.id) === t.id
    }
    returnfalse
  },
  _ = e => {
    if (null == e) return [u.Pl.CREATE_EVENTS, u.Pl.MANAGE_EVENTS];
    let t = c.TT;
    return e.isGuildStageVoice() ? t = c.LK : e.isGuildVoice() && (t = c.AN), [i.$e(t, u.Pl.CREATE_EVENTS), i.$e(t, u.Pl.MANAGE_EVENTS)]
  },
  p = e => {
    let [t, n] = (0, l.lM)(e) ? [u.Pl.CREATE_EVENTS, u.Pl.MANAGE_EVENTS] : _(e), [i, c, p, h] = (0, a.Wu)([o.Z], () => [o.Z.can(u.Pl.CREATE_GUILD_EXPRESSIONS, e), o.Z.can(u.Pl.MANAGE_GUILD_EXPRESSIONS, e), o.Z.can(t, e), o.Z.can(n, e)]), m = (0, a.e7)([s.default], () => s.default.getCurrentUser()), g = r.useCallback(e => f(e, m, c, i), [i, c, m]), E = r.useCallback(e => f(e, m, h, p), [h, p, m]);
    return null == e ? d : {
      canCreateExpressions: i,
      canCreateGuildEvent: p,
      canManageAllExpressions: c,
      canManageAllEvents: h,
      canManageGuildExpression: g,
      canManageGuildEvent: E
    }
  },
  h = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : o.Z,
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : s.default,
      [r, i] = (0, l.lM)(e) ? [u.Pl.CREATE_EVENTS, u.Pl.MANAGE_EVENTS] : _(e),
      a = t.can(u.Pl.CREATE_GUILD_EXPRESSIONS, e),
      c = t.can(u.Pl.MANAGE_GUILD_EXPRESSIONS, e),
      p = t.can(r, e),
      h = t.can(i, e),
      m = n.getCurrentUser();
    return null == e ? d : {
      canCreateExpressions: a,
      canCreateGuildEvent: p,
      canManageAllExpressions: c,
      canManageAllEvents: h,
      canManageGuildExpression: e => f(e, m, c, a),
      canManageGuildEvent: e => f(e, m, h, p)
    }
  }