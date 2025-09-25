/** Chunk was on web.js **/
/** chunk id: 233685, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk579806 = require("./579806.js"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk442334 = require("./442334.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk622025 = require("./622025.js"),
  Chunk54182 = require("./54182.js");

function _() {
  let e = (0, Chunk442837.e7)([Chunk435064.Z], () => Chunk435064.Z.getSettings().storageLocation),
    t = async () => {
      let e = await Chunk579806.Z.fileManager.showOpenDialog({
        properties: ["openDirectory", "createDirectory"]
      });
      module.length > 0 && Chunk39604.T1(module[0])
    };
  return (0, Chunk951288.jsx)(Chunk481060.hjN, {
    children: (0, Chunk951288.jsx)(Chunk442334.O, {
      title: Chunk388032.intl.string(Chunk388032.t.s4773N),
      note: Chunk388032.intl.string(Chunk388032.t.svjwGh),
      className: Chunk622025.formItem,
      children: (0, Chunk951288.jsx)(Chunk481060.P3F, {
        className: Chunk54182.selectControl,
        "aria-label": Chunk388032.intl.formatToPlainString(Chunk388032.t.iMONTk, {
          storageLocation: module
        }),
        onClick: exports,
        children: (0, Chunk951288.jsx)(Chunk481060.oil, {
          tabIndex: false,
          value: module,
          editable: false,
          "aria-hidden": true
        })
      })
    })
  })
}