/** Chunk was on 23628 **/
/** chunk id: 246465, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk771253 = require("./771253.js"),
  Chunk412703 = require("./412703.js"),
  Chunk902173 = require("./902173.js"),
  Chunk579473 = require("./579473.js"),
  Chunk717415 = require("./717415.jsx"),
  Chunk652215 = require("./652215.js");
let u = new Set([Chunk652215.NKC.FIVE_G, Chunk652215.NKC.FOUR_G, Chunk652215.NKC.UNKNOWN]);

function d(e, t, n) {
  var c;
  let {
    quest: d
  } = r.useContext(a.VideoQuestModalContext), {
    questConfig: f
  } = r.useContext(a.VideoQuestConfigContext), m = r.useRef(false), p = r.useRef(null), v = null == (c = f.taskConfigV2.tasks[o.n.WATCH_VIDEO]) ? true : c.assets, E = r.useMemo(() => f.features.includes(i.L.FULL_EPISODE_VIDEO_QUEST), [f.features]), g = r.useMemo(() => null != v ? l.Ay.isSupported() && null != v.videoHls ? s.fY.VIDEO_PLAYER_VIDEO_HLS : E ? null : u.has(t) || null == v.videoLowRes ? s.fY.VIDEO_PLAYER_VIDEO : s.fY.VIDEO_PLAYER_VIDEO_LOW_RES : null, [v, t, E]), h = r.useMemo(() => null != g ? (0, s.tW)(d, g, true, false) : null, [d, g]), b = () => {
    null != p.current && 8e5 !== p.current.config.minAutoBitrate && (p.current.config.minAutoBitrate = 8e5)
  }, y = r.useCallback(() => {
    null != p.current && (p.current.config.minAutoBitrate = 8e5)
  }, []);
  return r.useEffect(() => {
    if (g !== s.fY.VIDEO_PLAYER_VIDEO_HLS || null == h || null == e.current || m.current) return;
    p.current = new l.Ay({
      backBufferLength: 20,
      maxBufferLength: 30,
      startPosition: n,
      startFragPrefetch: true,
      startLevel: false
    }), p.current.on(l.Ay.Events.FRAG_LOADING, b), p.current.loadSource(h.url), p.current.attachMedia(e.current), m.current = true;
    let t = p.current;
    return () => {
      null != t && t.off(l.Ay.Events.FRAG_LOADING, b)
    }
  }, [h, g, e, n]), {
    videoAssetType: g,
    videoAsset: h,
    hlsRef: p,
    onFirstChunkLoaded: y
  }
}