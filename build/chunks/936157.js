/** Chunk was on 35511 **/
/** chunk id: 936157, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk424528 = require("./424528.js"),
  Chunk308192 = require("./308192.js"),
  Chunk633248 = require("./633248.js");

function i(e, t) {
  if (e) {
    if ("string" == typeof e) return (0, o.A)(e, t);
    var n, i = r(n = ({}).toString.call(e)).call(n, 8, false);
    return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? a(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? (0, o.A)(e, t) : true
  }
}