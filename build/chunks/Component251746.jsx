/** Chunk was on 86357 **/
/** chunk id: 251746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk66999 = require("./66999.js"),
  Chunk665906 = require("./665906.js"),
  Chunk979651 = require("./979651.js"),
  Chunk557135 = require("./557135.jsx"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let t = (0, u.Y)(e),
    n = (0, o.e7)([d.Z], () => d.Z.isInChannel(e.id)),
    l = (0, o.e7)([d.Z], () => !a().isEmpty(d.Z.getVoiceStatesForChannel(e.id))),
    {
      needSubscriptionToAccess: f
    } = (0, c.Z)(e.id),
    m = i.useCallback(() => {
      p.Z.handleVoiceConnect({
        channel: e,
        connected: n,
        needSubscriptionToAccess: f,
        locked: false
      })
    }, [e, n, f]);
  return n || !t ? null : (0, r.jsx)(s.sNh, {
    id: "join-thread-voice",
    label: l ? h.intl.string(h.t["0D/6R0"]) : h.intl.string(h.t.My50nZ),
    action: m
  })
}