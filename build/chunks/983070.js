/** Chunk was on 23706 **/
/** chunk id: 983070, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk429550 = require("./429550.js");

function a(e, t) {
  if (e) {
    if ("string" == typeof e) return (0, n.Z)(e, t);
    var r = ({}).toString.call(e).slice(8, false);
    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? (0, n.Z)(e, t) : true
  }
}