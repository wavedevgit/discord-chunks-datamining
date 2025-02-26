/** Chunk was on web.js **/
"use strict";
n.d(t, {
  EO: () => G,
  LY: () => k,
  Nj: () => o.Z,
  a5: () => x,
  c4: () => L,
  g7: () => D,
  jZ: () => A,
  mE: () => B,
  oQ: () => N,
  rX: () => C,
  rY: () => P,
  rt: () => R,
  wR: () => j,
  wl: () => M
}), n(411104), n(653041), n(47120);
var r = n(149765),
  i = n(911969),
  o = n(90463),
  a = n(968358),
  s = n(874748),
  l = n(590415),
  c = n(131704),
  u = n(592125),
  d = n(984933),
  f = n(496675),
  _ = n(944486),
  p = n(938475),
  h = n(700785),
  g = n(709054);
n(51144);
var m = n(981631),
  E = n(474936),
  v = n(388032);
let {
  GUILD_VOICE: b,
  GUILD_CATEGORY: y,
  GUILD_STAGE_VOICE: O
} = m.d4z;

function S(e, t) {
  return e === t || e === y
}

function I(e, t, n) {
  let i = h.Hn;
  return ((0, c.r8)(t) || t === y) && (i = r.IH(i, m.Plq.VIEW_CHANNEL)), S(t, b) && (i = r.IH(i, m.Plq.VIEW_CHANNEL), i = r.IH(i, m.Plq.CONNECT)), {
    id: e,
    type: n,
    allow: h.Hn,
    deny: i
  }
}

function T(e, t, n) {
  let i = h.Hn;
  return ((0, c.r8)(t) || t === y) && (i = r.IH(i, m.Plq.VIEW_CHANNEL)), (S(t, b) || S(t, O)) && (i = r.IH(i, m.Plq.VIEW_CHANNEL), i = r.IH(i, m.Plq.CONNECT)), {
    id: e,
    type: n,
    deny: h.Hn,
    allow: i
  }
}

function N(e, t, n) {
  let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    o = [];
  return (n.length > 0 || r) && o.push(I(e, t, i.BN.ROLE)), n.forEach(e => {
    o.push(T(e, t, i.BN.ROLE))
  }), o
}

function A(e, t) {
  return T(e, t, i.BN.MEMBER)
}

function C(e, t) {
  return T(e, t, i.BN.ROLE)
}

function R(e) {
  return [{
    id: e,
    type: i.BN.ROLE,
    deny: m.Plq.SEND_MESSAGES,
    allow: h.Hn
  }]
}

function P(e, t, n) {
  var r, i;
  let o = e.getGuildId(),
    s = n.getGuild(o),
    l = null !== (r = null == s ? void 0 : s.maxVideoChannelUsers) && void 0 !== r ? r : -1,
    c = null !== (i = null == s ? void 0 : s.maxStageVideoChannelUsers) && void 0 !== i ? i : -1,
    u = p.ZP.countVoiceStatesForChannel(e.id),
    d = p.ZP.getVoiceStatesForChannel(e),
    _ = f.Z.can(m.Plq.MOVE_MEMBERS, e) && f.Z.can(m.Plq.CONNECT, e),
    h = !1;
  h = e.type === O ? null != o && (t.hasVideo(e.id) || (0, a.a)(d)) && c > 0 && u >= c : null != o && t.hasVideo(e.id) && l > 0 && u >= l + +!!_;
  let g = e.userLimit > 0 && u >= e.userLimit;
  return h || g && !_
}

function D(e, t) {
  return t.isGuildStageVoice() ? m.epw : null == e ? m.eWB : Math.max(e.hasFeature(m.oNc.VIP_REGIONS) ? E.HO[m.Eu4.TIER_3].limits.bitrate : m.eWB, E.HO[e.premiumTier].limits.bitrate)
}

function w(e) {
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

function L(e) {
  let {
    channels: t,
    selectedChannelId: n,
    selectedVoiceChannelId: r,
    voiceStates: i
  } = e;
  return w({
    channels: t,
    selectedChannelId: n,
    selectedVoiceChannelId: r,
    voiceStates: i
  }).map(e => e.user)
}

function x(e) {
  let {
    type: t
  } = e;
  switch (t) {
    case m.d4z.DM:
      return v.NW.string(v.t.jN2DfX);
    case m.d4z.GROUP_DM:
      return v.NW.string(v.t["e5y+go"]);
    case m.d4z.GUILD_TEXT:
      return v.NW.string(v.t.Pnajj4);
    case m.d4z.GUILD_FORUM:
      return v.NW.string(v.t.GbryDQ);
    case m.d4z.GUILD_MEDIA:
      return v.NW.string(v.t.seKITE);
    case m.d4z.GUILD_VOICE:
      return v.NW.string(v.t.BVZqJi);
    case m.d4z.GUILD_STAGE_VOICE:
      return v.NW.string(v.t.EErMzM);
    case m.d4z.GUILD_ANNOUNCEMENT:
      return v.NW.string(v.t.l1dkSE);
    case m.d4z.GUILD_STORE:
      return v.NW.string(v.t["P1/Erq"]);
    case m.d4z.GUILD_CATEGORY:
      return v.NW.string(v.t.vHCZws);
    default:
      return null
  }
}

function M(e) {
  if (null == e) return "text";
  let t = e.isMediaChannel();
  if (e.type === m.d4z.GUILD_VOICE) return f.Z.can(m.Plq.CONNECT, e) ? "voice" : "voice-locked";
  if (e.type === m.d4z.GUILD_STAGE_VOICE) return f.Z.can(m.Plq.CONNECT, e) ? "stage" : "stage-locked";
  if (c.Ec.has(e.type)) return e.isForumPost() ? "post" : "thread";
  if (e.type === m.d4z.GUILD_FORUM) return t ? "media" : "forum";
  if (e.type === m.d4z.GUILD_MEDIA) return "media";
  else if (c.sR.has(e.type)) return "text"
}

function k(e) {
  let t;
  let n = u.Z.getChannel(_.Z.getLastSelectedChannelId());
  if (null != n && n.getGuildId() === e && n.type === m.d4z.GUILD_TEXT) t = n.id;
  else {
    let n = d.ZP.getDefaultChannel(e);
    t = null != n ? n.id : null
  }
  return m.Z5c.CHANNEL(e, t)
}

function j(e, t, n, r) {
  let i = null == r ? "" : "?summaryId=".concat(r);
  return "".concat(location.protocol, "//").concat(location.host).concat(m.Z5c.CHANNEL(e, t, n)).concat(i)
}

function U(e, t, n, r) {
  return null == e || null == t || null == n ? j(e, t, r) : "".concat(location.protocol, "//").concat(location.host).concat(m.Z5c.CHANNEL_THREAD_VIEW(e, t, n, r))
}

function G(e, t, n, r) {
  let i;
  let o = e.getGuildId(),
    a = (0, s.BC)(o, t);
  return null != t && a ? U(o, t.id, e.id, g.default.castChannelIdAsMessageId(e.id)) : null != r ? r : j(o, e.id, n)
}

function B(e) {
  if (null == e) return null;
  switch (e.type) {
    case m.d4z.GUILD_ANNOUNCEMENT:
    case m.d4z.GUILD_TEXT:
    case m.d4z.GUILD_FORUM:
    case m.d4z.GUILD_MEDIA:
      return m.ZY5.GUILD_CHANNEL;
    case m.d4z.GROUP_DM:
    case m.d4z.DM:
      return m.ZY5.DM_CHANNEL;
    default:
      return null
  }
}