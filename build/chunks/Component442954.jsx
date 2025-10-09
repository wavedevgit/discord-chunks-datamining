/** Chunk was on 22981 **/
/** chunk id: 442954, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk46973 = require("./46973.js"),
  Chunk481060 = require("./481060.js"),
  Chunk480916 = require("./480916.js"),
  Chunk138464 = require("./138464.js"),
  Chunk585483 = require("./585483.js"),
  Chunk246992 = require("./246992.js"),
  Chunk981631 = require("./981631.js"),
  Chunk723359 = require("./723359.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk711322 = require("./711322.js"),
  Chunk451429 = require("./451429.js");

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = {
  CollectiblesExpiryModal: async () => {
    let {
      default: e
    } = await require.e("77370").then(require.bind(require, 83950));
    return t => (0, a.jsx)(e, b({}, t))
  },
  EmailEnterModal: async () => {
    let {
      default: e
    } = await require.e("20670").then(require.bind(require, 993018));
    return t => (0, a.jsx)(e, g(b({}, t), {
      headerText: h.intl.string(h.t.ZLRYGR),
      confirmButtonText: h.intl.string(h.t.PDTjLC),
      confirmButtonVariant: "primary"
    }))
  },
  EmailPincodeModal: async () => {
    let {
      default: e
    } = await require.e("56499").then(require.bind(require, 433570));
    return t => (0, a.jsx)(e, g(b({}, t), {
      headerText: h.intl.string(h.t.H3Q7U1),
      onFormSubmit: () => {},
      onResend: () => {},
      onSuccess: () => {},
      confirmButtonText: h.intl.string(h.t["13ofGh"]),
      impression: {
        impressionName: i.ImpressionNames.URF_CONFIRM_EMAIL_CODE
      }
    }))
  },
  AgeVerificationRetryModal: async () => {
    let {
      default: e
    } = await require.e("22447").then(require.bind(require, 686768));
    return t => (0, a.jsx)(e, g(b({}, t), {
      entryPoint: o.cU.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL
    }))
  },
  ExistingUserAgeGatePrompt: async () => {
    let {
      default: e
    } = await Promise.all([require.e("1716"), require.e("8430")]).then(require.bind(require, 701509));
    return t => (0, a.jsx)(e, g(b({}, t), {
      source: p.L0.NSFW_SERVER
    }))
  },
  ExistingUserAgeGateUnderage: async () => {
    let {
      default: e
    } = await require.e("80478").then(require.bind(require, 920644));
    return t => (0, a.jsx)(e, b({}, t))
  },
  NewUserAgeGate: async () => {
    let {
      default: e
    } = await require.e("76323").then(require.bind(require, 298237));
    return t => (0, a.jsx)(e, b({}, t))
  },
  AutomatedUnderageAppealModal: async () => {
    let {
      default: e
    } = await require.e("75435").then(require.bind(require, 751744));
    return t => (0, a.jsx)(e, g(b({}, t), {
      classificationId: "123"
    }))
  },
  AutomodRaidResolveModal: async () => {
    let {
      default: e
    } = await require.e("28382").then(require.bind(require, 537623));
    return t => (0, a.jsx)(e, g(b({}, t), {
      guildId: "123",
      messageId: null
    }))
  },
  AutomodUserProfileQuarantineAlert: async () => {
    let {
      default: e
    } = await require.e("40390").then(require.bind(require, 251871));
    return t => (0, a.jsx)(e, g(b({}, t), {
      guildId: "123"
    }))
  },
  PhoneVerificationModal: async () => {
    let {
      default: e
    } = await Promise.resolve().then(require.bind(require, 145454));
    return t => (0, a.jsx)(e, b({
      error: null,
      working: false,
      validPhone: false
    }, t))
  },
  VoiceSettingsModal: async () => {
    let {
      default: e
    } = await require.e("66063").then(require.bind(require, 344516));
    return t => (0, a.jsx)(e, g(b({}, t), {
      mediaEngineContext: l.Yn.DEFAULT,
      title: "Voice Settings"
    }))
  },
  DynamicGraphicDemo: async () => {
    let {
      DynamicGraphicComponent: e
    } = await Promise.resolve().then(require.bind(require, 198168));
    return t => (0, a.jsx)(s.Ioy, g(b({}, t), {
      title: "Dynamic Graphics Demo",
      subtitle: "This modal demonstrates the dynamic graphics system",
      graphic: {
        type: "dynamic",
        component: e.DEMO,
        aspectRatio: "6/4",
        props: {
          text: "Dynamic Content Loaded!"
        }
      },
      actions: [{
        variant: "primary",
        text: "Close",
        onClick: t.onClose
      }],
      children: (0, a.jsx)("div", {
        children: "This modal showcases the new dynamic graphics system where components can be loaded dynamically based on enum values, providing type safety while maintaining runtime flexibility."
      })
    }))
  },
  OverlayDisabledSurveyModal: async () => {
    let {
      default: e
    } = await require.e("20114").then(require.bind(require, 536920)), {
      OverlayToggledClientSettingType: t
    } = await Promise.resolve().then(require.bind(require, 444295));
    return n => (0, a.jsx)(e, g(b({}, n), {
      clientSettingType: t.LEGACY_GAME,
      gameId: "123456789"
    }))
  },
  PremiumSubscriptionPauseModal: async () => {
    let {
      PremiumSubscriptionPauseModalSelect: e
    } = await require.e("14963").then(require.bind(require, 398775)), {
      CancellationContext: t
    } = await Promise.resolve().then(require.bind(require, 594135)), {
      PremiumTypes: i
    } = await Promise.resolve().then(require.bind(require, 474936)), l = {
      id: "test-subscription-id",
      userId: "test-user-id",
      status: 1,
      currency: "usd",
      currentPeriodStart: new Date,
      currentPeriodEnd: new Date(Date.now() + 2592e6),
      items: [{
        id: "test-item-id",
        planId: "511651880837840896",
        quantity: 1
      }],
      paymentSourceId: "test-payment-source",
      renewalMutations: null,
      hasActiveTrial: false
    }, s = Chunk647438.forwardRef((n, s) => {
      let [o, c] = r.useState(null);
      return (0, a.jsx)(t.Provider, {
        value: {
          setStep: () => {},
          premiumType: i.TIER_2,
          onClose: n.onClose,
          transitionState: n.transitionState,
          premiumSubscription: l,
          analyticsLocations: [],
          analyticsLocation: true,
          confettiCanvas: null,
          churnUserDiscountOffer: null,
          isFetchingChurnDiscountOffer: false,
          fullPrice: "$9.99",
          discountedPrice: true,
          planId: "511651880837840896",
          paymentsBlocked: false,
          renewalInvoice: null,
          renewalInvoiceDetails: null,
          handleCancellation: async () => {},
          applyOffer: async () => {},
          pauseDuration: o,
          setPauseDuration: c
        },
        children: (0, a.jsx)(e, {})
      })
    });
    return Chunk481060.displayName = "PremiumSubscriptionPauseModalWrapper", e => (0, a.jsx)(s, b({}, e))
  },
  OverlaySettingsModal: async () => {
    let {
      default: e
    } = await require.e("55288").then(require.bind(require, 669083));
    return t => (0, a.jsx)(e, {
      onClose: t.onClose
    })
  },
  NewMemberActionModal: async () => {
    let {
      default: e
    } = await Promise.all([require.e("7590"), require.e("81257")]).then(require.bind(require, 380716)), {
      NewMemberActionTypes: t
    } = await Promise.resolve().then(require.bind(require, 734893)), r = {
      channelId: "123456789",
      title: "Welcome to the server!",
      description: "Say hello in the welcome channel",
      actionType: exports.CHAT,
      emoji: null,
      icon: null
    };
    return t => (0, a.jsx)(e, g(b({}, t), {
      guildId: "123456789",
      action: r,
      onSave: (e, t, n) => {
        console.log("NewMemberActionModal onSave:", {
          action: e,
          iconData: t,
          shouldSaveIcon: n
        })
      },
      onDelete: () => {
        console.log("NewMemberActionModal onDelete")
      }
    }))
  },
  PlayStationModal: async () => {
    let {
      default: e
    } = await require.e("638").then(require.bind(require, 543974)), t = await Promise.resolve().then(require.bind(require, 258609)), {
      createChannelRecord: r
    } = await Promise.resolve().then(require.bind(require, 131704)), i = Chunk647438({
      id: "123456789",
      name: "test-voice-channel",
      type: 2,
      guild_id: "987654321",
      position: 0,
      permissionOverwrites: {},
      parent_id: true,
      nsfw: false,
      topic: true,
      lastMessageId: true,
      bitrate: 64e3,
      userLimit: 0,
      rateLimitPerUser: 0,
      icon: null,
      ownerId: null,
      application_id: null,
      lastPinTimestamp: null,
      rtcRegion: null,
      videoQualityMode: null,
      messageCount: 0,
      memberCount: 0,
      threadMetadata: true,
      member: true,
      defaultAutoArchiveDuration: true,
      flags: 0,
      totalMessageSent: 0,
      availableTags: [],
      appliedTags: [],
      defaultReactionEmoji: null,
      defaultThreadRateLimitPerUser: 0,
      defaultSortOrder: null,
      defaultForumLayout: 0
    }), l = {
      "device-1": {
        id: "device-1",
        name: "PS5 - Living Room",
        platform: "playstation"
      },
      "device-2": {
        id: "device-2",
        name: "PS5 - Bedroom",
        platform: "playstation"
      },
      "device-3": {
        id: "device-3",
        name: "PS4 - Office",
        platform: "playstation"
      }
    }, s = n => {
      let r = t.default.getDevicesForPlatform,
        s = t.default.getFetchingDevices,
        o = t.default.getLastSelectedDeviceByPlatform,
        c = t.default.getAwaitingRemoteSessionInfo;
      t.default.getDevicesForPlatform = e => e === m.ABu.PLAYSTATION ? l : r.call(t.default, e), t.default.getFetchingDevices = e => e !== m.ABu.PLAYSTATION && s.call(t.default, e), t.default.getLastSelectedDeviceByPlatform = e => e === m.ABu.PLAYSTATION ? "device-1" : o.call(t.default, e), t.default.getAwaitingRemoteSessionInfo = () => null;
      let d = n.onClose;
      return n.onClose = async () => {
        t.default.getDevicesForPlatform = r, t.default.getFetchingDevices = s, t.default.getLastSelectedDeviceByPlatform = o, t.default.getAwaitingRemoteSessionInfo = c, await d()
      }, (0, a.jsx)(e, g(b({}, n), {
        channel: i,
        platform: m.ABu.PLAYSTATION
      }))
    };
    return Chunk481060.displayName = "PlayStationModalWrapper", Chunk481060
  },
  GameProfileFeedbackModal: async () => {
    let {
      default: e
    } = await require.e("46923").then(require.bind(require, 55396));
    return t => (0, a.jsx)(e, g(b({}, t), {
      applicationId: "123456789",
      viewId: "dev-tools-test",
      showOutdatedInfoOption: true
    }))
  },
  AppealIngestionModal: async () => {
    let {
      default: e
    } = await Promise.all([require.e("65652"), require.e("37931")]).then(require.bind(require, 208265));
    return t => (0, a.jsx)(e, g(b({}, t), {
      classificationId: "123456789"
    }))
  }
};

function j() {
  let e = Chunk647438.useMemo(() => Object.keys(v).map(e => ({
      label: e,
      value: e
    })).sort((e, t) => e.label.localeCompare(t.label)), []),
    [t, n] = Chunk647438.useState(module[0].value);
  return (0, Chunk951288.jsx)(Chunk481060.zJl, {
    className: Chunk451429.panel,
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk711322.panelInner,
      children: [(0, Chunk951288.jsxs)("section", {
        className: Chunk711322.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Open a Modal"
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk711322.inputRow,
          children: [(0, Chunk951288.jsx)(Chunk481060.PhF, {
            className: Chunk711322.input,
            options: module,
            isSelected: e => t === e,
            serialize: e => e,
            select: e => n(e),
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Open",
            onClick: () => (0, Chunk481060.ZDy)(v[exports])
          })]
        })]
      }), (0, Chunk951288.jsxs)("section", {
        className: Chunk711322.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Wow moment"
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk711322.inputRow,
          children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Open",
            onClick: () => {
              (0, Chunk138464.H)(true), Chunk585483.S.dispatch(Chunk981631.CkL.PREMIUM_SUBSCRIPTION_CREATED)
            }
          })
        })]
      })]
    })
  })
}