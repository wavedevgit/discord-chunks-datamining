/** Chunk was on 9606 **/
/** chunk id: 987578, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => r
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk560067 = require("./560067.js"),
  Chunk675999 = require("./675999.js"),
  Chunk388032 = require("./388032.jsx");

function r(t) {
  let {
    onSelect: i
  } = t;
  return (0, e.jsxs)(l.v2r, {
    navId: "guild-context",
    "aria-label": d.intl.string(d.t.HpQykZ),
    onClose: a.Zy,
    onSelect: i,
    children: [(0, e.jsx)(l.sNh, {
      id: "join",
      label: d.intl.string(d.t.yRjK4u),
      action: () => o.Z.openCreateGuildModal({
        initialSlide: s._m.JOIN_GUILD,
        location: "Guild List - ContextMenu"
      })
    }), (0, e.jsx)(l.sNh, {
      id: "create",
      label: d.intl.string(d.t.B44MTk),
      action: () => o.Z.openCreateGuildModal({
        location: "Guild List - ContextMenu"
      })
    })]
  })
}