/** Chunk was on web.js **/
/** chunk id: 586983, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk27867 = require("./27867.js");

function a(e) {
  let {
    delay: t,
    disable: n = false
  } = e, a = (0, i.A)();
  r.useEffect(() => {
    if (t <= 0 || n) return;
    let e = setTimeout(() => {
      a()
    }, t);
    return () => clearTimeout(e)
  }, [t, n, a])
}