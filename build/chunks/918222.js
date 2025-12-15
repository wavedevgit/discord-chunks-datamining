/** Chunk was on 41700 **/
/** chunk id: 918222, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk433517 = require("./433517.js"),
  Chunk493773 = require("./493773.js");

function a(e, t) {
  let [n, a] = r.useState(() => {
    let n = i.K.get(e);
    return null != n ? n : t
  });
  return (0, l.ZP)(() => {
    null == i.K.get(e) && i.K.set(e, t)
  }), [n, r.useCallback(t => {
    a(t), i.K.set(e, t)
  }, [e])]
}