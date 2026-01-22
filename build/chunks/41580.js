/** Chunk was on 31294 **/
/** chunk id: 41580, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  A: () => _
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
let o = 2.5 * Chunk927813.A.Millis.SECOND,
  u = +Chunk927813.A.Millis.HOUR;

function _() {
  let [e, a] = d.useState(false), t = (0, c.bG)([r.A], () => r.A.getMode() === i.TB.PUSH_TO_TALK), l = (0, c.bG)([n.A], () => {
    var e;
    return null != n.A.getChannelId() && (null != (e = n.A.getDuration()) ? e : Number.MAX_VALUE) < o
  }), [_, p] = d.useState(false), {
    showPTTJoinTooltip: A
  } = s.A.useConfig({
    location: "usePTTJoinTooltip"
  }), g = d.useRef(new b.Ep), O = d.useRef(new b.Ep);
  d.useEffect(() => {
    if (l && t && !e) {
      if (s.A.getConfig({
          location: "usePTTJoinTooltip:couldDisplayTooltip"
        }), !A) return;
      p(true), a(true), O.current.start(u, () => {
        a(false)
      }), g.current.start(o, () => {
        p(false)
      })
    }
    l || p(false)
  }, [l, t, A, e]);
  let v = d.useCallback(() => {
    p(false), g.current.stop()
  }, []);
  return (0, f.l0)(() => {
    g.current.stop(), O.current.stop()
  }), {
    shouldShowTooltip: _,
    dismissTooltip: v
  }
}