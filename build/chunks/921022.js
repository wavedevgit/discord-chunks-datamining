/** Chunk was on web.js **/
/** chunk id: 921022, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk473749 = require("./473749.js"),
  Chunk110660 = require("./110660.js");

function a(e) {
  let {
    delay: t,
    disable: n = false
  } = e, a = (0, i.Z)();
  r.useEffect(() => {
    if (t <= 0 || n) return;
    let e = setTimeout(() => {
      a()
    }, t);
    return () => clearTimeout(e)
  }, [t, n, a])
}