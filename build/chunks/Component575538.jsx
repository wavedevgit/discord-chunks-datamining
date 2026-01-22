/** Chunk was on 44751 **/
/** chunk id: 575538, original params: t,l,i (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk725177 = require("./725177.js"),
  Chunk274372 = require("./274372.js"),
  Chunk692329 = require("./692329.js"),
  Chunk399925 = require("./399925.js"),
  Chunk857266 = require("./857266.js"),
  Chunk985018 = require("./985018.jsx");

function h(t) {
  let {
    onSelect: l
  } = t, {
    clipsLength: i
  } = (0, e.cf)([o.A], () => o.A.getSettings()), h = (0, s.A)();
  return (0, n.jsxs)(a.W1t, {
    navId: "clips-context",
    "aria-label": p.intl.string(p.t.J1hsY2),
    onClose: r.Z_,
    onSelect: l,
    children: [(0, n.jsx)(a.rXV, {
      children: (0, n.jsx)(a.Drp, {
        id: "clips-duration",
        label: p.intl.string(p.t.OgfUio),
        children: h.map(t => {
          let {
            value: l,
            label: e
          } = t;
          return (0, n.jsx)(a.iDA, {
            id: "clips-duration-".concat(l),
            group: "clips-duration",
            label: e,
            action: () => (0, u.h$)(l),
            checked: l === i
          }, l)
        })
      })
    }), (0, n.jsx)(a.rXV, {
      children: (0, n.jsx)(a.Drp, {
        id: "clips-settings",
        label: p.intl.string(p.t.J1hsY2),
        action: () => (0, c.A)(d.J.CLIPS)
      })
    })]
  })
}