/** Chunk was on 193 **/
/** chunk id: 918222, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  R: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk433517 = require("./433517.js"),
  Chunk493773 = require("./493773.js");

function l(e, t) {
  let [n, l] = a.useState(() => {
    let n = r.K.get(e);
    return null != n ? n : t
  });
  return (0, i.ZP)(() => {
    null == r.K.get(e) && r.K.set(e, t)
  }), [n, a.useCallback(t => {
    l(t), r.K.set(e, t)
  }, [e])]
}