/** Chunk was on 96811 **/
/** chunk id: 624130, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk66455 = require("./66455.js"),
  Chunk311907 = require("./311907.js"),
  Chunk997630 = require("./997630.js"),
  Chunk571044 = require("./571044.js");

function c(e, t) {
  let {
    lastPickerAction: r,
    lastPickerError: c
  } = (0, s.bG)([a.Ay], () => a.Ay.getPickerState()), [o, d] = n.useState(false), f = (0, l.A)(e), u = (0, l.A)(t);
  return (0, a.XA)(), n.useEffect(() => {
    o ? r === a.JA.Update ? f.current() : r === a.JA.Cancel && ((0, i.E)(), u.current()) : (null == r || r === a.JA.Present) && d(true)
  }, [o, r, f, u]), {
    lastPickerAction: r,
    lastPickerError: c
  }
}