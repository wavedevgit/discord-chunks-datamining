/** Chunk was on 13088 **/
/** chunk id: 955440, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk73825 = require("./73825.js"),
  Chunk97352 = require("./97352.js"),
  Chunk652215 = require("./652215.js");
let o = (0, Chunk311907.UT)(Chunk97352.A, {
  getQueryId: Chunk652215.fic.SUBSCRIPTION_PLAN,
  get: t => {
    let e = i.A.getForSKU(t);
    return 0 === e.length ? null : e
  },
  load: t => (0, r.ur)(t),
  getIsLoading: t => i.A.isFetchingForSKU(t)
})