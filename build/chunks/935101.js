/** Chunk was on 31294 **/
/** chunk id: 935101, original params: e,t,_ (module,exports,require) **/
require.d(exports, {
  A: () => p
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
let f = 3 * Chunk927813.A.Millis.SECOND;

function p() {
  let {
    showPTTSpeakingIndicator: e
  } = d.A.useConfig({
    location: "useSpeakingWhilePTT"
  }), [t, _] = n.useState(false), s = (0, a.bG)([c.A], () => c.A.getMode() === u.TB.PUSH_TO_TALK), p = (0, a.bG)([i.A], () => i.A.getRTCConnectionId()), b = n.useRef(new r.Ep);
  return n.useEffect(() => {
    _(false)
  }, [p]), n.useEffect(() => {
    let t = 0,
      n = b.current;

    function a(e, a) {
      let o = (a & u.ME.VOICE) === u.ME.VOICE,
        r = l.A.isCurrentUserPTTActive();
      o && !r ? ++t >= 5 && (_(true), n.start(f, () => {
        _(false)
      })) : t = 0
    }
    return e && s && null != p && c.A.getMediaEngine().on(o.bg.VoiceActivity, a), () => {
      c.A.getMediaEngine().removeListener(o.bg.VoiceActivity, a), n.stop()
    }
  }, [e, s, p]), t
}