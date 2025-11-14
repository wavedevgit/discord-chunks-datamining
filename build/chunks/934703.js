/** Chunk was on 75909 **/
/** chunk id: 934703, original params: e,t,n (module,exports,require) **/
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
  Chunk325916 = require("./325916.js"),
  Chunk981631 = require("./981631.js");

function p(e) {
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

function f(e) {
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
    hlsRef: E,
    videoSessionId: g,
    videoAssetId: O,
    sourceQuestContent: b,
    logger: h
  } = e, S = (0, c._F)(), C = (0, c.O5)(), y = (0, i.e7)([s.Z], () => s.Z.getEffectiveConnectionSpeed()), _ = (0, r.useRef)(false), x = (null == (t = n.userStatus) ? true : t.completedAt) != null, j = n.id, D = r.useCallback(e => {
    null != v.current && S({
      questId: j,
      event: m.rMx.QUEST_VIDEO_LOADING_STARTED,
      properties: p({
        video_asset_id: O,
        network_connection_speed: e,
        video_session_id: g,
        is_hls_supported: o.ZP.isSupported()
      }, f(E)),
      sourceQuestContent: b
    })
  }, [j, v, O, g, E, S, b]), P = r.useCallback(e => {
    null != v.current && null != e && S({
      questId: j,
      event: m.rMx.QUEST_VIDEO_LOADING_ENDED,
      properties: p({
        video_asset_id: O,
        network_connection_speed: y,
        duration: e,
        video_session_id: g
      }, f(E)),
      sourceQuestContent: b
    })
  }, [j, v, O, g, E, S, b, y]), T = r.useCallback(e => {
    null != v.current && S({
      questId: j,
      event: m.rMx.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
      properties: p({
        duration_ms: e,
        video_session_id: g,
        video_asset_id: O
      }, f(E)),
      sourceQuestContent: b
    })
  }, [j, v, O, g, E, S, b]), R = r.useCallback(() => {
    null != v.current && S({
      questId: j,
      event: m.rMx.QUEST_VIDEO_PROGRESSED,
      properties: p({
        progress: (0, u.bA)(v.current.currentTime, v.current.duration),
        video_timestamp_seconds: v.current.currentTime,
        video_session_id: g,
        video_asset_id: O
      }, f(E)),
      sourceQuestContent: b
    })
  }, [j, v, g, E, S, O, b]), I = r.useCallback(e => {
    null != v.current && S({
      questId: j,
      event: m.rMx.QUEST_VIDEO_RESUMED,
      properties: p({
        video_timestamp_seconds: v.current.currentTime,
        pause_reason: e,
        video_session_id: g,
        video_asset_id: O
      }, f(E)),
      sourceQuestContent: b
    })
  }, [j, v, g, E, S, O, b]), N = r.useCallback(e => {
    null != v.current && null != e && S({
      questId: j,
      event: m.rMx.QUEST_VIDEO_PAUSED,
      properties: p({
        video_timestamp_seconds: v.current.currentTime,
        reason: e,
        video_session_id: g,
        video_asset_id: O
      }, f(E)),
      sourceQuestContent: b
    })
  }, [j, v, g, E, S, O, b]), A = r.useCallback((e, t) => {
    null != v.current && S({
      questId: j,
      event: e ? m.rMx.QUEST_VIDEO_APP_FOCUSED : m.rMx.QUEST_VIDEO_APP_UNFOCUSED,
      properties: {
        video_timestamp_seconds: v.current.currentTime,
        video_state: t,
        video_session_id: g,
        video_asset_id: O
      },
      sourceQuestContent: b
    })
  }, [j, v, g, S, O, b]), w = r.useCallback(() => {
    null != v.current && (_.current += 1, S({
      questId: j,
      event: m.rMx.QUEST_VIDEO_BUFFERING_STARTED,
      properties: p({
        video_asset_id: O,
        network_connection_speed: y,
        buffer_index: _.current,
        video_session_id: g
      }, f(E)),
      sourceQuestContent: b
    }))
  }, [j, v, O, g, E, S, b, y]), k = r.useCallback(e => {
    null != v.current && (_.current += 1, S({
      questId: j,
      event: m.rMx.QUEST_VIDEO_BUFFERING_ENDED,
      properties: p({
        video_asset_id: O,
        network_connection_speed: y,
        duration: e,
        buffer_index: _.current,
        video_session_id: g
      }, f(E)),
      sourceQuestContent: b
    }))
  }, [j, v, O, g, E, S, b, y]), M = r.useCallback((e, t) => {
    C({
      questId: j,
      questContent: e,
      questContentCTA: t,
      sourceQuestContent: b
    })
  }, [j, b, C]), L = r.useCallback(e => {
    if (null != v.current) {
      var t, n;
      S({
        questId: j,
        event: m.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
        properties: p((t = p({}, e), n = n = {
          video_asset_id: O,
          quest_completed: x,
          video_duration_sec: v.current.duration,
          video_progress: (0, u.bA)(e.segment_end_sec, v.current.duration),
          video_session_id: g
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t), f(E)),
        sourceQuestContent: b
      })
    }
  }, [S, j, O, x, g, E, v, b]), V = r.useCallback((e, t) => {
    var n, r;
    if (null == v.current) return;
    let o = null == (n = v.current) ? true : n.error,
      i = null == (r = v.current) ? true : r.networkState,
      s = null != v.current ? (0, u.bA)(v.current.currentTime, v.current.duration) : true,
      c = null != t ? {
        hls_error_subtype: t.errorDetails,
        hls_error_fatal: t.fatal
      } : {};
    S({
      questId: j,
      event: m.rMx.QUEST_VIDEO_ERROR,
      properties: p({
        video_progress: s,
        video_error_type: e,
        video_asset_id: O,
        network_connection_speed: y,
        video_session_id: g,
        video_error_code: null == o ? true : o.code,
        video_error_message: null == o ? true : o.message,
        video_network_state: i
      }, f(E), c),
      sourceQuestContent: b
    }), e === d.CY.SOURCE_ERROR && a.Z.increment({
      name: l.V.QUEST_VIDEO_ERROR,
      tags: ["quest_id:".concat(j), "error_type:".concat(e)]
    })
  }, [j, v, O, g, E, S, b, y]), Z = r.useCallback((e, t) => {
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
    V(n, {
      errorDetails: t.details,
      fatal: t.fatal
    })
  }, [h, V]);
  r.useEffect(() => {
    if (null == E.current) return;
    let e = E.current;
    return e.on(o.ZP.Events.ERROR, Z), () => {
      e.off(o.ZP.Events.ERROR, Z)
    }
  }, [E, Z]);
  let F = r.useCallback(e => {
      null != v.current && S({
        questId: j,
        event: e ? m.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED : m.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
        properties: p({
          video_session_id: g,
          video_asset_id: O
        }, f(E)),
        sourceQuestContent: b
      })
    }, [j, v, g, E, S, O, b]),
    B = r.useCallback(e => {
      null != v.current && S({
        questId: j,
        event: m.rMx.QUEST_VIDEO_VOLUME_CHANGED,
        properties: p({
          volume_threshold: e > 0 && e < 1 ? .5 : e,
          video_session_id: g,
          video_asset_id: O
        }, f(E)),
        sourceQuestContent: b
      })
    }, [j, v, O, g, E, S, b]);
  return {
    trackQuestVideoLoadingStarted: D,
    trackQuestVideoLoadingEnded: P,
    trackQuestVideoTimeToFirstFrame: T,
    trackQuestVideoProgressed: R,
    trackQuestVideoResumed: I,
    trackQuestVideoPaused: N,
    trackQuestVideoFocusChange: A,
    trackQuestContentClick: M,
    trackQuestVideoBufferingStarted: w,
    trackQuestVideoBufferingEnded: k,
    trackWatchTimeAnalytics: L,
    trackQuestVideoFullscreenChanged: F,
    trackQuestVideoError: V,
    trackQuestVideoVolumeChanged: B
  }
}