/** Chunk was on 82124 **/
/** chunk id: 207868, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk557135 = require("./557135.jsx"),
  Chunk590293 = require("./590293.js"),
  Chunk66999 = require("./66999.js"),
  Chunk665906 = require("./665906.js"),
  Chunk496675 = require("./496675.js"),
  Chunk979651 = require("./979651.js"),
  Chunk585483 = require("./585483.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let v = Chunk473749.memo(function(e) {
  let {
    channel: t
  } = e, n = (0, u.Z)(), l = (0, o.e7)([h.Z], () => h.Z.isInChannel(t.id)), v = (0, o.e7)([h.Z], () => !a().isEmpty(h.Z.getVoiceStatesForChannel(t.id))), O = (0, o.e7)([f.Z], () => f.Z.can(b.Plq.CONNECT, t)), {
    needSubscriptionToAccess: j
  } = (0, d.Z)(t.id), x = (0, p.$R)(t), C = i.useCallback(() => {
    c.Z.handleVoiceConnect({
      channel: t,
      connected: l,
      needSubscriptionToAccess: j,
      locked: false
    })
  }, [t, l, j]);
  return (i.useEffect(() => (g.S.subscribe(b.CkL.CALL_START, C), () => {
    g.S.unsubscribe(b.CkL.CALL_START, C)
  }), [C]), p.tM.useExperiment({
    guildId: t.guild_id,
    location: "63250c_1"
  }, {
    autoTrackExposure: false
  }).enabled && !n && !l && O && x && t.isVocalThread()) ? (0, r.jsx)(m.ZP.Icon, {
    icon: s.Csw,
    onClick: C,
    tooltip: v ? y.intl.string(y.t.fdEeb5) : y.intl.string(y.t.focH1t)
  }) : null
})