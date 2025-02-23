/** Chunk was on 53896 (7a861d91aebae962.js) **/
t.d(a, {
  Z: () => n
});
var i = {
  lastWeek: function(e) {
    var a = e.getUTCDay();
    return "'" + (0 === a || 6 === a ? "\xfaltimo" : "\xfaltima") + "' eeee '\xe0s' p"
  },
  yesterday: "'ontem \xe0s' p",
  today: "'hoje \xe0s' p",
  tomorrow: "'amanh\xe3 \xe0s' p",
  nextWeek: "eeee '\xe0s' p",
  other: "P"
};
let n = function(e, a, t, n) {
  var o = i[e];
  return "function" == typeof o ? o(a) : o
}