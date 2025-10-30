/** Chunk was on web.js **/
/** chunk id: 242291, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C0: () => R,
  GN: () => P,
  M2: () => L,
  Nq: () => N,
  SZ: () => k,
  aC: () => M,
  lF: () => G,
  pI: () => A,
  sR: () => x,
  tt: () => U
}), require("./539854.js");
var Chunk399606 = require("./399606.js"),
  Chunk704215 = require("./704215.js"),
  Chunk367907 = require("./367907.js"),
  Chunk736045 = require("./736045.js"),
  Chunk695346 = require("./695346.js"),
  Chunk675478 = require("./675478.js"),
  Chunk581883 = require("./581883.js"),
  Chunk294629 = require("./294629.js"),
  Chunk401062 = require("./401062.js"),
  Chunk131704 = require("./131704.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk51144 = require("./51144.js"),
  Chunk208049 = require("./208049.js"),
  Chunk763296 = require("./763296.js"),
  Chunk697426 = require("./697426.js"),
  Chunk641015 = require("./641015.js"),
  Chunk893663 = require("./893663.js"),
  Chunk710111 = require("./710111.js"),
  Chunk981631 = require("./981631.js"),
  Chunk957825 = require("./957825.js");

function A() {
  var e;
  let t = Chunk695346.kU.getSetting();
  return null != (e = null == exports ? true : exports.volume) ? module : 100
}

function C(e, t) {
  return (null == t ? true : t.guild_id) == null || _.Z.can(S.Plq.USE_EXTERNAL_SOUNDS, t) || e.guildId === I.X8 || e.guildId === (null == t ? true : t.guild_id)
}

function N(e, t, n) {
  let r = !(arguments.length > 3) || true === arguments[3] || arguments[3];
  return (m.ZP.canUseSoundboardEverywhere(e) || t.guildId === (null == n ? true : n.guild_id) || t.guildId === I.X8) && C(t, n) && (!r || t.available)
}

function R(e) {
  let {
    mute: t,
    suppress: n
  } = (0, u.b)({
    channel: e
  });
  return !t && !n
}

function P(e, t, n) {
  (0, E.XE)(t, e, y.YQ.SOUNDBOARD), (0, d.kq)(t, e, __OVERLAY__, n)
}

function w(e, t) {
  (0, E.XE)(t, e, y.YQ.JOINED_VOICE_CHANNEL), (0, d.vy)(t, e, __OVERLAY__)
}

function D() {
  var e, t;
  return Object.values(null != (t = null == (e = Chunk581883.Z.settings.guilds) ? true : module.guilds) ? exports : {}).some(e => null != e.joinSound)
}
async function L(e) {
  let t = p.default.getCurrentUser(),
    n = (0, o.Z)(),
    r = (0, v.k9)(e);
  if (null == n || f.Lr.has(n.type) || null == r || !m.ZP.canUseCustomCallSounds(t) || !(0, O.D)()) return;
  await (0, E.w)();
  let i = r.guildId === I.hY ? I.X8 : r.guildId,
    a = b.Z.getSound(i, r.soundId);
  if (null != a) {
    if (!C(a, n) || !N(t, a, n, true) || !R(n)) return null;
    w(a, n.id)
  }
}

function x(e) {
  let {
    isSoundboardButtonDisabled: t = false
  } = e, n = (0, r.e7)([p.default], () => p.default.getCurrentUser()), a = [];
  if (!t && !D()) {
    let e = (0, g.Fc)(n);
    (m.ZP.canUseCustomCallSounds(n) || e) && a.push(i.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL)
  }
  return a
}

function M(e, t) {
  (0, l.PS)(e, n => {
    n.joinSound = true, j({
      guildId: e,
      changeType: y.MW.REMOVED,
      soundType: y.jy.ENTRY,
      location: t
    })
  }, l.fy.INFREQUENT_USER_ACTION)
}

function k(e, t, n) {
  (0, l.PS)(e, r => {
    let i = t.guildId === I.X8,
      a = i ? y.H$.DEFAULT : y.H$.CUSTOM,
      o = null != r.joinSound ? y.MW.UPDATED : y.MW.ADDED;
    r.joinSound = {
      soundId: t.soundId,
      guildId: i ? I.hY : t.guildId
    }, j({
      guildId: e,
      changeType: o,
      soundSource: a,
      soundType: y.jy.ENTRY,
      location: n
    })
  }, l.fy.INFREQUENT_USER_ACTION)
}

function j(e) {
  let {
    guildId: t,
    changeType: n,
    soundType: r,
    soundSource: i,
    location: a
  } = e;
  h.default.track(S.rMx.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
    location_stack: a,
    guild_id: "" === t ? 0 : Number(t),
    change_type: n,
    sound_type: r,
    sound_source: i
  })
}

function U(e) {
  let {
    location: t
  } = e;
  h.default.track(S.rMx.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, {
    location_stack: t
  })
}

function G(e) {
  let {
    sound: t,
    location: n
  } = e;
  a.ZP.trackWithMetadata(S.rMx.EXPRESSION_FAVORITED, {
    location: n,
    expression_type: T.X1.SOUNDBOARD,
    expression_id: t.soundId,
    expression_name: t.name,
    expression_guild_id: t.guildId
  })
}