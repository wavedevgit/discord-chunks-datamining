/** Chunk was on web.js **/
/** chunk id: 991346, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gj: () => z,
  Pt: () => K,
  VO: () => J,
  ji: () => et,
  q8: () => $
}), require("./836215.js"), require("./472816.js"), require("./794429.js"), require("./388685.js"), require("./467055.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk493544 = require("./493544.jsx"),
  Chunk211242 = require("./211242.js"),
  Chunk924557 = require("./924557.js"),
  Chunk706140 = require("./706140.js"),
  Chunk592204 = require("./592204.js"),
  Chunk657871 = require("./657871.js"),
  Chunk610697 = require("./610697.js"),
  Chunk880257 = require("./880257.js"),
  Chunk631885 = require("./631885.js"),
  Chunk160913 = require("./160913.js"),
  Chunk725727 = require("./725727.js"),
  Chunk787695 = require("./787695.js"),
  Chunk921157 = require("./921157.js"),
  Chunk945577 = require("./945577.js"),
  Chunk667172 = require("./667172.js"),
  Chunk237292 = require("./237292.js"),
  Chunk314897 = require("./314897.js"),
  Chunk906467 = require("./906467.js"),
  Chunk283595 = require("./283595.js"),
  Chunk131951 = require("./131951.js"),
  Chunk699516 = require("./699516.js"),
  Chunk663389 = require("./663389.js"),
  Chunk594174 = require("./594174.js"),
  Chunk128064 = require("./128064.js"),
  Chunk202527 = require("./202527.js"),
  Chunk413182 = require("./413182.js"),
  Chunk695346 = require("./695346.js"),
  Chunk526665 = require("./526665.js"),
  Chunk695463 = require("./695463.js"),
  Chunk620163 = require("./620163.jsx"),
  Chunk168308 = require("./168308.js"),
  Chunk839469 = require("./839469.js"),
  Chunk726985 = require("./726985.js"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx");

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Z(e, t, n[t])
    })
  }
  return e
}

function V(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function H(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function W(e) {
  let {
    shouldMergeGameSettings: t,
    showRedesignedThirdPartyAccessSettings: n
  } = e, r = I.Z.isDeveloper, i = [{
    header: B.intl.string(B.t.cduTBL),
    settings: n ? [U.s6.ACCOUNT, U.s6.GAMES, U.s6.PROFILE_CUSTOMIZATION, U.s6.CONTENT_SOCIAL, U.s6.DATA_PRIVACY, U.s6.PRIVACY_FAMILY_CENTER, U.s6.THIRD_PARTY_ACCESS, U.s6.SESSIONS, U.s6.CLIPS] : [U.s6.ACCOUNT, U.s6.GAMES, U.s6.PROFILE_CUSTOMIZATION, U.s6.CONTENT_SOCIAL, U.s6.DATA_PRIVACY, U.s6.PRIVACY_FAMILY_CENTER, U.s6.AUTHORIZED_APPS, U.s6.SESSIONS, U.s6.CONNECTIONS, U.s6.CLIPS]
  }, {
    header: B.intl.string(B.t["4uOdGr"]),
    divider: true,
    settings: [U.s6.PREMIUM, U.s6.GUILD_BOOSTING, U.s6.SUBSCRIPTIONS, U.s6.GIFT_INVENTORY, U.s6.BILLING]
  }, {
    header: B.intl.string(B.t.f2n1TP),
    divider: true,
    settings: [U.s6.APPEARANCE, U.s6.ACCESSIBILITY, U.s6.VOICE_AND_VIDEO, U.s6.POGGERMODE, U.s6.CHAT, U.s6.NOTIFICATIONS, U.s6.KEYBINDS, U.s6.LANGUAGE, U.s6.WINDOW_SETTINGS, U.s6.LINUX_SETTINGS, U.s6.STREAMER_MODE, U.s6.SETTINGS_ADVANCED]
  }, {
    divider: true,
    settings: [U.s6.CHANGELOG, U.s6.MERCHANDISE]
  }, {
    header: "Developer Only",
    divider: true,
    settings: r ? [U.s6.EXPERIMENTS, U.s6.DEVELOPER_OPTIONS] : []
  }, {
    divider: true,
    settings: [U.s6.LOGOUT]
  }, {
    divider: true,
    settings: [U.s6.SOCIAL_LINKS, U.s6.CLIENT_DEBUG_INFO]
  }], a = {
    header: B.intl.string(B.t.SmHCFf),
    divider: true,
    settings: [U.s6.ACTIVITY_PRIVACY, U.s6.REGISTERED_GAMES, U.s6.OVERLAY]
  };
  return t ? i : i.toSpliced(3, 0, a)
}

function Y() {
  let {
    shouldMergeGameSettings: e
  } = Chunk202527.b.useExperiment({
    location: "settings"
  }), {
    showRedesign: t
  } = Chunk413182.b.useExperiment({
    location: "settings"
  }), n = W({
    shouldMergeGameSettings: module,
    showRedesignedThirdPartyAccessSettings: exports
  });
  return Chunk473749.useMemo(() => [{
    header: Chunk388032.intl.string(Chunk388032.t["zkoeq/"]),
    settings: [...require.map(e => {
      let {
        settings: t
      } = e;
      return t
    }).flat(1), Chunk726985.s6.SEARCH_NO_RESULTS]
  }], [require])
}

function K() {
  var e, t, n, o;
  let I = (0, Chunk725727.YO)().length,
    D = (0, Chunk160913.U)(),
    j = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getSearchParams()),
    U = (0, Chunk631885.gU)(),
    B = (0, Chunk168308.bC)(),
    Z = (0, Chunk924557.w9)(),
    [F] = (0, Chunk706140.cv)(Z ? [Chunk704215.z.CLIPS_SETTINGS_BETA_TAG] : []),
    {
      shouldMergeGameSettings: V
    } = Chunk202527.b.useExperiment({
      location: "settings"
    }),
    H = (0, Chunk592204.Xo)({
      location: "settings"
    }),
    W = null != (n = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && require,
    Y = (0, Chunk237292.y0)({
      location: "settings"
    }),
    K = (0, Chunk667172.v4)({
      location: "settings"
    }),
    z = (0, Chunk211242.Q)(),
    q = (0, Chunk787695.Z)({
      location: Chunk324805.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY
    }),
    X = (0, Chunk442837.e7)([Chunk283595.Z], () => Chunk283595.Z.hasLibraryApplication()),
    Q = (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.hasTOTPEnabled()),
    J = Chunk695346.Sb.useSetting(),
    $ = (0, Chunk610697.Z)(),
    ee = null == (o = (0, Chunk880257.Z)()) || Chunk493544,
    et = (null == (t = (0, Chunk921157.s)()) ? true : exports.length) > 0,
    {
      hasBlockedUsers: en,
      hasIgnoredUsers: er
    } = (0, Chunk442837.cj)([Chunk699516.Z], () => ({
      hasBlockedUsers: Chunk699516.Z.getBlockedIDs().length > 0,
      hasIgnoredUsers: Chunk699516.Z.getIgnoredIDs().length > 0
    })),
    ei = (0, Chunk128064.pY)("SettingRendererUtils"),
    {
      inputMode: ea,
      activeInputProfile: eo,
      isInputProfileCustom: es
    } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
      activeInputProfile: Chunk131951.Z.getActiveInputProfile(),
      inputMode: Chunk131951.Z.getMode(),
      isInputProfileCustom: Chunk131951.Z.isInputProfileCustom()
    })),
    el = (0, Chunk695463.W)("useGenerateUserSettingsSections"),
    {
      enabled: ec
    } = (0, Chunk657871.zM)("useGenerateUserSettingsSections", {
      autoTrackExposure: false
    }),
    eu = (0, Chunk945577.UX)({
      location: "useGenerateUserSettingsSections"
    }),
    ed = (0, Chunk526665.gj)("useGenerateUserSettingsSections");
  return Chunk473749.useMemo(() => (0, Chunk620163.iE)({
    unseenGiftCount: Chunk906467,
    showPrepaidPaymentPastDueWarning: Chunk413182,
    searchParams: Chunk839469,
    numOfPendingFamilyRequests: Chunk726985,
    isOverlaySupported: Chunk388032,
    isClipsBetaTagShowing: F === Chunk704215.z.CLIPS_SETTINGS_BETA_TAG,
    shouldMergeGameSettings: V,
    isKeywordFilteringEnabled: H,
    isStaff: W,
    isInappropriateConversationWarningEnabled: Y,
    isInapproprateConversationsDefaultOn: K,
    paymentsBlocked: z,
    isEligibleForQuests: q,
    isStricterMessageRequestsEnabled: $,
    hasLibraryApplication: X,
    hasTOTPEnabled: Q,
    developerMode: J,
    isAdultUser: ee,
    hasSecureFramesVerifiedUserIds: et,
    hasIgnoredUsers: er,
    hasBlockedUsers: en,
    isEligibleForSensitiveContentDefaults: ei,
    inputMode: ea,
    activeInputProfile: eo,
    isInputProfileCustom: es,
    isDataUsage3PToggleEnabled: el,
    isChatMentionSuggestionsSettingEnabled: ec,
    isCrossDMSearchEnabledSettingVisible: eu,
    isRedesignedNotificationsEnabled: ed
  }), [J, F, en, er, X, et, Q, Chunk839469, ee, q, K, Y, H, Chunk388032, W, $, Chunk726985, z, V, Chunk413182, Chunk906467, ei, ea, eo, es, el, ec, eu, ed])
}

function z(e) {
  let t = j.R.useField("searchResults"),
    n = K(),
    r = n[e],
    i = Object.fromEntries(Object.entries(n).filter(e => {
      let [t, n] = e;
      return n.section === r.section
    })),
    a = Object.fromEntries(Object.entries(i).filter(e => {
      let [t, {
        parent: n,
        section: i
      }] = e;
      return null != n && i === r.section
    }).map(e => {
      let [t, {
        parent: n
      }] = e;
      return [t, n]
    })),
    o = new Set,
    s = e => {
      let t = i[e];
      if (null == t) return;
      o.add(e);
      let n = t.parent;
      null != n && s(n)
    },
    l = e => {
      for (let t of (o.add(e), Object.entries(a).filter(t => {
          let [n, r] = t;
          return r === e
        }).map(e => {
          let [t] = e;
          return t
        }))) l(t)
    };
  for (let e of t.filter(e => e in i))
    if (!o.has(e)) {
      if (null != i[e].element && null == i[e].parent) {
        o.clear();
        break
      }
      Object.values(a).includes(e) && l(e), s(e)
    } return o
}

function q(e, t, n) {
  return e === U.s6.SEARCH_NO_RESULTS && 0 === t.size || n.has(e) || t.has(e)
}

function X(e, t, n) {
  let r = [],
    i = ee(t),
    a = Q(t, new Set(Array.from(null != n ? n : []).filter(e => i.has(e))));
  return e.forEach(e => {
    0 !== e.settings.length && (true === e.divider && r.push({
      section: o.ID.DIVIDER
    }), null != e.header && r.push({
      section: o.ID.HEADER,
      label: e.header
    }), e.settings.forEach(e => {
      r.push(H(F({}, t[e]), {
        tabPredicate: () => null == n || q(e, n, a)
      }))
    }))
  }), r
}

function Q(e, t) {
  let n = new Map;
  return null != t && t.forEach(t => {
    let r = e[t].parent;
    for (; null != r && null != e[r].parent;) r = e[r].parent;
    if (null != r) {
      var i;
      let e = null != (i = n.get(r)) ? i : 0;
      n.set(r, e + 1)
    }
  }), n
}

function J() {
  let e = K(),
    {
      shouldMergeGameSettings: t
    } = Chunk202527.b.useExperiment({
      location: "settings"
    }),
    {
      showRedesign: n
    } = Chunk413182.b.useExperiment({
      location: "settings"
    }),
    i = Chunk473749.useMemo(() => W({
      shouldMergeGameSettings: exports,
      showRedesignedThirdPartyAccessSettings: require
    }), [exports, require]);
  return Chunk473749.useMemo(() => X(Chunk442837, module), [Chunk442837, module])
}

function $(e) {
  let t = K(),
    n = Y();
  return r.useMemo(() => X(n, t, new Set(e)), [n, t, e])
}

function ee(e) {
  return new Map(Object.entries(e).filter(e => {
    let [t, n] = e;
    return null != n.searchableTitles && (null == n.predicate || n.predicate()) && (null == n.unsearchable || false === n.unsearchable)
  }))
}

function et(e) {
  return Array.from(ee(e).entries()).map(e => {
    let [t, n] = e;
    return [t, n.searchableTitles]
  })
}