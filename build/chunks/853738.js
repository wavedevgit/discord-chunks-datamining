/** Chunk was on 23628 **/
/** chunk id: 853738, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk412703 = require("./412703.js"),
  Chunk536968 = require("./536968.js"),
  Chunk579473 = require("./579473.js"),
  Chunk717415 = require("./717415.jsx"),
  Chunk654487 = require("./654487.js");

function c(e) {
  let {
    videoAssetUrl: t,
    videoRef: n,
    hlsRef: c,
    videoAssetType: u
  } = e, {
    questConfig: d
  } = r.useContext(s.VideoQuestConfigContext), p = r.useRef(null);
  r.useEffect(() => {
    var e, r;
    if (null == t || null == n.current || u === i.fY.VIDEO_PLAYER_VIDEO_HLS && null == c.current || !(0, o._o)({
        location: a.rE.VIDEO_MODAL
      }).externalAnalyticsEnabled) return;
    let s = {
      debug: false,
      videoElement: n.current,
      hlsInstance: u === i.fY.VIDEO_PLAYER_VIDEO_HLS && null != (e = c.current) ? e : true,
      feature: "quests",
      contentMetadata: {
        contentId: t,
        videoStreamType: u === i.fY.VIDEO_PLAYER_VIDEO_HLS ? "hls" : "mp4",
        contentType: "quests",
        durationSec: null == n.current.duration || isNaN(n.current.duration) ? 0 : n.current.duration,
        title: null == (r = d.taskConfigV2.tasks[l.n.WATCH_VIDEO]) ? true : r.messages.videoTitle,
        questId: d.id,
        gameName: d.messages.gameTitle
      }
    };
    return p.current = new o.Gb(s), p.current.initialize(), () => {
      null != p.current && (p.current.endSession(), p.current.destroy(), p.current = null)
    }
  }, [u, c, t, n, d])
}