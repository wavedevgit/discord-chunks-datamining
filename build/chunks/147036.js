/** Chunk was on web.js **/
/** chunk id: 147036, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CG: () => T,
  DJ: () => V,
  IP: () => R,
  Jg: () => L,
  Jz: () => P,
  Pd: () => w,
  QG: () => j,
  af: () => G,
  an: () => a.A,
  fK: () => x,
  n: () => k,
  n3: () => C,
  vJ: () => M,
  we: () => N
}), require("./65821.js"), require("./321073.js"), require("./896048.js");
var Chunk136722 = require("./136722.js"),
  Chunk155718 = require("./155718.js"),
  Chunk842937 = require("./842937.js"),
  Chunk669715 = require("./669715.js"),
  Chunk461715 = require("./461715.js"),
  Chunk105530 = require("./105530.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk607567 = require("./607567.js"),
  Chunk488926 = require("./488926.js"),
  Chunk661191 = require("./661191.js");
require("./427262.js");
var Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx");
let {
  GUILD_VOICE: y,
  GUILD_CATEGORY: O,
  GUILD_STAGE_VOICE: A
} = Chunk652215.rbe;

function v(e, t) {
  return e === t || e === O
}

function S(e, t, n) {
  let i = h.x3;
  return ((0, c.tr)(t) || t === O) && (i = r.WQ(i, g.xBc.VIEW_CHANNEL)), v(t, y) && (i = r.WQ(i, g.xBc.VIEW_CHANNEL), i = r.WQ(i, g.xBc.CONNECT)), {
    id: e,
    type: n,
    allow: h.x3,
    deny: i
  }
}

function I(e, t, n) {
  let i = h.x3;
  return ((0, c.tr)(t) || t === O) && (i = r.WQ(i, g.xBc.VIEW_CHANNEL)), (v(t, y) || v(t, A)) && (i = r.WQ(i, g.xBc.VIEW_CHANNEL), i = r.WQ(i, g.xBc.CONNECT)), {
    id: e,
    type: n,
    deny: h.x3,
    allow: i
  }
}

function T(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    a = [];
  return (n.length > 0 || r) && a.push(S(e, t, i.r2.ROLE)), n.forEach(e => {
    a.push(I(e, t, i.r2.ROLE))
  }), a
}

function C(e, t) {
  return I(e, t, i.r2.MEMBER)
}

function N(e, t) {
  return I(e, t, i.r2.ROLE)
}

function R(e) {
  return [{
    id: e,
    type: i.r2.ROLE,
    deny: g.xBc.SEND_MESSAGES,
    allow: h.x3
  }]
}

function w(e, t, n) {
  var r, i;
  let a = e.getGuildId(),
    o = n.getGuild(a),
    l = null != (r = null == o ? true : o.maxVideoChannelUsers) ? r : false,
    c = null != (i = null == o ? true : o.maxStageVideoChannelUsers) ? i : false,
    u = _.Ay.countVoiceStatesForChannel(e.id),
    d = _.Ay.getVoiceStatesForChannel(e),
    p = f.A.can(g.xBc.MOVE_MEMBERS, e) && f.A.can(g.xBc.CONNECT, e),
    h = false;
  h = e.type === A ? null != a && (t.hasVideo(e.id) || (0, s.t)(d)) && c > 0 && u >= c : null != a && t.hasVideo(e.id) && l > 0 && u >= l + +!!p;
  let m = e.userLimit > 0 && u >= e.userLimit;
  return h || m && !p
}

function P(e, t) {
  return t.isGuildStageVoice() ? g.gp3 : null == e ? g.DqD : Math.max(e.features.has(g.GuildFeatures.VIP_REGIONS) ? E.TG[g.TVA.TIER_3].limits.bitrate : g.DqD, E.TG[e.premiumTier].limits.bitrate)
}

function D(e) {
  let {
    channels: t,
    selectedChannelId: n,
    selectedVoiceChannelId: r,
    voiceStates: i
  } = e, a = [];
  return t.forEach(e => {
    if (e.id === r || e.id === n) return;
    let t = i[e.id];
    null != t && (e.isGuildStageVoice() ? t.forEach(e => {
      (0, l.eY)(e.voiceState) === l.zF.ON_STAGE && a.push(e)
    }) : t.forEach(e => a.push(e)))
  }), a
}

function x(e) {
  let {
    channels: t,
    selectedChannelId: n,
    selectedVoiceChannelId: r,
    voiceStates: i
  } = e;
  return D({
    channels: t,
    selectedChannelId: n,
    selectedVoiceChannelId: r,
    voiceStates: i
  }).map(e => e.user)
}

function L(e) {
  let {
    type: t
  } = e;
  switch (t) {
    case g.rbe.DM:
      return b.intl.string(b.t.jN2DfZ);
    case g.rbe.GROUP_DM:
      return b.intl.string(b.t["e5y+gm"]);
    case g.rbe.GUILD_TEXT:
      return b.intl.string(b.t.Pnajj0);
    case g.rbe.GUILD_FORUM:
      return b.intl.string(b.t.GbryDd);
    case g.rbe.GUILD_MEDIA:
      return b.intl.string(b.t.seKITE);
    case g.rbe.GUILD_VOICE:
      return b.intl.string(b.t.BVZqJl);
    case g.rbe.GUILD_STAGE_VOICE:
      return b.intl.string(b.t.EErMzA);
    case g.rbe.GUILD_ANNOUNCEMENT:
      return b.intl.string(b.t.l1dkSD);
    case g.rbe.GUILD_STORE:
      return b.intl.string(b.t["P1/Erq"]);
    case g.rbe.GUILD_CATEGORY:
      return b.intl.string(b.t.vHCZwr);
    default:
      return null
  }
}

function j(e) {
  if (null == e) return "text";
  let t = e.isMediaChannel();
  if (e.type === g.rbe.GUILD_VOICE) return f.A.can(g.xBc.CONNECT, e) ? "voice" : "voice-locked";
  if (e.type === g.rbe.GUILD_STAGE_VOICE) return f.A.can(g.xBc.CONNECT, e) ? "stage" : "stage-locked";
  if (c.Le.has(e.type)) return e.isForumPost() ? "post" : "thread";
  if (e.type === g.rbe.GUILD_FORUM) return t ? "media" : "forum";
  if (e.type === g.rbe.GUILD_MEDIA) return "media";
  else if (c.k3.has(e.type)) return "text"
}

function M(e) {
  let t, n = u.A.getChannel(p.A.getLastSelectedChannelId());
  if (null != n && n.getGuildId() === e && n.type === g.rbe.GUILD_TEXT) t = n.id;
  else {
    let n = d.Ay.getDefaultChannel(e);
    t = null != n ? n.id : null
  }
  return g.BVt.CHANNEL(e, t)
}

function k(e, t, n, r) {
  let i = null == r ? "" : "?summaryId=".concat(r);
  return "".concat(location.protocol, "//").concat(location.host).concat(g.BVt.CHANNEL(e, t, n)).concat(i)
}

function U(e, t, n, r) {
  return null == e || null == t || null == n ? k(e, t, r) : "".concat(location.protocol, "//").concat(location.host).concat(g.BVt.CHANNEL_THREAD_VIEW(e, t, n, r))
}

function G(e, t, n, r) {
  let i, a = e.getGuildId(),
    s = (0, o.$m)(a, t);
  return null != t && s ? U(a, t.id, e.id, m.default.castChannelIdAsMessageId(e.id)) : null != r ? r : k(a, e.id, n)
}

function V(e) {
  if (null == e) return null;
  switch (e.type) {
    case g.rbe.GUILD_ANNOUNCEMENT:
    case g.rbe.GUILD_TEXT:
    case g.rbe.GUILD_FORUM:
    case g.rbe.GUILD_MEDIA:
      return g.liQ.GUILD_CHANNEL;
    case g.rbe.GROUP_DM:
    case g.rbe.DM:
      return g.liQ.DM_CHANNEL;
    default:
      return null
  }
}