/** Chunk was on 78888 **/
/** chunk id: 270486, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk615300 = require("./615300.js"),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk702805 = require("./702805.js"),
  Chunk159495 = require("./159495.jsx"),
  Chunk176360 = require("./176360.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk272396 = require("./272396.js");

function p() {
  let e = (0, s.bG)([u.A], () => u.A.advancedMode),
    [t] = i.useState(new r.A.Value(+!!e));
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.cGx, {
      className: m.BQ
    }), (0, l.jsx)(o.Fmo, {
      component: (0, l.jsx)(a.$n, {
        look: a.$n.Looks.BLANK,
        color: a.$n.Colors.TRANSPARENT,
        onClick: function() {
          e ? r.A.timing(t, {
            toValue: 0,
            duration: 250
          }).start(() => {
            (0, c.E)(false)
          }) : ((0, c.E)(true), r.A.timing(t, {
            toValue: 1,
            duration: 250
          }).start())
        },
        children: (0, l.jsxs)(o.Text, {
          variant: "text-lg/semibold",
          className: m.Vt,
          children: [g.intl.string(g.t.dYRsrm), (0, l.jsx)(h.A, {
            expanded: e,
            className: m.yM,
            width: 20,
            height: 20
          })]
        })
      }),
      children: e && (0, l.jsx)(r.A.div, {
        style: {
          opacity: t
        },
        children: (0, l.jsx)(d.A, {})
      })
    })]
  })
}