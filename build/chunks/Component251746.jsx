/** Chunk was on 92091 **/
/** chunk id: 251746, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk358221 = require("./358221.js"),
  Chunk66999 = require("./66999.js"),
  Chunk665906 = require("./665906.js"),
  Chunk979651 = require("./979651.js"),
  Chunk557135 = require("./557135.jsx"),
  Chunk388032 = require("./388032.jsx");

function v(t) {
  let n = (0, h.Y)(t),
    i = (0, s.e7)([Z.Z], () => Z.Z.isInChannel(t.id)),
    r = (0, s.e7)([Z.Z], () => !a().isEmpty(Z.Z.getVoiceStatesForChannel(t.id))),
    {
      needSubscriptionToAccess: v
    } = (0, c.Z)(t.id),
    m = (0, s.e7)([u.Z], () => u.Z.getChatOpen(t.id)),
    b = l.useCallback(() => {
      g.Z.handleVoiceConnect({
        channel: t,
        connected: i,
        needSubscriptionToAccess: v,
        locked: false
      })
    }, [t, i, v]);
  return i || !n ? null : (0, e.jsxs)(e.Fragment, {
    children: [(0, e.jsx)(d.sNh, {
      id: "join-thread-voice",
      label: r ? f.intl.string(f.t["0D/6Rz"]) : f.intl.string(f.t.My50nf),
      action: b
    }), r && !m && (0, e.jsx)(d.sNh, {
      id: "open-chat",
      label: f.intl.string(f.t.ZXxLQg),
      action: () => {
        o.Z.updateChatOpen(t.id, true)
      }
    })]
  })
}