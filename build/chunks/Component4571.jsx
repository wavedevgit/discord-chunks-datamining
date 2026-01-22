/** Chunk was on 17288 **/
/** chunk id: 4571, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk272613 = require("./272613.js"),
  Chunk819638 = require("./819638.js"),
  Chunk985018 = require("./985018.jsx");

function s(t) {
  let {
    onSelect: i
  } = t;
  return (0, e.jsxs)(l.W1t, {
    navId: "guild-context",
    "aria-label": r.intl.string(r.t.HpQykc),
    onClose: a.Z_,
    onSelect: i,
    children: [(0, e.jsx)(l.Drp, {
      id: "join",
      label: r.intl.string(r.t.yRjK4p),
      action: () => o.A.openCreateGuildModal({
        initialSlide: d.oS.JOIN_GUILD,
        location: "Guild List - ContextMenu"
      })
    }), (0, e.jsx)(l.Drp, {
      id: "create",
      label: r.intl.string(r.t.B44MTm),
      action: () => o.A.openCreateGuildModal({
        location: "Guild List - ContextMenu"
      })
    })]
  })
}