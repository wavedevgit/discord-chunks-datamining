/** Chunk was on web.js **/
/** chunk id: 438652, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk830215 = require("./830215.js"),
  Chunk121780 = require("./121780.js"),
  Chunk652215 = require("./652215.js");
let s = (0, Chunk311907.UT)(Chunk121780.A, {
  getQueryId: Chunk652215.fic.USER_COUNTRY_CODE,
  get: () => a.A.getCountryCode(),
  load: async () => {
    await i.A.getLocationMetadata()
  }
})