/** Chunk was on 70104 **/
/** chunk id: 272859, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  d: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk800342 = require("./800342.js"),
  Chunk328968 = require("./328968.js"),
  Chunk652215 = require("./652215.js");
let a = (0, Chunk311907.UT)(Chunk328968.A, {
  getQueryId: Chunk652215.fic.STORE_LISTING,
  get: t => {
    var e;
    return null != t && null != (e = s.A.getForSKU(t)) ? e : null
  },
  load: t => null != t ? (0, l.QB)(t) : Promise.resolve(),
  getIsLoading: t => null != t && s.A.isFetchingForSKU(t)
})