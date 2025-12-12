/** Chunk was on web.js **/
/** chunk id: 934415, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EO: () => G,
  LY: () => M,
  Nj: () => Chunk90463.Z,
  a5: () => L,
  c4: () => x,
  g7: () => w,
  jZ: () => A,
  mE: () => Z,
  oQ: () => C,
  rX: () => N,
  rY: () => R,
  rt: () => P,
  wR: () => k,
  wl: () => j
}), require("./415506.js"), require("./539854.js"), require("./388685.js");
var Chunk149765 = require("./149765.js"),
  Chunk911969 = require("./911969.js"),
  Chunk90463 = require("./90463.js"),
  Chunk968358 = require("./968358.js"),
  Chunk874748 = require("./874748.js"),
  Chunk590415 = require("./590415.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk938475 = require("./938475.js"),
  Chunk700785 = require("./700785.js"),
  Chunk709054 = require("./709054.js");
require("./51144.js");
var Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");
let {
  GUILD_VOICE: y,
  GUILD_CATEGORY: O,
  GUILD_STAGE_VOICE: v
} = Chunk981631.d4z;

function S(e, t) {
  return e === t || e === O
}

function I(e, t, n) {
  let i = m.Hn;
  return ((0, c.r8)(t) || t === O) && (i = r.IH(i, g.Plq.VIEW_CHANNEL)), S(t, y) && (i = r.IH(i, g.Plq.VIEW_CHANNEL), i = r.IH(i, g.Plq.CONNECT)), {
    id: e,
    type: n,
    allow: m.Hn,
    deny: i
  }
}

function T(e, t, n) {
  let i = m.Hn;
  return ((0, c.r8)(t) || t === O) && (i = r.IH(i, g.Plq.VIEW_CHANNEL)), (S(t, y) || S(t, v)) && (i = r.IH(i, g.Plq.VIEW_CHANNEL), i = r.IH(i, g.Plq.CONNECT)), {
    id: e,
    type: n,
    deny: m.Hn,
    allow: i
  }
}

function C(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    o = [];
  return (n.length > 0 || r) && o.push(I(e, t, i.BN.ROLE)), n.forEach(e => {
    o.push(T(e, t, i.BN.ROLE))
  }), o
}

function A(e, t) {
  return T(e, t, i.BN.MEMBER)
}

function N(e, t) {
  return T(e, t, i.BN.ROLE)
}

function P(e) {
  return [{
    id: e,
    type: i.BN.ROLE,
    deny: g.Plq.SEND_MESSAGES,
    allow: m.Hn
  }]
}

function R(e, t, n) {
  var r, i;
  let o = e.getGuildId(),
    s = n.getGuild(o),
    l = null != (r = null == s ? true : s.maxVideoChannelUsers) ? r : false,
    c = null != (i = null == s ? true : s.maxStageVideoChannelUsers) ? i : false,
    u = _.ZP.countVoiceStatesForChannel(e.id),
    d = _.ZP.getVoiceStatesForChannel(e),
    p = f.Z.can(g.Plq.MOVE_MEMBERS, e) && f.Z.can(g.Plq.CONNECT, e),
    m = false;
  m = e.type === v ? null != o && (t.hasVideo(e.id) || (0, a.a)(d)) && c > 0 && u >= c : null != o && t.hasVideo(e.id) && l > 0 && u >= l + +!!p;
  let h = e.userLimit > 0 && u >= e.userLimit;
  return m || h && !p
}

function w(e, t) {
  return t.isGuildStageVoice() ? g.epw : null == e ? g.eWB : Math.max(e.features.has(g.GuildFeatures.VIP_REGIONS) ? E.HO[g.Eu4.TIER_3].limits.bitrate : g.eWB, E.HO[e.premiumTier].limits.bitrate)
}

function D(e) {
  let {
    channels: t,
    selectedChannelId: n,
    selectedVoiceChannelId: r,
    voiceStates: i
  } = e, o = [];
  return t.forEach(e => {
    if (e.id === r || e.id === n) return;
    let t = i[e.id];
    null != t && (e.isGuildStageVoice() ? t.forEach(e => {
      (0, l.gf)(e.voiceState) === l.xO.ON_STAGE && o.push(e)
    }) : t.forEach(e => o.push(e)))
  }), o
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
    case g.d4z.DM:
      return b.intl.string(b.t.jN2DfZ);
    case g.d4z.GROUP_DM:
      return b.intl.string(b.t["e5y+gm"]);
    case g.d4z.GUILD_TEXT:
      return b.intl.string(b.t.Pnajj0);
    case g.d4z.GUILD_FORUM:
      return b.intl.string(b.t.GbryDd);
    case g.d4z.GUILD_MEDIA:
      return b.intl.string(b.t.seKITE);
    case g.d4z.GUILD_VOICE:
      return b.intl.string(b.t.BVZqJl);
    case g.d4z.GUILD_STAGE_VOICE:
      return b.intl.string(b.t.EErMzA);
    case g.d4z.GUILD_ANNOUNCEMENT:
      return b.intl.string(b.t.l1dkSD);
    case g.d4z.GUILD_STORE:
      return b.intl.string(b.t["P1/Erq"]);
    case g.d4z.GUILD_CATEGORY:
      return b.intl.string(b.t.vHCZwr);
    default:
      return null
  }
}

function j(e) {
  if (null == e) return "text";
  let t = e.isMediaChannel();
  if (e.type === g.d4z.GUILD_VOICE) return f.Z.can(g.Plq.CONNECT, e) ? "voice" : "voice-locked";
  if (e.type === g.d4z.GUILD_STAGE_VOICE) return f.Z.can(g.Plq.CONNECT, e) ? "stage" : "stage-locked";
  if (c.Ec.has(e.type)) return e.isForumPost() ? "post" : "thread";
  if (e.type === g.d4z.GUILD_FORUM) return t ? "media" : "forum";
  if (e.type === g.d4z.GUILD_MEDIA) return "media";
  else if (c.sR.has(e.type)) return "text"
}

function M(e) {
  let t, n = u.Z.getChannel(p.Z.getLastSelectedChannelId());
  if (null != n && n.getGuildId() === e && n.type === g.d4z.GUILD_TEXT) t = n.id;
  else {
    let n = d.ZP.getDefaultChannel(e);
    t = null != n ? n.id : null
  }
  return g.Z5c.CHANNEL(e, t)
}

function k(e, t, n, r) {
  let i = null == r ? "" : "?summaryId=".concat(r);
  return "".concat(location.protocol, "//").concat(location.host).concat(g.Z5c.CHANNEL(e, t, n)).concat(i)
}

function U(e, t, n, r) {
  return null == e || null == t || null == n ? k(e, t, r) : "".concat(location.protocol, "//").concat(location.host).concat(g.Z5c.CHANNEL_THREAD_VIEW(e, t, n, r))
}

function G(e, t, n, r) {
  let i, o = e.getGuildId(),
    a = (0, s.BC)(o, t);
  return null != t && a ? U(o, t.id, e.id, h.default.castChannelIdAsMessageId(e.id)) : null != r ? r : k(o, e.id, n)
}

function Z(e) {
  if (null == e) return null;
  switch (e.type) {
    case g.d4z.GUILD_ANNOUNCEMENT:
    case g.d4z.GUILD_TEXT:
    case g.d4z.GUILD_FORUM:
    case g.d4z.GUILD_MEDIA:
      return g.ZY5.GUILD_CHANNEL;
    case g.d4z.GROUP_DM:
    case g.d4z.DM:
      return g.ZY5.DM_CHANNEL;
    default:
      return null
  }
}