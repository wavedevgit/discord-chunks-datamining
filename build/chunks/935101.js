/** Chunk was on 31294 **/
/** chunk id: 935101, original params: e,t,_ (module,exports,require) **/
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
  }), [t, _] = a.useState(false), c = (0, o.bG)([i.A], () => i.A.getMode() === p.TB.PUSH_TO_TALK), b = (0, o.bG)([l.A], () => l.A.getRTCConnectionId()), f = a.useRef(new n.Ep);
  return a.useEffect(() => {
    _(false)
  }, [b]), a.useEffect(() => {
    let t = 0,
      a = f.current;

    function o(e, o) {
      let r = (o & p.ME.VOICE) === p.ME.VOICE,
        n = s.A.isCurrentUserPTTActive();
      r && !n ? ++t >= 5 && (_(true), a.start(d, () => {
        _(false)
      })) : t = 0
    }
    return e && c && null != b && i.A.getMediaEngine().on(r.bg.VoiceActivity, o), () => {
      i.A.getMediaEngine().removeListener(r.bg.VoiceActivity, o), a.stop()
    }
  }, [e, c, b]), t
}