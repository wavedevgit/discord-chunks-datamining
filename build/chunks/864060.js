/** Chunk was on 70205 **/
i.d(t, {
  FI: () => V,
  LL: () => M,
  N_: () => w,
  Xi: () => x,
  eF: () => W
}), i(789020), i(266796), i(411104);
var n = i(252258),
  l = i(317381),
  a = i(933557),
  o = i(710845),
  r = i(978003),
  u = i(41776),
  s = i(355298),
  d = i(957730),
  c = i(850908),
  f = i(572804),
  g = i(901461),
  E = i(569471),
  _ = i(723170),
  N = i(695346),
  T = i(131704),
  S = i(433355),
  p = i(592125),
  C = i(430824),
  I = i(19780),
  v = i(699516),
  h = i(944486),
  Z = i(914010),
  m = i(885110),
  A = i(9156),
  y = i(594174),
  P = i(630388),
  D = i(5192),
  U = i(352736),
  R = i(51144),
  O = i(1508);
i(734934);
var b = i(842619),
  L = i(981631),
  G = i(124368),
  k = i(388032);

function M(e, t, i) {
  let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (t.hasFlag(L.xW$.SPAMMER) || i.isManaged()) return !1;
  let l = i.getGuildId();
  return !(null != l && u.Z.isLurking(l) || !n.ignoreSameUser && t.id === e.id || v.Z.isBlockedOrIgnored(t.id) || !n.ignoreStatus && m.Z.getStatus() === L.Skl.DND || N.QZ.getSetting() || !n.ignoreNoMessagesSetting && A.ZP.allowNoMessages(i))
}

function W(e, t) {
  var i, a;
  let o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (null != e.flags && (0, P.yE)(e.flags, L.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
  let u = p.Z.getChannel(t);
  e.type === L.uaV.THREAD_STARTER_MESSAGE && (u = p.Z.getChannel(null == u ? void 0 : u.parent_id));
  let d = y.default.getCurrentUser(),
    c = y.default.getUser(null === (i = e.author) || void 0 === i ? void 0 : i.id);
  if (null == u || null == d || null == c || u.type === L.d4z.GROUP_DM && e.type === L.uaV.RECIPIENT_REMOVE || b.Z.areSlayerNotificationsSuppressed() && ((a = u).type === L.d4z.DM || null != a.linkedLobby) || !M(d, c, u, {
      ignoreStatus: r,
      ignoreSameUser: L.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)
    }) || s.Z.isMessageRequest(t)) return !1;
  if (!o) {
    let e = h.Z.getChannelId(Z.Z.getGuildId());
    if (e === u.id || S.ZP.getCurrentSidebarChannelId(e) === u.id) return !1
  }
  if (v.Z.isBlockedOrIgnoredForMessage(e) || void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === d.id) return !1;
  if (O.Z.getCurrentConfig({
      location: "NotificationTextUtils.shouldNotify"
    }, {
      autoTrackExposure: !0
    }).disableCurrentActivityNotifications && null != e.application_id) {
    let i = l.ZP.getCurrentEmbeddedActivity();
    if ((null == i ? void 0 : i.applicationId) === e.application_id && i.location.kind !== n.E.CONTEXTLESS && i.location.channel_id === t) return !1
  }
  if (e.type === L.uaV.CHAT_WALLPAPER_SET || e.type === L.uaV.CHAT_WALLPAPER_REMOVED) return !1;
  if (T.Ec.has(u.type)) {
    if (E.Z.isMuted(u.id)) return !1;
    let t = (0, _.J)(u);
    return t !== G.iN.NO_MESSAGES && (t === G.iN.ALL_MESSAGES || (0, f.Hl)({
      rawMessage: e,
      userId: d.id,
      suppressEveryone: !1,
      suppressRoles: !1
    }))
  } {
    let t = !T.tx.has(u.type) || I.Z.getChannelId() === u.id;
    if (A.ZP.allowAllMessages(u) && t) return !0;
    let i = A.ZP.isSuppressEveryoneEnabled(u.getGuildId()),
      n = A.ZP.isSuppressRolesEnabled(u.getGuildId());
    return (0, f.Hl)({
      rawMessage: e,
      userId: d.id,
      suppressEveryone: i,
      suppressRoles: n
    })
  }
}

function w(e, t) {
  var i;
  if (h.Z.getChannelId(Z.Z.getGuildId()) !== t) return !1;
  let n = p.Z.getChannel(t);
  e.type === L.uaV.THREAD_STARTER_MESSAGE && (n = p.Z.getChannel(null == n ? void 0 : n.parent_id));
  let l = y.default.getCurrentUser(),
    a = y.default.getUser(null === (i = e.author) || void 0 === i ? void 0 : i.id);
  return !(null == n || null == l || null == a || n.isManaged() || a.hasFlag(L.xW$.SPAMMER) || v.Z.isBlockedOrIgnoredForMessage(e) || a.id === l.id || m.Z.getStatus() === L.Skl.DND || N.QZ.getSetting() || A.ZP.allowNoMessages(n)) && e.type !== L.uaV.CHAT_WALLPAPER_SET && e.type !== L.uaV.CHAT_WALLPAPER_REMOVED
}

function V(e, t) {
  let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    l = y.default.getCurrentUser(),
    a = y.default.getUser(e.ownerId);
  return !(null == t || null == l || null == a || !M(l, a, t, {
    ignoreStatus: n,
    ignoreNoMessagesSetting: !0
  }) || A.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)) && (!!i || h.Z.getChannelId(Z.Z.getGuildId()) !== t.id) && A.ZP.getNewForumThreadsCreated(t)
}
let F = (e, t, i) => "".concat(e, " (").concat((0, a.F6)(t, y.default, v.Z, !0)).concat(null != i ? ", ".concat((0, a.F6)(i, y.default, v.Z)) : "", ")");

