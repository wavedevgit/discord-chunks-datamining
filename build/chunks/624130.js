/** Chunk was on 96811 **/
/** chunk id: 624130, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk66455 = require("./66455.js"),
  Chunk311907 = require("./311907.js"),
  Chunk997630 = require("./997630.js"),
  Chunk571044 = require("./571044.js");

function o(e, t) {
  let {
    lastPickerAction: r,
    lastPickerError: o
  } = (0, l.bG)([a.Ay], () => a.Ay.getPickerState()), [c, d] = n.useState(false), u = (0, i.A)(e), f = (0, i.A)(t);
  return (0, a.XA)(), n.useEffect(() => {
    c ? r === a.JA.Update ? u.current() : r === a.JA.Cancel && ((0, s.E)(), f.current()) : (null == r || r === a.JA.Present) && d(true)
  }, [c, r, u, f]), {
    lastPickerAction: r,
    lastPickerError: o
  }
}