/** Chunk was on 4670 **/
/** chunk id: 544727, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  $: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk77729 = require("./77729.js"),
  Chunk274372 = require("./274372.js"),
  Chunk399925 = require("./399925.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let c = (0, Chunk419954.E2)(Chunk780964.X.CLIPS_STORAGE_LOCATION, {
  useSearchTerms: () => [T.intl.string(T.t.s4773E), T.intl.string(T.t.svjwGh)],
  Component: () => {
    let e = (0, l.bG)([a.A], () => a.A.getSettings().storageLocation),
      t = async () => {
        let e = await r.A.fileManager.showOpenDialog({
          properties: ["openDirectory", "createDirectory"]
        });
        e.length > 0 && u.HU(e[0])
      };
    return (0, n.jsx)(s.D0$, {
      label: T.intl.string(T.t.s4773E),
      description: T.intl.string(T.t.svjwGh),
      layout: "horizontal",
      children: (0, n.jsx)(s.DUT, {
        "aria-label": T.intl.formatToPlainString(T.t.iMONTj, {
          storageLocation: e
        }),
        onClick: t,
        children: (0, n.jsx)(s.ksK, {
          tabIndex: false,
          value: e,
          editable: false,
          "aria-hidden": true
        })
      })
    })
  }
})