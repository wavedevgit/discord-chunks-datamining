/** Chunk was on 75909 **/
/** chunk id: 70417, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk713447 = require("./713447.js"),
  Chunk754700 = require("./754700.js"),
  Chunk475595 = require("./475595.js"),
  Chunk215113 = require("./215113.jsx"),
  Chunk981631 = require("./981631.js");
let c = new Set([Chunk981631.IyS.FIVE_G, Chunk981631.IyS.FOUR_G, Chunk981631.IyS.UNKNOWN]);

function u(e, t, n) {
  var s;
  let {
    quest: u
  } = r.useContext(a.VideoQuestModalContext), {
    questConfig: d
  } = r.useContext(a.VideoQuestConfigContext), m = r.useRef(false), f = r.useRef(null), p = null == (s = d.taskConfigV2.tasks[l.X.WATCH_VIDEO]) ? true : s.assets, v = r.useMemo(() => null != p ? o.ZP.isSupported() && null != p.videoHls ? i.eC.VIDEO_PLAYER_VIDEO_HLS : c.has(t) || null == p.videoLowRes ? i.eC.VIDEO_PLAYER_VIDEO : i.eC.VIDEO_PLAYER_VIDEO_LOW_RES : null, [p, t]), E = r.useMemo(() => null != v ? (0, i.fh)(u, v, true, false) : null, [u, v]), g = () => {
    null != f.current && 8e5 !== f.current.config.minAutoBitrate && (f.current.config.minAutoBitrate = 8e5)
  }, h = r.useCallback(() => {
    null != f.current && (f.current.config.minAutoBitrate = 8e5)
  }, []);
  return r.useEffect(() => {
    if (v !== i.eC.VIDEO_PLAYER_VIDEO_HLS || null == E || null == e.current || m.current) return;
    f.current = new o.ZP({
      backBufferLength: 20,
      maxBufferLength: 30,
      startPosition: n,
      startFragPrefetch: true,
      startLevel: false
    }), f.current.on(o.ZP.Events.FRAG_LOADING, g), f.current.loadSource(E.url), f.current.attachMedia(e.current), m.current = true;
    let t = f.current;
    return () => {
      null != t && t.off(o.ZP.Events.FRAG_LOADING, g)
    }
  }, [E, v, e, n]), {
    videoAssetType: v,
    videoAsset: E,
    hlsRef: f,
    onFirstChunkLoaded: h
  }
}