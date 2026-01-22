/** Chunk was on web.js **/
/** chunk id: 263834, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => a
});
var Chunk73153 = require("./73153.js"),
  Chunk865116 = require("./865116.js");

function a(e, t) {
  let n = "boolean" == typeof t ? t : !i.Ay.get(e);
  r.h.dispatch({
    type: "DEV_TOOLS_DEV_SETTING_SET",
    toggle: e,
    value: n
  })
}