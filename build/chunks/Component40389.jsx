/** Chunk was on 88974 **/
/** chunk id: 40389, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk367513 = require("./367513.js"),
  Chunk313961 = require("./313961.js"),
  Chunk721592 = require("./721592.js"),
  Chunk406704 = require("./406704.js"),
  Chunk977997 = require("./977997.js"),
  Chunk262763 = require("./262763.jsx"),
  Chunk985018 = require("./985018.jsx");

function v(t) {
  let n = (0, h._M)(t),
    i = (0, d.bG)([A.A], () => A.A.isInChannel(t.id)),
    l = (0, d.bG)([A.A], () => !a().isEmpty(A.A.getVoiceStatesForChannel(t.id))),
    {
      needSubscriptionToAccess: v
    } = (0, c.A)(t.id),
    p = (0, d.bG)([u.A], () => u.A.getChatOpen(t.id)),
    m = r.useCallback(() => {
      g.A.handleVoiceConnect({
        channel: t,
        connected: i,
        needSubscriptionToAccess: v,
        locked: false
      })
    }, [t, i, v]);
  return i || !n ? null : (0, e.jsxs)(e.Fragment, {
    children: [(0, e.jsx)(s.Drp, {
      id: "join-thread-voice",
      label: l ? b.intl.string(b.t["0D/6Rz"]) : b.intl.string(b.t.My50nf),
      action: m
    }), l && !p && (0, e.jsx)(s.Drp, {
      id: "open-chat",
      label: b.intl.string(b.t.ZXxLQg),
      action: () => {
        o.A.updateChatOpen(t.id, true)
      }
    })]
  })
}