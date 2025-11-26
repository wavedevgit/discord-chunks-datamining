/** Chunk was on 75909 **/
/** chunk id: 70417, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk713447 = require("./713447.js"),
  Chunk754700 = require("./754700.js"),
  Chunk937058 = require("./937058.js"),
  Chunk475595 = require("./475595.js"),
  Chunk215113 = require("./215113.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js");
let d = new Set([Chunk981631.IyS.FIVE_G, Chunk981631.IyS.FOUR_G, Chunk981631.IyS.UNKNOWN]);

function m(e, t, n) {
  var u;
  let {
    quest: m
  } = r.useContext(s.VideoQuestModalContext), {
    questConfig: f
  } = r.useContext(s.VideoQuestConfigContext), p = r.useRef(false), v = r.useRef(null), E = (0, i.z)(m, c.dr.VIDEO_MODAL), g = null == (u = f.taskConfigV2.tasks[l.X.WATCH_VIDEO]) ? true : u.assets, O = r.useMemo(() => null != g ? E && o.ZP.isSupported() && null != g.videoHls ? a.eC.VIDEO_PLAYER_VIDEO_HLS : d.has(t) || null == g.videoLowRes ? a.eC.VIDEO_PLAYER_VIDEO : a.eC.VIDEO_PLAYER_VIDEO_LOW_RES : null, [g, t, E]), h = r.useMemo(() => null != O ? (0, a.fh)(m, O, true, false) : null, [m, O]), b = () => {
    null != v.current && 8e5 !== v.current.config.minAutoBitrate && (v.current.config.minAutoBitrate = 8e5)
  }, C = r.useCallback(() => {
    null != v.current && (v.current.config.minAutoBitrate = 8e5)
  }, []);
  return r.useEffect(() => {
    if (O !== a.eC.VIDEO_PLAYER_VIDEO_HLS || null == h || null == e.current || p.current) return;
    v.current = new o.ZP({
      backBufferLength: 20,
      maxBufferLength: 30,
      startPosition: n,
      startFragPrefetch: true,
      startLevel: false
    }), v.current.on(o.ZP.Events.FRAG_LOADING, b), v.current.loadSource(h.url), v.current.attachMedia(e.current), p.current = true;
    let t = v.current;
    return () => {
      null != t && t.off(o.ZP.Events.FRAG_LOADING, b)
    }
  }, [h, O, e, n]), {
    videoAssetType: O,
    videoAsset: h,
    hlsRef: v,
    onFirstChunkLoaded: C
  }
}