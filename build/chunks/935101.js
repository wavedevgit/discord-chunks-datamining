/** Chunk was on 31294 **/
/** chunk id: 935101, original params: e,_,t (module,exports,require) **/
require.d(exports, {
  A: () => u
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

function u() {
  let {
    showPTTSpeakingIndicator: e
  } = p.A.useConfig({
    location: "useSpeakingWhilePTT"
  }), [_, t] = a.useState(false), s = (0, o.bG)([c.A], () => c.A.getMode() === b.TB.PUSH_TO_TALK), u = (0, o.bG)([i.A], () => i.A.getRTCConnectionId()), f = a.useRef(new r.Ep);
  return a.useEffect(() => {
    t(false)
  }, [u]), a.useEffect(() => {
    let _ = 0,
      a = f.current;

    function o(e, o) {
      let n = (o & b.ME.VOICE) === b.ME.VOICE,
        r = l.A.isCurrentUserPTTActive();
      n && !r ? ++_ >= 5 && (t(true), a.start(d, () => {
        t(false)
      })) : _ = 0
    }
    return e && s && null != u && c.A.getMediaEngine().on(n.bg.VoiceActivity, o), () => {
      c.A.getMediaEngine().removeListener(n.bg.VoiceActivity, o), a.stop()
    }
  }, [e, s, u]), _
}