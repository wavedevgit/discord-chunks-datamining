/** Chunk was on web.js **/
/** chunk id: 312871, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk907331 = require("./907331.js");

function o(e) {
  let {
    onVisible: t,
    threshold: n,
    minTimeVisibleMs: o
  } = e, a = r.useRef(false), s = r.useRef(null);
  r.useEffect(() => () => {
    null != s.current && (clearTimeout(s.current), s.current = null)
  }, []);
  let l = e => {
    if (null == s.current || e || false !== a.current || (clearTimeout(s.current), s.current = null), !e || true === a.current) return;
    let n = () => {
      t(), a.current = true, s.current = null
    };
    null != o ? s.current = setTimeout(n, o) : n()
  };
  return (0, i.O)(l, n)
}