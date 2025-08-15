/** Chunk was on 30202 **/
/** chunk id: 233685, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk579806 = require("./579806.js"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk442334 = require("./442334.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk749799 = require("./749799.js"),
  Chunk441849 = require("./441849.js");

function p() {
  let e = (0, Chunk442837.e7)([Chunk435064.Z], () => Chunk435064.Z.getSettings().storageLocation),
    t = async () => {
      let e = await Chunk579806.Z.fileManager.showOpenDialog({
        properties: ["openDirectory", "createDirectory"]
      });
      module.length > 0 && Chunk39604.T1(module[0])
    };
  return (0, Chunk255367.jsx)(Chunk481060.hjN, {
    children: (0, Chunk255367.jsx)(Chunk442334.O, {
      title: Chunk388032.intl.string(Chunk388032.t.s4773N),
      note: Chunk388032.intl.string(Chunk388032.t.svjwGh),
      className: Chunk749799.formItem,
      children: (0, Chunk255367.jsx)(Chunk481060.P3F, {
        className: Chunk441849.selectControl,
        "aria-label": Chunk388032.intl.formatToPlainString(Chunk388032.t.iMONTk, {
          storageLocation: module
        }),
        onClick: exports,
        children: (0, Chunk255367.jsx)(Chunk481060.oil, {
          tabIndex: false,
          value: module,
          editable: false,
          "aria-hidden": true
        })
      })
    })
  })
}