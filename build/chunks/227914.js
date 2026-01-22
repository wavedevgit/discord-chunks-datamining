/** Chunk was on 12840 **/
/** chunk id: 227914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk204801 = require("./204801.js");

function i(e, t, n) {
  var i = "eeee p";
  return (0, a.A)(e, t, n) ? i : e.getTime() > t.getTime() ? "'下个'" + i : "'上个'" + i
}
var r = {
  lastWeek: i,
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: i,
  other: "PP p"
};
let o = function(e, t, n, a) {
  var i = r[e];
  return "function" == typeof i ? i(t, n, a) : i
}