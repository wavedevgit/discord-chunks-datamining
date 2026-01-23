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
  } = c.A.useConfig({
    location: "useSpeakingWhilePTT"
  }), [t, a] = _.useState(false), u = (0, o.bG)([l.A], () => l.A.getMode() === p.TB.PUSH_TO_TALK), b = (0, o.bG)([i.A], () => i.A.getRTCConnectionId()), f = _.useRef(new r.Ep);
  return _.useEffect(() => {
    a(false)
  }, [b]), _.useEffect(() => {
    let t = 0,
      _ = f.current;

    function o(e, o) {
      let n = (o & p.ME.VOICE) === p.ME.VOICE,
        r = s.A.isCurrentUserPTTActive();
      n && !r ? ++t >= 5 && (a(true), _.start(d, () => {
        a(false)
      })) : t = 0
    }
    return e && u && null != b && l.A.getMediaEngine().on(n.bg.VoiceActivity, o), () => {
      l.A.getMediaEngine().removeListener(n.bg.VoiceActivity, o), _.stop()
    }
  }, [e, u, b]), t
}