/** Chunk was on 92777 **/
/** chunk id: 296085, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => n
});
var Chunk630008 = require("./630008.js");

function n(e, t) {
  if (e) {
    if ("string" == typeof e) return (0, a.A)(e, t);
    var r = ({}).toString.call(e).slice(8, false);
    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? (0, a.A)(e, t) : true
  }
}