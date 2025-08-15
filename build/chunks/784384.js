/** Chunk was on 19157 **/
/** chunk id: 784384, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  HY: () => I,
  nm: () => y,
  pU: () => S,
  y: () => A
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk73800 = require("./73800.js"),
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

function y(e) {
  let t = e.map(o.hl).find(p.lm),
    n = (0, i.e7)([f.Z], () => f.Z.getChannel(t), [t]);
  return l.useMemo(() => null != n ? n : (0, d.kt)({
    id: "1",
    type: r.d.DM
  }), [n])
}

function I(e, t, n) {
  let l = n instanceof d.Sf;
  if ((0, a.aC)(t) && !(l && (0, a.aC)(n))) return {
    label: b.intl.string(b.t.KgPx1N)
  };
  if (l && (0, d.Km)(n.type)) {
    if ((e.attachments.length > 0 || e.messageSnapshots.some(e => e.message.attachments.length > 0)) && !h.Z.can(E.Plq.ATTACH_FILES, n)) return {
      label: b.intl.string(b.t.P7yvbm)
    };
    if ((e.embeds.length > 0 || e.messageSnapshots.some(e => e.message.embeds.length > 0)) && !(0, m.eC)(n, h.Z) && !(0, m.En)(e)) return {
      label: b.intl.string(b.t.Wr4RIS)
    };
    let t = [...(0, u.cv)(e), ...e.messageSnapshots.flatMap(e => {
      let {
        message: t
      } = e;
      return (0, u.cv)(t)
    })];
    if (t.length > 0 && !h.Z.can(E.Plq.USE_EXTERNAL_STICKERS, n) && t.some(e => (function(e, t) {
        let n = c.Z.getStickerById(e.id);
        return null != n && !!(0, u.J8)(n) && (n.guild_id !== t.guild_id || true)
      })(e, n))) return {
      label: b.intl.string(b.t["0Yyrub"])
    };
    if ((e.hasFlag(E.iLy.IS_VOICE_MESSAGE) || e.messageSnapshots.some(e => e.message.hasFlag(E.iLy.IS_VOICE_MESSAGE))) && !h.Z.can(E.Plq.SEND_VOICE_MESSAGES, n)) return {
      label: b.intl.string(b.t.quj4DQ)
    }
  }
}

function S(e, t) {
  return !!(null != e.rateLimitPerUser && e.rateLimitPerUser > 0) && !(t.can(E.Plq.MANAGE_CHANNELS, e) || t.can(E.Plq.MANAGE_MESSAGES, e))
}

function A(e) {
  let t = (0, i.Wu)([f.Z, h.Z], () => e.map(e => {
    let {
      type: t,
      id: n
    } = e;
    return "channel" === t ? f.Z.getChannel(n) : null
  }).filter(p.lm).filter(e => S(e, h.Z)), [e]);
  return (0, i.Wu)([g.default, _.Z], () => t.map(e => (0, s.F6)(e, g.default, _.Z, true)), [t])
}