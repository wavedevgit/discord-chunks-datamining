/** Chunk was on 23032 **/
/** chunk id: 983070, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => n
});
var Chunk429550 = require("./429550.js");

function n(e, t) {
  if (e) {
    if ("string" == typeof e) return (0, a.Z)(e, t);
    var r = ({}).toString.call(e).slice(8, false);
    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? (0, a.Z)(e, t) : true
  }
}