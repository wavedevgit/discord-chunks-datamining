/** Chunk was on web.js **/
/** chunk id: 626135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  AnalyticEventConfigs: () => F,
  AnalyticsContext: () => N,
  AnalyticsSchema: () => Chunk747161,
  addExtraAnalyticsDecorator: () => Z,
  clearAnalyticsEventsRecording: () => en,
  debugLogEvent: () => X,
  default: () => ec,
  expandEventProperties: () => q,
  expandLocation: () => V,
  getAnalyticsEventsRecording: () => et,
  getNewAnalyticsLoadId: () => el,
  isGameApplicationType: () => eo,
  launchSignature: () => G,
  setUTMContext: () => z,
  startRecordingAnalyticsEvents: () => $,
  stopRecordingAnalyticsEvents: () => ee,
  trackNetworkAction: () => es
}), require("./539854.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk772848 = require("./772848.js"),
  Chunk990547 = require("./990547.js"),
  Chunk548345 = require("./548345.js"),
  Chunk668757 = require("./668757.js"),
  Chunk570140 = require("./570140.js"),
  Chunk100527 = require("./100527.js"),
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

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = A(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let C = {
    location: {}
  },
  N = Chunk647438.createContext(C),
  R = {},
  P = 1e4,
  w = 6e4,
  D = 12e4,
  L = 3e5,
  x = 9e5,
  M = 36e5,
  k = 864e5,
  j = .001,
  U = performance.now(),
  G = (0, Chunk668757.X6)() ? (0, Chunk668757.Ub)((0, Chunk548345.R)()) : null;
Chunk990547.extendSuperProperties({
  launch_signature: G
});
let B = [];

function Z(e) {
  B.push(e)
}
let F = {
  [Chunk981631.rMx.APP_OPENED]: {
    throttlePeriod: L,
    throttleKeys: () => []
  },
  [Chunk981631.rMx.APP_BACKGROUND]: {
    throttlePeriod: D,
    throttleKeys: () => []
  },
  [Chunk981631.rMx.ACK_MESSAGES]: e => e.location_object_type === g.AnalyticsObjectTypes.ACK_MANUAL ? true : {
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
    throttlePeriod: w,
    throttleKeys: e => [e.application_id],
    deduplicate: true
  },
  [Chunk981631.rMx.CHANNEL_OPENED]: {
    throttlePeriod: x,
    throttleKeys: e => null != e.channel_static_route ? [e.guild_id, e.channel_static_route, e.channel_view] : null != e.location && e.location.startsWith(c.Z.FREQUENT_FRIENDS_ROW) ? [e.channel_id, e.channel_view, e.location] : [e.channel_id, e.channel_view]
  },
  [Chunk981631.rMx.TEXT_IN_VOICE_OPENED]: {
    throttlePeriod: k,
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
    throttlePeriod: D,
    throttleKeys: e => {
      var t;
      return [e.shortcut_name, e.location_object, ...null != (t = e.source_class_list) ? t : []]
    }
  },
  [Chunk981631.rMx.QUICKSWITCHER_OPENED]: {
    throttlePeriod: P,
    throttleKeys: () => []
  },
  [Chunk981631.rMx.CHAT_INPUT_COMPONENT_VIEWED]: {
    throttlePeriod: x,
    throttleKeys: e => [e.type]
  },
  [Chunk981631.rMx.ROLE_PAGE_VIEWED]: {
    throttlePeriod: D,
    throttleKeys: e => [e.role_id, e.tab_opened]
  },
  [Chunk981631.rMx.VIDEO_INPUT_INITIALIZED]: {
    throttlePeriod: L,
    throttleKeys: () => []
  },
  [Chunk981631.rMx.AUDIO_INPUT_INITIALIZED]: {
    throttlePeriod: L,
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
    throttlePeriod: k,
    throttleKeys: () => []
  },
  [Chunk981631.rMx.RPC_COMMAND_SENT]: {
    throttlePeriod: k,
    throttleKeys: e => [e.application_id, e.command],
    throttlePercent: j
  },
  [Chunk981631.rMx.RPC_SUBSCRIPTION_REQUESTED]: {
    throttlePeriod: k,
    throttleKeys: e => [e.application_id, e.event],
    throttlePercent: j
  },
  [Chunk981631.rMx.ACTIVITY_HANDSHAKE]: {
    throttlePeriod: k,
    throttleKeys: e => [e.application_id]
  },
  [Chunk981631.rMx.CHANNEL_BANNER_VIEWED]: {
    throttlePeriod: k,
    throttleKeys: e => [e.banner_type, e.channel_id]
  },
  [Chunk981631.rMx.PREMIUM_UPSELL_VIEWED]: {
    throttlePeriod: w,
    throttleKeys: e => [e.type]
  },
  [Chunk981631.rMx.FORUM_CHANNEL_SEARCHED]: {
    throttlePeriod: w,
    throttleKeys: e => [e.guild_id, e.channel_id]
  },
  [Chunk981631.rMx.FORUM_CHANNEL_SCROLLED]: {
    throttlePeriod: x,
    throttleKeys: e => [e.guild_id, e.channel_id]
  },
  [Chunk981631.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: {
    throttlePeriod: w,
    throttleKeys: e => [e.user_id]
  },
  [Chunk981631.rMx.MEDIA_VIEWER_SESSION_COMPLETED]: {
    throttlePeriod: w,
    throttleKeys: () => []
  },
  [Chunk981631.rMx.SUMMARIES_UNREAD_BAR_VIEWED]: {
    throttlePeriod: L,
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
    throttlePeriod: w,
    throttleKeys: e => [e.guild_id, e.channel_id]
  },
  [Chunk981631.rMx.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
    throttlePeriod: M,
    throttleKeys: () => []
  },
  [Chunk981631.rMx.KEYWORD_FILTER_MATCH]: {
    throttlePeriod: x,
    throttleKeys: e => [e.message_id]
  },
  [Chunk981631.rMx.MEDIA_INPUT_VOLUME_CHANGED]: {
    throttlePeriod: L,
    throttleKeys: e => [e.location_stack]
  },
  [Chunk981631.rMx.MEDIA_OUTPUT_VOLUME_CHANGED]: {
    throttlePeriod: L,
    throttleKeys: e => [e.location_stack]
  },
  [Chunk981631.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: {
    throttlePeriod: x,
    throttleKeys: e => [e.channel_id]
  },
  [Chunk981631.rMx.USER_VOICE_ACTIVITY_VIEWED]: {
    throttlePeriod: L,
    throttleKeys: e => [e.activity_user_id, e.surface],
    deduplicate: true
  },
  [Chunk981631.rMx.PARTY_VOICE_ACTIVITY_VIEWED]: {
    throttlePeriod: L,
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
  [Chunk981631.rMx.OPEN_MODAL]: e => e.type === g.jXE.MEDIA_VIEWER ? {
    throttlePeriod: w,
    throttleKeys: e => [e.type]
  } : true,
  [Chunk981631.rMx.MODERATOR_QUEUE_ACTION]: {
    throttlePeriod: P,
    throttleKeys: e => [e.guild_id]
  },
  [Chunk981631.rMx.NOTIFICATION_PERMISSION_STATUS]: {
    throttlePeriod: 12 * M,
    throttleKeys: e => [e.os_enabled, e.notification_authorization_status, e.foreground_app_enabled, e.background_app_enabled]
  },
  [Chunk981631.rMx.SEARCH_BAR_VIEWED]: {
    throttlePeriod: M,
    throttleKeys: e => [e.search_type]
  },
  [Chunk981631.rMx.AD_IDENTIFIER_FETCHED]: {
    throttlePeriod: k,
    throttleKeys: () => []
  },
  [Chunk981631.rMx.ACTIVITY_PANEL_SDK_LINK_VIEWED]: {
    throttlePeriod: k,
    throttleKeys: e => [e.application_id]
  },
  [Chunk981631.rMx.LIBDISCORE_SLOW_TIMERS]: {
    throttlePeriod: M,
    throttleKeys: () => []
  },
  [Chunk981631.rMx.DEBUG_MISSING_STRING]: {
    throttlePeriod: M,
    throttleKeys: () => []
  }
};

function V(e) {
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

function H(e) {
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
let Y = () => Chunk94752.E.NONE;

function W(e) {
  Y = e
}
let K = (0, Chunk990547.trackMaker)({
  analyticEventConfigs: F,
  dispatcher: Chunk570140.Z,
  TRACK_ACTION_NAME: "TRACK"
});

function z(e) {
  return R = e
}

function q(e) {
  var t, n, r, i;
  let a = null != e ? e : {};
  if (null != a.location) {
    let {
      location: e
    } = a;
    a = v({}, S(a, ["location"]), V(e))
  }
  if (null != a.source) {
    let {
      source: e
    } = a;
    a = v({}, S(a, ["source"]), H(e))
  }
  a.client_performance_cpu = h.Z.getCurrentCPUUsagePercent(), a.client_performance_memory = h.Z.getCurrentMemoryUsageKB(), a.cpu_core_count = h.Z.getCPUCoreCount(), a.accessibility_features = Y(), a.rendered_locale = y.intl.currentLocale, a.uptime_app = Math.floor((performance.now() - U) / 1e3);
  let o = h.Z.getProcessUptime();
  null != o && (a.uptime_process_renderer = Math.floor(o));
  let {
    utmSource: s,
    utmMedium: l,
    utmCampaign: c,
    utmContent: u
  } = R;
  return a.utm_source = null != (t = a.utm_source) ? t : s, a.utm_medium = null != (n = a.utm_medium) ? n : l, a.utm_campaign = null != (r = a.utm_campaign) ? r : c, a.utm_content = null != (i = a.utm_content) ? i : u, a.launch_signature = G, B.forEach(e => e(a)), a
}

function X(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  _.default.isLoggingAnalyticsEvents && console.info("AnalyticsUtils.track(...):", e, t), n ? d.Hj("Analytics", e, t) : d.Hj("Analytics", e)
}
let Q = false,
  J = {};

function $() {
  Q = true
}

function ee() {
  Q = false
}

function et() {
  return J
}

function en() {
  Object.keys(J).forEach(e => {
    delete J[e]
  })
}

function er(e, t) {
  return !!Q && (null != t && (Array.isArray(J[e]) ? J[e].push(t) : J[e] = [t]), true)
}

function ei(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
    r = String(e);
  if (f.R.includes(r) || m.Z.addBreadcrumb({
      category: "analytics",
      message: "".concat(r)
    }), er(e, t), null != n.throttlePercent && Math.random() > n.throttlePercent) return Promise.resolve();
  let i = q(t);
  return X(r, i, n.logEventProperties), K(e, i, {
    flush: n.flush,
    fingerprint: n.fingerprint
  })
}
let ea = (0, Chunk990547.trackMaker)({
  analyticEventConfigs: F,
  dispatcher: Chunk570140.Z,
  TRACK_ACTION_NAME: "TRACK"
});

function eo(e) {
  return e === b.wW.GAME || e === b.wW.DEPRECATED_GAME
}

function es(e, t) {
  let n = q(v({
    location: (0, u.k$)()
  }, t));
  (0, u.dT)(e, v({
    type: "action"
  }, t)), X(e, n), ea(e, n)
}

function el() {
  return (0, Chunk772848.Z)()
}
let ec = T(v({}, Chunk990547), {
  getCampaignParams: Chunk990547.getCampaignParams,
  setSystemAccessibilityFeatures: W,
  expandEventProperties: q,
  track: ei
})