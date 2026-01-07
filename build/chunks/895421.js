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
  let e = (0, l.q3)("useFetchSoundboardData");
  return {
    fetching: (0, i.e7)([s.Z], () => s.Z.isFetchingAnySounds()),
    maybeFetchData: r.useCallback(() => {
      o.w(), a.DZ.loadIfNecessary()
    }, [e.sortingStrategy])
  }
}