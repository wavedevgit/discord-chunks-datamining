/** Chunk was on 9207 **/
/** chunk id: 360619, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AC: () => M,
  Lu: () => G,
  NI: () => k,
  PH: () => w
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

function w() {
  var e, t, n, l;
  let E = (0, p.IO)().length,
    N = (0, _.l)(),
    P = (0, i.bG)([C.A], () => C.A.getSearchParams()),
    R = (0, u.VT)(),
    L = (0, v.b_)(),
    {
      shouldMergeGameSettings: w
    } = T.X.useExperiment({
      location: "settings"
    }),
    M = null != (e = null == (n = S.default.getCurrentUser()) ? true : n.isStaff()) && e,
    G = (0, b.Lc)({
      location: "settings"
    }),
    U = (0, f.Rv)({
      location: "settings"
    }),
    k = (0, a.H)(),
    B = (0, m.H)({
      location: D.rE.USER_SETTINGS_SEARCH_GIFT_INVENTORY
    }),
    H = (0, i.bG)([O.A], () => O.A.hasLibraryApplication()),
    V = (0, i.bG)([h.default], () => h.default.hasTOTPEnabled()),
    F = y.Q_.useSetting(),
    Y = (0, c.A)(),
    W = null == (t = (0, d.A)()) || t,
    K = (null == (l = (0, A.G)()) ? true : l.length) > 0,
    {
      hasBlockedUsers: z,
      hasIgnoredUsers: Z
    } = (0, i.cf)([x.A], () => ({
      hasBlockedUsers: x.A.getBlockedIDs().length > 0,
      hasIgnoredUsers: x.A.getIgnoredIDs().length > 0
    })),
    X = (0, g.fk)(),
    q = (0, I.j)("SettingRendererUtils"),
    J = X || q,
    {
      enabled: Q
    } = (0, o.us)("useGenerateUserSettingsSections", {
      autoTrackExposure: false
    }),
    $ = (0, s.i)("useGenerateUserSettingsSections");
  return r.useMemo(() => (0, j.zj)({
    unseenGiftCount: E,
    showPrepaidPaymentPastDueWarning: N,
    searchParams: P,
    numOfPendingFamilyRequests: R,
    isOverlaySupported: L,
    shouldMergeGameSettings: w,
    isStaff: M,
    isInappropriateConversationWarningEnabled: G,
    isInapproprateConversationsDefaultOn: U,
    paymentsBlocked: k,
    isEligibleForQuests: B,
    isStricterMessageRequestsEnabled: Y,
    hasLibraryApplication: H,
    hasTOTPEnabled: V,
    developerMode: F,
    isAdultUser: W,
    hasSecureFramesVerifiedUserIds: K,
    hasIgnoredUsers: Z,
    hasBlockedUsers: z,
    hasAgeGatedFeature: J,
    isChatMentionSuggestionsSettingEnabled: Q,
    isHDRAccessibilitySettingExperimentEnabled: $
  }), [F, z, Z, H, K, V, P, W, B, U, G, L, M, Y, R, k, w, N, E, J, Q, $])
}

function M(e) {
  let t = P.a.useField("searchResults"),
    n = w(),
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

function G() {
  let e = w(),
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
    i = r.useMemo(() => (function(e) {
      let {
        shouldMergeGameSettings: t,
        showRedesignedThirdPartyAccessSettings: n
      } = e, r = E.A.isDeveloper, i = [{
        header: L.intl.string(L.t.cduTBL),
        settings: n ? [R.H.ACCOUNT, R.H.GAMES, R.H.PROFILE_CUSTOMIZATION, R.H.CONTENT_SOCIAL, R.H.DATA_PRIVACY, R.H.PRIVACY_FAMILY_CENTER, R.H.THIRD_PARTY_ACCESS, R.H.SESSIONS] : [R.H.ACCOUNT, R.H.GAMES, R.H.PROFILE_CUSTOMIZATION, R.H.CONTENT_SOCIAL, R.H.DATA_PRIVACY, R.H.PRIVACY_FAMILY_CENTER, R.H.AUTHORIZED_APPS, R.H.SESSIONS, R.H.CONNECTIONS, R.H.PRIVATE_BROWSING_PERK]
      }, {
        header: L.intl.string(L.t["4uOdGr"]),
        divider: true,
        settings: [R.H.PREMIUM, R.H.GUILD_BOOSTING, R.H.SUBSCRIPTIONS, R.H.GIFT_INVENTORY, R.H.BILLING]
      }, {
        header: L.intl.string(L.t.f2n1TP),
        divider: true,
        settings: [R.H.APPEARANCE, R.H.ACCESSIBILITY, R.H.POGGERMODE, R.H.CHAT, R.H.KEYBINDS, R.H.LANGUAGE, R.H.WINDOW_SETTINGS, R.H.LINUX_SETTINGS, R.H.SETTINGS_ADVANCED]
      }, {
        divider: true,
        settings: [R.H.CHANGELOG, R.H.MERCHANDISE]
      }, {
        header: "Developer Only",
        divider: true,
        settings: r ? [R.H.EXPERIMENTS, R.H.DEVELOPER_OPTIONS] : []
      }, {
        divider: true,
        settings: [R.H.LOGOUT]
      }, {
        divider: true,
        settings: [R.H.SOCIAL_LINKS, R.H.CLIENT_DEBUG_INFO]
      }], l = {
        header: L.intl.string(L.t.SmHCFf),
        divider: true,
        settings: [R.H.ACTIVITY_PRIVACY, R.H.REGISTERED_GAMES, R.H.OVERLAY]
      };
      return t ? i : i.toSpliced(3, 0, l)
    })({
      shouldMergeGameSettings: t,
      showRedesignedThirdPartyAccessSettings: n
    }), [t, n]);
  return r.useMemo(() => {
    var t, n;
    let r, s, a;
    return r = [], s = U(e), t = e, n = new Set(Array.from([]).filter(e => s.has(e))), a = new Map, null != n && n.forEach(e => {
      let n = t[e].parent;
      for (; null != n && null != t[n].parent;) n = t[n].parent;
      if (null != n) {
        var r;
        let e = null != (r = a.get(n)) ? r : 0;
        a.set(n, e + 1)
      }
    }), i.forEach(t => {
      0 !== t.settings.length && (true === t.divider && r.push({
        section: l.Fq.DIVIDER
      }), null != t.header && r.push({
        section: l.Fq.HEADER,
        label: t.header
      }), t.settings.forEach(t => {
        var n, i;
        r.push((n = function(e) {
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
        }({}, e[t]), i = i = {
          tabPredicate: () => true
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n))
      }))
    }), r
  }, [i, e])
}

function U(e) {
  return new Map(Object.entries(e).filter(e => {
    let [t, n] = e;
    return null != n.searchableTitles && (null == n.predicate || n.predicate()) && (null == n.unsearchable || false === n.unsearchable)
  }))
}

function k(e) {
  return Array.from(U(e).entries()).map(e => {
    let [t, n] = e;
    return [t, n.searchableTitles]
  })
}