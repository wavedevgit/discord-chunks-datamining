/** Chunk was on 31294 **/
/** chunk id: 41580, original params: e,_,t (module,exports,require) **/
require.d(exports, {
  A: () => u
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
let d = 2.5 * Chunk927813.A.Millis.SECOND,
  b = +Chunk927813.A.Millis.HOUR;

function u() {
  let [e, _] = a.useState(false), t = (0, o.bG)([i.A], () => i.A.getMode() === p.TB.PUSH_TO_TALK), l = (0, o.bG)([c.A], () => {
    var e;
    return null != c.A.getChannelId() && (null != (e = c.A.getDuration()) ? e : Number.MAX_VALUE) < d
  }), [u, f] = a.useState(false), {
    showPTTJoinTooltip: m
  } = s.A.useConfig({
    location: "usePTTJoinTooltip"
  }), g = a.useRef(new n.Ep), C = a.useRef(new n.Ep);
  a.useEffect(() => {
    if (l && t && !e) {
      if (s.A.getConfig({
          location: "usePTTJoinTooltip:couldDisplayTooltip"
        }), !m) return;
      f(true), _(true), C.current.start(b, () => {
        _(false)
      }), g.current.start(d, () => {
        f(false)
      })
    }
    l || f(false)
  }, [l, t, m, e]);
  let x = a.useCallback(() => {
    f(false), g.current.stop()
  }, []);
  return (0, r.l0)(() => {
    g.current.stop(), C.current.stop()
  }), {
    shouldShowTooltip: u,
    dismissTooltip: x
  }
}