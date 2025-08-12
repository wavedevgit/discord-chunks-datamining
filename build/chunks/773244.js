/** Chunk was on 1272 **/
/** chunk id: 773244, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./35282.js");
var Chunk73800 = require("./73800.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk625128 = require("./625128.js"),
  Chunk362762 = require("./362762.js"),
  Chunk314897 = require("./314897.js"),
  Chunk981631 = require("./981631.js");
let u = Chunk873546.tq || Chunk873546.Em;

function d(e) {
  let {
    children: t,
    deepLinkType: n,
    path: i,
    paramsBuilder: d,
    search: p
  } = e, h = (0, l.e7)([s.default], () => {
    var e;
    return null != (e = s.default.getFingerprint()) ? e : s.default.getId()
  }), f = (0, l.e7)([o.Z], () => o.Z.getState(i), [i]), g = r.useMemo(() => null == d ? {
    path: i,
    fingerprint: h,
    search: p
  } : d(i, h, p), [i, d, h, p]);
  return r.useEffect(() => {
    u || null == f && a.Z.openNativeAppModal(i, c.Etm.DEEP_LINK, {
      type: n,
      params: g
    })
  }, [f, i, g, n]), t
}