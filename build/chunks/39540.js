/** Chunk was on 46746 **/
/** chunk id: 39540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk872175 = require("./872175.js"),
  Chunk442837 = require("./442837.js"),
  Chunk299570 = require("./299570.js"),
  Chunk960861 = require("./960861.js");

function c(e, t) {
  let {
    lastPickerAction: n,
    lastPickerError: c
  } = (0, s.e7)([o.ZP], () => o.ZP.getPickerState()), [a, d] = r.useState(false), u = (0, i.Z)(e), f = (0, i.Z)(t);
  return (0, o.kE)(), r.useEffect(() => {
    a ? n === o.Uc.Update ? u.current() : n === o.Uc.Cancel && ((0, l.t)(), f.current()) : (null == n || n === o.Uc.Present) && d(true)
  }, [a, n, u, f]), {
    lastPickerAction: n,
    lastPickerError: c
  }
}