/** Chunk was on 92843 **/
/** chunk id: 254790, original params: t,a,e (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk684013 = require("./684013.js"),
  Chunk9302 = require("./9302.js");
require("./644434.js");
var Chunk985018 = require("./985018.jsx");

function u(t) {
  let {
    onSelect: a,
    layoutId: e = s.OVERLAY_LAYOUT_ID,
    version: u
  } = t;
  return (0, r.jsx)(i.W1t, {
    navId: "overlay",
    onClose: n.Z_,
    "aria-label": o.intl.string(o.t.tPfVWi),
    onSelect: a,
    children: (0, r.jsx)(i.Drp, {
      id: "reset",
      label: o.intl.string(o.t["hW+EMu"]),
      action: t => {
        t.stopPropagation(), l.A.resetDefaultLayout(e, null != u ? u : 0)
      }
    })
  })
}