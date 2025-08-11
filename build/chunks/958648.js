/** Chunk was on 5863 **/
/** chunk id: 958648, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk73800 = require("./73800.js");

function s(e, t) {
  let n = i.useRef(e);
  i.useEffect(() => {
    e.length > n.current.length && t(), n.current = e
  }, [e, t])
}