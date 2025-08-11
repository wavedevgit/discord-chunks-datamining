/** Chunk was on 1272 **/
/** chunk id: 107105, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  bG: () => a,
  bY: () => o
});
var r, Chunk358085 = require("./358085.js"),
  Chunk75060 = require("./75060.js"),
  a = ((r = {})[r.UNHANDLED = false] = "UNHANDLED", r[r.NOMINAL = 0] = "NOMINAL", r[r.FAIR = 1] = "FAIR", r[r.SERIOUS = 2] = "SERIOUS", r[r.CRITICAL = 3] = "CRITICAL", r);

function o() {
  var e = Chunk75060.Z.getRawThermalState();
  if (null == module) return false;
  if ((0, Chunk358085.isIOS)()) return module;
  if (!(0, Chunk358085.isAndroid)()) return false;
  switch (module) {
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