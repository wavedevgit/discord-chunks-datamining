/** Chunk was on web.js **/
/** chunk id: 520117, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk172218 = require("./172218.js");

function a(e) {
  let {
    onVisible: t,
    threshold: n,
    minTimeVisibleMs: a
  } = e, o = r.useRef(false), s = r.useRef(null);
  r.useEffect(() => () => {
    null != s.current && (clearTimeout(s.current), s.current = null)
  }, []);
  let l = e => {
    if (null == s.current || e || false !== o.current || (clearTimeout(s.current), s.current = null), !e || true === o.current) return;
    let n = () => {
      t(), o.current = true, s.current = null
    };
    null != a ? s.current = setTimeout(n, a) : n()
  };
  return (0, i.K)(l, n)
}