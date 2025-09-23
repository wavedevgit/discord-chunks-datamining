/** Chunk was on 10017 **/
/** chunk id: 442954, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./642613.js"), require("./388685.js");
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
  Chunk596533 = require("./596533.js"),
  Chunk866403 = require("./866403.js");

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
let j = {
  CollectiblesExpiryModal: async () => {
    let {
      default: e
    } = await require.e("77370").then(require.bind(require, 83950));
    return t => (0, a.jsx)(e, b({}, t))
  },
  EmailEnterModal: async () => {
    let {
      default: e
    } = await require.e("93288").then(require.bind(require, 396410));
    return t => (0, a.jsx)(e, g(b({}, t), {
      headerText: p.intl.string(p.t.ZLRYGR),
      confirmButtonText: p.intl.string(p.t.PDTjLC),
      confirmButtonVariant: "primary"
    }))
  },
  EmailPincodeModal: async () => {
    let {
      default: e
    } = await require.e("94566").then(require.bind(require, 965072));
    return t => (0, a.jsx)(e, g(b({}, t), {
      headerText: p.intl.string(p.t.H3Q7U1),
      onFormSubmit: () => {},
      onResend: () => {},
      onSuccess: () => {},
      confirmButtonText: p.intl.string(p.t["13ofGh"]),
      impression: {
        impressionName: i.ImpressionNames.URF_CONFIRM_EMAIL_CODE
      }
    }))
  },
  AgeVerificationRetryModal: async () => {
    let {
      default: e
    } = await require.e("53893").then(require.bind(require, 686768));
    return t => (0, a.jsx)(e, g(b({}, t), {
      entryPoint: o.cU.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL
    }))
  },
  ExistingUserAgeGatePrompt: async () => {
    let {
      default: e
    } = await Promise.all([require.e("1716"), require.e("48590")]).then(require.bind(require, 746882));
    return t => (0, a.jsx)(e, g(b({}, t), {
      source: h.L0.NSFW_SERVER
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
  }
};

function v() {
  let e = Chunk647438.useMemo(() => Object.keys(j).map(e => ({
      label: e,
      value: e
    })).sort((e, t) => e.label.localeCompare(t.label)), []),
    [t, n] = Chunk647438.useState(module[0].value);
  return (0, Chunk951288.jsx)(Chunk481060.zJl, {
    className: Chunk866403.panel,
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk596533.panelInner,
      children: [(0, Chunk951288.jsxs)("section", {
        className: Chunk596533.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Open a Modal"
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk596533.inputRow,
          children: [(0, Chunk951288.jsx)(Chunk481060.PhF, {
            className: Chunk596533.input,
            options: module,
            isSelected: e => t === e,
            serialize: e => e,
            select: e => n(e),
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Open",
            onClick: () => (0, Chunk481060.ZDy)(j[exports])
          })]
        })]
      }), (0, Chunk951288.jsxs)("section", {
        className: Chunk596533.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Wow moment"
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk596533.inputRow,
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