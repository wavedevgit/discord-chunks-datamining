/** Chunk was on 75909 **/
/** chunk id: 70417, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk713447 = require("./713447.js"),
  Chunk754700 = require("./754700.js"),
  Chunk670081 = require("./670081.js"),
  Chunk475595 = require("./475595.js"),
  Chunk215113 = require("./215113.jsx"),
  Chunk981631 = require("./981631.js");
let u = new Set([Chunk981631.IyS.FIVE_G, Chunk981631.IyS.FOUR_G, Chunk981631.IyS.UNKNOWN]);

function d(e, t, n) {
  var c;
  let {
    quest: d
  } = r.useContext(s.VideoQuestModalContext), {
    questConfig: m
  } = r.useContext(s.VideoQuestConfigContext), f = r.useRef(false), p = r.useRef(null), v = null == (c = m.taskConfigV2.tasks[l.X.WATCH_VIDEO]) ? true : c.assets, g = r.useMemo(() => m.features.includes(i.S.FULL_EPISODE_VIDEO_QUEST), [m.features]), E = r.useMemo(() => null != v ? o.ZP.isSupported() && null != v.videoHls ? a.eC.VIDEO_PLAYER_VIDEO_HLS : g ? null : u.has(t) || null == v.videoLowRes ? a.eC.VIDEO_PLAYER_VIDEO : a.eC.VIDEO_PLAYER_VIDEO_LOW_RES : null, [v, t, g]), h = r.useMemo(() => null != E ? (0, a.fh)(d, E, true, false) : null, [d, E]), C = () => {
    null != p.current && 8e5 !== p.current.config.minAutoBitrate && (p.current.config.minAutoBitrate = 8e5)
  }, b = r.useCallback(() => {
    null != p.current && (p.current.config.minAutoBitrate = 8e5)
  }, []);
  return r.useEffect(() => {
    if (E !== a.eC.VIDEO_PLAYER_VIDEO_HLS || null == h || null == e.current || f.current) return;
    p.current = new o.ZP({
      backBufferLength: 20,
      maxBufferLength: 30,
      startPosition: n,
      startFragPrefetch: true,
      startLevel: false
    }), p.current.on(o.ZP.Events.FRAG_LOADING, C), p.current.loadSource(h.url), p.current.attachMedia(e.current), f.current = true;
    let t = p.current;
    return () => {
      null != t && t.off(o.ZP.Events.FRAG_LOADING, C)
    }
  }, [h, E, e, n]), {
    videoAssetType: E,
    videoAsset: h,
    hlsRef: p,
    onFirstChunkLoaded: b
  }
}