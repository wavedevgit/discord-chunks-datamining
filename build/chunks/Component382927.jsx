/** Chunk was on 26450 **/
/** chunk id: 382927, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => U
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
  Chunk606097 = require("./606097.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk807021 = require("./807021.js"),
  Chunk667325 = require("./667325.js"),
  Chunk552039 = require("./552039.js"),
  Chunk445161 = require("./445161.js"),
  Chunk255870 = require("./255870.js");

function I(e) {
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

function N(e, t) {
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

function E(e, t) {
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

function k(e) {
  var {
    onClose: t,
    isExistingSub: r,
    premiumGroupPrimaryName: a,
    currentUser: i
  } = e, o = E(e, ["onClose", "isExistingSub", "premiumGroupPrimaryName", "currentUser"]);
  let u = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
    p = (0, h.rO)() ? w.Z : O.Z;
  return (0, n.jsx)(s.IX, N(I({}, o), {
    onClose: t,
    children: (0, n.jsxs)(s.fef, {
      children: [(0, n.jsx)("div", {
        className: x.wumpusContainer
      }), (0, n.jsx)(s.X6q, {
        className: x.header,
        variant: "display-md",
        color: "header-primary",
        children: v.intl.string(v.t.QWljxE)
      }), (0, n.jsxs)("div", {
        className: x.nameplatePreviewContainer,
        children: [u ? (0, n.jsx)("img", {
          src: _.Z,
          alt: "",
          className: x.nameplateGlow
        }) : (0, n.jsx)(f.Z, {
          playsInline: true,
          muted: true,
          autoPlay: true,
          loop: true,
          className: x.nameplateGlow,
          children: (0, n.jsx)("source", {
            src: p
          })
        }), (0, n.jsx)(m.Z, {
          user: i,
          isHighlighted: true,
          nameplate: null,
          nameplateData: i.nameplate,
          className: x.nameplatePreview,
          nameplatePreviewSize: "large"
        })]
      }), (0, n.jsx)("div", {
        className: x.textContainer,
        children: v.intl.format(r ? j.default.axh0pl : j.default["+KAArL"], {
          premiumGroupProductName: (0, P.sO)(),
          primaryName: a
        })
      }), (0, n.jsx)("div", {
        className: x.footer,
        children: (0, n.jsx)(c.zxk, {
          variant: "primary",
          fullWidth: true,
          text: v.intl.string(j.default.EL9m2H),
          onClick: () => {
            t(), (0, b.uL)(S.Z5c.APPLICATION_STORE)
          }
        })
      })]
    })
  }))
}

function T(e) {
  var {
    setModalState: t,
    onClose: r,
    premiumGroupSubscriptionId: i,
    isExistingSub: o,
    premiumGroupPrimaryName: l,
    currentUser: c,
    setError: d
  } = e, f = E(e, ["setModalState", "onClose", "premiumGroupSubscriptionId", "isExistingSub", "premiumGroupPrimaryName", "currentUser", "setError"]);
  let m = (0, P.sO)(),
    [p, b] = (0, a.useState)(false),
    y = async () => {
      b(true);
      try {
        await (0, g.r7)(i, c.id), t(1)
      } catch (e) {
        d(0), t(2)
      } finally {
        b(false)
      }
    };
  return (0, n.jsx)(s.ExpressiveModal, N(I({}, f), {
    onClose: r,
    gradientColor: "nitro-pink",
    badge: {
      type: "beta"
    },
    graphic: {
      src: C.Z,
      type: "image"
    },
    title: v.intl.formatToPlainString(o ? j.default["0Yxz12"] : j.default.UjA5k8, {
      premiumGroupProductName: m
    }),
    subtitle: v.intl.format(o ? j.default.YjSsdH : j.default.qkFeBP, {
      premiumGroupProductName: m,
      cooldownMonths: P.T9,
      primaryName: l
    }),
    actions: [{
      text: v.intl.string(j.default["IO+nlU"]),
      onClick: () => {
        (0, u.Z)(P.j3)
      },
      variant: "secondary"
    }, {
      text: v.intl.string(j.default.odQeh3),
      onClick: y,
      variant: "expressive",
      icon: s.SrA,
      loading: p
    }]
  }))
}

function G(e) {
  let t, r;
  var {
    error: a,
    onClose: i
  } = e, o = E(e, ["error", "onClose"]);
  let l = (0, P.sO)();
  switch (a) {
    case 1:
      t = v.intl.formatToPlainString(j.default["wMo6/n"], {
        premiumGroupProductName: l
      }), r = v.intl.formatToPlainString(j.default.C08r8L, {
        premiumGroupProductName: l,
        cooldownMonths: P.T9
      });
      break;
    case 2:
      t = v.intl.formatToPlainString(j.default["Um4ml+"], {
        premiumGroupProductName: l
      }), r = v.intl.string(j.default.Fm8iss);
      break;
    case 3:
      t = v.intl.string(j.default.yGTLxP), r = v.intl.formatToPlainString(j.default["7/qtoL"], {
        premiumGroupProductName: l
      });
      break;
    case 4:
      t = v.intl.formatToPlainString(j.default["S+UfpQ"], {
        premiumGroupProductName: l
      }), r = v.intl.formatToPlainString(j.default.AKYhx6, {
        premiumGroupProductName: l,
        countryName: (0, P.sf)()
      });
      break;
    case 5:
      t = v.intl.formatToPlainString(j.default.anKEqI, {
        premiumGroupProductName: l
      }), r = v.intl.formatToPlainString(j.default["67BbUf"], {
        premiumGroupProductName: l
      });
      break;
    default:
      t = v.intl.formatToPlainString(j.default["Kpg/uU"], {
        premiumGroupProductName: l
      }), r = v.intl.formatToPlainString(j.default.GrEzlX, {
        premiumGroupProductName: l
      })
  }
  return (0, n.jsx)(s.Modal, I({
    size: "md",
    title: t,
    subtitle: r,
    onClose: i,
    actions: [{
      text: v.intl.string(j.default["IO+nlU"]),
      variant: "secondary",
      onClick: () => {
        (0, u.Z)(P.j3)
      }
    }]
  }, o))
}

function U(e) {
  var {
    premiumGroupSubscriptionId: t,
    isExistingSub: r,
    premiumGroupPrimaryName: i
  } = e, s = E(e, ["premiumGroupSubscriptionId", "isExistingSub", "premiumGroupPrimaryName"]);
  let [c, u] = (0, a.useState)(0), [d, f] = (0, a.useState)(null), m = (0, l.e7)([y.default], () => y.default.getCurrentUser());
  o()(null != m, "UserSettingsProfileCustomization: user cannot be undefined");
  let b = null;
  switch (c) {
    case 0:
      b = (0, n.jsx)(T, I({
        setModalState: u,
        premiumGroupSubscriptionId: t,
        isExistingSub: r,
        premiumGroupPrimaryName: i,
        currentUser: m,
        setError: f
      }, s));
      break;
    case 1:
      b = (0, n.jsx)(k, N(I({}, s), {
        isExistingSub: r,
        premiumGroupPrimaryName: i,
        currentUser: m
      }));
      break;
    case 2:
      b = (0, n.jsx)(G, I({
        error: d
      }, s))
  }
  return (0, n.jsx)(p.Z, {
    isConfirmationStep: 1 === c,
    isEligibleForWowMoment: true,
    shouldPrefetchWowMoment: true,
    children: b
  })
}