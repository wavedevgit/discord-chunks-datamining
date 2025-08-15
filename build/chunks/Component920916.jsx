/** Chunk was on web.js **/
/** chunk id: 920916, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => X,
  m: () => Q
}), require("./457542.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk238651 = require("./238651.js"),
  Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk230711 = require("./230711.js"),
  Chunk607070 = require("./607070.js"),
  Chunk235400 = require("./235400.jsx"),
  Chunk204418 = require("./204418.jsx"),
  Chunk975298 = require("./975298.js"),
  Chunk583434 = require("./583434.js"),
  Chunk530618 = require("./530618.jsx"),
  Chunk454585 = require("./454585.js"),
  Chunk732389 = require("./732389.jsx"),
  Chunk164946 = require("./164946.js"),
  Chunk369111 = require("./369111.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk960048 = require("./960048.js"),
  Chunk509212 = require("./509212.js"),
  Chunk272008 = require("./272008.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk475595 = require("./475595.js"),
  Chunk566078 = require("./566078.js"),
  Chunk968435 = require("./968435.jsx"),
  Chunk114732 = require("./114732.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk675654 = require("./675654.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk824210 = require("./824210.js");

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      B(e, t, n[t])
    })
  }
  return e
}

function F(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function H() {
  let e = Chunk25990.Z.getAllPending(),
    t = (0, Chunk164946.ED)(module);
  return (0, Chunk809206.Mn)(exports).finally(Chunk809206.si)
}

function Y() {
  Chunk230711.Z.open(Chunk981631.oAB.PREMIUM, null, {})
}

function W(e) {
  let {
    product: t,
    isFetching: n
  } = (0, g.T)(e), {} = (0, v.Z)({}), r = i.useMemo(() => {
    if (null == t || n) return null;
    let e = t.items.find(e => e.type === l.Z.AVATAR_DECORATION);
    return null == e ? null : e
  }, [t, n]), a = () => null == r ? (S.Z.addBreadcrumb({
    message: "Error saving avatar decoration; it is null"
  }), Promise.reject()) : ((0, d.cV)(r), H());
  return [r, a]
}

function K(e) {
  var t;
  let {
    transitionState: n,
    onClose: a,
    quest: l,
    location: d,
    reward: f,
    decoration: p,
    onUseNow: h,
    preview: m
  } = e, g = i.useRef(null), [b, y] = i.useState(null), O = i.useRef(new s.qA), v = (0, c.e7)([_.Z], () => _.Z.useReducedMotion), I = (0, c.e7)([T.default], () => T.default.getCurrentUser()), S = (null == (t = l.userStatus) ? true : t.claimedAt) != null, [A, C] = i.useState(true === m || S ? "claimed" : "loading");
  i.useEffect(() => {
    S || true === m || (0, N.QB)(l.id, R.y$.CROSS_PLATFORM, d).then(() => C("claimed")).catch(() => C("error"))
  }, [l, d, S, m]);
  let P = () => {
      C("applying"), h().finally(a)
    },
    w = true === m && null === p && (null == f ? true : f.skuId) !== "",
    D = null == p && true !== m,
    x = null == I || D || w || "loading" === A,
    M = !v && !S && "claimed" === A;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.O_, {
      ref: y,
      className: G.confettiCanvas,
      environment: O.current
    }), (0, r.jsx)("div", {
      ref: g,
      children: (0, r.jsx)(u.Y0X, {
        transitionState: n,
        size: u.CgR.DYNAMIC,
        className: o()(G.rootContainer, {
          [G.rootContainerLoading]: x
        }),
        hideShadow: true,
        parentComponent: "QuestsRewardCollectibleModal",
        children: "error" === A ? (0, r.jsx)(L.Z, {
          onClose: a
        }) : x ? (0, r.jsx)("div", {
          className: G.loadingIndicatorWrapper,
          children: (0, r.jsx)(u.$jN, {
            type: u.$jN.Type.SPINNING_CIRCLE
          })
        }) : (0, r.jsx)(q, {
          quest: l,
          user: I,
          decoration: p,
          isSaving: "applying" === A,
          onClose: a,
          onConfirm: P
        })
      })
    }), M && (0, r.jsx)(E.Z, {
      confettiTarget: g.current,
      confettiCanvas: b,
      sprites: k.CA,
      colors: k.Br
    })]
  })
}

function z(e) {
  let {
    quest: t
  } = e, n = i.useMemo(() => (0, P.fh)(t, P.eC.LOGO_TYPE, "dark"), [t]), a = w.r.build(t.config).defaultRewardRedemptionInstructionsByPlatform[R.y$.CROSS_PLATFORM];
  return (0, r.jsxs)("div", {
    className: G.additionalRedemptionInstructions,
    children: [(0, r.jsx)("img", {
      src: n.url,
      alt: "",
      className: G.sponsorLogo
    }), (0, r.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "always-white",
      children: b.Z.parse(a, false, {
        allowLinks: true
      })
    })]
  })
}

function q(e) {
  let {
    quest: t,
    user: n,
    decoration: i,
    isSaving: a,
    onClose: o,
    onConfirm: s
  } = e, l = (0, P.fh)(t, P.eC.REWARD).url, c = (0, A.f$)(t.config), {
    fractionalState: d
  } = (0, m.Z)(), f = d === j.a$.FP_ONLY, _ = (0, C.Qy)(t.config), p = c && !f;
  return (0, r.jsxs)("div", {
    className: G.claimedRootContainer,
    children: [(0, r.jsxs)("div", {
      className: G.headerContainer,
      children: [(0, r.jsx)(D.Z, {
        quest: t,
        dimensions: {
          width: 528,
          height: 148
        },
        className: G.headerBackground
      }), (0, r.jsx)("div", {
        className: G.headerForeground,
        children: (0, r.jsx)(u.olH, {
          className: G.close,
          withCircleBackground: true,
          onClick: o
        })
      })]
    }), (0, r.jsx)(u.mzw, {
      separator: false,
      children: (0, r.jsxs)("div", {
        className: G.footerBody,
        children: [(0, r.jsx)("div", {
          className: G.previewContainer,
          children: (0, r.jsx)(h.Z, {
            user: n,
            guildId: null,
            avatarDecorationOverride: i,
            avatarSize: u.EFr.SIZE_152,
            questPreviewRewardAssetUrl: l
          })
        }), (0, r.jsx)(u.X6q, {
          variant: "heading-lg/bold",
          color: "header-primary",
          className: G.heading,
          children: U.intl.string(U.t["0/Yz+f"])
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: G.text,
          children: _
        }), (0, r.jsx)(u.zxk, {
          variant: "primary",
          text: U.intl.string(U.t.MAS7uL),
          loading: a,
          onClick: s
        }), (0, A.zK)(t, x.S7.ADDITIONAL_REDEMPTION_INSTRUCTIONS) && (0, r.jsx)(z, {
          quest: t
        }), p && (0, r.jsx)(y.p, {
          className: G.upsell,
          upsellText: U.intl.format(U.t.VHXn7O, {
            onNitroClick: () => {
              Y(), o()
            }
          }),
          buttonAnalyticsObject: {
            section: M.jXE.PERMADECOS_MARKETING_UPSELL
          }
        })]
      })
    })]
  })
}

function X(e) {
  var t, n;
  let {
    quest: a,
    location: o,
    onClose: s,
    transitionState: l,
    preview: c
  } = e, u = i.useMemo(() => (0, A.xn)(a.config), [a]), [d, f] = W(null != (n = null == u ? true : u.skuId) ? n : null);
  return null == u ? null : (null == (t = a.userStatus) ? true : t.claimedAt) != null ? (0, r.jsx)(p.default, {
    transitionState: l,
    onCloseModal: H,
    onClose: s,
    analyticsLocations: [],
    initialSelectedDecoration: d
  }) : (0, r.jsx)(K, {
    onClose: s,
    transitionState: l,
    quest: a,
    location: o,
    reward: u,
    decoration: d,
    onUseNow: f,
    preview: c
  })
}

function Q(e, t, i) {
  (0, u.ZDy)(async () => {
    let {
      default: a
    } = await Promise.resolve().then(n.bind(n, 920916));
    return n => (0, r.jsx)(a, Z(V({}, n), {
      quest: e,
      location: t,
      preview: i
    }))
  })
}