/** Chunk was on web.js **/
/** chunk id: 513480, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M6: () => T,
  QK: () => O,
  lP: () => S,
  pE: () => I
}), require("./896048.js"), require("./114821.js"), require("./339614.js");
var Chunk64700 = require("./64700.js"),
  Chunk478437 = require("./478437.js"),
  Chunk311907 = require("./311907.js"),
  Chunk155718 = require("./155718.js"),
  Chunk323073 = require("./323073.js"),
  Chunk47167 = require("./47167.js"),
  Chunk223863 = require("./223863.js"),
  Chunk679382 = require("./679382.js"),
  Chunk378058 = require("./378058.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk659674 = require("./659674.js"),
  Chunk403362 = require("./403362.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function O(e) {
  let t = e.map(c._g).find(E.Vq),
    n = (0, a.bG)([p.A], () => p.A.getChannel(t), [t]);
  return r.useMemo(() => null != n ? n : (0, f.createChannelRecord)({
    id: "1",
    type: i.r.DM
  }), [n])
}

function v(e, t) {
  let n = u.A.getStickerById(e.id);
  return null != n && !!(0, d.Xw)(n) && (n.guild_id !== t.guild_id || true)
}

function A(e) {
  return e.components.length > 0 && e.components[0].type === o.I5.CHECKPOINT_CARD
}

function I(e, t, n, r) {
  let i = n instanceof f.YB;
  if (null != r) {
    let e = r(n);
    if (null != e) return e
  }
  if (null == e) return;
  let a = A(e),
    o = e.messageSnapshots.length > 0 && A(e.messageSnapshots[0].message);
  if (null != t || a) {
    if ((0, s.Gc)(t) && !(i && (0, s.Gc)(n))) return {
      label: b.intl.string(b.t.KgPx1D)
    };
    if (i && (0, f.zy)(n.type)) {
      if ((e.attachments.length > 0 || e.messageSnapshots.some(e => e.message.attachments.length > 0)) && !_.A.can(y.xBc.ATTACH_FILES, n)) return {
        label: b.intl.string(b.t.P7yvbm)
      };
      if ((e.embeds.length > 0 || e.messageSnapshots.some(e => e.message.embeds.length > 0)) && !(0, g.fS)(n, _.A) && !(0, g.ax)(e) || (a || o) && !(0, g.fS)(n, _.A)) return {
        label: b.intl.string(b.t.Wr4RIX)
      };
      let t = [...(0, d.o6)(e), ...e.messageSnapshots.flatMap(e => {
        let {
          message: t
        } = e;
        return (0, d.o6)(t)
      })];
      if (t.length > 0 && !_.A.can(y.xBc.USE_EXTERNAL_STICKERS, n) && t.some(e => v(e, n))) return {
        label: b.intl.string(b.t["0Yyrua"])
      };
      if ((e.hasFlag(y.pr7.IS_VOICE_MESSAGE) || e.messageSnapshots.some(e => e.message.hasFlag(y.pr7.IS_VOICE_MESSAGE))) && !_.A.can(y.xBc.SEND_VOICE_MESSAGES, n)) return {
        label: b.intl.string(b.t.quj4DY)
      }
    }
  }
}

function S(e, t) {
  return !!(null != e.rateLimitPerUser && e.rateLimitPerUser > 0) && !(t.can(y.xBc.MANAGE_CHANNELS, e) || t.can(y.xBc.MANAGE_MESSAGES, e))
}

function T(e) {
  let t = (0, a.yK)([p.A, _.A], () => e.map(e => {
    let {
      type: t,
      id: n
    } = e;
    return "channel" === t ? p.A.getChannel(n) : null
  }).filter(E.Vq).filter(e => S(e, _.A)), [e]);
  return (0, a.yK)([m.default, h.A], () => t.map(e => (0, l.m1)(e, m.default, h.A, true)), [t])
}