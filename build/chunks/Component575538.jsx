/** Chunk was on 44751 **/
/** chunk id: 575538, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk274372 = require("./274372.js"),
  Chunk692329 = require("./692329.js"),
  Chunk399925 = require("./399925.js"),
  Chunk985018 = require("./985018.jsx");

function g(t) {
  let {
    onSelect: i
  } = t, {
    clipsLength: n
  } = (0, e.cf)([c.A], () => c.A.getSettings()), g = (0, u.A)();
  return (0, l.jsxs)(a.W1t, {
    "data-menu-migrated": true,
    navId: "clips-context",
    "aria-label": p.intl.string(p.t.J1hsY2),
    onClose: r.Z_,
    onSelect: i,
    children: [(0, l.jsx)(a.rXV, {
      children: (0, l.jsx)(a.Drp, {
        id: "clips-duration",
        label: p.intl.string(p.t.OgfUio),
        children: g.map(t => {
          let {
            value: i,
            label: e
          } = t;
          return (0, l.jsx)(a.iDA, {
            id: "clips-duration-".concat(i),
            group: "clips-duration",
            label: e,
            action: () => (0, d.h$)(i),
            checked: i === n
          }, i)
        })
      })
    }), (0, l.jsx)(a.rXV, {
      children: (0, l.jsx)(a.Drp, {
        id: "clips-settings",
        label: p.intl.string(p.t.J1hsY2),
        action: () => (0, o.openUserSettings)(s.X.CLIPS_PANEL)
      })
    })]
  })
}