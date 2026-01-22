/** Chunk was on web.js **/
/** chunk id: 941861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => i
}), require("./896048.js");
var Chunk64700 = require("./64700.js");

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