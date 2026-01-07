/** Chunk was on 77069 **/
/** chunk id: 987143, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => c
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
let c = (0, Chunk509613.ON)(Chunk313789.n.CLIPS_STORAGE_LOCATION, {
  useSearchTerms: () => [S.intl.string(S.t.s4773E), S.intl.string(S.t.svjwGh)],
  Component: () => {
    let t = (0, l.e7)([r.Z], () => r.Z.getSettings().storageLocation),
      e = async () => {
        let t = await u.Z.fileManager.showOpenDialog({
          properties: ["openDirectory", "createDirectory"]
        });
        t.length > 0 && a.T1(t[0])
      };
    return (0, i.jsx)(s.gNt, {
      label: S.intl.string(S.t.s4773E),
      description: S.intl.string(S.t.svjwGh),
      layout: "horizontal",
      children: (0, i.jsx)(s.P3F, {
        "aria-label": S.intl.formatToPlainString(S.t.iMONTj, {
          storageLocation: t
        }),
        onClick: e,
        children: (0, i.jsx)(s.oil, {
          tabIndex: false,
          value: t,
          editable: false,
          "aria-hidden": true
        })
      })
    })
  }
})