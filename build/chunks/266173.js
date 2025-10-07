/** Chunk was on web.js **/
/** chunk id: 266173, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
}), require("./388685.js"), require("./49124.js");
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

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
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
  I = true,
  T = new Chunk579092.Yd("OverlayNegativeWidgetExperimentManager");

function S(e) {
  switch (e) {
    case p.Odu.VOICE:
    case p.Odu.TEXT:
    case p.Odu.GUILDS:
    case p.Odu.GUILDS_TEXT:
    case p.Odu.QUICK_ACTIONS:
      return c.OVERLAY_LAYOUT_ID;
    default:
      return _.$S
  }
}

function A(e) {
  let t = l.Z.getWidgetsByTypeAndLayout(e, S(e));
  if (0 !== t.length) return t[0]
}
class C {
  constructor() {
    h(this, "_widgetSettings", true), h(this, "_notificationSettings", true), h(this, "setWidgetSetting", (e, t) => {
      var n;
      this._widgetSettings[e] = m({}, null != (n = this._widgetSettings[e]) ? n : {}, t), i.K.set(y, this._widgetSettings)
    }), h(this, "getWidgetSetting", e => this._widgetSettings[e]), h(this, "hasWidgetSetting", e => null != this._widgetSettings[e]), h(this, "setNotificationSetting", (e, t) => {
      var n;
      this._notificationSettings[e] = m({}, null != (n = this._notificationSettings[e]) ? n : {}, t), i.K.set(b, this._notificationSettings)
    }), h(this, "hasNotificationSetting", e => null != this._notificationSettings[e]), h(this, "getNotificationSetting", e => this._notificationSettings[e]), this._widgetSettings = Chunk433517.K.get(y, {}), this._notificationSettings = Chunk433517.K.get(b, {})
  }
}
class N {
  constructor() {
    h(this, "_defaultWidgetPinned", {}), h(this, "initializeAllDefaultWidgetConfigs", () => {
      if (!__OVERLAY__) {
        for (let e of Object.keys(Chunk981631.Odu)) {
          if (S(module) === Chunk145597.OVERLAY_LAYOUT_ID) continue;
          let t = module,
            n = Chunk355863.Z.getWidgetConfig(exports);
          null != require && null == this._defaultWidgetPinned[exports] && (this._defaultWidgetPinned[exports] = require.defaultSettings.pinned)
        }
        T.info("Initialized all default widget configs", {
          defaultWidgetConfigs: this._defaultWidgetPinned
        })
      }
    }), h(this, "overrideDefaultWidgetPinned", async (e, t) => {
      let n = l.Z.getWidgetConfig(e);
      null != n && (null == this._defaultWidgetPinned[e] && (this._defaultWidgetPinned[e] = n.defaultSettings.pinned), await (0, a.K4)(e, {
        defaultSettings: E(m({}, n.defaultSettings), {
          pinned: t
        })
      }))
    }), h(this, "restoreDefaultWidgetPinned", async e => {
      let t = l.Z.getWidgetConfig(e);
      if (null == t || null == this._defaultWidgetPinned[e]) return;
      let n = this._defaultWidgetPinned[e];
      await (0, a.K4)(e, {
        defaultSettings: E(m({}, t.defaultSettings), {
          pinned: n
        })
      })
    }), h(this, "getWidgetPinned", e => {
      var t;
      return null != (t = this._defaultWidgetPinned[e]) && t
    })
  }
}
class R {
  constructor() {
    if (h(this, "_storage", new C), h(this, "_config", new N), h(this, "updateWidgetPinned", (e, t) => {
        this._storage.setWidgetSetting(e, {
          pinned: t
        })
      }), h(this, "hasWidgetSetting", e => this._storage.hasWidgetSetting(e)), h(this, "initializeWidget", e => {
        let t = A(e);
        if (null == t || this.hasWidgetSetting(e)) return;
        let n = t.pinned;
        this.updateWidgetPinned(e, n)
      }), h(this, "unpinWidget", async e => {
        let t = A(e);
        if (null == t) return;
        let n = t.pinned;
        await this._config.overrideDefaultWidgetPinned(e, O), await (0, a.xh)(t.id, {
          forcedPinnedState: O,
          shouldTrack: v
        }), this.hasWidgetSetting(e) || this.updateWidgetPinned(e, n)
      }), h(this, "restoreWidget", async e => {
        var t;
        let n = this._storage.getWidgetSetting(e),
          r = this._config.getWidgetPinned(e),
          i = null != (t = null == n ? true : n.pinned) ? t : r,
          o = A(e);
        null != o && (await this._config.restoreDefaultWidgetPinned(e), null != i && (await (0, a.xh)(o.id, {
          forcedPinnedState: i,
          shouldTrack: v
        }), this.updateWidgetPinned(e, i)))
      }), h(this, "updateNotificationSetting", (e, t) => {
        this._storage.setNotificationSetting(e, {
          disabled: t
        })
      }), h(this, "hasNotificationSetting", e => this._storage.hasNotificationSetting(e)), h(this, "initializeNotification", e => {
        if (this.hasNotificationSetting(e)) return;
        let t = f.Z.isNotificationDisabledBySetting(e);
        this.updateNotificationSetting(e, t)
      }), h(this, "disableNotification", async e => {
        this.initializeNotification(e), await o.Z.setNotificationDisabledSetting(e, I, v)
      }), h(this, "restoreNotification", async e => {
        var t;
        let n = this._storage.getNotificationSetting(e),
          r = null != (t = null == n ? true : n.disabled) && t;
        null != r && await o.Z.setNotificationDisabledSetting(e, r, v)
      }), __OVERLAY__) return;
    this._config.initializeAllDefaultWidgetConfigs()
  }
}

function P() {
  return Object.values(Chunk486016.i)
}
let w = new Set([Chunk486016.i.WELCOME_GENERAL, Chunk486016.i.GO_LIVE_NUDGE, Chunk486016.i.GAME_ACTIVITY]);
class D extends Chunk147913.Z {
  constructor(...e) {
    super(...e), h(this, "_settings", new R), h(this, "_hasInitialized", false), h(this, "_hasInitializedLegacyOverlay", false), h(this, "_isProcessing", false), h(this, "getWidgetExperimentSettings", () => {
      let {
        voiceWidgetDefaultUnpinned: e,
        videoWidgetDefaultUnpinned: t,
        unlockedOnlyDefaultOverlay: n
      } = (0, d.Sy)("OverlayNegativeWidgetExperimentManager"), r = new Set, i = new Set, a = e || n, o = t || n;
      return a ? r.add(p.Odu.VOICE_V3) : i.add(p.Odu.VOICE_V3), o ? r.add(p.Odu.VIDEO) : i.add(p.Odu.VIDEO), {
        widgetsToOverride: r,
        widgetsToRestore: i
      }
    }), h(this, "processWidgetExperiment", async () => {
      let {
        widgetsToOverride: e,
        widgetsToRestore: t
      } = this.getWidgetExperimentSettings();
      for (let e of Object.values(p.Odu)) this._settings.initializeWidget(e);
      for (let e of t) await this._settings.restoreWidget(e);
      for (let t of e) await this._settings.unpinWidget(t);
      T.info("Widget experiment settings: ".concat(JSON.stringify({
        widgetsToOverride: e,
        widgetsToRestore: t
      })))
    }), h(this, "getNotificationExperimentSettings", () => {
      let {
        notificationsDefaultOff: e,
        disableWelcomeNotification: t,
        unlockedOnlyDefaultOverlay: n
      } = (0, d.Sy)("OverlayNegativeWidgetExperimentManager"), r = new Set, i = new Set;
      for (let a of P()) n ? r.add(a) : t ? w.has(a) ? r.add(a) : i.add(a) : e && a !== u.i.WELCOME_GENERAL ? r.add(a) : i.add(a);
      return {
        notificationsToOverride: r,
        notificationsToRestore: i
      }
    }), h(this, "processNotificationExperiment", async () => {
      let {
        notificationsToOverride: e,
        notificationsToRestore: t
      } = this.getNotificationExperimentSettings();
      for (let e of P()) this._settings.initializeNotification(e);
      for (let e of t) await this._settings.restoreNotification(e);
      for (let t of e) await this._settings.disableNotification(t);
      T.info("Notification experiment settings: ".concat(JSON.stringify({
        notificationsToOverride: e,
        notificationsToRestore: t
      })))
    }), h(this, "processAllExperiments", async () => {
      if (!this._isProcessing) {
        this._isProcessing = true;
        try {
          await this.processWidgetExperiment(), await this.processNotificationExperiment()
        } catch (e) {
          T.error("Experiments processing failed", {
            error: e
          })
        } finally {
          this._isProcessing = false
        }
      }
    }), h(this, "handlePostConnectionOpen", async () => {
      !this._isProcessing && (this._hasInitialized || (this._hasInitialized = true, T.info("Experiments initializing... (".concat(location, ")")), await this.processAllExperiments(), T.info("Experiments initialized (".concat(location, ")"))))
    }), h(this, "handleOverlayInitialized", async () => {
      !this._isProcessing && (this._hasInitializedLegacyOverlay || (this._hasInitializedLegacyOverlay = true, T.info("Experiments initializing... (".concat(location, ")")), await this.processAllExperiments(), T.info("Experiments initialized (".concat(location, ")"))))
    }), h(this, "handleExperimentOverrideBucket", async e => {
      this._isProcessing || (T.info("Experiments processing...", {
        action: e
      }), await this.processAllExperiments())
    }), h(this, "handleSetNotificationDisabledSetting", e => {
      let {
        setting: t,
        disabled: n
      } = e;
      this._isProcessing || (T.info("Setting notification disabled setting...", {
        setting: t,
        disabled: n
      }), this._settings.updateNotificationSetting(t, n))
    }), h(this, "handleSetPinned", e => {
      let {
        widgetId: t,
        pinned: n
      } = e;
      if (this._isProcessing || null != n) return;
      let r = l.Z.getWidget(t);
      if (null == r) return;
      let i = r.pinned;
      T.info("Setting widget pinned...", {
        widgetId: t,
        pinned: i
      }), this._settings.updateWidgetPinned(r.type, i)
    }), h(this, "actions", __OVERLAY__ ? {} : {
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      OVERLAY_INITIALIZE: this.handlePostConnectionOpen,
      EXPERIMENT_OVERRIDE_BUCKET: this.handleExperimentOverrideBucket,
      OVERLAY_SET_NOTIFICATION_DISABLED_SETTING: this.handleSetNotificationDisabledSetting,
      LAYOUT_SET_PINNED: this.handleSetPinned
    })
  }
}
let L = new D