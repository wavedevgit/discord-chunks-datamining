/** Chunk was on 44669 **/
/** chunk id: 353171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => s
});
var Chunk73153 = require("./73153.js"),
  Chunk303622 = require("./303622.js");
let i = {};

function s(e) {
  let {
    enabled: t = !l.A.get(e)
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : i;
  r.h.dispatch({
    type: "LAB_FEATURE_TOGGLE",
    labFeature: e,
    enabled: t
  })
}