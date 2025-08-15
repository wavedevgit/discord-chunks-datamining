/** Chunk was on 86357 **/
/** chunk id: 207868, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
let _ = Chunk73800.memo(function(e) {
  let {
    channel: t
  } = e, n = (0, u.Z)(), l = (0, o.e7)([f.Z], () => f.Z.isInChannel(t.id)), _ = (0, o.e7)([f.Z], () => !a().isEmpty(f.Z.getVoiceStatesForChannel(t.id))), C = (0, o.e7)([h.Z], () => h.Z.can(b.Plq.CONNECT, t)), {
    needSubscriptionToAccess: x
  } = (0, d.Z)(t.id), v = (0, p.$R)(t), j = i.useCallback(() => {
    c.Z.handleVoiceConnect({
      channel: t,
      connected: l,
      needSubscriptionToAccess: x,
      locked: false
    })
  }, [t, l, x]);
  return (i.useEffect(() => (m.S.subscribe(b.CkL.CALL_START, j), () => {
    m.S.unsubscribe(b.CkL.CALL_START, j)
  }), [j]), p.tM.useExperiment({
    guildId: t.guild_id,
    location: "63250c_1"
  }, {
    autoTrackExposure: false
  }).enabled && !n && !l && C && v && t.isVocalThread()) ? (0, r.jsx)(g.ZP.Icon, {
    icon: s.Csw,
    onClick: j,
    tooltip: _ ? y.intl.string(y.t.fdEeb2) : y.intl.string(y.t.focH1t)
  }) : null
})