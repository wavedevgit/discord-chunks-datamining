/** Chunk was on 21738 **/
/** chunk id: 352670, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => a
}), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js"), require("./812715.js");
var Chunk64700 = require("./64700.js"),
  Chunk960488 = require("./960488.js"),
  Chunk458518 = require("./458518.js");

function a() {
  let e = (0, l.o)(),
    t = (0, i.W6)(),
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