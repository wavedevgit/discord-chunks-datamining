/** Chunk was on 77069 **/
/** chunk id: 612039, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  E: () => T
});
var Chunk442837 = require("./442837.js"),
  Chunk90641 = require("./90641.js"),
  Chunk615830 = require("./615830.js"),
  Chunk630759 = require("./630759.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.qs)(Chunk313789.n.PERSISTENT_VERIFICATION_CODES_SETTING, {
  useTitle: () => o.intl.string(o.t["opi/XK"]),
  useSubtitle: () => o.intl.format(o.t["/T+ZlP"], {
    helpArticle: (0, u.aZ)()
  }),
  useValue: function() {
    return (0, i.e7)([s.Z], () => s.Z.getPersistentCodesEnabled())
  },
  setValue: function(t) {
    l.Z.updatePersistentCodesEnabled(t)
  }
})