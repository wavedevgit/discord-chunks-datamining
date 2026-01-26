/** Chunk was on 12123 **/
/** chunk id: 263702, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
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
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let p = (0, Chunk358367.A)(function(e) {
  let {
    user: t,
    analyticsContext: n,
    onSelect: c
  } = e, o = (0, d.A)({
    userId: t.id
  }), p = (0, s.A)({
    id: t.id,
    label: f.intl.string(f.t["/AXYnE"])
  }), A = (0, u.A)(t.id), O = t.isNonUserBot();
  return (0, r.jsx)(a.A, {
    context: n,
    object: b.ZSU.CONTEXT_MENU,
    children: (0, r.jsxs)(i.W1t, {
      "data-menu-migrated": true,
      navId: "user-context",
      onClose: l.Z_,
      "aria-label": f.intl.string(f.t.liqwPJ),
      onSelect: c,
      children: [(0, r.jsxs)(i.rXV, {
        children: [!O && o, !O && A]
      }), (0, r.jsx)(i.rXV, {
        children: p
      })]
    })
  })
}, [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.BANNED_USER_MENU])