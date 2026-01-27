/** Chunk was on web.js **/
/** chunk id: 931991, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ie: () => h,
  nr: () => _,
  p_: () => p
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk860689 = require("./860689.js"),
  Chunk219935 = require("./219935.js"),
  Chunk818348 = require("./818348.js");
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
    if (null == e) return [u.xB.CREATE_EVENTS, u.xB.MANAGE_EVENTS];
    let t = c.d5;
    return e.isGuildStageVoice() ? t = c.Ou : e.isGuildVoice() && (t = c.EN), [i.kg(t, u.xB.CREATE_EVENTS), i.kg(t, u.xB.MANAGE_EVENTS)]
  },
  _ = e => {
    let [t, n] = (0, l.fh)(e) ? [u.xB.CREATE_EVENTS, u.xB.MANAGE_EVENTS] : p(e), [i, c, _, h] = (0, a.yK)([o.A], () => [o.A.can(u.xB.CREATE_GUILD_EXPRESSIONS, e), o.A.can(u.xB.MANAGE_GUILD_EXPRESSIONS, e), o.A.can(t, e), o.A.can(n, e)]), m = (0, a.bG)([s.default], () => s.default.getCurrentUser()), g = r.useCallback(e => f(e, m, c, i), [i, c, m]), E = r.useCallback(e => f(e, m, h, _), [h, _, m]);
    return null == e ? d : {
      canCreateExpressions: i,
      canCreateGuildEvent: _,
      canManageAllExpressions: c,
      canManageAllEvents: h,
      canManageGuildExpression: g,
      canManageGuildEvent: E
    }
  },
  h = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : o.A,
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : s.default,
      [r, i] = (0, l.fh)(e) ? [u.xB.CREATE_EVENTS, u.xB.MANAGE_EVENTS] : p(e),
      a = t.can(u.xB.CREATE_GUILD_EXPRESSIONS, e),
      c = t.can(u.xB.MANAGE_GUILD_EXPRESSIONS, e),
      _ = t.can(r, e),
      h = t.can(i, e),
      m = n.getCurrentUser();
    return null == e ? d : {
      canCreateExpressions: a,
      canCreateGuildEvent: _,
      canManageAllExpressions: c,
      canManageAllEvents: h,
      canManageGuildExpression: e => f(e, m, c, a),
      canManageGuildEvent: e => f(e, m, h, _)
    }
  }