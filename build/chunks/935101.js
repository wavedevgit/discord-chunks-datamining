/** Chunk was on 31294 **/
/** chunk id: 935101, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk205693 = require("./205693.js"),
  Chunk451988 = require("./451988.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk485296 = require("./485296.js"),
  Chunk927813 = require("./927813.js"),
  Chunk340913 = require("./340913.js"),
  Chunk731854 = require("./731854.js");
let d = 3 * Chunk927813.A.Millis.SECOND;

function b() {
  let {
    showPTTSpeakingIndicator: e
  } = u.A.useConfig({
    location: "useSpeakingWhilePTT"
  }), [t, a] = r.useState(false), c = (0, n.bG)([l.A], () => l.A.getMode() === p.TB.PUSH_TO_TALK), b = (0, n.bG)([i.A], () => i.A.getRTCConnectionId()), f = r.useRef(new o.Ep);
  return r.useEffect(() => {
    a(false)
  }, [b]), r.useEffect(() => {
    let t = 0,
      r = f.current;

    function n(e, n) {
      let _ = (n & p.ME.VOICE) === p.ME.VOICE,
        o = s.A.isCurrentUserPTTActive();
      _ && !o ? ++t >= 5 && (a(true), r.start(d, () => {
        a(false)
      })) : t = 0
    }
    return e && c && null != b && l.A.getMediaEngine().on(_.bg.VoiceActivity, n), () => {
      l.A.getMediaEngine().removeListener(_.bg.VoiceActivity, n), r.stop()
    }
  }, [e, c, b]), t
}