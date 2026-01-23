/** Chunk was on 44751 **/
/** chunk id: 575538, original params: t,i,l (module,exports,require) **/
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
    onSelect: i
  } = t, {
    clipsLength: l
  } = (0, a.cf)([c.A], () => c.A.getSettings()), h = (0, s.A)();
  return (0, n.jsxs)(e.W1t, {
    "data-menu-migration-ready": true,
    navId: "clips-context",
    "aria-label": p.intl.string(p.t.J1hsY2),
    onClose: r.Z_,
    onSelect: i,
    children: [(0, n.jsx)(e.rXV, {
      children: (0, n.jsx)(e.Drp, {
        id: "clips-duration",
        label: p.intl.string(p.t.OgfUio),
        children: h.map(t => {
          let {
            value: i,
            label: a
          } = t;
          return (0, n.jsx)(e.iDA, {
            id: "clips-duration-".concat(i),
            group: "clips-duration",
            label: a,
            action: () => (0, u.h$)(i),
            checked: i === l
          }, i)
        })
      })
    }), (0, n.jsx)(e.rXV, {
      children: (0, n.jsx)(e.Drp, {
        id: "clips-settings",
        label: p.intl.string(p.t.J1hsY2),
        action: () => (0, o.A)(d.J.CLIPS)
      })
    })]
  })
}