/** Chunk was on 32249 **/
/** chunk id: 435585, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk647438 = require("./647438.js"),
  Chunk713447 = require("./713447.js"),
  Chunk286379 = require("./286379.js"),
  Chunk442837 = require("./442837.js"),
  Chunk797614 = require("./797614.js"),
  Chunk866960 = require("./866960.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk223418 = require("./223418.js"),
  Chunk981631 = require("./981631.js");

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function p(e) {
  return null == e.current || e.current.currentLevel < 0 || e.current.levels.length <= e.current.currentLevel ? {
    hls_level_index: false,
    hls_segment_res_width: false,
    hls_segment_res_height: false
  } : {
    hls_level_index: e.current.currentLevel,
    hls_segment_res_width: e.current.levels[e.current.currentLevel].width,
    hls_segment_res_height: e.current.levels[e.current.currentLevel].height
  }
}

function v(e) {
  var t;
  let {
    quest: n,
    videoRef: v,
    hlsRef: g,
    videoSessionId: E,
    videoAssetId: b,
    sourceQuestContent: O,
    logger: h
  } = e, C = (0, c._F)(), S = (0, c.O5)(), _ = (0, i.e7)([s.Z], () => s.Z.getEffectiveConnectionSpeed()), y = (0, r.useRef)(false), j = (null == (t = n.userStatus) ? true : t.completedAt) != null, x = n.id, T = r.useCallback(e => {
    null != v.current && C({
      questId: x,
      event: m.rMx.QUEST_VIDEO_LOADING_STARTED,
      properties: f({
        video_asset_id: b,
        network_connection_speed: e,
        video_session_id: E,
        is_hls_supported: l.ZP.isSupported()
      }, p(g)),
      sourceQuestContent: O
    })
  }, [x, v, b, E, g, C, O]), D = r.useCallback(e => {
    null != v.current && null != e && C({
      questId: x,
      event: m.rMx.QUEST_VIDEO_LOADING_ENDED,
      properties: f({
        video_asset_id: b,
        network_connection_speed: _,
        duration: e,
        video_session_id: E
      }, p(g)),
      sourceQuestContent: O
    })
  }, [x, v, b, E, g, C, O, _]), P = r.useCallback(e => {
    null != v.current && C({
      questId: x,
      event: m.rMx.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
      properties: f({
        duration_ms: e,
        video_session_id: E,
        video_asset_id: b
      }, p(g)),
      sourceQuestContent: O
    })
  }, [x, v, b, E, g, C, O]), R = r.useCallback(() => {
    null != v.current && C({
      questId: x,
      event: m.rMx.QUEST_VIDEO_PROGRESSED,
      properties: f({
        progress: (0, u.bA)(v.current.currentTime, v.current.duration),
        video_timestamp_seconds: v.current.currentTime,
        video_session_id: E,
        video_asset_id: b
      }, p(g)),
      sourceQuestContent: O
    })
  }, [x, v, E, g, C, b, O]), I = r.useCallback(e => {
    null != v.current && C({
      questId: x,
      event: m.rMx.QUEST_VIDEO_RESUMED,
      properties: f({
        video_timestamp_seconds: v.current.currentTime,
        pause_reason: e,
        video_session_id: E,
        video_asset_id: b
      }, p(g)),
      sourceQuestContent: O
    })
  }, [x, v, E, g, C, b, O]), N = r.useCallback(e => {
    null != v.current && null != e && C({
      questId: x,
      event: m.rMx.QUEST_VIDEO_PAUSED,
      properties: f({
        video_timestamp_seconds: v.current.currentTime,
        reason: e,
        video_session_id: E,
        video_asset_id: b
      }, p(g)),
      sourceQuestContent: O
    })
  }, [x, v, E, g, C, b, O]), k = r.useCallback((e, t) => {
    null != v.current && C({
      questId: x,
      event: e ? m.rMx.QUEST_VIDEO_APP_FOCUSED : m.rMx.QUEST_VIDEO_APP_UNFOCUSED,
      properties: {
        video_timestamp_seconds: v.current.currentTime,
        video_state: t,
        video_session_id: E,
        video_asset_id: b
      },
      sourceQuestContent: O
    })
  }, [x, v, E, C, b, O]), w = r.useCallback(() => {
    null != v.current && (y.current += 1, C({
      questId: x,
      event: m.rMx.QUEST_VIDEO_BUFFERING_STARTED,
      properties: f({
        video_asset_id: b,
        network_connection_speed: _,
        buffer_index: y.current,
        video_session_id: E
      }, p(g)),
      sourceQuestContent: O
    }))
  }, [x, v, b, E, g, C, O, _]), A = r.useCallback(e => {
    null != v.current && (y.current += 1, C({
      questId: x,
      event: m.rMx.QUEST_VIDEO_BUFFERING_ENDED,
      properties: f({
        video_asset_id: b,
        network_connection_speed: _,
        duration: e,
        buffer_index: y.current,
        video_session_id: E
      }, p(g)),
      sourceQuestContent: O
    }))
  }, [x, v, b, E, g, C, O, _]), L = r.useCallback((e, t) => {
    S({
      questId: x,
      questContent: e,
      questContentCTA: t,
      sourceQuestContent: O
    })
  }, [x, O, S]), M = r.useCallback(e => {
    if (null != v.current) {
      var t, n;
      C({
        questId: x,
        event: m.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
        properties: f((t = f({}, e), n = n = {
          video_asset_id: b,
          quest_completed: j,
          video_duration_sec: v.current.duration,
          video_progress: (0, u.bA)(e.segment_end_sec, v.current.duration),
          video_session_id: E
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t), p(g)),
        sourceQuestContent: O
      })
    }
  }, [C, x, b, j, E, g, v, O]), V = r.useCallback((e, t) => {
    var n, r;
    if (null == v.current) return;
    let l = null == (n = v.current) ? true : n.error,
      i = null == (r = v.current) ? true : r.networkState,
      s = null != v.current ? (0, u.bA)(v.current.currentTime, v.current.duration) : true,
      c = null != t ? {
        hls_error_subtype: t.errorDetails,
        hls_error_fatal: t.fatal
      } : {};
    C({
      questId: x,
      event: m.rMx.QUEST_VIDEO_ERROR,
      properties: f({
        video_progress: s,
        video_error_type: e,
        video_asset_id: b,
        network_connection_speed: _,
        video_session_id: E,
        video_error_code: null == l ? true : l.code,
        video_error_message: null == l ? true : l.message,
        video_network_state: i
      }, p(g), c),
      sourceQuestContent: O
    }), e === d.CY.SOURCE_ERROR && a.Z.increment({
      name: o.V.QUEST_VIDEO_ERROR,
      tags: ["quest_id:".concat(x), "error_type:".concat(e)]
    })
  }, [x, v, b, E, g, C, O, _]), Z = r.useCallback((e, t) => {
    let n;
    switch (h.info("[QV] | HLS Error: type=".concat(t.type, ", details=").concat(t.details, ", fatal=").concat(t.fatal)), t.type) {
      case l.ZP.ErrorTypes.NETWORK_ERROR:
        n = d.CY.HLS_NETWORK_ERROR;
        break;
      case l.ZP.ErrorTypes.MEDIA_ERROR:
        n = d.CY.HLS_MEDIA_ERROR;
        break;
      case l.ZP.ErrorTypes.MUX_ERROR:
        n = d.CY.HLS_MUX_ERROR;
        break;
      case l.ZP.ErrorTypes.KEY_SYSTEM_ERROR:
        n = d.CY.HLS_KEY_SYSTEM_ERROR;
        break;
      default:
        n = d.CY.HLS_OTHER_ERROR
    }
    V(n, {
      errorDetails: t.details,
      fatal: t.fatal
    })
  }, [h, V]);
  r.useEffect(() => {
    if (null == g.current) return;
    let e = g.current;
    return e.on(l.ZP.Events.ERROR, Z), () => {
      e.off(l.ZP.Events.ERROR, Z)
    }
  }, [g, Z]);
  let B = r.useCallback(e => {
      null != v.current && C({
        questId: x,
        event: e ? m.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED : m.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
        properties: f({
          video_session_id: E,
          video_asset_id: b
        }, p(g)),
        sourceQuestContent: O
      })
    }, [x, v, E, g, C, b, O]),
    F = r.useCallback(e => {
      null != v.current && C({
        questId: x,
        event: m.rMx.QUEST_VIDEO_VOLUME_CHANGED,
        properties: f({
          volume_threshold: e > 0 && e < 1 ? .5 : e,
          video_session_id: E,
          video_asset_id: b
        }, p(g)),
        sourceQuestContent: O
      })
    }, [x, v, b, E, g, C, O]);
  return {
    trackQuestVideoLoadingStarted: T,
    trackQuestVideoLoadingEnded: D,
    trackQuestVideoTimeToFirstFrame: P,
    trackQuestVideoProgressed: R,
    trackQuestVideoResumed: I,
    trackQuestVideoPaused: N,
    trackQuestVideoFocusChange: k,
    trackQuestContentClick: L,
    trackQuestVideoBufferingStarted: w,
    trackQuestVideoBufferingEnded: A,
    trackWatchTimeAnalytics: M,
    trackQuestVideoFullscreenChanged: B,
    trackQuestVideoError: V,
    trackQuestVideoVolumeChanged: F
  }
}