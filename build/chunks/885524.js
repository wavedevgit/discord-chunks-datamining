/** Chunk was on 69813 **/
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
  } = e, g = r.useRef(new i.V7), b = c === a.m.SELF_STREAM || c === a.m.REMOTE_STREAM ? l.Yn.STREAM : l.Yn.DEFAULT;
  return r.useEffect(() => {
    if (!f || p || !o.w.isIncomingVideoEnabled()) return;
    let e = g.current;
    return e.start(u, () => {
      (0, s.K)(t, n, b, d)
    }), () => {
      e.stop()
    }
  }, [p, t, f, b, d, n]), {
    onReady: r.useCallback(() => {
      g.current.stop(), (0, s.w)(b, n)
    }, [n, b])
  }
}