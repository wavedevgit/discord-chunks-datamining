/** Chunk was on web.js **/
/** chunk id: 240147, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js");

function i(e, t) {
  let n = e.getBoundingClientRect();
  return Math.min(1, Math.max(0, (t.clientX - n.left) / n.width))
}

function a(e) {
  let {
    ref: t,
    onDrag: n,
    onDragStart: a,
    onDragEnd: o
  } = e, [s, l] = r.useState(false);
  return r.useEffect(() => {
    if (s) return window.addEventListener("mouseup", e), window.addEventListener("mousemove", r), () => {
      window.removeEventListener("mouseup", e), window.removeEventListener("mousemove", r)
    };

    function e() {
      null == o || o(), l(false)
    }

    function r(e) {
      let r = t.current;
      null != r && (null == n || n(i(r, e)))
    }
  }, [t, s, o, n]), [s, r.useCallback(e => {
    e.preventDefault();
    let r = t.current;
    null != r && (l(true), null == a || a(), null == n || n(i(r, e)))
  }, [t, a, n])]
}