/** Chunk was on 76892 **/
/** chunk id: 918222, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  R: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk433517 = require("./433517.js"),
  Chunk493773 = require("./493773.js");

function l(e, t) {
  let [n, l] = r.useState(() => {
    let n = i.K.get(e);
    return null != n ? n : t
  });
  return (0, a.ZP)(() => {
    null == i.K.get(e) && i.K.set(e, t)
  }), [n, r.useCallback(t => {
    l(t), i.K.set(e, t)
  }, [e])]
}