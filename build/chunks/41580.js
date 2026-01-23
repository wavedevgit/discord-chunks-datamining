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
let p = 2.5 * Chunk927813.A.Millis.SECOND,
  d = +Chunk927813.A.Millis.HOUR;

function b() {
  let [e, t] = r.useState(false), a = (0, n.bG)([l.A], () => l.A.getMode() === u.TB.PUSH_TO_TALK), s = (0, n.bG)([i.A], () => {
    var e;
    return null != i.A.getChannelId() && (null != (e = i.A.getDuration()) ? e : Number.MAX_VALUE) < p
  }), [b, f] = r.useState(false), {
    showPTTJoinTooltip: g
  } = c.A.useConfig({
    location: "usePTTJoinTooltip"
  }), m = r.useRef(new _.Ep), v = r.useRef(new _.Ep);
  r.useEffect(() => {
    if (s && a && !e) {
      if (c.A.getConfig({
          location: "usePTTJoinTooltip:couldDisplayTooltip"
        }), !g) return;
      f(true), t(true), v.current.start(d, () => {
        t(false)
      }), m.current.start(p, () => {
        f(false)
      })
    }
    s || f(false)
  }, [s, a, g, e]);
  let C = r.useCallback(() => {
    f(false), m.current.stop()
  }, []);
  return (0, o.l0)(() => {
    m.current.stop(), v.current.stop()
  }), {
    shouldShowTooltip: b,
    dismissTooltip: C
  }
}