function H(e, t, i, n) {
  switch (e.type) {
    case L.d4z.GUILD_ANNOUNCEMENT:
    case L.d4z.GUILD_TEXT:
      return t;
    case L.d4z.GROUP_DM:
      return i;
    case L.d4z.DM:
    default:
      return n
  }
}

function x(e, t, i) {
  let n;
  let l = D.ZP.getName(e.getGuildId(), e.id, i),
    u = l;
  switch (e.type) {
    case L.d4z.GUILD_ANNOUNCEMENT:
    case L.d4z.GUILD_TEXT:
    case L.d4z.GUILD_VOICE:
    case L.d4z.ANNOUNCEMENT_THREAD:
    case L.d4z.PUBLIC_THREAD:
    case L.d4z.PRIVATE_THREAD:
      let s = p.Z.getChannel(e.parent_id);
      t.type === L.uaV.THREAD_STARTER_MESSAGE && null != s ? u = F(u, s, p.Z.getChannel(s.parent_id)) : (0, g.Z)(t) ? null != C.Z.getGuild(e.getGuildId()) && (u = F(u, e, s)) : u = F(u, e, s);
      break;
    case L.d4z.GROUP_DM:
      e.isManaged() && i.bot && u === (0, a.F6)(e, y.default, v.Z) || (u = "".concat(u, " (").concat((0, a.F6)(e, y.default, v.Z, !0), ")"))
  }
  let f = t.content;
  if ((0, g.Z)(t) && null == (f = U.Z.stringify(t, e))) throw new o.Z("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", t), Error("failed to stringify system message");
  let E = "sticker_items" in t ? t.sticker_items : "stickerItems" in t ? t.stickerItems : t.stickers;
  if ("message_reference" in t ? (0, r.s)(t) : (0, r.Z)(t)) n = k.NW.string(k.t["9ddYKi"]);
  else if (null != t.activity && null != t.application) n = t.activity.type === L.mFx.JOIN ? k.NW.formatToPlainString(H(e, k.t.E8CgCg, k.t.c6KHWF, k.t.Fy7rJC), {
    user: l,
    game: t.application.name
  }) : t.activity.type === L.mFx.JOIN_REQUEST ? k.NW.formatToPlainString(H(e, k.t["/TD0lZ"], k.t["/TD0lZ"], k.t["/TD0lZ"]), {
    user: l,
    game: t.application.name
  }) : "";
  else if (null != t.activity && t.activity.type === L.mFx.LISTEN) {
    let t = H(e, k.t.SaDdmJ, k.t.qsODho, k.t.WeiMTU);
    n = k.NW.formatToPlainString(t, {
      user: l
    })
  } else if (null != E && E.length > 0) n = k.NW.formatToPlainString(k.t.zY4v1N, {
    stickerName: E[0].name
  });
  else if (t.type === L.uaV.PREMIUM_REFERRAL) n = k.NW.formatToPlainString(k.t.lieTqa, {
    username: R.ZP.getName(i)
  });
  else if (null != t.poll) n = k.NW.formatToPlainString(k.t.ImizdH, {
    question: t.poll.question.text
  });
  else if (t.type === L.uaV.POLL_RESULT) {
    var _, N, T;
    let e = null === (T = t.embeds) || void 0 === T ? void 0 : null === (N = T[0]) || void 0 === N ? void 0 : null === (_ = N.fields) || void 0 === _ ? void 0 : _.find(e => ("name" in e ? e.name : e.rawName) === "poll_question_text"),
      i = null != e ? "value" in e ? e.value : e.rawValue : "";
    n = k.NW.formatToPlainString(k.t["9WrecH"], {
      question: i
    })
  } else n = 0 !== f.length && e.type === L.d4z.DM && !i.bot && f.startsWith("> -# *") ? (n = d.ZP.unparse(f, e.id, !0)).substring(0, 1) + n.substring(4) : d.ZP.unparse(f, e.id, !0);
  return 0 === n.length && (n = function(e) {
    var t;
    if (void 0 !== e.embeds && e.embeds.length > 0) {
      let t = e.embeds[0],
        i = "description" in t ? t.description : t.rawDescription,
        n = "title" in t ? t.title : t.rawTitle;
      if (null != i) return null != n ? "".concat(n, " ").concat(i) : i;
      if (null != n) return n;
      if (null != t.fields && t.fields.length > 0) {
        let e = t.fields[0],
          i = "name" in e ? e.name : e.rawName,
          n = "value" in e ? e.value : e.rawValue;
        return "".concat(i, " ").concat(n)
      }
    }
    if ((0, P.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, L.iLy.IS_VOICE_MESSAGE)) return k.NW.string(k.t.slFYgo);
    if (void 0 !== e.attachments && e.attachments.length > 0) {
      let t = (0, c.Z)(e.attachments[0]);
      return k.NW.formatToPlainString(k.t["51OkwM"], {
        filename: t
      })
    }
    return ""
  }(t)), {
    icon: i.getAvatarURL(e.guild_id, 128),
    title: u,
    body: n
  }
}