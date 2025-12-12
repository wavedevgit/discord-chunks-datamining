/** Chunk was on web.js **/
/** chunk id: 14263, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk480608 = require("./480608.js"),
  Chunk243730 = require("./243730.js");
let s = {};

function l(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0,
    n = (0, i.e7)([o.Z], () => o.Z.getRoleMemberCount(e));
  return r.useEffect(() => {
    if (null == e) return;
    let n = s[e];
    null != n && t > 0 && Date.now() - n < t || (s[e] = Date.now(), a.E(e))
  }, [e, t]), n
}