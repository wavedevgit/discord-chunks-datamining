/** Chunk was on 21960 **/
/** chunk id: 999466, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk547972 = require("./547972.js"),
  Chunk435064 = require("./435064.js"),
  Chunk621781 = require("./621781.js"),
  Chunk39604 = require("./39604.js"),
  Chunk332325 = require("./332325.js"),
  Chunk388032 = require("./388032.jsx");

function p(t) {
  let {
    onSelect: n
  } = t, {
    clipsLength: i
  } = (0, e.cj)([r.Z], () => r.Z.getSettings()), p = (0, s.Z)();
  return (0, l.jsxs)(a.v2r, {
    navId: "clips-context",
    "aria-label": h.intl.string(h.t.J1hsY2),
    onClose: c.Zy,
    onSelect: n,
    children: [(0, l.jsx)(a.kSQ, {
      children: (0, l.jsx)(a.sNh, {
        id: "clips-duration",
        label: h.intl.string(h.t.OgfUio),
        children: p.map(t => {
          let {
            value: n,
            label: e
          } = t;
          return (0, l.jsx)(a.k5B, {
            id: "clips-duration-".concat(n),
            group: "clips-duration",
            label: e,
            action: () => (0, u.eU)(n),
            checked: n === i
          }, n)
        })
      })
    }), (0, l.jsx)(a.kSQ, {
      children: (0, l.jsx)(a.sNh, {
        id: "clips-settings",
        label: h.intl.string(h.t.J1hsY2),
        action: () => (0, o.Z)(d.Z.CLIPS)
      })
    })]
  })
}