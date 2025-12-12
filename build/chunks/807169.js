/** Chunk was on web.js **/
/** chunk id: 807169, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hs: () => g,
  Vh: () => y,
  k: () => h,
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

function h(e, t) {
  var n, r, i, o, a;
  let p, m = null != (p = e instanceof c.Sf && e.isThread() && null != (i = d.Z.getChannel(e.parent_id)) ? i : e) ? O(p) : true,
    h = (0, l.GG)(),
    g = u.default.getId(),
    y = null != (o = null == (n = _.default.getCurrentUser()) ? true : n.nsfwAllowed) && o,
    v = null != m && null != (a = null == (r = f.ZP.getMember(m, g)) ? true : r.roles) ? a : [],
    S = s.Z.isViewingRoles(m),
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
    allowNsfw: E(p, y, h)
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
    a = (0, l.Xg)(),
    p = (0, o.e7)([u.default], () => u.default.getId()),
    m = (0, o.e7)([_.default], () => {
      var e, t;
      return null != (t = null == (e = _.default.getCurrentUser()) ? true : e.nsfwAllowed) && t
    }),
    h = (0, o.Wu)([f.ZP], () => {
      var e, t;
      return null != i && null != (t = null == (e = f.ZP.getMember(i, p)) ? true : e.roles) ? t : []
    }),
    g = (0, o.e7)([s.Z], () => s.Z.isViewingRoles(i));
  return r.useMemo(() => {
    let {
      computedPermissions: r,
      hasBaseAccessPermissions: i,
      hasSendMessagesPermission: o
    } = b(n, e instanceof c.Sf && e.isThread());
    return {
      context: n,
      userId: p,
      roleIds: h,
      commandTypes: t,
      isImpersonating: g,
      computedPermissions: r,
      hasBaseAccessPermissions: i,
      hasSendMessagesPermission: o,
      allowNsfw: E(n, m, a)
    }
  }, [t, n, g, h, p, m, a, e])
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
  let o = p.Z.computePermissions(e);
  return i.e$(o, m.Plq.ADMINISTRATOR) ? (n = true, r = true) : e instanceof c.Sf ? (n = i.e$(o, m.Plq.VIEW_CHANNEL) && i.e$(o, m.Plq.USE_APPLICATION_COMMANDS), r = t ? i.e$(o, m.Plq.SEND_MESSAGES_IN_THREADS) : i.e$(o, m.Plq.SEND_MESSAGES)) : (n = i.e$(o, m.Plq.VIEW_CHANNEL), r = true), {
    computedPermissions: o,
    hasBaseAccessPermissions: n,
    hasSendMessagesPermission: r
  }
}

function y(e, t) {
  return e instanceof c.Sf && (null == e ? true : e.guild_id) == null ? (null == e ? true : e.type) === m.d4z.DM && (null == e ? true : e.getRecipientId()) === t ? a.D.BOT_DM : a.D.PRIVATE_CHANNEL : a.D.GUILD
}

function O(e) {
  return e instanceof c.Sf ? e.guild_id : e.id
}