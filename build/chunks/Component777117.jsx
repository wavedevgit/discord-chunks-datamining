/** Chunk was on 42402 **/
/** chunk id: 777117, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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

function m() {
  let e = (0, d.b)(),
    t = (0, l.bG)([a.A], () => a.A.getSubsection()),
    n = null != t && e.some(e => e.id === t) ? t : e[0].id;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.Heading, {
      className: f.R_,
      variant: "heading-xl/semibold",
      children: g.intl.string(g.t.URyqtP)
    }), (0, r.jsx)(i.VQ0, {
      className: f.$H,
      selectedItem: n,
      onItemSelect: e => {
        s.A.setSection(h.nc_.GAMES, e)
      },
      orientation: "horizontal",
      type: "top",
      look: "brand",
      children: e.map(e => (0, r.jsxs)(i.VQ0.Item, {
        className: f.Mf,
        id: e.id,
        "aria-label": e.title,
        children: [(0, r.jsx)(e.icon, {
          className: f.Ll,
          color: "currentColor"
        }), (0, r.jsx)("div", {
          className: f.cq,
          children: e.title
        })]
      }, e.id))
    }), (() => {
      switch (n) {
        case p.J.OVERLAY:
          return (0, r.jsx)(u.Ay, {});
        case p.J.ACTIVITY_PRIVACY:
          return (0, r.jsx)(o.Ay, {});
        case p.J.MY_GAMES:
        default:
          return (0, r.jsx)(c.Ay, {
            className: f.rf,
            showHeader: false
          })
      }
    })()]
  })
}