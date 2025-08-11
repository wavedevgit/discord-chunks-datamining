/** Chunk was on 75708 **/
/** chunk id: 991346, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Gj: () => V,
  Pt: () => U,
  VO: () => F,
  ji: () => W,
  q8: () => H
}), require("./836215.js"), require("./472816.js"), require("./794429.js"), require("./388685.js"), require("./467055.js"), require("./539854.js");
var Chunk73800 = require("./73800.js"),
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
  Chunk406613 = require("./406613.js"),
  Chunk168308 = require("./168308.js"),
  Chunk839469 = require("./839469.js"),
  Chunk726985 = require("./726985.js"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx");

function B(e) {
  let {
    shouldMergeGameSettings: t,
    showRedesignedThirdPartyAccessSettings: n
  } = e, i = O.Z.isDeveloper, r = [{
    header: M.intl.string(M.t.cduTBA),
    settings: n ? [k.s6.ACCOUNT, k.s6.GAMES, k.s6.PROFILE_CUSTOMIZATION, k.s6.CONTENT_SOCIAL, k.s6.DATA_PRIVACY, k.s6.PRIVACY_FAMILY_CENTER, k.s6.THIRD_PARTY_ACCESS, k.s6.SESSIONS, k.s6.CLIPS] : [k.s6.ACCOUNT, k.s6.GAMES, k.s6.PROFILE_CUSTOMIZATION, k.s6.CONTENT_SOCIAL, k.s6.DATA_PRIVACY, k.s6.PRIVACY_FAMILY_CENTER, k.s6.AUTHORIZED_APPS, k.s6.SESSIONS, k.s6.CONNECTIONS, k.s6.CLIPS]
  }, {
    header: M.intl.string(M.t["4uOdGh"]),
    divider: true,
    settings: [k.s6.PREMIUM, k.s6.GUILD_BOOSTING, k.s6.SUBSCRIPTIONS, k.s6.GIFT_INVENTORY, k.s6.BILLING]
  }, {
    header: M.intl.string(M.t.f2n1TE),
    divider: true,
    settings: [k.s6.APPEARANCE, k.s6.ACCESSIBILITY, k.s6.VOICE_AND_VIDEO, k.s6.CLICKER_GAME, k.s6.POGGERMODE, k.s6.CHAT, k.s6.NOTIFICATIONS, k.s6.KEYBINDS, k.s6.LANGUAGE, k.s6.WINDOW_SETTINGS, k.s6.LINUX_SETTINGS, k.s6.STREAMER_MODE, k.s6.SETTINGS_ADVANCED]
  }, {
    divider: true,
    settings: [k.s6.CHANGELOG, k.s6.MERCHANDISE, k.s6.HYPESQUAD, k.s6.TOWNHALL]
  }, {
    header: "Developer Only",
    divider: true,
    settings: i ? [k.s6.EXPERIMENTS, k.s6.DEVELOPER_OPTIONS, k.s6.HOTSPOT_OPTIONS, k.s6.DISMISSIBLE_CONTENT_OPTIONS, k.s6.PAYMENT_FLOW_MODALS, k.s6.REVENUE_STORYBOOK, k.s6.VIRTUAL_CURRENCY_CONFIGURATION, k.s6.DESIGN_SYSTEMS, k.s6.INTL_TESTING, k.s6.SHOP_KEEPER, k.s6.WEB_SETTING_TREE_TOOL, k.s6.QUEST_PREVIEW_TOOL, k.s6.QUEST_MINOR_REWARD_CAPPING_CONFIG] : []
  }, {
    divider: true,
    settings: [k.s6.LOGOUT]
  }, {
    divider: true,
    settings: [k.s6.SOCIAL_LINKS, k.s6.CLIENT_DEBUG_INFO]
  }], s = {
    header: M.intl.string(M.t.SmHCFR),
    divider: true,
    settings: [k.s6.ACTIVITY_PRIVACY, k.s6.REGISTERED_GAMES, k.s6.OVERLAY]
  };
  return t ? r : r.toSpliced(3, 0, s)
}

function U() {
  var e, t, n, a;
  let O = (0, Chunk725727.YO)().length,
    A = (0, Chunk160913.U)(),
    w = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getProps().impressionSource),
    k = (0, Chunk631885.gU)(),
    M = (0, Chunk168308.bC)(),
    B = (0, Chunk924557.Go)(),
    [U] = (0, Chunk706140.cv)(B ? [Chunk704215.z.CLIPS_SETTINGS_BETA_TAG] : []),
    {
      shouldMergeGameSettings: V
    } = Chunk202527.b.useExperiment({
      location: "settings"
    }),
    G = (0, Chunk592204.Xo)({
      location: "settings"
    }),
    F = null != (n = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && require,
    H = (0, Chunk237292.y0)({
      location: "settings"
    }),
    z = (0, Chunk667172.v4)({
      location: "settings"
    }),
    W = (0, Chunk211242.Q)(),
    Y = (0, Chunk977156.Zy)({
      location: Chunk46140.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY
    }),
    K = (0, Chunk442837.e7)([Chunk283595.Z], () => Chunk283595.Z.hasLibraryApplication()),
    q = (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.hasTOTPEnabled()),
    X = Chunk695346.Sb.useSetting(),
    J = (0, Chunk610697.Z)(),
    {
      hypeSquadRemoved: Q
    } = Chunk319828.Z.useExperiment({
      location: "settings"
    }),
    $ = null == (a = (0, Chunk880257.Z)()) || Chunk493544,
    ee = (null == (t = (0, Chunk921157.s)()) ? true : exports.length) > 0,
    {
      hasBlockedUsers: et,
      hasIgnoredUsers: en
    } = (0, Chunk442837.cj)([Chunk699516.Z], () => ({
      hasBlockedUsers: Chunk699516.Z.getBlockedIDs().length > 0,
      hasIgnoredUsers: Chunk699516.Z.getIgnoredIDs().length > 0
    })),
    {
      showRefreshedSettings: ei
    } = (0, Chunk406613.F)({
      location: "SettingRendererUtils",
      autoTrackExposure: false
    }),
    er = (0, Chunk704454.UQ)("SettingRendererUtils"),
    {
      inputMode: es,
      activeInputProfile: ea,
      isInputProfileCustom: el
    } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
      activeInputProfile: Chunk131951.Z.getActiveInputProfile(),
      inputMode: Chunk131951.Z.getMode(),
      isInputProfileCustom: Chunk131951.Z.isInputProfileCustom()
    }));
  return Chunk73800.useMemo(() => (0, Chunk620163.i)({
    unseenGiftCount: Chunk906467,
    showPrepaidPaymentPastDueWarning: Chunk413182,
    impressionSource: Chunk839469,
    numOfPendingFamilyRequests: Chunk726985,
    isOverlaySupported: Chunk388032,
    isClipsBetaTagShowing: U === Chunk704215.z.CLIPS_SETTINGS_BETA_TAG,
    shouldMergeGameSettings: V,
    isKeywordFilteringEnabled: G,
    isStaff: F,
    isInappropriateConversationWarningEnabled: H,
    isInapproprateConversationsDefaultOn: z,
    paymentsBlocked: W,
    isEligibleForQuests: Y,
    isStricterMessageRequestsEnabled: J,
    hasLibraryApplication: K,
    hasTOTPEnabled: q,
    developerMode: X,
    isAdultUser: $,
    hasSecureFramesVerifiedUserIds: ee,
    hypeSquadRemoved: Q,
    hasIgnoredUsers: en,
    hasBlockedUsers: et,
    useRefreshedVoiceAndVideo: ei,
    isEligibleForSensitiveContentDefaults: er,
    inputMode: es,
    activeInputProfile: ea,
    isInputProfileCustom: el
  }), [X, U, et, en, K, ee, q, Q, Chunk839469, $, Y, z, H, G, Chunk388032, F, J, Chunk726985, W, V, Chunk413182, Chunk906467, ei, er, es, ea, el])
}

function V(e) {
  let {
    searchResults: t
  } = (0, w.E)(), n = U(), i = n[e], r = Object.fromEntries(Object.entries(n).filter(e => {
    let [t, n] = e;
    return n.section === i.section
  })), s = Object.fromEntries(Object.entries(r).filter(e => {
    let [t, {
      parent: n,
      section: r
    }] = e;
    return null != n && r === i.section
  }).map(e => {
    let [t, {
      parent: n
    }] = e;
    return [t, n]
  })), a = new Set, l = e => {
    let t = r[e];
    if (null == t) return;
    a.add(e);
    let n = t.parent;
    null != n && l(n)
  }, o = e => {
    for (let t of (a.add(e), Object.entries(s).filter(t => {
        let [n, i] = t;
        return i === e
      }).map(e => {
        let [t] = e;
        return t
      }))) o(t)
  };
  for (let e of t.filter(e => e in r))
    if (!a.has(e)) {
      if (null != r[e].element && null == r[e].parent) {
        a.clear();
        break
      }
      Object.values(s).includes(e) && o(e), l(e)
    } return a
}

function G(e, t, n) {
  let i = [],
    r = z(t),
    s = function(e, t) {
      let n = new Map;
      return null != t && t.forEach(t => {
        let i = e[t].parent;
        for (; null != i && null != e[i].parent;) i = e[i].parent;
        if (null != i) {
          var r;
          let e = null != (r = n.get(i)) ? r : 0;
          n.set(i, e + 1)
        }
      }), n
    }(t, new Set(Array.from(null != n ? n : []).filter(e => r.has(e))));
  return e.forEach(e => {
    0 !== e.settings.length && (true === e.divider && i.push({
      section: a.ID.DIVIDER
    }), null != e.header && i.push({
      section: a.ID.HEADER,
      label: e.header
    }), e.settings.forEach(e => {
      var r, a;
      i.push((r = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, t[e]), a = a = {
        tabPredicate: () => null == n || e === k.s6.SEARCH_NO_RESULTS && 0 === n.size || s.has(e) || n.has(e)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
      }), r))
    }))
  }), i
}

function F() {
  let e = U(),
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
    r = Chunk73800.useMemo(() => B({
      shouldMergeGameSettings: exports,
      showRedesignedThirdPartyAccessSettings: require
    }), [exports, require]);
  return Chunk73800.useMemo(() => G(Chunk442837, module), [Chunk442837, module])
}

function H(e) {
  let t = U(),
    n = function() {
      let {
        shouldMergeGameSettings: e
      } = y.b.useExperiment({
        location: "settings"
      }), {
        showRedesign: t
      } = A.b.useExperiment({
        location: "settings"
      }), n = B({
        shouldMergeGameSettings: e,
        showRedesignedThirdPartyAccessSettings: t
      });
      return i.useMemo(() => [{
        header: M.intl.string(M.t.zkoeq6),
        settings: [...n.map(e => {
          let {
            settings: t
          } = e;
          return t
        }).flat(1), k.s6.SEARCH_NO_RESULTS]
      }], [n])
    }();
  return i.useMemo(() => G(n, t, new Set(e)), [n, t, e])
}

function z(e) {
  return new Map(Object.entries(e).filter(e => {
    let [t, n] = e;
    return n.section !== a.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate())
  }))
}

function W(e) {
  return Array.from(z(e).entries()).map(e => {
    let [t, n] = e;
    return [t, n.searchableTitles]
  })
}