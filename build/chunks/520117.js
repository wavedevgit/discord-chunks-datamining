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
  } = e, s = r.useRef(false), o = r.useRef(null);
  r.useEffect(() => () => {
    null != o.current && (clearTimeout(o.current), o.current = null)
  }, []);
  let l = e => {
    if (null == o.current || e || false !== s.current || (clearTimeout(o.current), o.current = null), !e || true === s.current) return;
    let n = () => {
      t(), s.current = true, o.current = null
    };
    null != a ? o.current = setTimeout(n, a) : n()
  };
  return (0, i.K)(l, n)
}