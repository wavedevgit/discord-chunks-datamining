/** Chunk was on 70205 **/
/** chunk id: 864060, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  FI: () => w,
  LL: () => L,
  N_: () => G,
  Xi: () => H,
  eF: () => M
}), require("./997841.js"), require("./953529.js"), require("./415506.js");
var Chunk317381 = require("./317381.js"),
  Chunk933557 = require("./933557.js"),
  Chunk710845 = require("./710845.js"),
  Chunk978003 = require("./978003.js"),
  Chunk41776 = require("./41776.js"),
  Chunk355298 = require("./355298.js"),
  Chunk957730 = require("./957730.js"),
  Chunk850908 = require("./850908.js"),
  Chunk572804 = require("./572804.js"),
  Chunk901461 = require("./901461.js"),
  Chunk569471 = require("./569471.js"),
  Chunk723170 = require("./723170.js"),
  Chunk695346 = require("./695346.js"),
  Chunk131704 = require("./131704.js"),
  Chunk433355 = require("./433355.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk19780 = require("./19780.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk885110 = require("./885110.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk630388 = require("./630388.js"),
  Chunk5192 = require("./5192.js"),
  Chunk352736 = require("./352736.js"),
  Chunk51144 = require("./51144.js");
require("./734934.js");
var Chunk842619 = require("./842619.js"),
  Chunk981631 = require("./981631.js"),
  Chunk124368 = require("./124368.js"),
  Chunk388032 = require("./388032.jsx");

function L(t, e, n) {
  let i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  if (e.hasFlag(b.xW$.SPAMMER) || n.isManaged()) returnfalse;
  let l = n.getGuildId();
  return !(null != l && o.Z.isLurking(l) || !i.ignoreSameUser && e.id === t.id || I.Z.isBlockedOrIgnored(e.id) || !i.ignoreStatus && A.Z.getStatus() === b.Skl.DND || _.QZ.getSetting() || !i.ignoreNoMessagesSetting && m.ZP.allowNoMessages(n))
}

function M(t, e) {
  var n, l;
  let a = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3];
  if (null != t.flags && (0, y.yE)(t.flags, b.iLy.SUPPRESS_NOTIFICATIONS)) returnfalse;
  let o = S.Z.getChannel(e);
  t.type === b.uaV.THREAD_STARTER_MESSAGE && (o = S.Z.getChannel(null == o ? true : o.parent_id));
  let s = v.default.getCurrentUser(),
    d = v.default.getUser(null == (n = t.author) ? true : n.id);
  if (null == o || null == s || null == d || o.type === b.d4z.GROUP_DM && t.type === b.uaV.RECIPIENT_REMOVE || U.Z.areSlayerNotificationsSuppressed() && ((l = o).type === b.d4z.DM || null != l.linkedLobby) || !L(s, d, o, {
      ignoreStatus: r,
      ignoreSameUser: b.V$x.SELF_MENTIONABLE_SYSTEM.has(t.type)
    }) || u.Z.isMessageRequest(e)) returnfalse;
  if (!a) {
    let t = h.Z.getChannelId(Z.Z.getGuildId());
    if (t === o.id || T.ZP.getCurrentSidebarChannelId(t) === o.id) returnfalse
  }
  if (I.Z.isBlockedOrIgnoredForMessage(t) || true !== t.activity_instance && null != t.interaction && t.interaction.user.id === s.id) returnfalse;
  if (null != t.application_id) {
    let n = i.ZP.getCurrentEmbeddedActivity();
    if ((null == n ? true : n.applicationId) === t.application_id && n.location.channel_id === e) returnfalse
  }
  if (t.type === b.uaV.CHAT_WALLPAPER_SET || t.type === b.uaV.CHAT_WALLPAPER_REMOVED) returnfalse;
  if (N.Ec.has(o.type)) {
    if (g.Z.isMuted(o.id)) returnfalse;
    let e = (0, E.J)(o);
    return e !== R.iN.NO_MESSAGES && (e === R.iN.ALL_MESSAGES || (0, c.Hl)({
      rawMessage: t,
      userId: s.id,
      suppressEveryone: false,
      suppressRoles: false
    }))
  } {
    let e = !N.tx.has(o.type) || C.Z.getChannelId() === o.id;
    if (m.ZP.allowAllMessages(o) && e) returntrue;
    let n = m.ZP.isSuppressEveryoneEnabled(o.getGuildId()),
      i = m.ZP.isSuppressRolesEnabled(o.getGuildId());
    return (0, c.Hl)({
      rawMessage: t,
      userId: s.id,
      suppressEveryone: n,
      suppressRoles: i
    })
  }
}

function G(t, e) {
  var n;
  if (h.Z.getChannelId(Z.Z.getGuildId()) !== e) returnfalse;
  let i = S.Z.getChannel(e);
  t.type === b.uaV.THREAD_STARTER_MESSAGE && (i = S.Z.getChannel(null == i ? true : i.parent_id));
  let l = v.default.getCurrentUser(),
    a = v.default.getUser(null == (n = t.author) ? true : n.id);
  return !(null == i || null == l || null == a || i.isManaged() || a.hasFlag(b.xW$.SPAMMER) || I.Z.isBlockedOrIgnoredForMessage(t) || a.id === l.id || A.Z.getStatus() === b.Skl.DND || _.QZ.getSetting() || m.ZP.allowNoMessages(i)) && t.type !== b.uaV.CHAT_WALLPAPER_SET && t.type !== b.uaV.CHAT_WALLPAPER_REMOVED
}

function w(t, e) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    i = arguments.length > 3 && true !== arguments[3] && arguments[3],
    l = v.default.getCurrentUser(),
    a = v.default.getUser(t.ownerId);
  return !(null == e || null == l || null == a || !L(l, a, e, {
    ignoreStatus: i,
    ignoreNoMessagesSetting: true
  }) || m.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)) && (!!n || h.Z.getChannelId(Z.Z.getGuildId()) !== e.id) && m.ZP.getNewForumThreadsCreated(e)
}
let V = (t, e, n) => "".concat(t, " (").concat((0, l.F6)(e, v.default, I.Z, true)).concat(null != n ? ", ".concat((0, l.F6)(n, v.default, I.Z)) : "", ")");

function F(t, e, n, i) {
  switch (t.type) {
    case b.d4z.GUILD_ANNOUNCEMENT:
    case b.d4z.GUILD_TEXT:
      return e;
    case b.d4z.GROUP_DM:
      return n;
    case b.d4z.DM:
    default:
      return i
  }
}

function H(t, e, n) {
  let i, o = P.ZP.getName(t.getGuildId(), t.id, n),
    u = o;
  switch (t.type) {
    case b.d4z.GUILD_ANNOUNCEMENT:
    case b.d4z.GUILD_TEXT:
    case b.d4z.GUILD_VOICE:
    case b.d4z.ANNOUNCEMENT_THREAD:
    case b.d4z.PUBLIC_THREAD:
    case b.d4z.PRIVATE_THREAD:
      let c = S.Z.getChannel(t.parent_id);
      e.type === b.uaV.THREAD_STARTER_MESSAGE && null != c ? u = V(u, c, S.Z.getChannel(c.parent_id)) : (0, f.Z)(e) ? null != p.Z.getGuild(t.getGuildId()) && (u = V(u, t, c)) : u = V(u, t, c);
      break;
    case b.d4z.GROUP_DM:
      t.isManaged() && n.bot && u === (0, l.F6)(t, v.default, I.Z) || (u = "".concat(u, " (").concat((0, l.F6)(t, v.default, I.Z, true), ")"))
  }
  let g = e.content;
  if ((0, f.Z)(e) && null == (g = O.Z.stringify(e, t))) throw new a.Z("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", {
    message: e
  }), Error("failed to stringify system message");
  let E = "sticker_items" in e ? e.sticker_items : "stickerItems" in e ? e.stickerItems : e.stickers;
  if ("message_reference" in e ? (0, r.s)(e) : (0, r.Z)(e)) i = k.intl.string(k.t["9ddYKi"]);
  else if (null != e.activity && null != e.application) i = e.activity.type === b.mFx.JOIN ? k.intl.formatToPlainString(F(t, k.t.E8CgCg, k.t.c6KHWF, k.t.Fy7rJC), {
    user: o,
    game: e.application.name
  }) : e.activity.type === b.mFx.JOIN_REQUEST ? k.intl.formatToPlainString(F(t, k.t["/TD0lZ"], k.t["/TD0lZ"], k.t["/TD0lZ"]), {
    user: o,
    game: e.application.name
  }) : "";
  else if (null != e.activity && e.activity.type === b.mFx.LISTEN) {
    let e = F(t, k.t.SaDdmJ, k.t.qsODho, k.t.WeiMTU);
    i = k.intl.formatToPlainString(e, {
      user: o
    })
  } else if (null != E && E.length > 0) i = k.intl.formatToPlainString(k.t.zY4v1N, {
    stickerName: E[0].name
  });
  else if (e.type === b.uaV.PREMIUM_REFERRAL) i = k.intl.formatToPlainString(k.t.lieTqa, {
    username: D.ZP.getName(n)
  });
  else if (null != e.poll) i = k.intl.formatToPlainString(k.t.ImizdH, {
    question: e.poll.question.text
  });
  else if (e.type === b.uaV.POLL_RESULT) {
    var _, N, T;
    let t = null == (T = e.embeds) || null == (N = T[0]) || null == (_ = N.fields) ? true : _.find(t => ("name" in t ? t.name : t.rawName) === "poll_question_text"),
      n = null != t ? "value" in t ? t.value : t.rawValue : "";
    i = k.intl.formatToPlainString(k.t["9WrecH"], {
      question: n
    })
  } else i = 0 !== g.length && t.type === b.d4z.DM && !n.bot && g.startsWith("> -# *") ? (i = s.ZP.unparse(g, t.id, true)).substring(0, 1) + i.substring(4) : s.ZP.unparse(g, t.id, true);
  return 0 === i.length && (i = function(t) {
    var e;
    if (true !== t.embeds && t.embeds.length > 0) {
      let e = t.embeds[0],
        n = "description" in e ? e.description : e.rawDescription,
        i = "title" in e ? e.title : e.rawTitle;
      if (null != n) return null != i ? "".concat(i, " ").concat(n) : n;
      if (null != i) return i;
      if (null != e.fields && e.fields.length > 0) {
        let t = e.fields[0],
          n = "name" in t ? t.name : t.rawName,
          i = "value" in t ? t.value : t.rawValue;
        return "".concat(n, " ").concat(i)
      }
    }
    if ((0, y.yE)(null != (e = t.flags) ? e : 0, b.iLy.IS_VOICE_MESSAGE)) return k.intl.string(k.t.slFYgo);
    if (true !== t.attachments && t.attachments.length > 0) {
      let e = (0, d.Z)(t.attachments[0]);
      return k.intl.formatToPlainString(k.t["51OkwM"], {
        filename: e
      })
    }
    return ""
  }(e)), {
    icon: n.getAvatarURL(t.guild_id, 128),
    title: u,
    body: i
  }
}