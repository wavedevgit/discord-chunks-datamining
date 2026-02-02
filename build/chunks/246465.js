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
    questConfig: p
  } = r.useContext(a.VideoQuestConfigContext), f = r.useRef(false), m = r.useRef(null), v = null == (c = p.taskConfigV2.tasks[o.n.WATCH_VIDEO]) ? true : c.assets, b = r.useMemo(() => p.features.includes(i.L.FULL_EPISODE_VIDEO_QUEST), [p.features]), E = r.useMemo(() => null != v ? l.Ay.isSupported() && null != v.videoHls ? s.fY.VIDEO_PLAYER_VIDEO_HLS : b ? null : u.has(t) || null == v.videoLowRes ? s.fY.VIDEO_PLAYER_VIDEO : s.fY.VIDEO_PLAYER_VIDEO_LOW_RES : null, [v, t, b]), g = r.useMemo(() => null != E ? (0, s.tW)(d, E, true, false) : null, [d, E]), h = () => {
    null != m.current && 8e5 !== m.current.config.minAutoBitrate && (m.current.config.minAutoBitrate = 8e5)
  }, y = r.useCallback(() => {
    null != m.current && (m.current.config.minAutoBitrate = 8e5)
  }, []);
  return r.useEffect(() => {
    if (E !== s.fY.VIDEO_PLAYER_VIDEO_HLS || null == g || null == e.current || f.current) return;
    m.current = new l.Ay({
      backBufferLength: 20,
      maxBufferLength: 30,
      startPosition: n,
      startFragPrefetch: true,
      startLevel: false
    }), m.current.on(l.Ay.Events.FRAG_LOADING, h), m.current.loadSource(g.url), m.current.attachMedia(e.current), f.current = true;
    let t = m.current;
    return () => {
      null != t && t.off(l.Ay.Events.FRAG_LOADING, h)
    }
  }, [g, E, e, n]), {
    videoAssetType: E,
    videoAsset: g,
    hlsRef: m,
    onFirstChunkLoaded: y
  }
}