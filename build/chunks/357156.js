/** Chunk was on web.js **/
/** chunk id: 357156, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gw: () => m,
  Ob: () => p,
  XJ: () => _
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
  p = e => {
    if (null == e) return [u.Pl.CREATE_EVENTS, u.Pl.MANAGE_EVENTS];
    let t = c.TT;
    return e.isGuildStageVoice() ? t = c.LK : e.isGuildVoice() && (t = c.AN), [i.$e(t, u.Pl.CREATE_EVENTS), i.$e(t, u.Pl.MANAGE_EVENTS)]
  },
  _ = e => {
    let [t, n] = (0, l.lM)(e) ? [u.Pl.CREATE_EVENTS, u.Pl.MANAGE_EVENTS] : p(e), [i, c, _, m] = (0, a.Wu)([o.Z], () => [o.Z.can(u.Pl.CREATE_GUILD_EXPRESSIONS, e), o.Z.can(u.Pl.MANAGE_GUILD_EXPRESSIONS, e), o.Z.can(t, e), o.Z.can(n, e)]), h = (0, a.e7)([s.default], () => s.default.getCurrentUser()), g = r.useCallback(e => f(e, h, c, i), [i, c, h]), E = r.useCallback(e => f(e, h, m, _), [m, _, h]);
    return null == e ? d : {
      canCreateExpressions: i,
      canCreateGuildEvent: _,
      canManageAllExpressions: c,
      canManageAllEvents: m,
      canManageGuildExpression: g,
      canManageGuildEvent: E
    }
  },
  m = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : o.Z,
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : s.default,
      [r, i] = (0, l.lM)(e) ? [u.Pl.CREATE_EVENTS, u.Pl.MANAGE_EVENTS] : p(e),
      a = t.can(u.Pl.CREATE_GUILD_EXPRESSIONS, e),
      c = t.can(u.Pl.MANAGE_GUILD_EXPRESSIONS, e),
      _ = t.can(r, e),
      m = t.can(i, e),
      h = n.getCurrentUser();
    return null == e ? d : {
      canCreateExpressions: a,
      canCreateGuildEvent: _,
      canManageAllExpressions: c,
      canManageAllEvents: m,
      canManageGuildExpression: e => f(e, h, c, a),
      canManageGuildEvent: e => f(e, h, m, _)
    }
  }