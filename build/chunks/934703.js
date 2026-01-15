/** Chunk was on 75909 **/
/** chunk id: 934703, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk473749 = require("./473749.js"),
  Chunk713447 = require("./713447.js"),
  Chunk286379 = require("./286379.js"),
  Chunk442837 = require("./442837.js"),
  Chunk797614 = require("./797614.js"),
  Chunk866960 = require("./866960.js"),
  Chunk617136 = require("./617136.js"),
  Chunk542347 = require("./542347.js"),
  Chunk325916 = require("./325916.js"),
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
  let {
    videoRef: t,
    hlsRef: n,
    videoSessionId: v,
    videoAssetId: E,
    sourceQuestContent: g,
    logger: h,
    questId: C,
    isQuestCompleted: S
  } = e, b = (0, c._F)(), O = (0, c.O5)(), _ = (0, i.e7)([s.Z], () => s.Z.getEffectiveConnectionSpeed()), x = (0, r.useRef)(false), y = r.useCallback(e => {
    null != t.current && b({
      questId: C,
      event: m.rMx.QUEST_VIDEO_LOADING_STARTED,
      properties: f({
        video_asset_id: E,
        network_connection_speed: e,
        video_session_id: v,
        is_hls_supported: o.ZP.isSupported()
      }, p(n)),
      sourceQuestContent: g
    })
  }, [C, t, E, v, n, b, g]), j = r.useCallback(e => {
    null != t.current && null != e && b({
      questId: C,
      event: m.rMx.QUEST_VIDEO_LOADING_ENDED,
      properties: f({
        video_asset_id: E,
        network_connection_speed: _,
        duration: e,
        video_session_id: v
      }, p(n)),
      sourceQuestContent: g
    })
  }, [C, t, E, v, n, b, g, _]), P = r.useCallback(e => {
    null != t.current && b({
      questId: C,
      event: m.rMx.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
      properties: f({
        duration_ms: e,
        video_session_id: v,
        video_asset_id: E
      }, p(n)),
      sourceQuestContent: g
    })
  }, [C, t, E, v, n, b, g]), D = r.useCallback(() => {
    null != t.current && b({
      questId: C,
      event: m.rMx.QUEST_VIDEO_PROGRESSED,
      properties: f({
        progress: (0, u.bA)(t.current.currentTime, t.current.duration),
        video_timestamp_seconds: t.current.currentTime,
        video_session_id: v,
        video_asset_id: E
      }, p(n)),
      sourceQuestContent: g
    })
  }, [C, t, v, n, b, E, g]), T = r.useCallback(e => {
    null != t.current && b({
      questId: C,
      event: m.rMx.QUEST_VIDEO_RESUMED,
      properties: f({
        video_timestamp_seconds: t.current.currentTime,
        pause_reason: e,
        video_session_id: v,
        video_asset_id: E
      }, p(n)),
      sourceQuestContent: g
    })
  }, [C, t, v, n, b, E, g]), R = r.useCallback(e => {
    null != t.current && null != e && b({
      questId: C,
      event: m.rMx.QUEST_VIDEO_PAUSED,
      properties: f({
        video_timestamp_seconds: t.current.currentTime,
        reason: e,
        video_session_id: v,
        video_asset_id: E
      }, p(n)),
      sourceQuestContent: g
    })
  }, [C, t, v, n, b, E, g]), N = r.useCallback((e, n) => {
    null != t.current && b({
      questId: C,
      event: e ? m.rMx.QUEST_VIDEO_APP_FOCUSED : m.rMx.QUEST_VIDEO_APP_UNFOCUSED,
      properties: {
        video_timestamp_seconds: t.current.currentTime,
        video_state: n,
        video_session_id: v,
        video_asset_id: E
      },
      sourceQuestContent: g
    })
  }, [C, t, v, b, E, g]), I = r.useCallback(() => {
    null != t.current && (x.current += 1, b({
      questId: C,
      event: m.rMx.QUEST_VIDEO_BUFFERING_STARTED,
      properties: f({
        video_asset_id: E,
        network_connection_speed: _,
        buffer_index: x.current,
        video_session_id: v
      }, p(n)),
      sourceQuestContent: g
    }))
  }, [C, t, E, v, n, b, g, _]), A = r.useCallback(e => {
    null != t.current && (x.current += 1, b({
      questId: C,
      event: m.rMx.QUEST_VIDEO_BUFFERING_ENDED,
      properties: f({
        video_asset_id: E,
        network_connection_speed: _,
        duration: e,
        buffer_index: x.current,
        video_session_id: v
      }, p(n)),
      sourceQuestContent: g
    }))
  }, [C, t, E, v, n, b, g, _]), w = r.useCallback((e, t) => {
    O({
      questId: C,
      questContent: e,
      questContentCTA: t,
      sourceQuestContent: g
    })
  }, [C, g, O]), L = r.useCallback(e => {
    if (null != t.current) {
      var r, o;
      b({
        questId: C,
        event: m.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
        properties: f((r = f({}, e), o = o = {
          video_asset_id: E,
          quest_completed: S,
          video_duration_sec: t.current.duration,
          video_progress: (0, u.bA)(e.segment_end_sec, t.current.duration),
          video_session_id: v
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
        }), r), p(n)),
        sourceQuestContent: g
      })
    }
  }, [b, C, E, S, v, n, t, g]), k = r.useCallback((e, r) => {
    var o, i;
    if (null == t.current) return;
    let s = null == (o = t.current) ? true : o.error,
      c = null == (i = t.current) ? true : i.networkState,
      h = null != t.current ? (0, u.bA)(t.current.currentTime, t.current.duration) : true,
      S = null != r ? {
        hls_error_subtype: r.errorDetails,
        hls_error_fatal: r.fatal
      } : {};
    b({
      questId: C,
      event: m.rMx.QUEST_VIDEO_ERROR,
      properties: f({
        video_progress: h,
        video_error_type: e,
        video_asset_id: E,
        network_connection_speed: _,
        video_session_id: v,
        video_error_code: null == s ? true : s.code,
        video_error_message: null == s ? true : s.message,
        video_network_state: c
      }, p(n), S),
      sourceQuestContent: g
    }), e === d.CY.SOURCE_ERROR && a.Z.increment({
      name: l.V.QUEST_VIDEO_ERROR,
      tags: ["quest_id:".concat(C), "error_type:".concat(e)]
    })
  }, [C, t, E, v, n, b, g, _]), M = r.useCallback((e, t) => {
    let n;
    switch (h.info("[QV] | HLS Error: type=".concat(t.type, ", details=").concat(t.details, ", fatal=").concat(t.fatal)), t.type) {
      case o.ZP.ErrorTypes.NETWORK_ERROR:
        n = d.CY.HLS_NETWORK_ERROR;
        break;
      case o.ZP.ErrorTypes.MEDIA_ERROR:
        n = d.CY.HLS_MEDIA_ERROR;
        break;
      case o.ZP.ErrorTypes.MUX_ERROR:
        n = d.CY.HLS_MUX_ERROR;
        break;
      case o.ZP.ErrorTypes.KEY_SYSTEM_ERROR:
        n = d.CY.HLS_KEY_SYSTEM_ERROR;
        break;
      default:
        n = d.CY.HLS_OTHER_ERROR
    }
    k(n, {
      errorDetails: t.details,
      fatal: t.fatal
    })
  }, [h, k]);
  r.useEffect(() => {
    if (null == n.current) return;
    let e = n.current;
    return e.on(o.ZP.Events.ERROR, M), () => {
      e.off(o.ZP.Events.ERROR, M)
    }
  }, [n, M]);
  let V = r.useCallback(e => {
      null != t.current && b({
        questId: C,
        event: e ? m.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED : m.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
        properties: f({
          video_session_id: v,
          video_asset_id: E
        }, p(n)),
        sourceQuestContent: g
      })
    }, [C, t, v, n, b, E, g]),
    Z = r.useCallback(e => {
      null != t.current && b({
        questId: C,
        event: m.rMx.QUEST_VIDEO_VOLUME_CHANGED,
        properties: f({
          volume_threshold: e > 0 && e < 1 ? .5 : e,
          video_session_id: v,
          video_asset_id: E
        }, p(n)),
        sourceQuestContent: g
      })
    }, [C, t, E, v, n, b, g]);
  return {
    trackQuestVideoLoadingStarted: y,
    trackQuestVideoLoadingEnded: j,
    trackQuestVideoTimeToFirstFrame: P,
    trackQuestVideoProgressed: D,
    trackQuestVideoResumed: T,
    trackQuestVideoPaused: R,
    trackQuestVideoFocusChange: N,
    trackQuestContentClick: w,
    trackQuestVideoBufferingStarted: I,
    trackQuestVideoBufferingEnded: A,
    trackWatchTimeAnalytics: L,
    trackQuestVideoFullscreenChanged: V,
    trackQuestVideoError: k,
    trackQuestVideoVolumeChanged: Z
  }
}