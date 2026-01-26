/** Chunk was on 97887 **/
/** chunk id: 788579, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
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
  } = e, n = (0, u.A)(), i = (0, a.bG)([f.A], () => f.A.isInChannel(t.id)), y = (0, a.bG)([f.A], () => !s().isEmpty(f.A.getVoiceStatesForChannel(t.id))), _ = (0, a.bG)([h.A], () => h.A.can(b.xBc.CONNECT, t)), {
    needSubscriptionToAccess: O
  } = (0, d.A)(t.id), j = (0, p.Id)(t), v = l.useCallback(() => {
    c.A.handleVoiceConnect({
      channel: t,
      connected: i,
      needSubscriptionToAccess: O,
      locked: false
    })
  }, [t, i, O]);
  return (l.useEffect(() => (g._.subscribe(b.jej.CALL_START, v), () => {
    g._.unsubscribe(b.jej.CALL_START, v)
  }), [v]), p.io.useExperiment({
    guildId: t.guild_id,
    location: "63250c_1"
  }, {
    autoTrackExposure: false
  }).enabled && !n && !i && _ && j && t.isVocalThread()) ? (0, r.jsx)(m.Ay.Icon, {
    icon: o._jp,
    onClick: v,
    tooltip: y ? A.intl.string(A.t.fdEeb5) : A.intl.string(A.t.focH1t)
  }) : null
})