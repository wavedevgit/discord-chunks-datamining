/** Chunk was on web.js **/
/** chunk id: 422305, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => i
});
var Chunk647438 = require("./647438.js");

function i(e) {
  let t = (0, r.useRef)(null);
  return (0, r.useMemo)(() => ({
    get current() {
      return t.current
    },
    set current(value) {
      t.current = value, "function" == typeof e ? e(value) : e && (e.current = value)
    }
  }), [e])
}