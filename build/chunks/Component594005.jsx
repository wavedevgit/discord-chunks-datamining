/** Chunk was on 48118 **/
/** chunk id: 594005, original params: e,i,n (module,exports,require) **/
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
    channel: i,
    onSelect: n
  } = e, x = (0, o.b)(i), b = (0, d.A0)(i), f = (0, h.A)(i), g = (0, r.Ay)(i), j = (0, c.A)(i), k = (0, l.os)("NotificationsInboxMessageContextMenu") && u.B4.has(i.type), m = i.isThread() ? (0, s.jsx)(t.rXV, {
    children: f
  }) : k ? b : (0, s.jsx)(t.rXV, {
    children: x
  });
  return (0, s.jsxs)(t.W1t, {
    "data-menu-migration-ready": true,
    navId: "notifications-inbox-message-context",
    onClose: a.Z_,
    "aria-label": p.intl.string(p.t.Xm41aV),
    onSelect: n,
    children: [(0, s.jsx)(t.rXV, {
      children: i.isThread() ? j : g
    }), m]
  })
}