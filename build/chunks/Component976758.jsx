/** Chunk was on 30202 **/
/** chunk id: 976758, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk131951 = require("./131951.js"),
  Chunk36703 = require("./36703.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk505433 = require("./505433.js");
let p = (0, Chunk313201.hQ)(),
  g = (0, Chunk313201.hQ)();

function h() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(), {
    inputVolume: t,
    outputVolume: n
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    inputVolume: Chunk131951.Z.getInputVolume(),
    outputVolume: Chunk131951.Z.getOutputVolume()
  }));
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk505433.volumes,
    children: [(0, Chunk255367.jsx)("div", {
      className: Chunk505433.column,
      children: (0, Chunk255367.jsx)(Chunk481060.xJW, {
        title: Chunk388032.intl.string(Chunk388032.t.OX2Bnp),
        titleId: p,
        children: (0, Chunk255367.jsx)(Chunk481060.iRW, {
          initialValue: (0, Chunk36703.P)(exports),
          asValueChanges: t => a.Z.setInputVolume((0, d.A)(t), {
            analyticsLocations: e
          }),
          "aria-labelledby": p
        })
      })
    }), (0, Chunk255367.jsx)("div", {
      className: Chunk505433.column,
      children: (0, Chunk255367.jsx)(Chunk481060.xJW, {
        title: Chunk388032.intl.string(Chunk388032.t.eATD2N),
        titleId: g,
        children: (0, Chunk255367.jsx)(Chunk481060.iRW, {
          initialValue: (0, Chunk36703.P)(require),
          maxValue: 200,
          onValueRender: e => "".concat(e.toFixed(0), "%"),
          asValueChanges: t => a.Z.setOutputVolume((0, d.A)(t), {
            analyticsLocations: e
          }),
          "aria-labelledby": g
        })
      })
    })]
  })
}