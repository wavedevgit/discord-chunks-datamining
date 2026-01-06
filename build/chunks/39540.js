/** Chunk was on 46746 **/
/** chunk id: 39540, original params: e,t,r (module,exports,require) **/
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
    lastPickerAction: r,
    lastPickerError: c
  } = (0, s.e7)([o.ZP], () => o.ZP.getPickerState()), [a, d] = n.useState(false), u = (0, i.Z)(e), f = (0, i.Z)(t);
  return (0, o.kE)(), n.useEffect(() => {
    a ? r === o.Uc.Update ? u.current() : r === o.Uc.Cancel && ((0, l.t)(), f.current()) : (null == r || r === o.Uc.Present) && d(true)
  }, [a, r, u, f]), {
    lastPickerAction: r,
    lastPickerError: c
  }
}