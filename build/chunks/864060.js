/** Chunk was on 60831 **/
/** chunk id: 864060, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  FI: () => L,
  LL: () => k,
  N_: () => M,
  Xi: () => F,
  eF: () => U
}), require("./997841.js"), require("./953529.js"), require("./415506.js"), require("./388685.js");
var Chunk95015 = require("./95015.js"),
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
  let l = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  if (t.hasFlag(R.xW$.SPAMMER) || n.isManaged()) returnfalse;
  let i = n.getGuildId();
  return !(null != i && u.Z.isLurking(i) || !l.ignoreSameUser && t.id === e.id || m.Z.isBlockedOrIgnored(t.id) || !l.ignoreStatus && b.Z.getStatus() === R.Skl.DND || N.QZ.getSetting() || !l.ignoreNoMessagesSetting && v.ZP.allowNoMessages(n))
}

function U(e, t) {
  var n, r;
  let a = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    o = arguments.length > 3 && true !== arguments[3] && arguments[3];
  if (null != e.flags && (0, l.yE)(e.flags, R.iLy.SUPPRESS_NOTIFICATIONS)) returnfalse;
  let s = C.Z.getChannel(t);
  e.type === R.uaV.THREAD_STARTER_MESSAGE && (s = C.Z.getChannel(null == s ? true : s.parent_id));
  let u = x.default.getCurrentUser(),
    d = x.default.getUser(null == (n = e.author) ? true : n.id);
  if (null == s || null == u || null == d || s.type === R.d4z.GROUP_DM && e.type === R.uaV.RECIPIENT_REMOVE || j.Z.areSlayerNotificationsSuppressed() && ((r = s).type === R.d4z.DM || null != r.linkedLobby) || !k(u, d, s, {
      ignoreStatus: o,
      ignoreSameUser: R.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)
    }) || c.Z.isMessageRequest(t)) returnfalse;
  if (!a) {
    let e = I.Z.getChannelId(S.Z.getGuildId());
    if (e === s.id || y.ZP.getCurrentSidebarChannelId(e) === s.id) returnfalse
  }
  if (m.Z.isBlockedOrIgnoredForMessage(e) || true !== e.activity_instance && null != e.interaction && e.interaction.user.id === u.id) returnfalse;
  if (null != e.application_id) {
    let n = i.ZP.getCurrentEmbeddedActivity();
    if ((null == n ? true : n.applicationId) === e.application_id && n.location.channel_id === t) returnfalse
  }
  if (O.Ec.has(s.type)) {
    if (p.Z.isMuted(s.id)) returnfalse;
    let t = (0, E.J)(s);
    return t !== D.iN.NO_MESSAGES && (t === D.iN.ALL_MESSAGES || (0, g.Hl)({
      rawMessage: e,
      userId: u.id,
      suppressEveryone: false,
      suppressRoles: false
    }))
  } {
    let t = !O.tx.has(s.type) || T.Z.getChannelId() === s.id;
    if (v.ZP.allowAllMessages(s) && t) returntrue;
    let n = v.ZP.isSuppressEveryoneEnabled(s.getGuildId()),
      l = v.ZP.isSuppressRolesEnabled(s.getGuildId());
    return (0, g.Hl)({
      rawMessage: e,
      userId: u.id,
      suppressEveryone: n,
      suppressRoles: l
    })
  }
}

function M(e, t) {
  var n;
  if (I.Z.getChannelId(S.Z.getGuildId()) !== t) returnfalse;
  let l = C.Z.getChannel(t);
  e.type === R.uaV.THREAD_STARTER_MESSAGE && (l = C.Z.getChannel(null == l ? true : l.parent_id));
  let i = x.default.getCurrentUser(),
    r = x.default.getUser(null == (n = e.author) ? true : n.id);
  return !(null == l || null == i || null == r || l.isManaged() || r.hasFlag(R.xW$.SPAMMER) || m.Z.isBlockedOrIgnoredForMessage(e) || r.id === i.id || b.Z.getStatus() === R.Skl.DND || N.QZ.getSetting() || v.ZP.allowNoMessages(l))
}

function L(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    l = arguments.length > 3 && true !== arguments[3] && arguments[3],
    i = x.default.getCurrentUser(),
    r = x.default.getUser(e.ownerId);
  return !(null == t || null == i || null == r || !k(i, r, t, {
    ignoreStatus: l,
    ignoreNoMessagesSetting: true
  }) || v.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)) && (!!n || I.Z.getChannelId(S.Z.getGuildId()) !== t.id) && v.ZP.getNewForumThreadsCreated(t)
}
let G = (e, t, n) => "".concat((0, r.KM)(e, true), " (").concat((0, r.KM)((0, a.F6)(t, x.default, m.Z, true), true)).concat(null != n ? ", ".concat((0, r.KM)((0, a.F6)(n, x.default, m.Z), true)) : "", ")");

function V(e, t, n, l) {
  switch (e.type) {
    case R.d4z.GUILD_ANNOUNCEMENT:
    case R.d4z.GUILD_TEXT:
      return t;
    case R.d4z.GROUP_DM:
      return n;
    case R.d4z.DM:
    default:
      return l
  }
}

function F(e, t, n) {
  let i, r = P.ZP.getName(e.getGuildId(), e.id, n),
    u = r;
  switch (e.type) {
    case R.d4z.GUILD_ANNOUNCEMENT:
    case R.d4z.GUILD_TEXT:
    case R.d4z.GUILD_VOICE:
    case R.d4z.ANNOUNCEMENT_THREAD:
    case R.d4z.PUBLIC_THREAD:
    case R.d4z.PRIVATE_THREAD:
      let c = C.Z.getChannel(e.parent_id);
      t.type === R.uaV.THREAD_STARTER_MESSAGE && null != c ? u = G(u, c, C.Z.getChannel(c.parent_id)) : (0, h.Z)(t) ? null != _.Z.getGuild(e.getGuildId()) && (u = G(u, e, c)) : u = G(u, e, c);
      break;
    case R.d4z.GROUP_DM:
      e.isManaged() && n.bot && u === (0, a.F6)(e, x.default, m.Z) || (u = G(u, e))
  }
  let g = t.content;
  if ((0, h.Z)(t) && null == (g = Z.Z.stringify(t, e))) throw new o.Z("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", {
    message: t
  }), Error("failed to stringify system message");
  let p = "sticker_items" in t ? t.sticker_items : "stickerItems" in t ? t.stickerItems : t.stickers,
    E = [];
  if ("message_reference" in t ? (0, s.s)(t) : (0, s.Z)(t)) i = w.intl.string(w.t["9ddYKt"]);
  else if (null != t.activity && null != t.application) i = t.activity.type === R.mFx.JOIN ? w.intl.formatToPlainString(V(e, w.t.E8CgCh, w.t.c6KHWJ, w.t.Fy7rJN), {
    user: r,
    game: t.application.name
  }) : t.activity.type === R.mFx.JOIN_REQUEST ? w.intl.formatToPlainString(V(e, w.t["/TD0la"], w.t["/TD0la"], w.t["/TD0la"]), {
    user: r,
    game: t.application.name
  }) : "";
  else if (null != t.activity && t.activity.type === R.mFx.LISTEN) {
    let t = V(e, w.t.SaDdmN, w.t.qsODhp, w.t.WeiMTW);
    i = w.intl.formatToPlainString(t, {
      user: r
    })
  } else if (null != p && p.length > 0) i = w.intl.formatToPlainString(w.t.zY4v1B, {
    stickerName: p[0].name
  });
  else if (t.type === R.uaV.PREMIUM_REFERRAL) i = w.intl.formatToPlainString(w.t.lieTqU, {
    username: A.ZP.getName(n)
  });
  else if (null != t.poll) i = w.intl.formatToPlainString(w.t.ImizdM, {
    question: t.poll.question.text
  });
  else if (t.type === R.uaV.POLL_RESULT) {
    var N, O, y;
    let e = null == (y = t.embeds) || null == (O = y[0]) || null == (N = O.fields) ? true : N.find(e => ("name" in e ? e.name : e.rawName) === "poll_question_text"),
      n = null != e ? "value" in e ? e.value : e.rawValue : "";
    i = w.intl.formatToPlainString(w.t["9WrecI"], {
      question: n
    })
  } else if ({
      content: i,
      emoji: E
    } = d.ZP.unparseWithMeta(g, e.id, true), 0 !== g.length && e.type === R.d4z.DM && !n.bot && g.startsWith("> -# *"))
    for (let e of (i = i.substring(0, 1) + i.substring(4), E)) e.position -= 2;
  return 0 === i.length && (i = function(e) {
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
    if ((0, l.yE)(null != (t = e.flags) ? t : 0, R.iLy.IS_VOICE_MESSAGE)) return w.intl.string(w.t.slFYgi);
    if (true !== e.attachments && e.attachments.length > 0) {
      let t = (0, f.Z)(e.attachments[0]);
      return w.intl.formatToPlainString(w.t["51OkwL"], {
        filename: t
      })
    }
    return ""
  }(t)), {
    icon: n.getAvatarURL(e.guild_id, 128),
    title: u,
    body: i,
    emoji: E
  }
}