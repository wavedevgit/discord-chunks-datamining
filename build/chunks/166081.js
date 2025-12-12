/** Chunk was on web.js **/
/** chunk id: 166081, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk695346 = require("./695346.js"),
  Chunk73346 = require("./73346.js"),
  Chunk834431 = require("./834431.js");

function s(e, t) {
  let {
    shouldAnimate: n = true
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {}, s = i.QK.useSetting(), l = (0, o.n)(), c = n && l && s;
  return r.useMemo(() => {
    if ((null == e ? true : e.image_asset) != null) return (0, a._W)(e.application_id, e.image_asset, t, c ? true : "webp")
  }, [t, e, c])
}