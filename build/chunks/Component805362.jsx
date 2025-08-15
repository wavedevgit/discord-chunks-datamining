/** Chunk was on 96473 **/
/** chunk id: 805362, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk358085 = require("./358085.js"),
  Chunk905041 = require("./905041.jsx"),
  Chunk388032 = require("./388032.jsx");

function u(t) {
  let {
    href: n,
    textContent: e,
    onSelect: u
  } = t, c = (0, o.Z)(n, e);
  return a.isPlatformEmbedded && null != c ? (0, l.jsx)(i.v2r, {
    navId: "image-context",
    onClose: r.Zy,
    "aria-label": s.intl.string(s.t.Zow2V1),
    onSelect: u,
    children: (0, l.jsx)(i.kSQ, {
      children: c
    })
  }) : null
}