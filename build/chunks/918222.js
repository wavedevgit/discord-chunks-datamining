/** Chunk was on 66181 **/
/** chunk id: 918222, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk433517 = require("./433517.js"),
  Chunk493773 = require("./493773.js");

function a(e, t) {
  let [n, a] = i.useState(() => {
    let n = r.K.get(e);
    return null != n ? n : t
  });
  return (0, s.ZP)(() => {
    null == r.K.get(e) && r.K.set(e, t)
  }), [n, i.useCallback(t => {
    a(t), r.K.set(e, t)
  }, [e])]
}