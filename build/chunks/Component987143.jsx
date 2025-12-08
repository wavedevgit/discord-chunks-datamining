/** Chunk was on 77069 **/
/** chunk id: 987143, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => T
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk579806 = require("./579806.js"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.ON)(Chunk313789.n.CLIPS_STORAGE_LOCATION, {
  useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t.s4773E), Chunk388032.intl.string(Chunk388032.t.svjwGh)],
  render: () => {
    let t = (0, Chunk442837.e7)([Chunk435064.Z], () => Chunk435064.Z.getSettings().storageLocation),
      e = async () => {
        let t = await Chunk579806.Z.fileManager.showOpenDialog({
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
})