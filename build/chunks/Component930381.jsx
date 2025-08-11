/** Chunk was on 92780 **/
/** chunk id: 930381, original params: t,a,e (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk13245 = require("./13245.js"),
  Chunk145597 = require("./145597.js"),
  Chunk757744 = require("./757744.js"),
  Chunk388032 = require("./388032.jsx");

function c(t) {
  let {
    onSelect: a,
    layoutId: e = s.OVERLAY_LAYOUT_ID,
    version: c
  } = t;
  return (0, n.jsx)(i.v2r, {
    navId: "overlay",
    onClose: l.Zy,
    "aria-label": u.intl.string(u.t.tPfVWl),
    onSelect: a,
    children: (0, n.jsx)(i.sNh, {
      id: "reset",
      label: u.intl.string(u.t["hW+EMj"]),
      action: t => {
        t.stopPropagation(), r.Z.resetDefaultLayout(e, null != c ? c : o.bv)
      }
    })
  })
}