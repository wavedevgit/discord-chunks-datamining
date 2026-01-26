/** Chunk was on 76926 **/
/** chunk id: 422189, original params: e,l,n (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk358367 = require("./358367.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk301541 = require("./301541.jsx"),
  Chunk243949 = require("./243949.jsx"),
  Chunk180798 = require("./180798.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let f = (0, Chunk358367.A)(function(e) {
  let {
    user: l,
    guildId: n,
    analyticsContext: c,
    onSelect: s
  } = e, f = (0, u.A)({
    userId: l.id,
    guildId: n
  }), p = (0, A.A)(l.id, n), h = (0, a.A)({
    id: l.id,
    label: b.intl.string(b.t["/AXYnE"])
  }), j = (0, d.A)(l.id), O = l.isNonUserBot();
  return (0, r.jsx)(o.A, {
    context: c,
    object: g.ZSU.CONTEXT_MENU,
    children: (0, r.jsxs)(t.W1t, {
      "data-menu-mixed": true,
      navId: "user-context",
      onClose: i.Z_,
      "aria-label": b.intl.string(b.t.liqwPJ),
      onSelect: s,
      children: [(0, r.jsxs)(t.rXV, {
        children: [!O && f, !O && j]
      }), (0, r.jsx)(t.rXV, {
        children: !O && p
      }), (0, r.jsx)(t.rXV, {
        children: h
      })]
    })
  })
}, [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.AUDIT_LOG_USER_MENU])