/** Chunk was on 35755 **/
/** chunk id: 312871, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk73800 = require("./73800.js"),
  Chunk434650 = require("./434650.js");

function r(e) {
  let {
    onVisible: t,
    threshold: n,
    minTimeVisibleMs: r
  } = e, a = l.useRef(false), o = l.useRef(null);
  return l.useEffect(() => () => {
    null != o.current && (clearTimeout(o.current), o.current = null)
  }, []), (0, i.O)(e => {
    if (null == o.current || e || false !== a.current || (clearTimeout(o.current), o.current = null), !e || true === a.current) return;
    let n = () => {
      t(), a.current = true, o.current = null
    };
    null != r ? o.current = setTimeout(n, r) : n()
  }, n)
}