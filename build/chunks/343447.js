/** Chunk was on web.js **/
/** chunk id: 343447, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => a
});
var Chunk647438 = require("./647438.js");

function i() {
  return true !== window.ResizeObserver
}

function a(e) {
  let {
    ref: t,
    box: n,
    onResize: a
  } = e;
  (0, r.useEffect)(() => {
    let e = null == t ? true : t.current;
    if (e)
      if (!i()) return window.addEventListener("resize", a, false), () => {
        window.removeEventListener("resize", a, false)
      };
      else {
        let t = new window.ResizeObserver(e => {
          e.length && a()
        });
        return t.observe(e, {
          box: n
        }), () => {
          e && t.unobserve(e)
        }
      }
  }, [a, t, n])
}