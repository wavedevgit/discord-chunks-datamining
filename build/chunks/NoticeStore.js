/** Chunk was on web.js **/
/** chunk id: 933429, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => ti,
  m9: () => ek,
  nA: () => eG,
  o: () => eM,
  zD: () => eU
}), require("./388685.js"), require("./35282.js");
var r, Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk743426 = require("./743426.js"),
  Chunk704215 = require("./704215.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk579806 = require("./579806.js"),
  Chunk726542 = require("./726542.js"),
  Chunk812206 = require("./812206.js"),
  Chunk223892 = require("./223892.js"),
  Chunk674525 = require("./674525.js"),
  Chunk266454 = require("./266454.js"),
  Chunk605236 = require("./605236.js"),
  Chunk458725 = require("./458725.js"),
  Chunk915525 = require("./915525.js"),
  Chunk353926 = require("./353926.js"),
  Chunk594190 = require("./594190.js"),
  Chunk38618 = require("./38618.js"),
  Chunk569545 = require("./569545.js"),
  Chunk528011 = require("./528011.js"),
  Chunk487419 = require("./487419.js"),
  Chunk715903 = require("./715903.js"),
  Chunk223606 = require("./223606.js"),
  Chunk160404 = require("./160404.js"),
  Chunk41776 = require("./41776.js"),
  Chunk332473 = require("./332473.js"),
  Chunk30684 = require("./30684.js"),
  Chunk616106 = require("./616106.js"),
  Chunk475580 = require("./475580.js"),
  Chunk96320 = require("./96320.js"),
  Chunk107756 = require("./107756.js"),
  Chunk518638 = require("./518638.js"),
  Chunk1844 = require("./1844.js"),
  Chunk621615 = require("./621615.js"),
  Chunk417626 = require("./417626.js"),
  Chunk569984 = require("./569984.js"),
  Chunk338247 = require("./338247.js"),
  Chunk523255 = require("./523255.js"),
  Chunk867003 = require("./867003.js"),
  Chunk768419 = require("./768419.js"),
  Chunk590415 = require("./590415.js"),
  Chunk865066 = require("./865066.js"),
  Chunk581883 = require("./581883.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk881998 = require("./881998.js"),
  Chunk463395 = require("./463395.js"),
  Chunk592125 = require("./592125.js"),
  Chunk553795 = require("./553795.js"),
  Chunk427123 = require("./427123.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk292959 = require("./292959.js"),
  Chunk496675 = require("./496675.js"),
  Chunk571474 = require("./571474.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk215427 = require("./215427.js"),
  Chunk246946 = require("./246946.js"),
  Chunk558724 = require("./558724.js"),
  Chunk23434 = require("./23434.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk853872 = require("./853872.js"),
  Chunk78839 = require("./78839.js"),
  Chunk431 = require("./431.js"),
  Chunk580130 = require("./580130.js"),
  Chunk695103 = require("./695103.js"),
  Chunk358085 = require("./358085.js"),
  Chunk74538 = require("./74538.js"),
  Chunk922156 = require("./922156.js"),
  Chunk436181 = require("./436181.js"),
  Chunk941128 = require("./941128.js"),
  Chunk981631 = require("./981631.js"),
  Chunk188785 = require("./188785.js"),
  Chunk474936 = require("./474936.js"),
  Chunk46140 = require("./46140.js"),
  Chunk231338 = require("./231338.js"),
  Chunk65154 = require("./65154.js");

function eD(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ex(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eD(e, t, n[t])
    })
  }
  return e
}

function eL(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ej(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eL(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ek = {
    [Chunk981631.kVF.DOWNLOAD_NAG]: Chunk704215.z.NAGBAR_NOTICE_DOWNLOAD,
    [Chunk981631.kVF.CONNECT_SPOTIFY]: Chunk704215.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
    [Chunk981631.kVF.CONNECT_PLAYSTATION]: Chunk704215.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
    [Chunk981631.kVF.MFA_SMS_BACKUP]: Chunk704215.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
    [Chunk981631.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: Chunk704215.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
    [Chunk981631.kVF.PREMIUM_REACTIVATE]: Chunk704215.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
    [Chunk981631.kVF.BOUNCED_EMAIL_DETECTED]: Chunk704215.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
    [Chunk981631.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: Chunk704215.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
    [Chunk981631.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: Chunk704215.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
    [Chunk981631.kVF.POMELO_ELIGIBLE]: Chunk704215.z.NAGBAR_NOTICE_POMELO,
    [Chunk981631.kVF.CHECKOUT_RECOVERY_NAGBAR]: Chunk704215.z.CHECKOUT_RECOVERY_NAGBAR,
    [Chunk981631.kVF.REPORT_TO_MOD_SURVEY]: Chunk704215.z.REPORT_TO_MOD_SURVEY_NOTICE
  },
  eM = {
    [Chunk981631.kVF.GIFTING_PROMOTION_REMINDER]: Chunk704215.z.GIFTING_PROMOTION_REMINDER
  },
  eU = {
    [Chunk981631.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: Chunk704215.z.NAGBAR_NOTICE_OFFER_EXPIRING,
    [Chunk981631.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: Chunk704215.z.NAGBAR_NOTICE_OFFER_EXPIRING
  },
  eG = {
    [Chunk981631.kVF.OUTBOUND_PROMOTION]: Chunk704215.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR
  },
  eB = {
    [Chunk981631.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
    [Chunk981631.kVF.PREMIUM_UNCANCEL]: "hideUncancelReminder",
    [Chunk981631.kVF.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
    [Chunk981631.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
    [Chunk981631.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
    [Chunk981631.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
    [Chunk981631.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
    [Chunk981631.kVF.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
    [Chunk981631.kVF.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
    [Chunk981631.kVF.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
    [Chunk981631.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
    [Chunk981631.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
    [Chunk981631.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
    [Chunk981631.kVF.MACOS_19_DEPRECATED_MESSAGE]: "hideMacOS19DeprecationMessageNotice",
    [Chunk981631.kVF.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice"
  },
  eZ = new Set([Chunk981631.kVF.NO_INPUT_DETECTED, Chunk981631.kVF.NO_INPUT_DEVICES_DETECTED, Chunk981631.kVF.STREAMER_MODE, Chunk981631.kVF.VIDEO_UNSUPPORTED_BROWSER, Chunk981631.kVF.SPOTIFY_AUTO_PAUSED, Chunk981631.kVF.DISPATCH_ERROR, Chunk981631.kVF.DISPATCH_ERROR, Chunk981631.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, Chunk981631.kVF.BLOCKED_BY_PROXY]),
  eF = {},
  eV = {},
  eH = Object.freeze({
    id: null,
    message: null,
    buttonText: null,
    callback: true,
    metadata: null
  }),
  eY = null;

function eW(e) {
  return eB[e] + "-untilAtLeast"
}

function eK(e) {
  let t = c.K.get(eW(e));
  return null != t ? a()(t) : null
}

function ez(e, t) {
  c.K.set(eW(e), t.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
}

function eq(e) {
  c.K.remove(eW(e))
}

function eX(e, t, n) {
  if (null == e) return;
  let r = eB[e];
  null == r || t || c.K.set(r, true), eZ.has(e) && (eF[e] = true), null != n && null != r ? ez(e, n) : eq(e)
}

function eQ(e) {
  if (null == e) returnfalse;
  let {
    useRecurringNotices: t
  } = L.b.getCurrentConfig({
    location: "NoticeStore.isNoticeDismissed"
  });
  if (t && null != eU[e]) returnfalse;
  let n = eM[e];
  if (null != n) return (0, g.H4)(n).isDismissed;
  let r = ek[e];
  if (null != r) return (0, m.zu)(r);
  let i = eB[e];
  if (null != i) {
    let t = eK(e);
    if (null != t) return null == t ? true : t.isAfter(a()())
  }
  let o = eF[e];
  return !!o || (null != i && "" !== i ? c.K.get(i) : !!eZ.has(e) && o)
}
let eJ = [Chunk981631.kVF.QUARANTINED, Chunk981631.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, Chunk981631.kVF.VIEWING_ROLES, Chunk981631.kVF.INVITED_TO_SPEAK, Chunk981631.kVF.LURKING_GUILD, Chunk981631.kVF.VOICE_DISABLED, Chunk981631.kVF.NO_INPUT_DEVICES_DETECTED, Chunk981631.kVF.NO_INPUT_DETECTED, Chunk981631.kVF.HARDWARE_MUTE, Chunk981631.kVF.H264_DISABLED, Chunk981631.kVF.DISPATCH_ERROR, Chunk981631.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, Chunk981631.kVF.SPOTIFY_AUTO_PAUSED, Chunk981631.kVF.WIN32_DEPRECATED_MESSAGE, Chunk981631.kVF.WIN7_8_DEPRECATED_MESSAGE, Chunk981631.kVF.MACOS_19_DEPRECATED_MESSAGE, Chunk981631.kVF.BLOCKED_BY_PROXY, Chunk981631.kVF.VOICE_CONNECTED_LAST_SESSION, Chunk981631.kVF.SYSTEM_SERVICE_WARNING, Chunk981631.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, Chunk981631.kVF.GUILD_RAID_NOTIFICATION, Chunk981631.kVF.GIFTING_PROMOTION_REMINDER, Chunk981631.kVF.QUESTS_PROGRESS_INTERRUPTION, Chunk981631.kVF.UNCLAIMED_ACCOUNT, Chunk981631.kVF.POMELO_ELIGIBLE, Chunk981631.kVF.PENDING_MEMBER, Chunk981631.kVF.CHECKOUT_RECOVERY_NAGBAR, Chunk981631.kVF.OUTBOUND_PROMOTION, Chunk981631.kVF.CORRUPT_INSTALLATION, Chunk981631.kVF.VIDEO_UNSUPPORTED_BROWSER, Chunk981631.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, Chunk981631.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, Chunk981631.kVF.STREAMER_MODE, Chunk981631.kVF.SCHEDULED_MAINTENANCE, Chunk981631.kVF.BOUNCED_EMAIL_DETECTED, Chunk981631.kVF.UNVERIFIED_ACCOUNT, Chunk981631.kVF.PREMIUM_TIER_2_TRIAL_ENDING, Chunk981631.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING, Chunk981631.kVF.PREMIUM_TIER_0_TRIAL_ENDING, Chunk981631.kVF.PREMIUM_UNCANCEL, Chunk981631.kVF.PREMIUM_MISSING_PAYMENT, Chunk981631.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, Chunk981631.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, Chunk981631.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, Chunk981631.kVF.PREMIUM_REACTIVATE, Chunk981631.kVF.ACTIVATE_SERVER_SUBSCRIPTION, Chunk981631.kVF.MFA_SMS_BACKUP, Chunk981631.kVF.APPLICATION_TEST_MODE, Chunk981631.kVF.DOWNLOAD_NAG, Chunk981631.kVF.CONNECT_SPOTIFY, Chunk981631.kVF.CONNECT_PLAYSTATION, Chunk981631.kVF.SURVEY, Chunk981631.kVF.SAFETY_USER_SENTIMENT_NAGBAR, Chunk981631.kVF.BLOCK_USER_FEEDBACK_NAGBAR, Chunk981631.kVF.IGNORE_USER_FEEDBACK_NAGBAR, Chunk981631.kVF.REPORT_TO_MOD_SURVEY],
  e$ = [Chunk981631.kVF.QUARANTINED, Chunk981631.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, Chunk981631.kVF.VIEWING_ROLES, Chunk981631.kVF.INVITED_TO_SPEAK, Chunk981631.kVF.LURKING_GUILD, Chunk981631.kVF.VOICE_DISABLED, Chunk981631.kVF.NO_INPUT_DETECTED, Chunk981631.kVF.HARDWARE_MUTE, Chunk981631.kVF.H264_DISABLED, Chunk981631.kVF.DISPATCH_ERROR, Chunk981631.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, Chunk981631.kVF.SPOTIFY_AUTO_PAUSED, Chunk981631.kVF.BLOCKED_BY_PROXY, Chunk981631.kVF.VOICE_CONNECTED_LAST_SESSION, Chunk981631.kVF.PENDING_MEMBER, Chunk981631.kVF.STREAMER_MODE, Chunk981631.kVF.SCHEDULED_MAINTENANCE],
  e0 = {
    [Chunk981631.kVF.GIFTING_PROMOTION_REMINDER]: {
      predicate: () => {
        let {
          enabled: e
        } = Chunk107756.Ys.getCurrentConfig({
          location: "NoticeStore"
        }, {
          autoTrackExposure: false
        }), {
          enabled: t
        } = Chunk107756.ZP.getConfig({
          location: "NoticeStore"
        });
        return module && exports && (0, Chunk605236.H4)(Chunk704215.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed && !eQ(Chunk981631.kVF.GIFTING_PROMOTION_REMINDER)
      }
    },
    [Chunk981631.kVF.GUILD_RAID_NOTIFICATION]: {
      predicate: () => (0, Chunk528011.g)().show && !eQ(Chunk981631.kVF.GUILD_RAID_NOTIFICATION),
      metadata: () => ({
        dismissUntil: a()().add(3, "hours").toDate()
      })
    },
    [Chunk981631.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
      predicate: e => {
        let {
          currentUser: t,
          selectedGuildId: n
        } = e;
        if (null == n) returnfalse;
        let r = et.ZP.getMember(n, t.id);
        return null != r && !r.isPending && (0, A.EY)(r)
      }
    },
    [Chunk981631.kVF.QUARANTINED]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return t.hasFlag(eA.xW$.QUARANTINED)
      }
    },
    [Chunk981631.kVF.VIEWING_ROLES]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return N.Z.isViewingRoles(t)
      }
    },
    [Chunk981631.kVF.INVITED_TO_SPEAK]: {
      predicate: e => {
        let {
          voiceState: t
        } = e;
        return (0, Y.gf)(t) === Y.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
      }
    },
    [Chunk981631.kVF.LURKING_GUILD]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && R.Z.isLurking(t)
      }
    },
    [Chunk981631.kVF.VOICE_DISABLED]: {
      predicate: () => null != Chunk19780.Z.getRemoteDisconnectVoiceChannelId()
    },
    [Chunk981631.kVF.VOICE_CONNECTED_LAST_SESSION]: {
      predicate: () => null != Chunk19780.Z.getLastSessionVoiceChannelId()
    },
    [Chunk981631.kVF.NO_INPUT_DETECTED]: {
      predicate: () => Chunk915525.Z.hasActiveErrorOfType(Chunk458725.u.NO_AUDIO_INPUT_DETECTED)
    },
    [Chunk981631.kVF.NO_INPUT_DEVICES_DETECTED]: {
      predicate: () => Chunk915525.Z.hasActiveErrorOfType(Chunk458725.u.NO_INPUT_DEVICES)
    },
    [Chunk981631.kVF.H264_DISABLED]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e, n = J.Z.getChannel(t);
        return !er.Z.getOpenH264() && null != t && eh.Z.hasVideo(t) && null != n && n.isGuildStageVoice()
      }
    },
    [Chunk981631.kVF.HARDWARE_MUTE]: {
      predicate: () => Chunk19780.Z.isConnected() && Chunk131951.Z.isHardwareMute() && Chunk131951.Z.isEnableHardwareMuteNotice(),
      metadata: () => {
        let e = Chunk131951.Z.getInputDeviceId(),
          t = Chunk463395.Z.getVendor(module),
          n = Chunk463395.Z.getModel(module);
        if (null != exports && null != require) return {
          vendor: exports,
          model: require
        }
      }
    },
    [Chunk981631.kVF.DISPATCH_ERROR]: {
      predicate: () => null != Chunk922156.Z.getLastError(),
      metadata: () => ({
        error: Chunk922156.Z.getLastError()
      })
    },
    [Chunk981631.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
      predicate: () => null != Chunk436181.Z.getLastProgress(),
      metadata: () => Chunk436181.Z.getLastProgress()
    },
    [Chunk981631.kVF.SPOTIFY_AUTO_PAUSED]: {
      predicate: () => Chunk768419.Z.wasAutoPaused()
    },
    [Chunk981631.kVF.BLOCKED_BY_PROXY]: {
      predicate: () => !eQ(Chunk981631.kVF.BLOCKED_BY_PROXY) && Chunk417626.Z.blockedByProxy && Chunk621615.Z.getCurrentConfig({
        location: "notice_store"
      }).eligibleForNotice
    },
    [Chunk981631.kVF.UNCLAIMED_ACCOUNT]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null != t && !t.isClaimed()
      }
    },
    [Chunk981631.kVF.PENDING_MEMBER]: {
      predicate: e => {
        var t, n, r;
        let {
          selectedGuildId: i,
          currentUser: a
        } = e;
        return null != (r = null != i && null != a && !(null == (t = en.Z.getGuild(i)) ? true : t.features.has(eA.oNc.GUILD_ONBOARDING)) && (null == (n = et.ZP.getMember(i, a.id)) ? true : n.isPending)) && r
      }
    },
    [Chunk981631.kVF.OUTBOUND_PROMOTION]: {
      predicate: () => (0, Chunk518638.tq)()
    },
    [Chunk981631.kVF.CORRUPT_INSTALLATION]: {
      predicate: () => Chunk358085.isPlatformEmbedded && (!Chunk743426.Z.supported() || Chunk941128.Z.isCorruptInstallation())
    },
    [Chunk981631.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e;
        return null != t && eh.Z.hasVideo(t) && !er.Z.supports(ew.AN.VIDEO) && !eQ(eA.kVF.VIDEO_UNSUPPORTED_BROWSER)
      }
    },
    [Chunk981631.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return ev.ZP.canRedeemPremiumPerks(t) && ee.Z.getDetectedOffPlatformPremiumPerks().length > 0
      },
      metadata: () => Chunk427123.Z.getDetectedOffPlatformPremiumPerks()[0]
    },
    [Chunk981631.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
      predicate: () => !eQ(Chunk981631.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && Chunk427123.Z.getDetectedOffPlatformPremiumPerks().length > 0,
      metadata: () => Chunk427123.Z.getDetectedOffPlatformPremiumPerks()[0]
    },
    [Chunk981631.kVF.STREAMER_MODE]: {
      predicate: () => Chunk246946.Z.enabled
    },
    [Chunk981631.kVF.DOWNLOAD_NAG]: {
      predicate: () => !Chunk358085.isPlatformEmbedded && !eQ(Chunk981631.kVF.DOWNLOAD_NAG)
    },
    [Chunk981631.kVF.SCHEDULED_MAINTENANCE]: {
      predicate: () => null != Chunk215427.Z.getScheduledMaintenance(),
      metadata: () => {
        let e = Chunk215427.Z.getScheduledMaintenance();
        if (null != module) return {
          id: module.id,
          start: new Date(module.scheduled_for),
          end: new Date(module.scheduled_until)
        }
      }
    },
    [Chunk981631.kVF.SURVEY]: {
      predicate: () => null != Chunk558724.Z.getCurrentSurvey(),
      metadata: () => Chunk558724.Z.getCurrentSurvey()
    },
    [Chunk981631.kVF.UNVERIFIED_ACCOUNT]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return (null == t ? true : t.email) != null && !t.verified
      }
    },
    [Chunk981631.kVF.BOUNCED_EMAIL_DETECTED]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null == t ? true : t.hasBouncedEmail
      }
    },
    [Chunk981631.kVF.CONNECT_SPOTIFY]: {
      predicate: () => !Chunk768419.Z.hasConnectedAccount() && Chunk594190.ZP.isObservedAppRunning(Chunk726542.Z.get(Chunk981631.ABu.SPOTIFY).name) && !eQ(Chunk981631.kVF.CONNECT_SPOTIFY)
    },
    [Chunk981631.kVF.WIN32_DEPRECATED_MESSAGE]: {
      predicate: () => (null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.arch) === "ia32" && (null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.process.platform) === "win32",
      metadata: () => ({
        dismissUntil: a()().add(5, "days").toDate()
      })
    },
    [Chunk981631.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
      predicate: () => {
        if ((null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.process.platform) === "win32") try {
          return 10 > parseInt(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release.split(".")[0])
        } catch (e) {}
        returnfalse
      },
      metadata: () => ({
        dismissUntil: a()().add(5, "days").toDate()
      })
    },
    [Chunk981631.kVF.MACOS_19_DEPRECATED_MESSAGE]: {
      predicate: () => {
        if ((null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.process.platform) === "darwin") try {
          return 20 > parseInt(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release.split(".")[0])
        } catch (e) {}
        returnfalse
      },
      metadata: () => ({
        dismissUntil: a()().add(5, "days").toDate()
      })
    },
    [Chunk981631.kVF.CONNECT_PLAYSTATION]: {
      predicate: () => Chunk553795.Z.isSuggestedAccountType(Chunk981631.ABu.PLAYSTATION) && null == Chunk553795.Z.getAccount(null, Chunk981631.ABu.PLAYSTATION) && !eQ(Chunk981631.kVF.CONNECT_PLAYSTATION)
    },
    [Chunk981631.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: {
      predicate: () => Chunk431.Z.getAlmostExpiringTrialOffers([Chunk474936.Si.TIER_2]).length > 0 && !eQ(Chunk981631.kVF.PREMIUM_TIER_2_TRIAL_ENDING)
    },
    [Chunk981631.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: {
      predicate: () => Chunk431.Z.getAlmostExpiringTrialOffers([Chunk474936.Si.TIER_0]).length > 0 && !eQ(Chunk981631.kVF.PREMIUM_TIER_0_TRIAL_ENDING)
    },
    [Chunk981631.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
      predicate: () => {
        let {
          enabled: e
        } = Chunk475580.D.getCurrentConfig({
          location: "NoticeStore.NoticeDefinition.predicate"
        });
        return !!module && Chunk431.Z.getAlmostExpiringDiscountOffers([Chunk474936.Si.TIER_2]).length > 0 && !eQ(Chunk981631.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING)
      }
    },
    [Chunk981631.kVF.PREMIUM_UNCANCEL]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, r = null != t ? a()(t.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0, i = (null == t ? true : t.canceledAt) != null && (null == t ? true : t.status) === eA.O0b.CANCELED && 1 >= a()().diff(a()(t.canceledAt), "days"), o = null != t && a()(t.currentPeriodEnd).isBefore(a()()), s = null != t && t.status === eA.O0b.CANCELED && !o && r <= 7 && r >= 0 && (0, ev.M5)(n, eN.p9.TIER_2) && !i && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eQ(eA.kVF.PREMIUM_UNCANCEL) && s
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, r = null != n ? a()(n.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0, i = null != n ? null == (t = (0, ev.Af)(n)) ? true : t.planId : null;
        return {
          daysLeft: r,
          premiumType: null != i ? ev.ZP.getPremiumType(i) : null,
          premiumSubscription: n
        }
      }
    },
    [Chunk981631.kVF.PREMIUM_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, r = null != t ? a()(t.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0, i = (null != t ? a()(t.currentPeriodEnd).diff(a()(t.currentPeriodStart).startOf("day"), "days") : 0) > 14 ? 7 : 2, o = null != t && a()(t.currentPeriodEnd).isBefore(a()()), s = eb.Z.applicationIdsFetched.has(eN.CL), l = eb.Z.getForApplication(eN.CL), c = null != t ? (0, ev.Af)(t) : null, u = null != c ? ev.ZP.getSkuIdForPlan(c.planId) : null, d = null != l && null != c && Array.from(l).filter(e => {
          let {
            skuId: t,
            consumed: n
          } = e;
          return !n && t === u
        }).length > 0, f = null != t && r <= i && r >= 0 && t.status !== eA.O0b.PAST_DUE && !o && s && !d && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eQ(eA.kVF.PREMIUM_MISSING_PAYMENT) && f
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, r = null != n ? a()(n.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0, i = null != n ? null == (t = (0, ev.Af)(n)) ? true : t.planId : null;
        return {
          daysLeft: r,
          premiumType: null != i ? ev.ZP.getPremiumType(i) : null,
          premiumSubscription: n
        }
      }
    },
    [Chunk981631.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, r = null != t && null != t.paymentSourceId ? em.Z.getPaymentSource(t.paymentSourceId) : null, i = null != t && a()(t.currentPeriodEnd).isBefore(a()()), o = null != t && t.status === eA.O0b.PAST_DUE && !i && null != r && r.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eQ(eA.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && o
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
    [Chunk981631.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, r = null != t && a()(t.currentPeriodEnd).isBefore(a()()), i = null != t && t.status === eA.O0b.PAST_DUE && !r && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eQ(eA.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && i
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
    [Chunk981631.kVF.MFA_SMS_BACKUP]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null != t && t.mfaEnabled && !t.hasFlag(eA.xW$.MFA_SMS) && !t.hasFlag(eA.xW$.STAFF) && !t.hasFlag(eA.xW$.PARTNER) && !eQ(eA.kVF.MFA_SMS_BACKUP)
      }
    },
    [Chunk981631.kVF.APPLICATION_TEST_MODE]: {
      predicate: () => null != Chunk695103.Z.testModeApplicationId,
      metadata: () => {
        if (null == Chunk695103.Z.testModeApplicationId) return {};
        let e = Chunk695103.Z.testModeApplicationId,
          t = Chunk812206.Z.getApplication(module);
        return {
          applicationName: null != exports ? exports.name : module,
          applicationId: module
        }
      }
    },
    [Chunk981631.kVF.PREMIUM_REACTIVATE]: {
      predicate: () => !eQ(Chunk981631.kVF.PREMIUM_REACTIVATE) && Chunk616106.Z.shouldShowReactivateNotice()
    },
    [Chunk981631.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, r = null != t && a()(t.currentPeriodEnd).isBefore(a()()), i = null != t && null != t.paymentSourceId ? em.Z.getPaymentSource(t.paymentSourceId) : null, o = null != i && eP.Uk.has(i.type), s = null != t && t.status === eA.O0b.PAST_DUE && !r && o && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eQ(eA.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && s
      },
      metadata: e => {
        let {
          premiumSubscription: t
        } = e;
        return null == t ? {
          daysPastDue: 0,
          dismissUntil: a()().toDate()
        } : {
          daysPastDue: t.status === eA.O0b.PAST_DUE ? a()().diff(t.currentPeriodStart, "days") : 0,
          dismissUntil: (0, ev.lY)(t).expiresDate.toDate()
        }
      }
    },
    [Chunk981631.kVF.POMELO_ELIGIBLE]: {
      predicate: () => (0, Chunk332473.e)() && !eQ(Chunk981631.kVF.POMELO_ELIGIBLE)
    },
    [Chunk981631.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e, n = null != t ? en.Z.getGuild(t) : null;
        return null != t && null != C.Z.getMentionRaidDetected(t) && (null == n ? true : n.features.has(eA.oNc.COMMUNITY)) && !eQ(eA.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION) || false
      },
      metadata: e => {
        let {
          selectedGuildId: t
        } = e, n = {
          dismissUntil: a()().add(2, "hours").toDate()
        };
        if (null != t) {
          let e = C.Z.getMentionRaidDetected(t);
          null != e && (n.decisionId = e.decisionId)
        }
        return n
      }
    },
    [Chunk981631.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: {
      predicate: () => !eQ(Chunk981631.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== Chunk674525.Z.getEligibleGuildsForNagActivate().length && (0, Chunk223892.Lm)()
    },
    [Chunk981631.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return F.SI(t)
      }
    },
    [Chunk981631.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
      predicate: () => {
        let e = Chunk199902.Z.getCurrentUserActiveStream();
        if (null == module) returnfalse;
        let t = (0, Chunk569545.V9)(module),
          n = Chunk569984.Z.getStreamHeartbeatFailure(exports);
        return null != require && Date.now() - require.firstFailedAt >= Chunk46140.Ot
      },
      metadata: () => {
        let e = Chunk199902.Z.getCurrentUserActiveStream();
        return {
          streamKey: null != module ? (0, Chunk569545.V9)(module) : null
        }
      }
    },
    [Chunk981631.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
      predicate: e => {
        var t;
        let {
          currentUser: n
        } = e, r = null != (t = em.Z.paymentSources) ? t : {};
        return w.Z.getIsTargeted() && !(0, ev.I5)(n) && 0 !== Object.keys(r).length
      }
    },
    [Chunk981631.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: {
      predicate: () => !eQ(Chunk981631.kVF.BLOCK_USER_FEEDBACK_NAGBAR) && Chunk867003.L0(),
      metadata: () => ({
        dismissUntil: a()().add(180, "days").toDate(),
        sampleRate: .1
      })
    },
    [Chunk981631.kVF.IGNORE_USER_FEEDBACK_NAGBAR]: {
      predicate: () => Chunk867003.Rr(),
      metadata: () => ({
        sampleRate: .1
      })
    },
    [Chunk981631.kVF.REPORT_TO_MOD_SURVEY]: {
      predicate: e => {
        let {
          currentUser: t,
          selectedGuildId: n
        } = e;
        return null != n && (0, Z.s)(t, n)
      }
    },
    [Chunk981631.kVF.SYSTEM_SERVICE_WARNING]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e;
        if (eQ(eA.kVF.SYSTEM_SERVICE_WARNING) || !(0, W.s2)(O.ZP) || null == t || er.Z.getMode() !== eA.pM4.PUSH_TO_TALK) returnfalse;
        let n = O.ZP.getVisibleGame();
        return null != n && !!n.elevated
      }
    }
  };

function e1() {
  var e, t, n;
  if (!Chunk38618.Z.isConnected()) returnfalse;
  eY = null;
  let r = Chunk594174.default.getCurrentUser();
  if (null == r) returnfalse;
  let i = Chunk78839.Z.getPremiumSubscription(),
    a = Chunk914010.Z.getGuildId(),
    o = Chunk944486.Z.getVoiceChannelId(),
    s = null != Chunk442837 ? Chunk979651.Z.getVoiceStateForChannel(Chunk442837) : null;
  for (let n of Chunk188785.a ? e$ : eJ)
    if (null != e0[require] && e0[require].predicate({
        selectedGuildId: a,
        voiceChannelId: Chunk442837,
        voiceState: Chunk743426,
        currentUser: r,
        premiumSubscription: Chunk913527
      })) {
      let o = null == (e = (t = e0[require]).metadata) ? true : module.call(exports, {
        currentUser: r,
        premiumSubscription: Chunk913527,
        selectedGuildId: a
      });
      eY = ej(ex({}, eH), {
        type: require,
        metadata: Chunk442837
      });
      break
    } if (null != eY) {
    (null == (n = eY.metadata) ? true : require.sampleRate) != null && null == eV[eY.type] && (eV[eY.type] = Math.random() <= eY.metadata.sampleRate);
    let e = false === eV[eY.type];
    (eQ(eY.type) || module) && (eY = null)
  }
}

function e2(e) {
  let {
    voiceStates: t
  } = e;
  return ((null == eY ? true : eY.type) === eA.kVF.INVITED_TO_SPEAK || t.some(e => {
    let {
      userId: t
    } = e;
    return t !== q.default.getId()
  })) && e1()
}

function e3(e) {
  eY = e.notice
}

function e4(e) {
  return null != eY && (null == e.id || e.id === eY.id) && (eX(eY.type, e.isTemporary, e.untilAtLeast), e1())
}

function e8(e) {
  let {
    noticeType: t
  } = e;
  return eX(t), e1()
}

function e6() {
  return Chunk246946.Z.enabled || delete eF[Chunk981631.kVF.STREAMER_MODE], e1()
}

function e5() {
  return delete eF[Chunk981631.kVF.DISPATCH_ERROR], e1()
}

function e7() {
  return delete eF[Chunk981631.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], e1()
}

function e9() {
  return e1()
}

function te() {
  return e1()
}

function tt(e) {
  return e.user.id === q.default.getId() && e1()
}

function tn() {
  eF = {}, eV = {}, eY = null
}
class tr extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.syncWith([Chunk558724.Z, Chunk571474.Z, Chunk427123.Z, Chunk914010.Z, Chunk1844.Z, Chunk431.Z, Chunk881998.Z, Chunk553795.Z, Chunk581883.Z, Chunk487419.Z, Chunk569984.Z, Chunk199902.Z, Chunk594190.ZP], e1), this.waitFor(Chunk594174.default, Chunk215427.Z, Chunk430824.Z, Chunk271383.ZP, Chunk19780.Z, Chunk131951.Z, Chunk246946.Z, Chunk353926.Z, Chunk914010.Z, Chunk23434.Z, Chunk768419.Z, Chunk594190.ZP, Chunk571474.Z, Chunk922156.Z, Chunk436181.Z, Chunk695103.Z, Chunk292959.Z, Chunk78839.Z, Chunk941128.Z, Chunk427123.Z, Chunk853872.Z, Chunk496675.Z, Chunk1844.Z, Chunk580130.Z, Chunk431.Z, Chunk553795.Z, Chunk41776.Z, Chunk674525.Z, Chunk417626.Z, Chunk569984.Z, Chunk199902.Z)
  }
  hasNotice() {
    return null != eY && null != eY.type
  }
  getNotice() {
    return null == Chunk23434.Z.getAction() ? eY : null
  }
  isNoticeDismissed(e) {
    return eQ(e)
  }
}
eD(tr, "displayName", "NoticeStore");
let ti = new tr(Chunk570140.Z, {
  CURRENT_USER_UPDATE: e1,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: e1,
  CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: e1,
  CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: e1,
  STATUS_PAGE_SCHEDULED_MAINTENANCE: e1,
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: e1,
  GUILD_CREATE: e1,
  GUILD_DELETE: e1,
  AUDIO_INPUT_DETECTED: e1,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: e1,
  CERTIFIED_DEVICES_SET: e1,
  AUDIO_SET_INPUT_DEVICE: e1,
  AUDIO_SET_OUTPUT_DEVICE: e1,
  MEDIA_ENGINE_DEVICES: e1,
  RTC_CONNECTION_STATE: e1,
  RPC_APP_AUTHENTICATED: e1,
  RPC_APP_DISCONNECTED: e1,
  USER_CONNECTIONS_UPDATE: e1,
  WINDOW_FOCUS: e1,
  INSTANT_INVITE_CREATE: e1,
  INSTANT_INVITE_REVOKE_SUCCESS: e1,
  SPOTIFY_PLAYER_PAUSE: e1,
  RUNNING_GAMES_CHANGE: e1,
  EXPERIMENTS_FETCH_SUCCESS: e1,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: e1,
  DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: e1,
  DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: e1,
  DEVELOPER_TEST_MODE_RESET: e1,
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: e1,
  DISPATCH_APPLICATION_INSTALL: e1,
  IMPERSONATE_STOP: e1,
  IMPERSONATE_UPDATE: e1,
  GUILD_MEMBER_ADD: tt,
  GUILD_MEMBER_UPDATE: e1,
  SURVEY_FETCHED: e1,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: e1,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: e1,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: e1,
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: e1,
  VOICE_STATE_UPDATES: e2,
  STREAMER_MODE_UPDATE: e6,
  RUNNING_STREAMER_TOOLS_CHANGE: e6,
  DISPATCH_APPLICATION_ERROR: e5,
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: e7,
  DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: e9,
  DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: te,
  NOTICE_SHOW: e3,
  NOTICE_DISMISS: e4,
  NOTICE_DISABLE: e8,
  LOGOUT: tn,
  SUBSCRIPTION_PLANS_FETCH_SUCCESS: e1,
  AUTO_MODERATION_MENTION_RAID_DETECTION: e1,
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: e1,
  PROXY_BLOCKED_REQUEST: e1,
  REPORT_AV_ERROR: e1
})