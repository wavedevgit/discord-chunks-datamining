/** Chunk was on 2827 **/
/** chunk id: 264392, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => i
});
var Chunk527815 = require("./527815.js");

function i() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 4e3;
  return new Promise(t => {
    let n = setTimeout(() => {
      t()
    }, e);
    (0, r.t)(() => {
      clearTimeout(n), t()
    })
  })
}