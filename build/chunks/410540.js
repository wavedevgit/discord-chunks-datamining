/** Chunk was on web.js **/
/** chunk id: 410540, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk290863 = require("./290863.js"),
  Chunk685396 = require("./685396.js"),
  Chunk652215 = require("./652215.js");

function l(e) {
  let t = (0, r.bG)([i.default], () => i.default.getId() === e),
    n = (0, s.K)(),
    l = (0, r.bG)([a.A], () => a.A.findActivity(e, e => {
      let {
        type: t
      } = e;
      return t === o.$pd.CUSTOM_STATUS
    }));
  return t ? n : l
}