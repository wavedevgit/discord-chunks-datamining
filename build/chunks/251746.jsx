/** Chunk was on 46154 **/
/** chunk id: 251746, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk66999 = require("./66999.js"),
  Chunk665906 = require("./665906.js"),
  Chunk979651 = require("./979651.js"),
  Chunk557135 = require("./557135.js"),
  Chunk388032 = require("./388032.js");

function v(t) {
  let n = (0, u.Y)(t),
    e = (0, o.e7)([c.Z], () => c.Z.isInChannel(t.id)),
    l = (0, o.e7)([c.Z], () => !r().isEmpty(c.Z.getVoiceStatesForChannel(t.id))),
    {
      needSubscriptionToAccess: v
    } = (0, d.Z)(t.id),
    g = a.useCallback(() => {
      f.Z.handleVoiceConnect({
        channel: t,
        connected: e,
        needSubscriptionToAccess: v,
        locked: false
      })
    }, [t, e, v]);
  return e || !n ? null : <s.sNh id={"join-thread-voice"} label={l ? h.intl.string(h.t["0D/6R0"]) : h.intl.string(h.t.My50nZ)} action={g} />
}