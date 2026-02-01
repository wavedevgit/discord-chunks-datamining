/** Chunk was on web.js **/
/** chunk id: 954571, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  AnalyticEventConfigs: () => H,
  AnalyticsContext: () => N,
  AnalyticsSchema: () => _,
  addExtraAnalyticsDecorator: () => B,
  clearAnalyticsEventsRecording: () => er,
  debugLogEvent: () => X,
  default: () => eu,
  expandEventProperties: () => Q,
  expandLocation: () => Y,
  getAnalyticsEventsRecording: () => en,
  getNewAnalyticsLoadId: () => ec,
  isGameApplicationType: () => es,
  launchSignature: () => V,
  setUTMContext: () => Z,
  startRecordingAnalyticsEvents: () => ee,
  stopRecordingAnalyticsEvents: () => et,
  trackNetworkAction: () => el
}), require("./321073.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk110259 = require("./110259.js"),
  Chunk613345 = require("./613345.js"),
  Chunk306173 = require("./306173.js"),
  Chunk73153 = require("./73153.js"),
  Chunk793574 = require("./793574.js"),
  Chunk686757 = require("./686757.js"),
  Chunk53943 = require("./53943.js"),
  Chunk790171 = require("./790171.js"),
  Chunk111162 = require("./111162.js"),
  Chunk757811 = require("./757811.js"),
  Chunk321034 = require("./321034.js"),
  Chunk728458 = require("./728458.js"),
  Chunk652215 = require("./652215.js"),
  Chunk53298 = require("./53298.js"),
  Chunk705751 = require("./705751.js"),
  Chunk985018 = require("./985018.jsx");

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

function A(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = T(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let C = {
    location: {}
  },
  N = Chunk64700.createContext(C),
  w = {},
  R = 1e3,
  P = 1e4,
  D = 6e4,
  L = 12e4,
  x = 3e5,
  M = 9e5,
  j = 36e5,
  k = 864e5,
  U = .001,
  G = performance.now(),
  V = (0, Chunk306173.xd)() ? (0, Chunk306173.xy)((0, Chunk613345.V)()) : null;
Chunk110259.extendSuperProperties({
  launch_signature: V
});
let F = [];

function B(e) {
  F.push(e)
}
let H = {
  [Chunk652215.HAw.APP_OPENED]: {
    throttlePeriod: x,
    throttleKeys: () => []
  },
  [Chunk652215.HAw.APP_BACKGROUND]: {
    throttlePeriod: L,
    throttleKeys: () => []
  },
  [Chunk652215.HAw.ACK_MESSAGES]: e => e.location_object_type === g.AnalyticsObjectTypes.ACK_MANUAL ? true : {
    throttlePeriod: M,
    throttleKeys: e => [e.guild_id, e.channel_id, e.location_section]
  },
  [Chunk652215.HAw.GUILD_VIEWED]: {
    throttlePeriod: M,
    throttleKeys: e => [e.guild_id, e.is_pending]
  },
  [Chunk652215.HAw.FRIENDS_LIST_CLICKED]: {
    throttlePeriod: M,
    throttleKeys: e => [e.tab_opened]
  },
  [Chunk652215.HAw.FRIENDS_LIST_VIEWED]: {
    throttlePeriod: M,
    throttleKeys: e => [e.tab_opened]
  },
  [Chunk652215.HAw.NOW_PLAYING_CARD_HOVERED]: {
    throttlePeriod: M,
    throttleKeys: e => [e.tab_opened]
  },
  [Chunk652215.HAw.START_SPEAKING]: {
    throttlePeriod: M,
    throttleKeys: e => [e.server]
  },
  [Chunk652215.HAw.START_LISTENING]: {
    throttlePeriod: M,
    throttleKeys: e => [e.server]
  },
  [Chunk652215.HAw.ACTIVITY_UPDATED]: {
    throttlePeriod: D,
    throttleKeys: e => [e.application_id],
    deduplicate: true
  },
  [Chunk652215.HAw.CHANNEL_OPENED]: {
    throttlePeriod: M,
    throttleKeys: e => null != e.channel_static_route ? [e.guild_id, e.channel_static_route, e.channel_view] : null != e.location && e.location.startsWith(c.A.FREQUENT_FRIENDS_ROW) ? [e.channel_id, e.channel_view, e.location] : [e.channel_id, e.channel_view]
  },
  [Chunk652215.HAw.TEXT_IN_VOICE_OPENED]: {
    throttlePeriod: k,
    throttleKeys: e => [e.channel_id]
  },
  [Chunk652215.HAw.NOTIFICATION_VIEWED]: {
    throttlePeriod: M,
    throttleKeys: e => [e.notif_type]
  },
  [Chunk652215.HAw.MEMBER_LIST_VIEWED]: {
    throttlePeriod: M,
    throttleKeys: e => [e.channel_id]
  },
  [Chunk652215.HAw.DM_LIST_VIEWED]: {
    throttlePeriod: M,
    throttleKeys: e => [e.channel_id]
  },
  [Chunk652215.HAw.NAV_DRAWER_OPENED]: {
    throttlePeriod: M,
    throttleKeys: () => []
  },
  [Chunk652215.HAw.KEYBOARD_SHORTCUT_USED]: {
    throttlePeriod: L,
    throttleKeys: e => {
      var t;
      return [e.shortcut_name, e.location_object, ...null != (t = e.source_class_list) ? t : []]
    }
  },
  [Chunk652215.HAw.QUICKSWITCHER_OPENED]: {
    throttlePeriod: P,
    throttleKeys: () => []
  },
  [Chunk652215.HAw.CHAT_INPUT_COMPONENT_VIEWED]: {
    throttlePeriod: M,
    throttleKeys: e => [e.type]
  },
  [Chunk652215.HAw.ROLE_PAGE_VIEWED]: {
    throttlePeriod: L,
    throttleKeys: e => [e.role_id, e.tab_opened]
  },
  [Chunk652215.HAw.VIDEO_INPUT_INITIALIZED]: {
    throttlePeriod: x,
    throttleKeys: () => []
  },
  [Chunk652215.HAw.AUDIO_INPUT_INITIALIZED]: {
    throttlePeriod: x,
    throttleKeys: () => []
  },
  [Chunk652215.HAw.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
    throttlePeriod: M,
    throttleKeys: () => []
  },
  [Chunk652215.HAw.HUB_STUDENT_PROMPT_CLICKED]: {
    throttlePeriod: M,
    throttleKeys: () => []
  },
  [Chunk652215.HAw.RPC_SERVER_ERROR_CAUGHT]: {
    throttlePeriod: k,
    throttleKeys: () => []
  },
  [Chunk652215.HAw.RPC_COMMAND_SENT]: {
    throttlePeriod: k,
    throttleKeys: e => [e.application_id, e.command],
    throttlePercent: U
  },
  [Chunk652215.HAw.RPC_SUBSCRIPTION_REQUESTED]: {
    throttlePeriod: k,
    throttleKeys: e => [e.application_id, e.event],
    throttlePercent: U
  },
  [Chunk652215.HAw.ACTIVITY_HANDSHAKE]: {
    throttlePeriod: k,
    throttleKeys: e => [e.application_id]
  },
  [Chunk652215.HAw.CHANNEL_BANNER_VIEWED]: {
    throttlePeriod: k,
    throttleKeys: e => [e.banner_type, e.channel_id]
  },
  [Chunk652215.HAw.PREMIUM_UPSELL_VIEWED]: {
    throttlePeriod: D,
    throttleKeys: e => [e.type]
  },
  [Chunk652215.HAw.FORUM_CHANNEL_SEARCHED]: {
    throttlePeriod: D,
    throttleKeys: e => [e.guild_id, e.channel_id]
  },
  [Chunk652215.HAw.FORUM_CHANNEL_SCROLLED]: {
    throttlePeriod: M,
    throttleKeys: e => [e.guild_id, e.channel_id]
  },
  [Chunk652215.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: {
    throttlePeriod: D,
    throttleKeys: e => [e.user_id]
  },
  [Chunk652215.HAw.MEDIA_VIEWER_SESSION_COMPLETED]: {
    throttlePeriod: D,
    throttleKeys: () => []
  },
  [Chunk652215.HAw.SUMMARIES_UNREAD_BAR_VIEWED]: {
    throttlePeriod: x,
    throttleKeys: e => [e.channel_id]
  },
  [Chunk652215.HAw.ACTIVITY_CARDS_VIEWED]: {
    throttlePeriod: M,
    throttleKeys: e => [e.context, e.guild_id]
  },
  [Chunk652215.HAw.GUILD_TOOLTIP_SHOWN]: {
    throttlePeriod: M,
    throttleKeys: e => [e.guild_id]
  },
  [Chunk652215.HAw.ACK_COMMUNITY_MESSAGES]: {
    throttlePeriod: M,
    throttleKeys: e => [e.channel_id]
  },
  [Chunk652215.HAw.REDESIGN_NAV_BAR_CLICKED]: {
    throttlePeriod: M,
    throttleKeys: e => [e.tab]
  },
  [Chunk652215.HAw.CHANNEL_LIST_END_REACHED]: {
    throttlePeriod: M,
    throttleKeys: e => [e.guild_id]
  },
  [Chunk652215.HAw.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
    throttlePeriod: D,
    throttleKeys: e => [e.guild_id, e.channel_id]
  },
  [Chunk652215.HAw.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
    throttlePeriod: j,
    throttleKeys: () => []
  },
  [Chunk652215.HAw.MEDIA_INPUT_VOLUME_CHANGED]: {
    throttlePeriod: x,
    throttleKeys: e => [e.location_stack]
  },
  [Chunk652215.HAw.MEDIA_OUTPUT_VOLUME_CHANGED]: {
    throttlePeriod: x,
    throttleKeys: e => [e.location_stack]
  },
  [Chunk652215.HAw.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: {
    throttlePeriod: M,
    throttleKeys: e => [e.channel_id]
  },
  [Chunk652215.HAw.USER_VOICE_ACTIVITY_VIEWED]: {
    throttlePeriod: x,
    throttleKeys: e => [e.activity_user_id, e.surface],
    deduplicate: true
  },
  [Chunk652215.HAw.PARTY_VOICE_ACTIVITY_VIEWED]: {
    throttlePeriod: x,
    throttleKeys: e => [e.voice_channel_id],
    deduplicate: true
  },
  [Chunk652215.HAw.MEMBER_LIST_SWIPE_PEEK]: {
    throttlePeriod: R,
    throttleKeys: e => [e.channel_id]
  },
  [Chunk652215.HAw.REDACTABLE_MESSAGE_LOADED]: {
    throttlePeriod: M,
    throttleKeys: e => [e.channel_id, e.message_id]
  },
  [Chunk652215.HAw.OPEN_MODAL]: e => e.type === g.JJy.MEDIA_VIEWER ? {
    throttlePeriod: D,
    throttleKeys: e => [e.type]
  } : true,
  [Chunk652215.HAw.MODERATOR_QUEUE_ACTION]: {
    throttlePeriod: P,
    throttleKeys: e => [e.guild_id]
  },
  [Chunk652215.HAw.NOTIFICATION_PERMISSION_STATUS]: {
    throttlePeriod: 12 * j,
    throttleKeys: e => [e.os_enabled, e.notification_authorization_status, e.foreground_app_enabled, e.background_app_enabled]
  },
  [Chunk652215.HAw.SEARCH_BAR_VIEWED]: {
    throttlePeriod: j,
    throttleKeys: e => [e.search_type]
  },
  [Chunk652215.HAw.AD_IDENTIFIER_FETCHED]: {
    throttlePeriod: k,
    throttleKeys: () => []
  },
  [Chunk652215.HAw.ACTIVITY_PANEL_SDK_LINK_VIEWED]: {
    throttlePeriod: k,
    throttleKeys: e => [e.application_id]
  },
  [Chunk652215.HAw.LIBDISCORE_SLOW_TIMERS]: {
    throttlePeriod: j,
    throttleKeys: () => []
  },
  [Chunk652215.HAw.DEBUG_MISSING_STRING]: {
    throttlePeriod: j,
    throttleKeys: () => []
  },
  [Chunk652215.HAw.VIDEO_STREAM_ZOOM_CHANGED]: {
    throttlePeriod: R,
    throttleKeys: () => []
  },
  [Chunk652215.HAw.CACHE_STATS_RECORDED]: {
    throttlePeriod: M,
    throttleKeys: () => []
  }
};

function Y(e) {
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

function W(e) {
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
let K = () => E.O.NONE;

function z(e) {
  K = e
}
let q = (0, Chunk110259.trackMaker)({
  analyticEventConfigs: H,
  dispatcher: Chunk73153.h,
  TRACK_ACTION_NAME: "TRACK"
});

function Z(e) {
  return w = e
}

function Q(e) {
  var t, n, r, i;
  let a = null != e ? e : {};
  if (null != a.location) {
    let {
      location: e
    } = a;
    a = v({}, S(a, ["location"]), Y(e))
  }
  if (null != a.source) {
    let {
      source: e
    } = a;
    a = v({}, S(a, ["source"]), W(e))
  }
  a.client_performance_cpu = h.A.getCurrentCPUUsagePercent(), a.client_performance_memory = h.A.getCurrentMemoryUsageKB(), a.cpu_core_count = h.A.getCPUCoreCount(), a.accessibility_features = K(), a.rendered_locale = b.intl.currentLocale, a.uptime_app = Math.floor((performance.now() - G) / R);
  let o = h.A.getProcessUptime();
  null != o && (a.uptime_process_renderer = Math.floor(o));
  let {
    utmSource: s,
    utmMedium: l,
    utmCampaign: c,
    utmContent: u
  } = w;
  return a.utm_source = null != (t = a.utm_source) ? t : s, a.utm_medium = null != (n = a.utm_medium) ? n : l, a.utm_campaign = null != (r = a.utm_campaign) ? r : c, a.utm_content = null != (i = a.utm_content) ? i : u, a.launch_signature = V, F.forEach(e => e(a)), a
}

function X(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  p.default.isLoggingAnalyticsEvents && console.info("AnalyticsUtils.track(...):", e, t), n ? d.z8("Analytics", e, t) : d.z8("Analytics", e)
}
let J = false,
  $ = {};

function ee() {
  J = true
}

function et() {
  J = false
}

function en() {
  return $
}

function er() {
  Object.keys($).forEach(e => {
    delete $[e]
  })
}

function ei(e, t) {
  return !!J && (null != t && (Array.isArray($[e]) ? $[e].push(t) : $[e] = [t]), true)
}

function ea(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
    r = String(e);
  if (f.o.includes(r) || m.A.addBreadcrumb({
      category: "analytics",
      message: "".concat(r)
    }), ei(e, t), null != n.throttlePercent && Math.random() > n.throttlePercent) return Promise.resolve();
  let i = Q(t);
  return X(r, i, n.logEventProperties), q(e, i, {
    flush: n.flush,
    fingerprint: n.fingerprint
  })
}
let eo = (0, Chunk110259.trackMaker)({
  analyticEventConfigs: H,
  dispatcher: Chunk73153.h,
  TRACK_ACTION_NAME: "TRACK"
});

function es(e) {
  return e === y.S7.GAME || e === y.S7.DEPRECATED_GAME
}

function el(e, t) {
  let n = Q(v({
    location: (0, u.g$)()
  }, t));
  (0, u.eE)(e, v({
    type: "action"
  }, t)), X(e, n), eo(e, n)
}

function ec() {
  return (0, i.A)()
}
let eu = I(v({}, Chunk110259), {
  getCampaignParams: Chunk110259.getCampaignParams,
  setSystemAccessibilityFeatures: z,
  expandEventProperties: Q,
  track: ea
})