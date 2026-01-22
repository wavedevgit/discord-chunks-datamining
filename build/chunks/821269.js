/** Chunk was on 97492 **/
/** chunk id: 821269, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk922590 = require("./922590.js");
let o = [];

function c(e) {
  let {
    userId: t
  } = e, n = (0, l.bG)([i.A, a.default], () => {
    var e;
    return i.A.isFriend(t) || (null == (e = a.default.getUser(t)) ? true : e.isProvisional)
  }), c = (0, s.f1)(t);
  return r.useMemo(() => n ? o : c.map(e => {
    let {
      applicationId: t
    } = e;
    return t
  }), [c, n])
}