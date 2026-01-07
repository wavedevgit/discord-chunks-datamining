/** Chunk was on web.js **/
/** chunk id: 518596, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  USER_SETTINGS_MODAL_KEY: () => y,
  getUserSettingsSectionsByWebUserSettings: () => T,
  getWebUserSettingsByUserSettingsSections: () => I,
  openUserSettings: () => O,
  openUserSettingsFromParsedUrl: () => C
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk37234 = require("./37234.js"),
  Chunk230711 = require("./230711.js"),
  Chunk924557 = require("./924557.js"),
  Chunk996435 = require("./996435.js"),
  Chunk626135 = require("./626135.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
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
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = b(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let y = "USER_SETTINGS_MODAL_MODAL_KEY";
async function O(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
      section: p.oAB.ACCOUNT
    },
    s = arguments.length > 2 ? arguments[2] : true;
  var {
    subsection: l,
    stackingBehavior: u = "replaceAll"
  } = t, d = E(t, ["subsection", "stackingBehavior"]);
  a.Z.dispatch(m({
    type: "USER_SETTINGS_MODAL_OPEN",
    subsection: null != l ? l : null
  }, d)), (0, f.yP)("openUserSettings") ? (0, i.nfh)(y) ? c.Z.setState({
    requestedTargetKey: e
  }) : await (0, i.ZDy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("77069"), n.e("91968")]).then(n.bind(n, 245286));
    return n => (0, r.jsx)(t, g(m({}, n), {
      target: e
    }))
  }, {
    modalKey: y,
    stackingBehavior: u,
    stackNextByDefault: true,
    contextKey: i.z1l
  }) : (0, o.jN)(p.S9g.USER_SETTINGS), null == s || s()
}

function v(e) {
  let {
    section: t,
    subsection: n,
    urlOrigin: r
  } = e;
  u.default.track(p.rMx.USER_SETTINGS_URL_PARSED, {
    user_settings_section: t,
    user_settings_subsection: n,
    user_settings_url_origin: r
  })
}

function S(e) {
  let {
    section: t,
    subsection: n,
    urlOrigin: r
  } = e;
  u.default.track(p.rMx.USER_SETTINGS_URL_PARSING_FAILED, {
    user_settings_section: t,
    user_settings_subsection: n,
    user_settings_url_origin: r
  })
}

function I() {
  let e = (0, f.KV)("getWebUserSettingFromSection"),
    t = (0, f.Gl)("getWebUserSettingFromSection"),
    n = new Map([
      [p.oAB.ACCOUNT, d.n.ACCOUNT_PANEL],
      [p.oAB.PROFILE_CUSTOMIZATION, d.n.PROFILE_PANEL],
      [p.oAB.CONTENT_AND_SOCIAL, d.n.CONTENT_AND_SOCIAL_PANEL],
      [p.oAB.DATA_AND_PRIVACY, d.n.DATA_AND_PRIVACY_PANEL],
      [p.oAB.PRIVACY_AND_SAFETY, d.n.DATA_AND_PRIVACY_PANEL],
      [p.oAB.FAMILY_CENTER, d.n.FAMILY_CENTER_PANEL],
      [p.oAB.SESSIONS, d.n.SESSIONS_PANEL],
      [p.oAB.AUTHORIZED_APPS, d.n.AUTHORIZED_APPS_PANEL],
      [p.oAB.CONNECTIONS, d.n.CONNECTIONS_PANEL],
      [p.oAB.CLIPS, d.n.CLIPS_PANEL],
      [p.oAB.PRIVATE_BROWSING, d.n.PRIVATE_BROWSING_PANEL],
      [p.oAB.PREMIUM, d.n.NITRO_PANEL],
      [p.oAB.GUILD_BOOSTING, d.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL],
      [p.oAB.SUBSCRIPTIONS, d.n.SUBSCRIPTIONS_PANEL],
      [p.oAB.INVENTORY, d.n.GIFT_PANEL],
      [p.oAB.BILLING, d.n.BILLING_PANEL],
      [p.oAB.APPEARANCE, d.n.APPEARANCE_PANEL],
      [p.oAB.ACCESSIBILITY, d.n.ACCESSIBILITY_PANEL],
      [p.oAB.VOICE, d.n.VOICE_AND_VIDEO_PANEL],
      [p.oAB.POGGERMODE, d.n.POGGERMODE_PANEL],
      [p.oAB.TEXT, d.n.CHAT_PANEL],
      [p.oAB.NOTIFICATIONS, e ? d.n.NOTIFICATIONS_PANEL : d.n.LEGACY_NOTIFICATIONS_SETTINGS_PANEL],
      [p.oAB.KEYBINDS, d.n.KEYBINDS_PANEL],
      [p.oAB.LANGUAGE, d.n.LANGUAGE_AND_TIME_PANEL],
      [p.oAB.WINDOWS, d.n.WINDOWS_PANEL],
      [p.oAB.LINUX, d.n.LINUX_PANEL],
      [p.oAB.STREAMER_MODE, d.n.STREAMER_MODE_PANEL],
      [p.oAB.ADVANCED, d.n.ADVANCED_PANEL],
      [p.oAB.ACTIVITY_PRIVACY, d.n.ACTIVITY_PRIVACY_PANEL],
      [p.oAB.REGISTERED_GAMES, d.n.REGISTERED_GAMES_PANEL],
      [p.oAB.OVERLAY, d.n.OVERLAY_PANEL],
      [p.oAB.EXPERIMENTS, d.n.EXPERIMENTS_PANEL],
      [p.oAB.DEVELOPER_OPTIONS, d.n.DEVELOPER_OPTIONS_PANEL],
      [p.oAB.ACCOUNT_STANDING, d.n.ACCOUNT_STANDING_CATEGORY],
      [p.oAB.CONNECTED_GAMES, d.n.CONTENT_AND_SOCIAL_CONNECTED_GAMES_CATEGORY]
    ]);
  return e && !(0, l.w2)() && n.delete(p.oAB.CLIPS), t || n.delete(p.oAB.CONNECTED_GAMES), n
}

function T() {
  let e = I(),
    t = new Map;
  for (let [n, r] of e.entries()) t.set(r, n);
  return t
}

function C(e) {
  let {
    match: t,
    urlOrigin: n,
    analyticsLocations: r
  } = e;
  v({
    section: t.section,
    subsection: t.subsection,
    urlOrigin: n
  });
  let i = () => {
    s.Z.open(t.section, t.subsection, {
      openWithoutBackstack: false,
      searchParams: t.params,
      analyticsLocations: r
    })
  };
  if ((0, f.yP)("renderUserSettingsRedirector")) {
    let e = I(),
      r = e.get(t.section);
    if (null == r) {
      S({
        section: t.section,
        subsection: t.subsection,
        urlOrigin: n
      }), O();
      return
    } {
      let n = null != t.subsection && "" !== t.subsection ? e.get(p.oAB[t.subsection]) : null;
      O(null != n ? n : r, {
        section: t.section,
        subsection: t.subsection
      })
    }
  } else i()
}