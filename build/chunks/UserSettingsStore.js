/** Chunk was on web.js **/
/** chunk id: 964404, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => C
});
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js");
require("./677313.js"), require("./743898.js");
var Chunk185928 = require("./185928.js"),
  Chunk652215 = require("./652215.js"),
  Chunk698279 = require("./698279.js"),
  Chunk815968 = require("./815968.js");

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
let h = (window.innerWidth - Chunk652215.MdR) / 2,
  m = "standard",
  g = null;

function E() {
  return null == g && (g = Math.max((window.innerWidth - u.MdR) * .4, u.da6)), g
}
let b = {};

function y(e) {
  b = _({}, b, e.settings)
}

function O() {
  b = {
    useSystemTheme: b.useSystemTheme,
    darkSidebar: b.darkSidebar
  }
}

function A() {
  null == b && (b = {})
}

function v() {}

function S() {
  return b.darkSidebar = !b.darkSidebar, true
}

function I() {
  var e;
  let t = s.Ay.PersistedStore.migrateAndReadStoreState("AccessibilityStore", []).state;
  return null != (e = null == t ? true : t.darkSidebar) && e
}
class T extends(r = Chunk311907.Ay.DeviceSettingsStore) {
  initialize(e) {
    var t, n;
    (b = null != e ? e : {}).darkSidebar = null != (t = b.darkSidebar) ? t : I(), b.hdrDynamicRange = null != (n = b.hdrDynamicRange) ? n : "no-limit"
  }
  getUserAgnosticState() {
    return b
  }
  get displayCompactAvatars() {
    var e;
    return null != (e = b.displayCompactAvatars) && e
  }
  get lowQualityImageMode() {
    var e;
    return null != (e = b.lowQualityImageMode) && e
  }
  get videoUploadQuality() {
    var e;
    return null != (e = b.videoUploadQuality) ? e : m
  }
  get dataSavingMode() {
    var e, t;
    return null != (e = null != (t = b.dataSavingMode) ? t : b.lowQualityImageMode) && e
  }
  get expressionPickerWidth() {
    var e;
    return null != (e = b.expressionPickerWidth) ? e : d.wp.MIN
  }
  get messageRequestSidebarWidth() {
    var e;
    return null != (e = b.messageRequestSidebarWidth) ? e : u.ItT
  }
  get threadSidebarWidth() {
    var e;
    return null != (e = b.threadSidebarWidth) ? e : u.da6
  }
  get postSidebarWidth() {
    var e;
    return null != (e = b.postSidebarWidth) ? e : h
  }
  get callChatSidebarWidth() {
    var e;
    return null != (e = b.callChatSidebarWidth) ? e : u.da6
  }
  get homeSidebarWidth() {
    var e;
    return null != (e = b.homeSidebarWidth) ? e : E()
  }
  get callParticipantsSidebarWidth() {
    var e;
    return null != (e = b.callParticipantsSidebarWidth) ? e : 360
  }
  get callHeaderHeight() {
    return b.callHeaderHeight
  }
  get useSystemTheme() {
    var e;
    return null != (e = b.useSystemTheme) ? e : c.Q_.UNSET
  }
  get activityPanelHeight() {
    return b.activityPanelHeight
  }
  get disableVoiceChannelChangeAlert() {
    var e;
    return null != (e = b.disableVoiceChannelChangeAlert) && e
  }
  get disableEmbeddedActivityPopOutAlert() {
    var e;
    return null != (e = b.disableEmbeddedActivityPopOutAlert) && e
  }
  get disableActivityHardwareAccelerationPrompt() {
    var e;
    return null != (e = b.disableActivityHardwareAccelerationPrompt) && e
  }
  get disableInviteWithTextChannelActivityLaunch() {
    var e;
    return null != (e = b.disableInviteWithTextChannelActivityLaunch) && e
  }
  get disableHideSelfStreamAndVideoConfirmationAlert() {
    var e;
    return null != (e = b.disableHideSelfStreamAndVideoConfirmationAlert) && e
  }
  get pushUpsellUserSettingsDismissed() {
    var e;
    return null != (e = b.pushUpsellDismissed) && e
  }
  get disableActivityHostLeftNitroUpsell() {
    var e;
    return null != (e = b.disableActivityHostLeftNitroUpsell) && e
  }
  get disableCallUserConfirmationPrompt() {
    var e;
    return null != (e = b.disableCallUserConfirmationPrompt) && e
  }
  get disableApplicationSubscriptionCancellationSurvey() {
    var e;
    return null != (e = b.disableApplicationSubscriptionCancellationSurvey) && e
  }
  get darkSidebar() {
    var e;
    return null != (e = b.darkSidebar) && e
  }
  get saveCameraUploadsToDevice() {
    var e;
    return null == (e = b.saveCameraUploadsToDevice) || e
  }
  isVisualRefreshDisabled(e) {
    var t;
    return null != (t = b.disableVisualRefresh) ? t : e
  }
  get listDensity() {
    var e;
    return null != (e = b.listDensity) ? e : f.YP.COZY
  }
  get hdrDynamicRange() {
    var e;
    return null != (e = b.hdrDynamicRange) ? e : "no-limit"
  }
}
p(T, "displayName", "UnsyncedUserSettingsStore"), p(T, "persistKey", "UnsyncedUserSettingsStore"), p(T, "migrations", [() => {
  let e = o.w.get("UserSettingsStore");
  return o.w.remove("UserSettingsStore"), a().pick(e, "dataSavingMode", "videoUploadQuality", "lowQualityImageMode", "useSystemTheme", "expressionPickerWidth", "disableVoiceChannelChangeAlert", "disableHideSelfStreamAndVideoConfirmationAlert", "pushUpsellDismissed", "disableEmbeddedActivityPopOutAlert", "disableActivityHardwareAccelerationPrompt", "disableInviteWithTextChannelActivityLaunch", "disableActivityHostLeftNitroUpsell", "disableCallUserConfirmationPrompt", "disableApplicationSubscriptionCancellationSurvey", "enableAndroidChatListAnimations")
}, e => {
  delete e.disableVisualRefresh
}]);
let C = new T(Chunk73153.h, {
  UNSYNCED_USER_SETTINGS_UPDATE: y,
  LOGOUT: O,
  LOGIN_SUCCESS: A,
  REGISTER_SUCCESS: v,
  ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: S
})