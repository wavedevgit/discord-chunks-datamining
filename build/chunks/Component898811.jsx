/** Chunk was on 84264 **/
/** chunk id: 898811, original params: l,n,t (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk826308 = require("./826308.jsx"),
  Chunk985018 = require("./985018.jsx");

function d(l) {
  let {
    text: n,
    onSelect: t
  } = l, d = (0, i.A)(n);
  return r.isPlatformEmbedded ? (0, e.jsxs)(o.W1t, {
    navId: "text-context",
    onClose: a.Z_,
    "aria-label": s.intl.string(s.t.s285pq),
    onSelect: t,
    children: [(0, e.jsx)(o.rXV, {
      children: d
    }), (0, e.jsx)(o.rXV, {
      children: (0, e.jsx)(o.Drp, {
        id: "copy",
        label: s.intl.string(s.t.OpuAlK),
        action: () => c.Ay.copy(n)
      })
    })]
  }) : null
}