/** Chunk was on web.js **/
/** chunk id: 472736, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => o
});
var Chunk473749 = require("./473749.js");

function i() {
  return true !== window.ResizeObserver
}

function o(e) {
  let {
    ref: t,
    box: n,
    onResize: o
  } = e;
  (0, r.useEffect)(() => {
    let e = null == t ? true : t.current;
    if (e)
      if (!i()) return window.addEventListener("resize", o, false), () => {
        window.removeEventListener("resize", o, false)
      };
      else {
        let t = new window.ResizeObserver(e => {
          e.length && o()
        });
        return t.observe(e, {
          box: n
        }), () => {
          e && t.unobserve(e)
        }
      }
  }, [o, t, n])
}