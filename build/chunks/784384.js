/** Chunk was on 36653 **/
/** chunk id: 784384, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  HY: () => Z,
  nm: () => S,
  pU: () => v,
  y: () => P
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk647438 = require("./647438.js"),
  Chunk106351 = require("./106351.js"),
  Chunk442837 = require("./442837.js"),
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

function S(e) {
  let t = e.map(u.hl).find(p.lm),
    n = (0, i.e7)([f.Z], () => f.Z.getChannel(t), [t]);
  return l.useMemo(() => null != n ? n : (0, d.createChannelRecord)({
    id: "1",
    type: r.d.DM
  }), [n])
}

function Z(e, t, n, l) {
  let r = n instanceof d.Sf;
  if (null != l) {
    let e = l(n);
    if (null != e) return e
  }
  if (null != e && null != t) {
    if ((0, s.Y3)(t) && !(r && (0, s.Y3)(n))) return {
      label: E.intl.string(E.t.KgPx1D)
    };
    if (r && (0, d.Km)(n.type)) {
      if ((e.attachments.length > 0 || e.messageSnapshots.some(e => e.message.attachments.length > 0)) && !h.Z.can(y.Plq.ATTACH_FILES, n)) return {
        label: E.intl.string(E.t.P7yvbm)
      };
      if ((e.embeds.length > 0 || e.messageSnapshots.some(e => e.message.embeds.length > 0)) && !(0, g.eC)(n, h.Z) && !(0, g.En)(e)) return {
        label: E.intl.string(E.t.Wr4RIX)
      };
      let t = [...(0, o.cv)(e), ...e.messageSnapshots.flatMap(e => {
        let {
          message: t
        } = e;
        return (0, o.cv)(t)
      })];
      if (t.length > 0 && !h.Z.can(y.Plq.USE_EXTERNAL_STICKERS, n) && t.some(e => (function(e, t) {
          let n = c.Z.getStickerById(e.id);
          return null != n && !!(0, o.J8)(n) && (n.guild_id !== t.guild_id || true)
        })(e, n))) return {
        label: E.intl.string(E.t["0Yyrua"])
      };
      if ((e.hasFlag(y.iLy.IS_VOICE_MESSAGE) || e.messageSnapshots.some(e => e.message.hasFlag(y.iLy.IS_VOICE_MESSAGE))) && !h.Z.can(y.Plq.SEND_VOICE_MESSAGES, n)) return {
        label: E.intl.string(E.t.quj4DY)
      }
    }
  }
}

function v(e, t) {
  return !!(null != e.rateLimitPerUser && e.rateLimitPerUser > 0) && !(t.can(y.Plq.MANAGE_CHANNELS, e) || t.can(y.Plq.MANAGE_MESSAGES, e))
}

function P(e) {
  let t = (0, i.Wu)([f.Z, h.Z], () => e.map(e => {
    let {
      type: t,
      id: n
    } = e;
    return "channel" === t ? f.Z.getChannel(n) : null
  }).filter(p.lm).filter(e => v(e, h.Z)), [e]);
  return (0, i.Wu)([b.default, m.Z], () => t.map(e => (0, a.F6)(e, b.default, m.Z, true)), [t])
}