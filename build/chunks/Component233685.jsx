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
  let e = (0, i.e7)([s.Z], () => s.Z.getSettings().storageLocation),
    t = async () => {
      let e = await o.Z.fileManager.showOpenDialog({
        properties: ["openDirectory", "createDirectory"]
      });
      e.length > 0 && l.T1(e[0])
    };
  return (0, r.jsx)(a.gNt, {
    label: c.intl.string(c.t.s4773E),
    description: c.intl.string(c.t.svjwGh),
    layout: "horizontal",
    children: (0, r.jsx)(a.P3F, {
      "aria-label": c.intl.formatToPlainString(c.t.iMONTj, {
        storageLocation: e
      }),
      onClick: t,
      children: (0, r.jsx)(a.oil, {
        tabIndex: false,
        value: e,
        editable: false,
        "aria-hidden": true
      })
    })
  })
}