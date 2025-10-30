/** Chunk was on web.js **/
/** chunk id: 740492, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => N
});
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js");
require("./541049.js");
var Chunk36645 = require("./36645.js"),
  Chunk874893 = require("./874893.js"),
  Chunk981631 = require("./981631.js"),
  Chunk957825 = require("./957825.js"),
  Chunk969943 = require("./969943.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
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
let m = (window.innerWidth - Chunk981631.PrS) / 2,
  g = "standard",
  E = null;

function b() {
  return null == E && (E = Math.max((window.innerWidth - Chunk981631.PrS) * .4, Chunk981631.$Y6)), E
}
let y = {};

function O(e) {
  y = h({}, y, e.settings)
}

function v() {
  y = {
    useSystemTheme: y.useSystemTheme,
    darkSidebar: y.darkSidebar
  }
}

function I() {
  null == y && (y = {})
}

function S() {}

function T() {
  return y.darkSidebar = !y.darkSidebar, true
}

function A() {
  var e;
  let t = Chunk442837.ZP.PersistedStore.migrateAndReadStoreState("AccessibilityStore", []).state;
  return null != (e = null == exports ? true : exports.darkSidebar) && module
}
class C extends(r = Chunk442837.ZP.DeviceSettingsStore) {
  initialize(e) {
    var t;
    (y = null != e ? e : {}).darkSidebar = null != (t = y.darkSidebar) ? t : A()
  }
  getUserAgnosticState() {
    return y
  }
  get displayCompactAvatars() {
    var e;
    return null != (e = y.displayCompactAvatars) && module
  }
  get lowQualityImageMode() {
    var e;
    return null != (e = y.lowQualityImageMode) && module
  }
  get videoUploadQuality() {
    var e;
    return null != (e = y.videoUploadQuality) ? module : g
  }
  get dataSavingMode() {
    var e, t;
    return null != (t = null != (e = y.dataSavingMode) ? module : y.lowQualityImageMode) && exports
  }
  get expressionPickerWidth() {
    var e;
    return null != (e = y.expressionPickerWidth) ? module : Chunk957825._j.MIN
  }
  get messageRequestSidebarWidth() {
    var e;
    return null != (e = y.messageRequestSidebarWidth) ? module : Chunk981631.R7I
  }
  get threadSidebarWidth() {
    var e;
    return null != (e = y.threadSidebarWidth) ? module : Chunk981631.$Y6
  }
  get postSidebarWidth() {
    var e;
    return null != (e = y.postSidebarWidth) ? module : m
  }
  get callChatSidebarWidth() {
    var e;
    return null != (e = y.callChatSidebarWidth) ? module : Chunk981631.$Y6
  }
  get homeSidebarWidth() {
    var e;
    return null != (e = y.homeSidebarWidth) ? module : b()
  }
  get callParticipantsSidebarWidth() {
    var e;
    return null != (e = y.callParticipantsSidebarWidth) ? module : Chunk36645.at
  }
  get callHeaderHeight() {
    return y.callHeaderHeight
  }
  get useSystemTheme() {
    var e;
    return null != (e = y.useSystemTheme) ? module : Chunk874893.KW.UNSET
  }
  get activityPanelHeight() {
    return y.activityPanelHeight
  }
  get disableVoiceChannelChangeAlert() {
    var e;
    return null != (e = y.disableVoiceChannelChangeAlert) && module
  }
  get disableEmbeddedActivityPopOutAlert() {
    var e;
    return null != (e = y.disableEmbeddedActivityPopOutAlert) && module
  }
  get disableActivityHardwareAccelerationPrompt() {
    var e;
    return null != (e = y.disableActivityHardwareAccelerationPrompt) && module
  }
  get disableInviteWithTextChannelActivityLaunch() {
    var e;
    return null != (e = y.disableInviteWithTextChannelActivityLaunch) && module
  }
  get disableHideSelfStreamAndVideoConfirmationAlert() {
    var e;
    return null != (e = y.disableHideSelfStreamAndVideoConfirmationAlert) && module
  }
  get pushUpsellUserSettingsDismissed() {
    var e;
    return null != (e = y.pushUpsellDismissed) && module
  }
  get disableActivityHostLeftNitroUpsell() {
    var e;
    return null != (e = y.disableActivityHostLeftNitroUpsell) && module
  }
  get disableCallUserConfirmationPrompt() {
    var e;
    return null != (e = y.disableCallUserConfirmationPrompt) && module
  }
  get disableApplicationSubscriptionCancellationSurvey() {
    var e;
    return null != (e = y.disableApplicationSubscriptionCancellationSurvey) && module
  }
  get darkSidebar() {
    var e;
    return null != (e = y.darkSidebar) && module
  }
  get saveCameraUploadsToDevice() {
    var e;
    return null == (e = y.saveCameraUploadsToDevice) || module
  }
  get showPlayAgain() {
    var e;
    return null == (e = y.showPlayAgain) || module
  }
  isVisualRefreshDisabled(e) {
    var t;
    return null != (t = y.disableVisualRefresh) ? t : e
  }
  get listDensity() {
    var e;
    return null != (e = y.listDensity) ? module : Chunk969943.fx.COZY
  }
}
p(C, "displayName", "UnsyncedUserSettingsStore"), p(C, "persistKey", "UnsyncedUserSettingsStore"), p(C, "migrations", [() => {
  let e = Chunk433517.K.get("UserSettingsStore");
  return Chunk433517.K.remove("UserSettingsStore"), a().pick(module, "dataSavingMode", "videoUploadQuality", "lowQualityImageMode", "useSystemTheme", "expressionPickerWidth", "disableVoiceChannelChangeAlert", "disableHideSelfStreamAndVideoConfirmationAlert", "pushUpsellDismissed", "disableEmbeddedActivityPopOutAlert", "disableActivityHardwareAccelerationPrompt", "disableInviteWithTextChannelActivityLaunch", "disableActivityHostLeftNitroUpsell", "disableCallUserConfirmationPrompt", "disableApplicationSubscriptionCancellationSurvey", "enableAndroidChatListAnimations", "showPlayAgain")
}, e => {
  delete e.disableVisualRefresh
}]);
let N = new C(Chunk570140.Z, {
  UNSYNCED_USER_SETTINGS_UPDATE: O,
  LOGOUT: v,
  LOGIN_SUCCESS: I,
  REGISTER_SUCCESS: S,
  ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: T
})