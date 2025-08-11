/** Chunk was on 33397 **/
/** chunk id: 65692, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  q: () => b
}), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk73800 = require("./73800.js"),
  Chunk250683 = require("./250683.js"),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk974167 = require("./974167.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk760373 = require("./760373.js"),
  Chunk65154 = require("./65154.js");

function b(e) {
  let {
    userId: t
  } = e, r = (0, i.e7)([a.default], () => a.default.getId());
  c()(r !== t, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
  let [o, b] = n.useState(null), [m, y] = n.useState(false), h = (0, i.e7)([d.Z], () => d.Z.getSecureFramesRosterMapEntry(t)), j = (0, i.e7)([d.Z], () => d.Z.getSecureFramesRosterMapEntry(r)), g = n.useCallback(e => {
    b(l.fromByteArray(e)), y(false)
  }, []), O = n.useCallback(async (e, t, r, n) => {
    if (u.Z.supports(p.AN.MLS_PAIRWISE_FINGERPRINTS)) {
      var l;
      null == (l = d.Z.getRTCConnection()) || l.getMLSPairwiseFingerprint(f.Xj, r, e => {
        g(new Uint8Array(e))
      })
    } else g(await (0, s.Il)(f.Xj, new Uint8Array(t), e, new Uint8Array(n), r))
  }, [g]), x = n.useRef(null);
  return n.useEffect(() => {
    null != h && null != j && null == x.current && (y(true), x.current = setTimeout(() => O(r, j, t, h), 0));
    let e = x.current;
    return () => {
      null != e && clearTimeout(e)
    }
  }, [r, j, O, t, h]), n.useMemo(() => ({
    fingerprint: o,
    userKey: h,
    loading: m
  }), [o, m, h])
}