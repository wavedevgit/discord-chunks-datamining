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

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
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
let w = 7,
  R = false,
  D = new Chunk710845.Z("OverlayUsageStatsManager");
R || (D.verbose = () => {});
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
    C(this, "actions", {
      [T.bv.Viewed]: 0,
      [T.bv.Clicked]: 0
    })
  }
}
class L {
  static makeEmptyGroupAnalytics() {
    return {
      [T.Vk.Nudge]: 0,
      [T.Vk.TextChat]: 0,
      [T.Vk.VoiceCall]: 0,
      [T.Vk.Activity]: 0,
      [T.Vk.Clips]: 0,
      [T.Vk.Other]: 0
    }
  }
  static makeCounters() {
    let e = {},
      t = Object.values(T.n0);
    for (let n of t) e[n] = new x;
    if (Object.keys(e).length !== t.length) throw Error("NotificationAnalytics: Failed to make counters");
    return e
  }
  increment(e, t) {
    let n = this.groupCounters[t];
    if (null == n) return void D.error("NotificationCounter: Unknown notification action: ".concat(t));
    let r = (0, T.YK)(e);
    if (!(r in n)) return void D.error("NotificationCounter: Unknown notification action: ".concat(e));
    ++n[r], ++this.actionCounters[t];
    let i = this.counters[e];
    if (null == i) return void D.error("NotificationCounter: Unknown notification type: ".concat(e));
    i.increment(t)
  }
  getAnalytics() {
    let e = this.groupCounters[T.bv.Viewed],
      t = this.groupCounters[T.bv.Clicked];
    return {
      notices_viewed: this.actionCounters[T.bv.Viewed],
      notices_clicked: this.actionCounters[T.bv.Clicked],
      notice_nudge_viewed: e[T.Vk.Nudge],
      notice_text_chat_viewed: e[T.Vk.TextChat],
      notice_voice_call_viewed: e[T.Vk.VoiceCall],
      notice_activity_viewed: e[T.Vk.Activity],
      notice_clips_viewed: e[T.Vk.Clips],
      notice_other_viewed: e[T.Vk.Other],
      notice_nudge_clicked: t[T.Vk.Nudge],
      notice_text_chat_clicked: t[T.Vk.TextChat],
      notice_voice_call_clicked: t[T.Vk.VoiceCall],
      notice_activity_clicked: t[T.Vk.Activity],
      notice_clips_clicked: t[T.Vk.Clips],
      notice_other_clicked: t[T.Vk.Other]
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
      [T.bv.Viewed]: 0,
      [T.bv.Clicked]: 0
    }), C(this, "groupCounters", {
      [T.bv.Viewed]: L.makeEmptyGroupAnalytics(),
      [T.bv.Clicked]: L.makeEmptyGroupAnalytics()
    }), C(this, "counters", L.makeCounters())
  }
}
class j {
  static makeEmptyAnalytics() {
    return {
      initialized: false,
      pinnedToggledCount: 0,
      visibleDuration: new i.G9,
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
      widget_voice_pin_toggle_count: e.pinnedToggledCount,
      widget_voice_visible_duration: e.visibleDuration.elapsed().asMilliseconds(),
      widget_voice_pinned: e.pinned,
      widget_text_pin_toggle_count: t.pinnedToggledCount,
      widget_text_visible_duration: t.visibleDuration.elapsed().asMilliseconds(),
      widget_text_pinned: t.pinned
    }
  }
  constructor() {
    C(this, "types", {
      0: j.makeEmptyAnalytics(),
      1: j.makeEmptyAnalytics()
    })
  }
}
class M {
  update() {
    let e = this.game,
      t = b.ZP.GetWindowFullscreenTypeByPid(e.pid, e.name, e.fullscreenType);
    if (t !== this.lastscreenType) {
      if (!(t in this.counters)) {
        let n = p.default.getTrackedGameByPid(e.pid);
        D.error("ScreenTypeAnalytics: Unknown screen type for ".concat(this.game.name, ": ").concat(t), {
          rawGame: this.game,
          overlayTrackedGame: n
        });
        return
      }
      this.counters[t].start(), null != this.lastscreenType && this.counters[this.lastscreenType].stop(), this.lastscreenType = t
    }
  }
  getAnalytics() {
    var e, t, n;
    let r = e => this.counters[e].elapsed().asMilliseconds(),
      i = {
        [o.Jx.UNKNOWN]: r(o.Jx.UNKNOWN),
        [o.Jx.WINDOWED]: r(o.Jx.WINDOWED),
        [o.Jx.MAXIMIZED]: r(o.Jx.MAXIMIZED),
        [o.Jx.BORDERLESS_FULLSCREEN]: r(o.Jx.BORDERLESS_FULLSCREEN),
        [o.Jx.FULLSCREEN]: r(o.Jx.FULLSCREEN),
        [o.Jx.MINIMIZED]: r(o.Jx.MINIMIZED)
      },
      a = Object.entries(i).sort((e, t) => {
        let [n, r] = e, [i, a] = t;
        return a - r
      })[0],
      s = parseInt(a[0], 10),
      l = isNaN(s) ? o.Jx.UNKNOWN : s;
    isNaN(s) && D.error("ScreenTypeAnalytics: Unknown most used screen type: ".concat(a), i);
    let c = S.c.getGameDisplayMode(null != (e = this.game.name) ? e : this.game.id);
    S.c.setGameDisplayMode(null != (t = this.game.name) ? t : this.game.id, l);
    let u = {
      screentype_unknown_duration: i[o.Jx.UNKNOWN],
      screentype_windowed_duration: i[o.Jx.WINDOWED],
      screentype_maximized_duration: i[o.Jx.MAXIMIZED],
      screentype_borderless_fullscreen_duration: i[o.Jx.BORDERLESS_FULLSCREEN],
      screentype_fullscreen_duration: i[o.Jx.FULLSCREEN],
      screentype_minimized_duration: i[o.Jx.MINIMIZED]
    };
    return P(A({}, u), {
      screentype_global_supported_duration: u.screentype_windowed_duration + u.screentype_maximized_duration + u.screentype_borderless_fullscreen_duration,
      screentype_global_unsupported_duration: u.screentype_fullscreen_duration,
      screentype_initial: o.Jx[this.game.fullscreenType],
      screentype_most_used: o.Jx[l],
      screentype_most_used_previous: null == c ? null : o.Jx[c],
      screentype_last: o.Jx[null != (n = this.lastscreenType) ? n : o.Jx.UNKNOWN],
      game_display_mode_is_adjustment_supported: b.ZP.GameDisplayModeIsGameSupported(this.game.name)
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

function k() {
  try {
    return crypto.randomUUID()
  } catch (e) {
    return D.error("OverlayUsageStatsManager: Failed to generate UUID", e), (0, r.Z)()
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
      return A({
        original_method: null != e ? e : f.gl.Disabled
      }, a)
    }
    if (null == n) return A({
      original_method: e
    }, a);
    let s = e !== n.original_method ? e : true;
    return A(P(A({}, n), {
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
    let n = new U(A({}, e));
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
      D.verbose("OVERLAY_USAGE_STATS: ".concat(e.name), t), delete U.gamesByPid[e.pid]
    }
    delete U.gamesByName[t]
  }
  setOverlayMethod(e) {
    this.overlayMethod = e, this.overlayMethodStats = this.buildOverlayMethodStats(e, this.game), D.verbose("setOverlayMethod", {
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
    return null == this.overlayMethod ? f.gl[f.gl.Disabled] : f.gl[this.overlayMethod]
  }
  async getAnalytics() {
    var e, t, n, r, i, a, o, s, c;
    let p = null != (n = this.overlayMethod) ? n : f.gl.Disabled,
      h = {
        setting_is_enabled: m.default.enabled,
        setting_method: this.getSettingMethod(),
        setting_display_user: g.default.getDisplayUserMode(),
        setting_display_name: g.default.getDisplayNameMode(),
        setting_avatar_size: g.default.getAvatarSizeMode(),
        setting_notification_position: g.default.getNotificationPositionMode(),
        setting_chat_notification: _.Z.isNotificationDisabled(T.n0.TextChat) ? "DISABLED" : "ENABLED"
      },
      E = (0, d.b6)(this.game),
      b = (0, u.G8)(this.game),
      y = null != (r = this.overlayMethodStats) ? r : this.buildOverlayMethodStats(p, this.game),
      O = null != y.any_other_method ? f.gl[y.any_other_method] : null,
      v = null != y.current_method ? f.gl[y.current_method] : null,
      S = E.enabledLegacy || E.enabledOOP;
    return {
      usage: P(A(P(A({
        event_uuid: this.uuid,
        overlay_usage_stats_version: w
      }, this.notificationAnalytics.getAnalytics(), this.widgetAnalytics.getAnalytics(), this.screenAnalytics.getAnalytics(), h), {
        overlay_status_game_enabled: S,
        overlay_status_game_source: E.source,
        game_name: null != (i = b.gameName) ? i : null,
        game_id: null != (a = b.gameId) ? a : null,
        game_exe: null != (o = b.exe) ? o : null,
        game_elevated: this.game.elevated,
        game_is_launcher: null != (s = this.game.isLauncher) && s,
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
        hardware_display_count: null != (c = await (null === l.Z || true === l.Z || null == (t = l.Z.hardware) || null == (e = t.getDisplayCount) ? true : e.call(t))) ? c : null,
        message_ack_count: this.overlayMessageAckCount,
        message_created_count: this.overlayMessageCreateCount,
        desktop_message_ack_count: this.desktopMessageAckCount,
        desktop_message_created_count: this.desktopMessageCreateCount,
        desktop_focused_duration: this.desktopFocusedTimer.elapsed().asMilliseconds(),
        desktop_focused_change_count: this.desktopFocusChangedCount,
        rtc_connection_duration: this.rtcConnectionTimer.elapsed().asMilliseconds(),
        mute_toggled_count: this.muteToggledCount,
        overlay_successfully_shown: this._successfullyShown
      }), y), {
        original_method: f.gl[y.original_method],
        any_other_method: O,
        current_method: v,
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
    for (let e of Object.values(U.gamesByPid)) e.gameFocusedTimer.stop()
  }
  static incrementConcurrentGameCount() {
    for (let e of Object.values(U.gamesByPid)) ++e.gameConcurrentGameCount
  }
  gameSetFocused(e) {
    this.gameFocusedTimer.toggle(e), e && ++this.gameFocusChangedCount
  }
  setSoundboardShown(e, t) {
    this.soundboardShownTimer.toggle(e), e && (++this.soundboardShownCount, t && ++this.soundboardKeepOpenCount)
  }
  static handleMuteToggled() {
    for (let e of Object.values(U.gamesByPid)) ++e.muteToggledCount
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
    C(this, "game", true), C(this, "uuid", true), C(this, "overlayStatus", true), C(this, "overlayMethod", true), C(this, "overlayMethodStats", true), C(this, "overlayState", true), C(this, "overlayStateRaw", true), C(this, "overlayStateReason", true), C(this, "overlayStateRawReason", true), C(this, "notificationAnalytics", true), C(this, "widgetAnalytics", true), C(this, "screenAnalytics", true), C(this, "uiUnlockedCount", true), C(this, "uiLockedCount", true), C(this, "gameFocusChangedCount", true), C(this, "gameConcurrentGameCount", true), C(this, "overlayMessageAckCount", true), C(this, "overlayMessageCreateCount", true), C(this, "gameTimer", true), C(this, "gameFocusedTimer", true), C(this, "unlockedTimer", true), C(this, "rtcConnectionTimer", true), C(this, "desktopFocusedTimer", true), C(this, "desktopFocusChangedCount", true), C(this, "desktopMessageAckCount", true), C(this, "desktopMessageCreateCount", true), C(this, "soundboardShownTimer", true), C(this, "soundboardShownCount", true), C(this, "soundboardKeepOpenCount", true), C(this, "muteToggledCount", true), C(this, "_successfullyShown", true), this.game = e, this.uuid = k(), this.overlayMethod = null, this.overlayMethodStats = null, this.overlayState = null, this.overlayStateRaw = null, this.overlayStateReason = null, this.overlayStateRawReason = null, this.notificationAnalytics = new L, this.widgetAnalytics = new j, this.uiUnlockedCount = 0, this.uiLockedCount = 0, this.gameFocusChangedCount = 0, this.gameConcurrentGameCount = 0, this.overlayMessageAckCount = 0, this.overlayMessageCreateCount = 0, this.gameTimer = i.G9.startNew(), this.gameFocusedTimer = new i.G9, this.unlockedTimer = new i.G9, this.rtcConnectionTimer = new i.G9, this.desktopFocusedTimer = new i.G9, this.desktopFocusChangedCount = 0, this.desktopMessageAckCount = 0, this.desktopMessageCreateCount = 0, this.soundboardShownTimer = new i.G9, this.soundboardShownCount = 0, this.soundboardKeepOpenCount = 0, this.muteToggledCount = 0, this._successfullyShown = false, this.screenAnalytics = new M(e), this.overlayStatus = (0, d.b6)(e), this.overlayMethod = null != (n = null == (t = this.overlayStatus) ? true : t.overlayMethod) ? n : null, this.overlayMethodStats = this.buildOverlayMethodStats(this.overlayMethod, e), U.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(), ee.hasConnection() && this.rtcConnectionTimer.start()
  }
}

function G() {
  let e = m.default.getFocusedPID();
  if (null == e || e === y.UNSET_PID || !p.default.isOverlayOOPEnabledForPid(e)) return null;
  let t = p.default.getTrackedGameByPid(e);
  return null == t || null == t.gameName || null == t.applicationId || t.state !== f.mM.OVERLAY_RENDERING ? null : {
    gameName: t.gameName,
    gameId: t.applicationId
  }
}

function Z(e) {
  for (let t of (D.verbose("handleRunningGamesChange", e), e.added)) {
    if (null != U.getByPid(t.pid)) {
      D.verbose("handleRunningGamesChange added", t, "already tracked");
      continue
    }
    U.incrementConcurrentGameCount();
    let e = U.create(t);
    D.verbose("handleRunningGamesChange added", t, e)
  }
  for (let t of e.removed) U.destroy(t), D.verbose("handleRunningGamesChange removed", t)
}

function F(e) {
  if (e.pid === y.DEV_PID) return;
  let t = U.getByPid(e.pid);
  if (D.verbose("OVERLAY_SET_INPUT_LOCKED", t), null == t) return void D.error("OVERLAY_SET_INPUT_LOCKED: Unable to find game", e, U.debug);
  t.setLocked(e.locked)
}

function B(e) {
  var t;
  if (D.verbose("OVERLAY_NOTIFICATION_EVENT", e), null == e.gameName && null == e.gameId) return;
  let n = U.getByName(null != (t = e.gameName) ? t : e.gameId);
  if (null == n) return void D.error("OVERLAY_NOTIFICATION_EVENT: Game not found.", e, U.debug);
  n.notificationAnalytics.increment(e.notificationType, e.action)
}

function V(e) {
  var t;
  if (D.verbose("OVERLAY_WIDGET_CHANGED", e), null == e.gameName && null == e.gameId) return;
  let n = U.getByName(null != (t = e.gameName) ? t : e.gameId);
  if (null == n) return void D.error("OVERLAY_WIDGET_CHANGED: Game not found", e, U.debug);
  let r = n.widgetAnalytics.getByWidget(e.widgetType);
  null != r && (r.initialized || (r.initialized = true, r.pinned = e.pinned), r.pinned !== e.pinned && ++r.pinnedToggledCount, r.pinned = e.pinned, r.visibleDuration.toggle(e.visible))
}

function H(e) {
  if (D.verbose("OVERLAY_FOCUSED", e), U.gameSetAllUnfocused(), null == e.pid || e.pid === y.DEV_PID || e.pid === y.UNSET_PID) return;
  let t = U.getByPid(e.pid);
  if (null == t) return void D.error("OVERLAY_FOCUSED: Game not found", e, U.debug);
  t.gameSetFocused(true)
}

function Y(e) {
  var t;
  if (D.verbose("SOUNDBOARD_SET_OVERLAY_ENABLED", e), e.pid === y.DEV_PID) return;
  let n = U.getByPid(e.pid);
  if (null == n) return void D.error("SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found", e, U.debug);
  n.setSoundboardShown(e.enabled, !!e.enabled && null != (t = e.keepOpen) && t)
}

function W(e) {
  var t;
  if (D.verbose("OVERLAY_MESSAGE_EVENT_ACTION", e), null == e.gameName && null == e.gameId) return;
  let n = U.getByName(null != (t = e.gameName) ? t : e.gameId);
  if (null == n) return void D.error("OVERLAY_MESSAGE_EVENT_ACTION: Game not found", e, U.debug);
  switch (e.eventType) {
    case "ack":
      ++n.overlayMessageAckCount;
      break;
    case "create":
      ++n.overlayMessageCreateCount
  }
}

function K(e) {
  D.verbose("MESSAGE_ACKED", e);
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
  D.verbose("MESSAGE_CREATE", e, Error().stack);
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
  null != t && t !== y.DEV_PID && t !== y.UNSET_PID && (D.verbose("AUDIO_TOGGLE_SELF_MUTE", e), U.handleMuteToggled())
}

function Q(e) {
  D.verbose("WINDOW_FOCUS", e);
  let t = (0, O.UU)();
  if (e.windowId !== t) return void D.verbose("WINDOW_FOCUS: Not main window", {
    action: e,
    mainWindowId: t
  });
  U.desktopSetFocused(e.focused)
}

function X(e) {
  if (e.pid === y.DEV_PID || e.pid === y.UNSET_PID) return;
  let t = U.getByPid(e.pid);
  if (null == t) return void D.error("OVERLAY_SUCCESSFULLY_SHOWN: Game not found", e, U.debug);
  t.successfullyShown = true
}

function J(e) {
  let t = U.getByPid(e.pid);
  if (null == t) return void D.error("OVERLAY_UPDATE_OVERLAY_METHOD: Game not found", e, U.debug);
  e.overlayMethod !== f.gl.Disabled && (D.verbose("OVERLAY_UPDATE_OVERLAY_METHOD", e), t.setOverlayMethod(e.overlayMethod))
}

function $(e) {
  let t = U.getByPid(e.pid);
  if (null == t) return void D.error("OVERLAY_TRACK_STATE_CHANGED: Game not found", e, U.debug);
  if (e.newState !== f.mM.OVERLAY_TEARING_DOWN) {
    if (e.reason.includes("Unknown fullscreen type")) return void t.setOverlayState(e.newState, e.reason, true);
    t.setOverlayState(e.newState, e.reason, false)
  }
}
C(U, "gamesByPid", {}), C(U, "gamesByName", {}), C(U, "desktopMainWindowHasFocus", document.hasFocus());
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
C(ee, "connections", new Set), C(ee, "previousHasConnection", false);
class et {
  static handleMessageAcked(e) {
    D.verbose("MESSAGE_ACKED", e);
    let t = h.Z.getGame();
    if (null == t) return void D.error("Game not found.");
    a.Z.dispatch({
      type: "OVERLAY_MESSAGE_EVENT_ACTION",
      eventType: "ack",
      gameName: t.name,
      gameId: t.id
    })
  }
  static handleMessageCreate(e) {
    if (e.message.state !== I.yb.SENDING) return;
    D.verbose("MESSAGE_CREATE", e, Error().stack);
    let t = h.Z.getGame();
    if (null == t) return void D.error("Game not found.");
    a.Z.dispatch({
      type: "OVERLAY_MESSAGE_EVENT_ACTION",
      eventType: "create",
      gameName: t.name,
      gameId: t.id
    })
  }
}
R && !__OVERLAY__ && setInterval(async () => {
  for (let e of Object.values(U.debug.gamesByName)) D.verbose("Game analytics", await e.getAnalytics())
}, 5e3);
class en extends Chunk147913.Z {
  constructor(...e) {
    super(...e), C(this, "actions", __OVERLAY__ ? {
      MESSAGE_ACKED: et.handleMessageAcked,
      MESSAGE_CREATE: et.handleMessageCreate
    } : {
      OVERLAY_FOCUSED: H,
      OVERLAY_NOTIFICATION_EVENT: B,
      OVERLAY_SET_INPUT_LOCKED: F,
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