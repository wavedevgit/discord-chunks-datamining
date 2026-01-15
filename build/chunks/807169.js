/** Chunk was on web.js **/
/** chunk id: 807169, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hs: () => g,
  Vh: () => y,
  k: () => m,
  ny: () => O
});
var Chunk473749 = require("./473749.js"),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk911969 = require("./911969.js"),
  Chunk160404 = require("./160404.js"),
  Chunk519207 = require("./519207.js"),
  Chunk131704 = require("./131704.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function m(e, t) {
  var n, r, i, a, o;
  let p, h = null != (p = e instanceof c.Sf && e.isThread() && null != (i = d.Z.getChannel(e.parent_id)) ? i : e) ? O(p) : true,
    m = (0, l.GG)(),
    g = u.default.getId(),
    y = null != (a = null == (n = _.default.getCurrentUser()) ? true : n.nsfwAllowed) && a,
    v = null != h && null != (o = null == (r = f.ZP.getMember(h, g)) ? true : r.roles) ? o : [],
    S = s.Z.isViewingRoles(h),
    {
      computedPermissions: I,
      hasBaseAccessPermissions: T,
      hasSendMessagesPermission: C
    } = b(p, e instanceof c.Sf && e.isThread());
  return {
    context: p,
    userId: g,
    roleIds: v,
    isImpersonating: S,
    commandTypes: t,
    computedPermissions: I,
    hasBaseAccessPermissions: T,
    hasSendMessagesPermission: C,
    allowNsfw: E(p, y, m)
  }
}

function g(e, t) {
  let n = r.useMemo(() => {
      if (e instanceof c.Sf && e.isThread()) {
        var t;
        return null != (t = d.Z.getChannel(e.parent_id)) ? t : e
      }
      return e
    }, [e]),
    i = null != n ? O(n) : true,
    o = (0, l.Xg)(),
    p = (0, a.e7)([u.default], () => u.default.getId()),
    h = (0, a.e7)([_.default], () => {
      var e, t;
      return null != (t = null == (e = _.default.getCurrentUser()) ? true : e.nsfwAllowed) && t
    }),
    m = (0, a.Wu)([f.ZP], () => {
      var e, t;
      return null != i && null != (t = null == (e = f.ZP.getMember(i, p)) ? true : e.roles) ? t : []
    }),
    g = (0, a.e7)([s.Z], () => s.Z.isViewingRoles(i));
  return r.useMemo(() => {
    let {
      computedPermissions: r,
      hasBaseAccessPermissions: i,
      hasSendMessagesPermission: a
    } = b(n, e instanceof c.Sf && e.isThread());
    return {
      context: n,
      userId: p,
      roleIds: m,
      commandTypes: t,
      isImpersonating: g,
      computedPermissions: r,
      hasBaseAccessPermissions: i,
      hasSendMessagesPermission: a,
      allowNsfw: E(n, h, o)
    }
  }, [t, n, g, m, p, h, o, e])
}

function E(e, t, n) {
  return !!t && (!(e instanceof c.Sf) || (null != e.guild_id ? e.nsfw : n))
}

function b(e, t) {
  let n, r;
  if (e instanceof c.Sf && e.isPrivate() || null == e) return {
    computedPermissions: i.vB(0),
    hasBaseAccessPermissions: true,
    hasSendMessagesPermission: true
  };
  let a = p.Z.computePermissions(e);
  return i.e$(a, h.Plq.ADMINISTRATOR) ? (n = true, r = true) : e instanceof c.Sf ? (n = i.e$(a, h.Plq.VIEW_CHANNEL) && i.e$(a, h.Plq.USE_APPLICATION_COMMANDS), r = t ? i.e$(a, h.Plq.SEND_MESSAGES_IN_THREADS) : i.e$(a, h.Plq.SEND_MESSAGES)) : (n = i.e$(a, h.Plq.VIEW_CHANNEL), r = true), {
    computedPermissions: a,
    hasBaseAccessPermissions: n,
    hasSendMessagesPermission: r
  }
}

function y(e, t) {
  return e instanceof c.Sf && (null == e ? true : e.guild_id) == null ? (null == e ? true : e.type) === h.d4z.DM && (null == e ? true : e.getRecipientId()) === t ? o.D.BOT_DM : o.D.PRIVATE_CHANNEL : o.D.GUILD
}

function O(e) {
  return e instanceof c.Sf ? e.guild_id : e.id
}