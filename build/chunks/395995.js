/** Chunk was on 1272 **/
/** chunk id: 395995, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => a
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk473749 = require("./473749.js"),
  Chunk828700 = require("./828700.js"),
  Chunk169382 = require("./169382.js");

function a() {
  let e = (0, l.l)(),
    t = (0, i.k6)(),
    n = r.useRef(null),
    a = r.useCallback(r => {
      var i;
      let l = new URLSearchParams(null != (i = n.current) ? i : e);
      for (let [e, t] of Object.entries(r)) null == t ? l.delete(e) : l.set(e, t);
      n.current = l, t.replace({
        search: l.toString()
      }), Promise.resolve().then(() => {
        n.current = null
      })
    }, [e, t]);
  return [e, a]
}