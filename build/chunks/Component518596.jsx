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
    } = await Promise.all([n.e("77069"), n.e("88569")]).then(n.bind(n, 245286));
    return n => (0, r.jsx)(t, g(m({}, n), {
      target: e
    }))
  }, {
    modalKey: y,
    stackingBehavior: u,
    stackNextByDefault: true
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
  let e = (0, Chunk526665.KV)("getWebUserSettingFromSection"),
    t = new Map([
      [Chunk981631.oAB.ACCOUNT, Chunk313789.n.ACCOUNT_PANEL],
      [Chunk981631.oAB.PROFILE_CUSTOMIZATION, Chunk313789.n.PROFILE_PANEL],
      [Chunk981631.oAB.CONTENT_AND_SOCIAL, Chunk313789.n.CONTENT_AND_SOCIAL_PANEL],
      [Chunk981631.oAB.DATA_AND_PRIVACY, Chunk313789.n.DATA_AND_PRIVACY_PANEL],
      [Chunk981631.oAB.FAMILY_CENTER, Chunk313789.n.FAMILY_CENTER_PANEL],
      [Chunk981631.oAB.SESSIONS, Chunk313789.n.SESSIONS_PANEL],
      [Chunk981631.oAB.AUTHORIZED_APPS, Chunk313789.n.AUTHORIZED_APPS_PANEL],
      [Chunk981631.oAB.CONNECTIONS, Chunk313789.n.CONNECTIONS_PANEL],
      [Chunk981631.oAB.CLIPS, Chunk313789.n.CLIPS_PANEL],
      [Chunk981631.oAB.CF_WARP, Chunk313789.n.PRIVATE_BROWSING_PANEL],
      [Chunk981631.oAB.PREMIUM, Chunk313789.n.NITRO_PANEL],
      [Chunk981631.oAB.GUILD_BOOSTING, Chunk313789.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL],
      [Chunk981631.oAB.SUBSCRIPTIONS, Chunk313789.n.SUBSCRIPTIONS_PANEL],
      [Chunk981631.oAB.INVENTORY, Chunk313789.n.GIFT_PANEL],
      [Chunk981631.oAB.BILLING, Chunk313789.n.BILLING_PANEL],
      [Chunk981631.oAB.APPEARANCE, Chunk313789.n.APPEARANCE_PANEL],
      [Chunk981631.oAB.ACCESSIBILITY, Chunk313789.n.ACCESSIBILITY_PANEL],
      [Chunk981631.oAB.VOICE, Chunk313789.n.VOICE_AND_VIDEO_PANEL],
      [Chunk981631.oAB.POGGERMODE, Chunk313789.n.POGGERMODE_PANEL],
      [Chunk981631.oAB.TEXT, Chunk313789.n.CHAT_PANEL],
      [Chunk981631.oAB.NOTIFICATIONS, module ? Chunk313789.n.NOTIFICATIONS_PANEL : Chunk313789.n.LEGACY_NOTIFICATIONS_SETTINGS_PANEL],
      [Chunk981631.oAB.KEYBINDS, Chunk313789.n.KEYBINDS_PANEL],
      [Chunk981631.oAB.LOCALE, Chunk313789.n.LANGUAGE_AND_TIME_PANEL],
      [Chunk981631.oAB.WINDOWS, Chunk313789.n.WINDOWS_PANEL],
      [Chunk981631.oAB.LINUX, Chunk313789.n.LINUX_PANEL],
      [Chunk981631.oAB.STREAMER_MODE, Chunk313789.n.STREAMER_MODE_PANEL],
      [Chunk981631.oAB.ADVANCED, Chunk313789.n.ADVANCED_PANEL],
      [Chunk981631.oAB.ACTIVITY_PRIVACY, Chunk313789.n.ACTIVITY_PRIVACY_PANEL],
      [Chunk981631.oAB.REGISTERED_GAMES, Chunk313789.n.REGISTERED_GAMES_PANEL],
      [Chunk981631.oAB.OVERLAY, Chunk313789.n.OVERLAY_PANEL],
      [Chunk981631.oAB.EXPERIMENTS, Chunk313789.n.EXPERIMENTS_PANEL],
      [Chunk981631.oAB.DEVELOPER_OPTIONS, Chunk313789.n.DEVELOPER_OPTIONS_PANEL]
    ]);
  return module && !(0, Chunk924557.w2)() && exports.delete(Chunk981631.oAB.CLIPS), exports
}

function T() {
  let e = I(),
    t = new Map;
  for (let [n, r] of module.entries()) exports.set(Chunk54381, require);
  return exports
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
    if (null == r) S({
      section: t.section,
      subsection: t.subsection,
      urlOrigin: n
    }), i();
    else {
      let n = null != t.subsection && "" !== t.subsection ? e.get(p.oAB[t.subsection]) : null;
      O(null != n ? n : r, {
        section: t.section,
        subsection: t.subsection
      })
    }
  } else i()
}