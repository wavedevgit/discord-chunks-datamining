/** Chunk was on web.js **/
/** chunk id: 519057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => tn,
  Re: () => ek,
  f7: () => eU,
  k3: () => eM,
  pe: () => ej
}), require("./896048.js"), require("./747238.js");
var r, Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk877624 = require("./877624.js"),
  Chunk311907 = require("./311907.js"),
  Chunk531417 = require("./531417.js"),
  Chunk554146 = require("./554146.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk77729 = require("./77729.js"),
  Chunk573648 = require("./573648.js"),
  Chunk587895 = require("./587895.js"),
  Chunk469993 = require("./469993.js"),
  Chunk662427 = require("./662427.js"),
  Chunk826673 = require("./826673.js"),
  Chunk367727 = require("./367727.js"),
  Chunk487329 = require("./487329.js"),
  Chunk161518 = require("./161518.js"),
  Chunk49463 = require("./49463.js"),
  Chunk15285 = require("./15285.js"),
  Chunk142120 = require("./142120.js"),
  Chunk652896 = require("./652896.js"),
  Chunk585510 = require("./585510.js"),
  Chunk610136 = require("./610136.js"),
  Chunk229527 = require("./229527.js"),
  Chunk93474 = require("./93474.js"),
  Chunk164956 = require("./164956.js"),
  Chunk857071 = require("./857071.js"),
  Chunk772786 = require("./772786.js"),
  Chunk869968 = require("./869968.js"),
  Chunk923349 = require("./923349.js"),
  Chunk437852 = require("./437852.js"),
  Chunk264779 = require("./264779.js"),
  Chunk412260 = require("./412260.js"),
  Chunk426123 = require("./426123.js"),
  Chunk83375 = require("./83375.js"),
  Chunk859703 = require("./859703.js"),
  Chunk597936 = require("./597936.js"),
  Chunk34550 = require("./34550.js"),
  Chunk655116 = require("./655116.js"),
  Chunk105530 = require("./105530.js"),
  Chunk942405 = require("./942405.js"),
  Chunk617617 = require("./617617.js"),
  Chunk340913 = require("./340913.js"),
  Chunk976910 = require("./976910.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk546183 = require("./546183.js"),
  Chunk347481 = require("./347481.js"),
  Chunk734057 = require("./734057.js"),
  Chunk962173 = require("./962173.js"),
  Chunk584584 = require("./584584.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk430452 = require("./430452.js"),
  Chunk803224 = require("./803224.js"),
  Chunk576705 = require("./576705.js"),
  Chunk362790 = require("./362790.js"),
  Chunk383501 = require("./383501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk437959 = require("./437959.js"),
  Chunk351906 = require("./351906.js"),
  Chunk274184 = require("./274184.js"),
  Chunk870570 = require("./870570.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk295405 = require("./295405.js"),
  Chunk166403 = require("./166403.js"),
  Chunk816733 = require("./816733.js"),
  Chunk469778 = require("./469778.js"),
  Chunk147964 = require("./147964.js"),
  Chunk723702 = require("./723702.js"),
  Chunk927578 = require("./927578.js"),
  Chunk755439 = require("./755439.js"),
  Chunk422033 = require("./422033.js"),
  Chunk966846 = require("./966846.js"),
  Chunk652215 = require("./652215.js");
require("./436317.js");
var Chunk788868 = require("./788868.js"),
  Chunk654487 = require("./654487.js"),
  Chunk818348 = require("./818348.js"),
  Chunk731854 = require("./731854.js");

function eP(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eP(e, t, n[t])
    })
  }
  return e
}

function ex(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eL(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ex(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ej = {
    [Chunk652215.kqX.DOWNLOAD_NAG]: Chunk554146.M.NAGBAR_NOTICE_DOWNLOAD,
    [Chunk652215.kqX.CONNECT_SPOTIFY]: Chunk554146.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
    [Chunk652215.kqX.CONNECT_PLAYSTATION]: Chunk554146.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
    [Chunk652215.kqX.PASSKEY_BACKUP]: Chunk554146.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
    [Chunk652215.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: Chunk554146.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
    [Chunk652215.kqX.PREMIUM_REACTIVATE]: Chunk554146.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
    [Chunk652215.kqX.BOUNCED_EMAIL_DETECTED]: Chunk554146.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
    [Chunk652215.kqX.ACTIVATE_SERVER_SUBSCRIPTION]: Chunk554146.M.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
    [Chunk652215.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: Chunk554146.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
    [Chunk652215.kqX.POMELO_ELIGIBLE]: Chunk554146.M.NAGBAR_NOTICE_POMELO,
    [Chunk652215.kqX.CHECKOUT_RECOVERY_NAGBAR]: Chunk554146.M.CHECKOUT_RECOVERY_NAGBAR
  },
  eM = {
    [Chunk652215.kqX.GIFTING_PROMOTION_REMINDER]: Chunk554146.M.GIFTING_PROMOTION_REMINDER
  },
  ek = {
    [Chunk652215.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: Chunk554146.M.NAGBAR_NOTICE_OFFER_EXPIRING,
    [Chunk652215.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: Chunk554146.M.NAGBAR_NOTICE_OFFER_EXPIRING
  },
  eU = {
    [Chunk652215.kqX.OUTBOUND_PROMOTION]: Chunk554146.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR
  },
  eG = {
    [Chunk652215.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
    [Chunk652215.kqX.PREMIUM_UNCANCEL]: "hideUncancelReminder",
    [Chunk652215.kqX.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
    [Chunk652215.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
    [Chunk652215.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
    [Chunk652215.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
    [Chunk652215.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
    [Chunk652215.kqX.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
    [Chunk652215.kqX.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
    [Chunk652215.kqX.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
    [Chunk652215.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
    [Chunk652215.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
    [Chunk652215.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
    [Chunk652215.kqX.MACOS_19_DEPRECATED_MESSAGE]: "hideMacOS19DeprecationMessageNotice",
    [Chunk652215.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice"
  },
  eV = new Set([Chunk652215.kqX.NO_INPUT_DETECTED, Chunk652215.kqX.NO_INPUT_DEVICES_DETECTED, Chunk652215.kqX.STREAMER_MODE, Chunk652215.kqX.VIDEO_UNSUPPORTED_BROWSER, Chunk652215.kqX.SPOTIFY_AUTO_PAUSED, Chunk652215.kqX.DISPATCH_ERROR, Chunk652215.kqX.DISPATCH_ERROR, Chunk652215.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS, Chunk652215.kqX.BLOCKED_BY_PROXY]),
  eF = {},
  eB = {},
  eH = Object.freeze({
    id: null,
    message: null,
    buttonText: null,
    callback: true,
    metadata: null
  }),
  eY = null;

function eW(e) {
  return eG[e] + "-untilAtLeast"
}

function eK(e) {
  let t = u.w.get(eW(e));
  return null != t ? a()(t) : null
}

function ez(e, t) {
  u.w.set(eW(e), t.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
}

function eq(e) {
  u.w.remove(eW(e))
}

function eX(e, t, n) {
  if (null == e) return;
  let r = eG[e];
  null == r || t || u.w.set(r, true), eV.has(e) && (eF[e] = true), null != n && null != r ? ez(e, n) : eq(e)
}

function eZ(e) {
  if (null == e || null != ek[e]) returnfalse;
  let t = eM[e];
  if (null != t) return (0, E.En)(t).isDismissed;
  let n = ej[e];
  if (null != n) return (0, g.k8)(n);
  let r = eG[e];
  if (null != r) {
    let t = eK(e);
    if (null != t) return null == t ? true : t.isAfter(a()())
  }
  let i = eF[e];
  return !!i || (null != r && "" !== r ? u.w.get(r) : !!eV.has(e) && i)
}
let eQ = [Chunk652215.kqX.QUARANTINED, Chunk652215.kqX.AUTOMOD_QUARANTINED_USER_PROFILE, Chunk652215.kqX.VIEWING_ROLES, Chunk652215.kqX.INVITED_TO_SPEAK, Chunk652215.kqX.LURKING_GUILD, Chunk652215.kqX.VOICE_DISABLED, Chunk652215.kqX.NO_INPUT_DEVICES_DETECTED, Chunk652215.kqX.NO_INPUT_DETECTED, Chunk652215.kqX.PTT_NO_KEYBIND_WARNING, Chunk652215.kqX.HARDWARE_MUTE, Chunk652215.kqX.DISPATCH_ERROR, Chunk652215.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS, Chunk652215.kqX.SPOTIFY_AUTO_PAUSED, Chunk652215.kqX.WIN32_DEPRECATED_MESSAGE, Chunk652215.kqX.WIN7_8_DEPRECATED_MESSAGE, Chunk652215.kqX.MACOS_19_DEPRECATED_MESSAGE, Chunk652215.kqX.BLOCKED_BY_PROXY, Chunk652215.kqX.VOICE_CONNECTED_LAST_SESSION, Chunk652215.kqX.SYSTEM_SERVICE_WARNING, Chunk652215.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION, Chunk652215.kqX.GUILD_RAID_NOTIFICATION, Chunk652215.kqX.GIFTING_PROMOTION_REMINDER, Chunk652215.kqX.QUESTS_PROGRESS_INTERRUPTION, Chunk652215.kqX.UNCLAIMED_ACCOUNT, Chunk652215.kqX.POMELO_ELIGIBLE, Chunk652215.kqX.PENDING_MEMBER, Chunk652215.kqX.CHECKOUT_RECOVERY_NAGBAR, Chunk652215.kqX.OUTBOUND_PROMOTION, Chunk652215.kqX.CORRUPT_INSTALLATION, Chunk652215.kqX.VIDEO_UNSUPPORTED_BROWSER, Chunk652215.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK, Chunk652215.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, Chunk652215.kqX.STREAMER_MODE, Chunk652215.kqX.SCHEDULED_MAINTENANCE, Chunk652215.kqX.BOUNCED_EMAIL_DETECTED, Chunk652215.kqX.UNVERIFIED_ACCOUNT, Chunk652215.kqX.PREMIUM_TIER_2_TRIAL_ENDING, Chunk652215.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING, Chunk652215.kqX.PREMIUM_TIER_0_TRIAL_ENDING, Chunk652215.kqX.PREMIUM_UNCANCEL, Chunk652215.kqX.PREMIUM_MISSING_PAYMENT, Chunk652215.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT, Chunk652215.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT, Chunk652215.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, Chunk652215.kqX.PREMIUM_REACTIVATE, Chunk652215.kqX.ACTIVATE_SERVER_SUBSCRIPTION, Chunk652215.kqX.PASSKEY_BACKUP, Chunk652215.kqX.APPLICATION_TEST_MODE, Chunk652215.kqX.DOWNLOAD_NAG, Chunk652215.kqX.CONNECT_SPOTIFY, Chunk652215.kqX.CONNECT_PLAYSTATION, Chunk652215.kqX.SURVEY, Chunk652215.kqX.SAFETY_USER_SENTIMENT_NAGBAR, Chunk652215.kqX.BLOCK_USER_FEEDBACK_NAGBAR, Chunk652215.kqX.IGNORE_USER_FEEDBACK_NAGBAR];
Chunk652215.kqX.QUARANTINED, Chunk652215.kqX.AUTOMOD_QUARANTINED_USER_PROFILE, Chunk652215.kqX.VIEWING_ROLES, Chunk652215.kqX.INVITED_TO_SPEAK, Chunk652215.kqX.LURKING_GUILD, Chunk652215.kqX.VOICE_DISABLED, Chunk652215.kqX.NO_INPUT_DETECTED, Chunk652215.kqX.HARDWARE_MUTE, Chunk652215.kqX.DISPATCH_ERROR, Chunk652215.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS, Chunk652215.kqX.SPOTIFY_AUTO_PAUSED, Chunk652215.kqX.BLOCKED_BY_PROXY, Chunk652215.kqX.VOICE_CONNECTED_LAST_SESSION, Chunk652215.kqX.PENDING_MEMBER, Chunk652215.kqX.STREAMER_MODE, Chunk652215.kqX.SCHEDULED_MAINTENANCE;
let e$ = {
  [Chunk652215.kqX.GIFTING_PROMOTION_REMINDER]: {
    predicate: () => {
      let {
        enabled: e
      } = L.qe.getCurrentConfig({
        location: "NoticeStore"
      }, {
        autoTrackExposure: false
      }), {
        enabled: t
      } = L.Fq.getConfig({
        location: "NoticeStore"
      }), n = M.A.getMarketingComponentByType(s.C.GIFT_REMINDER_NAGBAR);
      return e && t && null != n && (0, E.En)(c.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed && !eZ(eT.kqX.GIFTING_PROMOTION_REMINDER)
    }
  },
  [Chunk652215.kqX.GUILD_RAID_NOTIFICATION]: {
    predicate: () => (0, S.dj)().show && !eZ(eT.kqX.GUILD_RAID_NOTIFICATION),
    metadata: () => ({
      dismissUntil: a()().add(3, "hours").toDate()
    })
  },
  [Chunk652215.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
    predicate: e => {
      let {
        currentUser: t,
        selectedGuildId: n
      } = e;
      if (null == n) returnfalse;
      let r = et.Ay.getMember(n, t.id);
      return null != r && !r.isPending && (0, C.TR)(r)
    }
  },
  [Chunk652215.kqX.QUARANTINED]: {
    predicate: e => {
      let {
        currentUser: t
      } = e;
      return t.hasFlag(eT.nhx.QUARANTINED)
    }
  },
  [Chunk652215.kqX.VIEWING_ROLES]: {
    predicate: e => {
      let {
        selectedGuildId: t
      } = e;
      return R.A.isViewingRoles(t)
    }
  },
  [Chunk652215.kqX.INVITED_TO_SPEAK]: {
    predicate: e => {
      let {
        voiceState: t
      } = e;
      return (0, H.eY)(t) === H.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
    }
  },
  [Chunk652215.kqX.LURKING_GUILD]: {
    predicate: e => {
      let {
        selectedGuildId: t
      } = e;
      return null != t && w.A.isLurking(t)
    }
  },
  [Chunk652215.kqX.VOICE_DISABLED]: {
    predicate: () => null != eo.A.getRemoteDisconnectVoiceChannelId()
  },
  [Chunk652215.kqX.VOICE_CONNECTED_LAST_SESSION]: {
    predicate: () => null != eo.A.getLastSessionVoiceChannelId()
  },
  [Chunk652215.kqX.NO_INPUT_DETECTED]: {
    predicate: () => b.A.hasActiveErrorOfType(y.iy.NO_AUDIO_INPUT_DETECTED)
  },
  [Chunk652215.kqX.NO_INPUT_DEVICES_DETECTED]: {
    predicate: () => b.A.hasActiveErrorOfType(y.iy.NO_INPUT_DEVICES)
  },
  [Chunk652215.kqX.HARDWARE_MUTE]: {
    predicate: () => eo.A.isConnected() && er.A.isHardwareMute() && er.A.isEnableHardwareMuteNotice(),
    metadata: () => {
      let e = er.A.getInputDeviceId(),
        t = Q.A.getVendor(e),
        n = Q.A.getModel(e);
      if (null != t && null != n) return {
        vendor: t,
        model: n
      }
    }
  },
  [Chunk652215.kqX.PTT_NO_KEYBIND_WARNING]: {
    predicate: () => !!eo.A.isConnected() && er.A.getMode() === eT.TBI.PUSH_TO_TALK && !(er.A.getSettings().modeOptions.shortcut.length > 0) && !!K.A.getConfig({
      location: "NoticeStore"
    }).showPTTNoKeybindWarning
  },
  [Chunk652215.kqX.DISPATCH_ERROR]: {
    predicate: () => null != eA.A.getLastError(),
    metadata: () => ({
      error: eA.A.getLastError()
    })
  },
  [Chunk652215.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
    predicate: () => null != eI.A.getLastProgress(),
    metadata: () => eI.A.getLastProgress()
  },
  [Chunk652215.kqX.SPOTIFY_AUTO_PAUSED]: {
    predicate: () => B.A.wasAutoPaused()
  },
  [Chunk652215.kqX.BLOCKED_BY_PROXY]: {
    predicate: () => !eZ(eT.kqX.BLOCKED_BY_PROXY) && U.A.blockedByProxy && k.A.getCurrentConfig({
      location: "notice_store"
    }).eligibleForNotice
  },
  [Chunk652215.kqX.UNCLAIMED_ACCOUNT]: {
    predicate: e => {
      let {
        currentUser: t
      } = e;
      return null != t && !t.isClaimed()
    }
  },
  [Chunk652215.kqX.PENDING_MEMBER]: {
    predicate: e => {
      var t, n, r;
      let {
        selectedGuildId: i,
        currentUser: a
      } = e;
      return null != (t = null != i && null != a && !(null == (n = en.A.getGuild(i)) ? true : n.features.has(eT.GuildFeatures.GUILD_ONBOARDING)) && (null == (r = et.Ay.getMember(i, a.id)) ? true : r.isPending)) && t
    }
  },
  [Chunk652215.kqX.OUTBOUND_PROMOTION]: {
    predicate: () => (0, j.So)()
  },
  [Chunk652215.kqX.CORRUPT_INSTALLATION]: {
    predicate: () => eO.isPlatformEmbedded && (!l.A.supported() || eS.A.isCorruptInstallation())
  },
  [Chunk652215.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
    predicate: e => {
      let {
        voiceChannelId: t
      } = e;
      return null != t && eh.A.hasVideo(t) && !er.A.supports(ew.O5.VIDEO) && !eZ(eT.kqX.VIDEO_UNSUPPORTED_BROWSER)
    }
  },
  [Chunk652215.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
    predicate: e => {
      let {
        currentUser: t
      } = e;
      return ev.Ay.canRedeemPremiumPerks(t) && ee.A.getDetectedOffPlatformPremiumPerks().length > 0
    },
    metadata: () => ee.A.getDetectedOffPlatformPremiumPerks()[0]
  },
  [Chunk652215.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
    predicate: () => !eZ(eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && ee.A.getDetectedOffPlatformPremiumPerks().length > 0,
    metadata: () => ee.A.getDetectedOffPlatformPremiumPerks()[0]
  },
  [Chunk652215.kqX.STREAMER_MODE]: {
    predicate: () => ed.A.enabled
  },
  [Chunk652215.kqX.DOWNLOAD_NAG]: {
    predicate: () => !eO.isPlatformEmbedded && !eZ(eT.kqX.DOWNLOAD_NAG)
  },
  [Chunk652215.kqX.SCHEDULED_MAINTENANCE]: {
    predicate: () => null != eu.A.getScheduledMaintenance(),
    metadata: () => {
      let e = eu.A.getScheduledMaintenance();
      if (null != e) return {
        id: e.id,
        start: new Date(e.scheduled_for),
        end: new Date(e.scheduled_until)
      }
    }
  },
  [Chunk652215.kqX.SURVEY]: {
    predicate: () => null != ef.Ay.getCurrentSurvey(),
    metadata: () => ef.Ay.getCurrentSurvey()
  },
  [Chunk652215.kqX.UNVERIFIED_ACCOUNT]: {
    predicate: e => {
      let {
        currentUser: t
      } = e;
      return (null == t ? true : t.email) != null && !t.verified
    }
  },
  [Chunk652215.kqX.BOUNCED_EMAIL_DETECTED]: {
    predicate: e => {
      let {
        currentUser: t
      } = e;
      return null == t ? true : t.hasBouncedEmail
    }
  },
  [Chunk652215.kqX.CONNECT_SPOTIFY]: {
    predicate: () => !B.A.hasConnectedAccount() && v.Ay.isObservedAppRunning(p.A.get(eT.fg2.SPOTIFY).name) && !eZ(eT.kqX.CONNECT_SPOTIFY)
  },
  [Chunk652215.kqX.WIN32_DEPRECATED_MESSAGE]: {
    predicate: () => (null === f.A || true === f.A ? true : f.A.os.arch) === "ia32" && (null === f.A || true === f.A ? true : f.A.process.platform) === "win32",
    metadata: () => ({
      dismissUntil: a()().add(5, "days").toDate()
    })
  },
  [Chunk652215.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
    predicate: () => {
      if ((null === f.A || true === f.A ? true : f.A.process.platform) === "win32") try {
        return 10 > parseInt(null === f.A || true === f.A ? true : f.A.os.release.split(".")[0])
      } catch (e) {}
      returnfalse
    },
    metadata: () => ({
      dismissUntil: a()().add(5, "days").toDate()
    })
  },
  [Chunk652215.kqX.MACOS_19_DEPRECATED_MESSAGE]: {
    predicate: () => {
      if ((null === f.A || true === f.A ? true : f.A.process.platform) === "darwin") try {
        return 20 > parseInt(null === f.A || true === f.A ? true : f.A.os.release.split(".")[0])
      } catch (e) {}
      returnfalse
    },
    metadata: () => ({
      dismissUntil: a()().add(5, "days").toDate()
    })
  },
  [Chunk652215.kqX.CONNECT_PLAYSTATION]: {
    predicate: () => J.A.isSuggestedAccountType(eT.fg2.PLAYSTATION) && null == J.A.getAccount(null, eT.fg2.PLAYSTATION) && !eZ(eT.kqX.CONNECT_PLAYSTATION)
  },
  [Chunk652215.kqX.PASSKEY_BACKUP]: {
    predicate: e => {
      let {
        currentUser: t
      } = e;
      return (null == t ? true : t.mfaEnabled) && z.A.hasFetchedCredentials() && !z.A.hasCredentials && !eZ(eT.kqX.PASSKEY_BACKUP)
    }
  },
  [Chunk652215.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
    predicate: () => eE.A.getAlmostExpiringTrialOffers([eC.pe.TIER_2]).length > 0 && !eZ(eT.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
  },
  [Chunk652215.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
    predicate: () => eE.A.getAlmostExpiringTrialOffers([eC.pe.TIER_0]).length > 0 && !eZ(eT.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
  },
  [Chunk652215.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
    predicate: () => eE.A.getAlmostExpiringDiscountOffers([eC.pe.TIER_2]).length > 0 && !eZ(eT.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
  },
  [Chunk652215.kqX.PREMIUM_UNCANCEL]: {
    predicate: e => {
      let {
        premiumSubscription: t,
        currentUser: n
      } = e, r = null != t ? a()(t.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0, i = (null == t ? true : t.canceledAt) != null && (null == t ? true : t.status) === eT.Dmq.CANCELED && 1 >= a()().diff(a()(t.canceledAt), "days"), s = null != t && a()(t.currentPeriodEnd).isBefore(a()()), o = null != t && t.status === eT.Dmq.CANCELED && !s && r <= 7 && r >= 0 && (0, ev.YE)(n, eC.PremiumTypes.TIER_2) && !i && !n.hasFreePremium() && !t.isPurchasedExternally;
      return !eZ(eT.kqX.PREMIUM_UNCANCEL) && o
    },
    metadata: e => {
      var t;
      let {
        premiumSubscription: n
      } = e, r = null != n ? a()(n.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0, i = null != n ? null == (t = (0, ev.EL)(n)) ? true : t.planId : null;
      return {
        daysLeft: r,
        premiumType: null != i ? ev.Ay.getPremiumType(i) : null,
        premiumSubscription: n
      }
    }
  },
  [Chunk652215.kqX.PREMIUM_MISSING_PAYMENT]: {
    predicate: e => {
      let {
        premiumSubscription: t,
        currentUser: n
      } = e, r = null != t ? a()(t.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0, i = (null != t ? a()(t.currentPeriodEnd).diff(a()(t.currentPeriodStart).startOf("day"), "days") : 0) > 14 ? 7 : 2, s = null != t && a()(t.currentPeriodEnd).isBefore(a()()), o = ey.A.applicationIdsFetched.has(eC.tv), l = ey.A.getForApplication(eC.tv), c = null != t ? (0, ev.EL)(t) : null, u = null != c ? ev.Ay.getSkuIdForPlan(c.planId) : null, d = null != l && null != c && Array.from(l).filter(e => {
        let {
          skuId: t,
          consumed: n
        } = e;
        return !n && t === u
      }).length > 0, f = null != t && r <= i && r >= 0 && t.status !== eT.Dmq.PAST_DUE && !s && o && !d && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
      return !eZ(eT.kqX.PREMIUM_MISSING_PAYMENT) && f
    },
    metadata: e => {
      var t;
      let {
        premiumSubscription: n
      } = e, r = null != n ? a()(n.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0, i = null != n ? null == (t = (0, ev.EL)(n)) ? true : t.planId : null;
      return {
        daysLeft: r,
        premiumType: null != i ? ev.Ay.getPremiumType(i) : null,
        premiumSubscription: n
      }
    }
  },
  [Chunk652215.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
    predicate: e => {
      let {
        premiumSubscription: t,
        currentUser: n
      } = e, r = null != t && null != t.paymentSourceId ? em.A.getPaymentSource(t.paymentSourceId) : null, i = null != t && a()(t.currentPeriodEnd).isBefore(a()()), s = null != t && t.status === eT.Dmq.PAST_DUE && !i && null != r && r.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
      return !eZ(eT.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s
    },
    metadata: e => {
      let {
        premiumSubscription: t
      } = e;
      return {
        premiumSubscription: t
      }
    }
  },
  [Chunk652215.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
    predicate: e => {
      let {
        premiumSubscription: t,
        currentUser: n
      } = e, r = null != t && a()(t.currentPeriodEnd).isBefore(a()()), i = null != t && t.status === eT.Dmq.PAST_DUE && !r && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
      return !eZ(eT.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && i
    },
    metadata: e => {
      let {
        premiumSubscription: t
      } = e;
      return {
        premiumSubscription: t
      }
    }
  },
  [Chunk652215.kqX.APPLICATION_TEST_MODE]: {
    predicate: () => null != eb.A.testModeApplicationId,
    metadata: () => {
      if (null == eb.A.testModeApplicationId) return {};
      let e = eb.A.testModeApplicationId,
        t = _.A.getApplication(e);
      return {
        applicationName: null != t ? t.name : e,
        applicationId: e
      }
    }
  },
  [Chunk652215.kqX.PREMIUM_REACTIVATE]: {
    predicate: () => !eZ(eT.kqX.PREMIUM_REACTIVATE) && x.A.shouldShowReactivateNotice()
  },
  [Chunk652215.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
    predicate: e => {
      let {
        premiumSubscription: t,
        currentUser: n
      } = e, r = null != t && a()(t.currentPeriodEnd).isBefore(a()()), i = null != t && null != t.paymentSourceId ? em.A.getPaymentSource(t.paymentSourceId) : null, s = null != i && eR.AD.has(i.type), o = null != t && t.status === eT.Dmq.PAST_DUE && !r && s && !n.hasFreePremium() && !t.isPurchasedExternally;
      return !eZ(eT.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && o
    },
    metadata: e => {
      let {
        premiumSubscription: t
      } = e;
      return null == t ? {
        daysPastDue: 0,
        dismissUntil: a()().toDate()
      } : {
        daysPastDue: t.status === eT.Dmq.PAST_DUE ? a()().diff(t.currentPeriodStart, "days") : 0,
        dismissUntil: (0, ev.ji)(t).expiresDate.toDate()
      }
    }
  },
  [Chunk652215.kqX.POMELO_ELIGIBLE]: {
    predicate: () => (0, P.x)() && !eZ(eT.kqX.POMELO_ELIGIBLE)
  },
  [Chunk652215.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
    predicate: e => {
      let {
        selectedGuildId: t
      } = e, n = null != t ? en.A.getGuild(t) : null;
      return null != t && null != N.A.getMentionRaidDetected(t) && (null == n ? true : n.features.has(eT.GuildFeatures.COMMUNITY)) && !eZ(eT.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION) || false
    },
    metadata: e => {
      let {
        selectedGuildId: t
      } = e, n = {
        dismissUntil: a()().add(2, "hours").toDate()
      };
      if (null != t) {
        let e = N.A.getMentionRaidDetected(t);
        null != e && (n.decisionId = e.decisionId)
      }
      return n
    }
  },
  [Chunk652215.kqX.ACTIVATE_SERVER_SUBSCRIPTION]: {
    predicate: () => !eZ(eT.kqX.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== m.A.getEligibleGuildsForNagActivate().length && (0, h.KD)()
  },
  [Chunk652215.kqX.SAFETY_USER_SENTIMENT_NAGBAR]: {
    predicate: e => {
      let {
        currentUser: t
      } = e;
      return V.BN(t)
    }
  },
  [Chunk652215.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
    predicate: () => {
      let e = q.A.getCurrentUserActiveStream();
      if (null == e) returnfalse;
      let t = (0, I._z)(e),
        n = G.A.getStreamHeartbeatFailure(t);
      return null != n && Date.now() - n.firstFailedAt >= eN.tZ
    },
    metadata: () => {
      let e = q.A.getCurrentUserActiveStream();
      return {
        streamKey: null != e ? (0, I._z)(e) : null
      }
    }
  },
  [Chunk652215.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
    predicate: e => {
      var t;
      let {
        currentUser: n
      } = e, r = null != (t = em.A.paymentSources) ? t : {};
      return D.A.getIsTargeted() && !(0, ev.TW)(n) && 0 !== Object.keys(r).length
    }
  },
  [Chunk652215.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
    predicate: () => !eZ(eT.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && F.Cm(),
    metadata: () => ({
      dismissUntil: a()().add(180, "days").toDate(),
      sampleRate: .1
    })
  },
  [Chunk652215.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: {
    predicate: () => F.h6(),
    metadata: () => ({
      sampleRate: .1
    })
  },
  [Chunk652215.kqX.SYSTEM_SERVICE_WARNING]: {
    predicate: e => {
      let {
        voiceChannelId: t
      } = e;
      if (eZ(eT.kqX.SYSTEM_SERVICE_WARNING) || !(0, Y.yA)(v.Ay) || null == t || er.A.getMode() !== eT.TBI.PUSH_TO_TALK) returnfalse;
      let n = v.Ay.getVisibleGame();
      return null != n && !!n.elevated
    }
  }
};

function eJ() {
  var e, t, n;
  if (!A.A.isConnected()) returnfalse;
  eY = null;
  let r = e_.default.getCurrentUser();
  if (null == r) returnfalse;
  let i = eg.A.getPremiumSubscription(),
    a = ec.A.getGuildId(),
    s = el.A.getVoiceChannelId(),
    o = null != s ? eh.A.getVoiceStateForChannel(s) : null;
  for (let n of eQ)
    if (null != e$[n] && e$[n].predicate({
        selectedGuildId: a,
        voiceChannelId: s,
        voiceState: o,
        currentUser: r,
        premiumSubscription: i
      })) {
      let s = null == (e = (t = e$[n]).metadata) ? true : e.call(t, {
        currentUser: r,
        premiumSubscription: i,
        selectedGuildId: a
      });
      eY = eL(eD({}, eH), {
        type: n,
        metadata: s
      });
      break
    } if (null != eY) {
    (null == (n = eY.metadata) ? true : n.sampleRate) != null && null == eB[eY.type] && (eB[eY.type] = Math.random() <= eY.metadata.sampleRate);
    let e = false === eB[eY.type];
    (eZ(eY.type) || e) && (eY = null)
  }
}

function e0(e) {
  let {
    voiceStates: t
  } = e;
  return ((null == eY ? true : eY.type) === eT.kqX.INVITED_TO_SPEAK || t.some(e => {
    let {
      userId: t
    } = e;
    return t !== X.default.getId()
  })) && eJ()
}

function e1(e) {
  eY = e.notice
}

function e2(e) {
  return null != eY && (null == e.id || e.id === eY.id) && (eX(eY.type, e.isTemporary, e.untilAtLeast), eJ())
}

function e3(e) {
  let {
    noticeType: t
  } = e;
  return eX(t), eJ()
}

function e6() {
  return ed.A.enabled || delete eF[eT.kqX.STREAMER_MODE], eJ()
}

function e4() {
  return delete eF[eT.kqX.DISPATCH_ERROR], eJ()
}

function e5() {
  return delete eF[eT.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], eJ()
}

function e7() {
  return eJ()
}

function e8() {
  return eJ()
}

function e9(e) {
  return e.user.id === X.default.getId() && eJ()
}

function te() {
  eF = {}, eB = {}, eY = null
}
class tt extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.syncWith([ef.Ay, es.A, ee.A, ec.A, M.A, eE.A, Z.default, J.A, W.A, T.A, G.A, q.A, v.Ay, z.A], eJ), this.waitFor(b.A, _.A, q.A, X.default, Z.default, Q.A, $.A, D.A, J.A, m.A, ee.A, eA.A, eI.A, eS.A, ey.A, O.A, A.A, N.A, T.A, et.Ay, en.A, R.A, w.A, er.A, ei.A, em.A, ea.A, es.A, M.A, U.A, G.A, eo.A, v.Ay, el.A, ec.A, B.A, eu.A, ed.A, x.A, eg.A, ef.Ay, eb.A, eE.A, ep.A, W.A, e_.default, eh.A, z.A)
  }
  hasNotice() {
    return null != eY && null != eY.type
  }
  getNotice() {
    return null == ep.A.getAction() ? eY : null
  }
  isNoticeDismissed(e) {
    return eZ(e)
  }
}
eP(tt, "displayName", "NoticeStore");
let tn = new tt(Chunk73153.h, {
  CURRENT_USER_UPDATE: eJ,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: eJ,
  CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: eJ,
  CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: eJ,
  STATUS_PAGE_SCHEDULED_MAINTENANCE: eJ,
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: eJ,
  GUILD_CREATE: eJ,
  GUILD_DELETE: eJ,
  AUDIO_INPUT_DETECTED: eJ,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: eJ,
  CERTIFIED_DEVICES_SET: eJ,
  AUDIO_SET_INPUT_DEVICE: eJ,
  AUDIO_SET_OUTPUT_DEVICE: eJ,
  MEDIA_ENGINE_DEVICES: eJ,
  RTC_CONNECTION_STATE: eJ,
  RPC_APP_AUTHENTICATED: eJ,
  RPC_APP_DISCONNECTED: eJ,
  USER_CONNECTIONS_UPDATE: eJ,
  WINDOW_FOCUS: eJ,
  INSTANT_INVITE_CREATE: eJ,
  INSTANT_INVITE_REVOKE_SUCCESS: eJ,
  SPOTIFY_PLAYER_PAUSE: eJ,
  RUNNING_GAMES_CHANGE: eJ,
  EXPERIMENTS_FETCH_SUCCESS: eJ,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: eJ,
  DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: eJ,
  DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: eJ,
  DEVELOPER_TEST_MODE_RESET: eJ,
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: eJ,
  DISPATCH_APPLICATION_INSTALL: eJ,
  IMPERSONATE_STOP: eJ,
  IMPERSONATE_UPDATE: eJ,
  GUILD_MEMBER_ADD: e9,
  GUILD_MEMBER_UPDATE: eJ,
  SURVEY_FETCHED: eJ,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eJ,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eJ,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eJ,
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eJ,
  VOICE_STATE_UPDATES: e0,
  STREAMER_MODE_UPDATE: e6,
  RUNNING_STREAMER_TOOLS_CHANGE: e6,
  DISPATCH_APPLICATION_ERROR: e4,
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: e5,
  DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: e7,
  DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: e8,
  NOTICE_SHOW: e1,
  NOTICE_DISMISS: e2,
  NOTICE_DISABLE: e3,
  LOGOUT: te,
  SUBSCRIPTION_PLANS_FETCH_SUCCESS: eJ,
  AUTO_MODERATION_MENTION_RAID_DETECTION: eJ,
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eJ,
  PROXY_BLOCKED_REQUEST: eJ,
  REPORT_AV_ERROR: eJ,
  AUDIO_SET_MODE: eJ
})