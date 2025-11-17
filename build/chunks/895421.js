/** Chunk was on web.js **/
/** chunk id: 895421, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk675478 = require("./675478.js"),
  Chunk208049 = require("./208049.js"),
  Chunk763296 = require("./763296.js"),
  Chunk771784 = require("./771784.js");

function c() {
  let e = (0, Chunk771784.q3)("useFetchSoundboardData");
  return {
    fetching: (0, Chunk399606.e7)([Chunk763296.Z], () => Chunk763296.Z.isFetchingAnySounds()),
    maybeFetchData: Chunk473749.useCallback(() => {
      Chunk208049.w(), Chunk675478.DZ.loadIfNecessary()
    }, [module.sortingStrategy])
  }
}