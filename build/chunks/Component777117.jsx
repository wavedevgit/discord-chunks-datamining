/** Chunk was on 82575 **/
/** chunk id: 777117, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk252452 = require("./252452.js"),
  Chunk628965 = require("./628965.js"),
  Chunk513664 = require("./513664.jsx"),
  Chunk768908 = require("./768908.jsx"),
  Chunk790076 = require("./790076.jsx"),
  Chunk523418 = require("./523418.js"),
  Chunk857266 = require("./857266.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk461225 = require("./461225.js");

function A() {
  let e = (0, u.b)(),
    t = (0, s.bG)([a.A], () => a.A.getSubsection()),
    n = null != t && e.some(e => e.id === t) ? t : e[0].id;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.Heading, {
      className: p.R_,
      variant: "heading-xl/semibold",
      children: x.intl.string(x.t.URyqtP)
    }), (0, i.jsx)(l.VQ0, {
      className: p.$H,
      selectedItem: n,
      onItemSelect: e => {
        r.A.setSection(h.nc_.GAMES, e)
      },
      orientation: "horizontal",
      type: "top",
      look: "brand",
      children: e.map(e => (0, i.jsxs)(l.VQ0.Item, {
        className: p.Mf,
        id: e.id,
        "aria-label": e.title,
        children: [(0, i.jsx)(e.icon, {
          className: p.Ll,
          color: "currentColor"
        }), (0, i.jsx)("div", {
          className: p.cq,
          children: e.title
        })]
      }, e.id))
    }), (() => {
      switch (n) {
        case g.J.OVERLAY:
          return (0, i.jsx)(d.Ay, {});
        case g.J.ACTIVITY_PRIVACY:
          return (0, i.jsx)(o.Ay, {});
        case g.J.MY_GAMES:
        default:
          return (0, i.jsx)(c.Ay, {
            className: p.rf,
            showHeader: false
          })
      }
    })()]
  })
}