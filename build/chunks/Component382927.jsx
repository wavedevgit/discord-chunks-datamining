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
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk544165 = require("./544165.js"),
  Chunk530641 = require("./530641.js"),
  Chunk491567 = require("./491567.js"),
  Chunk419698 = require("./419698.js"),
  Chunk568368 = require("./568368.js");

function G(e) {
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

function I(e) {
  var {
    onClose: t,
    isExistingSub: r,
    premiumGroupPrimaryName: a,
    currentUser: i
  } = e, o = E(e, ["onClose", "isExistingSub", "premiumGroupPrimaryName", "currentUser"]);
  let u = (0, s.e7)([f.Z], () => f.Z.useReducedMotion),
    p = (0, x.rO)() ? S.Z : w.Z;
  return (0, n.jsx)(l.IX, N(G({}, o), {
    onClose: t,
    children: (0, n.jsxs)(l.fef, {
      children: [(0, n.jsx)("div", {
        className: O.wumpusContainer
      }), (0, n.jsx)(l.X6q, {
        className: O.header,
        variant: "display-md",
        color: "text-strong",
        children: v.intl.string(v.t.QWljxE)
      }), (0, n.jsxs)("div", {
        className: O.nameplatePreviewContainer,
        children: [u ? (0, n.jsx)("img", {
          src: C.Z,
          alt: "",
          className: O.nameplateGlow
        }) : (0, n.jsx)(d.Z, {
          playsInline: true,
          muted: true,
          autoPlay: true,
          loop: true,
          className: O.nameplateGlow,
          children: (0, n.jsx)("source", {
            src: p
          })
        }), (0, n.jsx)(m.Z, {
          user: i,
          isHighlighted: true,
          nameplate: null,
          nameplateData: i.nameplate,
          className: O.nameplatePreview,
          nameplatePreviewSize: "large"
        })]
      }), (0, n.jsx)("div", {
        className: O.textContainer,
        children: (0, n.jsx)(l.xvT, {
          variant: "text-md/medium",
          color: "text-muted",
          children: v.intl.format(r ? h.default.axh0pl : h.default["+KAArL"], {
            premiumGroupProductName: (0, P.sO)(),
            primaryName: a
          })
        })
      }), (0, n.jsx)("div", {
        className: O.footer,
        children: (0, n.jsx)(c.zxk, {
          variant: "primary",
          fullWidth: true,
          text: v.intl.string(h.default.EL9m2H),
          onClick: () => {
            t(), (0, b.uL)(j.Z5c.APPLICATION_STORE)
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
    premiumGroupInviteId: o,
    isExistingSub: s,
    premiumGroupPrimaryName: c,
    currentUser: f,
    setError: d
  } = e, m = E(e, ["setModalState", "onClose", "premiumGroupSubscriptionId", "premiumGroupInviteId", "isExistingSub", "premiumGroupPrimaryName", "currentUser", "setError"]);
  let p = (0, P.sO)(),
    [b, g] = (0, a.useState)(false),
    x = async () => {
      g(true);
      try {
        await (0, y.r7)(i, f.id, o), t(1)
      } catch (e) {
        d(0), t(2)
      } finally {
        g(false)
      }
    };
  return (0, n.jsx)(l.ExpressiveModal, N(G({}, m), {
    onClose: r,
    gradientColor: "nitro-pink",
    badge: {
      type: "beta",
      variant: "expressive"
    },
    graphic: {
      src: k.Z,
      type: "image"
    },
    title: v.intl.formatToPlainString(s ? h.default["0Yxz12"] : h.default.UjA5k8, {
      premiumGroupProductName: p
    }),
    subtitle: v.intl.format(s ? h.default.YjSsdH : h.default.qkFeBP, {
      premiumGroupProductName: p,
      cooldownMonths: P.T9,
      primaryName: c
    }),
    actions: [{
      text: v.intl.string(h.default["IO+nlU"]),
      onClick: () => {
        (0, u.Z)(P.j3)
      },
      variant: "secondary"
    }, {
      text: v.intl.string(h.default.odQeh3),
      onClick: x,
      variant: "expressive",
      icon: l.SrA,
      loading: b
    }]
  }))
}

function Z(e) {
  let t, r;
  var {
    error: a,
    onClose: i
  } = e, o = E(e, ["error", "onClose"]);
  let s = (0, P.sO)();
  switch (a) {
    case 1:
      t = v.intl.formatToPlainString(h.default["wMo6/n"], {
        premiumGroupProductName: s
      }), r = v.intl.formatToPlainString(h.default.C08r8L, {
        premiumGroupProductName: s,
        cooldownMonths: P.T9
      });
      break;
    case 2:
      t = v.intl.formatToPlainString(h.default["Um4ml+"], {
        premiumGroupProductName: s
      }), r = v.intl.string(h.default.Fm8iss);
      break;
    case 3:
      t = v.intl.string(h.default.yGTLxP), r = v.intl.formatToPlainString(h.default["7/qtoL"], {
        premiumGroupProductName: s
      });
      break;
    case 4:
      t = v.intl.formatToPlainString(h.default["S+UfpQ"], {
        premiumGroupProductName: s
      }), r = v.intl.formatToPlainString(h.default.AKYhx6, {
        premiumGroupProductName: s,
        countryName: (0, P.sf)()
      });
      break;
    case 5:
      t = v.intl.formatToPlainString(h.default.anKEqI, {
        premiumGroupProductName: s
      }), r = v.intl.formatToPlainString(h.default["67BbUf"], {
        premiumGroupProductName: s
      });
      break;
    default:
      t = v.intl.formatToPlainString(h.default["Kpg/uU"], {
        premiumGroupProductName: s
      }), r = v.intl.formatToPlainString(h.default.GrEzlX, {
        premiumGroupProductName: s
      })
  }
  return (0, n.jsx)(l.Modal, G({
    size: "md",
    title: t,
    subtitle: r,
    onClose: i,
    actions: [{
      text: v.intl.string(h.default["IO+nlU"]),
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
    premiumGroupInviteId: r,
    isExistingSub: i,
    premiumGroupPrimaryName: l
  } = e, c = E(e, ["premiumGroupSubscriptionId", "premiumGroupInviteId", "isExistingSub", "premiumGroupPrimaryName"]);
  let [u, f] = (0, a.useState)(0), [d, m] = (0, a.useState)(null), b = (0, s.e7)([g.default], () => g.default.getCurrentUser());
  o()(null != b, "UserSettingsProfileCustomization: user cannot be undefined");
  let x = null;
  switch (u) {
    case 0:
      x = (0, n.jsx)(T, G({
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
      x = (0, n.jsx)(I, N(G({}, c), {
        isExistingSub: i,
        premiumGroupPrimaryName: l,
        currentUser: b
      }));
      break;
    case 2:
      x = (0, n.jsx)(Z, G({
        error: d
      }, c))
  }
  return (0, n.jsx)(p.Z, {
    isConfirmationStep: 1 === u,
    isEligibleForWowMoment: true,
    shouldPrefetchWowMoment: true,
    children: x
  })
}