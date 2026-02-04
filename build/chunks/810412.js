/** Chunk was on web.js **/
/** chunk id: 810412, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dk: () => p,
  IP: () => g,
  OverlayToggledClientSettingType: () => u,
  Q3: () => f,
  Y: () => _,
  YX: () => E,
  Z5: () => m,
  xp: () => h
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk77729 = require("./77729.js"),
  Chunk760751 = require("./760751.js"),
  Chunk383501 = require("./383501.js"),
  Chunk954571 = require("./954571.js"),
  Chunk41984 = require("./41984.js"),
  Chunk652215 = require("./652215.js"),
  u = function(e) {
    return e.OOP = "oop", e.OOP_GAME = "oop game", e.LEGACY = "legacy", e.LEGACY_GAME = "legacy game", e
  }({});

function d(e) {
  switch (e) {
    case "oop":
    case "oop game":
    default:
      return "overlay toggled - global";
    case "legacy":
    case "legacy game":
      return "overlay toggled - game"
  }
}
async function f(e, t, r) {
  var o, u, f, p, _, h;
  let m = null != r ? a.A.getDetectableGame(r) : null,
    {
      default: g
    } = n(833551),
    E = null != (o = null == g ? true : g.getMostRecentOverlayRenderMethod()) ? o : true,
    y = null != E ? l.Ue[E] : true;
  __OVERLAY__ && (y = l.Ue[l.Ue.Hook]), s.default.track(c.HAw.OVERLAY_TOGGLED, {
    enabled: e,
    setting_type: d(t),
    client_setting_type: t,
    application_id: null != (u = null == m ? true : m.id) ? u : true,
    application_name: null != (f = null == m ? true : m.name) ? f : true,
    most_recent_overlay_render_method: y,
    hardware_display_count: null != (p = await (null === i.A || true === i.A || null == (h = i.A.hardware) || null == (_ = h.getDisplayCount) ? true : _.call(h))) ? p : null
  })
}

function p(e, t) {
  let [n, i] = r.useState(e()), a = r.useRef(e);
  return r.useEffect(() => {
    a.current = e
  }, [e]), r.useEffect(() => {
    i(e => {
      let t = a.current();
      if (e.size > t.size || e.size < t.size) return t;
      for (let n of e)
        if (!t.has(n)) return t;
      for (let n of t)
        if (!e.has(n)) return t;
      return e
    })
  }, t), n
}

function _(e, t) {
  var n, r, i;
  let {
    locked: a,
    shownUserIds: l,
    liveUserIds: u,
    contentInventoryIds: d
  } = t;
  ((null != (n = null == l ? true : l.length) ? n : 0) !== 0 || (null != (r = null == u ? true : u.length) ? r : 0) !== 0 || (null != (i = null == d ? true : d.length) ? i : 0) !== 0) && s.default.track(c.HAw.WIDGET_CONTENT_SHOWN, {
    overlay_locked: a,
    widget_type: e,
    shown_user_ids: l,
    live_user_ids: u,
    content_inventory_ids: d,
    media_session_id: o.A.getMediaSessionId()
  })
}

function h(e, t) {
  let {
    pinned: n,
    opacity: r
  } = t;
  s.default.track(c.HAw.WIDGET_SETTING_UPDATED, {
    widget_type: e,
    pinned: n,
    opacity: r
  })
}
var m = function(e) {
    return e.SCREEN_SHARE = "screen share", e.CAMERA = "camera", e.MICROPHONE = "microphone", e.AUDIO = "audio", e.VOICE = "voice", e.CALL_BUTTON = "call button", e.SOUNDBOARD = "soundboard", e.GO_LIVE = "go live", e.INVITE = "invite", e.REDIRECT = "redirect", e.FRIEND_LIST = "friend list", e.FRIEND_REQUEST = "friend request", e.KEYBIND_HINT = "keybind hint", e.TEXT_CHAT = "text chat", e.FAVORITE = "favorite", e.GROUP_MANAGED = "group managed", e.TAB_SELECTED = "tab selected", e
  }({}),
  g = function(e) {
    return e.UNKNOWN = "unknown", e.ENABLED = "enabled", e.DISABLED = "disabled", e.SETTINGS_OPENED = "settings opened", e.PANEL_OPENED = "panel opened", e.OVERLAY_UNLOCKED = "overlay unlocked", e.STREAM_PREVIEWED = "stream previewed", e.INVITE_SENT = "invite sent", e.JOIN_REQUEST_SENT = "join request sent", e.PROFILE_OPENED = "profile opened", e.GUILD_PROFILE_OPENED = "guild profile opened", e.CHAT = "chat", e.ACCEPT_REQUEST = "accept request", e.DECLINE_REQUEST = "decline request", e.CANCEL_REQUEST = "cancel request", e.SEND_REQUEST = "send request", e.SEARCH = "search", e.SETTING_ADJUSTED = "setting adjusted", e.OPENED_TEXT_CHAT = "opened text chat", e.CLOSED_TEXT_CHAT = "closed text chat", e.CHANNEL_SELECTED = "channel selected", e.ADDED_TO_FAVORITES = "added to favorites", e.REMOVED_FROM_FAVORITES = "removed from favorites", e.FRIEND_TAB_SELECTED = "friend tab selected", e.VOICE_TAB_SELECTED = "voice tab selected", e.MESSAGES_TAB_SELECTED = "messages tab selected", e
  }({});

function E(e, t) {
  let {
    type: n,
    value: r,
    userId: i,
    secondaryValue: a
  } = t;
  s.default.track(c.HAw.WIDGET_INTERACTED, {
    widget_type: e,
    interaction_type: n,
    interaction_value: r,
    interaction_secondary_value: a,
    target_user_id: i,
    media_session_id: o.A.getMediaSessionId()
  })
}