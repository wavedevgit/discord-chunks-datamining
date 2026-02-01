/** Chunk was on 61344 **/
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
    loading: h,
    paused: p = false
  } = e, f = l.useRef(new i.Ep), m = o === a.u.SELF_STREAM || o === a.u.REMOTE_STREAM ? r.x.STREAM : r.x.DEFAULT;
  return l.useEffect(() => {
    if (!h || p || !s.X.isIncomingVideoEnabled()) return;
    let e = f.current;
    return e.start(u, () => {
      (0, c.Z)(t, n, m, d)
    }), () => {
      e.stop()
    }
  }, [p, t, h, m, d, n]), {
    onReady: l.useCallback(() => {
      f.current.stop(), (0, c.W)(m, n)
    }, [n, m])
  }
}