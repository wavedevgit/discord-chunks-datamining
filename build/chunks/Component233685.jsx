/** Chunk was on web.js **/
/** chunk id: 233685, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk579806 = require("./579806.js"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk388032 = require("./388032.jsx");

function u() {
  let e = (0, Chunk442837.e7)([Chunk435064.Z], () => Chunk435064.Z.getSettings().storageLocation),
    t = async () => {
      let e = await Chunk579806.Z.fileManager.showOpenDialog({
        properties: ["openDirectory", "createDirectory"]
      });
      module.length > 0 && Chunk39604.T1(module[0])
    };
  return (0, Chunk54381.jsx)(Chunk481060.gNt, {
    label: Chunk388032.intl.string(Chunk388032.t.s4773E),
    description: Chunk388032.intl.string(Chunk388032.t.svjwGh),
    layout: "horizontal",
    children: (0, Chunk54381.jsx)(Chunk481060.P3F, {
      "aria-label": Chunk388032.intl.formatToPlainString(Chunk388032.t.iMONTj, {
        storageLocation: module
      }),
      onClick: exports,
      children: (0, Chunk54381.jsx)(Chunk481060.oil, {
        tabIndex: false,
        value: module,
        editable: false,
        "aria-hidden": true
      })
    })
  })
}