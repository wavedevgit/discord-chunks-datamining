/** Chunk was on 31294 **/
/** chunk id: 935101, original params: e,t,_ (module,exports,require) **/
require.d(exports, {
  A: () => f
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

function f() {
  let {
    showPTTSpeakingIndicator: e
  } = l.A.useConfig({
    location: "useSpeakingWhilePTT"
  }), [t, _] = o.useState(false), d = (0, a.bG)([r.A], () => r.A.getMode() === u.TB.PUSH_TO_TALK), f = (0, a.bG)([i.A], () => i.A.getRTCConnectionId()), b = o.useRef(new c.Ep);
  return o.useEffect(() => {
    _(false)
  }, [f]), o.useEffect(() => {
    let t = 0,
      o = b.current;

    function a(e, a) {
      let n = (a & u.ME.VOICE) === u.ME.VOICE,
        c = s.A.isCurrentUserPTTActive();
      n && !c ? ++t >= 5 && (_(true), o.start(p, () => {
        _(false)
      })) : t = 0
    }
    return e && d && null != f && r.A.getMediaEngine().on(n.bg.VoiceActivity, a), () => {
      r.A.getMediaEngine().removeListener(n.bg.VoiceActivity, a), o.stop()
    }
  }, [e, d, f]), t
}