/** Chunk was on 32502 **/
/** chunk id: 353171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => r
});
var Chunk73153 = require("./73153.js"),
  Chunk303622 = require("./303622.js");
let s = {};

function r(e) {
  let {
    enabled: t = !l.A.get(e)
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : s;
  i.h.dispatch({
    type: "LAB_FEATURE_TOGGLE",
    labFeature: e,
    enabled: t
  })
}