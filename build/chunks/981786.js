/** Chunk was on 75909 **/
/** chunk id: 981786, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk754700 = require("./754700.js"),
  Chunk707903 = require("./707903.js"),
  Chunk720293 = require("./720293.js"),
  Chunk215113 = require("./215113.jsx"),
  Chunk324805 = require("./324805.js");

function c(e) {
  let {
    videoAssetUrl: t,
    videoRef: n,
    hlsRef: c,
    videoVariant: u
  } = e, {
    questConfig: d
  } = r.useContext(a.VideoQuestConfigContext), m = r.useRef(null);
  r.useEffect(() => {
    var e, r;
    if (null == t || null == n.current || u === i.n1.VIDEO_HLS && null == c.current || !(0, l.Zx)({
        location: s.dr.VIDEO_MODAL
      }).externalAnalyticsEnabled) return;
    let a = {
      debug: false,
      videoElement: n.current,
      hlsInstance: u === i.n1.VIDEO_HLS && null != (r = c.current) ? r : true,
      feature: "quests",
      contentMetadata: {
        contentId: t,
        videoStreamType: u === i.n1.VIDEO_HLS ? "hls" : "mp4",
        contentType: "quests",
        durationSec: null == n.current.duration || isNaN(n.current.duration) ? 0 : n.current.duration,
        title: null == (e = d.taskConfigV2.tasks[o.X.WATCH_VIDEO]) ? true : e.messages.videoTitle,
        questId: d.id,
        gameName: d.messages.gameTitle
      }
    };
    return m.current = new l.ci(a), m.current.initialize(), () => {
      null != m.current && (m.current.endSession(), m.current.destroy(), m.current = null)
    }
  }, [u, c, t, n, d])
}