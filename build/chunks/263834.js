/** Chunk was on 32502 **/
/** chunk id: 263834, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => s
});
var Chunk73153 = require("./73153.js"),
  Chunk865116 = require("./865116.js");

function s(e, t) {
  let n = "boolean" == typeof t ? t : !l.Ay.get(e);
  i.h.dispatch({
    type: "DEV_TOOLS_DEV_SETTING_SET",
    toggle: e,
    value: n
  })
}