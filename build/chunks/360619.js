/** Chunk was on web.js **/
/** chunk id: 360619, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AC: () => Y,
  Lu: () => q,
  NI: () => Q,
  PH: () => H,
  g2: () => Z
}), require("./560197.js"), require("./864466.js"), require("./443073.js"), require("./896048.js"), require("./446912.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk361739 = require("./361739.jsx"),
  Chunk406360 = require("./406360.js"),
  Chunk86379 = require("./86379.js"),
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

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      k(e, t, n[t])
    })
  }
  return e
}

function G(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function F(e) {
  let {
    shouldMergeGameSettings: t,
    showRedesignedThirdPartyAccessSettings: n
  } = e, r = b.A.isDeveloper, i = [{
    header: M.intl.string(M.t.cduTBL),
    settings: n ? [L.H.ACCOUNT, L.H.GAMES, L.H.PROFILE_CUSTOMIZATION, L.H.CONTENT_SOCIAL, L.H.DATA_PRIVACY, L.H.PRIVACY_FAMILY_CENTER, L.H.THIRD_PARTY_ACCESS, L.H.SESSIONS] : [L.H.ACCOUNT, L.H.GAMES, L.H.PROFILE_CUSTOMIZATION, L.H.CONTENT_SOCIAL, L.H.DATA_PRIVACY, L.H.PRIVACY_FAMILY_CENTER, L.H.AUTHORIZED_APPS, L.H.SESSIONS, L.H.CONNECTIONS, L.H.PRIVATE_BROWSING_PERK]
  }, {
    header: M.intl.string(M.t["4uOdGr"]),
    divider: true,
    settings: [L.H.PREMIUM, L.H.GUILD_BOOSTING, L.H.SUBSCRIPTIONS, L.H.GIFT_INVENTORY, L.H.BILLING]
  }, {
    header: M.intl.string(M.t.f2n1TP),
    divider: true,
    settings: [L.H.APPEARANCE, L.H.ACCESSIBILITY, L.H.VOICE_AND_VIDEO, L.H.POGGERMODE, L.H.CHAT, L.H.NOTIFICATIONS, L.H.KEYBINDS, L.H.LANGUAGE, L.H.WINDOW_SETTINGS, L.H.LINUX_SETTINGS, L.H.SETTINGS_ADVANCED]
  }, {
    divider: true,
    settings: [L.H.CHANGELOG, L.H.MERCHANDISE]
  }, {
    header: "Developer Only",
    divider: true,
    settings: r ? [L.H.EXPERIMENTS, L.H.DEVELOPER_OPTIONS] : []
  }, {
    divider: true,
    settings: [L.H.LOGOUT]
  }, {
    divider: true,
    settings: [L.H.SOCIAL_LINKS, L.H.CLIENT_DEBUG_INFO]
  }], a = {
    header: M.intl.string(M.t.SmHCFf),
    divider: true,
    settings: [L.H.ACTIVITY_PRIVACY, L.H.REGISTERED_GAMES, L.H.OVERLAY]
  };
  return t ? i : i.toSpliced(3, 0, a)
}

function B() {
  let {
    shouldMergeGameSettings: e
  } = T.X.useExperiment({
    location: "settings"
  }), {
    showRedesign: t
  } = N.X.useExperiment({
    location: "settings"
  }), n = F({
    shouldMergeGameSettings: e,
    showRedesignedThirdPartyAccessSettings: t
  });
  return r.useMemo(() => [{
    header: M.intl.string(M.t["zkoeq/"]),
    settings: [...n.map(e => {
      let {
        settings: t
      } = e;
      return t
    }).flat(1), L.H.SEARCH_NO_RESULTS]
  }], [n])
}

function H() {
  var e, t, n, a;
  let b = (0, p.IO)().length,
    N = (0, f.l)(),
    x = (0, i.bG)([I.A], () => I.A.getSearchParams()),
    L = (0, d.VT)(),
    M = (0, D.b_)(),
    {
      shouldMergeGameSettings: k
    } = T.X.useExperiment({
      location: "settings"
    }),
    U = null != (e = null == (n = S.default.getCurrentUser()) ? true : n.isStaff()) && e,
    G = (0, E.Lc)({
      location: "settings"
    }),
    V = (0, g.Rv)({
      location: "settings"
    }),
    F = (0, o.H)(),
    B = (0, _.H)({
      location: j.rE.USER_SETTINGS_SEARCH_GIFT_INVENTORY
    }),
    H = (0, i.bG)([O.A], () => O.A.hasLibraryApplication()),
    Y = (0, i.bG)([y.default], () => y.default.hasTOTPEnabled()),
    W = w.Q_.useSetting(),
    K = (0, c.A)(),
    z = null == (t = (0, u.A)()) || t,
    q = (null == (a = (0, m.G)()) ? true : a.length) > 0,
    {
      hasBlockedUsers: Z,
      hasIgnoredUsers: X
    } = (0, i.cf)([A.A], () => ({
      hasBlockedUsers: A.A.getBlockedIDs().length > 0,
      hasIgnoredUsers: A.A.getIgnoredIDs().length > 0
    })),
    Q = (0, h.fk)(),
    J = (0, C.j)("SettingRendererUtils"),
    $ = Q || J,
    {
      inputMode: ee,
      activeInputProfile: et,
      isInputProfileCustom: en
    } = (0, i.cf)([v.A], () => ({
      activeInputProfile: v.A.getActiveInputProfile(),
      inputMode: v.A.getMode(),
      isInputProfileCustom: v.A.isInputProfileCustom()
    })),
    {
      enabled: er
    } = (0, l.us)("useGenerateUserSettingsSections", {
      autoTrackExposure: false
    }),
    ei = (0, R.t0)("useGenerateUserSettingsSections"),
    ea = (0, s.i)("useGenerateUserSettingsSections");
  return r.useMemo(() => (0, P.zj)({
    unseenGiftCount: b,
    showPrepaidPaymentPastDueWarning: N,
    searchParams: x,
    numOfPendingFamilyRequests: L,
    isOverlaySupported: M,
    shouldMergeGameSettings: k,
    isStaff: U,
    isInappropriateConversationWarningEnabled: G,
    isInapproprateConversationsDefaultOn: V,
    paymentsBlocked: F,
    isEligibleForQuests: B,
    isStricterMessageRequestsEnabled: K,
    hasLibraryApplication: H,
    hasTOTPEnabled: Y,
    developerMode: W,
    isAdultUser: z,
    hasSecureFramesVerifiedUserIds: q,
    hasIgnoredUsers: X,
    hasBlockedUsers: Z,
    hasAgeGatedFeature: $,
    inputMode: ee,
    activeInputProfile: et,
    isInputProfileCustom: en,
    isChatMentionSuggestionsSettingEnabled: er,
    isRedesignedNotificationsEnabled: ei,
    isHDRAccessibilitySettingExperimentEnabled: ea
  }), [W, Z, X, H, q, Y, x, z, B, V, G, M, U, K, L, F, k, N, b, $, ee, et, en, er, ei, ea])
}

function Y(e) {
  let t = x.a.useField("searchResults"),
    n = H(),
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

function W(e, t, n) {
  return e === L.H.SEARCH_NO_RESULTS && 0 === t.size || n.has(e) || t.has(e)
}

function K(e, t, n) {
  let r = [],
    i = X(t),
    s = z(t, new Set(Array.from(null != n ? n : []).filter(e => i.has(e))));
  return e.forEach(e => {
    0 !== e.settings.length && (true === e.divider && r.push({
      section: a.Fq.DIVIDER
    }), null != e.header && r.push({
      section: a.Fq.HEADER,
      label: e.header
    }), e.settings.forEach(e => {
      r.push(V(U({}, t[e]), {
        tabPredicate: () => null == n || W(e, n, s)
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
    } = T.X.useExperiment({
      location: "settings"
    }),
    {
      showRedesign: n
    } = N.X.useExperiment({
      location: "settings"
    }),
    i = r.useMemo(() => F({
      shouldMergeGameSettings: t,
      showRedesignedThirdPartyAccessSettings: n
    }), [t, n]);
  return r.useMemo(() => K(i, e), [i, e])
}

function Z(e) {
  let t = H(),
    n = B();
  return r.useMemo(() => K(n, t, new Set(e)), [n, t, e])
}

function X(e) {
  return new Map(Object.entries(e).filter(e => {
    let [t, n] = e;
    return null != n.searchableTitles && (null == n.predicate || n.predicate()) && (null == n.unsearchable || false === n.unsearchable)
  }))
}

function Q(e) {
  return Array.from(X(e).entries()).map(e => {
    let [t, n] = e;
    return [t, n.searchableTitles]
  })
}