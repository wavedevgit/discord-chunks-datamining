/** Chunk was on 60831 **/
/** chunk id: 864060, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  FI: () => M,
  LL: () => w,
  N_: () => U,
  Xi: () => V,
  eF: () => k
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

function w(e, t, n) {
  let l = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  if (t.hasFlag(j.xW$.SPAMMER) || n.isManaged()) returnfalse;
  let i = n.getGuildId();
  return !(null != i && o.Z.isLurking(i) || !l.ignoreSameUser && t.id === e.id || C.Z.isBlockedOrIgnored(t.id) || !l.ignoreStatus && I.Z.getStatus() === j.Skl.DND || p.QZ.getSetting() || !l.ignoreNoMessagesSetting && S.ZP.allowNoMessages(n))
}

function k(e, t) {
  var n, i;
  let r = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    a = arguments.length > 3 && true !== arguments[3] && arguments[3];
  if (null != e.flags && (0, v.yE)(e.flags, j.iLy.SUPPRESS_NOTIFICATIONS)) returnfalse;
  let o = y.Z.getChannel(t);
  e.type === j.uaV.THREAD_STARTER_MESSAGE && (o = y.Z.getChannel(null == o ? true : o.parent_id));
  let u = b.default.getCurrentUser(),
    c = b.default.getUser(null == (n = e.author) ? true : n.id);
  if (null == o || null == u || null == c || o.type === j.d4z.GROUP_DM && e.type === j.uaV.RECIPIENT_REMOVE || Z.Z.areSlayerNotificationsSuppressed() && ((i = o).type === j.d4z.DM || null != i.linkedLobby) || !w(u, c, o, {
      ignoreStatus: a,
      ignoreSameUser: j.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)
    }) || s.Z.isMessageRequest(t)) returnfalse;
  if (!r) {
    let e = T.Z.getChannelId(m.Z.getGuildId());
    if (e === o.id || N.ZP.getCurrentSidebarChannelId(e) === o.id) returnfalse
  }
  if (C.Z.isBlockedOrIgnoredForMessage(e) || true !== e.activity_instance && null != e.interaction && e.interaction.user.id === u.id) returnfalse;
  if (null != e.application_id) {
    let n = l.ZP.getCurrentEmbeddedActivity();
    if ((null == n ? true : n.applicationId) === e.application_id && n.location.channel_id === t) returnfalse
  }
  if (e.type === j.uaV.CHAT_WALLPAPER_SET || e.type === j.uaV.CHAT_WALLPAPER_REMOVED) returnfalse;
  if (E.Ec.has(o.type)) {
    if (g.Z.isMuted(o.id)) returnfalse;
    let t = (0, h.J)(o);
    return t !== R.iN.NO_MESSAGES && (t === R.iN.ALL_MESSAGES || (0, d.Hl)({
      rawMessage: e,
      userId: u.id,
      suppressEveryone: false,
      suppressRoles: false
    }))
  } {
    let t = !E.tx.has(o.type) || _.Z.getChannelId() === o.id;
    if (S.ZP.allowAllMessages(o) && t) returntrue;
    let n = S.ZP.isSuppressEveryoneEnabled(o.getGuildId()),
      l = S.ZP.isSuppressRolesEnabled(o.getGuildId());
    return (0, d.Hl)({
      rawMessage: e,
      userId: u.id,
      suppressEveryone: n,
      suppressRoles: l
    })
  }
}

function U(e, t) {
  var n;
  if (T.Z.getChannelId(m.Z.getGuildId()) !== t) returnfalse;
  let l = y.Z.getChannel(t);
  e.type === j.uaV.THREAD_STARTER_MESSAGE && (l = y.Z.getChannel(null == l ? true : l.parent_id));
  let i = b.default.getCurrentUser(),
    r = b.default.getUser(null == (n = e.author) ? true : n.id);
  return !(null == l || null == i || null == r || l.isManaged() || r.hasFlag(j.xW$.SPAMMER) || C.Z.isBlockedOrIgnoredForMessage(e) || r.id === i.id || I.Z.getStatus() === j.Skl.DND || p.QZ.getSetting() || S.ZP.allowNoMessages(l)) && e.type !== j.uaV.CHAT_WALLPAPER_SET && e.type !== j.uaV.CHAT_WALLPAPER_REMOVED
}

function M(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    l = arguments.length > 3 && true !== arguments[3] && arguments[3],
    i = b.default.getCurrentUser(),
    r = b.default.getUser(e.ownerId);
  return !(null == t || null == i || null == r || !w(i, r, t, {
    ignoreStatus: l,
    ignoreNoMessagesSetting: true
  }) || S.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)) && (!!n || T.Z.getChannelId(m.Z.getGuildId()) !== t.id) && S.ZP.getNewForumThreadsCreated(t)
}
let L = (e, t, n) => "".concat(e, " (").concat((0, i.F6)(t, b.default, C.Z, true)).concat(null != n ? ", ".concat((0, i.F6)(n, b.default, C.Z)) : "", ")");

function G(e, t, n, l) {
  switch (e.type) {
    case j.d4z.GUILD_ANNOUNCEMENT:
    case j.d4z.GUILD_TEXT:
      return t;
    case j.d4z.GROUP_DM:
      return n;
    case j.d4z.DM:
    default:
      return l
  }
}

function V(e, t, n) {
  let l, o = x.ZP.getName(e.getGuildId(), e.id, n),
    s = o;
  switch (e.type) {
    case j.d4z.GUILD_ANNOUNCEMENT:
    case j.d4z.GUILD_TEXT:
    case j.d4z.GUILD_VOICE:
    case j.d4z.ANNOUNCEMENT_THREAD:
    case j.d4z.PUBLIC_THREAD:
    case j.d4z.PRIVATE_THREAD:
      let d = y.Z.getChannel(e.parent_id);
      t.type === j.uaV.THREAD_STARTER_MESSAGE && null != d ? s = L(s, d, y.Z.getChannel(d.parent_id)) : (0, f.Z)(t) ? null != O.Z.getGuild(e.getGuildId()) && (s = L(s, e, d)) : s = L(s, e, d);
      break;
    case j.d4z.GROUP_DM:
      e.isManaged() && n.bot && s === (0, i.F6)(e, b.default, C.Z) || (s = "".concat(s, " (").concat((0, i.F6)(e, b.default, C.Z, true), ")"))
  }
  let g = t.content;
  if ((0, f.Z)(t) && null == (g = P.Z.stringify(t, e))) throw new r.Z("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", {
    message: t
  }), Error("failed to stringify system message");
  let h = "sticker_items" in t ? t.sticker_items : "stickerItems" in t ? t.stickerItems : t.stickers;
  if ("message_reference" in t ? (0, a.s)(t) : (0, a.Z)(t)) l = D.intl.string(D.t["9ddYKi"]);
  else if (null != t.activity && null != t.application) l = t.activity.type === j.mFx.JOIN ? D.intl.formatToPlainString(G(e, D.t.E8CgCg, D.t.c6KHWF, D.t.Fy7rJC), {
    user: o,
    game: t.application.name
  }) : t.activity.type === j.mFx.JOIN_REQUEST ? D.intl.formatToPlainString(G(e, D.t["/TD0lZ"], D.t["/TD0lZ"], D.t["/TD0lZ"]), {
    user: o,
    game: t.application.name
  }) : "";
  else if (null != t.activity && t.activity.type === j.mFx.LISTEN) {
    let t = G(e, D.t.SaDdmJ, D.t.qsODho, D.t.WeiMTU);
    l = D.intl.formatToPlainString(t, {
      user: o
    })
  } else if (null != h && h.length > 0) l = D.intl.formatToPlainString(D.t.zY4v1N, {
    stickerName: h[0].name
  });
  else if (t.type === j.uaV.PREMIUM_REFERRAL) l = D.intl.formatToPlainString(D.t.lieTqa, {
    username: A.ZP.getName(n)
  });
  else if (null != t.poll) l = D.intl.formatToPlainString(D.t.ImizdH, {
    question: t.poll.question.text
  });
  else if (t.type === j.uaV.POLL_RESULT) {
    var p, E, N;
    let e = null == (N = t.embeds) || null == (E = N[0]) || null == (p = E.fields) ? true : p.find(e => ("name" in e ? e.name : e.rawName) === "poll_question_text"),
      n = null != e ? "value" in e ? e.value : e.rawValue : "";
    l = D.intl.formatToPlainString(D.t["9WrecH"], {
      question: n
    })
  } else l = 0 !== g.length && e.type === j.d4z.DM && !n.bot && g.startsWith("> -# *") ? (l = u.ZP.unparse(g, e.id, true)).substring(0, 1) + l.substring(4) : u.ZP.unparse(g, e.id, true);
  return 0 === l.length && (l = function(e) {
    var t;
    if (true !== e.embeds && e.embeds.length > 0) {
      let t = e.embeds[0],
        n = "description" in t ? t.description : t.rawDescription,
        l = "title" in t ? t.title : t.rawTitle;
      if (null != n) return null != l ? "".concat(l, " ").concat(n) : n;
      if (null != l) return l;
      if (null != t.fields && t.fields.length > 0) {
        let e = t.fields[0],
          n = "name" in e ? e.name : e.rawName,
          l = "value" in e ? e.value : e.rawValue;
        return "".concat(n, " ").concat(l)
      }
    }
    if ((0, v.yE)(null != (t = e.flags) ? t : 0, j.iLy.IS_VOICE_MESSAGE)) return D.intl.string(D.t.slFYgo);
    if (true !== e.attachments && e.attachments.length > 0) {
      let t = (0, c.Z)(e.attachments[0]);
      return D.intl.formatToPlainString(D.t["51OkwM"], {
        filename: t
      })
    }
    return ""
  }(t)), {
    icon: n.getAvatarURL(e.guild_id, 128),
    title: s,
    body: l
  }
}