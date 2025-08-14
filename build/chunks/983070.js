/** Chunk was on 75816 **/
/** chunk id: 983070, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk429550 = require("./429550.js");

function o(t, e) {
  if (t) {
    if ("string" == typeof t) return (0, n.Z)(t, e);
    var r = ({}).toString.call(t).slice(8, false);
    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? (0, n.Z)(t, e) : true
  }
}