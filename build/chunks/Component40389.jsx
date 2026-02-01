/** Chunk was on 78441 **/
/** chunk id: 40389, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(t) {
  let e = (0, A._M)(t),
    n = (0, o.bG)([f.A], () => f.A.isInChannel(t.id)),
    l = (0, o.bG)([f.A], () => !a().isEmpty(f.A.getVoiceStatesForChannel(t.id))),
    {
      needSubscriptionToAccess: p
    } = (0, c.A)(t.id),
    v = (0, o.bG)([u.A], () => u.A.getChatOpen(t.id)),
    b = r.useCallback(() => {
      g.A.handleVoiceConnect({
        channel: t,
        connected: n,
        needSubscriptionToAccess: p,
        locked: false
      })
    }, [t, n, p]);
  return n || !e ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(s.Drp, {
      id: "join-thread-voice",
      label: l ? h.intl.string(h.t["0D/6Rz"]) : h.intl.string(h.t.My50nf),
      action: b
    }), l && !v && (0, i.jsx)(s.Drp, {
      id: "open-chat",
      label: h.intl.string(h.t.ZXxLQg),
      action: () => {
        d.A.updateChatOpen(t.id, true)
      }
    })]
  })
}