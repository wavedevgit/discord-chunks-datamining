/** Chunk was on 3865 **/
/** chunk id: 745763, original params: n,t,l (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk89013 = require("./89013.jsx"),
  Chunk388032 = require("./388032.jsx");

function d(n) {
  let {
    text: t,
    onSelect: l
  } = n, d = (0, s.Z)(t);
  return c.isPlatformEmbedded ? (0, e.jsxs)(o.v2r, {
    navId: "text-context",
    onClose: a.Zy,
    "aria-label": r.intl.string(r.t.s285pq),
    onSelect: l,
    children: [(0, e.jsx)(o.kSQ, {
      children: d
    }), (0, e.jsx)(o.kSQ, {
      children: (0, e.jsx)(o.sNh, {
        id: "copy",
        label: r.intl.string(r.t.OpuAlK),
        action: () => i.ZP.copy(t)
      })
    })]
  }) : null
}