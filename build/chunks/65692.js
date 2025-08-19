/** Chunk was on 33397 **/
/** chunk id: 65692, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  q: () => y
}), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk647438 = require("./647438.js"),
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

function y(e) {
  let {
    userId: t
  } = e, r = (0, a.e7)([c.default], () => c.default.getId());
  i()(r !== t, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
  let [u, y] = n.useState(null), [g, p] = n.useState(false), S = (0, a.e7)([f.Z], () => f.Z.getSecureFramesRosterMapEntry(t)), b = (0, a.e7)([f.Z], () => f.Z.getSecureFramesRosterMapEntry(r)), _ = n.useCallback(e => {
    y(l.fromByteArray(e)), p(false)
  }, []), m = n.useCallback(async (e, t, r, n) => {
    if (o.Z.supports(E.AN.MLS_PAIRWISE_FINGERPRINTS)) {
      var l;
      null == (l = f.Z.getRTCConnection()) || l.getMLSPairwiseFingerprint(d.Xj, r, e => {
        _(new Uint8Array(e))
      })
    } else _(await (0, s.Il)(d.Xj, new Uint8Array(t), e, new Uint8Array(n), r))
  }, [_]), O = n.useRef(null);
  return n.useEffect(() => {
    null != S && null != b && null == O.current && (p(true), O.current = setTimeout(() => m(r, b, t, S), 0));
    let e = O.current;
    return () => {
      null != e && clearTimeout(e)
    }
  }, [r, b, m, t, S]), n.useMemo(() => ({
    fingerprint: u,
    userKey: S,
    loading: g
  }), [u, g, S])
}