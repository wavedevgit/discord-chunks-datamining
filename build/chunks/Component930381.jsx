/** Chunk was on 92780 **/
/** chunk id: 930381, original params: t,a,e (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk13245 = require("./13245.js"),
  Chunk145597 = require("./145597.js"),
  Chunk757744 = require("./757744.js"),
  Chunk388032 = require("./388032.jsx");

function c(t) {
  let {
    onSelect: a,
    layoutId: e = l.OVERLAY_LAYOUT_ID,
    version: c
  } = t;
  return (0, n.jsx)(i.v2r, {
    navId: "overlay",
    onClose: r.Zy,
    "aria-label": u.intl.string(u.t.tPfVWi),
    onSelect: a,
    children: (0, n.jsx)(i.sNh, {
      id: "reset",
      label: u.intl.string(u.t["hW+EMu"]),
      action: t => {
        t.stopPropagation(), s.Z.resetDefaultLayout(e, null != c ? c : o.bv)
      }
    })
  })
}