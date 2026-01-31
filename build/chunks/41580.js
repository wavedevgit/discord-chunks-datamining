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
let b = 2.5 * Chunk927813.A.Millis.SECOND,
  d = +Chunk927813.A.Millis.HOUR;

function u() {
  let [e, _] = a.useState(false), t = (0, o.bG)([c.A], () => c.A.getMode() === p.TB.PUSH_TO_TALK), l = (0, o.bG)([i.A], () => {
    var e;
    return null != i.A.getChannelId() && (null != (e = i.A.getDuration()) ? e : Number.MAX_VALUE) < b
  }), [u, f] = a.useState(false), {
    showPTTJoinTooltip: g
  } = s.A.useConfig({
    location: "usePTTJoinTooltip"
  }), C = a.useRef(new n.Ep), m = a.useRef(new n.Ep);
  a.useEffect(() => {
    if (l && t && !e) {
      if (s.A.getConfig({
          location: "usePTTJoinTooltip:couldDisplayTooltip"
        }), !g) return;
      f(true), _(true), m.current.start(d, () => {
        _(false)
      }), C.current.start(b, () => {
        f(false)
      })
    }
    l || f(false)
  }, [l, t, g, e]);
  let x = a.useCallback(() => {
    f(false), C.current.stop()
  }, []);
  return (0, r.l0)(() => {
    C.current.stop(), m.current.stop()
  }), {
    shouldShowTooltip: u,
    dismissTooltip: x
  }
}