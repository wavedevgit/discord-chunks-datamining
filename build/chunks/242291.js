/** Chunk was on web.js **/
"use strict";
n.d(t, {
  C0: () => A,
  GN: () => C,
  M2: () => D,
  Nq: () => N,
  SZ: () => x,
  aC: () => L,
  pI: () => I,
  sR: () => w,
  tt: () => j
}), n(653041);
var r = n(399606),
  i = n(704215),
  o = n(736045),
  a = n(695346),
  s = n(675478),
  l = n(581883),
  c = n(294629),
  u = n(401062),
  d = n(131704),
  f = n(496675),
  p = n(594174),
  _ = n(626135),
  h = n(74538),
  m = n(51144),
  g = n(208049),
  E = n(763296),
  v = n(697426),
  b = n(641015),
  y = n(893663),
  O = n(710111),
  S = n(981631);

function I() {
  var e;
  let t = a.kU.getSetting();
  return null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100
}

function T(e, t) {
  return (null == t ? void 0 : t.guild_id) == null || f.Z.can(S.Plq.USE_EXTERNAL_SOUNDS, t) || e.guildId === O.X8 || e.guildId === (null == t ? void 0 : t.guild_id)
}

function N(e, t, n) {
  let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
  return (h.ZP.canUseSoundboardEverywhere(e) || t.guildId === (null == n ? void 0 : n.guild_id) || t.guildId === O.X8) && T(t, n) && (!r || t.available)
}

function A(e) {
  let {
    mute: t,
    suppress: n
  } = (0, c.b)({
    channel: e
  });
  return !t && !n
}

function C(e, t, n) {
  (0, g.XE)(t, e, v.YQ.SOUNDBOARD), (0, u.kq)(t, e, __OVERLAY__, n)
}

function R(e, t) {
  (0, g.XE)(t, e, v.YQ.JOINED_VOICE_CHANNEL), (0, u.vy)(t, e, __OVERLAY__)
}

function P() {
  var e, t;
  return Object.values(null !== (t = null === (e = l.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : {}).some(e => null != e.joinSound)
}
async function D(e) {
  let t = p.default.getCurrentUser(),
    n = (0, o.Z)(),
    r = (0, y.k9)(e);
  if (null == n || d.Lr.has(n.type) || null == r || !h.ZP.canUseCustomCallSounds(t) || !(0, b.D)()) return;
  await (0, g.w)();
  let i = r.guildId === O.hY ? O.X8 : r.guildId,
    a = E.Z.getSound(i, r.soundId);
  if (null != a) {
    if (!T(a, n) || !N(t, a, n, !0) || !A(n)) return null;
    R(a, n.id)
  }
}

function w(e) {
  let {
    isSoundboardButtonDisabled: t = !1
  } = e, n = (0, r.e7)([p.default], () => p.default.getCurrentUser()), o = [];
  if (!t && !P()) {
    o.push(i.z.CUSTOM_CALL_SOUNDS_SPARKLES);
    let e = (0, m.Fc)(n);
    (h.ZP.canUseCustomCallSounds(n) || e) && o.push(i.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL)
  }
  return o
}

function L(e, t) {
  (0, s.PS)(e, n => {
    n.joinSound = void 0, M({
      guildId: e,
      changeType: v.MW.REMOVED,
      soundType: v.jy.ENTRY,
      location: t
    })
  }, s.fy.INFREQUENT_USER_ACTION)
}

function x(e, t, n) {
  (0, s.PS)(e, r => {
    let i = t.guildId === O.X8,
      o = i ? v.H$.DEFAULT : v.H$.CUSTOM,
      a = null != r.joinSound ? v.MW.UPDATED : v.MW.ADDED;
    r.joinSound = {
      soundId: t.soundId,
      guildId: i ? O.hY : t.guildId
    }, M({
      guildId: e,
      changeType: a,
      soundSource: o,
      soundType: v.jy.ENTRY,
      location: n
    })
  }, s.fy.INFREQUENT_USER_ACTION)
}

function M(e) {
  let {
    guildId: t,
    changeType: n,
    soundType: r,
    soundSource: i,
    location: o
  } = e;
  _.default.track(S.rMx.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
    location_stack: o,
    guild_id: "" === t ? 0 : Number(t),
    change_type: n,
    sound_type: r,
    sound_source: i
  })
}

function j(e) {
  let {
    location: t
  } = e;
  _.default.track(S.rMx.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, {
    location_stack: t
  })
}