/** Chunk was on web.js **/
/** chunk id: 56494, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk594061 = require("./594061.js"),
  Chunk26909 = require("./26909.js"),
  Chunk355097 = require("./355097.js");

function l(e) {
  r.useEffect(() => {
    a.bW.loadIfUncached(s.oD.FRECENCY_AND_FAVORITES_SETTINGS)
  }, []);
  let t = (0, i.bG)([o.Ay], () => o.Ay.getTopCommandsWithoutLoadingLatest());
  return r.useMemo(() => (0, o.RG)(t, e), [t, e])
}