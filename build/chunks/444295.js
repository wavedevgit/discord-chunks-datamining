/** Chunk was on web.js **/
/** chunk id: 444295, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JS: () => m,
  OverlayToggledClientSettingType: () => u,
  Qu: () => h,
  Ws: () => E,
  bk: () => g,
  ee: () => p,
  ou: () => f,
  zi: () => _
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk579806 = require("./579806.js"),
  Chunk77498 = require("./77498.js"),
  Chunk19780 = require("./19780.js"),
  Chunk626135 = require("./626135.js"),
  Chunk837268 = require("./837268.js"),
  Chunk981631 = require("./981631.js"),
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
  var a, u, f, p, _, m;
  let h = null != r ? o.Z.getDetectableGame(r) : null,
    {
      default: g
    } = n(371651),
    E = null != (f = null == g ? true : g.getMostRecentOverlayRenderMethod()) ? f : true,
    b = null != E ? l.gl[E] : true;
  __OVERLAY__ && (b = l.gl[l.gl.Hook]), s.default.track(c.rMx.OVERLAY_TOGGLED, {
    enabled: e,
    setting_type: d(t),
    client_setting_type: t,
    application_id: null != (p = null == h ? true : h.id) ? p : true,
    application_name: null != (_ = null == h ? true : h.name) ? _ : true,
    most_recent_overlay_render_method: b,
    hardware_display_count: null != (m = await (null === i.Z || true === i.Z || null == (u = i.Z.hardware) || null == (a = u.getDisplayCount) ? true : a.call(u))) ? m : null
  })
}

function p(e, t) {
  let [n, i] = r.useState(e()), o = r.useRef(e);
  return r.useEffect(() => {
    o.current = e
  }, [e]), r.useEffect(() => {
    i(e => {
      let t = o.current();
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
    locked: o,
    shownUserIds: l,
    liveUserIds: u,
    contentInventoryIds: d
  } = t;
  ((null != (n = null == l ? true : l.length) ? n : 0) !== 0 || (null != (r = null == u ? true : u.length) ? r : 0) !== 0 || (null != (i = null == d ? true : d.length) ? i : 0) !== 0) && s.default.track(c.rMx.WIDGET_CONTENT_SHOWN, {
    overlay_locked: o,
    widget_type: e,
    shown_user_ids: l,
    live_user_ids: u,
    content_inventory_ids: d,
    media_session_id: a.Z.getMediaSessionId()
  })
}

function m(e, t) {
  let {
    pinned: n,
    opacity: r
  } = t;
  s.default.track(c.rMx.WIDGET_SETTING_UPDATED, {
    widget_type: e,
    pinned: n,
    opacity: r
  })
}
var h = function(e) {
    return e.SCREEN_SHARE = "screen share", e.CAMERA = "camera", e.MICROPHONE = "microphone", e.AUDIO = "audio", e.VOICE = "voice", e.CALL_BUTTON = "call button", e.SOUNDBOARD = "soundboard", e.GO_LIVE = "go live", e.INVITE = "invite", e.REDIRECT = "redirect", e.FRIEND_LIST = "friend list", e.FRIEND_REQUEST = "friend request", e.KEYBIND_HINT = "keybind hint", e
  }({}),
  g = function(e) {
    return e.ENABLED = "enabled", e.DISABLED = "disabled", e.SETTINGS_OPENED = "settings opened", e.PANEL_OPENED = "panel opened", e.OVERLAY_UNLOCKED = "overlay unlocked", e.STREAM_PREVIEWED = "stream previewed", e.INVITE_SENT = "invite sent", e.JOIN_REQUEST_SENT = "join request sent", e.PROFILE_OPENED = "profile opened", e.GUILD_PROFILE_OPENED = "guild profile opened", e.CHAT = "chat", e.ACCEPT_REQUEST = "accept request", e.DECLINE_REQUEST = "decline request", e.CANCEL_REQUEST = "cancel request", e.SEND_REQUEST = "send request", e.SEARCH = "search", e.SETTING_ADJUSTED = "setting adjusted", e
  }({});

function E(e, t) {
  let {
    type: n,
    value: r,
    userId: i,
    secondaryValue: o
  } = t;
  s.default.track(c.rMx.WIDGET_INTERACTED, {
    widget_type: e,
    interaction_type: n,
    interaction_value: r,
    interaction_secondary_value: o,
    target_user_id: i,
    media_session_id: a.Z.getMediaSessionId()
  })
}