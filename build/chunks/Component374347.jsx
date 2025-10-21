/** Chunk was on 86915 **/
/** chunk id: 374347, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk748780 = require("./748780.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk741361 = require("./741361.js"),
  Chunk856606 = require("./856606.jsx"),
  Chunk277053 = require("./277053.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk657254 = require("./657254.js");

function m() {
  let e = (0, Chunk442837.e7)([Chunk277053.Z], () => Chunk277053.Z.advancedMode),
    [t] = Chunk647438.useState(new Chunk748780.Z.Value(+!!module));
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk481060.izJ, {
      className: Chunk657254.advancedModeDivider
    }), (0, Chunk951288.jsx)(Chunk481060.y5t, {
      component: (0, Chunk951288.jsx)(Chunk755721.zx, {
        look: Chunk755721.zx.Looks.BLANK,
        color: Chunk755721.zx.Colors.TRANSPARENT,
        onClick: function() {
          module ? Chunk748780.Z.timing(exports, {
            toValue: 0,
            duration: 250
          }).start(() => {
            (0, Chunk741361.d$)(false)
          }) : ((0, Chunk741361.d$)(true), Chunk748780.Z.timing(exports, {
            toValue: 1,
            duration: 250
          }).start())
        },
        children: (0, Chunk951288.jsxs)(Chunk481060.Text, {
          variant: "text-lg/semibold",
          className: Chunk657254.advancedTitle,
          children: [Chunk388032.intl.string(Chunk388032.t.dYRsrm), (0, Chunk951288.jsx)(Chunk259580.Z, {
            expanded: module,
            className: Chunk657254.titleCaret,
            width: 20,
            height: 20
          })]
        })
      }),
      children: module && (0, Chunk951288.jsx)(Chunk748780.Z.div, {
        style: {
          opacity: exports
        },
        children: (0, Chunk951288.jsx)(Chunk856606.Z, {})
      })
    })]
  })
}