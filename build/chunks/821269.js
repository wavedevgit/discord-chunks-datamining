/** Chunk was on 63974 **/
/** chunk id: 821269, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk922590 = require("./922590.js");
let a = [];

function d(e) {
  let {
    userId: t
  } = e, n = (0, i.bG)([r.A, s.default], () => {
    var e;
    return r.A.isFriend(t) || (null == (e = s.default.getUser(t)) ? true : e.isProvisional)
  }), d = (0, o.f1)(t);
  return l.useMemo(() => n ? a : d.map(e => {
    let {
      applicationId: t
    } = e;
    return t
  }), [d, n])
}