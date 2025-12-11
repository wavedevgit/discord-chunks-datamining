/** Chunk was on web.js **/
/** chunk id: 976758, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk36703 = require("./36703.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk819000 = require("./819000.js");

function f() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(), {
    inputVolume: t,
    outputVolume: n
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    inputVolume: Chunk131951.Z.getInputVolume(),
    outputVolume: Chunk131951.Z.getOutputVolume()
  }));
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk819000.volumes,
    children: [(0, Chunk54381.jsx)("div", {
      className: Chunk819000.column,
      children: (0, Chunk54381.jsx)(Chunk481060.iRW, {
        label: Chunk388032.intl.string(Chunk388032.t.OX2Bnr),
        initialValue: (0, Chunk36703.P)(exports),
        asValueChanges: t => o.Z.setInputVolume((0, c.A)(t), {
          analyticsLocations: e
        })
      })
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk819000.column,
      children: (0, Chunk54381.jsx)(Chunk481060.iRW, {
        label: Chunk388032.intl.string(Chunk388032.t.eATD2B),
        initialValue: (0, Chunk36703.P)(require),
        maxValue: 200,
        onValueRender: e => "".concat(e.toFixed(0), "%"),
        asValueChanges: t => o.Z.setOutputVolume((0, c.A)(t), {
          analyticsLocations: e
        })
      })
    })]
  })
}