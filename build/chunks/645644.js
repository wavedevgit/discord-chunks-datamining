/** Chunk was on web.js **/
/** chunk id: 645644, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => en
}), require("./388685.js"), require("./642613.js"), require("./415506.js");
var Chunk772848 = require("./772848.js"),
  Chunk379649 = require("./379649.js"),
  Chunk570140 = require("./570140.js"),
  Chunk593472 = require("./593472.js"),
  Chunk147913 = require("./147913.js"),
  Chunk579806 = require("./579806.js"),
  Chunk710845 = require("./710845.js"),
  Chunk581567 = require("./581567.js"),
  Chunk594190 = require("./594190.js"),
  Chunk486016 = require("./486016.js"),
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

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let w = 3,
  D = false,
  x = new Chunk710845.Z("OverlayUsageStatsManager");
D || (x.verbose = () => {});
class L {
  increment(e) {
    ++this.actions[e]
  }
  getAnalytics(e, t) {
    let n = this.actions[A.bv.Viewed],
      r = this.actions[A.bv.Clicked];
    return 0 === n && 0 === r ? null : {
      event_uuid: t,
      notification_type: e,
      viewed_count: n,
      clicked_count: r
    }
  }
  constructor() {
    C(this, "actions", {
      [Chunk987650.bv.Viewed]: 0,
      [Chunk987650.bv.Clicked]: 0
    })
  }
}
class j {
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
  increment(e, t) {
    let n = this.groupCounters[t];
    if (null == n) return void x.error("NotificationCounter: Unknown notification action: ".concat(t));
    let r = (0, A.YK)(e);
    if (!(r in n)) return void x.error("NotificationCounter: Unknown notification action: ".concat(e));
    ++n[r], ++this.actionCounters[t];
    let i = this.counters[e];
    if (null == i) return void x.error("NotificationCounter: Unknown notification type: ".concat(e));
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
    C(this, "actionCounters", {
      [Chunk987650.bv.Viewed]: 0,
      [Chunk987650.bv.Clicked]: 0
    }), C(this, "groupCounters", {
      [Chunk987650.bv.Viewed]: j.makeEmptyGroupAnalytics(),
      [Chunk987650.bv.Clicked]: j.makeEmptyGroupAnalytics()
    }), C(this, "counters", {
      [Chunk987650.n0.NewsNudge]: new L,
      [Chunk987650.n0.WelcomeNudge]: new L,
      [Chunk987650.n0.OopWelcomeNudge]: new L,
      [Chunk987650.n0.TextChat]: new L,
      [Chunk987650.n0.ActivityUserJoin]: new L,
      [Chunk987650.n0.ActivityInvite]: new L,
      [Chunk987650.n0.IncomingCall]: new L,
      [Chunk987650.n0.GoLiveNudge]: new L,
      [Chunk987650.n0.GoLiveNonVoiceNudge]: new L,
      [Chunk987650.n0.OverlayCrashed]: new L,
      [Chunk987650.n0.ClipsReminderNotification]: new L,
      [Chunk987650.n0.ClipsNotification]: new L,
      [Chunk987650.n0.KeybindIndicatorsNotification]: new L,
      [Chunk987650.n0.SendGameInvitesNotification]: new L,
      [Chunk987650.n0.NowPlayingNotification]: new L,
      [Chunk987650.n0.RequestToStream]: new L
    })
  }
}
class M {
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
      case T.Odu.VOICE:
        return this.getByType(0);
      case T.Odu.TEXT:
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
    C(this, "types", {
      0: M.makeEmptyAnalytics(),
      1: M.makeEmptyAnalytics()
    })
  }
}
class k {
  update() {
    let e = this.game,
      t = Chunk998502.ZP.GetWindowFullscreenTypeByPid(module.pid, module.name, module.fullscreenType);
    if (exports !== this.lastscreenType) {
      if (!(exports in this.counters)) {
        let n = Chunk371651.default.getTrackedGameByPid(module.pid);
        x.error("ScreenTypeAnalytics: Unknown screen type for ".concat(this.game.name, ": ").concat(exports), {
          rawGame: this.game,
          overlayTrackedGame: require
        });
        return
      }
      this.counters[exports].start(), null != this.lastscreenType && this.counters[this.lastscreenType].stop(), this.lastscreenType = exports
    }
  }
  getAnalytics() {
    var e, t;
    let n = e => this.counters[e].elapsed().asMilliseconds(),
      r = {
        [Chunk593472.Jx.UNKNOWN]: require(Chunk593472.Jx.UNKNOWN),
        [Chunk593472.Jx.WINDOWED]: require(Chunk593472.Jx.WINDOWED),
        [Chunk593472.Jx.MAXIMIZED]: require(Chunk593472.Jx.MAXIMIZED),
        [Chunk593472.Jx.BORDERLESS_FULLSCREEN]: require(Chunk593472.Jx.BORDERLESS_FULLSCREEN),
        [Chunk593472.Jx.FULLSCREEN]: require(Chunk593472.Jx.FULLSCREEN),
        [Chunk593472.Jx.MINIMIZED]: require(Chunk593472.Jx.MINIMIZED)
      },
      i = Object.entries(Chunk772848).sort((e, t) => {
        let [n, r] = e, [i, a] = t;
        return a - r
      })[0],
      a = parseInt(Chunk379649[0], 10),
      s = isNaN(Chunk570140) ? Chunk593472.Jx.UNKNOWN : Chunk570140;
    isNaN(Chunk570140) && x.error("ScreenTypeAnalytics: Unknown most used screen type: ".concat(Chunk379649), Chunk772848);
    let l = Chunk938038.c.getGameDisplayMode(null != (e = this.game.name) ? module : this.game.id);
    Chunk938038.c.setGameDisplayMode(null != (t = this.game.name) ? exports : this.game.id, Chunk147913);
    let c = {
      screentype_unknown_duration: Chunk772848[Chunk593472.Jx.UNKNOWN],
      screentype_windowed_duration: Chunk772848[Chunk593472.Jx.WINDOWED],
      screentype_maximized_duration: Chunk772848[Chunk593472.Jx.MAXIMIZED],
      screentype_borderless_fullscreen_duration: Chunk772848[Chunk593472.Jx.BORDERLESS_FULLSCREEN],
      screentype_fullscreen_duration: Chunk772848[Chunk593472.Jx.FULLSCREEN],
      screentype_minimized_duration: Chunk772848[Chunk593472.Jx.MINIMIZED]
    };
    return P(N({}, Chunk710845), {
      screentype_global_supported_duration: Chunk710845.screentype_windowed_duration + Chunk710845.screentype_maximized_duration + Chunk710845.screentype_borderless_fullscreen_duration,
      screentype_global_unsupported_duration: Chunk710845.screentype_fullscreen_duration,
      screentype_initial: Chunk593472.Jx[this.game.fullscreenType],
      screentype_most_used: Chunk593472.Jx[Chunk147913],
      screentype_most_used_previous: null == Chunk579806 ? null : Chunk593472.Jx[Chunk579806],
      game_display_mode_is_adjustment_supported: Chunk998502.ZP.GameDisplayModeIsGameSupported(this.game.name)
    })
  }
  destroy() {
    clearInterval(this.updateScreenInterval)
  }
  constructor(e) {
    C(this, "game", true), C(this, "counters", true), C(this, "lastscreenType", true), C(this, "updateScreenInterval", true), this.game = e, this.counters = {
      [o.Jx.UNKNOWN]: new i.G9,
      [o.Jx.WINDOWED]: new i.G9,
      [o.Jx.MAXIMIZED]: new i.G9,
      [o.Jx.BORDERLESS_FULLSCREEN]: new i.G9,
      [o.Jx.FULLSCREEN]: new i.G9,
      [o.Jx.MINIMIZED]: new i.G9
    }, this.lastscreenType = true, this.update(), this.updateScreenInterval = setInterval(() => this.update(), 1e4)
  }
}

function U() {
  try {
    return crypto.randomUUID()
  } catch (e) {
    return x.error("OverlayUsageStatsManager: Failed to generate UUID", module), (0, Chunk772848.Z)()
  }
}
class G {
  static get debug() {
    return {
      gamesByPid: G.gamesByPid,
      gamesByName: G.gamesByName
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
        quns_mode: this.getQunsName(o.Ng.QUNS_UNKNOWN)
      };
    if (null != t) {
      let {
        quns: e
      } = y.ZP.GetWindowFullscreenTypeExtraByPid(t.pid, t.gameName);
      a.quns_mode = this.getQunsName(e)
    }
    if (null == e) {
      let e = null != t ? p.default.getRenderMethod(t.pid) : null;
      return N({
        original_method: null != e ? e : _.gl.Disabled
      }, a)
    }
    if (null == n) return N({
      original_method: e
    }, a);
    let s = n.any_other_method;
    return N(P(N({}, n), {
      any_other_method: e !== s ? e : s
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
    let t = G.getGameName(e);
    if (G.ignoreGame(e) || null == t) return null;
    let n = new G(N({}, e));
    return n.gameConcurrentGameCount = Object.values(G.gamesByPid).length, G.gamesByPid[e.pid] = n, G.gamesByName[t] = n, n
  }
  static getByName(e) {
    var t;
    if (null == e) return null;
    let n = null == (t = d.ZP.getRunningGames().find(t => {
      var n;
      return (null == (n = (0, d.ow)(t).name) ? true : n.toLowerCase()) === e.toLowerCase()
    })) ? true : t.pid;
    return null != n ? G.gamesByPid[n] : null
  }
  static getByPid(e) {
    return G.gamesByPid[e]
  }
  static async destroy(e) {
    let t = G.getGameName(e);
    if (G.ignoreGame(e) || null == t) return;
    let n = G.gamesByPid[e.pid];
    if (null != n) {
      n.screenAnalytics.destroy();
      let t = await n.getAnalytics();
      for (let e of (b.default.track(T.rMx.OVERLAY_USAGE_STATS, t.usage), t.notifications)) b.default.track(T.rMx.OVERLAY_USAGE_NOTIFICATION_STATS, e);
      x.verbose("OVERLAY_USAGE_STATS: ".concat(e.name), t), delete G.gamesByPid[e.pid]
    }
    delete G.gamesByName[t]
  }
  setOverlayMethod(e) {
    this.overlayMethod = e, this.overlayMethodStats = this.buildOverlayMethodStats(e, this.game), x.verbose("setOverlayMethod", {
      method: e,
      game: this.game,
      overlayStatus: this.overlayStatus,
      overlayMethodStats: this.overlayMethodStats
    })
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
        setting_chat_notification: Chunk624864.Z.isNotificationDisabled(Chunk486016.OverlayNotificationDisabledSetting.TEXT_CHAT) ? "DISABLED" : "ENABLED"
      },
      b = (0, Chunk594190.b6)(this.game),
      y = (0, Chunk581567.G8)(this.game),
      O = null != (r = this.overlayMethodStats) ? Chunk772848 : this.buildOverlayMethodStats(Chunk371651, this.game),
      v = null != Chunk145597.any_other_method ? Chunk837268.gl[Chunk145597.any_other_method] : null,
      I = Chunk626135.enabledLegacy || Chunk626135.enabledOOP;
    return {
      usage: P(N(P(N({
        event_uuid: this.uuid,
        overlay_usage_stats_version: w
      }, this.notificationAnalytics.getAnalytics(), this.widgetAnalytics.getAnalytics(), this.screenAnalytics.getAnalytics(), Chunk449224), {
        overlay_status_game_enabled: Chunk554174,
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
        any_other_method: Chunk830917
      }),
      notifications: this.notificationAnalytics.getCounterAnalytics(this.uuid)
    }
  }
  setLocked(e) {
    e ? (this.unlockedTimer.stop(), ++this.uiLockedCount) : (this.unlockedTimer.start(), ++this.uiUnlockedCount)
  }
  static gameSetAllUnfocused() {
    for (let e of Object.values(G.gamesByPid)) module.gameFocusedTimer.stop()
  }
  static incrementConcurrentGameCount() {
    for (let e of Object.values(G.gamesByPid)) ++module.gameConcurrentGameCount
  }
  gameSetFocused(e) {
    this.gameFocusedTimer.toggle(e), e && ++this.gameFocusChangedCount
  }
  setSoundboardShown(e, t) {
    this.soundboardShownTimer.toggle(e), e && (++this.soundboardShownCount, t && ++this.soundboardKeepOpenCount)
  }
  static handleMuteToggled() {
    for (let e of Object.values(G.gamesByPid)) ++module.muteToggledCount
  }
  static desktopSetFocused(e) {
    if (e !== G.desktopMainWindowHasFocus) {
      for (let t of Object.values(G.gamesByPid)) ++t.desktopFocusChangedCount, e && t.desktopFocusedTimer.toggle(e);
      G.desktopMainWindowHasFocus = e
    }
  }
  static desktopMessageEvent(e) {
    for (let t of Object.values(G.gamesByPid)) switch (e) {
      case "ack":
        ++t.desktopMessageAckCount;
        break;
      case "created":
        ++t.desktopMessageCreateCount
    }
  }
  static toggleRtcConnection(e) {
    for (let t of Object.values(G.gamesByPid)) t.rtcConnectionTimer.toggle(e)
  }
  constructor(e) {
    var t, n;
    C(this, "game", true), C(this, "uuid", true), C(this, "overlayStatus", true), C(this, "overlayMethod", true), C(this, "overlayMethodStats", true), C(this, "notificationAnalytics", true), C(this, "widgetAnalytics", true), C(this, "screenAnalytics", true), C(this, "uiUnlockedCount", true), C(this, "uiLockedCount", true), C(this, "gameFocusChangedCount", true), C(this, "gameConcurrentGameCount", true), C(this, "overlayMessageAckCount", true), C(this, "overlayMessageCreateCount", true), C(this, "gameTimer", true), C(this, "gameFocusedTimer", true), C(this, "unlockedTimer", true), C(this, "rtcConnectionTimer", true), C(this, "desktopFocusedTimer", true), C(this, "desktopFocusChangedCount", true), C(this, "desktopMessageAckCount", true), C(this, "desktopMessageCreateCount", true), C(this, "soundboardShownTimer", true), C(this, "soundboardShownCount", true), C(this, "soundboardKeepOpenCount", true), C(this, "muteToggledCount", true), C(this, "_successfullyShown", true), this.game = e, this.uuid = U(), this.overlayMethod = null, this.overlayMethodStats = null, this.notificationAnalytics = new j, this.widgetAnalytics = new M, this.uiUnlockedCount = 0, this.uiLockedCount = 0, this.gameFocusChangedCount = 0, this.gameConcurrentGameCount = 0, this.overlayMessageAckCount = 0, this.overlayMessageCreateCount = 0, this.gameTimer = i.G9.startNew(), this.gameFocusedTimer = new i.G9, this.unlockedTimer = new i.G9, this.rtcConnectionTimer = new i.G9, this.desktopFocusedTimer = new i.G9, this.desktopFocusChangedCount = 0, this.desktopMessageAckCount = 0, this.desktopMessageCreateCount = 0, this.soundboardShownTimer = new i.G9, this.soundboardShownCount = 0, this.soundboardKeepOpenCount = 0, this.muteToggledCount = 0, this._successfullyShown = false, this.screenAnalytics = new k(e), this.overlayStatus = (0, d.b6)(e), this.overlayMethod = null != (n = null == (t = this.overlayStatus) ? true : t.overlayMethod) ? n : null, this.overlayMethodStats = this.buildOverlayMethodStats(this.overlayMethod, e), G.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(), $.hasConnection() && this.rtcConnectionTimer.start()
  }
}

function B(e) {
  for (let t of (x.verbose("handleRunningGamesChange", e), e.added)) {
    G.incrementConcurrentGameCount();
    let e = G.create(t);
    x.verbose("handleRunningGamesChange added", t, e)
  }
  for (let t of e.removed) G.destroy(t), x.verbose("handleRunningGamesChange removed", t)
}

function Z(e) {
  if (e.pid === O.DEV_PID) return;
  let t = G.getByPid(e.pid);
  if (x.verbose("OVERLAY_SET_INPUT_LOCKED", t), null == t) return void x.error("OVERLAY_SET_INPUT_LOCKED: Unable to find game", e, G.debug);
  t.setLocked(e.locked)
}

function F(e) {
  var t;
  if (x.verbose("OVERLAY_NOTIFICATION_EVENT", e), null == e.gameName && null == e.gameId) return;
  let n = G.getByName(null != (t = e.gameName) ? t : e.gameId);
  if (null == n) return void x.error("OVERLAY_NOTIFICATION_EVENT: Game not found.", e, G.debug);
  n.notificationAnalytics.increment(e.notificationType, e.action)
}

function V(e) {
  var t;
  if (x.verbose("OVERLAY_WIDGET_CHANGED", e), null == e.gameName && null == e.gameId) return;
  let n = G.getByName(null != (t = e.gameName) ? t : e.gameId);
  if (null == n) return void x.error("OVERLAY_WIDGET_CHANGED: Game not found", e, G.debug);
  let r = n.widgetAnalytics.getByWidget(e.widgetType);
  null != r && (r.initialized || (r.initialized = true, r.pinned = e.pinned), r.pinned !== e.pinned && ++r.pinnedToggledCount, r.pinned = e.pinned, r.visibleDuration.toggle(e.visible))
}

function H(e) {
  if (x.verbose("OVERLAY_FOCUSED", e), G.gameSetAllUnfocused(), null == e.pid || e.pid === O.DEV_PID) return;
  let t = G.getByPid(e.pid);
  if (null == t) return void x.error("OVERLAY_FOCUSED: Game not found", e, G.debug);
  t.gameSetFocused(true)
}

function Y(e) {
  var t;
  if (x.verbose("SOUNDBOARD_SET_OVERLAY_ENABLED", e), e.pid === O.DEV_PID) return;
  let n = G.getByPid(e.pid);
  if (null == n) return void x.error("SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found", e, G.debug);
  n.setSoundboardShown(e.enabled, !!e.enabled && null != (t = e.keepOpen) && t)
}

function W(e) {
  var t;
  if (x.verbose("OVERLAY_MESSAGE_EVENT_ACTION", e), null == e.gameName && null == e.gameId) return;
  let n = G.getByName(null != (t = e.gameName) ? t : e.gameId);
  if (null == n) return void x.error("OVERLAY_MESSAGE_EVENT_ACTION: Game not found", e, G.debug);
  switch (e.eventType) {
    case "ack":
      ++n.overlayMessageAckCount;
      break;
    case "create":
      ++n.overlayMessageCreateCount
  }
}

function K(e) {
  x.verbose("MESSAGE_ACKED", e), G.desktopMessageEvent("ack")
}

function z(e) {
  e.message.state === T.yb.SENDING && G.desktopMessageEvent("created")
}

function q(e) {
  let t = (0, I.Z)();
  null != t && t !== O.DEV_PID && (x.verbose("AUDIO_TOGGLE_SELF_MUTE", e), G.handleMuteToggled())
}

function X(e) {
  x.verbose("WINDOW_FOCUS", e);
  let t = (0, v.UU)();
  if (e.windowId !== t) return void x.verbose("WINDOW_FOCUS: Not main window", {
    action: e,
    mainWindowId: t
  });
  G.desktopSetFocused(e.focused)
}

function Q(e) {
  if (e.pid === O.DEV_PID) return;
  let t = G.getByPid(e.pid);
  if (null == t) return void x.error("OVERLAY_SUCCESSFULLY_SHOWN: Game not found", e, G.debug);
  t.successfullyShown = true
}

function J(e) {
  let t = G.getByPid(e.pid);
  if (null == t) return void x.error("OVERLAY_UPDATE_OVERLAY_METHOD: Game not found", e, G.debug);
  e.overlayMethod !== _.gl.Disabled && (x.verbose("OVERLAY_UPDATE_OVERLAY_METHOD", e), t.setOverlayMethod(e.overlayMethod))
}
C(G, "gamesByPid", {}), C(G, "gamesByName", {}), C(G, "desktopMainWindowHasFocus", document.hasFocus());
class $ {
  static hasConnection() {
    return $.connections.size > 0
  }
  static handleRTCConnectionState(e) {
    var t;
    let n = (null != (t = e.channelId) ? t : "unknown") + e.context;
    switch (e.state) {
      case T.hes.RTC_CONNECTED:
        $.connections.add(n);
        break;
      case T.hes.DISCONNECTED:
        $.connections.delete(n)
    }
    let r = $.hasConnection();
    $.previousHasConnection !== r && (G.toggleRtcConnection(r), $.previousHasConnection = r)
  }
}
C($, "connections", new Set), C($, "previousHasConnection", false);
class ee {
  static handleMessageAcked(e) {
    x.verbose("MESSAGE_ACKED", e);
    let t = m.Z.getGame();
    if (null == t) return void x.error("Game not found.");
    a.Z.dispatch({
      type: "OVERLAY_MESSAGE_EVENT_ACTION",
      eventType: "ack",
      gameName: t.name,
      gameId: t.id
    })
  }
  static handleMessageCreate(e) {
    if (e.message.state !== T.yb.SENDING) return;
    x.verbose("MESSAGE_CREATE", e, Error().stack);
    let t = m.Z.getGame();
    if (null == t) return void x.error("Game not found.");
    a.Z.dispatch({
      type: "OVERLAY_MESSAGE_EVENT_ACTION",
      eventType: "create",
      gameName: t.name,
      gameId: t.id
    })
  }
}
D && !__OVERLAY__ && setInterval(async () => {
  for (let e of Object.values(G.debug.gamesByName)) x.verbose("Game analytics", await module.getAnalytics())
}, 5e3);
class et extends Chunk147913.Z {
  constructor(...e) {
    super(...e), C(this, "actions", __OVERLAY__ ? {
      MESSAGE_ACKED: ee.handleMessageAcked,
      MESSAGE_CREATE: ee.handleMessageCreate
    } : {
      OVERLAY_FOCUSED: H,
      OVERLAY_NOTIFICATION_EVENT: F,
      OVERLAY_SET_INPUT_LOCKED: Z,
      OVERLAY_WIDGET_CHANGED: V,
      OVERLAY_MESSAGE_EVENT_ACTION: W,
      RUNNING_GAMES_CHANGE: B,
      SOUNDBOARD_SET_OVERLAY_ENABLED: Y,
      MESSAGE_ACKED: K,
      MESSAGE_CREATE: z,
      WINDOW_FOCUS: X,
      RTC_CONNECTION_STATE: $.handleRTCConnectionState,
      AUDIO_TOGGLE_SELF_MUTE: q,
      OVERLAY_SUCCESSFULLY_SHOWN: Q,
      OVERLAY_UPDATE_OVERLAY_METHOD: J
    })
  }
}
let en = new et