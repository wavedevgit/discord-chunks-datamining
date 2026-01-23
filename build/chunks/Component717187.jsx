/** Chunk was on 39778 **/
/** chunk id: 717187, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk349435 = require("./349435.js"),
  Chunk178186 = require("./178186.js"),
  Chunk617641 = require("./617641.js"),
  Chunk937624 = require("./937624.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let t = (0, s.P)(e),
    n = (0, o.Lc)({
      location: "inappropriate_conversation_context_menu"
    });
  if (null === t || !n) return null;
  let {
    isTier1: u,
    isTier2: c
  } = t;
  return (0, r.jsxs)(r.Fragment, {
    children: [!u && (0, r.jsx)(i.Drp, {
      id: "mark-as-tier-1-inappro",
      label: d.intl.string(d.t.EuzCET),
      action: () => (0, a.Rw)(e.id, l._j.INAPPROPRIATE_CONVERSATION_TIER_1)
    }), !c && (0, r.jsx)(i.Drp, {
      id: "mark-as-tier-2-inappro",
      label: d.intl.string(d.t["tBw/1i"]),
      action: () => (0, a.Rw)(e.id, l._j.INAPPROPRIATE_CONVERSATION_TIER_2)
    })]
  })
}