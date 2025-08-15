/** Chunk was on 33397 **/
/** chunk id: 65692, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  q: () => y
}), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk647438 = require("./647438.js"),
  Chunk250683 = require("./250683.js"),
  Chunk512722 = require("./512722.js"),
  u = require.n(Chunk512722),
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
  } = e, r = (0, a.e7)([o.default], () => o.default.getId());
  u()(r !== t, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
  let [i, y] = n.useState(null), [g, p] = n.useState(false), m = (0, a.e7)([d.Z], () => d.Z.getSecureFramesRosterMapEntry(t)), b = (0, a.e7)([d.Z], () => d.Z.getSecureFramesRosterMapEntry(r)), S = n.useCallback(e => {
    y(l.fromByteArray(e)), p(false)
  }, []), _ = n.useCallback(async (e, t, r, n) => {
    if (c.Z.supports(E.AN.MLS_PAIRWISE_FINGERPRINTS)) {
      var l;
      null == (l = d.Z.getRTCConnection()) || l.getMLSPairwiseFingerprint(f.Xj, r, e => {
        S(new Uint8Array(e))
      })
    } else S(await (0, s.Il)(f.Xj, new Uint8Array(t), e, new Uint8Array(n), r))
  }, [S]), h = n.useRef(null);
  return n.useEffect(() => {
    null != m && null != b && null == h.current && (p(true), h.current = setTimeout(() => _(r, b, t, m), 0));
    let e = h.current;
    return () => {
      null != e && clearTimeout(e)
    }
  }, [r, b, _, t, m]), n.useMemo(() => ({
    fingerprint: i,
    userKey: m,
    loading: g
  }), [i, g, m])
}