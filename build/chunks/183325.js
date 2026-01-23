/** Chunk was on 31748 **/
/** chunk id: 183325, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk205693 = require("./205693.js"),
  Chunk451988 = require("./451988.js"),
  Chunk684339 = require("./684339.js"),
  Chunk808180 = require("./808180.js"),
  Chunk927813 = require("./927813.js"),
  Chunk37965 = require("./37965.js");
let u = 20 * Chunk927813.A.Millis.SECOND;

function d(e) {
  let {
    streamId: t,
    userId: n,
    videoSpinnerContext: s,
    streamKey: d,
    loading: f,
    paused: p = false
  } = e, g = r.useRef(new i.Ep), m = s === a.u.SELF_STREAM || s === a.u.REMOTE_STREAM ? l.x.STREAM : l.x.DEFAULT;
  return r.useEffect(() => {
    if (!f || p || !o.X.isIncomingVideoEnabled()) return;
    let e = g.current;
    return e.start(u, () => {
      (0, c.Z)(t, n, m, d)
    }), () => {
      e.stop()
    }
  }, [p, t, f, m, d, n]), {
    onReady: r.useCallback(() => {
      g.current.stop(), (0, c.W)(m, n)
    }, [n, m])
  }
}