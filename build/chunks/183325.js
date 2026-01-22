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
    videoSpinnerContext: o,
    streamKey: d,
    loading: f,
    paused: p = false
  } = e, b = l.useRef(new i.Ep), g = o === a.u.SELF_STREAM || o === a.u.REMOTE_STREAM ? r.x.STREAM : r.x.DEFAULT;
  return l.useEffect(() => {
    if (!f || p || !s.X.isIncomingVideoEnabled()) return;
    let e = b.current;
    return e.start(u, () => {
      (0, c.Z)(t, n, g, d)
    }), () => {
      e.stop()
    }
  }, [p, t, f, g, d, n]), {
    onReady: l.useCallback(() => {
      b.current.stop(), (0, c.W)(g, n)
    }, [n, g])
  }
}