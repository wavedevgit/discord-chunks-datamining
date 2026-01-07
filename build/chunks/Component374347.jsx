/** Chunk was on 86915 **/
/** chunk id: 374347, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk748780 = require("./748780.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk741361 = require("./741361.js"),
  Chunk856606 = require("./856606.jsx"),
  Chunk277053 = require("./277053.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk637378 = require("./637378.js");

function f() {
  let e = (0, a.e7)([u.Z], () => u.Z.advancedMode),
    [t] = l.useState(new r.Z.Value(+!!e));
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(o.izJ, {
      className: m.advancedModeDivider
    }), (0, i.jsx)(o.y5t, {
      component: (0, i.jsx)(s.zx, {
        look: s.zx.Looks.BLANK,
        color: s.zx.Colors.TRANSPARENT,
        onClick: function() {
          e ? r.Z.timing(t, {
            toValue: 0,
            duration: 250
          }).start(() => {
            (0, c.d$)(false)
          }) : ((0, c.d$)(true), r.Z.timing(t, {
            toValue: 1,
            duration: 250
          }).start())
        },
        children: (0, i.jsxs)(o.Text, {
          variant: "text-lg/semibold",
          className: m.advancedTitle,
          children: [g.intl.string(g.t.dYRsrm), (0, i.jsx)(h.Z, {
            expanded: e,
            className: m.titleCaret,
            width: 20,
            height: 20
          })]
        })
      }),
      children: e && (0, i.jsx)(r.Z.div, {
        style: {
          opacity: t
        },
        children: (0, i.jsx)(d.Z, {})
      })
    })]
  })
}