/** Chunk was on 86915 **/
/** chunk id: 27544, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk748780 = require("./748780.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk741361 = require("./741361.js"),
  Chunk856606 = require("./856606.js"),
  Chunk277053 = require("./277053.js"),
  Chunk259580 = require("./259580.js"),
  Chunk388032 = require("./388032.js"),
  Chunk241756 = require("./241756.js");

function p() {
  let e = (0, Chunk442837.e7)([Chunk277053.Z], () => Chunk277053.Z.advancedMode),
    [t] = Chunk73800.useState(new Chunk748780.Z.Value(+!!module));
  return <Chunk255367.Fragment>{<Chunk481060.$i$ className={Chunk241756.advancedModeDivider} />}{<Chunk481060.y5t component={(0, Chunk255367.jsx)(Chunk755721.zx, {
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
        children: (0, Chunk255367.jsxs)(Chunk481060.vwX, {
          tag: "h1",
          className: Chunk241756.advancedTitle,
          children: [Chunk388032.intl.string(Chunk388032.t.dYRsrq), (0, Chunk255367.jsx)(Chunk259580.Z, {
            expanded: module,
            className: Chunk241756.titleCaret,
            width: 20,
            height: 20
          })]
        })
      })}>{module && (0, Chunk255367.jsx)(Chunk748780.Z.div, {
        style: {
          opacity: exports
        },
        children: (0, Chunk255367.jsx)(Chunk856606.Z, {})
      })}</Chunk481060.y5t>}</Chunk255367.Fragment>
}