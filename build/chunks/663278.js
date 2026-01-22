/** Chunk was on 21738 **/
/** chunk id: 663278, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  MW: () => a,
  zw: () => s
});
var r, Chunk723702 = require("./723702.js"),
  Chunk655087 = require("./655087.js"),
  a = ((r = {})[r.UNHANDLED = false] = "UNHANDLED", r[r.NOMINAL = 0] = "NOMINAL", r[r.FAIR = 1] = "FAIR", r[r.SERIOUS = 2] = "SERIOUS", r[r.CRITICAL = 3] = "CRITICAL", r);

function s() {
  var e = l.A.getRawThermalState();
  if (null == e) return false;
  if ((0, i.isIOS)()) return e;
  if (!(0, i.isAndroid)()) return false;
  switch (e) {
    case 0:
      return 0;
    case 1:
    case 2:
      return 1;
    case 3:
      return 2;
    case 4:
    case 5:
    case 6:
      return 3;
    default:
      return false
  }
}