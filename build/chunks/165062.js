/** Chunk was on web.js **/
/** chunk id: 165062, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk893776 = require("./893776.js"),
  Chunk54613 = require("./54613.js"),
  Chunk981631 = require("./981631.js");
let s = (0, Chunk442837.Kb)(Chunk54613.Z, {
  getQueryId: Chunk981631.McO.USER_COUNTRY_CODE,
  get: () => a.Z.getCountryCode(),
  load: async () => {
    await i.Z.getLocationMetadata()
  }
})