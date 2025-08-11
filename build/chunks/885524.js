/** Chunk was on web.js **/
/** chunk id: 885524, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk73800 = require("./73800.js"),
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
    videoSpinnerContext: l,
    streamKey: d,
    loading: f,
    paused: _ = false
  } = e, p = r.useRef(new o.V7), h = l === a.m.SELF_STREAM || l === a.m.REMOTE_STREAM ? i.Yn.STREAM : i.Yn.DEFAULT;
  return r.useEffect(() => {
    if (!f || _ || !s.w.isIncomingVideoEnabled()) return;
    let e = p.current;
    return e.start(u, () => {
      (0, c.K)(t, n, h, d)
    }), () => {
      e.stop()
    }
  }, [_, t, f, h, d, n]), {
    onReady: r.useCallback(() => {
      p.current.stop(), (0, c.w)(h, n)
    }, [n, h])
  }
}