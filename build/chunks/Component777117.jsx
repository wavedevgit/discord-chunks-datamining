/** Chunk was on web.js **/
/** chunk id: 777117, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk252452 = require("./252452.js"),
  Chunk314695 = require("./314695.jsx"),
  Chunk628965 = require("./628965.js"),
  Chunk513664 = require("./513664.jsx"),
  Chunk768908 = require("./768908.jsx"),
  Chunk790076 = require("./790076.jsx"),
  Chunk523418 = require("./523418.js"),
  Chunk857266 = require("./857266.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk461225 = require("./461225.js");

function g() {
  let e = (0, f.b)(),
    t = (0, i.bG)([l.A], () => l.A.getSubsection()),
    n = null != t && e.some(e => e.id === t) ? t : e[0].id,
    g = e => {
      s.A.setSection(_.nc_.GAMES, e)
    },
    E = () => {
      switch (n) {
        case p.J.CLIPS:
          return (0, r.jsx)(o.A, {});
        case p.J.OVERLAY:
          return (0, r.jsx)(d.Ay, {});
        case p.J.ACTIVITY_PRIVACY:
          return (0, r.jsx)(c.Ay, {});
        case p.J.MY_GAMES:
        default:
          return (0, r.jsx)(u.Ay, {
            className: m.rf,
            showHeader: false
          })
      }
    };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Heading, {
      className: m.R_,
      variant: "heading-xl/semibold",
      children: h.intl.string(h.t.URyqtP)
    }), (0, r.jsx)(a.VQ0, {
      className: m.$H,
      selectedItem: n,
      onItemSelect: g,
      orientation: "horizontal",
      type: "top",
      look: "brand",
      children: e.map(e => (0, r.jsxs)(a.VQ0.Item, {
        className: m.Mf,
        id: e.id,
        "aria-label": e.title,
        children: [(0, r.jsx)(e.icon, {
          className: m.Ll,
          color: "currentColor"
        }), (0, r.jsx)("div", {
          className: m.cq,
          children: e.title
        })]
      }, e.id))
    }), E()]
  })
}