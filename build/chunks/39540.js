/** Chunk was on 47863 **/
/** chunk id: 39540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk872175 = require("./872175.js"),
  Chunk442837 = require("./442837.js"),
  Chunk299570 = require("./299570.js"),
  Chunk960861 = require("./960861.js");

function a(e, t) {
  let {
    lastPickerAction: n,
    lastPickerError: a
  } = (0, l.e7)([s.ZP], () => s.ZP.getPickerState()), [c, d] = r.useState(false), u = (0, i.Z)(e), f = (0, i.Z)(t);
  return (0, s.kE)(), r.useEffect(() => {
    c ? n === s.Uc.Update ? u.current() : n === s.Uc.Cancel && ((0, o.t)(), f.current()) : (null == n || n === s.Uc.Present) && d(true)
  }, [c, n, u, f]), {
    lastPickerAction: n,
    lastPickerError: a
  }
}