/** Chunk was on 31294 **/
/** chunk id: 41580, original params: e,t,_ (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk964486 = require("./964486.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk927813 = require("./927813.js"),
  Chunk340913 = require("./340913.js"),
  Chunk731854 = require("./731854.js");
let u = 2.5 * Chunk927813.A.Millis.SECOND,
  p = +Chunk927813.A.Millis.HOUR;

function f() {
  let [e, t] = o.useState(false), _ = (0, a.bG)([r.A], () => r.A.getMode() === l.TB.PUSH_TO_TALK), s = (0, a.bG)([i.A], () => {
    var e;
    return null != i.A.getChannelId() && (null != (e = i.A.getDuration()) ? e : Number.MAX_VALUE) < u
  }), [f, b] = o.useState(false), {
    showPTTJoinTooltip: m
  } = d.A.useConfig({
    location: "usePTTJoinTooltip"
  }), A = o.useRef(new n.Ep), C = o.useRef(new n.Ep);
  o.useEffect(() => {
    if (s && _ && !e) {
      if (d.A.getConfig({
          location: "usePTTJoinTooltip:couldDisplayTooltip"
        }), !m) return;
      b(true), t(true), C.current.start(p, () => {
        t(false)
      }), A.current.start(u, () => {
        b(false)
      })
    }
    s || b(false)
  }, [s, _, m, e]);
  let g = o.useCallback(() => {
    b(false), A.current.stop()
  }, []);
  return (0, c.l0)(() => {
    A.current.stop(), C.current.stop()
  }), {
    shouldShowTooltip: f,
    dismissTooltip: g
  }
}