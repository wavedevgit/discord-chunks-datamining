/** Chunk was on 26434 **/
/** chunk id: 166081, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => a
});
var Chunk647438 = require("./647438.js"),
  Chunk695346 = require("./695346.js"),
  Chunk73346 = require("./73346.js"),
  Chunk834431 = require("./834431.js");

function a(e, t) {
  let {
    shouldAnimate: n = true
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {}, a = i.QK.useSetting(), s = (0, o.n)(), c = n && s && a;
  return r.useMemo(() => {
    if ((null == e ? true : e.image_asset) != null) return (0, l._W)(e.application_id, e.image_asset, t, c ? true : "webp")
  }, [t, e, c])
}