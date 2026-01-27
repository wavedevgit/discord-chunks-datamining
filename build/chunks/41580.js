/** Chunk was on 31294 **/
/** chunk id: 41580, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => b
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

function b() {
  let [e, t] = o.useState(false), a = (0, _.bG)([r.A], () => r.A.getMode() === s.TB.PUSH_TO_TALK), l = (0, _.bG)([i.A], () => {
    var e;
    return null != i.A.getChannelId() && (null != (e = i.A.getDuration()) ? e : Number.MAX_VALUE) < u
  }), [b, f] = o.useState(false), {
    showPTTJoinTooltip: A
  } = d.A.useConfig({
    location: "usePTTJoinTooltip"
  }), g = o.useRef(new n.Ep), C = o.useRef(new n.Ep);
  o.useEffect(() => {
    if (l && a && !e) {
      if (d.A.getConfig({
          location: "usePTTJoinTooltip:couldDisplayTooltip"
        }), !A) return;
      f(true), t(true), C.current.start(p, () => {
        t(false)
      }), g.current.start(u, () => {
        f(false)
      })
    }
    l || f(false)
  }, [l, a, A, e]);
  let m = o.useCallback(() => {
    f(false), g.current.stop()
  }, []);
  return (0, c.l0)(() => {
    g.current.stop(), C.current.stop()
  }), {
    shouldShowTooltip: b,
    dismissTooltip: m
  }
}