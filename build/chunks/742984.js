/** Chunk was on 31748 **/
/** chunk id: 742984, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  TB: () => H,
  Wv: () => M,
  kY: () => V,
  lx: () => U,
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

function M(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  if (t.hasFlag(D.nhx.SPAMMER) || n.isManaged()) returnfalse;
  let l = n.getGuildId();
  return !(null != l && u.A.isLurking(l) || !r.ignoreSameUser && t.id === e.id || x.A.isBlockedOrIgnored(t.id) || !r.ignoreStatus && N.A.getStatus() === D.clD.DND || y.NO.getSetting() || !r.ignoreNoMessagesSetting && I.Ay.allowNoMessages(n))
}

function U(e, t) {
  var n, l;
  let a = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    o = arguments.length > 3 && true !== arguments[3] && arguments[3];
  if (null != e.flags && (0, r.Lt)(e.flags, D.pr7.SUPPRESS_NOTIFICATIONS)) returnfalse;
  let s = E.A.getChannel(t);
  e.type === D.lAJ.THREAD_STARTER_MESSAGE && (s = E.A.getChannel(null == s ? true : s.parent_id));
  let c = j.default.getCurrentUser(),
    u = j.default.getUser(null == (n = e.author) ? true : n.id);
  if (null == s || null == c || null == u || s.type === D.rbe.GROUP_DM && e.type === D.lAJ.RECIPIENT_REMOVE || R.A.areSlayerNotificationsSuppressed() && ((l = s).type === D.rbe.DM || null != l.linkedLobby) || !M(c, u, s, {
      ignoreStatus: o,
      ignoreSameUser: D.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type)
    }) || d.A.isMessageRequest(t)) returnfalse;
  if (!a) {
    let e = S.A.getChannelId(C.A.getGuildId());
    if (e === s.id || b.Ay.getCurrentSidebarChannelId(e) === s.id) returnfalse
  }
  if (x.A.isBlockedOrIgnoredForMessage(e) || true !== e.activity_instance && null != e.interaction && e.interaction.user.id === c.id) returnfalse;
  if (null != e.application_id) {
    let n = i.Ay.getCurrentEmbeddedActivity();
    if ((null == n ? true : n.applicationId) === e.application_id && n.location.channel_id === t) returnfalse
  }
  if (A.Le.has(s.type)) {
    if (_.A.isMuted(s.id)) returnfalse;
    let t = (0, h.l)(s);
    return t !== k.CP.NO_MESSAGES && (t === k.CP.ALL_MESSAGES || (0, g.bG)({
      rawMessage: e,
      userId: c.id,
      suppressEveryone: false,
      suppressRoles: false
    }))
  } {
    let t = !A.OU.has(s.type) || O.A.getChannelId() === s.id;
    if (I.Ay.allowAllMessages(s) && t) returntrue;
    let n = I.Ay.isSuppressEveryoneEnabled(s.getGuildId()),
      r = I.Ay.isSuppressRolesEnabled(s.getGuildId());
    return (0, g.bG)({
      rawMessage: e,
      userId: c.id,
      suppressEveryone: n,
      suppressRoles: r
    })
  }
}

function V(e, t) {
  var n;
  if (S.A.getChannelId(C.A.getGuildId()) !== t) returnfalse;
  let r = E.A.getChannel(t);
  e.type === D.lAJ.THREAD_STARTER_MESSAGE && (r = E.A.getChannel(null == r ? true : r.parent_id));
  let l = j.default.getCurrentUser(),
    i = j.default.getUser(null == (n = e.author) ? true : n.id);
  return !(null == r || null == l || null == i || r.isManaged() || i.hasFlag(D.nhx.SPAMMER) || x.A.isBlockedOrIgnoredForMessage(e) || i.id === l.id || N.A.getStatus() === D.clD.DND || y.NO.getSetting() || I.Ay.allowNoMessages(r))
}

function F(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    l = j.default.getCurrentUser(),
    i = j.default.getUser(e.ownerId);
  return !(null == t || null == l || null == i || !M(l, i, t, {
    ignoreStatus: r,
    ignoreNoMessagesSetting: true
  }) || I.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)) && (!!n || S.A.getChannelId(C.A.getGuildId()) !== t.id) && I.Ay.getNewForumThreadsCreated(t)
}
let G = (e, t, n) => "".concat((0, a.az)(e, true), " (").concat((0, a.az)((0, o.m1)(t, j.default, x.A, true), true)).concat(null != n ? ", ".concat((0, a.az)((0, o.m1)(n, j.default, x.A), true)) : "", ")");

function B(e, t, n, r) {
  switch (e.type) {
    case D.rbe.GUILD_ANNOUNCEMENT:
    case D.rbe.GUILD_TEXT:
      return t;
    case D.rbe.GROUP_DM:
      return n;
    case D.rbe.DM:
    default:
      return r
  }
}

function H(e, t, n) {
  let i, a = T.Ay.getName(e.getGuildId(), e.id, n),
    u = a;
  switch (e.type) {
    case D.rbe.GUILD_ANNOUNCEMENT:
    case D.rbe.GUILD_TEXT:
    case D.rbe.GUILD_VOICE:
    case D.rbe.ANNOUNCEMENT_THREAD:
    case D.rbe.PUBLIC_THREAD:
    case D.rbe.PRIVATE_THREAD:
      let d = E.A.getChannel(e.parent_id);
      t.type === D.lAJ.THREAD_STARTER_MESSAGE && null != d ? u = G(u, d, E.A.getChannel(d.parent_id)) : (0, m.A)(t) ? null != v.A.getGuild(e.getGuildId()) && (u = G(u, e, d)) : u = G(u, e, d);
      break;
    case D.rbe.GROUP_DM:
      e.isManaged() && n.bot && u === (0, o.m1)(e, j.default, x.A) || (u = G(u, e))
  }
  let g = t.content;
  if ((0, m.A)(t) && null == (g = w.A.stringify(t, e))) throw new s.A("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", {
    message: t
  }), Error("failed to stringify system message");
  let _ = "sticker_items" in t ? t.sticker_items : "stickerItems" in t ? t.stickerItems : t.stickers,
    h = [];
  if ("message_reference" in t ? (0, c.m)(t) : (0, c.A)(t)) i = L.intl.string(L.t["9ddYKt"]);
  else if (null != t.activity && null != t.application) i = t.activity.type === D.xL.JOIN ? L.intl.formatToPlainString(B(e, L.t.E8CgCh, L.t.c6KHWJ, L.t.Fy7rJN), {
    user: a,
    game: t.application.name
  }) : t.activity.type === D.xL.JOIN_REQUEST ? L.intl.formatToPlainString(B(e, L.t["/TD0la"], L.t["/TD0la"], L.t["/TD0la"]), {
    user: a,
    game: t.application.name
  }) : "";
  else if (null != t.activity && t.activity.type === D.xL.LISTEN) {
    let t = B(e, L.t.SaDdmN, L.t.qsODhp, L.t.WeiMTW);
    i = L.intl.formatToPlainString(t, {
      user: a
    })
  } else if (null != _ && _.length > 0) i = L.intl.formatToPlainString(L.t.zY4v1B, {
    stickerName: _[0].name
  });
  else if (t.type === D.lAJ.PREMIUM_REFERRAL) i = L.intl.formatToPlainString(L.t.lieTqU, {
    username: P.Ay.getName(n)
  });
  else if (null != t.poll) i = L.intl.formatToPlainString(L.t.ImizdM, {
    question: t.poll.question.text
  });
  else if (t.type === D.lAJ.POLL_RESULT) {
    var y, A, b;
    let e = null == (b = t.embeds) || null == (A = b[0]) || null == (y = A.fields) ? true : y.find(e => ("name" in e ? e.name : e.rawName) === "poll_question_text"),
      n = null != e ? "value" in e ? e.value : e.rawValue : "";
    i = L.intl.formatToPlainString(L.t["9WrecI"], {
      question: n
    })
  } else if (null != t.components && t.components.length > 0 && t.components[0].type === l.I5.CHECKPOINT_CARD) i = L.intl.string(L.t.HWnMTQ);
  else if ({
      content: i,
      emoji: h
    } = f.Ay.unparseWithMeta(g, e.id, true), 0 !== g.length && e.type === D.rbe.DM && !n.bot && g.startsWith("> -# *"))
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
    if ((0, r.Lt)(null != (t = e.flags) ? t : 0, D.pr7.IS_VOICE_MESSAGE)) return L.intl.string(L.t.slFYgi);
    if (true !== e.attachments && e.attachments.length > 0) {
      let t = (0, p.A)(e.attachments[0]);
      return L.intl.formatToPlainString(L.t["51OkwL"], {
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