/** Chunk was on web.js **/
/** chunk id: 150677, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => i
}), require("./388685.js");
var Chunk473749 = require("./473749.js");

function i() {
  let e = window,
    [t, n] = r.useState(e.document.hasFocus());
  return r.useEffect(() => {
    let t = () => n(true),
      r = () => n(false);
    return e.addEventListener("focus", t), e.addEventListener("blur", r), () => {
      e.removeEventListener("focus", t), e.removeEventListener("blur", r)
    }
  }, [e]), t
}