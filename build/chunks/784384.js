/** Chunk was on web.js **/
/** chunk id: 784384, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HY: () => I,
  nm: () => O,
  pU: () => T,
  y: () => C
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk473749 = require("./473749.js"),
  Chunk106351 = require("./106351.js"),
  Chunk442837 = require("./442837.js"),
  Chunk911969 = require("./911969.js"),
  Chunk622822 = require("./622822.js"),
  Chunk933557 = require("./933557.js"),
  Chunk987509 = require("./987509.js"),
  Chunk926491 = require("./926491.js"),
  Chunk378233 = require("./378233.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk408433 = require("./408433.js"),
  Chunk823379 = require("./823379.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function O(e) {
  let t = e.map(c.hl).find(E.lm),
    n = (0, a.e7)([p.Z], () => p.Z.getChannel(t), [t]);
  return r.useMemo(() => null != n ? n : (0, f.createChannelRecord)({
    id: "1",
    type: i.d.DM
  }), [n])
}

function v(e, t) {
  let n = u.Z.getStickerById(e.id);
  return null != n && !!(0, d.J8)(n) && (n.guild_id !== t.guild_id || true)
}

function S(e) {
  return e.components.length > 0 && e.components[0].type === o.re.CHECKPOINT_CARD
}

function I(e, t, n, r) {
  let i = n instanceof f.Sf;
  if (null != r) {
    let e = r(n);
    if (null != e) return e
  }
  if (null == e) return;
  let a = S(e),
    o = e.messageSnapshots.length > 0 && S(e.messageSnapshots[0].message);
  if (null != t || a) {
    if ((0, s.qF)(t) && !(i && (0, s.qF)(n))) return {
      label: y.intl.string(y.t.KgPx1D)
    };
    if (i && (0, f.Km)(n.type)) {
      if ((e.attachments.length > 0 || e.messageSnapshots.some(e => e.message.attachments.length > 0)) && !_.Z.can(b.Plq.ATTACH_FILES, n)) return {
        label: y.intl.string(y.t.P7yvbm)
      };
      if ((e.embeds.length > 0 || e.messageSnapshots.some(e => e.message.embeds.length > 0)) && !(0, g.eC)(n, _.Z) && !(0, g.En)(e) || (a || o) && !(0, g.eC)(n, _.Z)) return {
        label: y.intl.string(y.t.Wr4RIX)
      };
      let t = [...(0, d.cv)(e), ...e.messageSnapshots.flatMap(e => {
        let {
          message: t
        } = e;
        return (0, d.cv)(t)
      })];
      if (t.length > 0 && !_.Z.can(b.Plq.USE_EXTERNAL_STICKERS, n) && t.some(e => v(e, n))) return {
        label: y.intl.string(y.t["0Yyrua"])
      };
      if ((e.hasFlag(b.iLy.IS_VOICE_MESSAGE) || e.messageSnapshots.some(e => e.message.hasFlag(b.iLy.IS_VOICE_MESSAGE))) && !_.Z.can(b.Plq.SEND_VOICE_MESSAGES, n)) return {
        label: y.intl.string(y.t.quj4DY)
      }
    }
  }
}

function T(e, t) {
  return !!(null != e.rateLimitPerUser && e.rateLimitPerUser > 0) && !(t.can(b.Plq.MANAGE_CHANNELS, e) || t.can(b.Plq.MANAGE_MESSAGES, e))
}

function C(e) {
  let t = (0, a.Wu)([p.Z, _.Z], () => e.map(e => {
    let {
      type: t,
      id: n
    } = e;
    return "channel" === t ? p.Z.getChannel(n) : null
  }).filter(E.lm).filter(e => T(e, _.Z)), [e]);
  return (0, a.Wu)([m.default, h.Z], () => t.map(e => (0, l.F6)(e, m.default, h.Z, true)), [t])
}