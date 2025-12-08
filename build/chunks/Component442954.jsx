/** Chunk was on 88282 **/
/** chunk id: 442954, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk46973 = require("./46973.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk480916 = require("./480916.js"),
  Chunk138464 = require("./138464.js"),
  Chunk594174 = require("./594174.js"),
  Chunk585483 = require("./585483.js"),
  Chunk246992 = require("./246992.js"),
  Chunk981631 = require("./981631.js"),
  Chunk723359 = require("./723359.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk711322 = require("./711322.js"),
  Chunk451429 = require("./451429.js");

function v(e) {
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

function j(e, t) {
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
let _ = {
  CollectiblesExpiryModal: async () => {
    let {
      default: e
    } = await require.e("77370").then(require.bind(require, 83950));
    return t => (0, a.jsx)(e, v({}, t))
  },
  EmailEnterModal: async () => {
    let {
      default: e
    } = await require.e("20670").then(require.bind(require, 993018));
    return t => (0, a.jsx)(e, j(v({}, t), {
      headerText: f.intl.string(f.t.ZLRYGU),
      confirmButtonText: f.intl.string(f.t.PDTjLN),
      confirmButtonVariant: "primary"
    }))
  },
  EmailPincodeModal: async () => {
    let {
      default: e
    } = await require.e("56499").then(require.bind(require, 433570));
    return t => (0, a.jsx)(e, j(v({}, t), {
      headerText: f.intl.string(f.t.H3Q7U8),
      onFormSubmit: () => {},
      onResend: () => {},
      onSuccess: () => {},
      confirmButtonText: f.intl.string(f.t["13ofGu"]),
      impression: {
        impressionName: r.ImpressionNames.URF_CONFIRM_EMAIL_CODE
      }
    }))
  },
  AgeVerificationRetryModal: async () => {
    let {
      default: e
    } = await require.e("22447").then(require.bind(require, 686768));
    return t => (0, a.jsx)(e, j(v({}, t), {
      entryPoint: c.cU.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL
    }))
  },
  ExistingUserAgeGatePrompt: async () => {
    let {
      default: e
    } = await Promise.all([require.e("1716"), require.e("8430")]).then(require.bind(require, 701509));
    return t => (0, a.jsx)(e, j(v({}, t), {
      source: x.L0.NSFW_SERVER
    }))
  },
  ExistingUserAgeGateUnderage: async () => {
    let {
      default: e
    } = await require.e("80478").then(require.bind(require, 920644));
    return t => (0, a.jsx)(e, v({}, t))
  },
  NewUserAgeGate: async () => {
    let {
      default: e
    } = await require.e("76323").then(require.bind(require, 298237));
    return t => (0, a.jsx)(e, v({}, t))
  },
  AutomatedUnderageAppealModal: async () => {
    let {
      default: e
    } = await require.e("75435").then(require.bind(require, 751744));
    return t => (0, a.jsx)(e, j(v({}, t), {
      classificationId: "123"
    }))
  },
  AutomodRaidResolveModal: async () => {
    let {
      default: e
    } = await require.e("28382").then(require.bind(require, 537623));
    return t => (0, a.jsx)(e, j(v({}, t), {
      guildId: "123",
      messageId: null
    }))
  },
  AutomodUserProfileQuarantineAlert: async () => {
    let {
      default: e
    } = await require.e("40390").then(require.bind(require, 251871));
    return t => (0, a.jsx)(e, j(v({}, t), {
      guildId: "123"
    }))
  },
  PhoneVerificationModal: async () => {
    let {
      default: e
    } = await Promise.resolve().then(require.bind(require, 145454));
    return t => (0, a.jsx)(e, v({
      error: null,
      working: false,
      validPhone: false
    }, t))
  },
  VoiceSettingsModal: async () => {
    let {
      default: e
    } = await require.e("51749").then(require.bind(require, 800740));
    return t => (0, a.jsx)(e, j(v({}, t), {
      mediaEngineContext: i.Yn.DEFAULT,
      subtitle: "Devtools subtitle"
    }))
  },
  DynamicGraphicDemo: async () => {
    let {
      DynamicGraphicComponent: e
    } = await Promise.resolve().then(require.bind(require, 198168));
    return t => (0, a.jsx)(o.Ioy, j(v({}, t), {
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
    return n => (0, a.jsx)(e, j(v({}, n), {
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
      PremiumTypes: r
    } = await Promise.resolve().then(require.bind(require, 474936)), i = {
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
    }, s = Chunk473749.forwardRef((n, s) => {
      let [o, c] = l.useState(null);
      return (0, a.jsx)(t.Provider, {
        value: {
          setStep: () => {},
          premiumType: r.TIER_2,
          onClose: n.onClose,
          transitionState: n.transitionState,
          premiumSubscription: i,
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
    return Chunk199849.displayName = "PremiumSubscriptionPauseModalWrapper", e => (0, a.jsx)(s, v({}, e))
  },
  NewMemberActionModal: async () => {
    let {
      default: e
    } = await Promise.all([require.e("7590"), require.e("81257")]).then(require.bind(require, 380716)), {
      NewMemberActionTypes: t
    } = await Promise.resolve().then(require.bind(require, 734893)), l = {
      channelId: "123456789",
      title: "Welcome to the server!",
      description: "Say hello in the welcome channel",
      actionType: exports.CHAT,
      emoji: null,
      icon: null
    };
    return t => (0, a.jsx)(e, j(v({}, t), {
      guildId: "123456789",
      action: l,
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
      createChannelRecord: l
    } = await Promise.resolve().then(require.bind(require, 131704)), r = Chunk473749({
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
    }), i = {
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
      let l = t.default.getDevicesForPlatform,
        s = t.default.getFetchingDevices,
        o = t.default.getLastSelectedDeviceByPlatform,
        c = t.default.getAwaitingRemoteSessionInfo;
      t.default.getDevicesForPlatform = e => e === h.ABu.PLAYSTATION ? i : l.call(t.default, e), t.default.getFetchingDevices = e => e !== h.ABu.PLAYSTATION && s.call(t.default, e), t.default.getLastSelectedDeviceByPlatform = e => e === h.ABu.PLAYSTATION ? "device-1" : o.call(t.default, e), t.default.getAwaitingRemoteSessionInfo = () => null;
      let d = n.onClose;
      return n.onClose = async () => {
        t.default.getDevicesForPlatform = l, t.default.getFetchingDevices = s, t.default.getLastSelectedDeviceByPlatform = o, t.default.getAwaitingRemoteSessionInfo = c, await d()
      }, (0, a.jsx)(e, j(v({}, n), {
        channel: r,
        platform: h.ABu.PLAYSTATION
      }))
    };
    return Chunk199849.displayName = "PlayStationModalWrapper", Chunk199849
  },
  GameDetectionReportModal: async () => {
    let {
      default: e
    } = await Promise.all([require.e("82077"), require.e("48547")]).then(require.bind(require, 953848));
    return t => (0, a.jsx)(e, j(v({}, t), {
      detectedActivity: {
        application_id: "123456789",
        name: "Test Game"
      }
    }))
  },
  AppealIngestionModal: async () => {
    let {
      default: e
    } = await Promise.all([require.e("65652"), require.e("37931")]).then(require.bind(require, 208265));
    return t => (0, a.jsx)(e, j(v({}, t), {
      classificationId: "123456789"
    }))
  },
  CreateTagModal: async () => {
    let {
      default: e
    } = await require.e("21971").then(require.bind(require, 201049));
    return t => (0, a.jsx)(e, j(v({}, t), {
      channelId: "123456789",
      guildId: "987654321"
    }))
  },
  CreateTagModalEdit: async () => {
    let {
      default: e
    } = await require.e("21971").then(require.bind(require, 201049)), t = {
      id: "tag-123",
      name: "Bug Report",
      emojiId: "123456789",
      emojiName: "\uD83D\uDC1B",
      moderated: true
    };
    return n => (0, a.jsx)(e, j(v({}, n), {
      channelId: "123456789",
      guildId: "987654321",
      tag: t
    }))
  },
  ConfirmModal: async () => {
    let {
      ConfirmModal: e
    } = await Promise.resolve().then(require.bind(require, 793030));
    return t => (0, a.jsx)(e, j(v({}, t), {
      title: "Confirm Action",
      subtitle: "Are you sure you want to perform this action? This action cannot be undone.",
      confirmText: "Confirm",
      onConfirm: () => console.log("ConfirmModal: Confirmed"),
      onCancel: () => console.log("ConfirmModal: Cancelled")
    }))
  },
  AlertModal: async () => {
    let {
      default: e
    } = await require.e("84112").then(require.bind(require, 273352));
    return t => (0, a.jsx)(e, j(v({}, t), {
      title: "Alert",
      body: "This is an alert message with a single action.",
      confirmText: "OK",
      onConfirm: () => console.log("AlertModal: Confirmed")
    }))
  },
  AlertModalWithCancel: async () => {
    let {
      default: e
    } = await require.e("84112").then(require.bind(require, 273352));
    return t => (0, a.jsx)(e, j(v({}, t), {
      title: "Confirm Action",
      body: "Are you sure you want to proceed with this action?",
      confirmText: "Yes",
      cancelText: "No",
      onConfirm: () => console.log("AlertModalWithCancel: Confirmed"),
      onCancel: () => console.log("AlertModalWithCancel: Cancelled")
    }))
  },
  AlertModalWithSecondary: async () => {
    let {
      default: e
    } = await require.e("84112").then(require.bind(require, 273352));
    return t => (0, a.jsx)(e, j(v({}, t), {
      title: "Settings Change",
      body: "This will change your account settings.",
      confirmText: "Apply",
      cancelText: "Cancel",
      secondaryConfirmText: "Don't show this again",
      onConfirm: () => console.log("AlertModalWithSecondary: Confirmed"),
      onCancel: () => console.log("AlertModalWithSecondary: Cancelled"),
      onConfirmSecondary: () => console.log("AlertModalWithSecondary: Secondary action confirmed")
    }))
  },
  GoLiveConfirmModal: async () => {
    let {
      default: e
    } = await Promise.all([require.e("38697"), require.e("4093"), require.e("2318")]).then(require.bind(require, 399299)), {
      ApplicationStreamPresets: t,
      ApplicationStreamResolutions: l,
      ApplicationStreamFPS: r
    } = await Promise.resolve().then(require.bind(require, 37113)), i = {
      id: "screen:0:0",
      name: "Entire Screen",
      thumbnail: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
      url: "screen:0:0"
    };
    return n => (0, a.jsx)(e, j(v({}, n), {
      selectedSource: i,
      selectedPreset: t.PRESET_VIDEO,
      selectedResolution: l.RESOLUTION_1080,
      selectedFPS: r.FPS_60,
      sound: true,
      previewDisabled: false,
      selectedChannelId: "987654321",
      sourceChanged: false,
      selectGuild: false,
      selectSource: false,
      selectedGuildId: "123456789",
      targetGuildPremiumTier: 2,
      onChangeSelectedChannelId: e => console.log("Channel changed:", e),
      onChangeSelectedFPS: e => console.log("FPS changed:", e),
      onChangeSelectedPreset: e => console.log("Preset changed:", e),
      onChangeSelectedResolution: e => console.log("Resolution changed:", e),
      onChangeSelectedSource: (e, t) => console.log("Source changed:", e, t),
      onChangeSource: () => console.log("Change source clicked"),
      onChangeAudioDevice: e => console.log("Audio device changed:", e),
      onChangeGuild: () => console.log("Change guild clicked"),
      onChangeSound: e => console.log("Sound changed:", e),
      onChangePreviewDisabled: e => console.log("Preview disabled changed:", e),
      onClose: () => console.log("Go Live Confirm modal closed")
    }))
  },
  GuildDisableCommunicationModal: async () => {
    let {
      Button: e,
      Text: t,
      Heading: l,
      Checkbox: r,
      ButtonGroup: i
    } = await Promise.resolve().then(require.bind(require, 481060)), {
      DisableCommunicationDuration: s,
      getFriendlyDurationString: o
    } = await Promise.resolve().then(require.bind(require, 590433)), c = await Promise.resolve().then(require.t.bind(require, 473749, 19)), d = "TestUser";

    function u(n) {
      let [u, m] = c.useState(s.DURATION_60_SEC), [p, h] = c.useState(""), [x, f] = c.useState(false), [g, b] = c.useState(false), v = [{
        value: s.DURATION_60_SEC,
        label: o(s.DURATION_60_SEC)
      }, {
        value: s.DURATION_5_MIN,
        label: o(s.DURATION_5_MIN)
      }, {
        value: s.DURATION_10_MIN,
        label: o(s.DURATION_10_MIN)
      }, {
        value: s.DURATION_1_HOUR,
        label: o(s.DURATION_1_HOUR)
      }, {
        value: s.DURATION_1_DAY,
        label: o(s.DURATION_1_DAY)
      }, {
        value: s.DURATION_1_WEEK,
        label: o(s.DURATION_1_WEEK)
      }], j = c.useCallback(async () => {
        f(true), console.log("GuildDisableCommunicationModal: Timing out user", {
          user: d,
          duration: o(u),
          reason: null != p ? p : "No reason provided",
          resolveFlag: g
        }), await new Promise(e => setTimeout(e, 1e3)), f(false), n.onClose()
      }, [u, p, g, n]);
      return (0, a.jsxs)("div", {
        style: {
          padding: "20px",
          maxWidth: "500px"
        },
        children: [(0, a.jsxs)(l, {
          variant: "heading-lg/semibold",
          className: "mb-2",
          children: ["Disable Communication for ", d, "#", "0001"]
        }), (0, a.jsx)(t, {
          variant: "text-sm/normal",
          className: "mb-4",
          color: "text-subtle",
          children: "This will temporarily disable the user's ability to communicate in this server."
        }), (0, a.jsxs)("div", {
          className: "mb-4",
          children: [(0, a.jsx)(l, {
            variant: "heading-sm/semibold",
            className: "mb-2",
            children: "Duration"
          }), (0, a.jsx)(i, {
            children: v.map(t => (0, a.jsx)(e, {
              variant: u === t.value ? "primary" : "secondary",
              size: "sm",
              text: t.label,
              onClick: () => m(t.value)
            }, t.value))
          })]
        }), (0, a.jsxs)("div", {
          className: "mb-4",
          children: [(0, a.jsx)(l, {
            variant: "heading-sm/semibold",
            className: "mb-2",
            children: "Reason (Optional)"
          }), (0, a.jsx)("textarea", {
            value: p,
            onChange: e => h(e.target.value),
            placeholder: "Enter reason for timeout...",
            style: {
              width: "100%",
              minHeight: "80px",
              padding: "8px",
              border: "1px solid var(--border-subtle)",
              borderRadius: "4px",
              backgroundColor: "var(--background-base-low)",
              color: "var(--text-strong)",
              resize: "vertical"
            }
          })]
        }), (0, a.jsx)("div", {
          className: "mb-4",
          children: (0, a.jsx)(r, {
            checked: g,
            onChange: b,
            label: "Resolve associated mod report"
          })
        }), (0, a.jsxs)("div", {
          style: {
            display: "flex",
            gap: "8px",
            justifyContent: "flex-end"
          },
          children: [(0, a.jsx)(e, {
            variant: "secondary",
            text: "Cancel",
            onClick: n.onClose
          }), (0, a.jsx)(e, {
            variant: "primary",
            text: "Timeout User",
            onClick: j,
            disabled: x
          })]
        })]
      })
    }
    return e => (0, a.jsx)(u, v({}, e))
  },
  GuildPowerupDeactivateModal: async () => {
    let {
      Button: e,
      Text: t,
      Heading: l,
      Checkbox: r
    } = await Promise.resolve().then(require.bind(require, 481060)), i = await Promise.resolve().then(require.t.bind(require, 473749, 19)), s = "Level 3 Server Boost", o = 200, c = 60, d = 8;

    function u(n) {
      let [u, m] = i.useState(false), [p, h] = i.useState(false), x = i.useCallback(async () => {
        h(true), console.log("GuildPowerupDeactivateModal: Deactivating powerup", {
          powerup: s,
          guildId: "123456789"
        }), await new Promise(e => setTimeout(e, 2e3)), h(false), n.onClose()
      }, [n]);
      return (0, a.jsxs)("div", {
        style: {
          padding: "20px",
          maxWidth: "500px"
        },
        children: [(0, a.jsxs)(l, {
          variant: "heading-lg/semibold",
          className: "mb-2",
          children: ["Deactivate ", s]
        }), (0, a.jsxs)(t, {
          variant: "text-sm/normal",
          className: "mb-4",
          color: "text-subtle",
          children: ["This will remove the ", s, " from your server and disable all associated features."]
        }), (0, a.jsxs)("div", {
          className: "mb-4",
          style: {
            backgroundColor: "var(--background-base-lower)",
            padding: "16px",
            borderRadius: "8px",
            border: "1px solid var(--border-subtle)"
          },
          children: [(0, a.jsx)(l, {
            variant: "heading-sm/semibold",
            className: "mb-2",
            children: "Current Features"
          }), (0, a.jsxs)("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px"
            },
            children: [(0, a.jsxs)(t, {
              variant: "text-sm/normal",
              color: "text-subtle",
              children: ["• ", o, " emoji slots"]
            }), (0, a.jsxs)(t, {
              variant: "text-sm/normal",
              color: "text-subtle",
              children: ["• ", c, " sticker slots"]
            }), (0, a.jsxs)(t, {
              variant: "text-sm/normal",
              color: "text-subtle",
              children: ["• ", d, " sound slots"]
            }), (0, a.jsx)(t, {
              variant: "text-sm/normal",
              color: "text-subtle",
              children: "• Custom server banner"
            })]
          })]
        }), (0, a.jsxs)("div", {
          className: "mb-4",
          style: {
            backgroundColor: "var(--background-danger)",
            padding: "16px",
            borderRadius: "8px",
            border: "1px solid var(--status-danger)"
          },
          children: [(0, a.jsxs)(t, {
            variant: "eyebrow",
            color: "text-feedback-critical",
            className: "mb-2",
            children: [(0, a.jsx)("span", {
              role: "img",
              "aria-label": "Warning",
              children: "⚠️"
            }), " ", "Warning"]
          }), (0, a.jsx)(t, {
            variant: "text-sm/medium",
            color: "text-feedback-critical",
            children: "Deactivating this powerup will immediately remove all Level 3 features from your server. Members will lose access to custom emojis, stickers, and other premium features. This action cannot be undone."
          })]
        }), (0, a.jsx)("div", {
          className: "mb-4",
          children: (0, a.jsx)(r, {
            checked: u,
            onChange: m,
            label: "I understand that deactivating this powerup will remove all Level 3 features from my server",
            labelType: "secondary"
          })
        }), (0, a.jsxs)("div", {
          style: {
            display: "flex",
            gap: "8px",
            justifyContent: "flex-end"
          },
          children: [(0, a.jsx)(e, {
            variant: "secondary",
            text: "Cancel",
            onClick: n.onClose
          }), (0, a.jsx)(e, {
            variant: "critical-primary",
            text: "Deactivate Level",
            onClick: x,
            disabled: !u,
            loading: p
          })]
        })]
      })
    }
    return e => (0, a.jsx)(u, v({}, e))
  },
  DataHarvestModal: async () => {
    let {
      default: e
    } = await require.e("25120").then(require.bind(require, 926281));
    return t => (0, a.jsx)(e, {
      modalProps: t,
      onConfirm: e => {
        console.log("DataHarvestModal: Requesting data export for:", e), setTimeout(() => {
          console.log("DataHarvestModal: Data export request submitted successfully")
        }, 1e3)
      }
    })
  },
  EnableCommunityModal: async () => {
    let {
      default: e
    } = await Promise.all([require.e("57486"), require.e("10438")]).then(require.bind(require, 87026));
    return t => (0, a.jsx)(e, j(v({}, t), {
      onClose: () => {
        console.log("EnableCommunityModal: Closed"), t.onClose()
      }
    }))
  },
  DeprivateModal: async () => {
    let e = (await Promise.all([require.e("38697"), require.e("82140")]).then(require.bind(require, 89216))).default;
    return t => (0, a.jsx)(e, j(v({}, t), {
      guildId: "123456789012345678",
      startingChannelId: "987654321098765432"
    }))
  },
  CameraPreviewModal: async () => {
    let {
      default: e
    } = await require.e("91018").then(require.bind(require, 601572));
    return t => (0, a.jsx)(e, j(v({}, t), {
      videoEnabled: false,
      onEnable: () => console.log("Camera enabled")
    }))
  },
  CameraPreviewModalWithVideo: async () => {
    let {
      default: e
    } = await require.e("91018").then(require.bind(require, 601572));
    return t => (0, a.jsx)(e, j(v({}, t), {
      videoEnabled: true,
      onEnable: () => console.log("Camera enabled")
    }))
  },
  ModeratorReportResolveConfirmModal: async () => {
    let {
      default: e
    } = await require.e("52282").then(require.bind(require, 5101));
    return t => (0, a.jsx)(e, j(v({}, t), {
      handleResolveFlag: () => console.log("ModeratorReportResolveConfirmModal: Flag resolved")
    }))
  },
  SelectFriendsModal: async () => {
    let {
      default: e,
      SelectFriendsModalScreens: t
    } = await Promise.resolve().then(require.bind(require, 656139));
    return n => (0, a.jsx)(e, {
      onClose: async () => {
        console.log("SelectFriendsModal: Closed"), await n.onClose()
      },
      startingScreen: t.SELECT_FRIENDS
    })
  },
  SelectFriendsModalReminder: async () => {
    let {
      default: e,
      SelectFriendsModalScreens: t
    } = await Promise.resolve().then(require.bind(require, 656139));
    return n => (0, a.jsx)(e, {
      onClose: async () => {
        console.log("SelectFriendsModalReminder: Closed"), await n.onClose()
      },
      startingScreen: t.REMINDER
    })
  },
  AddFavoriteChannelModal: async () => {
    let {
      default: e
    } = await require.e("95257").then(require.bind(require, 610617));
    return t => (0, a.jsx)(e, j(v({}, t), {
      parentId: null
    }))
  },
  ActivityShareMomentModal: async () => {
    let {
      default: e
    } = await Promise.all([require.e("49049"), require.e("4530"), require.e("44469")]).then(require.bind(require, 899201));
    return t => (0, a.jsx)(e, j(v({}, t), {
      applicationId: "123456789",
      mediaUrl: "https://picsum.photos/400/300.jpg"
    }))
  },
  CallUserConfirmationModal: async () => {
    let {
      default: e
    } = await require.e("27157").then(require.bind(require, 736454));
    return t => (0, a.jsx)(e, j(v({}, t), {
      onSubmit: () => {
        console.log("CallUserConfirmationModal: Call confirmed"), t.onClose()
      }
    }))
  },
  OptInReorderAttemptModal: async () => {
    let {
      default: e
    } = await require.e("82560").then(require.bind(require, 391312));
    return t => (0, a.jsx)(e, j(v({}, t), {
      onClose: () => (console.log("OptInReorderAttemptModal: Modal closed"), t.onClose())
    }))
  },
  GuildAntiRaidReportModal: async () => {
    let {
      default: e
    } = await require.e("9354").then(require.bind(require, 461533));
    return t => (0, a.jsx)(e, j(v({}, t), {
      guildId: "123456789",
      onClose: () => (console.log("GuildAntiRaidReportModal: Modal closed"), t.onClose())
    }))
  },
  ConsentCheckBoxModal: async () => {
    let {
      default: e
    } = await require.e("63490").then(require.bind(require, 853268)), {
      VoidConfirmModal: t
    } = await Promise.resolve().then(require.bind(require, 288022)), {
      Text: l,
      Heading: r,
      Anchor: i
    } = await Promise.resolve().then(require.bind(require, 481060)), s = await Promise.resolve().then(require.t.bind(require, 473749, 19));

    function o(n) {
      let [o, c] = s.useState(false), [d, u] = s.useState(false);
      return (0, a.jsx)(t, j(v({}, n), {
        header: "Consent CheckBox Examples",
        confirmText: "Close",
        cancelText: "",
        onConfirm: () => (console.log("ConsentCheckBoxModal: Modal closed"), n.onClose()),
        onCancel: () => {},
        children: (0, a.jsxs)("div", {
          style: {
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          },
          children: [(0, a.jsxs)("div", {
            children: [(0, a.jsx)(r, {
              variant: "heading-md/semibold",
              style: {
                marginBottom: "12px"
              },
              children: "Terms of Service Consent"
            }), (0, a.jsx)(e, {
              value: o,
              onChange: c,
              subText: (0, a.jsxs)("span", {
                children: ["I agree to Discord's", " ", (0, a.jsx)(i, {
                  href: "https://discord.com/terms",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Terms of Service"
                }), " ", "and", " ", (0, a.jsx)(i, {
                  href: "https://discord.com/privacy",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Privacy Policy"
                })]
              })
            }), (0, a.jsxs)(l, {
              variant: "text-sm/normal",
              color: "text-subtle",
              style: {
                marginTop: "8px"
              },
              children: ["Consent status: ", o ? "Agreed" : "Not agreed"]
            })]
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(r, {
              variant: "heading-md/semibold",
              style: {
                marginBottom: "12px"
              },
              children: "Promotional Email Consent"
            }), (0, a.jsx)(e, {
              value: d,
              onChange: u,
              subText: "I would like to receive promotional emails from Discord about new features, events, and other updates.",
              muted: true
            }), (0, a.jsxs)(l, {
              variant: "text-sm/normal",
              color: "text-subtle",
              style: {
                marginTop: "8px"
              },
              children: ["Promo consent status: ", d ? "Opted in" : "Not opted in"]
            })]
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(r, {
              variant: "heading-md/semibold",
              style: {
                marginBottom: "12px"
              },
              children: "Custom Styled Consent"
            }), (0, a.jsx)(e, {
              value: false,
              onChange: () => {},
              subText: "This is a custom styled consent checkbox with different styling options.",
              marginTopStyle: "margin-top-16",
              subtextClassName: "custom-consent-text"
            })]
          })]
        })
      }))
    }
    return Chunk481060.displayName = "ConsentCheckBoxModalContent", e => (0, a.jsx)(o, v({}, e))
  },
  GuildRaidLockdownFeedbackModal: async () => {
    let {
      default: e
    } = await require.e("53324").then(require.bind(require, 821312));
    return t => (0, a.jsx)(e, j(v({}, t), {
      guildId: "123456789",
      onClose: () => (console.log("GuildRaidLockdownFeedbackModal: Modal closed"), t.onClose())
    }))
  },
  GuildVerificationLevelModal: async () => {
    let {
      default: e
    } = await require.e("72458").then(require.bind(require, 694278)), {
      dangerouslyConstructGuildRecordFromUntypedObject: t
    } = await Promise.resolve().then(require.bind(require, 411198)), l = exports({
      id: "123456789",
      name: "Test Server",
      description: "A test server for development",
      ownerId: "987654321",
      icon: null,
      splash: null,
      banner: null,
      homeHeader: null,
      features: [],
      preferredLocale: "en-US",
      afkChannelId: null,
      afkTimeout: 300,
      systemChannelId: null,
      verificationLevel: 2,
      joinedAt: new Date,
      defaultMessageNotifications: 0,
      mfaLevel: 0,
      application_id: null,
      explicitContentFilter: 0,
      vanityURLCode: null,
      premiumTier: 0,
      premiumSubscriberCount: 0,
      premiumProgressBarEnabled: false,
      systemChannelFlags: 0,
      discoverySplash: null,
      rulesChannelId: null,
      safetyAlertsChannelId: null,
      publicUpdatesChannelId: null,
      maxStageVideoChannelUsers: 10,
      maxVideoChannelUsers: 25,
      maxMembers: 5e5,
      nsfwLevel: 0,
      ownerConfiguredContentLevel: null,
      hubType: null,
      latestOnboardingQuestionId: null,
      profile: null,
      premiumFeatures: null,
      moderatorReporting: null
    });
    return t => (0, a.jsx)(e, j(v({}, t), {
      guild: l
    }))
  },
  GuildVerificationLevelModalCommunity: async () => {
    let {
      default: e
    } = await require.e("72458").then(require.bind(require, 694278)), {
      dangerouslyConstructGuildRecordFromUntypedObject: t
    } = await Promise.resolve().then(require.bind(require, 411198)), {
      GuildFeatures: l
    } = await Promise.resolve().then(require.bind(require, 981631)), r = exports({
      id: "123456789",
      name: "Test Community Server",
      description: "A test community server for development",
      ownerId: "987654321",
      icon: null,
      splash: null,
      banner: null,
      homeHeader: null,
      features: [Chunk473749.COMMUNITY],
      preferredLocale: "en-US",
      afkChannelId: null,
      afkTimeout: 300,
      systemChannelId: null,
      verificationLevel: 3,
      joinedAt: new Date,
      defaultMessageNotifications: 0,
      mfaLevel: 0,
      application_id: null,
      explicitContentFilter: 0,
      vanityURLCode: null,
      premiumTier: 0,
      premiumSubscriberCount: 0,
      premiumProgressBarEnabled: false,
      systemChannelFlags: 0,
      discoverySplash: null,
      rulesChannelId: null,
      safetyAlertsChannelId: null,
      publicUpdatesChannelId: null,
      maxStageVideoChannelUsers: 10,
      maxVideoChannelUsers: 25,
      maxMembers: 5e5,
      nsfwLevel: 0,
      ownerConfiguredContentLevel: null,
      hubType: null,
      latestOnboardingQuestionId: null,
      profile: null,
      premiumFeatures: null,
      moderatorReporting: null
    });
    return t => (0, a.jsx)(e, j(v({}, t), {
      guild: r
    }))
  },
  EmojiAddModal: async () => {
    let {
      EmojiAddModal: e
    } = await require.e("21112").then(require.bind(require, 301160));
    return t => (0, a.jsx)(e, j(v({}, t), {
      guildId: "123456789",
      initialTierEmojiIds: new Set(["emoji1"]),
      onSubmit: e => {
        console.log("EmojiAddModal: Selected emojis:", Array.from(e))
      },
      transitionToManageEmoji: () => {
        console.log("EmojiAddModal: Transition to manage emoji clicked")
      },
      onClose: () => (console.log("EmojiAddModal: Modal closed"), t.onClose())
    }))
  },
  StreamFullModal: async () => {
    let {
      default: e
    } = await require.e("63757").then(require.bind(require, 309690));
    return t => (0, a.jsx)(e, v({}, t))
  },
  FamilyCenterAcceptLinkModal: async () => {
    let e = Chunk594174.default.getUser("12345"),
      t = Chunk594174.default.getUser("67890");
    if (true === module || true === exports) return () => null;
    let {
      default: l
    } = await require.e("59716").then(require.bind(require, 275370));
    return n => (0, a.jsx)(l, j(v({}, n), {
      currentUser: t,
      otherUser: e
    }))
  },
  FamilyCenterDeclineLinkModal: async () => {
    let e = Chunk594174.default.getUser("12345"),
      t = Chunk594174.default.getUser("67890");
    if (true === module || true === exports) return () => null;
    let {
      default: l
    } = await require.e("958").then(require.bind(require, 4526));
    return n => (0, a.jsx)(l, j(v({}, n), {
      currentUser: t,
      otherUser: e
    }))
  },
  FamilyCenterCancelLinkModal: async () => {
    let e = Chunk594174.default.getUser("12345"),
      t = Chunk594174.default.getUser("67890");
    if (true === module || true === exports) return () => null;
    let {
      default: l
    } = await require.e("69015").then(require.bind(require, 247265));
    return n => (0, a.jsx)(l, j(v({}, n), {
      currentUser: e,
      otherUser: t
    }))
  },
  FamilyCenterDisconnectLinkModal: async () => {
    let e = Chunk594174.default.getUser("12345"),
      t = Chunk594174.default.getUser("67890");
    if (true === module || true === exports) return () => null;
    let {
      default: l
    } = await require.e("50872").then(require.bind(require, 442673));
    return n => (0, a.jsx)(l, j(v({}, n), {
      currentUser: e,
      otherUser: t
    }))
  },
  FamilyCenterQRCodeModal: async () => {
    let {
      default: e
    } = await Promise.all([require.e("1216"), require.e("90688")]).then(require.bind(require, 978305));
    return t => (0, a.jsx)(e, v({}, t))
  },
  PremiumGroupFriendsSelectorModal: async () => {
    let {
      default: e
    } = await require.e("86948").then(require.bind(require, 153241));
    return t => (0, a.jsx)(e, v({}, t))
  },
  PremiumGroupAcceptInviteModal: async () => {
    let {
      default: e
    } = await require.e("26450").then(require.bind(require, 382927));
    return t => (0, a.jsx)(e, j(v({}, t), {
      premiumGroupSubscriptionId: "1234567890",
      isExistingSub: false,
      premiumGroupPrimaryName: "Test User"
    }))
  }
};

function y() {
  let e = Chunk473749.useMemo(() => Object.keys(_).map(e => ({
      label: e,
      value: e
    })).sort((e, t) => e.label.localeCompare(t.label)), []),
    [t, n] = Chunk473749.useState(module[0].value);
  return (0, Chunk54381.jsx)(Chunk481060.zJl, {
    className: Chunk451429.panel,
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk711322.panelInner,
      children: [(0, Chunk54381.jsxs)("section", {
        className: Chunk711322.section,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-md/semibold",
          children: "Open a Modal"
        }), (0, Chunk54381.jsxs)("div", {
          className: Chunk711322.inputRow,
          children: [(0, Chunk54381.jsx)(Chunk199849.B6, {
            className: Chunk711322.input,
            options: module,
            isSelected: e => t === e,
            serialize: e => e,
            select: e => n(e),
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk54381.jsx)(Chunk481060.Button, {
            variant: "primary",
            text: "Open",
            onClick: () => (0, Chunk481060.ZDy)(_[exports])
          })]
        })]
      }), (0, Chunk54381.jsxs)("section", {
        className: Chunk711322.section,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-md/semibold",
          children: "Wow moment"
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk711322.inputRow,
          children: (0, Chunk54381.jsx)(Chunk481060.Button, {
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