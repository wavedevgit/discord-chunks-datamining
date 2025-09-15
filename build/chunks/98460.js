/** Chunk was on web.js **/
/** chunk id: 98460, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js"), require("./290780.js");
var Chunk647438 = require("./647438.js"),
  Chunk918222 = require("./918222.js");

function a() {
  let [e, t] = (0, Chunk918222.R)("RecentDismissibleOverrides", []), n = (0, Chunk647438.useCallback)(n => {
    let r = new Set(e);
    r.delete(n);
    let i = Array.from(r).slice(0, 4);
    i.unshift(n), t(i)
  }, [module, exports]);
  return [module, require]
}