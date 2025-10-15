/** Chunk was on 46154 **/
/** chunk id: 251746, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk66999 = require("./66999.js"),
  Chunk665906 = require("./665906.js"),
  Chunk979651 = require("./979651.js"),
  Chunk557135 = require("./557135.jsx"),
  Chunk388032 = require("./388032.jsx");

function g(t) {
  let n = (0, u.Y)(t),
    e = (0, s.e7)([c.Z], () => c.Z.isInChannel(t.id)),
    a = (0, s.e7)([c.Z], () => !r().isEmpty(c.Z.getVoiceStatesForChannel(t.id))),
    {
      needSubscriptionToAccess: g
    } = (0, d.Z)(t.id),
    v = l.useCallback(() => {
      f.Z.handleVoiceConnect({
        channel: t,
        connected: e,
        needSubscriptionToAccess: g,
        locked: false
      })
    }, [t, e, g]);
  return e || !n ? null : (0, i.jsx)(o.sNh, {
    id: "join-thread-voice",
    label: a ? h.intl.string(h.t["0D/6Rz"]) : h.intl.string(h.t.My50nf),
    action: v
  })
}