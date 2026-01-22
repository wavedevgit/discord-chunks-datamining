/** Chunk was on web.js **/
/** chunk id: 360619, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AC: () => z,
  Lu: () => Q,
  NI: () => ee,
  PH: () => K,
  g2: () => $
}), require("./560197.js"), require("./864466.js"), require("./443073.js"), require("./896048.js"), require("./446912.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk361739 = require("./361739.jsx"),
  Chunk406360 = require("./406360.js"),
  Chunk86379 = require("./86379.js"),
  Chunk734066 = require("./734066.js"),
  Chunk160761 = require("./160761.js"),
  Chunk968011 = require("./968011.js"),
  Chunk643015 = require("./643015.js"),
  Chunk945276 = require("./945276.js"),
  Chunk834981 = require("./834981.js"),
  Chunk155984 = require("./155984.js"),
  Chunk35587 = require("./35587.js"),
  Chunk677402 = require("./677402.js"),
  Chunk207560 = require("./207560.js"),
  Chunk818143 = require("./818143.js"),
  Chunk639555 = require("./639555.js"),
  Chunk617641 = require("./617641.js"),
  Chunk961350 = require("./961350.js"),
  Chunk540999 = require("./540999.js"),
  Chunk189081 = require("./189081.js"),
  Chunk430452 = require("./430452.js"),
  Chunk994500 = require("./994500.js"),
  Chunk628965 = require("./628965.js"),
  Chunk287809 = require("./287809.js"),
  Chunk80422 = require("./80422.js"),
  Chunk64313 = require("./64313.js"),
  Chunk897358 = require("./897358.js"),
  Chunk253932 = require("./253932.js"),
  Chunk358776 = require("./358776.js"),
  Chunk368631 = require("./368631.jsx"),
  Chunk682262 = require("./682262.js"),
  Chunk987281 = require("./987281.js"),
  Chunk531525 = require("./531525.js"),
  Chunk654487 = require("./654487.js"),
  Chunk985018 = require("./985018.jsx");

function V(e, t, n) {
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
      V(e, t, n[t])
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

function H(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : B(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Y(e) {
  let {
    shouldMergeGameSettings: t,
    showRedesignedThirdPartyAccessSettings: n
  } = e, r = v.A.isDeveloper, i = [{
    header: G.intl.string(G.t.cduTBL),
    settings: n ? [k.H.ACCOUNT, k.H.GAMES, k.H.PROFILE_CUSTOMIZATION, k.H.CONTENT_SOCIAL, k.H.DATA_PRIVACY, k.H.PRIVACY_FAMILY_CENTER, k.H.THIRD_PARTY_ACCESS, k.H.SESSIONS, k.H.CLIPS] : [k.H.ACCOUNT, k.H.GAMES, k.H.PROFILE_CUSTOMIZATION, k.H.CONTENT_SOCIAL, k.H.DATA_PRIVACY, k.H.PRIVACY_FAMILY_CENTER, k.H.AUTHORIZED_APPS, k.H.SESSIONS, k.H.CONNECTIONS, k.H.CLIPS, k.H.PRIVATE_BROWSING_PERK]
  }, {
    header: G.intl.string(G.t["4uOdGr"]),
    divider: true,
    settings: [k.H.PREMIUM, k.H.GUILD_BOOSTING, k.H.SUBSCRIPTIONS, k.H.GIFT_INVENTORY, k.H.BILLING]
  }, {
    header: G.intl.string(G.t.f2n1TP),
    divider: true,
    settings: [k.H.APPEARANCE, k.H.ACCESSIBILITY, k.H.VOICE_AND_VIDEO, k.H.POGGERMODE, k.H.CHAT, k.H.NOTIFICATIONS, k.H.KEYBINDS, k.H.LANGUAGE, k.H.WINDOW_SETTINGS, k.H.LINUX_SETTINGS, k.H.STREAMER_MODE, k.H.SETTINGS_ADVANCED]
  }, {
    divider: true,
    settings: [k.H.CHANGELOG, k.H.MERCHANDISE]
  }, {
    header: "Developer Only",
    divider: true,
    settings: r ? [k.H.EXPERIMENTS, k.H.DEVELOPER_OPTIONS] : []
  }, {
    divider: true,
    settings: [k.H.LOGOUT]
  }, {
    divider: true,
    settings: [k.H.SOCIAL_LINKS, k.H.CLIENT_DEBUG_INFO]
  }], a = {
    header: G.intl.string(G.t.SmHCFf),
    divider: true,
    settings: [k.H.ACTIVITY_PRIVACY, k.H.REGISTERED_GAMES, k.H.OVERLAY]
  };
  return t ? i : i.toSpliced(3, 0, a)
}

function W() {
  let {
    shouldMergeGameSettings: e
  } = R.X.useExperiment({
    location: "settings"
  }), {
    showRedesign: t
  } = P.X.useExperiment({
    location: "settings"
  }), n = Y({
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
    }).flat(1), k.H.SEARCH_NO_RESULTS]
  }], [n])
}

function K() {
  var e, t, n, s;
  let v = (0, m.IO)().length,
    P = (0, h.l)(),
    M = (0, i.bG)([C.A], () => C.A.getSearchParams()),
    k = (0, _.VT)(),
    G = (0, j.b_)(),
    V = (0, c.sw)(),
    [F] = (0, u.DP)(V ? [a.M.CLIPS_SETTINGS_BETA_TAG] : []),
    {
      shouldMergeGameSettings: B
    } = R.X.useExperiment({
      location: "settings"
    }),
    H = null != (e = null == (n = N.default.getCurrentUser()) ? true : n.isStaff()) && e,
    Y = (0, O.Lc)({
      location: "settings"
    }),
    W = (0, y.Rv)({
      location: "settings"
    }),
    K = (0, l.H)(),
    z = (0, g.H)({
      location: U.rE.USER_SETTINGS_SEARCH_GIFT_INVENTORY
    }),
    q = (0, i.bG)([S.A], () => S.A.hasLibraryApplication()),
    X = (0, i.bG)([A.default], () => A.default.hasTOTPEnabled()),
    Z = D.Q_.useSetting(),
    Q = (0, f.A)(),
    $ = null == (t = (0, p.A)()) || t,
    J = (null == (s = (0, b.G)()) ? true : s.length) > 0,
    {
      hasBlockedUsers: ee,
      hasIgnoredUsers: et
    } = (0, i.cf)([T.A], () => ({
      hasBlockedUsers: T.A.getBlockedIDs().length > 0,
      hasIgnoredUsers: T.A.getIgnoredIDs().length > 0
    })),
    en = (0, E.fk)(),
    er = (0, w.j)("SettingRendererUtils"),
    ei = en || er,
    {
      inputMode: ea,
      activeInputProfile: es,
      isInputProfileCustom: eo
    } = (0, i.cf)([I.A], () => ({
      activeInputProfile: I.A.getActiveInputProfile(),
      inputMode: I.A.getMode(),
      isInputProfileCustom: I.A.isInputProfileCustom()
    })),
    {
      enabled: el
    } = (0, d.us)("useGenerateUserSettingsSections", {
      autoTrackExposure: false
    }),
    ec = (0, x.t0)("useGenerateUserSettingsSections"),
    eu = (0, o.i)("useGenerateUserSettingsSections");
  return r.useMemo(() => (0, L.zj)({
    unseenGiftCount: v,
    showPrepaidPaymentPastDueWarning: P,
    searchParams: M,
    numOfPendingFamilyRequests: k,
    isOverlaySupported: G,
    isClipsBetaTagShowing: F === a.M.CLIPS_SETTINGS_BETA_TAG,
    shouldMergeGameSettings: B,
    isStaff: H,
    isInappropriateConversationWarningEnabled: Y,
    isInapproprateConversationsDefaultOn: W,
    paymentsBlocked: K,
    isEligibleForQuests: z,
    isStricterMessageRequestsEnabled: Q,
    hasLibraryApplication: q,
    hasTOTPEnabled: X,
    developerMode: Z,
    isAdultUser: $,
    hasSecureFramesVerifiedUserIds: J,
    hasIgnoredUsers: et,
    hasBlockedUsers: ee,
    hasAgeGatedFeature: ei,
    inputMode: ea,
    activeInputProfile: es,
    isInputProfileCustom: eo,
    isChatMentionSuggestionsSettingEnabled: el,
    isRedesignedNotificationsEnabled: ec,
    isHDRAccessibilitySettingExperimentEnabled: eu
  }), [Z, F, ee, et, q, J, X, M, $, z, W, Y, G, H, Q, k, K, B, P, v, ei, ea, es, eo, el, ec, eu])
}

function z(e) {
  let t = M.a.useField("searchResults"),
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
    s = new Set,
    o = e => {
      let t = i[e];
      if (null == t) return;
      s.add(e);
      let n = t.parent;
      null != n && o(n)
    },
    l = e => {
      for (let t of (s.add(e), Object.entries(a).filter(t => {
          let [n, r] = t;
          return r === e
        }).map(e => {
          let [t] = e;
          return t
        }))) l(t)
    };
  for (let e of t.filter(e => e in i))
    if (!s.has(e)) {
      if (null != i[e].element && null == i[e].parent) {
        s.clear();
        break
      }
      Object.values(a).includes(e) && l(e), o(e)
    } return s
}

function q(e, t, n) {
  return e === k.H.SEARCH_NO_RESULTS && 0 === t.size || n.has(e) || t.has(e)
}

function X(e, t, n) {
  let r = [],
    i = J(t),
    a = Z(t, new Set(Array.from(null != n ? n : []).filter(e => i.has(e))));
  return e.forEach(e => {
    0 !== e.settings.length && (true === e.divider && r.push({
      section: s.Fq.DIVIDER
    }), null != e.header && r.push({
      section: s.Fq.HEADER,
      label: e.header
    }), e.settings.forEach(e => {
      r.push(H(F({}, t[e]), {
        tabPredicate: () => null == n || q(e, n, a)
      }))
    }))
  }), r
}

function Z(e, t) {
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
  let e = K(),
    {
      shouldMergeGameSettings: t
    } = R.X.useExperiment({
      location: "settings"
    }),
    {
      showRedesign: n
    } = P.X.useExperiment({
      location: "settings"
    }),
    i = r.useMemo(() => Y({
      shouldMergeGameSettings: t,
      showRedesignedThirdPartyAccessSettings: n
    }), [t, n]);
  return r.useMemo(() => X(i, e), [i, e])
}

function $(e) {
  let t = K(),
    n = W();
  return r.useMemo(() => X(n, t, new Set(e)), [n, t, e])
}

function J(e) {
  return new Map(Object.entries(e).filter(e => {
    let [t, n] = e;
    return null != n.searchableTitles && (null == n.predicate || n.predicate()) && (null == n.unsearchable || false === n.unsearchable)
  }))
}

function ee(e) {
  return Array.from(J(e).entries()).map(e => {
    let [t, n] = e;
    return [t, n.searchableTitles]
  })
}