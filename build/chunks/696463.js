/** Chunk was on web.js **/
/** chunk id: 696463, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk787925 = require("./787925.js"),
  Chunk199773 = require("./199773.js"),
  Chunk256787 = require("./256787.js"),
  Chunk49999 = require("./49999.js");

function l(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    l = !n && null != e && !i.C.has(e);
  r.useEffect(() => () => {
    l && (a.A.lastDCDismissed !== e || (0, s.vf)(e)) && t(o.i.AUTO_DISMISS, true)
  }, [l, t, e])
}