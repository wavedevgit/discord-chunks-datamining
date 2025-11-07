/** Chunk was on 86642 **/
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
    videoSpinnerContext: s,
    streamKey: d,
    loading: p,
    paused: f = false
  } = e, h = i.useRef(new l.V7), m = s === a.m.SELF_STREAM || s === a.m.REMOTE_STREAM ? r.Yn.STREAM : r.Yn.DEFAULT;
  return i.useEffect(() => {
    if (!p || f || !o.w.isIncomingVideoEnabled()) return;
    let e = h.current;
    return e.start(u, () => {
      (0, c.K)(t, n, m, d)
    }), () => {
      e.stop()
    }
  }, [f, t, p, m, d, n]), {
    onReady: i.useCallback(() => {
      h.current.stop(), (0, c.w)(m, n)
    }, [n, m])
  }
}