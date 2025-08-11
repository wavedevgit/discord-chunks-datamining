/** Chunk was on 71953 **/
/** chunk id: 425047, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk528734 = require("./528734.js"),
  Chunk757490 = require("./757490.js"),
  i = ["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"];

function o(e) {
  var t = i[e];
  return 2 === e ? "'във " + t + " в' p" : "'в " + t + " в' p"
}
var u = {
  lastWeek: function(e, t, a) {
    var u = (0, n.default)(e),
      d = u.getUTCDay();
    if ((0, r.Z)(u, t, a)) return o(d);
    var s = i[d];
    switch (d) {
      case 0:
      case 3:
      case 6:
        return "'миналата " + s + " в' p";
      case 1:
      case 2:
      case 4:
      case 5:
        return "'миналия " + s + " в' p"
    }
  },
  yesterday: "'вчера в' p",
  today: "'днес в' p",
  tomorrow: "'утре в' p",
  nextWeek: function(e, t, a) {
    var u = (0, n.default)(e),
      d = u.getUTCDay();
    if ((0, r.Z)(u, t, a)) return o(d);
    var s = i[d];
    switch (d) {
      case 0:
      case 3:
      case 6:
        return "'следващата " + s + " в' p";
      case 1:
      case 2:
      case 4:
      case 5:
        return "'следващия " + s + " в' p"
    }
  },
  other: "P"
};
let d = function(e, t, a, n) {
  var r = u[e];
  return "function" == typeof r ? r(t, a, n) : r
}