/** Chunk was on 21738 **/
/** chunk id: 18422, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./747238.js");
var Chunk64700 = require("./64700.js"),
  Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk197111 = require("./197111.js"),
  Chunk10088 = require("./10088.js"),
  Chunk961350 = require("./961350.js"),
  Chunk652215 = require("./652215.js");
let u = Chunk607399.Fr || Chunk607399.v1;

function d(e) {
  let {
    children: t,
    deepLinkType: n,
    path: i,
    paramsBuilder: d,
    search: p
  } = e, h = (0, l.bG)([o.default], () => {
    var e;
    return null != (e = o.default.getFingerprint()) ? e : o.default.getId()
  }), g = (0, l.bG)([s.A], () => s.A.getState(i), [i]), m = r.useMemo(() => null == d ? {
    path: i,
    fingerprint: h,
    search: p
  } : d(i, h, p), [i, d, h, p]);
  return r.useEffect(() => {
    u || null == g && a.A.openNativeAppModal(i, c.e$_.DEEP_LINK, {
      type: n,
      params: m
    })
  }, [g, i, m, n]), t
}