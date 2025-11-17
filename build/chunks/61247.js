/** Chunk was on web.js **/
/** chunk id: 61247, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk473749 = require("./473749.js");

function i() {
  for (var e = arguments.length, t = Array(module), n = 0; require < module; require++) exports[require] = arguments[require];
  return Chunk473749.useCallback(e => {
    t.forEach(t => {
      null != t && ("function" == typeof t ? t(e) : t.current = e)
    })
  }, exports)
}