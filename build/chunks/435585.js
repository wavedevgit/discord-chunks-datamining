/** Chunk was on 32249 **/
/** chunk id: 435585, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk647438 = require("./647438.js"),
  Chunk10106 = require("./10106.js"),
  Chunk286379 = require("./286379.js"),
  Chunk442837 = require("./442837.js"),
  Chunk797614 = require("./797614.js"),
  Chunk866960 = require("./866960.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk223418 = require("./223418.js"),
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
  var t;
  let {
    quest: n,
    videoRef: v,
    hlsRef: g,
    videoSessionId: _,
    videoAssetId: E,
    sourceQuestContent: C,
    logger: S
  } = e, b = (0, c._F)(), O = (0, c.O5)(), h = (0, l.e7)([s.Z], () => s.Z.getEffectiveConnectionSpeed()), y = (0, r.useRef)(false), j = (null == (t = n.userStatus) ? true : t.completedAt) != null, x = n.id, T = r.useCallback(e => {
    null != v.current && b({
      questId: x,
      event: f.rMx.QUEST_VIDEO_LOADING_STARTED,
      properties: p({
        video_asset_id: E,
        network_connection_speed: e,
        video_session_id: _,
        is_hls_supported: o.ZP.isSupported()
      }, m(g)),
      sourceQuestContent: C
    })
  }, [x, v, E, _, g, b, C]), D = r.useCallback(e => {
    null != v.current && null != e && b({
      questId: x,
      event: f.rMx.QUEST_VIDEO_LOADING_ENDED,
      properties: p({
        video_asset_id: E,
        network_connection_speed: h,
        duration: e,
        video_session_id: _
      }, m(g)),
      sourceQuestContent: C
    })
  }, [x, v, E, _, g, b, C, h]), P = r.useCallback(e => {
    null != v.current && b({
      questId: x,
      event: f.rMx.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
      properties: p({
        duration_ms: e,
        video_session_id: _,
        video_asset_id: E
      }, m(g)),
      sourceQuestContent: C
    })
  }, [x, v, E, _, g, b, C]), I = r.useCallback(() => {
    null != v.current && b({
      questId: x,
      event: f.rMx.QUEST_VIDEO_PROGRESSED,
      properties: p({
        progress: (0, u.bA)(v.current.currentTime, v.current.duration),
        video_timestamp_seconds: v.current.currentTime,
        video_session_id: _,
        video_asset_id: E
      }, m(g)),
      sourceQuestContent: C
    })
  }, [x, v, _, g, b, E, C]), R = r.useCallback(e => {
    null != v.current && b({
      questId: x,
      event: f.rMx.QUEST_VIDEO_RESUMED,
      properties: p({
        video_timestamp_seconds: v.current.currentTime,
        pause_reason: e,
        video_session_id: _,
        video_asset_id: E
      }, m(g)),
      sourceQuestContent: C
    })
  }, [x, v, _, g, b, E, C]), N = r.useCallback(e => {
    null != v.current && null != e && b({
      questId: x,
      event: f.rMx.QUEST_VIDEO_PAUSED,
      properties: p({
        video_timestamp_seconds: v.current.currentTime,
        reason: e,
        video_session_id: _,
        video_asset_id: E
      }, m(g)),
      sourceQuestContent: C
    })
  }, [x, v, _, g, b, E, C]), k = r.useCallback((e, t) => {
    null != v.current && b({
      questId: x,
      event: e ? f.rMx.QUEST_VIDEO_APP_FOCUSED : f.rMx.QUEST_VIDEO_APP_UNFOCUSED,
      properties: {
        video_timestamp_seconds: v.current.currentTime,
        video_state: t,
        video_session_id: _,
        video_asset_id: E
      },
      sourceQuestContent: C
    })
  }, [x, v, _, b, E, C]), w = r.useCallback(() => {
    null != v.current && (y.current += 1, b({
      questId: x,
      event: f.rMx.QUEST_VIDEO_BUFFERING_STARTED,
      properties: p({
        video_asset_id: E,
        network_connection_speed: h,
        buffer_index: y.current,
        video_session_id: _
      }, m(g)),
      sourceQuestContent: C
    }))
  }, [x, v, E, _, g, b, C, h]), A = r.useCallback(e => {
    null != v.current && (y.current += 1, b({
      questId: x,
      event: f.rMx.QUEST_VIDEO_BUFFERING_ENDED,
      properties: p({
        video_asset_id: E,
        network_connection_speed: h,
        duration: e,
        buffer_index: y.current,
        video_session_id: _
      }, m(g)),
      sourceQuestContent: C
    }))
  }, [x, v, E, _, g, b, C, h]), L = r.useCallback((e, t) => {
    O({
      questId: x,
      questContent: e,
      questContentCTA: t,
      sourceQuestContent: C
    })
  }, [x, C, O]), M = r.useCallback(e => {
    if (null != v.current) {
      var t, n;
      b({
        questId: x,
        event: f.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
        properties: p((t = p({}, e), n = n = {
          video_asset_id: E,
          quest_completed: j,
          video_duration_sec: v.current.duration,
          video_progress: (0, u.bA)(e.segment_end_sec, v.current.duration),
          video_session_id: _
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t), m(g)),
        sourceQuestContent: C
      })
    }
  }, [b, x, E, j, _, g, v, C]), B = r.useCallback((e, t) => {
    var n, r;
    if (null == v.current) return;
    let o = null == (n = v.current) ? true : n.error,
      l = null == (r = v.current) ? true : r.networkState,
      s = null != v.current ? (0, u.bA)(v.current.currentTime, v.current.duration) : true,
      c = null != t ? {
        hls_error_subtype: t.errorDetails,
        hls_error_fatal: t.fatal
      } : {};
    b({
      questId: x,
      event: f.rMx.QUEST_VIDEO_ERROR,
      properties: p({
        video_progress: s,
        video_error_type: e,
        video_asset_id: E,
        network_connection_speed: h,
        video_session_id: _,
        video_error_code: null == o ? true : o.code,
        video_error_message: null == o ? true : o.message,
        video_network_state: l
      }, m(g), c),
      sourceQuestContent: C
    }), e === d.CY.SOURCE_ERROR && i.Z.increment({
      name: a.V.QUEST_VIDEO_ERROR,
      tags: ["quest_id:".concat(x), "error_type:".concat(e)]
    })
  }, [x, v, E, _, g, b, C, h]), V = r.useCallback((e, t) => {
    let n;
    switch (S.info("[QV] | HLS Error: type=".concat(t.type, ", details=").concat(t.details, ", fatal=").concat(t.fatal)), t.type) {
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
    B(n, {
      errorDetails: t.details,
      fatal: t.fatal
    })
  }, [S, B]);
  r.useEffect(() => {
    if (null == g.current) return;
    let e = g.current;
    return e.on(o.ZP.Events.ERROR, V), () => {
      e.off(o.ZP.Events.ERROR, V)
    }
  }, [g, V]);
  let F = r.useCallback(e => {
      null != v.current && b({
        questId: x,
        event: e ? f.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED : f.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
        properties: p({
          video_session_id: _,
          video_asset_id: E
        }, m(g)),
        sourceQuestContent: C
      })
    }, [x, v, _, g, b, E, C]),
    Z = r.useCallback(e => {
      null != v.current && b({
        questId: x,
        event: f.rMx.QUEST_VIDEO_VOLUME_CHANGED,
        properties: p({
          volume_threshold: e > 0 && e < 1 ? .5 : e,
          video_session_id: _,
          video_asset_id: E
        }, m(g)),
        sourceQuestContent: C
      })
    }, [x, v, E, _, g, b, C]);
  return {
    trackQuestVideoLoadingStarted: T,
    trackQuestVideoLoadingEnded: D,
    trackQuestVideoTimeToFirstFrame: P,
    trackQuestVideoProgressed: I,
    trackQuestVideoResumed: R,
    trackQuestVideoPaused: N,
    trackQuestVideoFocusChange: k,
    trackQuestContentClick: L,
    trackQuestVideoBufferingStarted: w,
    trackQuestVideoBufferingEnded: A,
    trackWatchTimeAnalytics: M,
    trackQuestVideoFullscreenChanged: F,
    trackQuestVideoError: B,
    trackQuestVideoVolumeChanged: Z
  }
}