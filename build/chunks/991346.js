/** Chunk was on web.js **/
/** chunk id: 991346, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gj: () => Y,
  Pt: () => H,
  VO: () => q,
  ji: () => J,
  q8: () => X
}), require("./836215.js"), require("./472816.js"), require("./794429.js"), require("./388685.js"), require("./467055.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk493544 = require("./493544.jsx"),
  Chunk211242 = require("./211242.js"),
  Chunk924557 = require("./924557.js"),
  Chunk706140 = require("./706140.js"),
  Chunk704454 = require("./704454.js"),
  Chunk319828 = require("./319828.js"),
  Chunk592204 = require("./592204.js"),
  Chunk610697 = require("./610697.js"),
  Chunk880257 = require("./880257.js"),
  Chunk631885 = require("./631885.js"),
  Chunk160913 = require("./160913.js"),
  Chunk725727 = require("./725727.js"),
  Chunk977156 = require("./977156.js"),
  Chunk921157 = require("./921157.js"),
  Chunk667172 = require("./667172.js"),
  Chunk237292 = require("./237292.js"),
  Chunk314897 = require("./314897.js"),
  Chunk906467 = require("./906467.js"),
  Chunk283595 = require("./283595.js"),
  Chunk131951 = require("./131951.js"),
  Chunk699516 = require("./699516.js"),
  Chunk663389 = require("./663389.js"),
  Chunk594174 = require("./594174.js"),
  Chunk202527 = require("./202527.js"),
  Chunk413182 = require("./413182.js"),
  Chunk695346 = require("./695346.js"),
  Chunk620163 = require("./620163.jsx"),
  Chunk168308 = require("./168308.js"),
  Chunk839469 = require("./839469.js"),
  Chunk726985 = require("./726985.js"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx");

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      U(e, t, n[t])
    })
  }
  return e
}

function B(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : B(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function F(e) {
  let {
    shouldMergeGameSettings: t,
    showRedesignedThirdPartyAccessSettings: n
  } = e, r = I.Z.isDeveloper, i = [{
    header: M.intl.string(M.t.cduTBA),
    settings: n ? [j.s6.ACCOUNT, j.s6.GAMES, j.s6.PROFILE_CUSTOMIZATION, j.s6.CONTENT_SOCIAL, j.s6.DATA_PRIVACY, j.s6.PRIVACY_FAMILY_CENTER, j.s6.THIRD_PARTY_ACCESS, j.s6.SESSIONS, j.s6.CLIPS] : [j.s6.ACCOUNT, j.s6.GAMES, j.s6.PROFILE_CUSTOMIZATION, j.s6.CONTENT_SOCIAL, j.s6.DATA_PRIVACY, j.s6.PRIVACY_FAMILY_CENTER, j.s6.AUTHORIZED_APPS, j.s6.SESSIONS, j.s6.CONNECTIONS, j.s6.CLIPS]
  }, {
    header: M.intl.string(M.t["4uOdGh"]),
    divider: true,
    settings: [j.s6.PREMIUM, j.s6.GUILD_BOOSTING, j.s6.SUBSCRIPTIONS, j.s6.GIFT_INVENTORY, j.s6.BILLING]
  }, {
    header: M.intl.string(M.t.f2n1TE),
    divider: true,
    settings: [j.s6.APPEARANCE, j.s6.ACCESSIBILITY, j.s6.VOICE_AND_VIDEO, j.s6.POGGERMODE, j.s6.CHAT, j.s6.NOTIFICATIONS, j.s6.KEYBINDS, j.s6.LANGUAGE, j.s6.WINDOW_SETTINGS, j.s6.LINUX_SETTINGS, j.s6.STREAMER_MODE, j.s6.SETTINGS_ADVANCED]
  }, {
    divider: true,
    settings: [j.s6.CHANGELOG, j.s6.MERCHANDISE, j.s6.HYPESQUAD, j.s6.TOWNHALL]
  }, {
    header: "Developer Only",
    divider: true,
    settings: r ? [j.s6.EXPERIMENTS, j.s6.DEVELOPER_OPTIONS, j.s6.HOTSPOT_OPTIONS, j.s6.DISMISSIBLE_CONTENT_OPTIONS, j.s6.PAYMENT_FLOW_MODALS, j.s6.REVENUE_STORYBOOK, j.s6.VIRTUAL_CURRENCY_CONFIGURATION, j.s6.DESIGN_SYSTEMS, j.s6.INTL_TESTING, j.s6.SHOP_KEEPER, j.s6.WEB_SETTING_TREE_TOOL, j.s6.QUEST_PREVIEW_TOOL, j.s6.QUEST_MINOR_REWARD_CAPPING_CONFIG] : []
  }, {
    divider: true,
    settings: [j.s6.LOGOUT]
  }, {
    divider: true,
    settings: [j.s6.SOCIAL_LINKS, j.s6.CLIENT_DEBUG_INFO]
  }], a = {
    header: M.intl.string(M.t.SmHCFR),
    divider: true,
    settings: [j.s6.ACTIVITY_PRIVACY, j.s6.REGISTERED_GAMES, j.s6.OVERLAY]
  };
  return t ? i : i.toSpliced(3, 0, a)
}

function V() {
  let {
    shouldMergeGameSettings: e
  } = Chunk202527.b.useExperiment({
    location: "settings"
  }), {
    showRedesign: t
  } = Chunk413182.b.useExperiment({
    location: "settings"
  }), n = F({
    shouldMergeGameSettings: module,
    showRedesignedThirdPartyAccessSettings: exports
  });
  return Chunk647438.useMemo(() => [{
    header: Chunk388032.intl.string(Chunk388032.t.zkoeq6),
    settings: [...require.map(e => {
      let {
        settings: t
      } = e;
      return t
    }).flat(1), Chunk726985.s6.SEARCH_NO_RESULTS]
  }], [require])
}

function H() {
  var e, t, n, o;
  let I = (0, Chunk725727.YO)().length,
    P = (0, Chunk160913.U)(),
    L = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getProps().impressionSource),
    j = (0, Chunk631885.gU)(),
    M = (0, Chunk168308.bC)(),
    U = (0, Chunk924557.Go)(),
    [G] = (0, Chunk706140.cv)(U ? [Chunk704215.z.CLIPS_SETTINGS_BETA_TAG] : []),
    {
      shouldMergeGameSettings: B
    } = Chunk202527.b.useExperiment({
      location: "settings"
    }),
    Z = (0, Chunk592204.Xo)({
      location: "settings"
    }),
    F = null != (n = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && require,
    V = (0, Chunk237292.y0)({
      location: "settings"
    }),
    H = (0, Chunk667172.v4)({
      location: "settings"
    }),
    Y = (0, Chunk211242.Q)(),
    W = (0, Chunk977156.Z)({
      location: Chunk46140.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY
    }),
    K = (0, Chunk442837.e7)([Chunk283595.Z], () => Chunk283595.Z.hasLibraryApplication()),
    z = (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.hasTOTPEnabled()),
    q = Chunk695346.Sb.useSetting(),
    X = (0, Chunk610697.Z)(),
    {
      hypeSquadRemoved: Q
    } = Chunk319828.Z.useExperiment({
      location: "settings"
    }),
    J = null == (o = (0, Chunk880257.Z)()) || Chunk493544,
    $ = (null == (t = (0, Chunk921157.s)()) ? true : exports.length) > 0,
    {
      hasBlockedUsers: ee,
      hasIgnoredUsers: et
    } = (0, Chunk442837.cj)([Chunk699516.Z], () => ({
      hasBlockedUsers: Chunk699516.Z.getBlockedIDs().length > 0,
      hasIgnoredUsers: Chunk699516.Z.getIgnoredIDs().length > 0
    })),
    en = (0, Chunk704454.UQ)("SettingRendererUtils"),
    {
      inputMode: er,
      activeInputProfile: ei,
      isInputProfileCustom: ea
    } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
      activeInputProfile: Chunk131951.Z.getActiveInputProfile(),
      inputMode: Chunk131951.Z.getMode(),
      isInputProfileCustom: Chunk131951.Z.isInputProfileCustom()
    }));
  return Chunk647438.useMemo(() => (0, Chunk620163.i)({
    unseenGiftCount: Chunk906467,
    showPrepaidPaymentPastDueWarning: Chunk413182,
    impressionSource: Chunk839469,
    numOfPendingFamilyRequests: Chunk726985,
    isOverlaySupported: Chunk388032,
    isClipsBetaTagShowing: G === Chunk704215.z.CLIPS_SETTINGS_BETA_TAG,
    shouldMergeGameSettings: B,
    isKeywordFilteringEnabled: Z,
    isStaff: F,
    isInappropriateConversationWarningEnabled: V,
    isInapproprateConversationsDefaultOn: H,
    paymentsBlocked: Y,
    isEligibleForQuests: W,
    isStricterMessageRequestsEnabled: X,
    hasLibraryApplication: K,
    hasTOTPEnabled: z,
    developerMode: q,
    isAdultUser: J,
    hasSecureFramesVerifiedUserIds: $,
    hypeSquadRemoved: Q,
    hasIgnoredUsers: et,
    hasBlockedUsers: ee,
    isEligibleForSensitiveContentDefaults: en,
    inputMode: er,
    activeInputProfile: ei,
    isInputProfileCustom: ea
  }), [q, G, ee, et, K, $, z, Q, Chunk839469, J, W, H, V, Z, Chunk388032, F, X, Chunk726985, Y, B, Chunk413182, Chunk906467, en, er, ei, ea])
}

function Y(e) {
  let {
    searchResults: t
  } = (0, L.E)(), n = H(), r = n[e], i = Object.fromEntries(Object.entries(n).filter(e => {
    let [t, n] = e;
    return n.section === r.section
  })), a = Object.fromEntries(Object.entries(i).filter(e => {
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
  })), o = new Set, s = e => {
    let t = i[e];
    if (null == t) return;
    o.add(e);
    let n = t.parent;
    null != n && s(n)
  }, l = e => {
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

function W(e, t, n) {
  return e === j.s6.SEARCH_NO_RESULTS && 0 === t.size || n.has(e) || t.has(e)
}

function K(e, t, n) {
  let r = [],
    i = Q(t),
    a = z(t, new Set(Array.from(null != n ? n : []).filter(e => i.has(e))));
  return e.forEach(e => {
    0 !== e.settings.length && (true === e.divider && r.push({
      section: o.ID.DIVIDER
    }), null != e.header && r.push({
      section: o.ID.HEADER,
      label: e.header
    }), e.settings.forEach(e => {
      r.push(Z(G({}, t[e]), {
        tabPredicate: () => null == n || W(e, n, a)
      }))
    }))
  }), r
}

function z(e, t) {
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

function q() {
  let e = H(),
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
    i = Chunk647438.useMemo(() => F({
      shouldMergeGameSettings: exports,
      showRedesignedThirdPartyAccessSettings: require
    }), [exports, require]);
  return Chunk647438.useMemo(() => K(Chunk442837, module), [Chunk442837, module])
}

function X(e) {
  let t = H(),
    n = V();
  return r.useMemo(() => K(n, t, new Set(e)), [n, t, e])
}

function Q(e) {
  return new Map(Object.entries(e).filter(e => {
    let [t, n] = e;
    return n.section !== o.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate())
  }))
}

function J(e) {
  return Array.from(Q(e).entries()).map(e => {
    let [t, n] = e;
    return [t, n.searchableTitles]
  })
}