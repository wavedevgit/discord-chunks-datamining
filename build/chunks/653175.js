/** Chunk was on web.js **/
/** chunk id: 653175, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk367907 = require("./367907.js"),
  Chunk932724 = require("./932724.js"),
  Chunk634041 = require("./634041.js"),
  Chunk647177 = require("./647177.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = (e, t) => {
    let n = u.Z.getVoiceFilterSpeakingDurationMs();
    return m(_({
      channel_id: e.id,
      channel_type: e.type,
      guild_id: e.getGuildId(),
      rtc_connection_id: u.Z.getRTCConnectionId(),
      duration: u.Z.getDuration(),
      media_session_id: u.Z.getMediaSessionId()
    }, (0, i.kO)(u.Z.getGuildId(), u.Z.getChannelId(), t)), {
      duration_speaking_voice_filter_ids: null != n ? [...n.keys()] : null,
      duration_speaking_voice_filter_ms: null != n ? [...n.values()] : null
    })
  },
  E = () => {
    var e;
    let t = (0, a.P)(f.default.getCurrentUser());
    return {
      video_device_name: null == (e = c.Z.getVideoDevices()[c.Z.getVideoDeviceId()]) ? true : e.name,
      video_hardware_scaling_enabled: c.Z.getHardwareEncoding(),
      video_effect_type: (0, s.TA)(t),
      video_effect_detail: (0, s.V$)(t)
    }
  };

function b(e, t, n, i) {
  let a = d.Z.getVoiceChannelId(),
    s = l.Z.getChannel(a);
  if (null == t && null != a && null != s) {
    let t = g(s, i);
    if (e(), o.Z.hasUsedBackgroundInCall) {
      let e = _({}, t, E());
      r.Z.dispatch({
        type: "VIDEO_BACKGROUND_SHOW_FEEDBACK",
        analyticsData: e
      })
    } else r.Z.dispatch({
      type: "VOICE_CHANNEL_SHOW_FEEDBACK",
      analyticsData: t
    })
  } else e()
}