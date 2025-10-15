/** Chunk was on 27978 **/
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
    search: h
  } = e, g = (0, l.e7)([o.default], () => {
    var e;
    return null != (e = o.default.getFingerprint()) ? e : o.default.getId()
  }), m = (0, l.e7)([a.Z], () => a.Z.getState(i), [i]), p = r.useMemo(() => null == d ? {
    path: i,
    fingerprint: g,
    search: h
  } : d(i, g, h), [i, d, g, h]);
  return r.useEffect(() => {
    u || null == m && s.Z.openNativeAppModal(i, c.Etm.DEEP_LINK, {
      type: n,
      params: p
    })
  }, [m, i, p, n]), t
}