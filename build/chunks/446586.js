/** Chunk was on 35511 **/
/** chunk id: 446586, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk417161 = require("./417161.js"),
  Chunk116825 = require("./116825.js");

function o(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), r(e, (0, a.A)(o.key), o)
  }
}

function i(e, t, n) {
  return t && o(e.prototype, t), n && o(e, n), r(e, "prototype", {
    writable: false
  }), e
}