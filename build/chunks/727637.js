/** Chunk was on web.js **/
/** chunk id: 727637, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk647438 = require("./647438.js");

function i(e) {
  let [t, n] = (0, r.useState)(false), i = (0, r.useRef)(e.current);
  return (0, r.useEffect)(() => {
    i.current = e.current
  }, [e]), (0, r.useEffect)(() => {
    let e = i.current;
    if (null == e) return;
    let t = () => n(true),
      r = () => n(false);
    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", r), () => {
      e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", r)
    }
  }, [i]), t
}