/** Chunk was on web.js **/
/** chunk id: 206678, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js");

function i(e, t) {
  let n = e.getBoundingClientRect();
  return Math.min(1, Math.max(0, (t.clientX - n.left) / n.width))
}

function o(e) {
  let {
    ref: t,
    onDrag: n,
    onDragStart: o,
    onDragEnd: a
  } = e, [s, l] = r.useState(false);
  return r.useEffect(() => {
    if (s) return window.addEventListener("mouseup", e), window.addEventListener("mousemove", r), () => {
      window.removeEventListener("mouseup", e), window.removeEventListener("mousemove", r)
    };

    function e() {
      null == a || a(), l(false)
    }

    function r(e) {
      let r = t.current;
      null != r && (null == n || n(i(r, e)))
    }
  }, [t, s, a, n]), [s, r.useCallback(e => {
    e.preventDefault();
    let r = t.current;
    null != r && (l(true), null == o || o(), null == n || n(i(r, e)))
  }, [t, o, n])]
}