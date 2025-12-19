/** Chunk was on 26450 **/
/** chunk id: 382927, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => L
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk782568 = require("./782568.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk566697 = require("./566697.jsx"),
  Chunk518727 = require("./518727.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk594174 = require("./594174.js"),
  Chunk526167 = require("./526167.js"),
  Chunk80721 = require("./80721.js"),
  Chunk282793 = require("./282793.js"),
  Chunk981631 = require("./981631.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk544165 = require("./544165.js"),
  Chunk530641 = require("./530641.js"),
  Chunk491567 = require("./491567.js"),
  Chunk419698 = require("./419698.js"),
  Chunk568368 = require("./568368.js");

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function U(e, t) {
  if (null == e) return {};
  var r, n, a = function(e, t) {
    if (null == e) return {};
    var r, n, a = {},
      i = Object.keys(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
    return a
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
  }
  return a
}
let G = {
  [Chunk282793.YW.BILLING_SUBSCRIPTION_GROUP_USER_ON_COOLDOWN]: 1,
  [Chunk282793.YW.BILLING_SUBSCRIPTION_GROUP_USER_ACTIVE_BOOSTS]: 2,
  [Chunk282793.YW.BILLING_SUBSCRIPTION_GROUP_USER_BOOST_ONLY]: 2,
  [Chunk282793.YW.BILLING_SUBSCRIPTION_GROUP_USER_HAS_FRACTIONAL_NITRO]: 5,
  [Chunk282793.YW.UNKNOWN_USER]: 3
};

function T(e) {
  var {
    onClose: t,
    isExistingSub: r,
    premiumGroupPrimaryName: a,
    currentUser: i
  } = e, o = U(e, ["onClose", "isExistingSub", "premiumGroupPrimaryName", "currentUser"]);
  let u = (0, s.e7)([f.Z], () => f.Z.useReducedMotion),
    p = (0, S.rO)() ? h.Z : w.Z;
  return (0, n.jsx)(l.IX, _(N({}, o), {
    onClose: t,
    children: (0, n.jsxs)(l.fef, {
      children: [(0, n.jsx)("div", {
        className: v.wumpusContainer
      }), (0, n.jsx)(l.X6q, {
        className: v.header,
        variant: "display-md",
        color: "text-strong",
        children: j.intl.string(j.t.QWljxE)
      }), (0, n.jsxs)("div", {
        className: v.nameplatePreviewContainer,
        children: [u ? (0, n.jsx)("img", {
          src: I.Z,
          alt: "",
          className: v.nameplateGlow
        }) : (0, n.jsx)(d.Z, {
          playsInline: true,
          muted: true,
          autoPlay: true,
          loop: true,
          className: v.nameplateGlow,
          children: (0, n.jsx)("source", {
            src: p
          })
        }), (0, n.jsx)(m.Z, {
          user: i,
          isHighlighted: true,
          nameplate: null,
          nameplateData: i.nameplate,
          className: v.nameplatePreview,
          nameplatePreviewSize: "large"
        })]
      }), (0, n.jsx)("div", {
        className: v.textContainer,
        children: (0, n.jsx)(l.xvT, {
          variant: "text-md/medium",
          color: "text-muted",
          children: j.intl.format(r ? y.default.axh0pl : y.default["+KAArL"], {
            premiumGroupProductName: (0, P.sO)(),
            primaryName: a
          })
        })
      }), (0, n.jsx)("div", {
        className: v.footer,
        children: (0, n.jsx)(c.zxk, {
          variant: "primary",
          fullWidth: true,
          text: j.intl.string(y.default.EL9m2H),
          onClick: () => {
            t(), (0, b.uL)(x.Z5c.APPLICATION_STORE)
          }
        })
      })]
    })
  }))
}

function k(e) {
  var {
    setModalState: t,
    onClose: r,
    premiumGroupSubscriptionId: i,
    premiumGroupInviteId: o,
    isExistingSub: s,
    premiumGroupPrimaryName: c,
    currentUser: f,
    setError: d
  } = e, m = U(e, ["setModalState", "onClose", "premiumGroupSubscriptionId", "premiumGroupInviteId", "isExistingSub", "premiumGroupPrimaryName", "currentUser", "setError"]);
  let p = (0, P.sO)(),
    [b, O] = (0, a.useState)(false),
    S = async () => {
      O(true);
      let e = await (0, g.r7)(i, f.id, o);
      if (O(false), e.ok) t(1);
      else {
        var r, n, a;
        d(null == (n = null == (r = e.body) ? true : r.code) ? 0 : null != (a = G[n]) ? a : 0), t(2)
      }
    };
  return (0, n.jsx)(l.ExpressiveModal, _(N({}, m), {
    onClose: r,
    gradientColor: "nitro-pink",
    badge: {
      type: "beta",
      variant: "expressive"
    },
    graphic: {
      src: C.Z,
      type: "image"
    },
    title: j.intl.formatToPlainString(s ? y.default["0Yxz12"] : y.default.UjA5k8, {
      premiumGroupProductName: p
    }),
    subtitle: j.intl.format(s ? y.default.YjSsdH : y.default.qkFeBP, {
      premiumGroupProductName: p,
      cooldownMonths: P.T9,
      primaryName: c
    }),
    actions: [{
      text: j.intl.string(y.default["IO+nlU"]),
      onClick: () => {
        (0, u.Z)(P.j3)
      },
      variant: "secondary"
    }, {
      text: j.intl.string(y.default.odQeh3),
      onClick: S,
      variant: "expressive",
      icon: l.SrA,
      loading: b
    }]
  }))
}

function E(e) {
  let t, r;
  var {
    error: a,
    onClose: i
  } = e, o = U(e, ["error", "onClose"]);
  let s = (0, P.sO)();
  switch (a) {
    case 1:
      t = j.intl.formatToPlainString(y.default["wMo6/n"], {
        premiumGroupProductName: s
      }), r = j.intl.formatToPlainString(y.default.C08r8L, {
        premiumGroupProductName: s,
        cooldownMonths: P.T9
      });
      break;
    case 2:
      t = j.intl.formatToPlainString(y.default["Um4ml+"], {
        premiumGroupProductName: s
      }), r = j.intl.string(y.default.Fm8iss);
      break;
    case 3:
      t = j.intl.string(y.default.yGTLxP), r = j.intl.formatToPlainString(y.default["7/qtoL"], {
        premiumGroupProductName: s
      });
      break;
    case 4:
      t = j.intl.formatToPlainString(y.default["S+UfpQ"], {
        premiumGroupProductName: s
      }), r = j.intl.formatToPlainString(y.default.AKYhx6, {
        premiumGroupProductName: s,
        countryName: (0, P.sf)()
      });
      break;
    case 5:
      t = j.intl.formatToPlainString(y.default.anKEqI, {
        premiumGroupProductName: s
      }), r = j.intl.formatToPlainString(y.default["67BbUf"], {
        premiumGroupProductName: s
      });
      break;
    default:
      t = j.intl.formatToPlainString(y.default["Kpg/uU"], {
        premiumGroupProductName: s
      }), r = j.intl.formatToPlainString(y.default.GrEzlX, {
        premiumGroupProductName: s
      })
  }
  return (0, n.jsx)(l.Modal, N({
    size: "md",
    title: t,
    subtitle: r,
    onClose: i,
    actions: [{
      text: j.intl.string(y.default["IO+nlU"]),
      variant: "secondary",
      onClick: () => {
        (0, u.Z)(P.j3)
      }
    }]
  }, o))
}

function L(e) {
  var {
    premiumGroupSubscriptionId: t,
    premiumGroupInviteId: r,
    isExistingSub: i,
    premiumGroupPrimaryName: l
  } = e, c = U(e, ["premiumGroupSubscriptionId", "premiumGroupInviteId", "isExistingSub", "premiumGroupPrimaryName"]);
  let [u, f] = (0, a.useState)(0), [d, m] = (0, a.useState)(null), b = (0, s.e7)([O.default], () => O.default.getCurrentUser());
  o()(null != b, "UserSettingsProfileCustomization: user cannot be undefined");
  let S = null;
  switch (u) {
    case 0:
      S = (0, n.jsx)(k, N({
        setModalState: f,
        premiumGroupSubscriptionId: t,
        premiumGroupInviteId: r,
        isExistingSub: i,
        premiumGroupPrimaryName: l,
        currentUser: b,
        setError: m
      }, c));
      break;
    case 1:
      S = (0, n.jsx)(T, _(N({}, c), {
        isExistingSub: i,
        premiumGroupPrimaryName: l,
        currentUser: b
      }));
      break;
    case 2:
      S = (0, n.jsx)(E, N({
        error: d
      }, c))
  }
  return (0, n.jsx)(p.Z, {
    isConfirmationStep: 1 === u,
    isEligibleForWowMoment: true,
    shouldPrefetchWowMoment: true,
    children: S
  })
}