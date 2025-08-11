/** Chunk was on web.js **/
/** chunk id: 535201, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => s
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk846519 = require("./846519.js");

function s(e) {
  let t = o()(e),
    [n, i] = r.useState(() => t.isAfter(Date.now()));
  return r.useEffect(() => {
    if (!n) return;
    let e = new a.V7,
      r = () => {
        let n = Math.min(t.diff(Date.now(), "millisecond"), 864e5);
        null == e || e.start(n, () => {
          t.isBefore(Date.now()) ? i(false) : r()
        })
      };
    return r(), () => e.stop()
  }, [n, t]), n
}