/** Chunk was on 1272 **/
/** chunk id: 463119, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => Y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk515753 = require("./515753.jsx"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk821982 = require("./821982.js"),
  Chunk377171 = require("./377171.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk633302 = require("./633302.js"),
  Chunk567400 = require("./567400.js"),
  Chunk153066 = require("./153066.js"),
  Chunk335131 = require("./335131.js"),
  Chunk364111 = require("./364111.js"),
  Chunk729700 = require("./729700.jsx"),
  Chunk827360 = require("./827360.jsx"),
  Chunk681435 = require("./681435.js"),
  Chunk81136 = require("./81136.js"),
  Chunk302800 = require("./302800.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk830652 = require("./830652.js");

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}
let M = e => {
    let {
      color: t
    } = e;
    return (0, r.jsx)(c.IGR, {
      className: w.newBadge,
      color: null != t ? t : _.Z.STATUS_DANGER_BACKGROUND,
      text: Z.intl.string(Z.t.y2b7CA)
    })
  },
  k = () => {
    let {
      noCache: e,
      includeUnpublished: t
    } = (0, Chunk81136.Z)();
    return (0, Chunk364111.E)(Chunk215023.AW.HOME, {
      noCache: module,
      includeUnpublished: exports,
      includeBundles: true
    }, true, true), null
  },
  U = e => {
    var {
      selected: t,
      locationState: n,
      icon: a,
      onClick: s,
      collectibleShopTab: o,
      onMouseEnter: u,
      onMouseLeave: p,
      children: f
    } = e, g = D(e, ["selected", "locationState", "icon", "onClick", "collectibleShopTab", "onMouseEnter", "onMouseLeave", "children"]);
    let _ = (0, l.JA)("shop"),
      b = m.Z.HOME_PAGE_SHOP_TAB,
      {
        analyticsLocations: E
      } = (0, h.ZP)(b),
      [O, I] = i.useState(false),
      v = i.useCallback(() => {
        true !== s && s(), true !== o && (0, y.mK)({
          tab: o,
          analyticsLocations: E,
          analyticsSource: b
        }), I(true), (0, y.Sm)({
          analyticsSource: b,
          analyticsLocations: E
        })
      }, [b, E, s, I, o]),
      C = x.Z5c.COLLECTIBLES_SHOP;
    return (0, r.jsxs)(r.Fragment, {
      children: [O && (0, r.jsx)(k, {}), (0, r.jsx)(d.Qj, R(L({
        selected: t,
        route: C,
        icon: null != a ? a : c.EOn,
        text: Z.intl.string(Z.t.pWG4ze),
        locationState: n
      }, _, g), {
        onMouseEnter: u,
        onMouseLeave: p,
        onClick: v,
        children: f
      }))]
    })
  },
  G = e => (0, r.jsx)(U, R(L({}, e), {
    children: (0, r.jsx)(M, {})
  })),
  B = Chunk647438.memo(function(e) {
    var t;
    let {
      displayOptions: n,
      assetId: i,
      reducedMotion: l = false
    } = e, a = null != i ? (0, g.Z)(i, c.EFr.SIZE_80, !l) : true, s = n.title(), o = null == (t = n.body) ? true : t.call(n), u = null == o || "" === o;
    return (0, r.jsxs)("div", {
      className: w.shopMarketingTooltipContent,
      children: [(0, r.jsx)("div", {
        className: w.avatarContainer,
        children: (0, r.jsx)(c.qEK, {
          className: w.avatar,
          src: n.imageSrc,
          avatarDecoration: a,
          size: c.EFr.SIZE_80,
          "aria-hidden": true
        })
      }), (0, r.jsxs)("div", {
        className: w.shopMarketingTooltipText,
        children: [(0, r.jsx)(c.Heading, {
          variant: u ? "heading-sm/medium" : "heading-sm/bold",
          children: s
        }), !u && (0, r.jsx)(c.Text, {
          variant: "text-xs/normal",
          className: w.marketingBadgeTooltipContent,
          children: o
        })]
      })]
    })
  }),
  H = e => {
    let t, n;
    var l, s, u, d, m, h, g, _, b, E, O, y, {
        displayOptions: v
      } = e,
      C = D(e, ["displayOptions"]);
    let S = (0, a.e7)([f.Z], () => f.Z.useReducedMotion),
      [T, N] = i.useState(0),
      [j, P] = i.useState(false),
      x = (0, p.ZP)(),
      A = (0, o.wj)(x);
    j ? A ? (t = null == (l = v.entryPointBackgroundAssets) ? true : l.srcDarkHovered, n = null == (u = v.entrypointBackgroundStyle) || null == (s = u.hovered) ? true : s.dark) : (t = null == (d = v.entryPointBackgroundAssets) ? true : d.srcLightHovered, n = null == (h = v.entrypointBackgroundStyle) || null == (m = h.hovered) ? true : m.light) : A ? (t = null == (g = v.entryPointBackgroundAssets) ? true : g.srcDark, n = null == (b = v.entrypointBackgroundStyle) || null == (_ = b.resting) ? true : _.dark) : (t = null == (E = v.entryPointBackgroundAssets) ? true : E.srcLight, n = null == (y = v.entrypointBackgroundStyle) || null == (O = y.resting) ? true : O.light);
    let k = i.useCallback(e => {
        v.assetIds.length > 0 && N(e => (e + 1) % v.assetIds.length), P(true), null == e || e()
      }, [v.assetIds.length]),
      G = i.useCallback(e => {
        P(false), null == e || e()
      }, []),
      H = v.title();
    return (0, r.jsx)(c.aML, {
      "data-migration-pending": true,
      text: (0, r.jsx)(B, {
        displayOptions: v,
        assetId: v.assetIds[T],
        reducedMotion: S
      }),
      tooltipClassName: w.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      allowOverflow: true,
      hideOnClick: false,
      "aria-label": "string" == typeof H ? H : Z.intl.string(Z.t.rSXaxY),
      children: e => (0, r.jsxs)(U, R(L(R(L({
        className: null != v.entryPointClassName ? (0, I.l)(w, v.entryPointClassName) : true
      }, C), {
        icon: v.entryPointIcon
      }), e), {
        onMouseEnter: () => k(e.onMouseEnter),
        onMouseLeave: () => G(e.onMouseLeave),
        children: [(0, r.jsx)("div", {
          className: w.marketingButtonBackground,
          style: {
            background: n
          },
          children: null != t && (0, r.jsx)("img", {
            src: t,
            className: w.marketingButtonBackgroundImage,
            alt: "",
            "aria-hidden": true
          })
        }), (0, r.jsx)(M, {
          color: v.badgeColor
        })]
      }))
    })
  },
  V = e => {
    var {
      displayOptions: t
    } = e, n = D(e, ["displayOptions"]);
    let l = i.useMemo(() => {
      var e;
      let n = null != t.emojiName ? null == (e = E.ZP.getByName(t.emojiName)) ? true : e.surrogates : null;
      return (0, r.jsxs)(c.Text, {
        variant: "text-sm/medium",
        className: w.marketingBadgeTooltipContent,
        children: [null != n && (0, r.jsx)(u.Z, {
          emojiName: n
        }), t.title()]
      })
    }, [t]);
    return (0, r.jsx)(c.aML, {
      "data-migration-pending": true,
      text: l,
      tooltipClassName: w.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      hideOnClick: false,
      "aria-label": t.title(),
      children: e => (0, r.jsx)(U, R(L({}, n, e), {
        children: (0, r.jsx)(M, {
          color: t.badgeColor
        })
      }))
    })
  },
  F = e => {
    var t, n, {
        displayOptions: l,
        dismissContent: a
      } = e,
      s = D(e, ["displayOptions", "dismissContent"]);
    let c = i.useRef(null),
      u = (0, p.ZP)(),
      d = (0, o.wj)(u),
      f = l.entryPointBackgroundAssets,
      m = l.entrypointBackgroundStyle,
      h = d ? null == f ? true : f.srcDarkHovered : null == f ? true : f.srcLightHovered,
      g = d ? null == m || null == (t = m.hovered) ? true : t.dark : null == m || null == (n = m.hovered) ? true : n.light;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(U, R(L({}, s), {
        onClick: () => a(A.L.TAKE_ACTION),
        listItemRef: c,
        children: [(0, r.jsx)("div", {
          className: w.marketingButtonBackground,
          style: null != g ? {
            background: g
          } : true,
          children: null != h && (0, r.jsx)("img", {
            src: h,
            className: w.marketingButtonBackgroundImage,
            alt: "",
            "aria-hidden": true
          })
        }), (0, r.jsx)(M, {})]
      })), (0, r.jsx)(C.Z, {
        displayOptions: l,
        targetElementRef: c,
        onClick: () => a(A.L.TAKE_ACTION),
        onRequestClose: () => a(A.L.USER_DISMISS)
      })]
    })
  },
  z = e => {
    var {
      dismissContent: t
    } = e, n = D(e, ["dismissContent"]);
    let l = i.useRef(null);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(U, R(L({}, n), {
        onClick: () => t(A.L.TAKE_ACTION),
        listItemRef: l
      })), (0, r.jsx)(S.Z, {
        targetElementRef: l,
        onClick: () => t(A.L.TAKE_ACTION),
        onRequestClose: () => t(A.L.USER_DISMISS)
      })]
    })
  },
  Y = e => {
    let {
      selected: t,
      onClick: n,
      locationState: i,
      listItemRef: l
    } = e, {
      shopButtonDisplayOptions: a,
      dismissShopButtonDC: o
    } = (0, T.Z)(), u = (0, O.Y)({
      location: "CollectiblesShopButton"
    }), d = !(0, c.$sL)() && u, [p, f] = (0, b.US)(d ? [s.z.WISHLIST_SHOP_BUTTON_POPOVER] : []), m = {
      selected: t,
      locationState: i,
      onClick: () => {
        o(), null == n || n()
      },
      listItemRef: l
    };
    if (null != a) switch (a.type) {
      case j.k2.TOOLTIP:
        return (0, r.jsx)(V, R(L({}, m), {
          displayOptions: a
        }));
      case j.k2.COACHTIP:
        return (0, r.jsx)(H, R(L({}, m), {
          displayOptions: a
        }));
      case j.k2.BADGE:
        return (0, r.jsx)(G, L({}, m));
      case j.k2.COACHMARK:
        return (0, r.jsx)(F, R(L({
          dismissContent: o
        }, m), {
          displayOptions: a
        }))
    }
    return p === s.z.WISHLIST_SHOP_BUTTON_POPOVER ? (0, r.jsx)(z, R(L({}, m), {
      dismissContent: f
    })) : (0, r.jsx)(U, L({}, m))
  }