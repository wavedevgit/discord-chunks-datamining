/** Chunk was on web.js **/
/** chunk id: 991346, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gj: () => W,
  Pt: () => Y,
  VO: () => X,
  ji: () => $,
  q8: () => Q
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
  Chunk695463 = require("./695463.js"),
  Chunk620163 = require("./620163.jsx"),
  Chunk168308 = require("./168308.js"),
  Chunk839469 = require("./839469.js"),
  Chunk726985 = require("./726985.js"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      G(e, t, n[t])
    })
  }
  return e
}

function Z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function V(e) {
  let {
    shouldMergeGameSettings: t,
    showRedesignedThirdPartyAccessSettings: n
  } = e, r = I.Z.isDeveloper, i = [{
    header: U.intl.string(U.t.cduTBA),
    settings: n ? [M.s6.ACCOUNT, M.s6.GAMES, M.s6.PROFILE_CUSTOMIZATION, M.s6.CONTENT_SOCIAL, M.s6.DATA_PRIVACY, M.s6.PRIVACY_FAMILY_CENTER, M.s6.THIRD_PARTY_ACCESS, M.s6.SESSIONS, M.s6.CLIPS] : [M.s6.ACCOUNT, M.s6.GAMES, M.s6.PROFILE_CUSTOMIZATION, M.s6.CONTENT_SOCIAL, M.s6.DATA_PRIVACY, M.s6.PRIVACY_FAMILY_CENTER, M.s6.AUTHORIZED_APPS, M.s6.SESSIONS, M.s6.CONNECTIONS, M.s6.CLIPS]
  }, {
    header: U.intl.string(U.t["4uOdGh"]),
    divider: true,
    settings: [M.s6.PREMIUM, M.s6.GUILD_BOOSTING, M.s6.SUBSCRIPTIONS, M.s6.GIFT_INVENTORY, M.s6.BILLING]
  }, {
    header: U.intl.string(U.t.f2n1TE),
    divider: true,
    settings: [M.s6.APPEARANCE, M.s6.ACCESSIBILITY, M.s6.VOICE_AND_VIDEO, M.s6.POGGERMODE, M.s6.CHAT, M.s6.NOTIFICATIONS, M.s6.KEYBINDS, M.s6.LANGUAGE, M.s6.WINDOW_SETTINGS, M.s6.LINUX_SETTINGS, M.s6.STREAMER_MODE, M.s6.SETTINGS_ADVANCED]
  }, {
    divider: true,
    settings: [M.s6.CHANGELOG, M.s6.MERCHANDISE, M.s6.HYPESQUAD, M.s6.TOWNHALL]
  }, {
    header: "Developer Only",
    divider: true,
    settings: r ? [M.s6.EXPERIMENTS, M.s6.DEVELOPER_OPTIONS, M.s6.QUEST_PREVIEW_TOOL_2] : []
  }, {
    divider: true,
    settings: [M.s6.LOGOUT]
  }, {
    divider: true,
    settings: [M.s6.SOCIAL_LINKS, M.s6.TEMP_DEVELOPER_EDUCATION_SIDEBAR_ITEM, M.s6.CLIENT_DEBUG_INFO]
  }], a = {
    header: U.intl.string(U.t.SmHCFR),
    divider: true,
    settings: [M.s6.ACTIVITY_PRIVACY, M.s6.REGISTERED_GAMES, M.s6.OVERLAY]
  };
  return t ? i : i.toSpliced(3, 0, a)
}

function H() {
  let {
    shouldMergeGameSettings: e
  } = Chunk202527.b.useExperiment({
    location: "settings"
  }), {
    showRedesign: t
  } = Chunk413182.b.useExperiment({
    location: "settings"
  }), n = V({
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

function Y() {
  var e, t, n, o;
  let I = (0, Chunk725727.YO)().length,
    P = (0, Chunk160913.U)(),
    j = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getProps().searchParams),
    M = (0, Chunk631885.gU)(),
    U = (0, Chunk168308.bC)(),
    G = (0, Chunk924557.Go)(),
    [B] = (0, Chunk706140.cv)(G ? [Chunk704215.z.CLIPS_SETTINGS_BETA_TAG] : []),
    {
      shouldMergeGameSettings: Z
    } = Chunk202527.b.useExperiment({
      location: "settings"
    }),
    F = (0, Chunk592204.Xo)({
      location: "settings"
    }),
    V = null != (n = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && require,
    H = (0, Chunk237292.y0)({
      location: "settings"
    }),
    Y = (0, Chunk667172.v4)({
      location: "settings"
    }),
    W = (0, Chunk211242.Q)(),
    K = (0, Chunk977156.Z)({
      location: Chunk46140.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY
    }),
    z = (0, Chunk442837.e7)([Chunk283595.Z], () => Chunk283595.Z.hasLibraryApplication()),
    q = (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.hasTOTPEnabled()),
    X = Chunk695346.Sb.useSetting(),
    Q = (0, Chunk610697.Z)(),
    {
      hypeSquadRemoved: J
    } = Chunk319828.Z.useExperiment({
      location: "settings"
    }),
    $ = null == (o = (0, Chunk880257.Z)()) || Chunk493544,
    ee = (null == (t = (0, Chunk921157.s)()) ? true : exports.length) > 0,
    {
      hasBlockedUsers: et,
      hasIgnoredUsers: en
    } = (0, Chunk442837.cj)([Chunk699516.Z], () => ({
      hasBlockedUsers: Chunk699516.Z.getBlockedIDs().length > 0,
      hasIgnoredUsers: Chunk699516.Z.getIgnoredIDs().length > 0
    })),
    er = (0, Chunk704454.UQ)("SettingRendererUtils"),
    {
      inputMode: ei,
      activeInputProfile: ea,
      isInputProfileCustom: eo
    } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
      activeInputProfile: Chunk131951.Z.getActiveInputProfile(),
      inputMode: Chunk131951.Z.getMode(),
      isInputProfileCustom: Chunk131951.Z.isInputProfileCustom()
    })),
    es = (0, Chunk695463.W)("useGenerateUserSettingsSections");
  return Chunk647438.useMemo(() => (0, Chunk620163.iE)({
    unseenGiftCount: Chunk906467,
    showPrepaidPaymentPastDueWarning: Chunk413182,
    searchParams: Chunk839469,
    numOfPendingFamilyRequests: Chunk726985,
    isOverlaySupported: Chunk388032,
    isClipsBetaTagShowing: B === Chunk704215.z.CLIPS_SETTINGS_BETA_TAG,
    shouldMergeGameSettings: Z,
    isKeywordFilteringEnabled: F,
    isStaff: V,
    isInappropriateConversationWarningEnabled: H,
    isInapproprateConversationsDefaultOn: Y,
    paymentsBlocked: W,
    isEligibleForQuests: K,
    isStricterMessageRequestsEnabled: Q,
    hasLibraryApplication: z,
    hasTOTPEnabled: q,
    developerMode: X,
    isAdultUser: $,
    hasSecureFramesVerifiedUserIds: ee,
    hypeSquadRemoved: J,
    hasIgnoredUsers: en,
    hasBlockedUsers: et,
    isEligibleForSensitiveContentDefaults: er,
    inputMode: ei,
    activeInputProfile: ea,
    isInputProfileCustom: eo,
    isDataUsage3PToggleEnabled: es
  }), [X, B, et, en, z, ee, q, J, Chunk839469, $, K, Y, H, F, Chunk388032, V, Q, Chunk726985, W, Z, Chunk413182, Chunk906467, er, ei, ea, eo, es])
}

function W(e) {
  let t = j.R.useField("searchResults"),
    n = Y(),
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

function K(e, t, n) {
  return e === M.s6.SEARCH_NO_RESULTS && 0 === t.size || n.has(e) || t.has(e)
}

function z(e, t, n) {
  let r = [],
    i = J(t),
    a = q(t, new Set(Array.from(null != n ? n : []).filter(e => i.has(e))));
  return e.forEach(e => {
    0 !== e.settings.length && (true === e.divider && r.push({
      section: o.ID.DIVIDER
    }), null != e.header && r.push({
      section: o.ID.HEADER,
      label: e.header
    }), e.settings.forEach(e => {
      r.push(F(B({}, t[e]), {
        tabPredicate: () => null == n || K(e, n, a)
      }))
    }))
  }), r
}

function q(e, t) {
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

function X() {
  let e = Y(),
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
    i = Chunk647438.useMemo(() => V({
      shouldMergeGameSettings: exports,
      showRedesignedThirdPartyAccessSettings: require
    }), [exports, require]);
  return Chunk647438.useMemo(() => z(Chunk442837, module), [Chunk442837, module])
}

function Q(e) {
  let t = Y(),
    n = H();
  return r.useMemo(() => z(n, t, new Set(e)), [n, t, e])
}

function J(e) {
  return new Map(Object.entries(e).filter(e => {
    let [t, n] = e;
    return (n.section !== o.ID.CUSTOM || t === M.s6.TEMP_DEVELOPER_EDUCATION_SIDEBAR_ITEM) && null != n.searchableTitles && (null == n.predicate || n.predicate())
  }))
}

function $(e) {
  return Array.from(J(e).entries()).map(e => {
    let [t, n] = e;
    return [t, n.searchableTitles]
  })
}