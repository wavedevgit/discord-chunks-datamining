/** Chunk was on 31294 **/
/** chunk id: 935101, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  A: () => _
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
let u = 3 * Chunk927813.A.Millis.SECOND;

function _() {
  let {
    showPTTSpeakingIndicator: e
  } = i.A.useConfig({
    location: "useSpeakingWhilePTT"
  }), [a, t] = d.useState(false), s = (0, c.bG)([r.A], () => r.A.getMode() === o.TB.PUSH_TO_TALK), _ = (0, c.bG)([n.A], () => n.A.getRTCConnectionId()), p = d.useRef(new f.Ep);
  return d.useEffect(() => {
    t(false)
  }, [_]), d.useEffect(() => {
    let a = 0,
      d = p.current;

    function c(e, c) {
      let b = (c & o.ME.VOICE) === o.ME.VOICE,
        f = l.A.isCurrentUserPTTActive();
      b && !f ? ++a >= 5 && (t(true), d.start(u, () => {
        t(false)
      })) : a = 0
    }
    return e && s && null != _ && r.A.getMediaEngine().on(b.bg.VoiceActivity, c), () => {
      r.A.getMediaEngine().removeListener(b.bg.VoiceActivity, c), d.stop()
    }
  }, [e, s, _]), a
}