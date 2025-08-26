/** Chunk was on web.js **/
/** chunk id: 626135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  AnalyticEventConfigs: () => Z,
  AnalyticsContext: () => C,
  AnalyticsSchema: () => Chunk747161,
  addExtraAnalyticsDecorator: () => B,
  clearAnalyticsEventsRecording: () => et,
  debugLogEvent: () => q,
  default: () => el,
  expandEventProperties: () => z,
  expandLocation: () => F,
  getAnalyticsEventsRecording: () => ee,
  getNewAnalyticsLoadId: () => es,
  isGameApplicationType: () => eo,
  launchSignature: () => U,
  setUTMContext: () => K,
  startRecordingAnalyticsEvents: () => J,
  stopRecordingAnalyticsEvents: () => $,
  trackNetworkAction: () => ea
}), require("./539854.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk772848 = require("./772848.js"),
  Chunk990547 = require("./990547.js"),
  Chunk548345 = require("./548345.js"),
  Chunk668757 = require("./668757.js"),
  Chunk570140 = require("./570140.js"),
  Chunk565384 = require("./565384.js"),
  Chunk569611 = require("./569611.js"),
  Chunk97145 = require("./97145.js"),
  Chunk857192 = require("./857192.js"),
  Chunk747161 = require("./747161.js"),
  Chunk848479 = require("./848479.js"),
  Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js"),
  Chunk94752 = require("./94752.js"),
  Chunk674563 = require("./674563.js"),
  Chunk388032 = require("./388032.jsx");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = S(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let A = {
    location: {}
  },
  C = Chunk647438.createContext(A),
  N = {},
  R = 1e4,
  P = 6e4,
  w = 12e4,
  D = 3e5,
  x = 9e5,
  L = 36e5,
  j = 864e5,
  M = .001,
  k = performance.now(),
  U = (0, Chunk668757.X6)() ? (0, Chunk668757.Ub)((0, Chunk548345.R)()) : null;
Chunk990547.extendSuperProperties({
  launch_signature: U
});
let G = [];

function B(e) {
  G.push(e)
}
let Z = {
  [Chunk981631.rMx.APP_OPENED]: {
    throttlePeriod: D,
    throttleKeys: () => []
  },
  [Chunk981631.rMx.APP_BACKGROUND]: {
    throttlePeriod: w,
    throttleKeys: () => []
  },
  [Chunk981631.rMx.ACK_MESSAGES]: e => e.location_object_type === m.Qqv.ACK_MANUAL ? true : {
    throttlePeriod: x,
    throttleKeys: e => [e.guild_id, e.channel_id, e.location_section]
  },
  [Chunk981631.rMx.GUILD_VIEWED]: {
    throttlePeriod: x,
    throttleKeys: e => [e.guild_id, e.is_pending]
  },
  [Chunk981631.rMx.FRIENDS_LIST_CLICKED]: {
    throttlePeriod: x,
    throttleKeys: e => [e.tab_opened]
  },
  [Chunk981631.rMx.FRIENDS_LIST_VIEWED]: {
    throttlePeriod: x,
    throttleKeys: e => [e.tab_opened]
  },
  [Chunk981631.rMx.NOW_PLAYING_CARD_HOVERED]: {
    throttlePeriod: x,
    throttleKeys: e => [e.tab_opened]
  },
  [Chunk981631.rMx.START_SPEAKING]: {
    throttlePeriod: x,
    throttleKeys: e => [e.server]
  },
  [Chunk981631.rMx.START_LISTENING]: {
    throttlePeriod: x,
    throttleKeys: e => [e.server]
  },
  [Chunk981631.rMx.ACTIVITY_UPDATED]: {
    throttlePeriod: P,
    throttleKeys: e => [e.application_id],
    deduplicate: true
  },
  [Chunk981631.rMx.CHANNEL_OPENED]: {
    throttlePeriod: x,
    throttleKeys: e => null != e.channel_static_route ? [e.guild_id, e.channel_static_route, e.channel_view] : [e.channel_id, e.channel_view]
  },
  [Chunk981631.rMx.TEXT_IN_VOICE_OPENED]: {
    throttlePeriod: j,
    throttleKeys: e => [e.channel_id]
  },
  [Chunk981631.rMx.NOTIFICATION_VIEWED]: {
    throttlePeriod: x,
    throttleKeys: e => [e.notif_type]
  },
  [Chunk981631.rMx.MEMBER_LIST_VIEWED]: {
    throttlePeriod: x,
    throttleKeys: e => [e.channel_id]
  },
  [Chunk981631.rMx.DM_LIST_VIEWED]: {
    throttlePeriod: x,
    throttleKeys: e => [e.channel_id]
  },
  [Chunk981631.rMx.NAV_DRAWER_OPENED]: {
    throttlePeriod: x,
    throttleKeys: () => []
  },
  [Chunk981631.rMx.KEYBOARD_SHORTCUT_USED]: {
    throttlePeriod: w,
    throttleKeys: e => {
      var t;
      return [e.shortcut_name, e.location_object, ...null != (t = e.source_class_list) ? t : []]
    }
  },
  [Chunk981631.rMx.QUICKSWITCHER_OPENED]: {
    throttlePeriod: R,
    throttleKeys: () => []
  },
  [Chunk981631.rMx.CHAT_INPUT_COMPONENT_VIEWED]: {
    throttlePeriod: x,
    throttleKeys: e => [e.type]
  },
  [Chunk981631.rMx.ROLE_PAGE_VIEWED]: {
    throttlePeriod: w,
    throttleKeys: e => [e.role_id, e.tab_opened]
  },
  [Chunk981631.rMx.VIDEO_INPUT_INITIALIZED]: {
    throttlePeriod: D,
    throttleKeys: () => []
  },
  [Chunk981631.rMx.AUDIO_INPUT_INITIALIZED]: {
    throttlePeriod: D,
    throttleKeys: () => []
  },
  [Chunk981631.rMx.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
    throttlePeriod: x,
    throttleKeys: () => []
  },
  [Chunk981631.rMx.HUB_STUDENT_PROMPT_CLICKED]: {
    throttlePeriod: x,
    throttleKeys: () => []
  },
  [Chunk981631.rMx.RPC_SERVER_ERROR_CAUGHT]: {
    throttlePeriod: j,
    throttleKeys: () => []
  },
  [Chunk981631.rMx.RPC_COMMAND_SENT]: {
    throttlePeriod: j,
    throttleKeys: e => [e.application_id, e.command],
    throttlePercent: M
  },
  [Chunk981631.rMx.RPC_SUBSCRIPTION_REQUESTED]: {
    throttlePeriod: j,
    throttleKeys: e => [e.application_id, e.event],
    throttlePercent: M
  },
  [Chunk981631.rMx.ACTIVITY_HANDSHAKE]: {
    throttlePeriod: j,
    throttleKeys: e => [e.application_id]
  },
  [Chunk981631.rMx.CHANNEL_BANNER_VIEWED]: {
    throttlePeriod: j,
    throttleKeys: e => [e.banner_type, e.channel_id]
  },
  [Chunk981631.rMx.PREMIUM_UPSELL_VIEWED]: {
    throttlePeriod: P,
    throttleKeys: e => [e.type]
  },
  [Chunk981631.rMx.FORUM_CHANNEL_SEARCHED]: {
    throttlePeriod: P,
    throttleKeys: e => [e.guild_id, e.channel_id]
  },
  [Chunk981631.rMx.FORUM_CHANNEL_SCROLLED]: {
    throttlePeriod: x,
    throttleKeys: e => [e.guild_id, e.channel_id]
  },
  [Chunk981631.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: {
    throttlePeriod: P,
    throttleKeys: e => [e.user_id]
  },
  [Chunk981631.rMx.MEDIA_VIEWER_SESSION_COMPLETED]: {
    throttlePeriod: P,
    throttleKeys: () => []
  },
  [Chunk981631.rMx.SUMMARIES_UNREAD_BAR_VIEWED]: {
    throttlePeriod: D,
    throttleKeys: e => [e.channel_id]
  },
  [Chunk981631.rMx.ACTIVITY_CARDS_VIEWED]: {
    throttlePeriod: x,
    throttleKeys: e => [e.context, e.guild_id]
  },
  [Chunk981631.rMx.GUILD_TOOLTIP_SHOWN]: {
    throttlePeriod: x,
    throttleKeys: e => [e.guild_id]
  },
  [Chunk981631.rMx.ACK_COMMUNITY_MESSAGES]: {
    throttlePeriod: x,
    throttleKeys: e => [e.channel_id]
  },
  [Chunk981631.rMx.REDESIGN_NAV_BAR_CLICKED]: {
    throttlePeriod: x,
    throttleKeys: e => [e.tab]
  },
  [Chunk981631.rMx.CHANNEL_LIST_END_REACHED]: {
    throttlePeriod: x,
    throttleKeys: e => [e.guild_id]
  },
  [Chunk981631.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
    throttlePeriod: P,
    throttleKeys: e => [e.guild_id, e.channel_id]
  },
  [Chunk981631.rMx.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
    throttlePeriod: L,
    throttleKeys: () => []
  },
  [Chunk981631.rMx.KEYWORD_FILTER_MATCH]: {
    throttlePeriod: x,
    throttleKeys: e => [e.message_id]
  },
  [Chunk981631.rMx.MEDIA_INPUT_VOLUME_CHANGED]: {
    throttlePeriod: D,
    throttleKeys: e => [e.location_stack]
  },
  [Chunk981631.rMx.MEDIA_OUTPUT_VOLUME_CHANGED]: {
    throttlePeriod: D,
    throttleKeys: e => [e.location_stack]
  },
  [Chunk981631.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: {
    throttlePeriod: x,
    throttleKeys: e => [e.channel_id]
  },
  [Chunk981631.rMx.USER_VOICE_ACTIVITY_VIEWED]: {
    throttlePeriod: D,
    throttleKeys: e => [e.activity_user_id, e.surface],
    deduplicate: true
  },
  [Chunk981631.rMx.PARTY_VOICE_ACTIVITY_VIEWED]: {
    throttlePeriod: D,
    throttleKeys: e => [e.voice_channel_id],
    deduplicate: true
  },
  [Chunk981631.rMx.MEMBER_LIST_SWIPE_PEEK]: {
    throttlePeriod: 1e3,
    throttleKeys: e => [e.channel_id]
  },
  [Chunk981631.rMx.REDACTABLE_MESSAGE_LOADED]: {
    throttlePeriod: x,
    throttleKeys: e => [e.channel_id, e.message_id]
  },
  [Chunk981631.rMx.OPEN_MODAL]: e => e.type === m.jXE.MEDIA_VIEWER ? {
    throttlePeriod: P,
    throttleKeys: e => [e.type]
  } : true,
  [Chunk981631.rMx.MODERATOR_QUEUE_ACTION]: {
    throttlePeriod: R,
    throttleKeys: e => [e.guild_id]
  },
  [Chunk981631.rMx.NOTIFICATION_PERMISSION_STATUS]: {
    throttlePeriod: 12 * L,
    throttleKeys: e => [e.os_enabled, e.notification_authorization_status, e.foreground_app_enabled, e.background_app_enabled]
  }
};

function F(e) {
  return "string" == typeof e ? {
    location: e
  } : {
    location: e.page,
    location_page: e.page,
    location_section: e.section,
    location_object: e.object,
    location_object_type: e.objectType
  }
}

function V(e) {
  return "string" == typeof e ? {
    source: e
  } : {
    source_page: e.page,
    source_section: e.section,
    source_object: e.object,
    source_object_type: e.objectType,
    source_promotion_id: e.promotionId
  }
}
let H = () => Chunk94752.E.NONE;

function Y(e) {
  H = e
}
let W = (0, Chunk990547.trackMaker)({
  analyticEventConfigs: Z,
  dispatcher: Chunk570140.Z,
  TRACK_ACTION_NAME: "TRACK"
});

function K(e) {
  return N = e
}

function z(e) {
  var t, n, r, i;
  let o = null != e ? e : {};
  if (null != o.location) {
    let {
      location: e
    } = o;
    o = O({}, T(o, ["location"]), F(e))
  }
  if (null != o.source) {
    let {
      source: e
    } = o;
    o = O({}, T(o, ["source"]), V(e))
  }
  o.client_performance_cpu = p.Z.getCurrentCPUUsagePercent(), o.client_performance_memory = p.Z.getCurrentMemoryUsageKB(), o.cpu_core_count = p.Z.getCPUCoreCount(), o.accessibility_features = H(), o.rendered_locale = b.intl.currentLocale, o.uptime_app = Math.floor((performance.now() - k) / 1e3);
  let a = p.Z.getProcessUptime();
  null != a && (o.uptime_process_renderer = Math.floor(a));
  let {
    utmSource: s,
    utmMedium: l,
    utmCampaign: c,
    utmContent: u
  } = N;
  return o.utm_source = null != (t = o.utm_source) ? t : s, o.utm_medium = null != (n = o.utm_medium) ? n : l, o.utm_campaign = null != (r = o.utm_campaign) ? r : c, o.utm_content = null != (i = o.utm_content) ? i : u, o.launch_signature = U, G.forEach(e => e(o)), o
}

function q(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  f.default.isLoggingAnalyticsEvents && console.info("AnalyticsUtils.track(...):", e, t), n ? u.Hj("Analytics", e, t) : u.Hj("Analytics", e)
}
let X = false,
  Q = {};

function J() {
  X = true
}

function $() {
  X = false
}

function ee() {
  return Q
}

function et() {
  Object.keys(Q).forEach(e => {
    delete Q[e]
  })
}

function en(e, t) {
  return !!X && (null != t && (Array.isArray(Q[e]) ? Q[e].push(t) : Q[e] = [t]), true)
}

function er(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
    r = String(e);
  if (d.R.includes(r) || h.Z.addBreadcrumb({
      category: "analytics",
      message: "".concat(r)
    }), en(e, t), null != n.throttlePercent && Math.random() > n.throttlePercent) return Promise.resolve();
  let i = z(t);
  return q(r, i, n.logEventProperties), W(e, i, {
    flush: n.flush,
    fingerprint: n.fingerprint
  })
}
let ei = (0, Chunk990547.trackMaker)({
  analyticEventConfigs: Z,
  dispatcher: Chunk570140.Z,
  TRACK_ACTION_NAME: "TRACK"
});

function eo(e) {
  return e === E.wW.GAME || e === E.wW.DEPRECATED_GAME
}

function ea(e, t) {
  let n = z(O({
    location: (0, c.k$)()
  }, t));
  (0, c.dT)(e, O({
    type: "action"
  }, t)), q(e, n), ei(e, n)
}

function es() {
  return (0, Chunk772848.Z)()
}
let el = I(O({}, Chunk990547), {
  getCampaignParams: Chunk990547.getCampaignParams,
  setSystemAccessibilityFeatures: Y,
  expandEventProperties: z,
  track: er
})