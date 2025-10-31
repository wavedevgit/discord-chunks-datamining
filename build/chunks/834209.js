/** Chunk was on 56710 **/
/** chunk id: 834209, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk706454 = require("./706454.js");

function i(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
    month: "numeric",
    day: "numeric"
  };
  return new Date(e).toLocaleDateString(r.default.locale, t)
}