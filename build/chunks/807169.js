/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Hs: () => m,
  Vh: () => b,
  k: () => g,
  ny: () => y
});
var r = n(192379),
  i = n(149765),
  o = n(442837),
  a = n(911969),
  s = n(160404),
  l = n(695346),
  c = n(131704),
  u = n(314897),
  d = n(592125),
  f = n(271383),
  _ = n(496675),
  p = n(594174),
  h = n(981631);

function g(e, t) {
  var n, r, i, o, a;
  let _;
  let h = null != (_ = e instanceof c.Sf && e.isThread() && null !== (i = d.Z.getChannel(e.parent_id)) && void 0 !== i ? i : e) ? y(_) : void 0,
    g = l.xM.getSetting(),
    m = u.default.getId(),
    b = null !== (o = null === (n = p.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) && void 0 !== o && o,
    O = null != h && null !== (a = null === (r = f.ZP.getMember(h, m)) || void 0 === r ? void 0 : r.roles) && void 0 !== a ? a : [],
    S = s.Z.isViewingRoles(h),
    {
      computedPermissions: I,
      hasBaseAccessPermissions: T,
      hasSendMessagesPermission: N
    } = v(_, e instanceof c.Sf && e.isThread());
  return {
    context: _,
    userId: m,
    roleIds: O,
    isImpersonating: S,
    commandTypes: t,
    computedPermissions: I,
    hasBaseAccessPermissions: T,
    hasSendMessagesPermission: N,
    allowNsfw: E(_, b, g)
  }
}

function m(e, t) {
  let n = r.useMemo(() => {
      if (e instanceof c.Sf && e.isThread()) {
        var t;
        return null !== (t = d.Z.getChannel(e.parent_id)) && void 0 !== t ? t : e
      }
      return e
    }, [e]),
    i = null != n ? y(n) : void 0,
    a = l.xM.useSetting(),
    _ = (0, o.e7)([u.default], () => u.default.getId()),
    h = (0, o.e7)([p.default], () => {
      var e, t;
      return null !== (t = null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) && void 0 !== t && t
    }),
    g = (0, o.Wu)([f.ZP], () => {
      var e, t;
      return null != i && null !== (t = null === (e = f.ZP.getMember(i, _)) || void 0 === e ? void 0 : e.roles) && void 0 !== t ? t : []
    }),
    m = (0, o.e7)([s.Z], () => s.Z.isViewingRoles(i));
  return r.useMemo(() => {
    let {
      computedPermissions: r,
      hasBaseAccessPermissions: i,
      hasSendMessagesPermission: o
    } = v(n, e instanceof c.Sf && e.isThread());
    return {
      context: n,
      userId: _,
      roleIds: g,
      commandTypes: t,
      isImpersonating: m,
      computedPermissions: r,
      hasBaseAccessPermissions: i,
      hasSendMessagesPermission: o,
      allowNsfw: E(n, h, a)
    }
  }, [t, n, m, g, _, h, a, e])
}

function E(e, t, n) {
  return !!t && (!(e instanceof c.Sf) || (null != e.guild_id ? e.nsfw : n))
}

function v(e, t) {
  let n, r;
  if (e instanceof c.Sf && e.isPrivate() || null == e) return {
    computedPermissions: i.vB(0),
    hasBaseAccessPermissions: !0,
    hasSendMessagesPermission: !0
  };
  let o = _.Z.computePermissions(e);
  return i.e$(o, h.Plq.ADMINISTRATOR) ? (n = !0, r = !0) : e instanceof c.Sf ? (n = i.e$(o, h.Plq.VIEW_CHANNEL) && i.e$(o, h.Plq.USE_APPLICATION_COMMANDS), r = t ? i.e$(o, h.Plq.SEND_MESSAGES_IN_THREADS) : i.e$(o, h.Plq.SEND_MESSAGES)) : (n = i.e$(o, h.Plq.VIEW_CHANNEL), r = !0), {
    computedPermissions: o,
    hasBaseAccessPermissions: n,
    hasSendMessagesPermission: r
  }
}

function b(e, t) {
  return e instanceof c.Sf && (null == e ? void 0 : e.guild_id) == null ? (null == e ? void 0 : e.type) === h.d4z.DM && (null == e ? void 0 : e.getRecipientId()) === t ? a.D.BOT_DM : a.D.PRIVATE_CHANNEL : a.D.GUILD
}

function y(e) {
  return e instanceof c.Sf ? e.guild_id : e.id
}