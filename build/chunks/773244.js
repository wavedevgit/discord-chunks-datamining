/** Chunk was on 1272 **/
/** chunk id: 773244, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./35282.js");
var Chunk647438 = require("./647438.js"),
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
  } = e, f = (0, l.e7)([o.default], () => {
    var e;
    return null != (e = o.default.getFingerprint()) ? e : o.default.getId()
  }), h = (0, l.e7)([s.Z], () => s.Z.getState(i), [i]), g = r.useMemo(() => null == d ? {
    path: i,
    fingerprint: f,
    search: p
  } : d(i, f, p), [i, d, f, p]);
  return r.useEffect(() => {
    u || null == h && a.Z.openNativeAppModal(i, c.Etm.DEEP_LINK, {
      type: n,
      params: g
    })
  }, [h, i, g, n]), t
}