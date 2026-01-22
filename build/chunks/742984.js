/** Chunk was on 31748 **/
/** chunk id: 742984, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  TB: () => B,
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
  let l = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  if (t.hasFlag(D.nhx.SPAMMER) || n.isManaged()) returnfalse;
  let r = n.getGuildId();
  return !(null != r && u.A.isLurking(r) || !l.ignoreSameUser && t.id === e.id || x.A.isBlockedOrIgnored(t.id) || !l.ignoreStatus && C.A.getStatus() === D.clD.DND || A.NO.getSetting() || !l.ignoreNoMessagesSetting && j.Ay.allowNoMessages(n))
}

function U(e, t) {
  var n, r;
  let a = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    s = arguments.length > 3 && true !== arguments[3] && arguments[3];
  if (null != e.flags && (0, l.Lt)(e.flags, D.pr7.SUPPRESS_NOTIFICATIONS)) returnfalse;
  let o = E.A.getChannel(t);
  e.type === D.lAJ.THREAD_STARTER_MESSAGE && (o = E.A.getChannel(null == o ? true : o.parent_id));
  let c = T.default.getCurrentUser(),
    u = T.default.getUser(null == (n = e.author) ? true : n.id);
  if (null == o || null == c || null == u || o.type === D.rbe.GROUP_DM && e.type === D.lAJ.RECIPIENT_REMOVE || P.A.areSlayerNotificationsSuppressed() && ((r = o).type === D.rbe.DM || null != r.linkedLobby) || !M(c, u, o, {
      ignoreStatus: s,
      ignoreSameUser: D.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type)
    }) || d.A.isMessageRequest(t)) returnfalse;
  if (!a) {
    let e = S.A.getChannelId(N.A.getGuildId());
    if (e === o.id || _.Ay.getCurrentSidebarChannelId(e) === o.id) returnfalse
  }
  if (x.A.isBlockedOrIgnoredForMessage(e) || true !== e.activity_instance && null != e.interaction && e.interaction.user.id === c.id) returnfalse;
  if (null != e.application_id) {
    let n = i.Ay.getCurrentEmbeddedActivity();
    if ((null == n ? true : n.applicationId) === e.application_id && n.location.channel_id === t) returnfalse
  }
  if (y.Le.has(o.type)) {
    if (m.A.isMuted(o.id)) returnfalse;
    let t = (0, h.l)(o);
    return t !== k.CP.NO_MESSAGES && (t === k.CP.ALL_MESSAGES || (0, b.bG)({
      rawMessage: e,
      userId: c.id,
      suppressEveryone: false,
      suppressRoles: false
    }))
  } {
    let t = !y.OU.has(o.type) || O.A.getChannelId() === o.id;
    if (j.Ay.allowAllMessages(o) && t) returntrue;
    let n = j.Ay.isSuppressEveryoneEnabled(o.getGuildId()),
      l = j.Ay.isSuppressRolesEnabled(o.getGuildId());
    return (0, b.bG)({
      rawMessage: e,
      userId: c.id,
      suppressEveryone: n,
      suppressRoles: l
    })
  }
}

function V(e, t) {
  var n;
  if (S.A.getChannelId(N.A.getGuildId()) !== t) returnfalse;
  let l = E.A.getChannel(t);
  e.type === D.lAJ.THREAD_STARTER_MESSAGE && (l = E.A.getChannel(null == l ? true : l.parent_id));
  let r = T.default.getCurrentUser(),
    i = T.default.getUser(null == (n = e.author) ? true : n.id);
  return !(null == l || null == r || null == i || l.isManaged() || i.hasFlag(D.nhx.SPAMMER) || x.A.isBlockedOrIgnoredForMessage(e) || i.id === r.id || C.A.getStatus() === D.clD.DND || A.NO.getSetting() || j.Ay.allowNoMessages(l))
}

function F(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    l = arguments.length > 3 && true !== arguments[3] && arguments[3],
    r = T.default.getCurrentUser(),
    i = T.default.getUser(e.ownerId);
  return !(null == t || null == r || null == i || !M(r, i, t, {
    ignoreStatus: l,
    ignoreNoMessagesSetting: true
  }) || j.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)) && (!!n || S.A.getChannelId(N.A.getGuildId()) !== t.id) && j.Ay.getNewForumThreadsCreated(t)
}
let G = (e, t, n) => "".concat((0, a.az)(e, true), " (").concat((0, a.az)((0, s.m1)(t, T.default, x.A, true), true)).concat(null != n ? ", ".concat((0, a.az)((0, s.m1)(n, T.default, x.A), true)) : "", ")");

function H(e, t, n, l) {
  switch (e.type) {
    case D.rbe.GUILD_ANNOUNCEMENT:
    case D.rbe.GUILD_TEXT:
      return t;
    case D.rbe.GROUP_DM:
      return n;
    case D.rbe.DM:
    default:
      return l
  }
}

function B(e, t, n) {
  let i, a = I.Ay.getName(e.getGuildId(), e.id, n),
    u = a;
  switch (e.type) {
    case D.rbe.GUILD_ANNOUNCEMENT:
    case D.rbe.GUILD_TEXT:
    case D.rbe.GUILD_VOICE:
    case D.rbe.ANNOUNCEMENT_THREAD:
    case D.rbe.PUBLIC_THREAD:
    case D.rbe.PRIVATE_THREAD:
      let d = E.A.getChannel(e.parent_id);
      t.type === D.lAJ.THREAD_STARTER_MESSAGE && null != d ? u = G(u, d, E.A.getChannel(d.parent_id)) : (0, g.A)(t) ? null != v.A.getGuild(e.getGuildId()) && (u = G(u, e, d)) : u = G(u, e, d);
      break;
    case D.rbe.GROUP_DM:
      e.isManaged() && n.bot && u === (0, s.m1)(e, T.default, x.A) || (u = G(u, e))
  }
  let b = t.content;
  if ((0, g.A)(t) && null == (b = w.A.stringify(t, e))) throw new o.A("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", {
    message: t
  }), Error("failed to stringify system message");
  let m = "sticker_items" in t ? t.sticker_items : "stickerItems" in t ? t.stickerItems : t.stickers,
    h = [];
  if ("message_reference" in t ? (0, c.m)(t) : (0, c.A)(t)) i = L.intl.string(L.t["9ddYKt"]);
  else if (null != t.activity && null != t.application) i = t.activity.type === D.xL.JOIN ? L.intl.formatToPlainString(H(e, L.t.E8CgCh, L.t.c6KHWJ, L.t.Fy7rJN), {
    user: a,
    game: t.application.name
  }) : t.activity.type === D.xL.JOIN_REQUEST ? L.intl.formatToPlainString(H(e, L.t["/TD0la"], L.t["/TD0la"], L.t["/TD0la"]), {
    user: a,
    game: t.application.name
  }) : "";
  else if (null != t.activity && t.activity.type === D.xL.LISTEN) {
    let t = H(e, L.t.SaDdmN, L.t.qsODhp, L.t.WeiMTW);
    i = L.intl.formatToPlainString(t, {
      user: a
    })
  } else if (null != m && m.length > 0) i = L.intl.formatToPlainString(L.t.zY4v1B, {
    stickerName: m[0].name
  });
  else if (t.type === D.lAJ.PREMIUM_REFERRAL) i = L.intl.formatToPlainString(L.t.lieTqU, {
    username: R.Ay.getName(n)
  });
  else if (null != t.poll) i = L.intl.formatToPlainString(L.t.ImizdM, {
    question: t.poll.question.text
  });
  else if (t.type === D.lAJ.POLL_RESULT) {
    var A, y, _;
    let e = null == (_ = t.embeds) || null == (y = _[0]) || null == (A = y.fields) ? true : A.find(e => ("name" in e ? e.name : e.rawName) === "poll_question_text"),
      n = null != e ? "value" in e ? e.value : e.rawValue : "";
    i = L.intl.formatToPlainString(L.t["9WrecI"], {
      question: n
    })
  } else if (null != t.components && t.components.length > 0 && t.components[0].type === r.I5.CHECKPOINT_CARD) i = L.intl.string(L.t.HWnMTQ);
  else if ({
      content: i,
      emoji: h
    } = f.Ay.unparseWithMeta(b, e.id, true), 0 !== b.length && e.type === D.rbe.DM && !n.bot && b.startsWith("> -# *"))
    for (let e of (i = i.substring(0, 1) + i.substring(4), h)) e.position -= 2;
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
    if ((0, l.Lt)(null != (t = e.flags) ? t : 0, D.pr7.IS_VOICE_MESSAGE)) return L.intl.string(L.t.slFYgi);
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