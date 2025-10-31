/** Chunk was on web.js **/
/** chunk id: 991346, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gj: () => K,
  Pt: () => W,
  VO: () => Q,
  ji: () => ee,
  q8: () => J
}), require("./836215.js"), require("./472816.js"), require("./794429.js"), require("./388685.js"), require("./467055.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
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
  Chunk977156 = require("./977156.js"),
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
  Chunk695463 = require("./695463.js"),
  Chunk620163 = require("./620163.jsx"),
  Chunk168308 = require("./168308.js"),
  Chunk839469 = require("./839469.js"),
  Chunk726985 = require("./726985.js"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx");

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      B(e, t, n[t])
    })
  }
  return e
}

function F(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function H(e) {
  let {
    shouldMergeGameSettings: t,
    showRedesignedThirdPartyAccessSettings: n
  } = e, r = I.Z.isDeveloper, i = [{
    header: G.intl.string(G.t.cduTBL),
    settings: n ? [k.s6.ACCOUNT, k.s6.GAMES, k.s6.PROFILE_CUSTOMIZATION, k.s6.CONTENT_SOCIAL, k.s6.DATA_PRIVACY, k.s6.PRIVACY_FAMILY_CENTER, k.s6.THIRD_PARTY_ACCESS, k.s6.SESSIONS, k.s6.CLIPS] : [k.s6.ACCOUNT, k.s6.GAMES, k.s6.PROFILE_CUSTOMIZATION, k.s6.CONTENT_SOCIAL, k.s6.DATA_PRIVACY, k.s6.PRIVACY_FAMILY_CENTER, k.s6.AUTHORIZED_APPS, k.s6.SESSIONS, k.s6.CONNECTIONS, k.s6.CLIPS]
  }, {
    header: G.intl.string(G.t["4uOdGr"]),
    divider: true,
    settings: [k.s6.PREMIUM, k.s6.GUILD_BOOSTING, k.s6.SUBSCRIPTIONS, k.s6.GIFT_INVENTORY, k.s6.BILLING]
  }, {
    header: G.intl.string(G.t.f2n1TP),
    divider: true,
    settings: [k.s6.APPEARANCE, k.s6.ACCESSIBILITY, k.s6.VOICE_AND_VIDEO, k.s6.POGGERMODE, k.s6.CHAT, k.s6.NOTIFICATIONS, k.s6.KEYBINDS, k.s6.LANGUAGE, k.s6.WINDOW_SETTINGS, k.s6.LINUX_SETTINGS, k.s6.STREAMER_MODE, k.s6.SETTINGS_ADVANCED]
  }, {
    divider: true,
    settings: [k.s6.CHANGELOG, k.s6.MERCHANDISE]
  }, {
    header: "Developer Only",
    divider: true,
    settings: r ? [k.s6.EXPERIMENTS, k.s6.DEVELOPER_OPTIONS] : []
  }, {
    divider: true,
    settings: [k.s6.LOGOUT]
  }, {
    divider: true,
    settings: [k.s6.SOCIAL_LINKS, k.s6.TEMP_DEVELOPER_EDUCATION_SIDEBAR_ITEM, k.s6.CLIENT_DEBUG_INFO]
  }], a = {
    header: G.intl.string(G.t.SmHCFf),
    divider: true,
    settings: [k.s6.ACTIVITY_PRIVACY, k.s6.REGISTERED_GAMES, k.s6.OVERLAY]
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
  }), n = H({
    shouldMergeGameSettings: module,
    showRedesignedThirdPartyAccessSettings: exports
  });
  return Chunk647438.useMemo(() => [{
    header: Chunk388032.intl.string(Chunk388032.t["zkoeq/"]),
    settings: [...require.map(e => {
      let {
        settings: t
      } = e;
      return t
    }).flat(1), Chunk726985.s6.SEARCH_NO_RESULTS]
  }], [require])
}

function W() {
  var e, t, n, o;
  let I = (0, Chunk725727.YO)().length,
    w = (0, Chunk160913.U)(),
    j = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getSearchParams()),
    k = (0, Chunk631885.gU)(),
    G = (0, Chunk168308.bC)(),
    B = (0, Chunk924557.Go)(),
    [Z] = (0, Chunk706140.cv)(B ? [Chunk704215.z.CLIPS_SETTINGS_BETA_TAG] : []),
    {
      shouldMergeGameSettings: F
    } = Chunk202527.b.useExperiment({
      location: "settings"
    }),
    V = (0, Chunk592204.Xo)({
      location: "settings"
    }),
    H = null != (n = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && require,
    Y = (0, Chunk237292.y0)({
      location: "settings"
    }),
    W = (0, Chunk667172.v4)({
      location: "settings"
    }),
    K = (0, Chunk211242.Q)(),
    z = (0, Chunk977156.Z)({
      location: Chunk46140.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY
    }),
    q = (0, Chunk442837.e7)([Chunk283595.Z], () => Chunk283595.Z.hasLibraryApplication()),
    X = (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.hasTOTPEnabled()),
    Q = Chunk695346.Sb.useSetting(),
    J = (0, Chunk610697.Z)(),
    $ = null == (o = (0, Chunk880257.Z)()) || Chunk493544,
    ee = (null == (t = (0, Chunk921157.s)()) ? true : exports.length) > 0,
    {
      hasBlockedUsers: et,
      hasIgnoredUsers: en
    } = (0, Chunk442837.cj)([Chunk699516.Z], () => ({
      hasBlockedUsers: Chunk699516.Z.getBlockedIDs().length > 0,
      hasIgnoredUsers: Chunk699516.Z.getIgnoredIDs().length > 0
    })),
    er = (0, Chunk128064.pY)("SettingRendererUtils"),
    {
      inputMode: ei,
      activeInputProfile: ea,
      isInputProfileCustom: eo
    } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
      activeInputProfile: Chunk131951.Z.getActiveInputProfile(),
      inputMode: Chunk131951.Z.getMode(),
      isInputProfileCustom: Chunk131951.Z.isInputProfileCustom()
    })),
    es = (0, Chunk695463.W)("useGenerateUserSettingsSections"),
    {
      enabled: el
    } = (0, Chunk657871.zM)("useGenerateUserSettingsSections", {
      autoTrackExposure: false
    }),
    ec = (0, Chunk945577.u5)({
      location: "useGenerateUserSettingsSections"
    });
  return Chunk647438.useMemo(() => (0, Chunk620163.iE)({
    unseenGiftCount: Chunk906467,
    showPrepaidPaymentPastDueWarning: Chunk413182,
    searchParams: Chunk839469,
    numOfPendingFamilyRequests: Chunk726985,
    isOverlaySupported: Chunk388032,
    isClipsBetaTagShowing: Z === Chunk704215.z.CLIPS_SETTINGS_BETA_TAG,
    shouldMergeGameSettings: F,
    isKeywordFilteringEnabled: V,
    isStaff: H,
    isInappropriateConversationWarningEnabled: Y,
    isInapproprateConversationsDefaultOn: W,
    paymentsBlocked: K,
    isEligibleForQuests: z,
    isStricterMessageRequestsEnabled: J,
    hasLibraryApplication: q,
    hasTOTPEnabled: X,
    developerMode: Q,
    isAdultUser: $,
    hasSecureFramesVerifiedUserIds: ee,
    hasIgnoredUsers: en,
    hasBlockedUsers: et,
    isEligibleForSensitiveContentDefaults: er,
    inputMode: ei,
    activeInputProfile: ea,
    isInputProfileCustom: eo,
    isDataUsage3PToggleEnabled: es,
    isChatMentionSuggestionsSettingEnabled: el,
    isCrossDMSearchEnabledSettingVisible: ec
  }), [Q, Z, et, en, q, ee, X, Chunk839469, $, z, W, Y, V, Chunk388032, H, J, Chunk726985, K, F, Chunk413182, Chunk906467, er, ei, ea, eo, es, el, ec])
}

function K(e) {
  let t = j.R.useField("searchResults"),
    n = W(),
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

function z(e, t, n) {
  return e === k.s6.SEARCH_NO_RESULTS && 0 === t.size || n.has(e) || t.has(e)
}

function q(e, t, n) {
  let r = [],
    i = $(t),
    a = X(t, new Set(Array.from(null != n ? n : []).filter(e => i.has(e))));
  return e.forEach(e => {
    0 !== e.settings.length && (true === e.divider && r.push({
      section: o.ID.DIVIDER
    }), null != e.header && r.push({
      section: o.ID.HEADER,
      label: e.header
    }), e.settings.forEach(e => {
      r.push(V(Z({}, t[e]), {
        tabPredicate: () => null == n || z(e, n, a)
      }))
    }))
  }), r
}

function X(e, t) {
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

function Q() {
  let e = W(),
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
    i = Chunk647438.useMemo(() => H({
      shouldMergeGameSettings: exports,
      showRedesignedThirdPartyAccessSettings: require
    }), [exports, require]);
  return Chunk647438.useMemo(() => q(Chunk442837, module), [Chunk442837, module])
}

function J(e) {
  let t = W(),
    n = Y();
  return r.useMemo(() => q(n, t, new Set(e)), [n, t, e])
}

function $(e) {
  return new Map(Object.entries(e).filter(e => {
    let [t, n] = e;
    return (n.section !== o.ID.CUSTOM || t === k.s6.TEMP_DEVELOPER_EDUCATION_SIDEBAR_ITEM) && null != n.searchableTitles && (null == n.predicate || n.predicate()) && (null == n.unsearchable || false === n.unsearchable)
  }))
}

function ee(e) {
  return Array.from($(e).entries()).map(e => {
    let [t, n] = e;
    return [t, n.searchableTitles]
  })
}