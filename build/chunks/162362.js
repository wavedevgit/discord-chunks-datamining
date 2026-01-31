/** Chunk was on 17534 **/
/** chunk id: 162362, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk773669 = require("./773669.js");

function l(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
    month: "numeric",
    day: "numeric"
  };
  return new Date(e).toLocaleDateString(r.default.locale, t)
}