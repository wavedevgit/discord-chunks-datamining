/** Chunk was on 46746 **/
/** chunk id: 39540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk237617 = require("./237617.js"),
  Chunk299570 = require("./299570.js"),
  Chunk960861 = require("./960861.js");

function a(e, t) {
  let {
    lastPickerAction: n,
    lastPickerError: a
  } = (0, i.e7)([o.ZP], () => o.ZP.getPickerState()), [c, d] = r.useState(false), u = (0, l.Z)(e), f = (0, l.Z)(t);
  return (0, o.kE)(), r.useEffect(() => {
    c ? n === o.Uc.Update ? u.current() : n === o.Uc.Cancel && ((0, s.t)(), f.current()) : (null == n || n === o.Uc.Present) && d(true)
  }, [c, n, u, f]), {
    lastPickerAction: n,
    lastPickerError: a
  }
}