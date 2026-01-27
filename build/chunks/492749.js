/** Chunk was on 92917 **/
/** chunk id: 492749, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk253932 = require("./253932.js"),
  Chunk371794 = require("./371794.js"),
  Chunk545509 = require("./545509.js");

function s(e, t) {
  let {
    shouldAnimate: n = true
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {}, s = i.kt.useSetting(), o = (0, a.j)(), c = n && o && s;
  return r.useMemo(() => {
    if ((null == e ? true : e.image_asset) != null) return (0, l.YE)(e.application_id, e.image_asset, t, c ? true : "webp")
  }, [t, e, c])
}