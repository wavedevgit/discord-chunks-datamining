/** Chunk was on 63373 **/
/** chunk id: 885524, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk647438 = require("./647438.js"),
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
    videoSpinnerContext: o,
    streamKey: d,
    loading: p,
    paused: f = false
  } = e, m = l.useRef(new r.V7), v = o === s.m.SELF_STREAM || o === s.m.REMOTE_STREAM ? i.Yn.STREAM : i.Yn.DEFAULT;
  return l.useEffect(() => {
    if (!p || f || !a.w.isIncomingVideoEnabled()) return;
    let e = m.current;
    return e.start(u, () => {
      (0, c.K)(t, n, v, d)
    }), () => {
      e.stop()
    }
  }, [f, t, p, v, d, n]), {
    onReady: l.useCallback(() => {
      m.current.stop(), (0, c.w)(v, n)
    }, [n, v])
  }
}