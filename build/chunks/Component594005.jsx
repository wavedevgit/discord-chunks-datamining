/** Chunk was on 48118 **/
/** chunk id: 594005, original params: e,s,i (module,exports,require) **/
require.d(exports, {
  default: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk995102 = require("./995102.jsx"),
  Chunk288104 = require("./288104.jsx"),
  Chunk661504 = require("./661504.jsx"),
  Chunk57907 = require("./57907.jsx"),
  Chunk375500 = require("./375500.jsx"),
  Chunk769591 = require("./769591.js"),
  Chunk95701 = require("./95701.js"),
  Chunk985018 = require("./985018.jsx");

function x(e) {
  let {
    channel: s,
    onSelect: i
  } = e, x = (0, o.b)(s), b = (0, c.A0)(s), f = (0, h.A)(s), j = (0, r.Ay)(s), k = (0, d.A)(s), A = (0, l.os)("NotificationsInboxMessageContextMenu") && p.B4.has(s.type), C = s.isThread() ? (0, n.jsx)(t.rXV, {
    children: f
  }) : A ? b : (0, n.jsx)(t.rXV, {
    children: x
  });
  return (0, n.jsxs)(t.W1t, {
    navId: "notifications-inbox-message-context",
    onClose: a.Z_,
    "aria-label": u.intl.string(u.t.Xm41aV),
    onSelect: i,
    children: [(0, n.jsx)(t.rXV, {
      children: s.isThread() ? k : j
    }), C]
  })
}