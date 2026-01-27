/** Chunk was on 16674 **/
/** chunk id: 50299, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  R: () => E
}), require("./896048.js"), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
var Chunk64700 = require("./64700.js"),
  Chunk827762 = require("./827762.js"),
  Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk149597 = require("./149597.js"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js");
require("./603266.js");
var Chunk731854 = require("./731854.js");

function E(e) {
  let {
    userId: t
  } = e, r = (0, s.bG)([c.default], () => c.default.getId());
  i()(r !== t, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
  let [u, E] = n.useState(null), [y, b] = n.useState(false), A = (0, s.bG)([f.A], () => f.A.getSecureFramesRosterMapEntry(t)), p = (0, s.bG)([f.A], () => f.A.getSecureFramesRosterMapEntry(r)), g = n.useCallback(e => {
    E(l.fromByteArray(e)), b(false)
  }, []), O = n.useCallback(async (e, t, r, n) => {
    if (o.A.supports(d.O5.MLS_PAIRWISE_FINGERPRINTS)) {
      var l;
      null == (l = f.A.getRTCConnection()) || l.getMLSPairwiseFingerprint(0, r, e => {
        g(new Uint8Array(e))
      })
    } else g(await (0, a._x)(0, new Uint8Array(t), e, new Uint8Array(n), r))
  }, [g]), _ = n.useRef(null);
  return n.useEffect(() => {
    null != A && null != p && null == _.current && (b(true), _.current = setTimeout(() => O(r, p, t, A), 0));
    let e = _.current;
    return () => {
      null != e && clearTimeout(e)
    }
  }, [r, p, O, t, A]), n.useMemo(() => ({
    fingerprint: u,
    userKey: A,
    loading: y
  }), [u, y, A])
}