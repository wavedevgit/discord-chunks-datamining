/** Chunk was on web.js **/
/** chunk id: 513752, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk58149 = require("./58149.js"),
  Chunk329551 = require("./329551.js"),
  Chunk912630 = require("./912630.js"),
  Chunk965162 = require("./965162.js"),
  Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js");

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
    let n = u.A.getVoiceFilterSpeakingDurationMs();
    return m(_({
      channel_id: e.id,
      channel_type: e.type,
      guild_id: e.getGuildId(),
      rtc_connection_id: u.A.getRTCConnectionId(),
      duration: u.A.getDuration(),
      media_session_id: u.A.getMediaSessionId()
    }, (0, i.JK)(u.A.getGuildId(), u.A.getChannelId(), t)), {
      duration_speaking_voice_filter_ids: null != n ? [...n.keys()] : null,
      duration_speaking_voice_filter_ms: null != n ? [...n.values()] : null
    })
  },
  E = () => {
    var e;
    let t = (0, a.i)(f.default.getCurrentUser());
    return {
      video_device_name: null == (e = c.A.getVideoDevices()[c.A.getVideoDeviceId()]) ? true : e.name,
      video_hardware_scaling_enabled: c.A.getHardwareEncoding(),
      video_effect_type: (0, o.wC)(t),
      video_effect_detail: (0, o._V)(t)
    }
  };

function y(e, t, n, i) {
  let a = d.A.getVoiceChannelId(),
    o = l.A.getChannel(a);
  if (null == t && null != a && null != o) {
    let t = g(o, i);
    if (e(), s.A.hasUsedBackgroundInCall) {
      let e = _({}, t, E());
      r.h.dispatch({
        type: "VIDEO_BACKGROUND_SHOW_FEEDBACK",
        analyticsData: e
      })
    } else r.h.dispatch({
      type: "VOICE_CHANNEL_SHOW_FEEDBACK",
      analyticsData: t
    })
  } else e()
}