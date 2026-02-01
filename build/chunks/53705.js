/** Chunk was on 42402 **/
/** chunk id: 53705, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => s,
  L: () => i
});
var Chunk73153 = require("./73153.js"),
  Chunk154323 = require("./154323.js");

function i(e, t) {
  let n = "boolean" == typeof t ? t : !l.A.get(e);
  r.h.dispatch({
    type: "DEV_TOOLS_DESIGN_TOGGLE_WEB_SET",
    toggle: e,
    value: n
  })
}

function s() {
  for (let e in l.A.enabled()) i(e, false)
}