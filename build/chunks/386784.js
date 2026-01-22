/** Chunk was on web.js **/
/** chunk id: 386784, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk545868 = require("./545868.js"),
  Chunk642133 = require("./642133.js");
let o = {};

function l(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0,
    n = (0, i.bG)([s.A], () => s.A.getRoleMemberCount(e));
  return r.useEffect(() => {
    if (null == e) return;
    let n = o[e];
    null != n && t > 0 && Date.now() - n < t || (o[e] = Date.now(), a.L(e))
  }, [e, t]), n
}