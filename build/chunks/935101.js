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
let p = 3 * Chunk927813.A.Millis.SECOND;

function b() {
  let {
    showPTTSpeakingIndicator: e
  } = s.A.useConfig({
    location: "useSpeakingWhilePTT"
  }), [t, a] = o.useState(false), d = (0, _.bG)([r.A], () => r.A.getMode() === u.TB.PUSH_TO_TALK), b = (0, _.bG)([i.A], () => i.A.getRTCConnectionId()), f = o.useRef(new c.Ep);
  return o.useEffect(() => {
    a(false)
  }, [b]), o.useEffect(() => {
    let t = 0,
      o = f.current;

    function _(e, _) {
      let n = (_ & u.ME.VOICE) === u.ME.VOICE,
        c = l.A.isCurrentUserPTTActive();
      n && !c ? ++t >= 5 && (a(true), o.start(p, () => {
        a(false)
      })) : t = 0
    }
    return e && d && null != b && r.A.getMediaEngine().on(n.bg.VoiceActivity, _), () => {
      r.A.getMediaEngine().removeListener(n.bg.VoiceActivity, _), o.stop()
    }
  }, [e, d, b]), t
}