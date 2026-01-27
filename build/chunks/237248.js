/** Chunk was on web.js **/
/** chunk id: 237248, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk594061 = require("./594061.js"),
  Chunk796774 = require("./796774.js"),
  Chunk209932 = require("./209932.js"),
  Chunk766864 = require("./766864.js");

function c() {
  let e = (0, l.zZ)("useFetchSoundboardData");
  return {
    fetching: (0, i.bG)([s.A], () => s.A.isFetchingAnySounds()),
    maybeFetchData: r.useCallback(() => {
      o.E7(), a.bW.loadIfNecessary()
    }, [e.sortingStrategy])
  }
}