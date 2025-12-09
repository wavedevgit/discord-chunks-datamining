/** Chunk was on web.js **/
/** chunk id: 645644, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => er
}), require("./388685.js"), require("./415506.js"), require("./642613.js");
var Chunk772848 = require("./772848.js"),
  Chunk379649 = require("./379649.js"),
  Chunk570140 = require("./570140.js"),
  Chunk593472 = require("./593472.js"),
  Chunk147913 = require("./147913.js"),
  Chunk579806 = require("./579806.js"),
  Chunk710845 = require("./710845.js"),
  Chunk581567 = require("./581567.js"),
  Chunk594190 = require("./594190.js"),
  Chunk837268 = require("./837268.js"),
  Chunk371651 = require("./371651.js"),
  Chunk624864 = require("./624864.js"),
  Chunk449224 = require("./449224.js"),
  Chunk808506 = require("./808506.js"),
  Chunk237997 = require("./237997.js"),
  Chunk626135 = require("./626135.js"),
  Chunk998502 = require("./998502.js"),
  Chunk145597 = require("./145597.js"),
  Chunk830917 = require("./830917.js"),
  Chunk554174 = require("./554174.js"),
  Chunk938038 = require("./938038.js"),
  Chunk981631 = require("./981631.js"),
  Chunk987650 = require("./987650.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let R = 7,
  D = false,
  w = new Chunk710845.Z("OverlayUsageStatsManager");
D || (w.verbose = () => {});
class x {
  increment(e) {
    ++this.actions[e]
  }
  getAnalytics(e, t) {
    let n = this.actions[T.bv.Viewed],
      r = this.actions[T.bv.Clicked];
    return 0 === n && 0 === r ? null : {
      event_uuid: t,
      notification_type: e,
      viewed_count: n,
      clicked_count: r
    }
  }
  constructor() {
    A(this, "actions", {
      [Chunk987650.bv.Viewed]: 0,
      [Chunk987650.bv.Clicked]: 0
    })
  }
}
class L {
  static makeEmptyGroupAnalytics() {
    return {
      [Chunk987650.Vk.Nudge]: 0,
      [Chunk987650.Vk.TextChat]: 0,
      [Chunk987650.Vk.VoiceCall]: 0,
      [Chunk987650.Vk.Activity]: 0,
      [Chunk987650.Vk.Clips]: 0,
      [Chunk987650.Vk.Other]: 0
    }
  }
  static makeCounters() {
    let e = {},
      t = Object.values(Chunk987650.n0);
    for (let n of exports) module[require] = new x;
    if (Object.keys(module).length !== exports.length) throw Error("NotificationAnalytics: Failed to make counters");
    return module
  }
  increment(e, t) {
    let n = this.groupCounters[t];
    if (null == n) return void w.error("NotificationCounter: Unknown notification action: ".concat(t));
    let r = (0, T.YK)(e);
    if (!(r in n)) return void w.error("NotificationCounter: Unknown notification action: ".concat(e));
    ++n[r], ++this.actionCounters[t];
    let i = this.counters[e];
    if (null == i) return void w.error("NotificationCounter: Unknown notification type: ".concat(e));
    i.increment(t)
  }
  getAnalytics() {
    let e = this.groupCounters[Chunk987650.bv.Viewed],
      t = this.groupCounters[Chunk987650.bv.Clicked];
    return {
      notices_viewed: this.actionCounters[Chunk987650.bv.Viewed],
      notices_clicked: this.actionCounters[Chunk987650.bv.Clicked],
      notice_nudge_viewed: module[Chunk987650.Vk.Nudge],
      notice_text_chat_viewed: module[Chunk987650.Vk.TextChat],
      notice_voice_call_viewed: module[Chunk987650.Vk.VoiceCall],
      notice_activity_viewed: module[Chunk987650.Vk.Activity],
      notice_clips_viewed: module[Chunk987650.Vk.Clips],
      notice_other_viewed: module[Chunk987650.Vk.Other],
      notice_nudge_clicked: exports[Chunk987650.Vk.Nudge],
      notice_text_chat_clicked: exports[Chunk987650.Vk.TextChat],
      notice_voice_call_clicked: exports[Chunk987650.Vk.VoiceCall],
      notice_activity_clicked: exports[Chunk987650.Vk.Activity],
      notice_clips_clicked: exports[Chunk987650.Vk.Clips],
      notice_other_clicked: exports[Chunk987650.Vk.Other]
    }
  }
  getCounterAnalytics(e) {
    return Object.entries(this.counters).map(t => {
      let [n, r] = t;
      return r.getAnalytics(n, e)
    }).filter(e => null != e)
  }
  constructor() {
    A(this, "actionCounters", {
      [Chunk987650.bv.Viewed]: 0,
      [Chunk987650.bv.Clicked]: 0
    }), A(this, "groupCounters", {
      [Chunk987650.bv.Viewed]: L.makeEmptyGroupAnalytics(),
      [Chunk987650.bv.Clicked]: L.makeEmptyGroupAnalytics()
    }), A(this, "counters", L.makeCounters())
  }
}
class j {
  static makeEmptyAnalytics() {
    return {
      initialized: false,
      pinnedToggledCount: 0,
      visibleDuration: new Chunk379649.G9,
      pinned: false
    }
  }
  getByType(e) {
    return this.types[e]
  }
  getByWidget(e) {
    switch (e) {
      case I.Odu.VOICE:
        return this.getByType(0);
      case I.Odu.TEXT:
        return this.getByType(1);
      default:
        return null
    }
  }
  getAnalytics() {
    let e = this.types[0],
      t = this.types[1];
    return {
      widget_voice_pin_toggle_count: module.pinnedToggledCount,
      widget_voice_visible_duration: module.visibleDuration.elapsed().asMilliseconds(),
      widget_voice_pinned: module.pinned,
      widget_text_pin_toggle_count: exports.pinnedToggledCount,
      widget_text_visible_duration: exports.visibleDuration.elapsed().asMilliseconds(),
      widget_text_pinned: exports.pinned
    }
  }
  constructor() {
    A(this, "types", {
      0: j.makeEmptyAnalytics(),
      1: j.makeEmptyAnalytics()
    })
  }
}
class M {
  update() {
    let e = this.game,
      t = Chunk998502.ZP.GetWindowFullscreenTypeByPid(module.pid, module.name, module.fullscreenType);
    if (exports !== this.lastscreenType) {
      if (!(exports in this.counters)) {
        let n = Chunk371651.default.getTrackedGameByPid(module.pid);
        w.error("ScreenTypeAnalytics: Unknown screen type for ".concat(this.game.name, ": ").concat(exports), {
          rawGame: this.game,
          overlayTrackedGame: require
        });
        return
      }
      this.counters[exports].start(), null != this.lastscreenType && this.counters[this.lastscreenType].stop(), this.lastscreenType = exports
    }
  }
  getAnalytics() {
    var e, t, n;
    let r = e => this.counters[e].elapsed().asMilliseconds(),
      i = {
        [Chunk593472.Jx.UNKNOWN]: Chunk772848(Chunk593472.Jx.UNKNOWN),
        [Chunk593472.Jx.WINDOWED]: Chunk772848(Chunk593472.Jx.WINDOWED),
        [Chunk593472.Jx.MAXIMIZED]: Chunk772848(Chunk593472.Jx.MAXIMIZED),
        [Chunk593472.Jx.BORDERLESS_FULLSCREEN]: Chunk772848(Chunk593472.Jx.BORDERLESS_FULLSCREEN),
        [Chunk593472.Jx.FULLSCREEN]: Chunk772848(Chunk593472.Jx.FULLSCREEN),
        [Chunk593472.Jx.MINIMIZED]: Chunk772848(Chunk593472.Jx.MINIMIZED)
      },
      a = Object.entries(Chunk379649).sort((e, t) => {
        let [n, r] = e, [i, a] = t;
        return a - r
      })[0],
      s = parseInt(Chunk570140[0], 10),
      l = isNaN(Chunk147913) ? Chunk593472.Jx.UNKNOWN : Chunk147913;
    isNaN(Chunk147913) && w.error("ScreenTypeAnalytics: Unknown most used screen type: ".concat(Chunk570140), Chunk379649);
    let c = Chunk938038.c.getGameDisplayMode(null != (e = this.game.name) ? module : this.game.id);
    Chunk938038.c.setGameDisplayMode(null != (t = this.game.name) ? exports : this.game.id, Chunk579806);
    let u = {
      screentype_unknown_duration: Chunk379649[Chunk593472.Jx.UNKNOWN],
      screentype_windowed_duration: Chunk379649[Chunk593472.Jx.WINDOWED],
      screentype_maximized_duration: Chunk379649[Chunk593472.Jx.MAXIMIZED],
      screentype_borderless_fullscreen_duration: Chunk379649[Chunk593472.Jx.BORDERLESS_FULLSCREEN],
      screentype_fullscreen_duration: Chunk379649[Chunk593472.Jx.FULLSCREEN],
      screentype_minimized_duration: Chunk379649[Chunk593472.Jx.MINIMIZED]
    };
    return P(C({}, Chunk581567), {
      screentype_global_supported_duration: Chunk581567.screentype_windowed_duration + Chunk581567.screentype_maximized_duration + Chunk581567.screentype_borderless_fullscreen_duration,
      screentype_global_unsupported_duration: Chunk581567.screentype_fullscreen_duration,
      screentype_initial: Chunk593472.Jx[this.game.fullscreenType],
      screentype_most_used: Chunk593472.Jx[Chunk579806],
      screentype_most_used_previous: null == Chunk710845 ? null : Chunk593472.Jx[Chunk710845],
      screentype_last: Chunk593472.Jx[null != (n = this.lastscreenType) ? require : Chunk593472.Jx.UNKNOWN],
      game_display_mode_is_adjustment_supported: Chunk998502.ZP.GameDisplayModeIsGameSupported(this.game.name)
    })
  }
  destroy() {
    clearInterval(this.updateScreenInterval)
  }
  constructor(e) {
    A(this, "game", true), A(this, "counters", true), A(this, "lastscreenType", true), A(this, "updateScreenInterval", true), this.game = e, this.counters = {
      [o.Jx.UNKNOWN]: new i.G9,
      [o.Jx.WINDOWED]: new i.G9,
      [o.Jx.MAXIMIZED]: new i.G9,
      [o.Jx.BORDERLESS_FULLSCREEN]: new i.G9,
      [o.Jx.FULLSCREEN]: new i.G9,
      [o.Jx.MINIMIZED]: new i.G9
    }, this.lastscreenType = true, this.update(), this.updateScreenInterval = setInterval(() => this.update(), 1e4)
  }
}

function k() {
  try {
    return crypto.randomUUID()
  } catch (e) {
    return w.error("OverlayUsageStatsManager: Failed to generate UUID", module), (0, Chunk772848.Z)()
  }
}
class U {
  static get debug() {
    return {
      gamesByPid: U.gamesByPid,
      gamesByName: U.gamesByName
    }
  }
  set successfullyShown(e) {
    this._successfullyShown = e
  }
  getQunsName(e) {
    let t = null != e ? e : o.Ng.QUNS_UNKNOWN;
    return o.Ng[t]
  }
  buildOverlayMethodStats(e, t) {
    let n = this.overlayMethodStats,
      {
        oopEnabled: r,
        legacyEnabled: i
      } = p.default.getPerGameEnabledStatus(t),
      a = {
        legacy_override: true === i,
        enabled: r || i,
        quns_mode: this.getQunsName(o.Ng.QUNS_UNKNOWN),
        current_method: e
      };
    if (null != t) {
      let {
        quns: e
      } = b.ZP.GetWindowFullscreenTypeExtraByPid(t.pid, t.gameName);
      a.quns_mode = this.getQunsName(e)
    }
    if (null == e) {
      let e = null != t ? p.default.getRenderMethod(t.pid) : null;
      return C({
        original_method: null != e ? e : f.gl.Disabled
      }, a)
    }
    if (null == n) return C({
      original_method: e
    }, a);
    let s = e !== n.original_method ? e : true;
    return C(P(C({}, n), {
      any_other_method: null != s ? s : n.any_other_method
    }), a)
  }
  static getGameName(e) {
    var t, n;
    return null != (n = null != (t = e.name) ? t : e.id) ? n : null
  }
  static ignoreGame(e) {
    var t;
    return null != (t = e.isLauncher) && t
  }
  static create(e) {
    let t = U.getGameName(e);
    if (U.ignoreGame(e) || null == t) return null;
    let n = new U(C({}, e));
    return n.gameConcurrentGameCount = Object.values(U.gamesByPid).length, U.gamesByPid[e.pid] = n, U.gamesByName[t] = n, n
  }
  static getByName(e) {
    var t;
    if (null == e) return null;
    let n = null == (t = d.ZP.getRunningGames().find(t => {
      var n;
      return (null == (n = (0, d.ow)(t).name) ? true : n.toLowerCase()) === e.toLowerCase()
    })) ? true : t.pid;
    return null != n ? U.gamesByPid[n] : null
  }
  static getByPid(e) {
    return U.gamesByPid[e]
  }
  static async destroy(e) {
    let t = U.getGameName(e);
    if (U.ignoreGame(e) || null == t) return;
    let n = U.gamesByPid[e.pid];
    if (null != n) {
      n.screenAnalytics.destroy();
      let t = await n.getAnalytics();
      for (let e of (E.default.track(I.rMx.OVERLAY_USAGE_STATS, t.usage), t.notifications)) E.default.track(I.rMx.OVERLAY_USAGE_NOTIFICATION_STATS, e);
      w.verbose("OVERLAY_USAGE_STATS: ".concat(e.name), t), delete U.gamesByPid[e.pid]
    }
    delete U.gamesByName[t]
  }
  setOverlayMethod(e) {
    this.overlayMethod = e, this.overlayMethodStats = this.buildOverlayMethodStats(e, this.game), w.verbose("setOverlayMethod", {
      method: e,
      game: this.game,
      overlayStatus: this.overlayStatus,
      overlayMethodStats: this.overlayMethodStats
    })
  }
  setOverlayState(e, t, n) {
    n || (this.overlayState = e, this.overlayStateReason = t), this.overlayStateRaw = e, this.overlayStateRawReason = t
  }
  getSettingMethod() {
    return null == this.overlayMethod ? Chunk837268.gl[Chunk837268.gl.Disabled] : Chunk837268.gl[this.overlayMethod]
  }
  async getAnalytics() {
    var e, t, n, r, i, a, o, s, c;
    let p = null != (n = this.overlayMethod) ? require : Chunk837268.gl.Disabled,
      m = {
        setting_is_enabled: Chunk808506.default.enabled,
        setting_method: this.getSettingMethod(),
        setting_display_user: Chunk237997.default.getDisplayUserMode(),
        setting_display_name: Chunk237997.default.getDisplayNameMode(),
        setting_avatar_size: Chunk237997.default.getAvatarSizeMode(),
        setting_notification_position: Chunk237997.default.getNotificationPositionMode(),
        setting_chat_notification: Chunk624864.Z.isNotificationDisabled(Chunk987650.n0.TextChat) ? "DISABLED" : "ENABLED"
      },
      E = (0, Chunk594190.b6)(this.game),
      b = (0, Chunk581567.G8)(this.game),
      y = null != (r = this.overlayMethodStats) ? Chunk772848 : this.buildOverlayMethodStats(Chunk371651, this.game),
      O = null != Chunk145597.any_other_method ? Chunk837268.gl[Chunk145597.any_other_method] : null,
      v = null != Chunk145597.current_method ? Chunk837268.gl[Chunk145597.current_method] : null,
      S = Chunk626135.enabledLegacy || Chunk626135.enabledOOP;
    return {
      usage: P(C(P(C({
        event_uuid: this.uuid,
        overlay_usage_stats_version: R
      }, this.notificationAnalytics.getAnalytics(), this.widgetAnalytics.getAnalytics(), this.screenAnalytics.getAnalytics(), Chunk449224), {
        overlay_status_game_enabled: Chunk938038,
        overlay_status_game_source: Chunk626135.source,
        game_name: null != (i = Chunk998502.gameName) ? Chunk379649 : null,
        game_id: null != (a = Chunk998502.gameId) ? Chunk570140 : null,
        game_exe: null != (o = Chunk998502.exe) ? Chunk593472 : null,
        game_elevated: this.game.elevated,
        game_is_launcher: null != (s = this.game.isLauncher) && Chunk147913,
        game_duration: this.gameTimer.elapsed().asMilliseconds(),
        game_focused_duration: this.gameFocusedTimer.elapsed().asMilliseconds(),
        game_focused_change_count: this.gameFocusChangedCount,
        game_concurrent_game_count: this.gameConcurrentGameCount,
        ui_unlocked_duration: this.unlockedTimer.elapsed().asMilliseconds(),
        ui_unlocked_count: this.uiUnlockedCount,
        ui_locked_count: this.uiLockedCount,
        soundboard_shown_duration: this.soundboardShownTimer.elapsed().asMilliseconds(),
        soundboard_shown_count: this.soundboardShownCount,
        soundboard_keep_open_count: this.soundboardKeepOpenCount,
        hardware_display_count: null != (c = await (null === Chunk579806.Z || true === Chunk579806.Z || null == (t = Chunk579806.Z.hardware) || null == (e = exports.getDisplayCount) ? true : module.call(exports))) ? Chunk710845 : null,
        message_ack_count: this.overlayMessageAckCount,
        message_created_count: this.overlayMessageCreateCount,
        desktop_message_ack_count: this.desktopMessageAckCount,
        desktop_message_created_count: this.desktopMessageCreateCount,
        desktop_focused_duration: this.desktopFocusedTimer.elapsed().asMilliseconds(),
        desktop_focused_change_count: this.desktopFocusChangedCount,
        rtc_connection_duration: this.rtcConnectionTimer.elapsed().asMilliseconds(),
        mute_toggled_count: this.muteToggledCount,
        overlay_successfully_shown: this._successfullyShown
      }), Chunk145597), {
        original_method: Chunk837268.gl[Chunk145597.original_method],
        any_other_method: Chunk830917,
        current_method: Chunk554174,
        last_overlay_state: this.overlayState,
        last_overlay_state_raw: this.overlayStateRaw,
        last_overlay_state_reason: this.overlayStateReason,
        last_overlay_state_raw_reason: this.overlayStateRawReason
      }),
      notifications: this.notificationAnalytics.getCounterAnalytics(this.uuid)
    }
  }
  setLocked(e) {
    e ? (this.unlockedTimer.stop(), ++this.uiLockedCount) : (this.unlockedTimer.start(), ++this.uiUnlockedCount)
  }
  static gameSetAllUnfocused() {
    for (let e of Object.values(U.gamesByPid)) module.gameFocusedTimer.stop()
  }
  static incrementConcurrentGameCount() {
    for (let e of Object.values(U.gamesByPid)) ++module.gameConcurrentGameCount
  }
  gameSetFocused(e) {
    this.gameFocusedTimer.toggle(e), e && ++this.gameFocusChangedCount
  }
  setSoundboardShown(e, t) {
    this.soundboardShownTimer.toggle(e), e && (++this.soundboardShownCount, t && ++this.soundboardKeepOpenCount)
  }
  static handleMuteToggled() {
    for (let e of Object.values(U.gamesByPid)) ++module.muteToggledCount
  }
  static desktopSetFocused(e) {
    if (e !== U.desktopMainWindowHasFocus) {
      for (let t of Object.values(U.gamesByPid)) ++t.desktopFocusChangedCount, t.desktopFocusedTimer.toggle(e);
      U.desktopMainWindowHasFocus = e
    }
  }
  static desktopMessageEvent(e) {
    for (let t of Object.values(U.gamesByPid)) switch (e) {
      case "ack":
        ++t.desktopMessageAckCount;
        break;
      case "created":
        ++t.desktopMessageCreateCount
    }
  }
  static toggleRtcConnection(e) {
    for (let t of Object.values(U.gamesByPid)) t.rtcConnectionTimer.toggle(e)
  }
  constructor(e) {
    var t, n;
    A(this, "game", true), A(this, "uuid", true), A(this, "overlayStatus", true), A(this, "overlayMethod", true), A(this, "overlayMethodStats", true), A(this, "overlayState", true), A(this, "overlayStateRaw", true), A(this, "overlayStateReason", true), A(this, "overlayStateRawReason", true), A(this, "notificationAnalytics", true), A(this, "widgetAnalytics", true), A(this, "screenAnalytics", true), A(this, "uiUnlockedCount", true), A(this, "uiLockedCount", true), A(this, "gameFocusChangedCount", true), A(this, "gameConcurrentGameCount", true), A(this, "overlayMessageAckCount", true), A(this, "overlayMessageCreateCount", true), A(this, "gameTimer", true), A(this, "gameFocusedTimer", true), A(this, "unlockedTimer", true), A(this, "rtcConnectionTimer", true), A(this, "desktopFocusedTimer", true), A(this, "desktopFocusChangedCount", true), A(this, "desktopMessageAckCount", true), A(this, "desktopMessageCreateCount", true), A(this, "soundboardShownTimer", true), A(this, "soundboardShownCount", true), A(this, "soundboardKeepOpenCount", true), A(this, "muteToggledCount", true), A(this, "_successfullyShown", true), this.game = e, this.uuid = k(), this.overlayMethod = null, this.overlayMethodStats = null, this.overlayState = null, this.overlayStateRaw = null, this.overlayStateReason = null, this.overlayStateRawReason = null, this.notificationAnalytics = new L, this.widgetAnalytics = new j, this.uiUnlockedCount = 0, this.uiLockedCount = 0, this.gameFocusChangedCount = 0, this.gameConcurrentGameCount = 0, this.overlayMessageAckCount = 0, this.overlayMessageCreateCount = 0, this.gameTimer = i.G9.startNew(), this.gameFocusedTimer = new i.G9, this.unlockedTimer = new i.G9, this.rtcConnectionTimer = new i.G9, this.desktopFocusedTimer = new i.G9, this.desktopFocusChangedCount = 0, this.desktopMessageAckCount = 0, this.desktopMessageCreateCount = 0, this.soundboardShownTimer = new i.G9, this.soundboardShownCount = 0, this.soundboardKeepOpenCount = 0, this.muteToggledCount = 0, this._successfullyShown = false, this.screenAnalytics = new M(e), this.overlayStatus = (0, d.b6)(e), this.overlayMethod = null != (n = null == (t = this.overlayStatus) ? true : t.overlayMethod) ? n : null, this.overlayMethodStats = this.buildOverlayMethodStats(this.overlayMethod, e), U.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(), ee.hasConnection() && this.rtcConnectionTimer.start()
  }
}

function G() {
  let e = Chunk808506.default.getFocusedPID();
  if (null == module || module === Chunk145597.UNSET_PID || !Chunk371651.default.isOverlayOOPEnabledForPid(module)) return null;
  let t = Chunk371651.default.getTrackedGameByPid(module);
  return null == exports || null == exports.gameName || null == exports.applicationId || exports.state !== Chunk837268.mM.OVERLAY_RENDERING ? null : {
    gameName: exports.gameName,
    gameId: exports.applicationId
  }
}

function Z(e) {
  for (let t of (w.verbose("handleRunningGamesChange", e), e.added)) {
    if (null != U.getByPid(t.pid)) {
      w.verbose("handleRunningGamesChange added", t, "already tracked");
      continue
    }
    U.incrementConcurrentGameCount();
    let e = U.create(t);
    w.verbose("handleRunningGamesChange added", t, e)
  }
  for (let t of e.removed) U.destroy(t), w.verbose("handleRunningGamesChange removed", t)
}

function B(e) {
  if (e.pid === y.DEV_PID) return;
  let t = U.getByPid(e.pid);
  if (w.verbose("OVERLAY_SET_INPUT_LOCKED", t), null == t) return void w.error("OVERLAY_SET_INPUT_LOCKED: Unable to find game", e, U.debug);
  t.setLocked(e.locked)
}

function F(e) {
  var t;
  if (w.verbose("OVERLAY_NOTIFICATION_EVENT", e), null == e.gameName && null == e.gameId) return;
  let n = U.getByName(null != (t = e.gameName) ? t : e.gameId);
  if (null == n) return void w.error("OVERLAY_NOTIFICATION_EVENT: Game not found.", e, U.debug);
  n.notificationAnalytics.increment(e.notificationType, e.action)
}

function V(e) {
  var t;
  if (w.verbose("OVERLAY_WIDGET_CHANGED", e), null == e.gameName && null == e.gameId) return;
  let n = U.getByName(null != (t = e.gameName) ? t : e.gameId);
  if (null == n) return void w.error("OVERLAY_WIDGET_CHANGED: Game not found", e, U.debug);
  let r = n.widgetAnalytics.getByWidget(e.widgetType);
  null != r && (r.initialized || (r.initialized = true, r.pinned = e.pinned), r.pinned !== e.pinned && ++r.pinnedToggledCount, r.pinned = e.pinned, r.visibleDuration.toggle(e.visible))
}

function H(e) {
  if (w.verbose("OVERLAY_FOCUSED", e), U.gameSetAllUnfocused(), null == e.pid || e.pid === y.DEV_PID || e.pid === y.UNSET_PID) return;
  let t = U.getByPid(e.pid);
  if (null == t) return void w.error("OVERLAY_FOCUSED: Game not found", e, U.debug);
  t.gameSetFocused(true)
}

function Y(e) {
  var t;
  if (w.verbose("SOUNDBOARD_SET_OVERLAY_ENABLED", e), e.pid === y.DEV_PID) return;
  let n = U.getByPid(e.pid);
  if (null == n) return void w.error("SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found", e, U.debug);
  n.setSoundboardShown(e.enabled, !!e.enabled && null != (t = e.keepOpen) && t)
}

function W(e) {
  var t;
  if (w.verbose("OVERLAY_MESSAGE_EVENT_ACTION", e), null == e.gameName && null == e.gameId) return;
  let n = U.getByName(null != (t = e.gameName) ? t : e.gameId);
  if (null == n) return void w.error("OVERLAY_MESSAGE_EVENT_ACTION: Game not found", e, U.debug);
  switch (e.eventType) {
    case "ack":
      ++n.overlayMessageAckCount;
      break;
    case "create":
      ++n.overlayMessageCreateCount
  }
}

function K(e) {
  w.verbose("MESSAGE_ACKED", e);
  let t = G();
  if (null == t) return void U.desktopMessageEvent("ack");
  a.Z.dispatch({
    type: "OVERLAY_MESSAGE_EVENT_ACTION",
    eventType: "ack",
    gameName: t.gameName,
    gameId: t.gameId
  })
}

function z(e) {
  if (e.message.state !== I.yb.SENDING) return;
  w.verbose("MESSAGE_CREATE", e, Error().stack);
  let t = G();
  if (null == t) return void U.desktopMessageEvent("created");
  a.Z.dispatch({
    type: "OVERLAY_MESSAGE_EVENT_ACTION",
    eventType: "create",
    gameName: t.gameName,
    gameId: t.gameId
  })
}

function q(e) {
  let t = (0, v.Z)();
  null != t && t !== y.DEV_PID && t !== y.UNSET_PID && (w.verbose("AUDIO_TOGGLE_SELF_MUTE", e), U.handleMuteToggled())
}

function Q(e) {
  w.verbose("WINDOW_FOCUS", e);
  let t = (0, O.UU)();
  if (e.windowId !== t) return void w.verbose("WINDOW_FOCUS: Not main window", {
    action: e,
    mainWindowId: t
  });
  U.desktopSetFocused(e.focused)
}

function X(e) {
  if (e.pid === y.DEV_PID || e.pid === y.UNSET_PID) return;
  let t = U.getByPid(e.pid);
  if (null == t) return void w.error("OVERLAY_SUCCESSFULLY_SHOWN: Game not found", e, U.debug);
  t.successfullyShown = true
}

function J(e) {
  let t = U.getByPid(e.pid);
  if (null == t) return void w.error("OVERLAY_UPDATE_OVERLAY_METHOD: Game not found", e, U.debug);
  e.overlayMethod !== f.gl.Disabled && (w.verbose("OVERLAY_UPDATE_OVERLAY_METHOD", e), t.setOverlayMethod(e.overlayMethod))
}

function $(e) {
  let t = U.getByPid(e.pid);
  if (null == t) return void w.error("OVERLAY_TRACK_STATE_CHANGED: Game not found", e, U.debug);
  if (e.newState !== f.mM.OVERLAY_TEARING_DOWN) {
    if (e.reason.includes("Unknown fullscreen type")) return void t.setOverlayState(e.newState, e.reason, true);
    t.setOverlayState(e.newState, e.reason, false)
  }
}
A(U, "gamesByPid", {}), A(U, "gamesByName", {}), A(U, "desktopMainWindowHasFocus", document.hasFocus());
class ee {
  static hasConnection() {
    return ee.connections.size > 0
  }
  static handleRTCConnectionState(e) {
    var t;
    let n = (null != (t = e.channelId) ? t : "unknown") + e.context;
    switch (e.state) {
      case I.hes.RTC_CONNECTED:
        ee.connections.add(n);
        break;
      case I.hes.DISCONNECTED:
        ee.connections.delete(n)
    }
    let r = ee.hasConnection();
    ee.previousHasConnection !== r && (U.toggleRtcConnection(r), ee.previousHasConnection = r)
  }
}
A(ee, "connections", new Set), A(ee, "previousHasConnection", false);
class et {
  static handleMessageAcked(e) {
    w.verbose("MESSAGE_ACKED", e);
    let t = m.Z.getGame();
    if (null == t) return void w.error("Game not found.");
    a.Z.dispatch({
      type: "OVERLAY_MESSAGE_EVENT_ACTION",
      eventType: "ack",
      gameName: t.name,
      gameId: t.id
    })
  }
  static handleMessageCreate(e) {
    if (e.message.state !== I.yb.SENDING) return;
    w.verbose("MESSAGE_CREATE", e, Error().stack);
    let t = m.Z.getGame();
    if (null == t) return void w.error("Game not found.");
    a.Z.dispatch({
      type: "OVERLAY_MESSAGE_EVENT_ACTION",
      eventType: "create",
      gameName: t.name,
      gameId: t.id
    })
  }
}
D && !__OVERLAY__ && setInterval(async () => {
  for (let e of Object.values(U.debug.gamesByName)) w.verbose("Game analytics", await module.getAnalytics())
}, 5e3);
class en extends Chunk147913.Z {
  constructor(...e) {
    super(...e), A(this, "actions", __OVERLAY__ ? {
      MESSAGE_ACKED: et.handleMessageAcked,
      MESSAGE_CREATE: et.handleMessageCreate
    } : {
      OVERLAY_FOCUSED: H,
      OVERLAY_NOTIFICATION_EVENT: F,
      OVERLAY_SET_INPUT_LOCKED: B,
      OVERLAY_WIDGET_CHANGED: V,
      OVERLAY_MESSAGE_EVENT_ACTION: W,
      RUNNING_GAMES_CHANGE: Z,
      SOUNDBOARD_SET_OVERLAY_ENABLED: Y,
      MESSAGE_ACKED: K,
      MESSAGE_CREATE: z,
      WINDOW_FOCUS: Q,
      RTC_CONNECTION_STATE: ee.handleRTCConnectionState,
      AUDIO_TOGGLE_SELF_MUTE: q,
      OVERLAY_SUCCESSFULLY_SHOWN: X,
      OVERLAY_UPDATE_OVERLAY_METHOD: J,
      OVERLAY_TRACK_STATE_CHANGED: $
    })
  }
}
let er = new en