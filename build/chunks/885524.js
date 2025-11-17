/** Chunk was on 46931 **/
/** chunk id: 885524, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk473749 = require("./473749.js"),
  Chunk46973 = require("./46973.js"),
  Chunk846519 = require("./846519.js"),
  Chunk763520 = require("./763520.js"),
  Chunk798681 = require("./798681.js"),
  Chunk70956 = require("./70956.js"),
  Chunk878001 = require("./878001.js");
let u = 20 * Chunk70956.Z.Millis.SECOND;

function d(e) {
  let {
    streamId: t,
    userId: n,
    videoSpinnerContext: c,
    streamKey: d,
    loading: f,
    paused: p = false
  } = e, m = r.useRef(new l.V7), _ = c === a.m.SELF_STREAM || c === a.m.REMOTE_STREAM ? i.Yn.STREAM : i.Yn.DEFAULT;
  return r.useEffect(() => {
    if (!f || p || !o.w.isIncomingVideoEnabled()) return;
    let e = m.current;
    return e.start(u, () => {
      (0, s.K)(t, n, _, d)
    }), () => {
      e.stop()
    }
  }, [p, t, f, _, d, n]), {
    onReady: r.useCallback(() => {
      m.current.stop(), (0, s.w)(_, n)
    }, [n, _])
  }
}