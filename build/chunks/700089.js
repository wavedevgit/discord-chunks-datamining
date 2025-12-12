/** Chunk was on web.js **/
/** chunk id: 700089, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk675478 = require("./675478.js"),
  Chunk654455 = require("./654455.js"),
  Chunk526761 = require("./526761.js");

function l(e) {
  r.useEffect(() => {
    a.DZ.loadIfUncached(s.yP.FRECENCY_AND_FAVORITES_SETTINGS)
  }, []);
  let t = (0, i.e7)([o.ZP], () => o.ZP.getTopCommandsWithoutLoadingLatest());
  return r.useMemo(() => (0, o.LU)(t, e), [t, e])
}