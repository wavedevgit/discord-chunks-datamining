/** Chunk was on 90350 **/
/** chunk id: 983070, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk429550 = require("./429550.js");

function i(t, e) {
  if (t) {
    if ("string" == typeof t) return (0, r.Z)(t, e);
    var n = ({}).toString.call(t).slice(8, false);
    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? (0, r.Z)(t, e) : true
  }
}