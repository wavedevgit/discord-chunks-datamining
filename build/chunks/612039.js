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
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["opi/XK"]),
  useSubtitle: () => Chunk388032.intl.format(Chunk388032.t["/T+ZlP"], {
    helpArticle: (0, Chunk630759.aZ)()
  }),
  useValue: function() {
    return (0, Chunk442837.e7)([Chunk615830.Z], () => Chunk615830.Z.getPersistentCodesEnabled())
  },
  setValue: function(t) {
    l.Z.updatePersistentCodesEnabled(t)
  }
})