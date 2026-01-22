/** Chunk was on web.js **/
/** chunk id: 372082, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk77729 = require("./77729.js"),
  Chunk274372 = require("./274372.js"),
  Chunk399925 = require("./399925.js"),
  Chunk985018 = require("./985018.jsx");

function u() {
  let e = (0, i.bG)([o.A], () => o.A.getSettings().storageLocation),
    t = async () => {
      let e = await s.A.fileManager.showOpenDialog({
        properties: ["openDirectory", "createDirectory"]
      });
      e.length > 0 && l.HU(e[0])
    };
  return (0, r.jsx)(a.D0$, {
    label: c.intl.string(c.t.s4773E),
    description: c.intl.string(c.t.svjwGh),
    layout: "horizontal",
    children: (0, r.jsx)(a.DUT, {
      "aria-label": c.intl.formatToPlainString(c.t.iMONTj, {
        storageLocation: e
      }),
      onClick: t,
      children: (0, r.jsx)(a.ksK, {
        tabIndex: false,
        value: e,
        editable: false,
        "aria-hidden": true
      })
    })
  })
}