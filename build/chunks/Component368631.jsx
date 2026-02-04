/** Chunk was on 9207 **/
/** chunk id: 368631, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  AW: () => eE,
  Jn: () => eO,
  Tq: () => eC,
  p_: () => eh,
  zj: () => eI
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk110259 = require("./110259.js"),
  Chunk554146 = require("./554146.js"),
  Chunk827734 = require("./827734.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk830215 = require("./830215.js"),
  Chunk631670 = require("./631670.js"),
  Chunk252452 = require("./252452.js"),
  Chunk361739 = require("./361739.jsx"),
  Chunk975807 = require("./975807.js"),
  Chunk569024 = require("./569024.js"),
  Chunk212031 = require("./212031.jsx"),
  Chunk652525 = require("./652525.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk159001 = require("./159001.js"),
  Chunk833336 = require("./833336.js"),
  Chunk3137 = require("./3137.js"),
  Chunk454292 = require("./454292.jsx"),
  Chunk704591 = require("./704591.js"),
  Chunk682829 = require("./682829.jsx"),
  Chunk967370 = require("./967370.js"),
  Chunk103738 = require("./103738.jsx"),
  Chunk745109 = require("./745109.jsx"),
  Chunk836602 = require("./836602.js"),
  Chunk540999 = require("./540999.js"),
  Chunk111162 = require("./111162.js"),
  Chunk954571 = require("./954571.js"),
  Chunk957565 = require("./957565.js"),
  Chunk307600 = require("./307600.js"),
  Chunk723702 = require("./723702.js"),
  Chunk809465 = require("./809465.jsx"),
  Chunk517235 = require("./517235.jsx"),
  Chunk81107 = require("./81107.jsx"),
  Chunk805577 = require("./805577.jsx"),
  Chunk782844 = require("./782844.jsx"),
  Chunk513664 = require("./513664.jsx"),
  Chunk69435 = require("./69435.jsx"),
  Chunk614651 = require("./614651.jsx"),
  Chunk891912 = require("./891912.jsx"),
  Chunk115980 = require("./115980.jsx"),
  Chunk75698 = require("./75698.jsx"),
  Chunk130066 = require("./130066.jsx"),
  Chunk195548 = require("./195548.jsx"),
  Chunk749737 = require("./749737.jsx"),
  Chunk164358 = require("./164358.jsx"),
  Chunk768908 = require("./768908.jsx"),
  Chunk586685 = require("./586685.jsx"),
  Chunk490510 = require("./490510.jsx"),
  Chunk93471 = require("./93471.jsx"),
  Chunk790076 = require("./790076.jsx"),
  Chunk224515 = require("./224515.jsx"),
  Chunk357864 = require("./357864.jsx"),
  Chunk119762 = require("./119762.jsx"),
  Chunk16986 = require("./16986.jsx"),
  Chunk803398 = require("./803398.jsx"),
  Chunk62218 = require("./62218.jsx"),
  Chunk640068 = require("./640068.jsx"),
  Chunk682262 = require("./682262.js"),
  Chunk777117 = require("./777117.jsx"),
  Chunk604151 = require("./604151.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk190363 = require("./190363.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk927961 = require("./927961.js"),
  Chunk842130 = require("./842130.js"),
  Chunk895431 = require("./895431.js"),
  Chunk945213 = require("./945213.js");
let eh = () => [l.M.CLIENT_THEMES_SETTINGS_BADGE, l.M.DEKSTOP_CUSTOM_APP_ICON_BADGE, l.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE],
  eE = () => {
    let e = eh(),
      [t] = (0, b.kn)(e);
    return t === l.M.CLIENT_THEMES_SETTINGS_BADGE || t === l.M.DEKSTOP_CUSTOM_APP_ICON_BADGE ? (0, r.jsx)(o.JIr, {
      text: em.intl.string(em.t.y2b7CA)
    }) : t === l.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE ? (0, r.jsx)(o.LpS, {
      text: em.intl.string(em.t.y2b7CA)
    }) : null
  },
  eO = () => {
    let e = [];
    return e.push(l.M.WIDGETS_USER_SETTINGS_NEW_BADGE), e.push(l.M.DISPLAY_NAME_STYLES_NEW_BADGE), e
  },
  ex = () => {
    let e = eO(),
      [t] = (0, b.kn)(e);
    return t === l.M.DISPLAY_NAME_STYLES_NEW_BADGE || t === l.M.WIDGETS_USER_SETTINGS_NEW_BADGE ? (0, r.jsx)(o.LpS, {
      text: em.intl.string(em.t.y2b7CA)
    }) : null
  },
  eC = () => {
    let e = [];
    return (0, T.lM)("SettingsRendererConfig") && e.push(l.M.NITRO_PRIVACY_PERK_NEW_BADGE_V2), e
  },
  eS = () => {
    let e = eC(),
      [t] = (0, b.kn)(e);
    return l.M.NITRO_PRIVACY_PERK_NEW_BADGE_V2 === t ? (0, r.jsx)(o.LpS, {
      text: em.intl.string(em.t.y2b7CA)
    }) : null
  },
  eT = Chunk62218.A,
  eI = e => {
    let {
      unseenGiftCount: t,
      showPrepaidPaymentPastDueWarning: b,
      searchParams: eI,
      numOfPendingFamilyRequests: eN,
      isOverlaySupported: ey,
      shouldMergeGameSettings: ev,
      isStaff: ej,
      isInappropriateConversationWarningEnabled: eP,
      isInapproprateConversationsDefaultOn: eR,
      paymentsBlocked: eD,
      isEligibleForQuests: eL,
      isStricterMessageRequestsEnabled: ew,
      hasLibraryApplication: eM,
      hasTOTPEnabled: eG,
      developerMode: eU,
      isAdultUser: ek,
      hasSecureFramesVerifiedUserIds: eB,
      hasIgnoredUsers: eH,
      hasBlockedUsers: eV,
      hasAgeGatedFeature: eF,
      isChatMentionSuggestionsSettingEnabled: eY,
      isHDRAccessibilitySettingExperimentEnabled: eW
    } = e;
    return Object.freeze({
      [eu.H.SEARCH_NO_RESULTS]: {
        section: p.Fq.CUSTOM,
        element: en.A
      },
      [eu.H.ACCOUNT_SECURITY_TAB]: {
        section: ep.nc_.ACCOUNT,
        searchableTitles: [em.intl.string(em.t.Am9YHi)],
        label: em.intl.string(em.t.Am9YHi)
      },
      [eu.H.ACCOUNT]: {
        section: ep.nc_.ACCOUNT,
        searchableTitles: [em.intl.string(em.t["JAIM/m"])],
        label: em.intl.string(em.t["JAIM/m"]),
        ariaLabel: em.intl.string(em.t["JAIM/m"]),
        element: k.A,
        url: ep.BVt.SETTINGS("account")
      },
      [eu.H.ACCOUNT_PROFILE]: {
        searchableTitles: [em.intl.string(em.t.LYju5J)],
        parent: eu.H.ACCOUNT,
        section: ep.nc_.ACCOUNT
      },
      [eu.H.ACCOUNT_DISPLAY_NAME]: {
        searchableTitles: [em.intl.string(em.t["9AjdkD"])],
        section: ep.nc_.ACCOUNT,
        parent: eu.H.ACCOUNT_PROFILE
      },
      [eu.H.ACCOUNT_PHONE_NUMBER]: {
        searchableTitles: [em.intl.string(em.t.Ulqq6K)],
        section: ep.nc_.ACCOUNT,
        parent: eu.H.ACCOUNT_PROFILE
      },
      [eu.H.ACCOUNT_AGE_GROUP]: {
        searchableTitles: [em.intl.string(em.t["/52UYy"]), em.intl.string(em.t.sK0dmH), em.intl.string(em.t.XxRj7f), em.intl.string(em.t.yNGjyK), em.intl.string(em.t.KPGVWl)],
        section: ep.nc_.ACCOUNT,
        parent: eu.H.ACCOUNT_PROFILE,
        predicate: () => eF
      },
      [eu.H.ACCOUNT_USERNAME]: {
        searchableTitles: [em.intl.string(em.t["+JkHPw"])],
        section: ep.nc_.ACCOUNT,
        parent: eu.H.ACCOUNT_PROFILE
      },
      [eu.H.ACCOUNT_EMAIL]: {
        searchableTitles: [em.intl.string(em.t.oP5zGA)],
        section: ep.nc_.ACCOUNT,
        parent: eu.H.ACCOUNT_PROFILE
      },
      [eu.H.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
        searchableTitles: [em.intl.string(em.t.pKSjEj)],
        section: ep.nc_.ACCOUNT,
        parent: eu.H.ACCOUNT
      },
      [eu.H.ACCOUNT_CHANGE_PASSWORD]: {
        searchableTitles: [em.intl.string(em.t["FRep5/"])],
        section: ep.nc_.ACCOUNT,
        parent: eu.H.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eu.H.ACCOUNT_CONFIRM_PASSWORD]: {
        searchableTitles: [em.intl.string(em.t["7qKDrE"])],
        section: ep.nc_.ACCOUNT,
        parent: eu.H.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eu.H.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
        searchableTitles: [em.intl.string(em.t.m0FidJ)],
        section: ep.nc_.ACCOUNT,
        parent: eu.H.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eu.H.ACCOUNT_ENABLE_2FA]: {
        searchableTitles: [em.intl.string(em.t.cDgKte)],
        section: ep.nc_.ACCOUNT,
        parent: eu.H.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
        predicate: () => !eG
      },
      [eu.H.ACCOUNT_REMOVE_2FA]: {
        searchableTitles: [em.intl.string(em.t["D+aE7g"])],
        section: ep.nc_.ACCOUNT,
        parent: eu.H.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
        predicate: () => eG
      },
      [eu.H.ACCOUNT_VIEW_BACKUP_CODES]: {
        searchableTitles: [em.intl.string(em.t.fZSi1D)],
        section: ep.nc_.ACCOUNT,
        parent: eu.H.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eu.H.ACCOUNT_SMS_BACKUP]: {
        searchableTitles: [em.intl.string(em.t.uHAJ5v)],
        section: ep.nc_.ACCOUNT,
        parent: eu.H.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eu.H.ACCOUNT_SECURITY_KEYS]: {
        searchableTitles: [em.intl.string(em.t.vrOCCk), em.intl.string(em.t.y7SXYX)],
        section: ep.nc_.ACCOUNT,
        parent: eu.H.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eu.H.ACCOUNT_REMOVAL]: {
        section: ep.nc_.ACCOUNT,
        searchableTitles: [em.intl.string(em.t.ZKsIks)],
        parent: eu.H.ACCOUNT
      },
      [eu.H.ACCOUNT_DISABLE_ACCOUNT]: {
        section: ep.nc_.ACCOUNT,
        searchableTitles: [em.intl.string(em.t.jf5GGb)],
        parent: eu.H.ACCOUNT_REMOVAL
      },
      [eu.H.ACCOUNT_DELETE_ACCOUNT]: {
        section: ep.nc_.ACCOUNT,
        searchableTitles: [em.intl.string(em.t["8lQ2rR"])],
        parent: eu.H.ACCOUNT_DISABLE_ACCOUNT
      },
      [eu.H.GAMES]: {
        section: ep.nc_.GAMES,
        searchableTitles: [em.intl.string(em.t.URyqtP)],
        label: em.intl.string(em.t.URyqtP),
        ariaLabel: em.intl.string(em.t.URyqtP),
        element: ec.A,
        predicate: () => ev
      },
      [eu.H.GAMES_MY_GAMES]: {
        section: ep.nc_.GAMES,
        searchableTitles: [em.intl.string(em.t["5DMgp9"])],
        parent: eu.H.GAMES
      },
      [eu.H.GAMES_OVERLAY]: {
        section: ep.nc_.GAMES,
        searchableTitles: [em.intl.string(em.t["9cb1Uz"])],
        parent: eu.H.GAMES
      },
      [eu.H.GAMES_ACTIVITY_PRIVACY]: {
        section: ep.nc_.GAMES,
        searchableTitles: [em.intl.string(em.t.Cq98yL)],
        parent: eu.H.GAMES
      },
      [eu.H.PROFILE_CUSTOMIZATION]: {
        section: ep.nc_.PROFILE_CUSTOMIZATION,
        type: p.Py.WIDE,
        searchableTitles: [em.intl.string(em.t["vi7f+q"])],
        label: em.intl.string(em.t["vi7f+q"]),
        ariaLabel: em.intl.string(em.t["vi7f+q"]),
        element: N.A,
        newIndicator: (0, r.jsx)(ex, {}),
        newIndicatorDismissibleContentTypes: [...eO()],
        notice: {
          stores: [y.A, E.A],
          element: I.A
        },
        onSettingsClose: () => {
          c.h.wait(() => {
            (0, h.sy)(), (0, u.F7)(), _.A.clearSubsection(ep.nc_.PROFILE_CUSTOMIZATION)
          })
        },
        url: ep.BVt.SETTINGS("profile-customization")
      },
      [eu.H.PROFILE_DISPLAY_NAME]: {
        section: ep.nc_.PROFILE_CUSTOMIZATION,
        searchableTitles: [em.intl.string(em.t["9AjdkD"])],
        parent: eu.H.PROFILE_CUSTOMIZATION
      },
      [eu.H.PROFILE_USER_PROFILE]: {
        section: ep.nc_.PROFILE_CUSTOMIZATION,
        searchableTitles: [em.intl.string(em.t["2p07FR"]), em.intl.string(em.t["7vhiqk"])],
        parent: eu.H.PROFILE_CUSTOMIZATION
      },
      [eu.H.PROFILE_SERVER_PROFILES]: {
        section: ep.nc_.PROFILE_CUSTOMIZATION,
        searchableTitles: [em.intl.string(em.t.kPHroX)],
        parent: eu.H.PROFILE_CUSTOMIZATION
      },
      [eu.H.CONTENT_SOCIAL]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        label: em.intl.string(em.t["+o1pDZ"]),
        searchableTitles: [em.intl.string(em.t["+o1pDZ"])],
        ariaLabel: em.intl.string(em.t["+o1pDZ"]),
        element: K.A,
        url: ep.BVt.SETTINGS("content-and-social")
      },
      [eu.H.CONTENT_SOCIAL_DISCORD_TAB]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        searchableTitles: [em.intl.string(em.t["+o1pDZ"]), em.intl.string(em.t["/7xJCF"])],
        parent: eu.H.CONTENT_SOCIAL
      },
      [eu.H.CONTENT_SOCIAL_DISCORD]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        searchableTitles: [em.intl.string(em.t["+o1pDZ"]), em.intl.string(em.t["/7xJCF"])],
        parent: eu.H.CONTENT_SOCIAL_DISCORD_TAB
      },
      [eu.H.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        searchableTitles: [em.intl.string(em.t.YpCiMt)],
        parent: eu.H.CONTENT_SOCIAL
      },
      [eu.H.CONTENT_SOCIAL_CONNECTED_GAMES]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        label: em.intl.string(em.t.YpCiMt),
        searchableTitles: [em.intl.string(em.t.YpCiMt)],
        ariaLabel: em.intl.string(em.t.YpCiMt),
        parent: eu.H.CONTENT_SOCIAL_CONNECTED_GAMES_TAB,
        url: ep.BVt.SETTINGS(ep.nc_.CONTENT_AND_SOCIAL, e_.k)
      },
      [eu.H.DATA_PRIVACY]: {
        section: ep.nc_.DATA_AND_PRIVACY,
        label: em.intl.string(em.t.OAuOHD),
        searchableTitles: [em.intl.string(em.t.OAuOHD)],
        ariaLabel: em.intl.string(em.t.OAuOHD),
        element: z.A,
        url: ep.BVt.SETTINGS("data-and-privacy")
      },
      [eu.H.PRIVACY_AND_SAFETY_STANDING]: {
        section: ep.nc_.ACCOUNT,
        searchableTitles: [em.intl.string(em.t["Vov/9o"])],
        parent: eu.H.ACCOUNT
      },
      [eu.H.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
        section: ep.nc_.DATA_AND_PRIVACY,
        searchableTitles: [em.intl.string(em.t.WWaFn5)],
        parent: eu.H.DATA_PRIVACY,
        predicate: () => (0, L.isDesktop)()
      },
      [eu.H.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
        section: ep.nc_.DATA_AND_PRIVACY,
        searchableTitles: [em.intl.string(em.t["opi/XK"])],
        parent: eu.H.PRIVACY_AND_SAFETY_VOICE_SECURITY
      },
      [eu.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        searchableTitles: [em.intl.string(em.t.xVRG4P)],
        parent: eu.H.CONTENT_SOCIAL_DISCORD
      },
      [eu.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        searchableTitles: [em.intl.string(em.t.fyA115)],
        parent: eu.H.CONTENT_SOCIAL_DISCORD
      },
      [eu.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        searchableTitles: [em.intl.string(em.t.fyA115)],
        parent: eu.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY
      },
      [eu.H.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        searchableTitles: [em.intl.string(em.t["/U8Iwa"])],
        parent: eu.H.CONTENT_SOCIAL_CONNECTED_GAMES
      },
      [eu.H.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        searchableTitles: [em.intl.string(em.t["ms+Tme"])],
        parent: eu.H.CONTENT_SOCIAL_CONNECTED_GAMES
      },
      [eu.H.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        searchableTitles: [em.intl.string(em.t["y62Z/d"])],
        parent: eu.H.CONTENT_SOCIAL
      },
      [eu.H.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
        section: ep.nc_.DATA_AND_PRIVACY,
        searchableTitles: [em.intl.string(em.t.SRZyHg)],
        parent: eu.H.DATA_PRIVACY
      },
      [eu.H.PRIVACY_SENSITIVE_MEDIA_V2]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        searchableTitles: [em.intl.string(em.t.uEz8JF), em.intl.string(em.t["N/oRI+"]), em.intl.string(em.t.QVdYsK), em.intl.string(em.t["aWD+tu"]), em.intl.string(em.t["5mnTa7"])],
        parent: eu.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
      },
      [eu.H.SENSITIVE_CONTENT_FILTERS]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        searchableTitles: [em.intl.string(em.t["Hj/But"]), em.intl.string(em.t["N/oRI+"]), em.intl.string(em.t.QVdYsK), em.intl.string(em.t["aWD+tu"]), em.intl.string(em.t["5mnTa7"]), em.intl.string(em.t["K0OWP+"])],
        parent: eu.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
      },
      [eu.H.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        searchableTitles: [em.intl.string(em.t["Hj/But"]), em.intl.string(em.t["N/oRI+"]), em.intl.string(em.t.QVdYsK), em.intl.string(em.t["aWD+tu"]), em.intl.string(em.t["5mnTa7"])],
        parent: eu.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
      },
      [eu.H.GORE_MEDIA_REDACTION]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        searchableTitles: [em.intl.string(em.t["Hj/But"]), em.intl.string(em.t["N/oRI+"]), em.intl.string(em.t.QVdYsK), em.intl.string(em.t["aWD+tu"]), em.intl.string(em.t["K0OWP+"])],
        parent: eu.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
      },
      [eu.H.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        searchableTitles: [em.intl.string(em.t.JzaP4h), em.intl.string(em.t.H9XOl3), em.intl.string(em.t.k4W40P)],
        parent: eu.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
      },
      [eu.H.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        searchableTitles: [em.intl.string(em.t["L+yTsa"])],
        parent: eu.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
      },
      [eu.H.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        searchableTitles: [em.intl.string(em.t.XahVjj)],
        parent: eu.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
      },
      [eu.H.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        parent: eu.H.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY
      },
      [eu.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        searchableTitles: [em.intl.string(em.t.RAQUSN), em.intl.string(em.t.wbYDfT)],
        parent: eu.H.PRIVACY_AND_SAFETY_SERVER_SELECTOR
      },
      [eu.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        searchableTitles: [em.intl.string(em.t["3o2ojh"])],
        parent: eu.H.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
        predicate: () => !ew
      },
      [eu.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        searchableTitles: [em.intl.string(em.t.OLwZDV)],
        parent: eu.H.PRIVACY_AND_SAFETY_SERVER_SELECTOR
      },
      [eu.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        searchableTitles: [em.intl.string(em.t.wBkwux)],
        parent: eu.H.PRIVACY_AND_SAFETY_SERVER_SELECTOR
      },
      [eu.H.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
        section: ep.nc_.DATA_AND_PRIVACY,
        searchableTitles: [em.intl.string(em.t.XuADY2)],
        parent: eu.H.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
      },
      [eu.H.PRIVACY_DATA_PERSONALIZE_V2]: {
        section: ep.nc_.DATA_AND_PRIVACY,
        searchableTitles: [em.intl.string(em.t.MNKzyg)],
        parent: eu.H.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
      },
      [eu.H.PRIVACY_DATA_QUESTS_V2]: {
        section: ep.nc_.DATA_AND_PRIVACY,
        searchableTitles: [em.intl.string(em.t.VkS7Yd), em.intl.string(em.t.sJYh5t)],
        parent: eu.H.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
      },
      [eu.H.PRIVACY_DATA_QUESTS_3P]: {
        section: ep.nc_.DATA_AND_PRIVACY,
        searchableTitles: [em.intl.string(em.t.CyLYKZ)],
        parent: eu.H.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
      },
      [eu.H.PRIVACY_DATA_CLIPS]: {
        section: ep.nc_.DATA_AND_PRIVACY,
        searchableTitles: [em.intl.string(em.t.AGDDkH), em.intl.string(em.t.NWw7kY)],
        parent: eu.H.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
      },
      [eu.H.PRIVACY_DATA_BASIC_SERVICE_V2]: {
        section: ep.nc_.DATA_AND_PRIVACY,
        searchableTitles: [""],
        parent: eu.H.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
      },
      [eu.H.PRIVACY_DATA_REQUEST_V2]: {
        section: ep.nc_.DATA_AND_PRIVACY,
        searchableTitles: [em.intl.string(em.t.dmBSKo)],
        parent: eu.H.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY
      },
      [eu.H.PRIVACY_SAFETY_ALERTS_V2]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        searchableTitles: [em.intl.string(em.t.qFsx5q)],
        parent: eu.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
        predicate: () => eP && !ek && !eR
      },
      [eu.H.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
        section: ep.nc_.DATA_AND_PRIVACY,
        searchableTitles: [em.intl.string(em.t["5b3FNI"])],
        parent: eu.H.PRIVACY_AND_SAFETY_VOICE_SECURITY,
        predicate: () => eB
      },
      [eu.H.PRIVACY_FAMILY_CENTER]: {
        section: ep.nc_.FAMILY_CENTER,
        searchableTitles: [em.intl.string(eA.default.gntCQT)],
        label: em.intl.string(eA.default.gntCQT),
        ariaLabel: em.intl.string(eA.default.gntCQT),
        element: X.A,
        badgeCount: eN,
        newIndicator: (0, r.jsx)(o.LpS, {
          text: em.intl.string(em.t.y2b7CA),
          color: s.A.colors.BACKGROUND_BRAND.css
        }),
        newIndicatorDismissibleContentTypes: [l.M.FAMILY_CENTER_NEW_BADGE],
        url: ep.BVt.SETTINGS("family-center")
      },
      [eu.H.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
        section: ep.nc_.DATA_AND_PRIVACY,
        searchableTitles: [em.intl.string(em.t.BG7QsQ)],
        parent: eu.H.DATA_PRIVACY
      },
      [eu.H.AUTHORIZED_APPS]: {
        section: ep.nc_.AUTHORIZED_APPS,
        searchableTitles: [em.intl.string(em.t["f6kk+r"])],
        label: em.intl.string(em.t["f6kk+r"]),
        element: F.Ay,
        url: ep.BVt.SETTINGS("authorized-apps")
      },
      [eu.H.SESSIONS]: {
        section: ep.nc_.SESSIONS,
        searchableTitles: [em.intl.string(em.t["+1h0k/"])],
        label: em.intl.string(em.t["+1h0k/"]),
        ariaLabel: em.intl.string(em.t["+1h0k/"]),
        element: er.Ay,
        newIndicatorDismissibleContentTypes: [l.M.AUTH_SESSIONS_NEW],
        impressionName: i.ImpressionNames.USER_SETTINGS_SESSIONS,
        impressionProperties: {
          source: null == eI ? true : eI.source
        }
      },
      [eu.H.CONNECTIONS]: {
        section: ep.nc_.CONNECTIONS,
        searchableTitles: [em.intl.string(em.t["3fe7U5"])],
        label: em.intl.string(em.t["3fe7U5"]),
        ariaLabel: em.intl.string(em.t["3fe7U5"]),
        element: W.Ay,
        impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
        impressionProperties: {
          source: null == eI ? true : eI.source
        },
        newIndicatorDismissibleContentTypes: [l.M.NEW_CRUNCHYROLL_CONNECTION],
        url: ep.BVt.SETTINGS("connections")
      },
      [eu.H.THIRD_PARTY_ACCESS]: {
        section: ep.nc_.CONNECTIONS,
        searchableTitles: [em.intl.string(em.t["Ig/XFa"]), em.intl.string(em.t["3fe7U5"]), em.intl.string(em.t["f6kk+r"])],
        label: em.intl.string(em.t["Ig/XFa"]),
        parent: eu.H.CONNECTIONS,
        element: el.A
      },
      [eu.H.CONNECTIONS_CONNECTED_ACCOUNTS]: {
        section: ep.nc_.CONNECTIONS,
        searchableTitles: [em.intl.string(em.t["+/hZM/"])],
        parent: eu.H.CONNECTIONS,
        element: W.Ay
      },
      [eu.H.RESTRICTED_USERS]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        parent: eu.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
        label: em.intl.string(em.t["3wRort"]),
        element: ed.Ay,
        predicate: () => eH || eV
      },
      [eu.H.BLOCKED_USERS]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        parent: eu.H.RESTRICTED_USERS,
        label: em.intl.string(em.t.PFOUKW),
        searchableTitles: [em.intl.string(em.t.PFOUKW)],
        element: ed.LP,
        predicate: () => eV
      },
      [eu.H.IGNORED_USERS]: {
        section: ep.nc_.CONTENT_AND_SOCIAL,
        parent: eu.H.RESTRICTED_USERS,
        searchableTitles: [em.intl.string(em.t["93ZDWE"])],
        label: em.intl.string(em.t["93ZDWE"]),
        element: ed.nK,
        predicate: () => eH
      },
      [eu.H.PREMIUM]: {
        section: ep.nc_.PREMIUM,
        ariaLabel: em.intl.string(em.t.Ipxkog),
        searchableTitles: [em.intl.string(em.t.Ipxkog)],
        label: em.intl.string(em.t.Ipxkog),
        element: M.A,
        className: eb.D
      },
      [eu.H.GUILD_BOOSTING]: {
        section: ep.nc_.GUILD_BOOSTING,
        searchableTitles: [em.intl.string(em.t["+CbP2v"])],
        label: em.intl.string(em.t["+CbP2v"]),
        element: et.A
      },
      [eu.H.SUBSCRIPTIONS]: {
        section: ep.nc_.SUBSCRIPTIONS,
        ariaLabel: em.intl.string(em.t.trSpHX),
        searchableTitles: [em.intl.string(em.t.trSpHX)],
        label: em.intl.string(em.t.trSpHX),
        element: S.A,
        icon: b ? (0, r.jsx)(o.EpV, {
          size: "xs",
          color: s.A.unsafe_rawColors.YELLOW_300.css
        }) : null
      },
      [eu.H.SUBSCRIPTIONS_CREDITS]: {
        section: ep.nc_.SUBSCRIPTIONS,
        searchableTitles: [em.intl.string(em.t["2GKrvn"])],
        parent: eu.H.SUBSCRIPTIONS
      },
      [eu.H.GIFT_INVENTORY]: {
        section: ep.nc_.INVENTORY,
        searchableTitles: [em.intl.string(em.t["jcSP+g"])],
        label: em.intl.string(em.t["jcSP+g"]),
        element: J.Ay,
        ariaLabel: em.intl.string(em.t["jcSP+g"]),
        badgeCount: t
      },
      [eu.H.GIFT_CODE_REDEMPTION]: {
        section: ep.nc_.INVENTORY,
        searchableTitles: [em.intl.string(em.t["il+VCo"])],
        parent: eu.H.GIFT_INVENTORY,
        predicate: () => !eD
      },
      [eu.H.GIFT_INVENTORY_QUESTS]: {
        section: ep.nc_.INVENTORY,
        searchableTitles: [em.intl.string(em.t.JALI2K)],
        parent: eu.H.GIFT_INVENTORY,
        predicate: () => eL
      },
      [eu.H.GIFT_INVENTORY_LIST]: {
        section: ep.nc_.INVENTORY,
        searchableTitles: [em.intl.string(em.t["9KeUbY"])],
        parent: eu.H.GIFT_INVENTORY,
        predicate: () => !eD
      },
      [eu.H.GIFT_BLOCKED_PAYMENTS]: {
        section: ep.nc_.INVENTORY,
        searchableTitles: [em.intl.string(em.t.vwMEHS)],
        parent: eu.H.GIFT_INVENTORY,
        predicate: () => eD
      },
      [eu.H.BILLING]: {
        section: ep.nc_.BILLING,
        searchableTitles: [em.intl.string(em.t.oeUm2s)],
        label: em.intl.string(em.t.oeUm2s),
        ariaLabel: em.intl.string(em.t.oeUm2s),
        element: Y.Ay
      },
      [eu.H.BILLING_PAYMENT_METHODS]: {
        section: ep.nc_.BILLING,
        searchableTitles: [em.intl.string(em.t.W26xGQ)],
        parent: eu.H.BILLING
      },
      [eu.H.BILLING_TRANSACTION_HISTORY]: {
        section: ep.nc_.BILLING,
        searchableTitles: [em.intl.string(em.t.obLrcK)],
        parent: eu.H.BILLING
      },
      [eu.H.APPEARANCE]: {
        section: ep.nc_.APPEARANCE,
        searchableTitles: [em.intl.string(em.t["iHH+ky"])],
        label: em.intl.string(em.t["iHH+ky"]),
        ariaLabel: em.intl.string(em.t["iHH+ky"]),
        element: V.Ay,
        newIndicator: (0, r.jsx)(eE, {}),
        newIndicatorDismissibleContentTypes: eh(),
        url: ep.BVt.SETTINGS("appearance")
      },
      [eu.H.APPEARANCE_THEME]: {
        section: ep.nc_.APPEARANCE,
        searchableTitles: [em.intl.string(em.t.Ksh3ik)],
        parent: eu.H.APPEARANCE
      },
      [eu.H.APPEARANCE_COLOR]: {
        section: ep.nc_.APPEARANCE,
        searchableTitles: [em.intl.string(em.t.OCOOiI)],
        parent: eu.H.APPEARANCE_THEME
      },
      [eu.H.APPEARANCE_ICON]: {
        section: ep.nc_.APPEARANCE,
        searchableTitles: [em.intl.string(em.t.RPh2ou)],
        parent: eu.H.APPEARANCE_THEME
      },
      [eu.H.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
        section: ep.nc_.APPEARANCE,
        searchableTitles: [em.intl.string(em.t.ZEoGMd)],
        parent: eu.H.APPEARANCE
      },
      [eu.H.APPEARANCE_LIST_SPACING]: {
        section: ep.nc_.APPEARANCE,
        searchableTitles: ["List Spacing"],
        parent: eu.H.APPEARANCE,
        newIndicator: (0, r.jsx)(o.LpS, {
          text: em.intl.string(em.t.y2b7CA),
          color: s.A.colors.BACKGROUND_BRAND.css
        })
      },
      [eu.H.APPEARANCE_SCALING_SPACING]: {
        section: ep.nc_.APPEARANCE,
        searchableTitles: [em.intl.string(em.t.qPOqoK)],
        parent: eu.H.APPEARANCE
      },
      [eu.H.ACCESSIBILITY]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t.G0neg7)],
        label: em.intl.string(em.t.G0neg7),
        ariaLabel: em.intl.string(em.t.G0neg7),
        element: U.Ay,
        url: ep.BVt.SETTINGS("accessibility")
      },
      [eu.H.ACCESSIBILITY_HIGH_CONTRAST]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t.aZlePv)],
        parent: eu.H.ACCESSIBILITY
      },
      [eu.H.ACCESSIBILITY_SWITCH_ICON]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t["S3z+pV"])],
        parent: eu.H.ACCESSIBILITY
      },
      [eu.H.ACCESSIBILITY_SATURATION]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t["5PWWCY"])],
        parent: eu.H.ACCESSIBILITY
      },
      [eu.H.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t.bQCodD)],
        parent: eu.H.ACCESSIBILITY_SATURATION
      },
      [eu.H.ACCESSIBILITY_LINK_DECORATIONS]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t.OLZFB8)],
        parent: eu.H.ACCESSIBILITY
      },
      [eu.H.ACCESSIBILITY_CUSTOM_CURSOR]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t["+Isihb"])],
        parent: eu.H.ACCESSIBILITY,
        predicate: () => (0, f.t)("SettingsRendererConfig")
      },
      [eu.H.ACCESSIBILITY_ROLE_STYLE]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t.uSOPWm)],
        parent: eu.H.ACCESSIBILITY
      },
      [eu.H.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(eg.default["2gFUEw"])],
        parent: eu.H.ACCESSIBILITY
      },
      [eu.H.ACCESSIBILITY_PROFILE_COLORS]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t.BT8Bmp)],
        parent: eu.H.ACCESSIBILITY
      },
      [eu.H.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t["sSY+mD"])],
        parent: eu.H.ACCESSIBILITY_PROFILE_COLORS
      },
      [eu.H.ACCESSIBILITY_CONTRAST]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t["TYyfO/"])],
        parent: eu.H.ACCESSIBILITY
      },
      [eu.H.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t.cguiec)],
        parent: eu.H.ACCESSIBILITY_CONTRAST
      },
      [eu.H.ACCESSIBILITY_REDUCED_MOTION]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t.e3TR1b)],
        parent: eu.H.ACCESSIBILITY
      },
      [eu.H.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t.b3XBzg)],
        parent: eu.H.ACCESSIBILITY_REDUCED_MOTION
      },
      [eu.H.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t.Iayoh5)],
        parent: eu.H.ACCESSIBILITY_REDUCED_MOTION
      },
      [eu.H.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t.iIaOlc)],
        parent: eu.H.ACCESSIBILITY_REDUCED_MOTION
      },
      [eu.H.ACCESSIBILITY_STICKERS]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t["6NtAuJ"])],
        parent: eu.H.ACCESSIBILITY_REDUCED_MOTION
      },
      [eu.H.ACCESSIBILITY_MESSAGES]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t.onqU6o)],
        parent: eu.H.ACCESSIBILITY
      },
      [eu.H.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t["3Fztn5"])],
        parent: eu.H.ACCESSIBILITY_MESSAGES
      },
      [eu.H.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t.TZ2hZH)],
        parent: eu.H.ACCESSIBILITY_MESSAGES
      },
      [eu.H.ACCESSIBILITY_TEXT_TO_SPEECH]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t.VpSKeO)],
        parent: eu.H.ACCESSIBILITY
      },
      [eu.H.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t.lsW5Ev)],
        parent: eu.H.ACCESSIBILITY
      },
      [eu.H.ACCESSIBILITY_HDR_DYNAMIC_RANGE]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [em.intl.string(em.t.nemtgW), "HDR", em.intl.string(em.t["O/Gjvn"])],
        parent: eu.H.ACCESSIBILITY,
        predicate: () => eW
      },
      [eu.H.ACCESSIBILITY_APPEARANCE_UPSELL]: {
        section: ep.nc_.ACCESSIBILITY,
        searchableTitles: [""],
        parent: eu.H.ACCESSIBILITY
      },
      [eu.H.POGGERMODE]: {
        section: ep.nc_.POGGERMODE,
        searchableTitles: [em.intl.string(em.t.AtCukI)],
        label: em.intl.string(em.t.AtCukI),
        ariaLabel: em.intl.string(em.t.AtCukI),
        element: x.A,
        predicate: () => O.A.settingsVisible,
        icon: (0, r.jsx)("img", {
          alt: "",
          src: n(724405),
          className: eb.$
        })
      },
      [eu.H.CHAT]: {
        section: ep.nc_.TEXT,
        searchableTitles: [em.intl.string(em.t["/VQax8"])],
        label: em.intl.string(em.t["/VQax8"]),
        ariaLabel: em.intl.string(em.t["/VQax8"]),
        element: ei.A,
        url: ep.BVt.SETTINGS("text")
      },
      [eu.H.MESSAGE_SEARCH]: {
        section: ep.nc_.TEXT,
        searchableTitles: [em.intl.string(em.t.VYODPD)],
        parent: eu.H.CHAT
      },
      [eu.H.MESSAGE_SEARCH_ALL_DMS]: {
        section: ep.nc_.TEXT,
        searchableTitles: [em.intl.string(em.t["t4+fbe"])],
        parent: eu.H.MESSAGE_SEARCH
      },
      [eu.H.CHAT_INLINE_MEDIA]: {
        section: ep.nc_.TEXT,
        searchableTitles: [em.intl.string(em.t.U68Dgp)],
        parent: eu.H.CHAT
      },
      [eu.H.CHAT_INLINE_MEDIA_LINKS]: {
        section: ep.nc_.TEXT,
        searchableTitles: [em.intl.string(em.t.U47N1p)],
        parent: eu.H.CHAT_INLINE_MEDIA
      },
      [eu.H.CHAT_INLINE_MEDIA_UPLOADS]: {
        section: ep.nc_.TEXT,
        searchableTitles: [em.intl.string(em.t.VP11No)],
        parent: eu.H.CHAT_INLINE_MEDIA
      },
      [eu.H.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
        section: ep.nc_.TEXT,
        searchableTitles: [em.intl.string(em.t["5S2AK+"])],
        parent: eu.H.CHAT_INLINE_MEDIA
      },
      [eu.H.CHAT_EMBEDS]: {
        section: ep.nc_.TEXT,
        searchableTitles: [em.intl.string(em.t.PWZOn4)],
        parent: eu.H.CHAT
      },
      [eu.H.CHAT_EMBEDS_LINK_PREVIEWS]: {
        section: ep.nc_.TEXT,
        searchableTitles: [em.intl.string(em.t.xX0ZTA)],
        parent: eu.H.CHAT_EMBEDS
      },
      [eu.H.CHAT_EMOJI]: {
        section: ep.nc_.TEXT,
        searchableTitles: [em.intl.string(em.t.sMOuuS)],
        parent: eu.H.CHAT
      },
      [eu.H.CHAT_EMOJI_REACTIONS]: {
        section: ep.nc_.TEXT,
        searchableTitles: [em.intl.string(em.t.Iv24sm)],
        parent: eu.H.CHAT_EMOJI
      },
      [eu.H.CHAT_EMOJI_EMOTICONS]: {
        section: ep.nc_.TEXT,
        searchableTitles: [em.intl.string(em.t["79qal8"])],
        parent: eu.H.CHAT_EMOJI
      },
      [eu.H.CHAT_STICKERS]: {
        section: ep.nc_.TEXT,
        searchableTitles: [em.intl.string(em.t["6NtAuJ"])],
        parent: eu.H.CHAT
      },
      [eu.H.CHAT_STICKERS_AUTOCOMPLETE]: {
        section: ep.nc_.TEXT,
        searchableTitles: [em.intl.string(em.t["29xPVZ"])],
        parent: eu.H.CHAT_STICKERS
      },
      [eu.H.CHAT_SOUNDMOJI]: {
        section: ep.nc_.TEXT,
        searchableTitles: [em.intl.string(em.t.EHlAMc)],
        parent: eu.H.CHAT,
        predicate: () => (0, C.AA)({
          location: "SettingsRendererConfig"
        })
      },
      [eu.H.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
        section: ep.nc_.TEXT,
        searchableTitles: [em.intl.string(em.t["CtYr+U"])],
        parent: eu.H.CHAT_SOUNDMOJI,
        predicate: () => (0, C.AA)({
          location: "SettingsRendererConfig"
        })
      },
      [eu.H.CHAT_TEXT_BOX]: {
        section: ep.nc_.TEXT,
        searchableTitles: [em.intl.string(em.t.afR0pI)],
        parent: eu.H.CHAT
      },
      [eu.H.CHAT_TEXT_BOX_PREVIEW]: {
        section: ep.nc_.TEXT,
        searchableTitles: [em.intl.string(em.t.AqGrEI)],
        parent: eu.H.CHAT_TEXT_BOX
      },
      [eu.H.CHAT_THREADS]: {
        section: ep.nc_.TEXT,
        searchableTitles: [em.intl.string(em.t.B2panI)],
        parent: eu.H.CHAT
      },
      [eu.H.CHAT_THREADS_SPLIT_VIEW]: {
        section: ep.nc_.TEXT,
        searchableTitles: [em.intl.string(em.t.AInv5m)],
        parent: eu.H.CHAT_THREADS
      },
      [eu.H.CHAT_SPOILERS]: {
        section: ep.nc_.TEXT,
        searchableTitles: [em.intl.string(em.t.QgwmVz)],
        parent: eu.H.CHAT
      },
      [eu.H.CHAT_MENTION_SUGGESTIONS]: {
        section: ep.nc_.TEXT,
        searchableTitles: [em.intl.string(em.t.uXQ2xT)],
        parent: eu.H.CHAT_TEXT_BOX,
        predicate: () => eY
      },
      [eu.H.KEYBINDS]: {
        section: ep.nc_.KEYBINDS,
        searchableTitles: [em.intl.string(em.t.T9DA2K)],
        label: em.intl.string(em.t.T9DA2K),
        element: Q.A,
        url: ep.BVt.SETTINGS("keybinds")
      },
      [eu.H.LANGUAGE]: {
        section: ep.nc_.LANGUAGE,
        searchableTitles: [em.intl.string(em.t.IHMsPn), em.intl.string(em.t.dyamEI), em.intl.string(em.t.p8NOwi), em.intl.string(em.t["+o/sOo"])],
        label: em.intl.string(em.t.KyFVyi),
        element: $.A,
        url: ep.BVt.SETTINGS("language")
      },
      [eu.H.WINDOW_SETTINGS]: {
        section: ep.nc_.WINDOWS,
        searchableTitles: [em.intl.string(em.t.ZkDZov)],
        label: em.intl.string(em.t.ZkDZov),
        element: es.A,
        predicate: () => L.isPlatformEmbedded && (0, L.isWindows)()
      },
      [eu.H.LINUX_SETTINGS]: {
        section: ep.nc_.LINUX,
        searchableTitles: [em.intl.string(em.t["7pPjTW"])],
        label: em.intl.string(em.t["7pPjTW"]),
        element: eT,
        predicate: () => L.isPlatformEmbedded && (0, L.isLinux)()
      },
      [eu.H.SETTINGS_ADVANCED]: {
        section: ep.nc_.ADVANCED,
        searchableTitles: [em.intl.string(em.t["8/udY0"])],
        label: em.intl.string(em.t["8/udY0"]),
        ariaLabel: em.intl.string(em.t["8/udY0"]),
        element: H.A
      },
      [eu.H.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
        section: ep.nc_.ADVANCED,
        searchableTitles: [em.intl.string(em.t.ObIb1Q)],
        parent: eu.H.SETTINGS_ADVANCED,
        predicate: () => R.p5
      },
      [eu.H.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
        section: ep.nc_.ADVANCED,
        searchableTitles: [em.intl.string(em.t["eOC/F2"])],
        parent: eu.H.SETTINGS_ADVANCED,
        predicate: () => L.isPlatformEmbedded && !(0, L.isMac)()
      },
      [eu.H.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
        section: ep.nc_.ADVANCED,
        searchableTitles: [em.intl.string(em.t.fi3UQN)],
        parent: eu.H.SETTINGS_ADVANCED,
        predicate: () => eM
      },
      [eu.H.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
        section: ep.nc_.ADVANCED,
        searchableTitles: [em.intl.string(em.t.erOqlh)],
        parent: eu.H.SETTINGS_ADVANCED,
        predicate: () => eU
      },
      [eu.H.PRIVATE_BROWSING_PERK]: {
        section: ep.nc_.PRIVATE_BROWSING,
        label: em.intl.string(ef.default.bU5ANm),
        searchableTitles: [em.intl.string(ef.default.SsTtq3)],
        predicate: () => (0, T.lM)("SettingsRendererConfig"),
        newIndicator: (0, r.jsx)(eS, {}),
        newIndicatorDismissibleContentTypes: eC(),
        url: ep.BVt.SETTINGS("private-browsing")
      },
      [eu.H.ACTIVITY_PRIVACY]: {
        section: ep.nc_.ACTIVITY_PRIVACY,
        searchableTitles: [em.intl.string(em.t.Cq98yL)],
        label: em.intl.string(em.t.Cq98yL),
        ariaLabel: em.intl.string(em.t.Cq98yL),
        element: B.Ay,
        predicate: () => !ev,
        url: ep.BVt.SETTINGS("activity-privacy")
      },
      [eu.H.ACTIVITY_PRIVACY_STATUS]: {
        section: ev ? ep.nc_.GAMES : ep.nc_.ACTIVITY_PRIVACY,
        searchableTitles: [em.intl.string(em.t["8ka8li"])],
        parent: ev ? eu.H.GAMES_ACTIVITY_PRIVACY : eu.H.ACTIVITY_PRIVACY
      },
      [eu.H.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
        section: ev ? ep.nc_.GAMES : ep.nc_.ACTIVITY_PRIVACY,
        searchableTitles: [em.intl.string(em.t.VOszPA)],
        parent: ev ? eu.H.GAMES_ACTIVITY_PRIVACY : eu.H.ACTIVITY_PRIVACY
      },
      [eu.H.ACTIVITY_PRIVACY_TOS]: {
        section: ev ? ep.nc_.GAMES : ep.nc_.ACTIVITY_PRIVACY,
        searchableTitles: [""],
        parent: ev ? eu.H.GAMES_ACTIVITY_PRIVACY : eu.H.ACTIVITY_PRIVACY
      },
      [eu.H.ACTIVITY_PRIVACY_STATUS_DISPLAY]: {
        section: ep.nc_.ACTIVITY_PRIVACY,
        searchableTitles: [em.intl.string(em.t["4F2KoC"])],
        parent: eu.H.ACTIVITY_PRIVACY
      },
      [eu.H.REGISTERED_GAMES]: {
        section: ep.nc_.REGISTERED_GAMES,
        searchableTitles: [em.intl.string(em.t.AVDyEj)],
        label: em.intl.string(em.t.AVDyEj),
        element: q.Ay,
        predicate: () => !ev && (0, eo.Pi)()
      },
      [eu.H.OVERLAY]: {
        section: ep.nc_.OVERLAY,
        searchableTitles: [em.intl.string(em.t["9cb1Uz"]), em.intl.string(em.t.HcoRu0)],
        label: em.intl.string(em.t["9cb1Uz"]),
        element: ee.Ay,
        predicate: () => !ev && ey
      },
      [eu.H.CHANGELOG]: {
        section: "changelog",
        onClick: () => (0, A.j)(true),
        searchableTitles: [em.intl.string(em.t.LRmNAl)],
        label: em.intl.string(em.t.LRmNAl)
      },
      [eu.H.MERCHANDISE]: {
        section: "merchandise",
        onClick: () => {
          let e = "https://discordmerch.com/Dsktopprm";
          P.default.track(ep.HAw.USER_SETTINGS_MERCH_LINK_CLICKED), (0, D.h)({
            href: e,
            shouldConfirm: true,
            onConfirm: () => {
              P.default.track(ep.HAw.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, m.A)(e)
            }
          })
        },
        searchableTitles: [em.intl.string(em.t.sMEktT)],
        label: em.intl.string(em.t.sMEktT),
        ariaLabel: em.intl.string(em.t.sMEktT)
      },
      [eu.H.EXPERIMENTS]: {
        section: ep.nc_.EXPERIMENTS,
        searchableTitles: ["Experiments"],
        label: "Experiments",
        element: ea.A,
        predicate: () => v.A.isDeveloper,
        url: ep.BVt.SETTINGS("experiments")
      },
      [eu.H.DEVELOPER_OPTIONS]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Developer Options"],
        label: "Developer Options",
        ariaLabel: "Developer Options",
        element: Z.A,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Overrides"],
        parent: eu.H.DEVELOPER_OPTIONS,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_FLAGS_TAB]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Developer Options Flags"],
        parent: eu.H.DEVELOPER_OPTIONS,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_LOGGING_TAB]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Logging"],
        parent: eu.H.DEVELOPER_OPTIONS,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Manual Triggers"],
        parent: eu.H.DEVELOPER_OPTIONS,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Design Tools"],
        parent: eu.H.DEVELOPER_OPTIONS,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Tracing Requests"],
        parent: eu.H.DEVELOPER_OPTIONS_FLAGS_TAB,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_FORCED_CANARY]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Forced Canary"],
        parent: eu.H.DEVELOPER_OPTIONS_FLAGS_TAB,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Log Keyboard Mismatches"],
        parent: eu.H.DEVELOPER_OPTIONS_FLAGS_TAB,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Gateway Events To Console"],
        parent: eu.H.DEVELOPER_OPTIONS_LOGGING_TAB,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Rpc Events Commands"],
        parent: eu.H.DEVELOPER_OPTIONS_LOGGING_TAB,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Analytics Events Logging"],
        parent: eu.H.DEVELOPER_OPTIONS_LOGGING_TAB,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Always deliver ads"],
        parent: eu.H.DEVELOPER_OPTIONS_FLAGS_TAB,
        predicate: () => ej && v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Source Maps"],
        parent: eu.H.DEVELOPER_OPTIONS_FLAGS_TAB,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Analytics Debugger View"],
        parent: eu.H.DEVELOPER_OPTIONS_LOGGING_TAB,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Idle Status Indicator"],
        parent: eu.H.DEVELOPER_OPTIONS_FLAGS_TAB,
        predicate: () => ej && v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Accessibility Auditing"],
        parent: eu.H.DEVELOPER_OPTIONS_FLAGS_TAB,
        predicate: () => false
      },
      [eu.H.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["CSS Debugging"],
        parent: eu.H.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
        predicate: () => ej && v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_HIGHLIGHT_MANA_COMPONENTS]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Highlight Mana Components"],
        parent: eu.H.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
        predicate: () => ej && v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Highlight Void Toggleable Components"],
        parent: eu.H.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
        predicate: () => ej && v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Layout Debugging"],
        parent: eu.H.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
        predicate: () => ej && v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Layout Debugging"],
        parent: eu.H.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
        predicate: () => ej && v.A.isDeveloper && j.default.layoutDebuggingEnabled
      },
      [eu.H.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Preview Unpublished Collections"],
        parent: eu.H.DEVELOPER_OPTIONS_FLAGS_TAB,
        predicate: () => ej && v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Disable App Collections Cache"],
        parent: eu.H.DEVELOPER_OPTIONS_FLAGS_TAB,
        predicate: () => ej && v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Override Client Side"],
        parent: eu.H.DEVELOPER_OPTIONS_OVERRIDES_TAB,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Override Client Side Premium Type"],
        parent: eu.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Override Client Side Account Created Data"],
        parent: eu.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Open Overlay"],
        parent: eu.H.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_RESET_SOCKET]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Reset Socket"],
        parent: eu.H.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Clear Caches"],
        parent: eu.H.DEVELOPER_OPTIONS_FLAGS_TAB,
        predicate: () => g.T && v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_SHOW_TOTP_SUCCESS]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Show TOTP Success"],
        parent: eu.H.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_TRIGGER_SUSPICIOUS_SESSIONS]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Trigger Suspicious Sessions Notification"],
        parent: eu.H.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_CRASHES]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Crashes"],
        parent: eu.H.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Survey Override"],
        parent: eu.H.DEVELOPER_OPTIONS_OVERRIDES_TAB,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Changelog Override"],
        parent: eu.H.DEVELOPER_OPTIONS_OVERRIDES_TAB,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Build Override"],
        parent: eu.H.DEVELOPER_OPTIONS_OVERRIDES_TAB,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Prevent Popouts From Closing Automatically"],
        parent: eu.H.DEVELOPER_OPTIONS_FLAGS_TAB,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
        section: ep.nc_.DEVELOPER_OPTIONS,
        searchableTitles: ["Disable Align Chat Input"],
        parent: eu.H.DEVELOPER_OPTIONS_FLAGS_TAB,
        predicate: () => v.A.isDeveloper
      },
      [eu.H.LOGOUT]: {
        section: "logout",
        onClick: () => {
          (0, a.A)({
            title: em.intl.string(em.t["2jxGer"]),
            subtitle: em.intl.string(em.t.SUnWBB),
            confirmText: em.intl.string(em.t["2jxGer"]),
            onConfirm: () => d.A.logout("settings")
          })
        },
        label: em.intl.string(em.t["2jxGer"]),
        ariaLabel: em.intl.string(em.t["2jxGer"]),
        icon: (0, r.jsx)(o.oLl, {
          size: "xs",
          color: "currentColor"
        }),
        variant: "destructive"
      },
      [eu.H.SOCIAL_LINKS]: {
        section: p.Fq.CUSTOM,
        element: G.A
      },
      [eu.H.CLIENT_DEBUG_INFO]: {
        section: p.Fq.CUSTOM,
        element: w.A
      }
    })
  }