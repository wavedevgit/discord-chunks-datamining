/** Chunk was on web.js **/
/** chunk id: 165062, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk893776 = require("./893776.js"),
  Chunk54613 = require("./54613.js");
let o = (0, Chunk442837.Kb)(Chunk54613.Z, {
  queryId: () => ["location-metadata"],
  get: () => Chunk54613.Z.getCountryCode(),
  load: async () => {
    await Chunk893776.Z.getLocationMetadata()
  },
  useStateHook: Chunk442837.e7
})