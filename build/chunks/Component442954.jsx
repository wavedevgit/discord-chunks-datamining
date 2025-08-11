/** Chunk was on 93886 **/
/** chunk id: 442954, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./642613.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk138464 = require("./138464.js"),
  Chunk585483 = require("./585483.js"),
  Chunk246992 = require("./246992.js"),
  Chunk981631 = require("./981631.js"),
  Chunk723359 = require("./723359.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk546147 = require("./546147.js"),
  Chunk616257 = require("./616257.js");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
      return Object.getOwnPropertyDescriptor(a, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = a[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      a.push.apply(a, n)
    }
    return a
  })(Object(t)).forEach(function(a) {
    Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
  }), e
}
let f = {
  CollectiblesExpiryModal: async () => {
    let {
      default: e
    } = await require.e("77370").then(require.bind(require, 83950));
    return t => (0, n.jsx)(e, p({}, t))
  },
  EmailEnterModal: async () => {
    let {
      default: e
    } = await require.e("93288").then(require.bind(require, 396410));
    return t => (0, n.jsx)(e, b(p({}, t), {
      headerText: m.intl.string(m.t.ZLRYGR),
      confirmButtonText: m.intl.string(m.t.PDTjLC),
      confirmButtonVariant: "primary"
    }))
  },
  EmailPincodeModal: async () => {
    let {
      default: e
    } = await require.e("94566").then(require.bind(require, 965072));
    return t => (0, n.jsx)(e, b(p({}, t), {
      headerText: m.intl.string(m.t.H3Q7U1),
      onFormSubmit: () => {},
      onResend: () => {},
      onSuccess: () => {},
      confirmButtonText: m.intl.string(m.t["13ofGh"]),
      impression: {
        impressionName: l.ImpressionNames.URF_CONFIRM_EMAIL_CODE
      }
    }))
  },
  ExistingUserAgeGatePrompt: async () => {
    let {
      default: e
    } = await Promise.all([require.e("6583"), require.e("1337"), require.e("33312")]).then(require.bind(require, 746882));
    return t => (0, n.jsx)(e, b(p({}, t), {
      source: u.L0.NSFW_SERVER
    }))
  },
  AutomatedUnderageAppealModal: async () => {
    let {
      default: e
    } = await require.e("75435").then(require.bind(require, 751744));
    return t => (0, n.jsx)(e, b(p({}, t), {
      classificationId: "123"
    }))
  }
};

function v() {
  let e = Chunk73800.useMemo(() => Object.keys(f).map(e => ({
      label: e,
      value: e
    })).sort((e, t) => e.label.localeCompare(t.label)), []),
    [t, a] = Chunk73800.useState(module[0].value);
  return (0, Chunk255367.jsx)(Chunk481060.zJl, {
    className: Chunk616257.panel,
    children: (0, Chunk255367.jsxs)("div", {
      className: Chunk546147.panelInner,
      children: [(0, Chunk255367.jsxs)("section", {
        className: Chunk546147.section,
        children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Open a Modal"
        }), (0, Chunk255367.jsxs)("div", {
          className: Chunk546147.inputRow,
          children: [(0, Chunk255367.jsx)(Chunk481060.PhF, {
            className: Chunk546147.input,
            options: module,
            isSelected: e => t === e,
            serialize: e => e,
            select: e => a(e),
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Open",
            onClick: () => (0, Chunk481060.ZDy)(f[exports])
          })]
        })]
      }), (0, Chunk255367.jsxs)("section", {
        className: Chunk546147.section,
        children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Wow moment"
        }), (0, Chunk255367.jsx)("div", {
          className: Chunk546147.inputRow,
          children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
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