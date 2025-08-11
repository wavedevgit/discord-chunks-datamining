/** Chunk was on 49152 **/
/** chunk id: 207868, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk557135 = require("./557135.js"),
  Chunk590293 = require("./590293.js"),
  Chunk66999 = require("./66999.js"),
  Chunk665906 = require("./665906.js"),
  Chunk496675 = require("./496675.js"),
  Chunk979651 = require("./979651.js"),
  Chunk585483 = require("./585483.js"),
  Chunk665149 = require("./665149.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");
let x = Chunk73800.memo(function(e) {
  let {
    channel: t
  } = e, n = (0, u.Z)(), l = (0, s.e7)([f.Z], () => f.Z.isInChannel(t.id)), x = (0, s.e7)([f.Z], () => !a().isEmpty(f.Z.getVoiceStatesForChannel(t.id))), _ = (0, s.e7)([p.Z], () => p.Z.can(b.Plq.CONNECT, t)), {
    needSubscriptionToAccess: j
  } = (0, d.Z)(t.id), O = (0, h.$R)(t), v = i.useCallback(() => {
    c.Z.handleVoiceConnect({
      channel: t,
      connected: l,
      needSubscriptionToAccess: j,
      locked: false
    })
  }, [t, l, j]);
  return (i.useEffect(() => (g.S.subscribe(b.CkL.CALL_START, v), () => {
    g.S.unsubscribe(b.CkL.CALL_START, v)
  }), [v]), h.tM.useExperiment({
    guildId: t.guild_id,
    location: "63250c_1"
  }, {
    autoTrackExposure: false
  }).enabled && !n && !l && _ && O && t.isVocalThread()) ? <m.ZP.Icon icon={o.Csw} onClick={v} tooltip={x ? y.intl.string(y.t.fdEeb2) : y.intl.string(y.t.focH1t)} /> : null
})