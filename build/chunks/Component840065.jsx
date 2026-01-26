/** Chunk was on web.js **/
/** chunk id: 840065, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  USER_SETTINGS_MODAL_KEY: () => g,
  getUserSettingsSectionsByWebUserSettings: () => v,
  getWebUserSettingsByUserSettingsSections: () => O,
  openUserSettings: () => E,
  openUserSettingsFromParsedUrl: () => A
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk894858 = require("./894858.js"),
  Chunk954571 = require("./954571.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk652215 = require("./652215.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = m(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let g = "USER_SETTINGS_MODAL_MODAL_KEY";
async function E(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : true,
    o = arguments.length > 2 ? arguments[2] : true,
    [l = {
      section: u.nc_.ACCOUNT
    }, ...c] = [t, o],
    {
      subsection: d,
      stackingBehavior: p = "replaceAll"
    } = l,
    m = h(l, ["subsection", "stackingBehavior"]),
    [E] = c;
  a.h.dispatch(f({
    type: "USER_SETTINGS_MODAL_OPEN",
    subsection: null != d ? d : null
  }, m)), (0, i.kBI)(g) ? s.A.setState({
    requestedTargetKey: e
  }) : await (0, i.mMO)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("28979"), n.e("21940")]).then(n.bind(n, 796150));
    return n => (0, r.jsx)(t, _(f({}, n), {
      target: e
    }))
  }, {
    modalKey: g,
    stackingBehavior: p,
    stackNextByDefault: true,
    contextKey: i.SYi
  }), null == E || E()
}

function y(e) {
  let {
    section: t,
    subsection: n,
    urlOrigin: r
  } = e;
  o.default.track(u.HAw.USER_SETTINGS_URL_PARSED, {
    user_settings_section: t,
    user_settings_subsection: n,
    user_settings_url_origin: r
  })
}

function b(e) {
  let {
    section: t,
    subsection: n,
    urlOrigin: r
  } = e;
  o.default.track(u.HAw.USER_SETTINGS_URL_PARSING_FAILED, {
    user_settings_section: t,
    user_settings_subsection: n,
    user_settings_url_origin: r
  })
}

function O() {
  let e = (0, c.E7)("getWebUserSettingFromSection"),
    t = (0, c.WJ)("getWebUserSettingFromSection"),
    n = new Map([
      [u.nc_.ACCOUNT, l.X.ACCOUNT_PANEL],
      [u.nc_.PROFILE_CUSTOMIZATION, l.X.PROFILE_PANEL],
      [u.nc_.CONTENT_AND_SOCIAL, l.X.CONTENT_AND_SOCIAL_PANEL],
      [u.nc_.DATA_AND_PRIVACY, l.X.DATA_AND_PRIVACY_PANEL],
      [u.nc_.PRIVACY_AND_SAFETY, l.X.DATA_AND_PRIVACY_PANEL],
      [u.nc_.FAMILY_CENTER, l.X.FAMILY_CENTER_PANEL],
      [u.nc_.SESSIONS, l.X.SESSIONS_PANEL],
      [u.nc_.AUTHORIZED_APPS, l.X.AUTHORIZED_APPS_PANEL],
      [u.nc_.CONNECTIONS, l.X.CONNECTIONS_PANEL],
      [u.nc_.CLIPS, l.X.CLIPS_PANEL],
      [u.nc_.PRIVATE_BROWSING, l.X.PRIVATE_BROWSING_PANEL],
      [u.nc_.PREMIUM, l.X.NITRO_PANEL],
      [u.nc_.GUILD_BOOSTING, l.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL],
      [u.nc_.SUBSCRIPTIONS, l.X.SUBSCRIPTIONS_PANEL],
      [u.nc_.INVENTORY, l.X.GIFT_PANEL],
      [u.nc_.BILLING, l.X.BILLING_PANEL],
      [u.nc_.APPEARANCE, l.X.APPEARANCE_PANEL],
      [u.nc_.ACCESSIBILITY, l.X.ACCESSIBILITY_PANEL],
      [u.nc_.VOICE, l.X.VOICE_AND_VIDEO_PANEL],
      [u.nc_.POGGERMODE, l.X.POGGERMODE_PANEL],
      [u.nc_.TEXT, l.X.CHAT_PANEL],
      [u.nc_.NOTIFICATIONS, e ? l.X.NOTIFICATIONS_PANEL : l.X.LEGACY_NOTIFICATIONS_SETTINGS_PANEL],
      [u.nc_.KEYBINDS, l.X.KEYBINDS_PANEL],
      [u.nc_.LANGUAGE, l.X.LANGUAGE_AND_TIME_PANEL],
      [u.nc_.WINDOWS, l.X.WINDOWS_PANEL],
      [u.nc_.LINUX, l.X.LINUX_PANEL],
      [u.nc_.STREAMER_MODE, l.X.STREAMER_MODE_PANEL],
      [u.nc_.ADVANCED, l.X.ADVANCED_PANEL],
      [u.nc_.ACTIVITY_PRIVACY, l.X.ACTIVITY_PRIVACY_PANEL],
      [u.nc_.REGISTERED_GAMES, l.X.REGISTERED_GAMES_PANEL],
      [u.nc_.OVERLAY, l.X.OVERLAY_PANEL],
      [u.nc_.EXPERIMENTS, l.X.EXPERIMENTS_PANEL],
      [u.nc_.DEVELOPER_OPTIONS, l.X.DEVELOPER_OPTIONS_PANEL],
      [u.nc_.ACCOUNT_STANDING, l.X.ACCOUNT_STANDING_CATEGORY],
      [u.nc_.CONNECTED_GAMES, l.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_CATEGORY]
    ]);
  return t || n.delete(u.nc_.CONNECTED_GAMES), n
}

function v() {
  let e = O(),
    t = new Map;
  for (let [n, r] of e.entries()) t.set(r, n);
  return t
}

function A(e) {
  let {
    match: t,
    urlOrigin: n,
    analyticsLocations: r
  } = e;
  y({
    section: t.section,
    subsection: t.subsection,
    urlOrigin: n
  });
  let i = O(),
    a = i.get(t.section);
  if (null == a) {
    b({
      section: t.section,
      subsection: t.subsection,
      urlOrigin: n
    }), E();
    return
  } {
    let e = null != t.subsection && "" !== t.subsection ? i.get(u.nc_[t.subsection]) : null;
    E(null != e ? e : a, {
      section: t.section,
      subsection: t.subsection,
      analyticsLocations: r
    })
  }
}