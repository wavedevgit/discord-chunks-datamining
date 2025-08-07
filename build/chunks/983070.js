/** Chunk was on 90350 **/
n.d(e, {
  Z: () => i
});
var r = n(429550);

function i(t, e) {
  if (t) {
    if ("string" == typeof t) return (0, r.Z)(t, e);
    var n = ({}).toString.call(t).slice(8, -1);
    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? (0, r.Z)(t, e) : void 0
  }
}