/** Chunk was on web.js **/
/** chunk id: 240591, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bh: () => m,
  MW: () => g,
  ud: () => y,
  wz: () => O
});
var Chunk64700 = require("./64700.js"),
  Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk155718 = require("./155718.js"),
  Chunk164956 = require("./164956.js"),
  Chunk264249 = require("./264249.js"),
  Chunk95701 = require("./95701.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

function m(e, t) {
  var n, r, i, a, s;
  let p, h = null != (p = e instanceof c.YB && e.isThread() && null != (s = d.A.getChannel(e.parent_id)) ? s : e) ? O(p) : true,
    m = (0, l.S9)(),
    g = u.default.getId(),
    y = null != (n = null == (i = _.default.getCurrentUser()) ? true : i.nsfwAllowed) && n,
    A = null != h && null != (r = null == (a = f.Ay.getMember(h, g)) ? true : a.roles) ? r : [],
    v = o.A.isViewingRoles(h),
    {
      computedPermissions: S,
      hasBaseAccessPermissions: I,
      hasSendMessagesPermission: T
    } = b(p, e instanceof c.YB && e.isThread());
  return {
    context: p,
    userId: g,
    roleIds: A,
    isImpersonating: v,
    commandTypes: t,
    computedPermissions: S,
    hasBaseAccessPermissions: I,
    hasSendMessagesPermission: T,
    allowNsfw: E(p, y, m)
  }
}

function g(e, t) {
  let n = r.useMemo(() => {
      if (e instanceof c.YB && e.isThread()) {
        var t;
        return null != (t = d.A.getChannel(e.parent_id)) ? t : e
      }
      return e
    }, [e]),
    i = null != n ? O(n) : true,
    s = (0, l.hT)(),
    p = (0, a.bG)([u.default], () => u.default.getId()),
    h = (0, a.bG)([_.default], () => {
      var e, t;
      return null != (e = null == (t = _.default.getCurrentUser()) ? true : t.nsfwAllowed) && e
    }),
    m = (0, a.yK)([f.Ay], () => {
      var e, t;
      return null != i && null != (e = null == (t = f.Ay.getMember(i, p)) ? true : t.roles) ? e : []
    }),
    g = (0, a.bG)([o.A], () => o.A.isViewingRoles(i));
  return r.useMemo(() => {
    let {
      computedPermissions: r,
      hasBaseAccessPermissions: i,
      hasSendMessagesPermission: a
    } = b(n, e instanceof c.YB && e.isThread());
    return {
      context: n,
      userId: p,
      roleIds: m,
      commandTypes: t,
      isImpersonating: g,
      computedPermissions: r,
      hasBaseAccessPermissions: i,
      hasSendMessagesPermission: a,
      allowNsfw: E(n, h, s)
    }
  }, [t, n, g, m, p, h, s, e])
}

function E(e, t, n) {
  return !!t && (!(e instanceof c.YB) || (null != e.guild_id ? e.nsfw : n))
}

function b(e, t) {
  let n, r;
  if (e instanceof c.YB && e.isPrivate() || null == e) return {
    computedPermissions: i.iu(0),
    hasBaseAccessPermissions: true,
    hasSendMessagesPermission: true
  };
  let a = p.A.computePermissions(e);
  return i.zy(a, h.xBc.ADMINISTRATOR) ? (n = true, r = true) : e instanceof c.YB ? (n = i.zy(a, h.xBc.VIEW_CHANNEL) && i.zy(a, h.xBc.USE_APPLICATION_COMMANDS), r = t ? i.zy(a, h.xBc.SEND_MESSAGES_IN_THREADS) : i.zy(a, h.xBc.SEND_MESSAGES)) : (n = i.zy(a, h.xBc.VIEW_CHANNEL), r = true), {
    computedPermissions: a,
    hasBaseAccessPermissions: n,
    hasSendMessagesPermission: r
  }
}

function y(e, t) {
  return e instanceof c.YB && (null == e ? true : e.guild_id) == null ? (null == e ? true : e.type) === h.rbe.DM && (null == e ? true : e.getRecipientId()) === t ? s.OL.BOT_DM : s.OL.PRIVATE_CHANNEL : s.OL.GUILD
}

function O(e) {
  return e instanceof c.YB ? e.guild_id : e.id
}