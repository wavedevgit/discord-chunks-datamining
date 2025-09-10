/** Chunk was on web.js **/
/** chunk id: 168463, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk982629 = require("./982629.js");
let u = false;

function d() {
  let [e, t] = Chunk647438.useState(false), n = Chunk647438.useCallback(() => {
    exports(true)
  }, []), d = Chunk647438.useCallback(() => {
    exports(true)
  }, []);
  return (Chunk647438.useEffect(() => () => {
    module && (u = true)
  }, [module]), module) ? (0, Chunk951288.jsx)(Chunk502762.Z.Overlay, {
    className: Chunk982629.container,
    children: (0, Chunk951288.jsx)("div", {
      className: Chunk982629.content,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: Chunk982629.description,
        children: Chunk388032.intl.string(Chunk388032.t.X0TrNT)
      })
    })
  }) : (0, Chunk951288.jsx)(Chunk502762.Z.Overlay, {
    className: Chunk982629.container,
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk982629.content,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: Chunk982629.description,
        children: Chunk388032.intl.string(Chunk388032.t.Qian09)
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk982629.buttons,
        children: [(0, Chunk951288.jsx)(Chunk755721.zx, {
          size: Chunk755721.zx.Sizes.SMALL,
          look: Chunk755721.zx.Looks.FILLED,
          color: Chunk755721.zx.Colors.PRIMARY,
          onClick: require,
          className: Chunk982629.button,
          children: Chunk388032.intl.string(Chunk388032.t.p89ACg)
        }), (0, Chunk951288.jsx)(Chunk755721.zx, {
          size: Chunk755721.zx.Sizes.SMALL,
          look: Chunk755721.zx.Looks.FILLED,
          color: Chunk755721.zx.Colors.PRIMARY,
          onClick: d,
          className: Chunk982629.button,
          children: Chunk388032.intl.string(Chunk388032.t.gm1Ven)
        })]
      })]
    })
  })
}

function f() {
  return u ? null : (0, Chunk951288.jsx)(d, {})
}