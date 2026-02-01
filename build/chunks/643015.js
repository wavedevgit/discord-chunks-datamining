/** Chunk was on 88474 **/
/** chunk id: 643015, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk287809 = require("./287809.js"),
  Chunk966107 = require("./966107.js"),
  Chunk380335 = require("./380335.js");
let o = new Set(["GB"]);

function c() {
  let e = (0, l.bG)([s.A], () => s.A.getUserCountryCode()),
    t = false === (0, l.bG)([i.default], () => {
      var e;
      return null == (e = i.default.getCurrentUser()) ? true : e.nsfwAllowed
    });
  return r.useEffect(() => {
    null == e && (0, a.xf)()
  }, [e]), null != e && !!o.has(e.alpha2) && !!t
}