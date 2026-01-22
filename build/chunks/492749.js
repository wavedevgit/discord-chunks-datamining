/** Chunk was on web.js **/
/** chunk id: 492749, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk253932 = require("./253932.js"),
  Chunk371794 = require("./371794.js"),
  Chunk545509 = require("./545509.js");

function o(e, t) {
  let {
    shouldAnimate: n = true
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {}, o = i.kt.useSetting(), l = (0, s.j)(), c = n && l && o;
  return r.useMemo(() => {
    if ((null == e ? true : e.image_asset) != null) return (0, a.YE)(e.application_id, e.image_asset, t, c ? true : "webp")
  }, [t, e, c])
}