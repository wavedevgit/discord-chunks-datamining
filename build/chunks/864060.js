/** Chunk was on 69813 **/
/** chunk id: 864060, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  FI: () => F,
  LL: () => k,
  N_: () => U,
  Xi: () => B,
  eF: () => L
}), require("./997841.js"), require("./953529.js"), require("./415506.js"), require("./388685.js");
var Chunk95015 = require("./95015.js"),
  Chunk911969 = require("./911969.js"),
  Chunk317381 = require("./317381.js"),
  Chunk599149 = require("./599149.js"),
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
  Chunk5192 = require("./5192.js"),
  Chunk352736 = require("./352736.js"),
  Chunk51144 = require("./51144.js");
require("./734934.js");
var Chunk842619 = require("./842619.js"),
  Chunk981631 = require("./981631.js"),
  Chunk124368 = require("./124368.js"),
  Chunk388032 = require("./388032.jsx");

function k(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  if (t.hasFlag(R.xW$.SPAMMER) || n.isManaged()) returnfalse;
  let l = n.getGuildId();
  return !(null != l && u.Z.isLurking(l) || !r.ignoreSameUser && t.id === e.id || C.Z.isBlockedOrIgnored(t.id) || !r.ignoreStatus && T.Z.getStatus() === R.Skl.DND || E.QZ.getSetting() || !r.ignoreNoMessagesSetting && x.ZP.allowNoMessages(n))
}

function L(e, t) {
  var n, l;
  let a = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    o = arguments.length > 3 && true !== arguments[3] && arguments[3];
  if (null != e.flags && (0, r.yE)(e.flags, R.iLy.SUPPRESS_NOTIFICATIONS)) returnfalse;
  let c = y.Z.getChannel(t);
  e.type === R.uaV.THREAD_STARTER_MESSAGE && (c = y.Z.getChannel(null == c ? true : c.parent_id));
  let s = P.default.getCurrentUser(),
    u = P.default.getUser(null == (n = e.author) ? true : n.id);
  if (null == c || null == s || null == u || c.type === R.d4z.GROUP_DM && e.type === R.uaV.RECIPIENT_REMOVE || A.Z.areSlayerNotificationsSuppressed() && ((l = c).type === R.d4z.DM || null != l.linkedLobby) || !k(s, u, c, {
      ignoreStatus: o,
      ignoreSameUser: R.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)
    }) || d.Z.isMessageRequest(t)) returnfalse;
  if (!a) {
    let e = I.Z.getChannelId(N.Z.getGuildId());
    if (e === c.id || v.ZP.getCurrentSidebarChannelId(e) === c.id) returnfalse
  }
  if (C.Z.isBlockedOrIgnoredForMessage(e) || true !== e.activity_instance && null != e.interaction && e.interaction.user.id === s.id) returnfalse;
  if (null != e.application_id) {
    let n = i.ZP.getCurrentEmbeddedActivity();
    if ((null == n ? true : n.applicationId) === e.application_id && n.location.channel_id === t) returnfalse
  }
  if (_.Ec.has(c.type)) {
    if (m.Z.isMuted(c.id)) returnfalse;
    let t = (0, h.J)(c);
    return t !== D.iN.NO_MESSAGES && (t === D.iN.ALL_MESSAGES || (0, g.Hl)({
      rawMessage: e,
      userId: s.id,
      suppressEveryone: false,
      suppressRoles: false
    }))
  } {
    let t = !_.tx.has(c.type) || S.Z.getChannelId() === c.id;
    if (x.ZP.allowAllMessages(c) && t) returntrue;
    let n = x.ZP.isSuppressEveryoneEnabled(c.getGuildId()),
      r = x.ZP.isSuppressRolesEnabled(c.getGuildId());
    return (0, g.Hl)({
      rawMessage: e,
      userId: s.id,
      suppressEveryone: n,
      suppressRoles: r
    })
  }
}

function U(e, t) {
  var n;
  if (I.Z.getChannelId(N.Z.getGuildId()) !== t) returnfalse;
  let r = y.Z.getChannel(t);
  e.type === R.uaV.THREAD_STARTER_MESSAGE && (r = y.Z.getChannel(null == r ? true : r.parent_id));
  let l = P.default.getCurrentUser(),
    i = P.default.getUser(null == (n = e.author) ? true : n.id);
  return !(null == r || null == l || null == i || r.isManaged() || i.hasFlag(R.xW$.SPAMMER) || C.Z.isBlockedOrIgnoredForMessage(e) || i.id === l.id || T.Z.getStatus() === R.Skl.DND || E.QZ.getSetting() || x.ZP.allowNoMessages(r))
}

function F(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    l = P.default.getCurrentUser(),
    i = P.default.getUser(e.ownerId);
  return !(null == t || null == l || null == i || !k(l, i, t, {
    ignoreStatus: r,
    ignoreNoMessagesSetting: true
  }) || x.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)) && (!!n || I.Z.getChannelId(N.Z.getGuildId()) !== t.id) && x.ZP.getNewForumThreadsCreated(t)
}
let V = (e, t, n) => "".concat((0, a.KM)(e, true), " (").concat((0, a.KM)((0, o.F6)(t, P.default, C.Z, true), true)).concat(null != n ? ", ".concat((0, a.KM)((0, o.F6)(n, P.default, C.Z), true)) : "", ")");

function W(e, t, n, r) {
  switch (e.type) {
    case R.d4z.GUILD_ANNOUNCEMENT:
    case R.d4z.GUILD_TEXT:
      return t;
    case R.d4z.GROUP_DM:
      return n;
    case R.d4z.DM:
    default:
      return r
  }
}

function B(e, t, n) {
  let i, a = Z.ZP.getName(e.getGuildId(), e.id, n),
    u = a;
  switch (e.type) {
    case R.d4z.GUILD_ANNOUNCEMENT:
    case R.d4z.GUILD_TEXT:
    case R.d4z.GUILD_VOICE:
    case R.d4z.ANNOUNCEMENT_THREAD:
    case R.d4z.PUBLIC_THREAD:
    case R.d4z.PRIVATE_THREAD:
      let d = y.Z.getChannel(e.parent_id);
      t.type === R.uaV.THREAD_STARTER_MESSAGE && null != d ? u = V(u, d, y.Z.getChannel(d.parent_id)) : (0, b.Z)(t) ? null != O.Z.getGuild(e.getGuildId()) && (u = V(u, e, d)) : u = V(u, e, d);
      break;
    case R.d4z.GROUP_DM:
      e.isManaged() && n.bot && u === (0, o.F6)(e, P.default, C.Z) || (u = V(u, e))
  }
  let g = t.content;
  if ((0, b.Z)(t) && null == (g = j.Z.stringify(t, e))) throw new c.Z("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", {
    message: t
  }), Error("failed to stringify system message");
  let m = "sticker_items" in t ? t.sticker_items : "stickerItems" in t ? t.stickerItems : t.stickers,
    h = [];
  if ("message_reference" in t ? (0, s.s)(t) : (0, s.Z)(t)) i = M.intl.string(M.t["9ddYKt"]);
  else if (null != t.activity && null != t.application) i = t.activity.type === R.mFx.JOIN ? M.intl.formatToPlainString(W(e, M.t.E8CgCh, M.t.c6KHWJ, M.t.Fy7rJN), {
    user: a,
    game: t.application.name
  }) : t.activity.type === R.mFx.JOIN_REQUEST ? M.intl.formatToPlainString(W(e, M.t["/TD0la"], M.t["/TD0la"], M.t["/TD0la"]), {
    user: a,
    game: t.application.name
  }) : "";
  else if (null != t.activity && t.activity.type === R.mFx.LISTEN) {
    let t = W(e, M.t.SaDdmN, M.t.qsODhp, M.t.WeiMTW);
    i = M.intl.formatToPlainString(t, {
      user: a
    })
  } else if (null != m && m.length > 0) i = M.intl.formatToPlainString(M.t.zY4v1B, {
    stickerName: m[0].name
  });
  else if (t.type === R.uaV.PREMIUM_REFERRAL) i = M.intl.formatToPlainString(M.t.lieTqU, {
    username: w.ZP.getName(n)
  });
  else if (null != t.poll) i = M.intl.formatToPlainString(M.t.ImizdM, {
    question: t.poll.question.text
  });
  else if (t.type === R.uaV.POLL_RESULT) {
    var E, _, v;
    let e = null == (v = t.embeds) || null == (_ = v[0]) || null == (E = _.fields) ? true : E.find(e => ("name" in e ? e.name : e.rawName) === "poll_question_text"),
      n = null != e ? "value" in e ? e.value : e.rawValue : "";
    i = M.intl.formatToPlainString(M.t["9WrecI"], {
      question: n
    })
  } else if (null != t.components && t.components.length > 0 && t.components[0].type === l.re.CHECKPOINT_CARD) i = M.intl.string(M.t.HWnMTQ);
  else if ({
      content: i,
      emoji: h
    } = f.ZP.unparseWithMeta(g, e.id, true), 0 !== g.length && e.type === R.d4z.DM && !n.bot && g.startsWith("> -# *"))
    for (let e of (i = i.substring(0, 1) + i.substring(4), h)) e.position -= 2;
  return 0 === i.length && (i = function(e) {
    var t;
    if (true !== e.embeds && e.embeds.length > 0) {
      let t = e.embeds[0],
        n = "description" in t ? t.description : t.rawDescription,
        r = "title" in t ? t.title : t.rawTitle;
      if (null != n) return null != r ? "".concat(r, " ").concat(n) : n;
      if (null != r) return r;
      if (null != t.fields && t.fields.length > 0) {
        let e = t.fields[0],
          n = "name" in e ? e.name : e.rawName,
          r = "value" in e ? e.value : e.rawValue;
        return "".concat(n, " ").concat(r)
      }
    }
    if ((0, r.yE)(null != (t = e.flags) ? t : 0, R.iLy.IS_VOICE_MESSAGE)) return M.intl.string(M.t.slFYgi);
    if (true !== e.attachments && e.attachments.length > 0) {
      let t = (0, p.Z)(e.attachments[0]);
      return M.intl.formatToPlainString(M.t["51OkwL"], {
        filename: t
      })
    }
    return ""
  }(t)), {
    icon: n.getAvatarURL(e.guild_id, 128),
    title: u,
    body: i,
    emoji: h
  }
}