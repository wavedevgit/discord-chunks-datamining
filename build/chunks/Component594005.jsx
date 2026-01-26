/** Chunk was on 48118 **/
/** chunk id: 594005, original params: e,s,t (module,exports,require) **/
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
    onSelect: t
  } = e, x = (0, d.b)(s), b = (0, o.A0)(s), f = (0, h.A)(s), g = (0, r.Ay)(s), j = (0, c.A)(s), k = (0, l.os)("NotificationsInboxMessageContextMenu") && u.B4.has(s.type), m = s.isThread() ? (0, i.jsx)(n.rXV, {
    children: f
  }) : k ? b : (0, i.jsx)(n.rXV, {
    children: x
  });
  return (0, i.jsxs)(n.W1t, {
    "data-menu-migrated": true,
    navId: "notifications-inbox-message-context",
    onClose: a.Z_,
    "aria-label": p.intl.string(p.t.Xm41aV),
    onSelect: t,
    children: [(0, i.jsx)(n.rXV, {
      children: s.isThread() ? j : g
    }), m]
  })
}