/** Chunk was on 60449 **/
/** chunk id: 53705, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => r,
  L: () => l
});
var Chunk73153 = require("./73153.js"),
  Chunk154323 = require("./154323.js");

function l(e, t) {
  let n = "boolean" == typeof t ? t : !s.A.get(e);
  i.h.dispatch({
    type: "DEV_TOOLS_DESIGN_TOGGLE_WEB_SET",
    toggle: e,
    value: n
  })
}

function r() {
  for (let e in s.A.enabled()) l(e, false)
}