/** Chunk was on 89250 **/
/** chunk id: 251746, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => Z
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function Z(t) {
  let n = (0, h.Y)(t),
    e = (0, s.e7)([f.Z], () => f.Z.isInChannel(t.id)),
    a = (0, s.e7)([f.Z], () => !r().isEmpty(f.Z.getVoiceStatesForChannel(t.id))),
    {
      needSubscriptionToAccess: Z
    } = (0, c.Z)(t.id),
    m = (0, s.e7)([u.Z], () => u.Z.getChatOpen(t.id)),
    b = l.useCallback(() => {
      g.Z.handleVoiceConnect({
        channel: t,
        connected: e,
        needSubscriptionToAccess: Z,
        locked: false
      })
    }, [t, e, Z]);
  return e || !n ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(o.sNh, {
      id: "join-thread-voice",
      label: a ? v.intl.string(v.t["0D/6Rz"]) : v.intl.string(v.t.My50nf),
      action: b
    }), a && !m && (0, i.jsx)(o.sNh, {
      id: "open-chat",
      label: v.intl.string(v.t.ZXxLQg),
      action: () => {
        d.Z.updateChatOpen(t.id, true)
      }
    })]
  })
}