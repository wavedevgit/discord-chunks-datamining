/** Chunk was on 33397 **/
/** chunk id: 65692, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  q: () => g
}), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk473749 = require("./473749.js"),
  Chunk250683 = require("./250683.js"),
  Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk974167 = require("./974167.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk760373 = require("./760373.js"),
  Chunk65154 = require("./65154.js");

function g(e) {
  let {
    userId: t
  } = e, r = (0, c.e7)([s.default], () => s.default.getId());
  i()(r !== t, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
  let [u, g] = n.useState(null), [y, p] = n.useState(false), b = (0, c.e7)([f.Z], () => f.Z.getSecureFramesRosterMapEntry(t)), m = (0, c.e7)([f.Z], () => f.Z.getSecureFramesRosterMapEntry(r)), O = n.useCallback(e => {
    g(l.fromByteArray(e)), p(false)
  }, []), S = n.useCallback(async (e, t, r, n) => {
    if (a.Z.supports(E.AN.MLS_PAIRWISE_FINGERPRINTS)) {
      var l;
      null == (l = f.Z.getRTCConnection()) || l.getMLSPairwiseFingerprint(d.Xj, r, e => {
        O(new Uint8Array(e))
      })
    } else O(await (0, o.Il)(d.Xj, new Uint8Array(t), e, new Uint8Array(n), r))
  }, [O]), T = n.useRef(null);
  return n.useEffect(() => {
    null != b && null != m && null == T.current && (p(true), T.current = setTimeout(() => S(r, m, t, b), 0));
    let e = T.current;
    return () => {
      null != e && clearTimeout(e)
    }
  }, [r, m, S, t, b]), n.useMemo(() => ({
    fingerprint: u,
    userKey: b,
    loading: y
  }), [u, y, b])
}