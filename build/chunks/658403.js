/** Chunk was on 33065 (5c63ebc2e6c103b5.js) **/
t.d(i, {
  Z: () => d
});
var a = t(757490),
  n = ["domenica", "luned\xec", "marted\xec", "mercoled\xec", "gioved\xec", "venerd\xec", "sabato"];

function o(e) {
  return "'" + n[e] + " alle' p"
}
var r = {
  lastWeek: function(e, i, t) {
    var r, d = e.getUTCDay();
    return (0, a.Z)(e, i, t) ? o(d) : 0 === (r = d) ? "'domenica scorsa alle' p" : "'" + n[r] + " scorso alle' p"
  },
  yesterday: "'ieri alle' p",
  today: "'oggi alle' p",
  tomorrow: "'domani alle' p",
  nextWeek: function(e, i, t) {
    var r, d = e.getUTCDay();
    return (0, a.Z)(e, i, t) ? o(d) : 0 === (r = d) ? "'domenica prossima alle' p" : "'" + n[r] + " prossimo alle' p"
  },
  other: "P"
};
let d = function(e, i, t, a) {
  var n = r[e];
  return "function" == typeof n ? n(i, t, a) : n
}