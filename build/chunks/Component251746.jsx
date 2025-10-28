/** Chunk was on 89250 **/
/** chunk id: 251746, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk358221 = require("./358221.js"),
  Chunk66999 = require("./66999.js"),
  Chunk665906 = require("./665906.js"),
  Chunk979651 = require("./979651.js"),
  Chunk557135 = require("./557135.jsx"),
  Chunk388032 = require("./388032.jsx");

function m(t) {
  let n = (0, h.Y)(t),
    e = (0, s.e7)([f.Z], () => f.Z.isInChannel(t.id)),
    l = (0, s.e7)([f.Z], () => !r().isEmpty(f.Z.getVoiceStatesForChannel(t.id))),
    {
      needSubscriptionToAccess: m
    } = (0, c.Z)(t.id),
    Z = (0, s.e7)([u.Z], () => u.Z.getChatOpen(t.id)),
    b = a.useCallback(() => {
      g.Z.handleVoiceConnect({
        channel: t,
        connected: e,
        needSubscriptionToAccess: m,
        locked: false
      })
    }, [t, e, m]);
  return e || !n ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(o.sNh, {
      id: "join-thread-voice",
      label: l ? v.intl.string(v.t["0D/6Rz"]) : v.intl.string(v.t.My50nf),
      action: b
    }), l && !Z && (0, i.jsx)(o.sNh, {
      id: "open-chat",
      label: v.intl.string(v.t.ZXxLQg),
      action: () => {
        d.Z.updateChatOpen(t.id, true)
      }
    })]
  })
}