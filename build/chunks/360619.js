/** Chunk was on 5606 **/
/** chunk id: 360619, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AC: () => U,
  Lu: () => H,
  NI: () => F,
  PH: () => G,
  g2: () => B
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
  Chunk368631 = require("./368631.jsx"),
  Chunk682262 = require("./682262.js"),
  Chunk987281 = require("./987281.js"),
  Chunk531525 = require("./531525.js"),
  Chunk654487 = require("./654487.js"),
  Chunk985018 = require("./985018.jsx");

function M(e) {
  let {
    shouldMergeGameSettings: t,
    showRedesignedThirdPartyAccessSettings: n
  } = e, r = E.A.isDeveloper, i = [{
    header: L.intl.string(L.t.cduTBL),
    settings: n ? [D.H.ACCOUNT, D.H.GAMES, D.H.PROFILE_CUSTOMIZATION, D.H.CONTENT_SOCIAL, D.H.DATA_PRIVACY, D.H.PRIVACY_FAMILY_CENTER, D.H.THIRD_PARTY_ACCESS, D.H.SESSIONS] : [D.H.ACCOUNT, D.H.GAMES, D.H.PROFILE_CUSTOMIZATION, D.H.CONTENT_SOCIAL, D.H.DATA_PRIVACY, D.H.PRIVACY_FAMILY_CENTER, D.H.AUTHORIZED_APPS, D.H.SESSIONS, D.H.CONNECTIONS, D.H.PRIVATE_BROWSING_PERK]
  }, {
    header: L.intl.string(L.t["4uOdGr"]),
    divider: true,
    settings: [D.H.PREMIUM, D.H.GUILD_BOOSTING, D.H.SUBSCRIPTIONS, D.H.GIFT_INVENTORY, D.H.BILLING]
  }, {
    header: L.intl.string(L.t.f2n1TP),
    divider: true,
    settings: [D.H.APPEARANCE, D.H.ACCESSIBILITY, D.H.VOICE_AND_VIDEO, D.H.POGGERMODE, D.H.CHAT, D.H.KEYBINDS, D.H.LANGUAGE, D.H.WINDOW_SETTINGS, D.H.LINUX_SETTINGS, D.H.SETTINGS_ADVANCED]
  }, {
    divider: true,
    settings: [D.H.CHANGELOG, D.H.MERCHANDISE]
  }, {
    header: "Developer Only",
    divider: true,
    settings: r ? [D.H.EXPERIMENTS, D.H.DEVELOPER_OPTIONS] : []
  }, {
    divider: true,
    settings: [D.H.LOGOUT]
  }, {
    divider: true,
    settings: [D.H.SOCIAL_LINKS, D.H.CLIENT_DEBUG_INFO]
  }], l = {
    header: L.intl.string(L.t.SmHCFf),
    divider: true,
    settings: [D.H.ACTIVITY_PRIVACY, D.H.REGISTERED_GAMES, D.H.OVERLAY]
  };
  return t ? i : i.toSpliced(3, 0, l)
}

function G() {
  var e, t, n, l;
  let E = (0, _.IO)().length,
    S = (0, p.l)(),
    R = (0, i.bG)([y.A], () => y.A.getSearchParams()),
    D = (0, u.VT)(),
    L = (0, P.b_)(),
    {
      shouldMergeGameSettings: M
    } = T.X.useExperiment({
      location: "settings"
    }),
    G = null != (e = null == (n = j.default.getCurrentUser()) ? true : n.isStaff()) && e,
    U = (0, h.Lc)({
      location: "settings"
    }),
    k = (0, b.Rv)({
      location: "settings"
    }),
    H = (0, a.H)(),
    B = (0, m.H)({
      location: w.rE.USER_SETTINGS_SEARCH_GIFT_INVENTORY
    }),
    V = (0, i.bG)([x.A], () => x.A.hasLibraryApplication()),
    F = (0, i.bG)([A.default], () => A.default.hasTOTPEnabled()),
    Y = I.Q_.useSetting(),
    W = (0, c.A)(),
    K = null == (t = (0, d.A)()) || t,
    z = (null == (l = (0, f.G)()) ? true : l.length) > 0,
    {
      hasBlockedUsers: Z,
      hasIgnoredUsers: q
    } = (0, i.cf)([C.A], () => ({
      hasBlockedUsers: C.A.getBlockedIDs().length > 0,
      hasIgnoredUsers: C.A.getIgnoredIDs().length > 0
    })),
    X = (0, g.fk)(),
    J = (0, v.j)("SettingRendererUtils"),
    Q = X || J,
    {
      inputMode: $,
      activeInputProfile: ee,
      isInputProfileCustom: et
    } = (0, i.cf)([O.A], () => ({
      activeInputProfile: O.A.getActiveInputProfile(),
      inputMode: O.A.getMode(),
      isInputProfileCustom: O.A.isInputProfileCustom()
    })),
    {
      enabled: en
    } = (0, o.us)("useGenerateUserSettingsSections", {
      autoTrackExposure: false
    }),
    er = (0, s.i)("useGenerateUserSettingsSections");
  return r.useMemo(() => (0, N.zj)({
    unseenGiftCount: E,
    showPrepaidPaymentPastDueWarning: S,
    searchParams: R,
    numOfPendingFamilyRequests: D,
    isOverlaySupported: L,
    shouldMergeGameSettings: M,
    isStaff: G,
    isInappropriateConversationWarningEnabled: U,
    isInapproprateConversationsDefaultOn: k,
    paymentsBlocked: H,
    isEligibleForQuests: B,
    isStricterMessageRequestsEnabled: W,
    hasLibraryApplication: V,
    hasTOTPEnabled: F,
    developerMode: Y,
    isAdultUser: K,
    hasSecureFramesVerifiedUserIds: z,
    hasIgnoredUsers: q,
    hasBlockedUsers: Z,
    hasAgeGatedFeature: Q,
    inputMode: $,
    activeInputProfile: ee,
    isInputProfileCustom: et,
    isChatMentionSuggestionsSettingEnabled: en,
    isHDRAccessibilitySettingExperimentEnabled: er
  }), [Y, Z, q, V, z, F, R, K, B, k, U, L, G, W, D, H, M, S, E, Q, $, ee, et, en, er])
}

function U(e) {
  let t = R.a.useField("searchResults"),
    n = G(),
    r = n[e],
    i = Object.fromEntries(Object.entries(n).filter(e => {
      let [t, n] = e;
      return n.section === r.section
    })),
    l = Object.fromEntries(Object.entries(i).filter(e => {
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
    a = e => {
      let t = i[e];
      if (null == t) return;
      s.add(e);
      let n = t.parent;
      null != n && a(n)
    },
    o = e => {
      for (let t of (s.add(e), Object.entries(l).filter(t => {
          let [n, r] = t;
          return r === e
        }).map(e => {
          let [t] = e;
          return t
        }))) o(t)
    };
  for (let e of t.filter(e => e in i))
    if (!s.has(e)) {
      if (null != i[e].element && null == i[e].parent) {
        s.clear();
        break
      }
      Object.values(l).includes(e) && o(e), a(e)
    } return s
}

function k(e, t, n) {
  var r, i;
  let s, a = [],
    o = V(t),
    c = (r = t, i = new Set(Array.from(null != n ? n : []).filter(e => o.has(e))), s = new Map, null != i && i.forEach(e => {
      let t = r[e].parent;
      for (; null != t && null != r[t].parent;) t = r[t].parent;
      if (null != t) {
        var n;
        let e = null != (n = s.get(t)) ? n : 0;
        s.set(t, e + 1)
      }
    }), s);
  return e.forEach(e => {
    0 !== e.settings.length && (true === e.divider && a.push({
      section: l.Fq.DIVIDER
    }), null != e.header && a.push({
      section: l.Fq.HEADER,
      label: e.header
    }), e.settings.forEach(e => {
      var r, i;
      a.push((r = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, t[e]), i = i = {
        tabPredicate: () => null == n || e === D.H.SEARCH_NO_RESULTS && 0 === n.size || c.has(e) || n.has(e)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
      }), r))
    }))
  }), a
}

function H() {
  let e = G(),
    {
      shouldMergeGameSettings: t
    } = T.X.useExperiment({
      location: "settings"
    }),
    {
      showRedesign: n
    } = S.X.useExperiment({
      location: "settings"
    }),
    i = r.useMemo(() => M({
      shouldMergeGameSettings: t,
      showRedesignedThirdPartyAccessSettings: n
    }), [t, n]);
  return r.useMemo(() => k(i, e), [i, e])
}

function B(e) {
  let t = G(),
    n = function() {
      let {
        shouldMergeGameSettings: e
      } = T.X.useExperiment({
        location: "settings"
      }), {
        showRedesign: t
      } = S.X.useExperiment({
        location: "settings"
      }), n = M({
        shouldMergeGameSettings: e,
        showRedesignedThirdPartyAccessSettings: t
      });
      return r.useMemo(() => [{
        header: L.intl.string(L.t["zkoeq/"]),
        settings: [...n.map(e => {
          let {
            settings: t
          } = e;
          return t
        }).flat(1), D.H.SEARCH_NO_RESULTS]
      }], [n])
    }();
  return r.useMemo(() => k(n, t, new Set(e)), [n, t, e])
}

function V(e) {
  return new Map(Object.entries(e).filter(e => {
    let [t, n] = e;
    return null != n.searchableTitles && (null == n.predicate || n.predicate()) && (null == n.unsearchable || false === n.unsearchable)
  }))
}

function F(e) {
  return Array.from(V(e).entries()).map(e => {
    let [t, n] = e;
    return [t, n.searchableTitles]
  })
}