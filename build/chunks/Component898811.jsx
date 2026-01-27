/** Chunk was on 84264 **/
/** chunk id: 898811, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk826308 = require("./826308.jsx"),
  Chunk985018 = require("./985018.jsx");

function s(n) {
  let {
    text: t,
    onSelect: e
  } = n, s = (0, r.A)(t);
  return c.isPlatformEmbedded ? (0, l.jsxs)(o.W1t, {
    "data-menu-migrated-auto": true,
    navId: "text-context",
    onClose: a.Z_,
    "aria-label": d.intl.string(d.t.s285pq),
    onSelect: e,
    children: [(0, l.jsx)(o.rXV, {
      children: s
    }), (0, l.jsx)(o.rXV, {
      children: (0, l.jsx)(o.Drp, {
        id: "copy",
        label: d.intl.string(d.t.OpuAlK),
        action: () => i.Ay.copy(t)
      })
    })]
  }) : null
}