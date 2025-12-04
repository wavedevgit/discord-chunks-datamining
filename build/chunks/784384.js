/** Chunk was on 36653 **/
/** chunk id: 784384, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  HY: () => v,
  nm: () => E,
  pU: () => P,
  y: () => Z
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

function E(e) {
  let t = e.map(c.hl).find(y.lm),
    n = (0, s.e7)([h.Z], () => h.Z.getChannel(t), [t]);
  return l.useMemo(() => null != n ? n : (0, f.createChannelRecord)({
    id: "1",
    type: r.d.DM
  }), [n])
}

function x(e) {
  return e.components.length > 0 && e.components[0].type === i.re.CHECKPOINT_CARD
}

function v(e, t, n, l) {
  let r = n instanceof f.Sf;
  if (null != l) {
    let e = l(n);
    if (null != e) return e
  }
  if (null == e) return;
  let s = x(e),
    i = e.messageSnapshots.length > 0 && x(e.messageSnapshots[0].message);
  if (null != t || s) {
    if ((0, a.Y3)(t) && !(r && (0, a.Y3)(n))) return {
      label: j.intl.string(j.t.KgPx1D)
    };
    if (r && (0, f.Km)(n.type)) {
      if ((e.attachments.length > 0 || e.messageSnapshots.some(e => e.message.attachments.length > 0)) && !m.Z.can(S.Plq.ATTACH_FILES, n)) return {
        label: j.intl.string(j.t.P7yvbm)
      };
      if ((e.embeds.length > 0 || e.messageSnapshots.some(e => e.message.embeds.length > 0)) && !(0, p.eC)(n, m.Z) && !(0, p.En)(e) || (s || i) && !(0, p.eC)(n, m.Z)) return {
        label: j.intl.string(j.t.Wr4RIX)
      };
      let t = [...(0, d.cv)(e), ...e.messageSnapshots.flatMap(e => {
        let {
          message: t
        } = e;
        return (0, d.cv)(t)
      })];
      if (t.length > 0 && !m.Z.can(S.Plq.USE_EXTERNAL_STICKERS, n) && t.some(e => (function(e, t) {
          let n = o.Z.getStickerById(e.id);
          return null != n && !!(0, d.J8)(n) && (n.guild_id !== t.guild_id || true)
        })(e, n))) return {
        label: j.intl.string(j.t["0Yyrua"])
      };
      if ((e.hasFlag(S.iLy.IS_VOICE_MESSAGE) || e.messageSnapshots.some(e => e.message.hasFlag(S.iLy.IS_VOICE_MESSAGE))) && !m.Z.can(S.Plq.SEND_VOICE_MESSAGES, n)) return {
        label: j.intl.string(j.t.quj4DY)
      }
    }
  }
}

function P(e, t) {
  return !!(null != e.rateLimitPerUser && e.rateLimitPerUser > 0) && !(t.can(S.Plq.MANAGE_CHANNELS, e) || t.can(S.Plq.MANAGE_MESSAGES, e))
}

function Z(e) {
  let t = (0, s.Wu)([h.Z, m.Z], () => e.map(e => {
    let {
      type: t,
      id: n
    } = e;
    return "channel" === t ? h.Z.getChannel(n) : null
  }).filter(y.lm).filter(e => P(e, m.Z)), [e]);
  return (0, s.Wu)([g.default, b.Z], () => t.map(e => (0, u.F6)(e, g.default, b.Z, true)), [t])
}