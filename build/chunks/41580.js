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
let p = 2.5 * Chunk927813.A.Millis.SECOND,
  d = +Chunk927813.A.Millis.HOUR;

function b() {
  let [e, t] = a.useState(false), _ = (0, o.bG)([i.A], () => i.A.getMode() === u.TB.PUSH_TO_TALK), s = (0, o.bG)([l.A], () => {
    var e;
    return null != l.A.getChannelId() && (null != (e = l.A.getDuration()) ? e : Number.MAX_VALUE) < p
  }), [b, f] = a.useState(false), {
    showPTTJoinTooltip: g
  } = c.A.useConfig({
    location: "usePTTJoinTooltip"
  }), m = a.useRef(new r.Ep), C = a.useRef(new r.Ep);
  a.useEffect(() => {
    if (s && _ && !e) {
      if (c.A.getConfig({
          location: "usePTTJoinTooltip:couldDisplayTooltip"
        }), !g) return;
      f(true), t(true), C.current.start(d, () => {
        t(false)
      }), m.current.start(p, () => {
        f(false)
      })
    }
    s || f(false)
  }, [s, _, g, e]);
  let A = a.useCallback(() => {
    f(false), m.current.stop()
  }, []);
  return (0, n.l0)(() => {
    m.current.stop(), C.current.stop()
  }), {
    shouldShowTooltip: b,
    dismissTooltip: A
  }
}