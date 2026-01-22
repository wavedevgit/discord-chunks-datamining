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
    analyticsContext: a,
    onSelect: d
  } = e, f = (0, u.A)({
    userId: l.id,
    guildId: n
  }), h = (0, A.A)(l.id, n), p = (0, s.A)({
    id: l.id,
    label: g.intl.string(g.t["/AXYnE"])
  }), O = (0, c.A)(l.id), j = l.isNonUserBot();
  return (0, t.jsx)(o.A, {
    context: a,
    object: b.ZSU.CONTEXT_MENU,
    children: (0, t.jsxs)(r.W1t, {
      navId: "user-context",
      onClose: i.Z_,
      "aria-label": g.intl.string(g.t.liqwPJ),
      onSelect: d,
      children: [(0, t.jsxs)(r.rXV, {
        children: [!j && f, !j && O]
      }), (0, t.jsx)(r.rXV, {
        children: !j && h
      }), (0, t.jsx)(r.rXV, {
        children: p
      })]
    })
  })
}, [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.AUDIT_LOG_USER_MENU])