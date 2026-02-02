/** Chunk was on 23628 **/
/** chunk id: 660171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
});
var Chunk64700 = require("./64700.js"),
  Chunk771253 = require("./771253.js"),
  Chunk731738 = require("./731738.js"),
  Chunk311907 = require("./311907.js"),
  Chunk831062 = require("./831062.js"),
  Chunk544180 = require("./544180.js"),
  Chunk18437 = require("./18437.js"),
  Chunk753386 = require("./753386.js"),
  Chunk261331 = require("./261331.js"),
  Chunk652215 = require("./652215.js");

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

function m(e) {
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
    videoAssetId: b,
    sourceQuestContent: E,
    logger: g,
    questId: h,
    isQuestCompleted: y,
    isFullEpisodeVideoQuest: O
  } = e, S = (0, c.u0)(), _ = (0, c.Ut)(), C = (0, i.bG)([a.A], () => a.A.getEffectiveConnectionSpeed()), x = (0, r.useRef)(false), A = r.useCallback(e => {
    null != t.current && S({
      questId: h,
      event: p.HAw.QUEST_VIDEO_LOADING_STARTED,
      properties: f({
        video_asset_id: b,
        network_connection_speed: e,
        video_session_id: v,
        is_hls_supported: l.Ay.isSupported()
      }, m(n)),
      sourceQuestContent: E
    })
  }, [h, t, b, v, n, S, E]), j = r.useCallback(e => {
    null != t.current && null != e && S({
      questId: h,
      event: p.HAw.QUEST_VIDEO_LOADING_ENDED,
      properties: f({
        video_asset_id: b,
        network_connection_speed: C,
        duration: e,
        video_session_id: v
      }, m(n)),
      sourceQuestContent: E
    })
  }, [h, t, b, v, n, S, E, C]), T = r.useCallback(e => {
    null != t.current && S({
      questId: h,
      event: p.HAw.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
      properties: f({
        duration_ms: e,
        video_session_id: v,
        video_asset_id: b
      }, m(n)),
      sourceQuestContent: E
    })
  }, [h, t, b, v, n, S, E]), D = r.useCallback(() => {
    null != t.current && S({
      questId: h,
      event: p.HAw.QUEST_VIDEO_PROGRESSED,
      properties: f({
        progress: (0, u.zh)(t.current.currentTime, t.current.duration),
        video_timestamp_seconds: t.current.currentTime,
        video_session_id: v,
        video_asset_id: b
      }, m(n)),
      sourceQuestContent: E
    })
  }, [h, t, v, n, S, b, E]), w = r.useCallback(e => {
    null != t.current && S({
      questId: h,
      event: p.HAw.QUEST_VIDEO_RESUMED,
      properties: f({
        video_timestamp_seconds: t.current.currentTime,
        pause_reason: e,
        video_session_id: v,
        video_asset_id: b
      }, m(n)),
      sourceQuestContent: E
    })
  }, [h, t, v, n, S, b, E]), N = r.useCallback(e => {
    null != t.current && null != e && S({
      questId: h,
      event: p.HAw.QUEST_VIDEO_PAUSED,
      properties: f({
        video_timestamp_seconds: t.current.currentTime,
        reason: e,
        video_session_id: v,
        video_asset_id: b
      }, m(n)),
      sourceQuestContent: E
    })
  }, [h, t, v, n, S, b, E]), P = r.useCallback((e, n) => {
    null != t.current && S({
      questId: h,
      event: e ? p.HAw.QUEST_VIDEO_APP_FOCUSED : p.HAw.QUEST_VIDEO_APP_UNFOCUSED,
      properties: {
        video_timestamp_seconds: t.current.currentTime,
        video_state: n,
        video_session_id: v,
        video_asset_id: b
      },
      sourceQuestContent: E
    })
  }, [h, t, v, S, b, E]), I = r.useCallback(() => {
    null != t.current && (x.current += 1, S({
      questId: h,
      event: p.HAw.QUEST_VIDEO_BUFFERING_STARTED,
      properties: f({
        video_asset_id: b,
        network_connection_speed: C,
        buffer_index: x.current,
        video_session_id: v
      }, m(n)),
      sourceQuestContent: E
    }))
  }, [h, t, b, v, n, S, E, C]), L = r.useCallback(e => {
    null != t.current && (x.current += 1, S({
      questId: h,
      event: p.HAw.QUEST_VIDEO_BUFFERING_ENDED,
      properties: f({
        video_asset_id: b,
        network_connection_speed: C,
        duration: e,
        buffer_index: x.current,
        video_session_id: v
      }, m(n)),
      sourceQuestContent: E
    }))
  }, [h, t, b, v, n, S, E, C]), R = r.useCallback((e, t) => {
    _({
      questId: h,
      questContent: e,
      questContentCTA: t,
      sourceQuestContent: E
    })
  }, [h, E, _]), k = r.useCallback(e => {
    if (null != t.current) {
      var r, l;
      S({
        questId: h,
        event: p.HAw.QUEST_VIDEO_SEGMENT_WATCHED,
        properties: f((r = f({}, e), l = l = {
          video_asset_id: b,
          quest_completed: y,
          video_duration_sec: t.current.duration,
          video_progress: (0, u.zh)(e.segment_end_sec, t.current.duration),
          video_session_id: v
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
        }), r), m(n)),
        sourceQuestContent: E
      })
    }
  }, [S, h, b, y, v, n, t, E]), M = r.useCallback((e, r) => {
    var i, a;
    if (null == t.current) return;
    let c = null == (i = t.current) ? true : i.error,
      g = null == (a = t.current) ? true : a.networkState,
      y = null != t.current ? (0, u.zh)(t.current.currentTime, t.current.duration) : true,
      _ = null != r ? {
        hls_error_subtype: r.errorDetails,
        hls_error_fatal: r.fatal
      } : {};
    S({
      questId: h,
      event: p.HAw.QUEST_VIDEO_ERROR,
      properties: f({
        video_progress: y,
        video_error_type: e,
        video_asset_id: b,
        network_connection_speed: C,
        video_session_id: v,
        video_error_code: null == c ? true : c.code,
        video_error_message: null == c ? true : c.message,
        video_network_state: g,
        is_full_episode_video_quest: O,
        is_hls_supported: l.Ay.isSupported()
      }, m(n), _),
      sourceQuestContent: E
    }), (e === d.SB.SOURCE_ERROR || e === d.SB.NO_VALID_SOURCE) && s.A.increment({
      name: o.K.QUEST_VIDEO_ERROR,
      tags: ["quest_id:".concat(h), "error_type:".concat(e)]
    })
  }, [h, t, b, v, n, S, E, C, O]), V = r.useCallback((e, t) => {
    let n;
    switch (g.info("[QV] | HLS Error: type=".concat(t.type, ", details=").concat(t.details, ", fatal=").concat(t.fatal)), t.type) {
      case l.Ay.ErrorTypes.NETWORK_ERROR:
        n = d.SB.HLS_NETWORK_ERROR;
        break;
      case l.Ay.ErrorTypes.MEDIA_ERROR:
        n = d.SB.HLS_MEDIA_ERROR;
        break;
      case l.Ay.ErrorTypes.MUX_ERROR:
        n = d.SB.HLS_MUX_ERROR;
        break;
      case l.Ay.ErrorTypes.KEY_SYSTEM_ERROR:
        n = d.SB.HLS_KEY_SYSTEM_ERROR;
        break;
      default:
        n = d.SB.HLS_OTHER_ERROR
    }
    M(n, {
      errorDetails: t.details,
      fatal: t.fatal
    })
  }, [g, M]);
  r.useEffect(() => {
    if (null == n.current) return;
    let e = n.current;
    return e.on(l.Ay.Events.ERROR, V), () => {
      e.off(l.Ay.Events.ERROR, V)
    }
  }, [n, V]);
  let Q = r.useCallback(e => {
      null != t.current && S({
        questId: h,
        event: e ? p.HAw.QUEST_VIDEO_FULLSCREEN_ENTERED : p.HAw.QUEST_VIDEO_FULLSCREEN_EXITED,
        properties: f({
          video_session_id: v,
          video_asset_id: b
        }, m(n)),
        sourceQuestContent: E
      })
    }, [h, t, v, n, S, b, E]),
    U = r.useCallback(e => {
      null != t.current && S({
        questId: h,
        event: p.HAw.QUEST_VIDEO_VOLUME_CHANGED,
        properties: f({
          volume_threshold: e > 0 && e < 1 ? .5 : e,
          video_session_id: v,
          video_asset_id: b
        }, m(n)),
        sourceQuestContent: E
      })
    }, [h, t, b, v, n, S, E]);
  return {
    trackQuestVideoLoadingStarted: A,
    trackQuestVideoLoadingEnded: j,
    trackQuestVideoTimeToFirstFrame: T,
    trackQuestVideoProgressed: D,
    trackQuestVideoResumed: w,
    trackQuestVideoPaused: N,
    trackQuestVideoFocusChange: P,
    trackQuestContentClick: R,
    trackQuestVideoBufferingStarted: I,
    trackQuestVideoBufferingEnded: L,
    trackWatchTimeAnalytics: k,
    trackQuestVideoFullscreenChanged: Q,
    trackQuestVideoError: M,
    trackQuestVideoVolumeChanged: U
  }
}