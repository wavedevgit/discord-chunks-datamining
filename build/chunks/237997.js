/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
let r;
n.d(t, {
  Z: () => eN
}), n(47120), n(411104);
var i, o = n(442837),
  a = n(433517),
  s = n(570140),
  l = n(284737),
  c = n(490029),
  u = n(710845),
  d = n(48481),
  f = n(131704),
  p = n(314897),
  _ = n(592125),
  h = n(984933),
  m = n(355863),
  g = n(914010),
  E = n(358085),
  v = n(145597),
  b = n(372679),
  y = n(451478),
  O = n(981631),
  S = n(987650);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
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

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = R(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let P = Object.freeze({
    selectedGuildId: null,
    selectedChannelId: null,
    displayUserMode: O.OYC.ALWAYS,
    displayNameMode: O.wC$.ALWAYS,
    avatarSizeMode: O.ipw.LARGE,
    notificationPositionMode: O._vf.TOP_LEFT,
    textChatNotifications: O.Ypu.ENABLED,
    disableExternalLinkAlert: !1,
    disablePinTutorial: !1,
    showKeybindIndicators: !0,
    disableClickableRegions: !1,
    textWidgetOpacity: S.wF.LOWER,
    showGameInviteNotification: !0,
    customInviteMessage: void 0
  }),
  w = null,
  D = {},
  x = null,
  L = new Set,
  M = !1,
  k = !1,
  j = !1,
  U = new Set,
  G = !1,
  B = new u.Z("OverlayStore");

function Z(e) {
  let t = D[e];
  return null == t && (t = D[e] = T({}, P)), t
}
let F = T({}, P),
  V = new Set(["AUDIO_SET_INPUT_DEVICE", "AUDIO_SET_INPUT_VOLUME", "AUDIO_SET_LOCAL_VIDEO_DISABLED", "AUDIO_SET_LOCAL_VOLUME", "AUDIO_SET_MODE", "AUDIO_SET_NOISE_CANCELLATION", "AUDIO_SET_NOISE_SUPPRESSION", "AUDIO_SET_OUTPUT_DEVICE", "AUDIO_SET_OUTPUT_VOLUME", "AUDIO_TOGGLE_LOCAL_MUTE", "AUDIO_TOGGLE_SELF_DEAF", "AUDIO_TOGGLE_SELF_MUTE", "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", "CATEGORY_COLLAPSE", "CATEGORY_EXPAND", "CHANNEL_ACK", "CHANNEL_PRELOAD", "GIFT_CODE_REDEEM", "GIFT_CODE_REDEEM_FAILURE", "GIFT_CODE_REDEEM_SUCCESS", "HOTSPOT_HIDE", "INVITE_MODAL_CLOSE", "LAYOUT_CREATE", "LAYOUT_CREATE_WIDGETS", "LAYOUT_DELETE_ALL_WIDGETS", "LAYOUT_DELETE_WIDGET", "LAYOUT_SET_PINNED", "LAYOUT_SET_TOP_WIDGET", "LAYOUT_UPDATE_WIDGET", "LOAD_MESSAGES", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES_SUCCESS", "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", "OVERLAY_ACTIVATE_REGION", "OVERLAY_DEACTIVATE_ALL_REGIONS", "OVERLAY_MESSAGE_EVENT_ACTION", "OVERLAY_SET_AVATAR_SIZE_MODE", "OVERLAY_SET_CLICK_ZONES", "OVERLAY_SET_DISPLAY_NAME_MODE", "OVERLAY_SET_DISPLAY_USER_MODE", "OVERLAY_SET_INPUT_LOCKED", "OVERLAY_SET_NOTIFICATION_POSITION_MODE", "OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE", "OVERLAY_SET_DISABLE_CLICKABLE_REGIONS", "OVERLAY_SET_SHOW_KEYBIND_INDICATORS", "OVERLAY_SET_GAME_INVITE_NOTIFICATION", "OVERLAY_SET_INVITE_MESSAGE", "OVERLAY_SET_TEXT_WIDGET_OPACITY", "OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN", "OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE", "PREMIUM_PAYMENT_ERROR_CLEAR", "PREMIUM_PAYMENT_MODAL_CLOSE", "PREMIUM_PAYMENT_MODAL_OPEN", "PREMIUM_PAYMENT_SUBSCRIBE_FAIL", "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS", "PREMIUM_PAYMENT_UPDATE_FAIL", "PREMIUM_PAYMENT_UPDATE_SUCCESS", "PREMIUM_REQUIRED_MODAL_CLOSE", "PREMIUM_REQUIRED_MODAL_OPEN", "PURCHASE_CONFIRMATION_MODAL_CLOSE", "PURCHASE_CONFIRMATION_MODAL_OPEN", "SKU_PURCHASE_CLEAR_ERROR", "SKU_PURCHASE_FAIL", "SKU_PURCHASE_MODAL_CLOSE", "SKU_PURCHASE_MODAL_OPEN", "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS", "SKU_PURCHASE_SHOW_CONFIRMATION_STEP", "SKU_PURCHASE_START", "SKU_PURCHASE_SUCCESS", "STREAM_CLOSE", "STREAM_START", "VOICE_CHANNEL_SELECT", "USER_SETTINGS_PROTO_ENQUEUE_UPDATE", "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY"]),
  H = new Set([...V.values(), "ACTIVITY_INVITE_MODAL_CLOSE", "CALL_DELETE", "CHANNEL_COLLAPSE", "CHANNEL_SELECT", "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", "OVERLAY_CALL_PRIVATE_CHANNEL", "OVERLAY_JOIN_GAME", "OVERLAY_NOTIFICATION_EVENT", "OVERLAY_SELECT_CALL", "OVERLAY_SET_NOT_IDLE", "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", "OVERLAY_WIDGET_CHANGED", "SOUNDBOARD_SET_OVERLAY_ENABLED", "STREAM_STOP"]);

function W(e) {
  return null == e.version && 1 === v.Tq || e.version === v.Tq || (s.Z.dispatch({
    type: "OVERLAY_INCOMPATIBLE_APP"
  }), (0, c.zP)(), !1)
}

function Y(e) {
  if ("OVERLAY_INITIALIZE" === e.type && W(e) && (j = !0), j) {
    var t, n, r, i, o;
    switch (e.type) {
      case "CHANNEL_CREATE":
      case "THREAD_CREATE":
      case "THREAD_UPDATE":
      case "CHANNEL_DELETE":
      case "THREAD_DELETE":
        let a = (0, f.kt)(e.channel);
        if (!f.AW.has(a.type)) break;
        s.Z.dispatch({
          type: e.type,
          channel: a
        });
        break;
      case "CHANNEL_UPDATES":
        s.Z.dispatch({
          type: e.type,
          channels: e.channels.map(e => (0, f.kt)(e))
        });
        break;
      case "CONNECTION_OPEN_SUPPLEMENTAL":
        e.lazyPrivateChannels = (null !== (t = e.lazyPrivateChannels) && void 0 !== t ? t : []).map(e => (0, f.kt)(e)), s.Z.dispatch(e);
        break;
      case "THREAD_LIST_SYNC":
        s.Z.dispatch(A(T({}, e), {
          threads: e.threads.map(e => (0, f.kt)(e))
        }));
        break;
      case "GUILD_CREATE":
        let l = e => (0, f.kt)(e),
          c = e.guild;
        c.channels = null !== (i = null === (n = c.channels) || void 0 === n ? void 0 : n.map(l)) && void 0 !== i ? i : null, c.threads = null === (r = c.threads) || void 0 === r ? void 0 : r.map(l), null != c.channelUpdates && (c.channelUpdates.writes = null === (o = c.channelUpdates.writes) || void 0 === o ? void 0 : o.map(l)), s.Z.dispatch({
          type: "GUILD_CREATE",
          guild: c
        });
        break;
      case "USER_SETTINGS_PROTO_UPDATE":
        s.Z.dispatch(A(T({}, e), {
          settings: {
            proto: (0, d.kI)(e.settings.type, e.settings.proto),
            type: e.settings.type
          }
        }));
        break;
      default:
        s.Z.dispatch(e)
    }
  }
}

function K(e) {
  e.isSwitchingAccount || (D = {})
}

function z(e) {
  e.userId in D && delete D[e.userId]
}

function q() {
  L.clear()
}

function Q(e) {
  let {
    focusedPID: t
  } = e;
  w = t
}

function X() {
  let e = F.selectedGuildId,
    t = F.selectedChannelId;
  if (null == e || h.ZP.hasChannels(e) && (null == t || h.ZP.hasSelectableChannel(e, t)) || (e = null, t = null), null != t && null == _.Z.getChannel(t) && (e = null, t = null), null == e && null == t && (e = g.Z.getGuildId()), null != e && null == t) {
    let n = h.ZP.getDefaultChannel(e);
    null != n && (t = n.id)
  }
  F.selectedGuildId = e, F.selectedChannelId = t
}

function J() {
  if (!__OVERLAY__) return !1;
  let e = w === (0, v.QF)(),
    t = L.has((0, v.QF)()) || U.size > 0;
  e && t ? (0, l.T_)(window, !0) : (0, l.T_)(window, !1)
}

function $() {}

function ee(e) {
  let {
    locked: t,
    pid: n
  } = e;
  t ? L.delete(n) : L.add(n), en(), J(), G = !1
}

function et(e) {
  let {
    region: t
  } = e;
  if (w !== (0, v.QF)() || U.has(t)) return !1;
  U.add(t)
}

function en() {
  if (w !== (0, v.QF)()) return !1;
  U.clear()
}

function er(e) {
  let {
    pid: t
  } = e;
  w = t, J()
}

function ei(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  F.selectedGuildId = t, F.selectedChannelId = n
}

function eo(e) {
  let {
    callId: t
  } = e;
  x = t
}

function ea() {
  x = null
}

function es() {
  if (__OVERLAY__) {
    let e = y.Z.windowSize();
    (0, v.Te)(e) || (G = !1)
  }
}

function el(e) {
  G = e.isPreviewingInGame
}

function ec(e) {
  let {
    mode: t
  } = e;
  F.displayNameMode = t
}

function eu(e) {
  let {
    mode: t
  } = e;
  F.displayUserMode = t
}

function ed(e) {
  let {
    mode: t
  } = e;
  F.avatarSizeMode = t
}

function ef(e) {
  let {
    mode: t
  } = e;
  F.notificationPositionMode = t
}

function ep(e) {
  let {
    mode: t
  } = e;
  F.textChatNotifications = t
}

function e_(e) {
  let {
    disable: t
  } = e;
  F.disableClickableRegions = t
}

function eh(e) {
  let {
    shouldShow: t
  } = e;
  F.showKeybindIndicators = t
}

function em(e) {
  let {
    message: t
  } = e, n = F.customInviteMessage !== t;
  return F.customInviteMessage = t, n
}

function eg(e) {
  let {
    opacity: t
  } = e, n = F.textWidgetOpacity !== t;
  return F.textWidgetOpacity = t, n
}

function eE(e) {
  let {
    shouldShow: t
  } = e, n = F.showGameInviteNotification !== t;
  return F.showGameInviteNotification = t, n
}

function ev() {
  F.disableExternalLinkAlert = !0
}

function eb() {
  M = !0
}

function ey() {
  s.Z.addInterceptor(e => {
    if (k || !H.has(e.type)) return !1;
    if ("CHANNEL_SELECT" === e.type) {
      let {
        guildId: t,
        channelId: n
      } = e;
      return null != n && ((0, c.lW)({
        type: O.BmY.DISPATCH,
        pid: (0, v.QF)(),
        token: (0, v.Ht)(),
        payloads: [{
          type: "CHANNEL_PRELOAD",
          guildId: t === O.ME ? null : t,
          channelId: n,
          context: O.e3s
        }, {
          type: "OVERLAY_SELECT_CHANNEL",
          guildId: t,
          channelId: n
        }]
      }), !1)
    }
    return (0, c.lW)({
      type: O.BmY.DISPATCH,
      pid: (0, v.QF)(),
      token: (0, v.Ht)(),
      payloads: [e]
    }), !V.has(e.type)
  })
}

function eO(e) {
  let t = (0, v.QF)();
  if (null == e.pid || e.pid === t) switch (e.type) {
    case O.BmY.STORAGE_SYNC:
      o.ZP.PersistedStore.initializeAll(e.states);
      break;
    case O.BmY.DISPATCH:
      null != e.payloads && (k = !0, e.payloads.forEach(e => Y(e)), k = !1)
  }
}

function eS() {
  ey(), (0, c.Ty)(eO, (0, v.Ht)()), (0, c.$j)(), (0, c.lW)({
    type: O.BmY.CONNECT,
    pid: (0, v.QF)(),
    token: (0, v.Ht)()
  })
}

function eI(e) {
  L.delete(e.previousAssociatedGamePID)
}
class eT extends(i = o.ZP.PersistedStore) {
  initialize(e) {
    if (this.waitFor(p.default), this.syncWith([p.default], () => {
        let e = p.default.getId();
        F = null != e ? Z(e) : T({}, P)
      }), __OVERLAY__) {
      if (E.isPlatformEmbedded) {
        let e = (0, b.M)();
        null == e && B.error("Overlay module failed loaded"), r = e
      }
      L.delete((0, v.QF)())
    }
    if (null != e) {
      D = e;
      let t = p.default.getId();
      null != t && (null == (F = Z(t)).textChatNotifications && (F.textChatNotifications = P.textChatNotifications), null == F.textWidgetOpacity && (F.textWidgetOpacity = P.textWidgetOpacity), null == F.disableClickableRegions && (F.disableClickableRegions = P.disableClickableRegions))
    }
  }
  getState() {
    return D
  }
  isLocked(e) {
    return !L.has(e)
  }
  isInstanceLocked() {
    return !L.has((0, v.QF)())
  }
  isInstanceFocused() {
    return w === (0, v.QF)()
  }
  isFocused(e) {
    return w === e
  }
  isPinned(e) {
    let t = m.Z.getLayout(v.qU);
    return null != t && null != t.widgets.find(t => {
      let n = m.Z.getWidget(t);
      return null != n && n.type === e && !!n.pinned
    })
  }
  getSelectedGuildId() {
    return F.selectedGuildId
  }
  getSelectedChannelId() {
    return F.selectedChannelId
  }
  getSelectedCallId() {
    return x
  }
  getDisplayUserMode() {
    return F.displayUserMode
  }
  getDisplayNameMode() {
    return F.displayNameMode
  }
  getAvatarSizeMode() {
    return F.avatarSizeMode
  }
  getNotificationPositionMode() {
    return F.notificationPositionMode
  }
  getTextChatNotificationMode() {
    return F.notificationPositionMode === O._vf.DISABLED ? O.Ypu.DISABLED : F.textChatNotifications
  }
  get showKeybindIndicators() {
    return null == F.showKeybindIndicators || F.showKeybindIndicators
  }
  get showInviteNotification() {
    return null == F.showGameInviteNotification || F.showGameInviteNotification
  }
  get disableClickableRegions() {
    return null != F.disableClickableRegions && F.disableClickableRegions
  }
  get customInviteMessage() {
    return F.customInviteMessage
  }
  getDisableExternalLinkAlert() {
    return F.disableExternalLinkAlert
  }
  getFocusedPID() {
    return w
  }
  get initialized() {
    return j
  }
  get incompatibleApp() {
    return M
  }
  getActiveRegions() {
    return U
  }
  getTextWidgetOpacity() {
    return F.textWidgetOpacity
  }
  isPreviewingInGame() {
    return G
  }
}
I(eT, "displayName", "OverlayStore"), I(eT, "persistKey", "OverlayStoreV2"), I(eT, "migrations", [() => {
  let e = T({}, a.K.get("OverlayStore")),
    {
      pinnedWidgets: t,
      positions: n,
      sizes: r,
      v: i
    } = e,
    o = C(e, ["pinnedWidgets", "positions", "sizes", "v"]);
  return T({}, P, 5 === i ? o : null)
}, e => {
  let t = p.default.getId();
  return null == e || null == t ? {} : {
    [t]: T({}, e)
  }
}]);
let eN = new eT(s.Z, {
  LOGOUT: K,
  MULTI_ACCOUNT_REMOVE_ACCOUNT: z,
  CONNECTION_CLOSED: q,
  OVERLAY_START_SESSION: eS,
  OVERLAY_INITIALIZE: Q,
  OVERLAY_READY: X,
  OVERLAY_FOCUSED: er,
  OVERLAY_SELECT_CHANNEL: ei,
  OVERLAY_SELECT_CALL: eo,
  CALL_DELETE: ea,
  LAYOUT_CREATE: $,
  OVERLAY_SET_DISPLAY_NAME_MODE: ec,
  OVERLAY_SET_DISPLAY_USER_MODE: eu,
  OVERLAY_SET_AVATAR_SIZE_MODE: ed,
  OVERLAY_SET_NOTIFICATION_POSITION_MODE: ef,
  OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE: ep,
  OVERLAY_SET_DISABLE_CLICKABLE_REGIONS: e_,
  OVERLAY_SET_SHOW_KEYBIND_INDICATORS: eh,
  OVERLAY_SET_INVITE_MESSAGE: em,
  OVERLAY_SET_GAME_INVITE_NOTIFICATION: eE,
  OVERLAY_SET_TEXT_WIDGET_OPACITY: eg,
  OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: ev,
  OVERLAY_INCOMPATIBLE_APP: eb,
  OVERLAY_SET_INPUT_LOCKED: ee,
  OVERLAY_ACTIVATE_REGION: et,
  OVERLAY_DEACTIVATE_ALL_REGIONS: en,
  OVERLAY_SET_PREVIEW_IN_GAME_MODE: el,
  WINDOW_RESIZED: es,
  OVERLAY_SET_ASSOCIATED_GAME: eI
})