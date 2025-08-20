/** Chunk was on 99534 **/
/** chunk id: 251746, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk66999 = require("./66999.js"),
  Chunk665906 = require("./665906.js"),
  Chunk979651 = require("./979651.js"),
  Chunk557135 = require("./557135.jsx"),
  Chunk388032 = require("./388032.jsx");

function v(t) {
  let n = (0, u.Y)(t),
    i = (0, d.e7)([c.Z], () => c.Z.isInChannel(t.id)),
    r = (0, d.e7)([c.Z], () => !a().isEmpty(c.Z.getVoiceStatesForChannel(t.id))),
    {
      needSubscriptionToAccess: v
    } = (0, s.Z)(t.id),
    f = l.useCallback(() => {
      h.Z.handleVoiceConnect({
        channel: t,
        connected: i,
        needSubscriptionToAccess: v,
        locked: false
      })
    }, [t, i, v]);
  return i || !n ? null : (0, e.jsx)(o.sNh, {
    id: "join-thread-voice",
    label: r ? Z.intl.string(Z.t["0D/6R0"]) : Z.intl.string(Z.t.My50nZ),
    action: f
  })
}