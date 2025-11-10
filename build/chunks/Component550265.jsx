/** Chunk was on 74922 **/
/** chunk id: 550265, original params: n,e,i (module,exports,require) **/
require.d(exports, {
  default: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk776568 = require("./776568.jsx"),
  Chunk218035 = require("./218035.jsx"),
  Chunk775666 = require("./775666.jsx"),
  Chunk214906 = require("./214906.jsx"),
  Chunk612856 = require("./612856.jsx"),
  Chunk423589 = require("./423589.js"),
  Chunk131704 = require("./131704.js"),
  Chunk388032 = require("./388032.jsx");

function x(n) {
  let {
    channel: e,
    onSelect: i
  } = n, x = (0, o.c)(e), k = (0, r.EQ)(e), b = (0, h.Z)(e), f = (0, c.ZP)(e), j = (0, d.Z)(e), C = (0, l.Mn)("NotificationsInboxMessageContextMenu") && u.$N.has(e.type), Q = e.isThread() ? (0, s.jsx)(t.kSQ, {
    children: b
  }) : C ? k : (0, s.jsx)(t.kSQ, {
    children: x
  });
  return (0, s.jsxs)(t.v2r, {
    navId: "notifications-inbox-message-context",
    onClose: a.Zy,
    "aria-label": p.intl.string(p.t.Xm41aV),
    onSelect: i,
    children: [(0, s.jsx)(t.kSQ, {
      children: e.isThread() ? j : f
    }), Q]
  })
}