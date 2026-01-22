/** Chunk was on web.js **/
/** chunk id: 272859, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk800342 = require("./800342.js"),
  Chunk328968 = require("./328968.js"),
  Chunk652215 = require("./652215.js");
let o = (0, Chunk311907.UT)(Chunk328968.A, {
  getQueryId: Chunk652215.fic.STORE_LISTING,
  get: e => {
    var t;
    return null != e && null != (t = a.A.getForSKU(e)) ? t : null
  },
  load: e => null != e ? (0, i.QB)(e) : Promise.resolve(),
  getIsLoading: e => null != e && a.A.isFetchingForSKU(e)
})