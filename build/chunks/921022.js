/** Chunk was on web.js **/
/** chunk id: 921022, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk73800 = require("./73800.js"),
  Chunk710251 = require("./710251.js");

function o(e) {
  let {
    delay: t,
    disable: n = false
  } = e, o = (0, i.Z)();
  r.useEffect(() => {
    if (t <= 0 || n) return;
    let e = setTimeout(() => {
      o()
    }, t);
    return () => clearTimeout(e)
  }, [t, n, o])
}