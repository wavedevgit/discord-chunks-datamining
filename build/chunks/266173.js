/** Chunk was on web.js **/
/** chunk id: 266173, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk579092 = require("./579092.js"),
  Chunk433517 = require("./433517.js"),
  Chunk765250 = require("./765250.js"),
  Chunk13245 = require("./13245.js"),
  Chunk147913 = require("./147913.js"),
  Chunk355863 = require("./355863.js"),
  Chunk145597 = require("./145597.js"),
  Chunk486016 = require("./486016.js"),
  Chunk32300 = require("./32300.js"),
  Chunk624864 = require("./624864.js"),
  Chunk757744 = require("./757744.js"),
  Chunk981631 = require("./981631.js");

function m(e, t, n) {
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
      m(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = "overlay-negative-experiment-notification-settings",
  y = "overlay-negative-experiment-widget-settings",
  O = false,
  v = false,
  S = true,
  I = new Chunk579092.Yd("OverlayNegativeWidgetExperimentManager");

function T(e) {
  switch (e) {
    case _.Odu.VOICE:
    case _.Odu.TEXT:
    case _.Odu.GUILDS:
    case _.Odu.GUILDS_TEXT:
    case _.Odu.QUICK_ACTIONS:
      return c.OVERLAY_LAYOUT_ID;
    default:
      return p.$S
  }
}
let C = {
  [Chunk981631.Odu.VIDEO]: true,
  [Chunk981631.Odu.VOICE]: true,
  [Chunk981631.Odu.VOICE_V3]: true
};

function A(e) {
  let [t] = l.Z.getWidgetsByTypeAndLayout(e, T(e));
  if (null != t || ([t] = l.Z.getWidgetsByType(e), null != t)) return t;
  for (let t of Object.values(l.Z.getAllWidgets()))
    if (t.type === e) return t
}
class N {
  constructor() {
    m(this, "_widgetSettings", true), m(this, "_notificationSettings", true), m(this, "setWidgetSetting", (e, t) => {
      var n;
      this._widgetSettings[e] = h({}, null != (n = this._widgetSettings[e]) ? n : {}, t), __OVERLAY__ || i.K.set(y, this._widgetSettings)
    }), m(this, "getWidgetSetting", e => this._widgetSettings[e]), m(this, "hasWidgetSetting", e => null != this._widgetSettings[e]), m(this, "setNotificationSetting", (e, t) => {
      var n;
      this._notificationSettings[e] = h({}, null != (n = this._notificationSettings[e]) ? n : {}, t), __OVERLAY__ || i.K.set(b, this._notificationSettings)
    }), m(this, "hasNotificationSetting", e => null != this._notificationSettings[e]), m(this, "getNotificationSetting", e => this._notificationSettings[e]), this._widgetSettings = i.K.get(y, {}), this._notificationSettings = i.K.get(b, {}), __OVERLAY__ && (this._widgetSettings = {}, this._notificationSettings = {})
  }
}
class P {
  constructor() {
    m(this, "_defaultWidgetPinned", {}), m(this, "initializeAllDefaultWidgetConfigs", () => {
      for (let e of Object.keys(_.Odu)) {
        let t = e,
          n = l.Z.getWidgetConfig(t);
        null != n && null == this._defaultWidgetPinned[t] && (this._defaultWidgetPinned[t] = n.defaultSettings.pinned)
      }
    }), m(this, "overrideDefaultWidgetPinned", async (e, t) => {
      if (__OVERLAY__) return;
      let n = l.Z.getWidgetConfig(e);
      null != n && (null == this._defaultWidgetPinned[e] && (this._defaultWidgetPinned[e] = n.defaultSettings.pinned), await (0, a.K4)(e, {
        defaultSettings: E(h({}, n.defaultSettings), {
          pinned: t
        })
      }))
    }), m(this, "restoreDefaultWidgetPinned", async e => {
      if (__OVERLAY__) return;
      let t = l.Z.getWidgetConfig(e);
      if (null == t || null == this._defaultWidgetPinned[e]) return;
      let n = this._defaultWidgetPinned[e];
      await (0, a.K4)(e, {
        defaultSettings: E(h({}, t.defaultSettings), {
          pinned: n
        })
      })
    }), m(this, "getDefaultWidgetPinned", e => {
      let t = this._defaultWidgetPinned[e];
      return null != t ? t : e in C && C[e]
    })
  }
}
class R {
  constructor() {
    m(this, "_storage", new N), m(this, "_config", new P), m(this, "updateWidgetPinned", (e, t) => {
      this._storage.setWidgetSetting(e, {
        pinned: t
      })
    }), m(this, "hasWidgetSetting", e => this._storage.hasWidgetSetting(e)), m(this, "initializeWidget", e => {
      let t = A(e);
      if (null == t || this.hasWidgetSetting(e)) return;
      let n = t.pinned;
      this.updateWidgetPinned(e, n)
    }), m(this, "unpinWidget", async e => {
      let t = A(e);
      null != t && (this.initializeWidget(e), __OVERLAY__ || await this._config.overrideDefaultWidgetPinned(e, O), await (0, a.xh)(t.id, {
        forcedPinnedState: O,
        shouldTrack: v
      }))
    }), m(this, "restoreWidget", async e => {
      var t;
      let n = this._storage.getWidgetSetting(e),
        r = this._config.getDefaultWidgetPinned(e),
        i = null != (t = null == n ? true : n.pinned) ? t : r,
        o = A(e);
      null != o && (e === _.Odu.VOICE && (i = true), __OVERLAY__ || await this._config.restoreDefaultWidgetPinned(e), null != i && await (0, a.xh)(o.id, {
        forcedPinnedState: i,
        shouldTrack: v
      }))
    }), m(this, "updateNotificationSetting", (e, t) => {
      this._storage.setNotificationSetting(e, {
        disabled: t
      })
    }), m(this, "hasNotificationSetting", e => this._storage.hasNotificationSetting(e)), m(this, "initializeNotification", e => {
      if (this.hasNotificationSetting(e)) return;
      let t = f.Z.isNotificationDisabledBySetting(e);
      this.updateNotificationSetting(e, t)
    }), m(this, "disableNotification", async e => {
      this.initializeNotification(e), await o.Z.setNotificationDisabledSetting(e, S, v)
    }), m(this, "restoreNotification", async e => {
      var t;
      let n = this._storage.getNotificationSetting(e),
        r = null != (t = null == n ? true : n.disabled) && t;
      null != r && await o.Z.setNotificationDisabledSetting(e, r, v)
    }), this._config.initializeAllDefaultWidgetConfigs()
  }
}

function w() {
  return Object.values(u.i)
}
let D = new Set([Chunk486016.i.WELCOME_GENERAL, Chunk486016.i.GO_LIVE_NUDGE, Chunk486016.i.GAME_ACTIVITY]),
  x = "overlay-negative-widget-experiment-bucket";
class L extends Chunk147913.Z {
  constructor() {
    var e, t;
    super(), e = this, m(this, "_settings", new R), m(this, "_hasInitialized", false), m(this, "_isProcessing", false), m(this, "_appliedExperimentBucket", "control"), m(this, "setAppliedExperimentBucket", e => {
      this._appliedExperimentBucket = e, i.K.set(x, e)
    }), m(this, "getRawAppliedExperimentBucket", () => (0, d.hb)("applied-experiment-bucket")), m(this, "getWidgetExperimentSettings", e => {
      let {
        voiceWidgetDefaultUnpinned: t,
        videoWidgetDefaultUnpinned: n,
        unlockedOnlyDefaultOverlay: r
      } = (0, d.Sy)("".concat(__OVERLAY__ ? "LegacyOverlay" : "MainApp", "_ExperimentManager_WidgetSettings"), e), i = new Set, a = new Set, o = t || r, s = n || r;
      return o ? (i.add(_.Odu.VOICE_V3), i.add(_.Odu.VOICE)) : (a.add(_.Odu.VOICE_V3), a.add(_.Odu.VOICE)), s ? i.add(_.Odu.VIDEO) : a.add(_.Odu.VIDEO), {
        widgetsToOverride: i,
        widgetsToRestore: a
      }
    }), m(this, "processWidgetExperiment", async function() {
      let t = arguments.length > 0 && true !== arguments[0] && arguments[0],
        {
          widgetsToOverride: n,
          widgetsToRestore: r
        } = e.getWidgetExperimentSettings(t);
      for (let t of Object.values(_.Odu)) e._settings.initializeWidget(t);
      for (let t of r) await e._settings.restoreWidget(t);
      for (let t of n) await e._settings.unpinWidget(t);
      n.size > 0 && I.info("Experiment Override: Widgets", {
        widgetsToRestore: r,
        widgetsToOverride: n
      })
    }), m(this, "getNotificationExperimentSettings", e => {
      let {
        notificationsDefaultOff: t,
        disableWelcomeNotification: n,
        unlockedOnlyDefaultOverlay: r
      } = (0, d.Sy)("".concat(__OVERLAY__ ? "LegacyOverlay" : "MainApp", "_ExperimentManager_NotificationSettings"), e), i = new Set, a = new Set;
      for (let e of w()) r ? i.add(e) : n ? D.has(e) ? i.add(e) : a.add(e) : t && e !== u.i.WELCOME_GENERAL ? i.add(e) : a.add(e);
      return {
        notificationsToOverride: i,
        notificationsToRestore: a
      }
    }), m(this, "processNotificationExperiment", async e => {
      if (__OVERLAY__) return;
      let {
        notificationsToOverride: t,
        notificationsToRestore: n
      } = this.getNotificationExperimentSettings(e);
      for (let e of w()) this._settings.initializeNotification(e);
      for (let e of n) await this._settings.restoreNotification(e);
      for (let e of t) await this._settings.disableNotification(e);
      t.size > 0 && I.info("Experiment Override: Notifications", {
        notificationsToRestore: n,
        notificationsToOverride: t
      })
    }), m(this, "processAllExperiments", async e => {
      if (this._isProcessing) return;
      let t = this.getRawAppliedExperimentBucket();
      if (this._appliedExperimentBucket !== t) {
        this._isProcessing = true;
        try {
          await this.processWidgetExperiment(e), await this.processNotificationExperiment(e)
        } catch (e) {
          I.error("Experiments processing failed", {
            error: e
          })
        } finally {
          this._isProcessing = false, this.setAppliedExperimentBucket(t)
        }
      }
    }), m(this, "handlePostConnectionOpen", async () => {
      __OVERLAY__ || this._isProcessing || this._hasInitialized || (this._hasInitialized = true, await this.processAllExperiments(false))
    }), m(this, "handleExperimentOverrideBucket", async () => {
      this._isProcessing || await this.processAllExperiments(false)
    }), m(this, "handleSetNotificationDisabledSetting", e => {
      let {
        setting: t,
        disabled: n
      } = e;
      !this._isProcessing && (__OVERLAY__ || this._settings.updateNotificationSetting(t, n))
    }), m(this, "handleSetPinned", e => {
      let {
        widgetId: t,
        pinned: n
      } = e;
      if (this._isProcessing || null != n) return;
      let r = l.Z.getWidget(t);
      if (null == r) return;
      let i = r.pinned;
      this._settings.updateWidgetPinned(r.type, i)
    }), m(this, "actions", {
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      EXPERIMENT_OVERRIDE_BUCKET: this.handleExperimentOverrideBucket,
      OVERLAY_SET_NOTIFICATION_DISABLED_SETTING: this.handleSetNotificationDisabledSetting,
      LAYOUT_SET_PINNED: this.handleSetPinned
    }), this._appliedExperimentBucket = null != (t = i.K.get(x)) ? t : "control"
  }
}
let j = new L