/** Chunk was on web.js **/
/** chunk id: 807169, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hs: () => g,
  Vh: () => y,
  k: () => m,
  ny: () => O
});
var Chunk73800 = require("./73800.js"),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk911969 = require("./911969.js"),
  Chunk160404 = require("./160404.js"),
  Chunk695346 = require("./695346.js"),
  Chunk131704 = require("./131704.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function m(e, t) {
  var n, r, i, o, a;
  let _, h = null != (_ = e instanceof c.Sf && e.isThread() && null != (i = d.Z.getChannel(e.parent_id)) ? i : e) ? O(_) : true,
    m = l.xM.getSetting(),
    g = u.default.getId(),
    y = null != (o = null == (n = p.default.getCurrentUser()) ? true : n.nsfwAllowed) && o,
    v = null != h && null != (a = null == (r = f.ZP.getMember(h, g)) ? true : r.roles) ? a : [],
    I = s.Z.isViewingRoles(h),
    {
      computedPermissions: T,
      hasBaseAccessPermissions: S,
      hasSendMessagesPermission: A
    } = b(_, e instanceof c.Sf && e.isThread());
  return {
    context: _,
    userId: g,
    roleIds: v,
    isImpersonating: I,
    commandTypes: t,
    computedPermissions: T,
    hasBaseAccessPermissions: S,
    hasSendMessagesPermission: A,
    allowNsfw: E(_, y, m)
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
    a = l.xM.useSetting(),
    _ = (0, o.e7)([u.default], () => u.default.getId()),
    h = (0, o.e7)([p.default], () => {
      var e, t;
      return null != (t = null == (e = p.default.getCurrentUser()) ? true : e.nsfwAllowed) && t
    }),
    m = (0, o.Wu)([f.ZP], () => {
      var e, t;
      return null != i && null != (t = null == (e = f.ZP.getMember(i, _)) ? true : e.roles) ? t : []
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
      userId: _,
      roleIds: m,
      commandTypes: t,
      isImpersonating: g,
      computedPermissions: r,
      hasBaseAccessPermissions: i,
      hasSendMessagesPermission: o,
      allowNsfw: E(n, h, a)
    }
  }, [t, n, g, m, _, h, a, e])
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
  let o = _.Z.computePermissions(e);
  return i.e$(o, h.Plq.ADMINISTRATOR) ? (n = true, r = true) : e instanceof c.Sf ? (n = i.e$(o, h.Plq.VIEW_CHANNEL) && i.e$(o, h.Plq.USE_APPLICATION_COMMANDS), r = t ? i.e$(o, h.Plq.SEND_MESSAGES_IN_THREADS) : i.e$(o, h.Plq.SEND_MESSAGES)) : (n = i.e$(o, h.Plq.VIEW_CHANNEL), r = true), {
    computedPermissions: o,
    hasBaseAccessPermissions: n,
    hasSendMessagesPermission: r
  }
}

function y(e, t) {
  return e instanceof c.Sf && (null == e ? true : e.guild_id) == null ? (null == e ? true : e.type) === h.d4z.DM && (null == e ? true : e.getRecipientId()) === t ? a.D.BOT_DM : a.D.PRIVATE_CHANNEL : a.D.GUILD
}

function O(e) {
  return e instanceof c.Sf ? e.guild_id : e.id
}