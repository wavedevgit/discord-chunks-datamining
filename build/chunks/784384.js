/** Chunk was on 36653 **/
/** chunk id: 784384, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  HY: () => P,
  nm: () => Z,
  pU: () => O,
  y: () => j
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

function Z(e) {
  let t = e.map(c.hl).find(y.lm),
    n = (0, i.e7)([h.Z], () => h.Z.getChannel(t), [t]);
  return l.useMemo(() => null != n ? n : (0, f.createChannelRecord)({
    id: "1",
    type: r.d.DM
  }), [n])
}

function v(e) {
  return e.components.length > 0 && e.components[0].type === s.re.CHECKPOINT_CARD
}

function P(e, t, n, l) {
  let r = n instanceof f.Sf;
  if (null != l) {
    let e = l(n);
    if (null != e) return e
  }
  if (null == e) return;
  let i = v(e),
    s = e.messageSnapshots.length > 0 && v(e.messageSnapshots[0].message);
  if (null != t || i) {
    if ((0, a.Y3)(t) && !(r && (0, a.Y3)(n))) return {
      label: S.intl.string(S.t.KgPx1D)
    };
    if (r && (0, f.Km)(n.type)) {
      if ((e.attachments.length > 0 || e.messageSnapshots.some(e => e.message.attachments.length > 0)) && !m.Z.can(E.Plq.ATTACH_FILES, n)) return {
        label: S.intl.string(S.t.P7yvbm)
      };
      if ((e.embeds.length > 0 || e.messageSnapshots.some(e => e.message.embeds.length > 0)) && !(0, b.eC)(n, m.Z) && !(0, b.En)(e) || (i || s) && !(0, b.eC)(n, m.Z)) return {
        label: S.intl.string(S.t.Wr4RIX)
      };
      let t = [...(0, d.cv)(e), ...e.messageSnapshots.flatMap(e => {
        let {
          message: t
        } = e;
        return (0, d.cv)(t)
      })];
      if (t.length > 0 && !m.Z.can(E.Plq.USE_EXTERNAL_STICKERS, n) && t.some(e => (function(e, t) {
          let n = o.Z.getStickerById(e.id);
          return null != n && !!(0, d.J8)(n) && (n.guild_id !== t.guild_id || true)
        })(e, n))) return {
        label: S.intl.string(S.t["0Yyrua"])
      };
      if ((e.hasFlag(E.iLy.IS_VOICE_MESSAGE) || e.messageSnapshots.some(e => e.message.hasFlag(E.iLy.IS_VOICE_MESSAGE))) && !m.Z.can(E.Plq.SEND_VOICE_MESSAGES, n)) return {
        label: S.intl.string(S.t.quj4DY)
      }
    }
  }
}

function O(e, t) {
  return !!(null != e.rateLimitPerUser && e.rateLimitPerUser > 0) && !(t.can(E.Plq.MANAGE_CHANNELS, e) || t.can(E.Plq.MANAGE_MESSAGES, e))
}

function j(e) {
  let t = (0, i.Wu)([h.Z, m.Z], () => e.map(e => {
    let {
      type: t,
      id: n
    } = e;
    return "channel" === t ? h.Z.getChannel(n) : null
  }).filter(y.lm).filter(e => O(e, m.Z)), [e]);
  return (0, i.Wu)([p.default, g.Z], () => t.map(e => (0, u.F6)(e, p.default, g.Z, true)), [t])
}