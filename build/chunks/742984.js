/** Chunk was on web.js **/
/** chunk id: 742984, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  TB: () => W,
  Wv: () => U,
  kY: () => V,
  lx: () => G,
  q1: () => F
}), require("./938796.js"), require("./228524.js"), require("./65821.js"), require("./896048.js");
var Chunk665260 = require("./665260.js"),
  Chunk155718 = require("./155718.js"),
  Chunk933958 = require("./933958.js"),
  Chunk551639 = require("./551639.js"),
  Chunk47167 = require("./47167.js"),
  Chunk626584 = require("./626584.js"),
  Chunk427930 = require("./427930.js"),
  Chunk857071 = require("./857071.js"),
  Chunk380335 = require("./380335.js"),
  Chunk451909 = require("./451909.js"),
  Chunk465856 = require("./465856.js"),
  Chunk451919 = require("./451919.js"),
  Chunk143413 = require("./143413.js"),
  Chunk152007 = require("./152007.js"),
  Chunk607508 = require("./607508.js"),
  Chunk253932 = require("./253932.js"),
  Chunk95701 = require("./95701.js"),
  Chunk761640 = require("./761640.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk383501 = require("./383501.js"),
  Chunk994500 = require("./994500.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk461213 = require("./461213.js"),
  Chunk543465 = require("./543465.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk638075 = require("./638075.js"),
  Chunk427262 = require("./427262.js");
require("./970931.js");
var Chunk655237 = require("./655237.js"),
  Chunk652215 = require("./652215.js"),
  Chunk37411 = require("./37411.js"),
  Chunk985018 = require("./985018.jsx");
let k = "> -# *";

function U(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  if (t.hasFlag(x.nhx.SPAMMER) || n.isManaged()) returnfalse;
  let i = n.getGuildId();
  return !(null != i && u.A.isLurking(i) || !r.ignoreSameUser && t.id === e.id || I.A.isBlockedOrIgnored(t.id) || !r.ignoreStatus && C.A.getStatus() === x.clD.DND || E.NO.getSetting() || !r.ignoreNoMessagesSetting && N.Ay.allowNoMessages(n))
}

function G(e, t) {
  var n;
  let i = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    o = arguments.length > 3 && true !== arguments[3] && arguments[3];
  if (null != e.flags && (0, r.Lt)(e.flags, x.pr7.SUPPRESS_NOTIFICATIONS)) returnfalse;
  let s = O.A.getChannel(t);
  e.type === x.lAJ.THREAD_STARTER_MESSAGE && (s = O.A.getChannel(null == s ? true : s.parent_id));
  let l = w.default.getCurrentUser(),
    c = w.default.getUser(null == (n = e.author) ? true : n.id);
  if (null == s || null == l || null == c || s.type === x.rbe.GROUP_DM && e.type === x.lAJ.RECIPIENT_REMOVE || L.A.areSlayerNotificationsSuppressed() && K(s) || !U(l, c, s, {
      ignoreStatus: o,
      ignoreSameUser: x.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type)
    }) || d.A.isMessageRequest(t)) returnfalse;
  if (!i) {
    let e = S.A.getChannelId(T.A.getGuildId());
    if (e === s.id || b.Ay.getCurrentSidebarChannelId(e) === s.id) returnfalse
  }
  if (I.A.isBlockedOrIgnoredForMessage(e) || true !== e.activity_instance && null != e.interaction && e.interaction.user.id === l.id) returnfalse;
  if (null != e.application_id) {
    let n = a.Ay.getCurrentEmbeddedActivity();
    if ((null == n ? true : n.applicationId) === e.application_id && n.location.channel_id === t) returnfalse
  }
  if (y.Le.has(s.type)) {
    if (m.A.isMuted(s.id)) returnfalse;
    let t = (0, g.l)(s);
    return t !== M.CP.NO_MESSAGES && (t === M.CP.ALL_MESSAGES || (0, _.bG)({
      rawMessage: e,
      userId: l.id,
      suppressEveryone: false,
      suppressRoles: false
    }))
  } {
    let t = !y.OU.has(s.type) || A.A.getChannelId() === s.id;
    if (N.Ay.allowAllMessages(s) && t) returntrue;
    let n = N.Ay.isSuppressEveryoneEnabled(s.getGuildId()),
      r = N.Ay.isSuppressRolesEnabled(s.getGuildId());
    return (0, _.bG)({
      rawMessage: e,
      userId: l.id,
      suppressEveryone: n,
      suppressRoles: r
    })
  }
}

function V(e, t) {
  var n;
  if (S.A.getChannelId(T.A.getGuildId()) !== t) returnfalse;
  let r = O.A.getChannel(t);
  e.type === x.lAJ.THREAD_STARTER_MESSAGE && (r = O.A.getChannel(null == r ? true : r.parent_id));
  let i = w.default.getCurrentUser(),
    a = w.default.getUser(null == (n = e.author) ? true : n.id);
  return !(null == r || null == i || null == a || r.isManaged() || a.hasFlag(x.nhx.SPAMMER) || I.A.isBlockedOrIgnoredForMessage(e) || a.id === i.id || C.A.getStatus() === x.clD.DND || E.NO.getSetting() || N.Ay.allowNoMessages(r))
}

function F(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    i = w.default.getCurrentUser(),
    a = w.default.getUser(e.ownerId);
  return !(null == t || null == i || null == a || !U(i, a, t, {
    ignoreStatus: r,
    ignoreNoMessagesSetting: true
  }) || N.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)) && (!!n || S.A.getChannelId(T.A.getGuildId()) !== t.id) && N.Ay.getNewForumThreadsCreated(t)
}
let B = (e, t, n) => "".concat((0, o.az)(e), " (").concat((0, o.az)((0, s.m1)(t, w.default, I.A, true))).concat(null != n ? ", ".concat((0, o.az)((0, s.m1)(n, w.default, I.A))) : "", ")");

function H(e, t, n, r) {
  switch (e.type) {
    case x.rbe.GUILD_ANNOUNCEMENT:
    case x.rbe.GUILD_TEXT:
      return t;
    case x.rbe.GROUP_DM:
      return n;
    case x.rbe.DM:
    default:
      return r
  }
}

function Y(e) {
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
  if ((0, r.Lt)(null != (t = e.flags) ? t : 0, x.pr7.IS_VOICE_MESSAGE)) return j.intl.string(j.t.slFYgi);
  if (true !== e.attachments && e.attachments.length > 0) {
    let t = (0, p.A)(e.attachments[0]);
    return j.intl.formatToPlainString(j.t["51OkwL"], {
      filename: t
    })
  }
  return ""
}

function W(e, t, n) {
  let r, a = R.Ay.getName(e.getGuildId(), e.id, n),
    o = a;
  switch (e.type) {
    case x.rbe.GUILD_ANNOUNCEMENT:
    case x.rbe.GUILD_TEXT:
    case x.rbe.GUILD_VOICE:
    case x.rbe.ANNOUNCEMENT_THREAD:
    case x.rbe.PUBLIC_THREAD:
    case x.rbe.PRIVATE_THREAD:
      let u = O.A.getChannel(e.parent_id);
      t.type === x.lAJ.THREAD_STARTER_MESSAGE && null != u ? o = B(o, u, O.A.getChannel(u.parent_id)) : (0, h.A)(t) ? null != v.A.getGuild(e.getGuildId()) && (o = B(o, e, u)) : o = B(o, e, u);
      break;
    case x.rbe.GROUP_DM:
      e.isManaged() && n.bot && o === (0, s.m1)(e, w.default, I.A) || (o = B(o, e))
  }
  let d = t.content;
  if ((0, h.A)(t) && null == (d = P.A.stringify(t, e))) throw new l.A("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", {
    message: t
  }), Error("failed to stringify system message");
  let p = "sticker_items" in t ? t.sticker_items : "stickerItems" in t ? t.stickerItems : t.stickers,
    _ = [];
  if ("message_reference" in t ? (0, c.m)(t) : (0, c.A)(t)) r = j.intl.string(j.t["9ddYKt"]);
  else if (null != t.activity && null != t.application) r = t.activity.type === x.xL.JOIN ? j.intl.formatToPlainString(H(e, j.t.E8CgCh, j.t.c6KHWJ, j.t.Fy7rJN), {
    user: a,
    game: t.application.name
  }) : t.activity.type === x.xL.JOIN_REQUEST ? j.intl.formatToPlainString(H(e, j.t["/TD0la"], j.t["/TD0la"], j.t["/TD0la"]), {
    user: a,
    game: t.application.name
  }) : "";
  else if (null != t.activity && t.activity.type === x.xL.LISTEN) {
    let t = H(e, j.t.SaDdmN, j.t.qsODhp, j.t.WeiMTW);
    r = j.intl.formatToPlainString(t, {
      user: a
    })
  } else if (null != p && p.length > 0) r = j.intl.formatToPlainString(j.t.zY4v1B, {
    stickerName: p[0].name
  });
  else if (t.type === x.lAJ.PREMIUM_REFERRAL) r = j.intl.formatToPlainString(j.t.lieTqU, {
    username: D.Ay.getName(n)
  });
  else if (null != t.poll) r = j.intl.formatToPlainString(j.t.ImizdM, {
    question: t.poll.question.text
  });
  else if (t.type === x.lAJ.POLL_RESULT) {
    var m, g, E;
    let e = null == (E = t.embeds) || null == (g = E[0]) || null == (m = g.fields) ? true : m.find(e => ("name" in e ? e.name : e.rawName) === "poll_question_text"),
      n = null != e ? "value" in e ? e.value : e.rawValue : "";
    r = j.intl.formatToPlainString(j.t["9WrecI"], {
      question: n
    })
  } else if (null != t.components && t.components.length > 0 && t.components[0].type === i.I5.CHECKPOINT_CARD) r = j.intl.string(j.t.HWnMTQ);
  else if ({
      content: r,
      emoji: _
    } = f.Ay.unparseWithMeta(d, e.id, true), 0 !== d.length && e.type === x.rbe.DM && !n.bot && d.startsWith(k))
    for (let e of (r = r.substring(0, 1) + r.substring(4), _)) e.position -= 2;
  return 0 === r.length && (r = Y(t)), {
    icon: n.getAvatarURL(e.guild_id, 128),
    title: o,
    body: r,
    emoji: _
  }
}

function K(e) {
  return e.type === x.rbe.DM || null != e.linkedLobby
}