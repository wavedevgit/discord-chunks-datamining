/** Chunk was on 33648 **/
/** chunk id: 784384, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  HY: () => x,
  nm: () => v,
  pU: () => E,
  y: () => C
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

function v(e) {
  let t = e.map(o.hl).find(p.lm),
    n = (0, a.e7)([h.Z], () => h.Z.getChannel(t), [t]);
  return l.useMemo(() => null != n ? n : (0, d.kt)({
    id: "1",
    type: r.d.DM
  }), [n])
}

function x(e, t, n) {
  let l = n instanceof d.Sf;
  if ((0, i.aC)(t) && !(l && (0, i.aC)(n))) return {
    label: y.intl.string(y.t.KgPx1N)
  };
  if (l && (0, d.Km)(n.type)) {
    if ((e.attachments.length > 0 || e.messageSnapshots.some(e => e.message.attachments.length > 0)) && !f.Z.can(b.Plq.ATTACH_FILES, n)) return {
      label: y.intl.string(y.t.P7yvbm)
    };
    if ((e.embeds.length > 0 || e.messageSnapshots.some(e => e.message.embeds.length > 0)) && !(0, _.eC)(n, f.Z) && !(0, _.En)(e)) return {
      label: y.intl.string(y.t.Wr4RIS)
    };
    let t = [...(0, u.cv)(e), ...e.messageSnapshots.flatMap(e => {
      let {
        message: t
      } = e;
      return (0, u.cv)(t)
    })];
    if (t.length > 0 && !f.Z.can(b.Plq.USE_EXTERNAL_STICKERS, n) && t.some(e => (function(e, t) {
        let n = c.Z.getStickerById(e.id);
        return null != n && !!(0, u.J8)(n) && (n.guild_id !== t.guild_id || true)
      })(e, n))) return {
      label: y.intl.string(y.t["0Yyrub"])
    };
    if ((e.hasFlag(b.iLy.IS_VOICE_MESSAGE) || e.messageSnapshots.some(e => e.message.hasFlag(b.iLy.IS_VOICE_MESSAGE))) && !f.Z.can(b.Plq.SEND_VOICE_MESSAGES, n)) return {
      label: y.intl.string(y.t.quj4DQ)
    }
  }
}

function E(e, t) {
  return !!(null != e.rateLimitPerUser && e.rateLimitPerUser > 0) && !(t.can(b.Plq.MANAGE_CHANNELS, e) || t.can(b.Plq.MANAGE_MESSAGES, e))
}

function C(e) {
  let t = (0, a.Wu)([h.Z, f.Z], () => e.map(e => {
    let {
      type: t,
      id: n
    } = e;
    return "channel" === t ? h.Z.getChannel(n) : null
  }).filter(p.lm).filter(e => E(e, f.Z)), [e]);
  return (0, a.Wu)([g.default, m.Z], () => t.map(e => (0, s.F6)(e, g.default, m.Z, true)), [t])
}