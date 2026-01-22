/** Chunk was on 97492 **/
/** chunk id: 788579, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk262763 = require("./262763.jsx"),
  Chunk753727 = require("./753727.js"),
  Chunk721592 = require("./721592.js"),
  Chunk406704 = require("./406704.js"),
  Chunk576705 = require("./576705.js"),
  Chunk977997 = require("./977997.js"),
  Chunk203982 = require("./203982.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let y = Chunk64700.memo(function(e) {
  let {
    channel: t
  } = e, n = (0, u.A)(), i = (0, s.bG)([h.A], () => h.A.isInChannel(t.id)), y = (0, s.bG)([h.A], () => !a().isEmpty(h.A.getVoiceStatesForChannel(t.id))), O = (0, s.bG)([p.A], () => p.A.can(m.xBc.CONNECT, t)), {
    needSubscriptionToAccess: j
  } = (0, d.A)(t.id), v = (0, f.Id)(t), x = l.useCallback(() => {
    c.A.handleVoiceConnect({
      channel: t,
      connected: i,
      needSubscriptionToAccess: j,
      locked: false
    })
  }, [t, i, j]);
  return (l.useEffect(() => (b._.subscribe(m.jej.CALL_START, x), () => {
    b._.unsubscribe(m.jej.CALL_START, x)
  }), [x]), f.io.useExperiment({
    guildId: t.guild_id,
    location: "63250c_1"
  }, {
    autoTrackExposure: false
  }).enabled && !n && !i && O && v && t.isVocalThread()) ? (0, r.jsx)(g.Ay.Icon, {
    icon: o._jp,
    onClick: x,
    tooltip: y ? A.intl.string(A.t.fdEeb5) : A.intl.string(A.t.focH1t)
  }) : null
})