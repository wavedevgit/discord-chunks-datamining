/** Chunk was on 4670 **/
/** chunk id: 179014, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  r: () => d
});
var Chunk311907 = require("./311907.js"),
  Chunk936388 = require("./936388.js"),
  Chunk714763 = require("./714763.js"),
  Chunk814278 = require("./814278.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.zD)(Chunk780964.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
  useTitle: () => o.intl.string(o.t["opi/XK"]),
  useSubtitle: () => o.intl.format(o.t["/T+ZlP"], {
    helpArticle: (0, r.Lu)()
  }),
  useValue: function() {
    return (0, n.bG)([s.A], () => s.A.getPersistentCodesEnabled())
  },
  setValue: function(e) {
    l.A.updatePersistentCodesEnabled(e)
  }
})