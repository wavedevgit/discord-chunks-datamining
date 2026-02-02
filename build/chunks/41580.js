/** Chunk was on 31294 **/
/** chunk id: 41580, original params: e,t,_ (module,exports,require) **/
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
  f = +Chunk927813.A.Millis.HOUR;

function b() {
  let [e, t] = n.useState(false), _ = (0, a.bG)([r.A], () => r.A.getMode() === d.TB.PUSH_TO_TALK), l = (0, a.bG)([i.A], () => {
    var e;
    return null != i.A.getChannelId() && (null != (e = i.A.getDuration()) ? e : Number.MAX_VALUE) < u
  }), [b, p] = n.useState(false), {
    showPTTJoinTooltip: m
  } = s.A.useConfig({
    location: "usePTTJoinTooltip"
  }), A = n.useRef(new o.Ep), C = n.useRef(new o.Ep);
  n.useEffect(() => {
    if (l && _ && !e) {
      if (s.A.getConfig({
          location: "usePTTJoinTooltip:couldDisplayTooltip"
        }), !m) return;
      p(true), t(true), C.current.start(f, () => {
        t(false)
      }), A.current.start(u, () => {
        p(false)
      })
    }
    l || p(false)
  }, [l, _, m, e]);
  let g = n.useCallback(() => {
    p(false), A.current.stop()
  }, []);
  return (0, c.l0)(() => {
    A.current.stop(), C.current.stop()
  }), {
    shouldShowTooltip: b,
    dismissTooltip: g
  }
}