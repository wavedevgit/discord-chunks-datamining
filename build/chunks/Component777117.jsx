/** Chunk was on web.js **/
/** chunk id: 777117, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
    t = (0, i.bG)([o.A], () => o.A.getSubsection()),
    n = null != t && e.some(e => e.id === t) ? t : e[0].id,
    m = e => {
      s.A.setSection(p.nc_.GAMES, e)
    },
    g = () => {
      switch (n) {
        case f.J.OVERLAY:
          return (0, r.jsx)(u.Ay, {});
        case f.J.ACTIVITY_PRIVACY:
          return (0, r.jsx)(l.Ay, {});
        case f.J.MY_GAMES:
        default:
          return (0, r.jsx)(c.Ay, {
            className: h.rf,
            showHeader: false
          })
      }
    };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Heading, {
      className: h.R_,
      variant: "heading-xl/semibold",
      children: _.intl.string(_.t.URyqtP)
    }), (0, r.jsx)(a.VQ0, {
      className: h.$H,
      selectedItem: n,
      onItemSelect: m,
      orientation: "horizontal",
      type: "top",
      look: "brand",
      children: e.map(e => (0, r.jsxs)(a.VQ0.Item, {
        className: h.Mf,
        id: e.id,
        "aria-label": e.title,
        children: [(0, r.jsx)(e.icon, {
          className: h.Ll,
          color: "currentColor"
        }), (0, r.jsx)("div", {
          className: h.cq,
          children: e.title
        })]
      }, e.id))
    }), g()]
  })
}