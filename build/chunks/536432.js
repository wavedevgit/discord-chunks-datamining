/** Chunk was on web.js **/
/** chunk id: 536432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ak: () => w,
  Au: () => R,
  Dv: () => j,
  Ir: () => N,
  ND: () => U,
  Ni: () => G,
  VE: () => L,
  fh: () => x,
  un: () => M,
  wH: () => T
}), require("./321073.js");
var Chunk417597 = require("./417597.js"),
  Chunk554146 = require("./554146.js"),
  Chunk58149 = require("./58149.js"),
  Chunk693806 = require("./693806.js"),
  Chunk253932 = require("./253932.js"),
  Chunk594061 = require("./594061.js"),
  Chunk617617 = require("./617617.js"),
  Chunk173660 = require("./173660.js"),
  Chunk914616 = require("./914616.js"),
  Chunk95701 = require("./95701.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk427262 = require("./427262.js"),
  Chunk796774 = require("./796774.js"),
  Chunk209932 = require("./209932.js"),
  Chunk807348 = require("./807348.js"),
  Chunk123973 = require("./123973.js"),
  Chunk984813 = require("./984813.js"),
  Chunk980504 = require("./980504.js"),
  Chunk652215 = require("./652215.js"),
  Chunk698279 = require("./698279.js");

function T() {
  var e;
  let t = o.dG.getSetting();
  return null != (e = null == t ? true : t.volume) ? e : 100
}

function C(e, t) {
  return (null == t ? true : t.guild_id) == null || p.A.can(S.xBc.USE_EXTERNAL_SOUNDS, t) || e.guildId === v.mV || e.guildId === (null == t ? true : t.guild_id)
}

function N(e, t, n) {
  let r = !(arguments.length > 3) || true === arguments[3] || arguments[3];
  return (m.Ay.canUseSoundboardEverywhere(e) || t.guildId === (null == n ? true : n.guild_id) || t.guildId === v.mV) && C(t, n) && (!r || t.available)
}

function R(e) {
  let {
    mute: t,
    suppress: n
  } = (0, u.k)({
    channel: e
  });
  return !t && !n
}

function w(e, t, n, r) {
  (0, E.qP)(t, e, y.Zm.SOUNDBOARD), (0, d.Wv)(t, e, __OVERLAY__, n, r)
}

function P(e, t) {
  (0, E.qP)(t, e, y.Zm.JOINED_VOICE_CHANNEL), (0, d.Rc)(t, e, __OVERLAY__)
}

function D() {
  var e, t;
  return Object.values(null != (e = null == (t = c.A.settings.guilds) ? true : t.guilds) ? e : {}).some(e => null != e.joinSound)
}
async function x(e) {
  let t = _.default.getCurrentUser(),
    n = (0, s.A)(),
    r = (0, A.z0)(e);
  if (null == n || f.Do.has(n.type) || null == r || !m.Ay.canUseCustomCallSounds(t) || !(0, O.l)()) return;
  await (0, E.E7)();
  let i = r.guildId === v.XH ? v.mV : r.guildId,
    a = b.A.getSound(i, r.soundId);
  if (null != a) {
    if (!C(a, n) || !N(t, a, n, true) || !R(n)) return null;
    P(a, n.id)
  }
}

function L(e) {
  let {
    isSoundboardButtonDisabled: t = false
  } = e, n = (0, r.bG)([_.default], () => _.default.getCurrentUser()), a = [];
  if (!t && !D()) {
    let e = (0, g.G2)(n);
    (m.Ay.canUseCustomCallSounds(n) || e) && a.push(i.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL)
  }
  return a
}

function j(e, t) {
  (0, l.TG)(e, n => {
    n.joinSound = true, k({
      guildId: e,
      changeType: y.Vr.REMOVED,
      soundType: y.ib.ENTRY,
      location: t
    })
  }, l.Sb.INFREQUENT_USER_ACTION)
}

function M(e, t, n) {
  (0, l.TG)(e, r => {
    let i = t.guildId === v.mV,
      a = i ? y.FH.DEFAULT : y.FH.CUSTOM,
      s = null != r.joinSound ? y.Vr.UPDATED : y.Vr.ADDED;
    r.joinSound = {
      soundId: t.soundId,
      guildId: i ? v.XH : t.guildId
    }, k({
      guildId: e,
      changeType: s,
      soundSource: a,
      soundType: y.ib.ENTRY,
      location: n
    })
  }, l.Sb.INFREQUENT_USER_ACTION)
}

function k(e) {
  let {
    guildId: t,
    changeType: n,
    soundType: r,
    soundSource: i,
    location: a
  } = e;
  h.default.track(S.HAw.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
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
  h.default.track(S.HAw.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, {
    location_stack: t
  })
}

function G(e) {
  let {
    sound: t,
    location: n
  } = e;
  a.Ay.trackWithMetadata(S.HAw.EXPRESSION_FAVORITED, {
    location: n,
    expression_type: I.kx.SOUNDBOARD,
    expression_id: t.soundId,
    expression_name: t.name,
    expression_guild_id: t.guildId
  })
}