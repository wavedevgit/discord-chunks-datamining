/** Chunk was on web.js **/
/** chunk id: 991346, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gj: () => K,
  Pt: () => W,
  VO: () => X,
  ji: () => ee,
  q8: () => J
}), require("./836215.js"), require("./472816.js"), require("./794429.js"), require("./388685.js"), require("./467055.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk493544 = require("./493544.jsx"),
  Chunk651123 = require("./651123.js"),
  Chunk211242 = require("./211242.js"),
  Chunk924557 = require("./924557.js"),
  Chunk706140 = require("./706140.js"),
  Chunk657871 = require("./657871.js"),
  Chunk610697 = require("./610697.js"),
  Chunk880257 = require("./880257.js"),
  Chunk631885 = require("./631885.js"),
  Chunk160913 = require("./160913.js"),
  Chunk725727 = require("./725727.js"),
  Chunk787695 = require("./787695.js"),
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
  Chunk128064 = require("./128064.js"),
  Chunk202527 = require("./202527.js"),
  Chunk312870 = require("./312870.js"),
  Chunk413182 = require("./413182.js"),
  Chunk695346 = require("./695346.js"),
  Chunk526665 = require("./526665.js"),
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

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : B(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function H(e) {
  let {
    shouldMergeGameSettings: t,
    showRedesignedThirdPartyAccessSettings: n
  } = e, r = v.Z.isDeveloper, i = [{
    header: G.intl.string(G.t.cduTBL),
    settings: n ? [k.s6.ACCOUNT, k.s6.GAMES, k.s6.PROFILE_CUSTOMIZATION, k.s6.CONTENT_SOCIAL, k.s6.DATA_PRIVACY, k.s6.PRIVACY_FAMILY_CENTER, k.s6.THIRD_PARTY_ACCESS, k.s6.SESSIONS, k.s6.CLIPS] : [k.s6.ACCOUNT, k.s6.GAMES, k.s6.PROFILE_CUSTOMIZATION, k.s6.CONTENT_SOCIAL, k.s6.DATA_PRIVACY, k.s6.PRIVACY_FAMILY_CENTER, k.s6.AUTHORIZED_APPS, k.s6.SESSIONS, k.s6.CONNECTIONS, k.s6.CLIPS, k.s6.PRIVATE_BROWSING_PERK]
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
    settings: [k.s6.SOCIAL_LINKS, k.s6.CLIENT_DEBUG_INFO]
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
  } = P.b.useExperiment({
    location: "settings"
  }), {
    showRedesign: t
  } = R.b.useExperiment({
    location: "settings"
  }), n = H({
    shouldMergeGameSettings: e,
    showRedesignedThirdPartyAccessSettings: t
  });
  return r.useMemo(() => [{
    header: G.intl.string(G.t["zkoeq/"]),
    settings: [...n.map(e => {
      let {
        settings: t
      } = e;
      return t
    }).flat(1), k.s6.SEARCH_NO_RESULTS]
  }], [n])
}

function W() {
  var e, t, n, o;
  let v = (0, m.YO)().length,
    R = (0, h.U)(),
    M = (0, i.e7)([C.Z], () => C.Z.getSearchParams()),
    k = (0, _.gU)(),
    G = (0, j.bC)(),
    Z = (0, c.w9)(),
    [F] = (0, u.cv)(Z ? [a.z.CLIPS_SETTINGS_BETA_TAG] : []),
    {
      shouldMergeGameSettings: B
    } = P.b.useExperiment({
      location: "settings"
    }),
    V = null != (n = null == (e = A.default.getCurrentUser()) ? true : e.isStaff()) && n,
    H = (0, y.y0)({
      location: "settings"
    }),
    Y = (0, b.v4)({
      location: "settings"
    }),
    W = (0, l.Q)(),
    K = (0, g.Z)({
      location: U.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY
    }),
    z = (0, i.e7)([S.Z], () => S.Z.hasLibraryApplication()),
    q = (0, i.e7)([O.default], () => O.default.hasTOTPEnabled()),
    Q = D.Sb.useSetting(),
    X = (0, f.Z)(),
    J = null == (o = (0, p.Z)()) || o,
    $ = (null == (t = (0, E.s)()) ? true : t.length) > 0,
    {
      hasBlockedUsers: ee,
      hasIgnoredUsers: et
    } = (0, i.cj)([T.Z], () => ({
      hasBlockedUsers: T.Z.getBlockedIDs().length > 0,
      hasIgnoredUsers: T.Z.getIgnoredIDs().length > 0
    })),
    en = (0, N.pY)("SettingRendererUtils"),
    er = (0, w.s)("SettingRendererUtils"),
    ei = en || er,
    {
      inputMode: ea,
      activeInputProfile: eo,
      isInputProfileCustom: es
    } = (0, i.cj)([I.Z], () => ({
      activeInputProfile: I.Z.getActiveInputProfile(),
      inputMode: I.Z.getMode(),
      isInputProfileCustom: I.Z.isInputProfileCustom()
    })),
    {
      enabled: el
    } = (0, d.zM)("useGenerateUserSettingsSections", {
      autoTrackExposure: false
    }),
    ec = (0, x.gj)("useGenerateUserSettingsSections"),
    eu = (0, s.z)("useGenerateUserSettingsSections");
  return r.useMemo(() => (0, L.iE)({
    unseenGiftCount: v,
    showPrepaidPaymentPastDueWarning: R,
    searchParams: M,
    numOfPendingFamilyRequests: k,
    isOverlaySupported: G,
    isClipsBetaTagShowing: F === a.z.CLIPS_SETTINGS_BETA_TAG,
    shouldMergeGameSettings: B,
    isStaff: V,
    isInappropriateConversationWarningEnabled: H,
    isInapproprateConversationsDefaultOn: Y,
    paymentsBlocked: W,
    isEligibleForQuests: K,
    isStricterMessageRequestsEnabled: X,
    hasLibraryApplication: z,
    hasTOTPEnabled: q,
    developerMode: Q,
    isAdultUser: J,
    hasSecureFramesVerifiedUserIds: $,
    hasIgnoredUsers: et,
    hasBlockedUsers: ee,
    isEligibleForSensitiveContentDefaults: ei,
    inputMode: ea,
    activeInputProfile: eo,
    isInputProfileCustom: es,
    isChatMentionSuggestionsSettingEnabled: el,
    isRedesignedNotificationsEnabled: ec,
    isHDRAccessibilitySettingExperimentEnabled: eu
  }), [Q, F, ee, et, z, $, q, M, J, K, Y, H, G, V, X, k, W, B, R, v, ei, ea, eo, es, el, ec, eu])
}

function K(e) {
  let t = M.R.useField("searchResults"),
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
    a = Q(t, new Set(Array.from(null != n ? n : []).filter(e => i.has(e))));
  return e.forEach(e => {
    0 !== e.settings.length && (true === e.divider && r.push({
      section: o.ID.DIVIDER
    }), null != e.header && r.push({
      section: o.ID.HEADER,
      label: e.header
    }), e.settings.forEach(e => {
      r.push(V(F({}, t[e]), {
        tabPredicate: () => null == n || z(e, n, a)
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

function X() {
  let e = W(),
    {
      shouldMergeGameSettings: t
    } = P.b.useExperiment({
      location: "settings"
    }),
    {
      showRedesign: n
    } = R.b.useExperiment({
      location: "settings"
    }),
    i = r.useMemo(() => H({
      shouldMergeGameSettings: t,
      showRedesignedThirdPartyAccessSettings: n
    }), [t, n]);
  return r.useMemo(() => q(i, e), [i, e])
}

function J(e) {
  let t = W(),
    n = Y();
  return r.useMemo(() => q(n, t, new Set(e)), [n, t, e])
}

function $(e) {
  return new Map(Object.entries(e).filter(e => {
    let [t, n] = e;
    return null != n.searchableTitles && (null == n.predicate || n.predicate()) && (null == n.unsearchable || false === n.unsearchable)
  }))
}

function ee(e) {
  return Array.from($(e).entries()).map(e => {
    let [t, n] = e;
    return [t, n.searchableTitles]
  })
}