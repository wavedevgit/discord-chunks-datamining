/** Chunk was on web.js **/
/** chunk id: 684013, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./896048.js"), require("./65821.js");
var Chunk835245 = require("./835245.js"),
  Chunk73153 = require("./73153.js"),
  Chunk815706 = require("./815706.js"),
  Chunk626584 = require("./626584.js"),
  Chunk810412 = require("./810412.js"),
  Chunk93465 = require("./93465.js"),
  Chunk41984 = require("./41984.js"),
  Chunk592598 = require("./592598.js"),
  Chunk555528 = require("./555528.js"),
  Chunk157257 = require("./157257.js"),
  Chunk531685 = require("./531685.js"),
  Chunk5463 = require("./5463.js"),
  Chunk9302 = require("./9302.js"),
  Chunk391973 = require("./391973.js"),
  Chunk652215 = require("./652215.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = new Chunk626584.A("OverlayActionCreators"),
  A = {
    track(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && true !== arguments[2] && arguments[2];
      (0, a.z)(e, t, n)
    },
    overlayReady(e) {
      i.h.dispatch({
        type: "OVERLAY_READY",
        pid: e
      })
    },
    overlayMounted() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      i.h.dispatch({
        type: "OVERLAY_MOUNTED",
        nudges: t
      })
    },
    setFocusedPID(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
        r = n ? c.su.UNTRACK_FOCUS : c.su.TRACK_FOCUS;
      i.h.dispatch({
        type: "OVERLAY_FOCUSED",
        pid: e,
        windowHandle: t,
        trackMode: r
      })
    },
    setInputLocked(e, t) {
      i.h.dispatch({
        type: "OVERLAY_SET_INPUT_LOCKED",
        locked: e,
        pid: t
      })
    },
    setOverlayCrashed(e, t) {
      i.h.dispatch({
        type: "OVERLAY_CRASHED",
        pid: e,
        error: t
      })
    },
    setReloadOverlay(e) {
      i.h.dispatch({
        type: "OVERLAY_RELOAD",
        pid: e
      })
    },
    setRenderDebugMode(e, t) {
      i.h.dispatch({
        type: "OVERLAY_RENDER_DEBUG_MODE",
        enabled: e,
        mode: t
      })
    },
    clearTrackedPids() {
      i.h.dispatch({
        type: "OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS"
      })
    },
    setInstanceLocked(e) {
      __OVERLAY__ ? A.setInputLocked(e, (0, h.getPID)()) : v.error("Attempting to start an overlay session outside of the overlay context")
    },
    setEnabled(e, t) {
      i.h.dispatch({
        type: "OVERLAY_SET_ENABLED",
        legacyEnabled: e,
        oopEnabled: t
      })
    },
    selectCall(e) {
      i.h.dispatch({
        type: "OVERLAY_SELECT_CALL",
        callId: e
      })
    },
    setDisplayNameMode(e) {
      i.h.dispatch({
        type: "OVERLAY_SET_DISPLAY_NAME_MODE",
        mode: e
      })
    },
    setDisplayUserMode(e) {
      i.h.dispatch({
        type: "OVERLAY_SET_DISPLAY_USER_MODE",
        mode: e
      })
    },
    setAvatarSizeMode(e) {
      i.h.dispatch({
        type: "OVERLAY_SET_AVATAR_SIZE_MODE",
        mode: e
      })
    },
    setNotificationPositionMode(e) {
      i.h.dispatch({
        type: "OVERLAY_SET_NOTIFICATION_POSITION_MODE",
        mode: e
      })
    },
    setDisableClickableRegions(e) {
      i.h.dispatch({
        type: "OVERLAY_SET_DISABLE_CLICKABLE_REGIONS",
        disable: e
      })
    },
    setShowKeybindIndicators(e) {
      i.h.dispatch({
        type: "OVERLAY_SET_SHOW_KEYBIND_INDICATORS",
        shouldShow: e
      })
    },
    setNotificationDisabledSetting(e, t) {
      let n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
      return e === l.M.GAME_ACTIVITY && n && this.track(g.HAw.OVERLAY_GAME_INVITE_SETTINGS_UPDATED, {
        muted: t
      }), i.h.dispatch({
        type: "OVERLAY_SET_NOTIFICATION_DISABLED_SETTING",
        setting: e,
        disabled: t,
        shouldTrack: n
      })
    },
    setNotificationDisabled(e, t) {
      let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
        r = u.A.getDisabledSettingByNotificationType(e);
      if (null != r) return this.setNotificationDisabledSetting(r, t, n)
    },
    setInviteMessage(e) {
      i.h.dispatch({
        type: "OVERLAY_SET_INVITE_MESSAGE",
        message: e
      })
    },
    callPrivateChannel(e, t) {
      i.h.dispatch({
        type: "OVERLAY_CALL_PRIVATE_CHANNEL",
        channelId: e,
        ring: t
      })
    },
    setTextWidgetOpacity(e) {
      i.h.dispatch({
        type: "OVERLAY_SET_TEXT_WIDGET_OPACITY",
        opacity: e
      })
    },
    disableExternalLinkAlert() {
      i.h.dispatch({
        type: "OVERLAY_DISABLE_EXTERNAL_LINK_ALERT"
      })
    },
    startSession() {
      __OVERLAY__ ? i.h.dispatch({
        type: "OVERLAY_START_SESSION"
      }) : v.error("Attempting to start an overlay session outside of the overlay context")
    },
    activateRegion(e) {
      i.h.dispatch({
        type: "OVERLAY_ACTIVATE_REGION",
        region: e
      })
    },
    deactivateAllRegions() {
      i.h.dispatch({
        type: "OVERLAY_DEACTIVATE_ALL_REGIONS"
      })
    },
    setPreviewInGameMode(e) {
      i.h.dispatch({
        type: "OVERLAY_SET_PREVIEW_IN_GAME_MODE",
        isPreviewingInGame: e
      })
    },
    updateNotificationStatus(e) {
      let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : g.yFH.DISMISSED;
      i.h.dispatch({
        type: "OVERLAY_UPDATE_NOTIFICATION_STATUS",
        notificationId: e,
        status: t
      })
    },
    setModuleLogging(e) {
      i.h.dispatch({
        type: "OVERLAY_SET_MODULE_LOGGING",
        enabled: e
      })
    },
    setStateDebugging(e) {
      i.h.dispatch({
        type: "OVERLAY_SET_STATE_DEBUGGING",
        enabled: e
      })
    },
    notificationEvent(e, t) {
      var n, r;
      let a = f.A.getGame();
      i.h.dispatch({
        type: "OVERLAY_NOTIFICATION_EVENT",
        notificationType: e,
        action: t,
        gameName: null != (n = null == a ? true : a.name) ? n : null,
        gameId: null != (r = null == a ? true : a.id) ? r : null
      })
    },
    setPinChat(e) {
      let t = h.OVERLAY_LAYOUT_ID,
        n = d.A.getWidgetsForLayout(t),
        i = d.A.getWidgetConfig(g.uss.GUILDS),
        a = d.A.getWidgetConfig(g.uss.TEXT),
        s = d.A.getWidgetConfig(g.uss.GUILDS_TEXT),
        l = d.A.getWidgetDefaultSettings(g.uss.GUILDS_TEXT),
        c = d.A.getWidgetDefaultSettings(g.uss.GUILDS),
        u = d.A.getWidgetDefaultSettings(g.uss.TEXT);
      if ((0, o.xp)(g.uss.TEXT, {
          pinned: e
        }), 0 === n.length || null == i || null == a || null == s || null == l || null == c || null == u) return;
      let f = p.A.windowSize(),
        E = {
          width: 0,
          height: 0
        },
        b = {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        },
        v = {
          width: 312,
          height: 0
        },
        A = {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        },
        I = {
          width: 0,
          height: 0
        };
      if (n.forEach(e => {
          let {
            type: t,
            id: n,
            anchor: r,
            size: i
          } = e;
          switch (t) {
            case g.uss.TEXT:
              E = (0, _.fd)(i, f), (0, m.uv)(n);
              break;
            case g.uss.GUILDS:
              b = (0, _.NR)(r, i, f), v = (0, _.fd)(i, f), (0, m.uv)(n);
              break;
            case g.uss.GUILDS_TEXT:
              A = (0, _.NR)(r, i, f), I = (0, _.fd)(i, f), (0, m.uv)(n)
          }
        }), e) {
        let e = "auto" === I.width ? l.minSize.width : I.width;
        e -= c.minSize.width;
        let [n, i] = (0, _.M4)(A, O(y({}, I), {
          width: c.minSize.width
        }), f), [a, s] = (0, _.n7)(A, O(y({}, I), {
          width: e
        }), f, {
          x: 10,
          y: 10
        }), o = d.A.getWidgetDefaultSettings(g.uss.TEXT);
        if (null == o) throw Error("OverlayActionCreators.setPinChat: No config for TEXT exists");
        (0, m.jn)(O(y({}, o), {
          type: g.uss.TEXT,
          id: (0, r.A)(),
          size: s,
          anchor: a,
          layoutId: t
        }));
        let u = d.A.getWidgetDefaultSettings(g.uss.GUILDS);
        if (null == u) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS exists");
        (0, m.jn)(O(y({}, u), {
          type: g.uss.GUILDS,
          id: (0, r.A)(),
          size: i,
          anchor: n,
          layoutId: t
        }))
      } else {
        let e = "auto" === E.width ? u.minSize.width : E.width;
        e += c.minSize.width;
        let [n, i] = (0, _.M4)(b, {
          height: v.height,
          width: e
        }, f), a = d.A.getWidgetDefaultSettings(g.uss.GUILDS_TEXT);
        if (null == a) throw Error("OverlayActionCreators.setPinChat: No config for GUILDS_TEXT exists");
        (0, m.jn)(O(y({}, a), {
          type: g.uss.GUILDS_TEXT,
          id: (0, r.A)(),
          layoutId: t,
          anchor: n,
          size: i
        }))
      }
    },
    resetDefaultLayout(e, t) {
      null != d.A.getLayout(e) && ((0, m.IC)(e), (0, m.uF)(d.A.getDefaultLayout(e, t)))
    },
    setClickZones(e) {
      i.h.dispatch({
        type: "OVERLAY_SET_CLICK_ZONES",
        zones: e
      })
    },
    relayClickZoneClicked(e, t, n) {
      i.h.dispatch({
        type: "OVERLAY_RELAY_CLICK_ZONE_CLICKED",
        zoneName: e,
        normalizedMouseX: t,
        normalizedMouseY: n
      })
    },
    setAssociatedGame(e, t, n) {
      i.h.dispatch({
        type: "OVERLAY_SET_ASSOCIATED_GAME",
        previousAssociatedGamePID: e,
        associatedGamePID: t,
        associatedGame: n
      })
    },
    forceRenderMode(e) {
      i.h.dispatch({
        type: "OVERLAY_FORCE_RENDER_MODE",
        mode: e
      })
    },
    updateOverlayMethod: (e, t) => i.h.dispatch({
      type: "OVERLAY_UPDATE_OVERLAY_METHOD",
      pid: e,
      overlayMethod: t
    }),
    updateOverlayState(e, t, n) {
      i.h.dispatch({
        type: "OVERLAY_UPDATE_OVERLAY_STATE",
        pid: e,
        overlayState: t,
        reason: n
      })
    },
    successfullyShown(e) {
      i.h.dispatch({
        type: "OVERLAY_SUCCESSFULLY_SHOWN",
        pid: e
      })
    },
    setGpuBoostRequested(e, t) {
      i.h.dispatch({
        type: "OVERLAY_SET_GPU_BOOST_REQUESTED",
        reason: e,
        enabled: t
      })
    },
    updateTrackedGame: (e, t) => i.h.dispatch({
      type: "OVERLAY_TRACKED_GAME_UPDATE",
      pid: e,
      trackedGame: t
    }),
    trackOverlayStateChanged(e, t, n, r) {
      i.h.dispatch({
        type: "OVERLAY_TRACK_STATE_CHANGED",
        pid: e,
        oldState: t,
        newState: n,
        reason: r
      })
    },
    overlayUIFocusedPid(e, t) {
      i.h.dispatch({
        type: "OVERLAY_UI_FOCUSED_PID",
        pid: e,
        windowHandle: t
      })
    }
  },
  I = A