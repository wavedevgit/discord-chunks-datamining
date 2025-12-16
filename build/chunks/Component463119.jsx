/** Chunk was on 1272 **/
/** chunk id: 463119, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => Q
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk515753 = require("./515753.jsx"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk821982 = require("./821982.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk633302 = require("./633302.js"),
  Chunk567400 = require("./567400.js"),
  Chunk153066 = require("./153066.js"),
  Chunk335131 = require("./335131.js"),
  Chunk436797 = require("./436797.js"),
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
  Chunk959088 = require("./959088.js");

function M(e) {
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

function k(e, t) {
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

function U(e, t) {
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
let G = e => {
    let {
      color: t
    } = e;
    return (0, r.jsx)(p.IGR, {
      className: D.newBadge,
      color: null != t ? t : u.Z.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT.css,
      text: R.intl.string(R.t.y2b7CA)
    })
  },
  H = () => {
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
  B = e => {
    var {
      selected: t,
      locationState: n,
      icon: l,
      onClick: a,
      collectibleShopTab: o,
      onMouseEnter: c,
      onMouseLeave: u,
      children: d
    } = e, f = U(e, ["selected", "locationState", "icon", "onClick", "collectibleShopTab", "onMouseEnter", "onMouseLeave", "children"]);
    let h = (0, s.JA)("shop"),
      m = b.Z.HOME_PAGE_SHOP_TAB,
      {
        analyticsLocations: E
      } = (0, _.ZP)(m),
      [O, v] = i.useState(false),
      y = i.useCallback(() => {
        true !== a && a(), true !== o && (0, C.mK)({
          tab: o,
          analyticsLocations: E,
          analyticsSource: m
        }), v(true), (0, C.Sm)({
          analyticsSource: m,
          analyticsLocations: E
        })
      }, [m, E, a, v, o]),
      I = w.Z5c.COLLECTIBLES_SHOP;
    return (0, r.jsxs)(r.Fragment, {
      children: [O && (0, r.jsx)(H, {}), (0, r.jsx)(g.Qj, k(M({
        selected: t,
        route: I,
        icon: null != l ? l : p.EOn,
        text: R.intl.string(R.t.pWG4ze),
        locationState: n
      }, h, f), {
        onMouseEnter: c,
        onMouseLeave: u,
        onClick: y,
        children: d
      }))]
    })
  },
  V = e => (0, r.jsx)(B, k(M({}, e), {
    children: (0, r.jsx)(G, {})
  })),
  F = Chunk473749.memo(function(e) {
    var t;
    let {
      displayOptions: n,
      assetId: i,
      reducedMotion: l = false
    } = e, a = null != i ? (0, E.Z)(i, p.EFr.SIZE_80, !l) : true, s = n.title(), o = null == (t = n.body) ? true : t.call(n), c = null == o || "" === o;
    return (0, r.jsxs)("div", {
      className: D.shopMarketingTooltipContent,
      children: [(0, r.jsx)("div", {
        className: D.avatarContainer,
        children: (0, r.jsx)(p.qEK, {
          className: D.avatar,
          src: n.imageSrc,
          avatarDecoration: a,
          size: p.EFr.SIZE_80,
          "aria-hidden": true
        })
      }), (0, r.jsxs)("div", {
        className: D.shopMarketingTooltipText,
        children: [(0, r.jsx)(p.Heading, {
          variant: c ? "heading-sm/medium" : "heading-sm/bold",
          children: s
        }), !c && (0, r.jsx)(p.Text, {
          variant: "text-xs/normal",
          className: D.marketingBadgeTooltipContent,
          children: o
        })]
      })]
    })
  }),
  z = e => {
    if (null == e.current || null == e.current.parentElement) returnfalse;
    let t = e.current.parentElement.offsetWidth;
    return t >= 175 && t <= 230
  },
  Y = e => {
    let t, n;
    var l, s, c, u, f, g, b, _, E, O, v, y, {
        displayOptions: C
      } = e,
      T = U(e, ["displayOptions"]);
    let N = (0, o.e7)([m.Z], () => m.Z.useReducedMotion),
      [j, P] = i.useState(0),
      [x, A] = i.useState(false),
      [Z, w] = i.useState(false),
      L = i.useRef(null),
      H = i.useRef(null),
      V = (0, h.ZP)(),
      Y = (0, d.wj)(V),
      W = (0, S.p)({
        location: "CollectiblesShopButton"
      }),
      q = W.useNewHoverStyle ? D.marketingButtonBackgroundNew : D.marketingButtonBackground;
    x ? Y ? (t = null == (l = C.entryPointBackgroundAssets) ? true : l.srcDarkHovered, n = null == (c = C.entrypointBackgroundStyle) || null == (s = c.hovered) ? true : s.dark) : (t = null == (u = C.entryPointBackgroundAssets) ? true : u.srcLightHovered, n = null == (g = C.entrypointBackgroundStyle) || null == (f = g.hovered) ? true : f.light) : Y ? (t = null == (b = C.entryPointBackgroundAssets) ? true : b.srcDark, n = null == (E = C.entrypointBackgroundStyle) || null == (_ = E.resting) ? true : _.dark) : (t = null == (O = C.entryPointBackgroundAssets) ? true : O.srcLight, n = null == (y = C.entrypointBackgroundStyle) || null == (v = y.resting) ? true : v.light);
    let K = i.useCallback(e => {
        C.assetIds.length > 0 && P(e => (e + 1) % C.assetIds.length), A(true);
        let t = () => {
          w(W.useNewHoverStyle && z(L))
        };
        t(), H.current = requestAnimationFrame(t), null == e || e()
      }, [C.assetIds.length, W.useNewHoverStyle]),
      Q = i.useCallback(e => {
        A(false), w(false), null != H.current && (cancelAnimationFrame(H.current), H.current = null), null == e || e()
      }, []);
    i.useEffect(() => () => {
      null != H.current && cancelAnimationFrame(H.current)
    }, []);
    let J = C.title();
    return (0, r.jsx)(p.aML, {
      "data-migration-pending": true,
      text: (0, r.jsx)(F, {
        displayOptions: C,
        assetId: C.assetIds[j],
        reducedMotion: N
      }),
      tooltipClassName: D.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      allowOverflow: true,
      hideOnClick: false,
      "aria-label": "string" == typeof J ? J : R.intl.string(R.t.rSXaxY),
      children: e => (0, r.jsxs)(B, k(M(k(M({
        className: null != C.entryPointClassName ? (0, I.l)(D, C.entryPointClassName) : true
      }, T), {
        icon: C.entryPointIcon
      }), e), {
        onMouseEnter: () => K(e.onMouseEnter),
        onMouseLeave: () => Q(e.onMouseLeave),
        children: [(0, r.jsx)("div", {
          ref: L,
          className: q,
          style: {
            background: n
          },
          children: null != t && (0, r.jsx)("img", {
            src: t,
            className: a()(D.marketingButtonBackgroundImage, Z && D.marketingButtonBackgroundImageFaded),
            alt: "",
            "aria-hidden": true
          })
        }), (0, r.jsx)(G, {
          color: C.badgeColor
        })]
      }))
    })
  },
  W = e => {
    var {
      displayOptions: t
    } = e, n = U(e, ["displayOptions"]);
    let l = i.useMemo(() => {
      var e;
      let n = null != t.emojiName ? null == (e = v.ZP.getByName(t.emojiName)) ? true : e.surrogates : null;
      return (0, r.jsxs)(p.Text, {
        variant: "text-sm/medium",
        className: D.marketingBadgeTooltipContent,
        children: [null != n && (0, r.jsx)(f.Z, {
          emojiName: n
        }), t.title()]
      })
    }, [t]);
    return (0, r.jsx)(p.aML, {
      text: l,
      tooltipClassName: D.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      hideOnClick: false,
      "aria-label": t.title(),
      children: e => (0, r.jsx)(B, k(M({}, n, e), {
        children: (0, r.jsx)(G, {
          color: t.badgeColor
        })
      }))
    })
  },
  q = e => {
    var t, n, {
        displayOptions: l,
        dismissContent: s
      } = e,
      o = U(e, ["displayOptions", "dismissContent"]);
    let c = i.useRef(null),
      u = i.useRef(null),
      [p, f] = i.useState(false),
      g = (0, h.ZP)(),
      m = (0, d.wj)(g),
      b = (0, S.p)({
        location: "CollectiblesShopButton"
      }),
      _ = b.useNewHoverStyle ? D.marketingButtonBackgroundNew : D.marketingButtonBackground,
      E = l.entryPointBackgroundAssets,
      O = l.entrypointBackgroundStyle,
      v = m ? null == E ? true : E.srcDarkHovered : null == E ? true : E.srcLightHovered,
      y = m ? null == O || null == (t = O.hovered) ? true : t.dark : null == O || null == (n = O.hovered) ? true : n.light;
    return i.useEffect(() => {
      if (null == v || "" === v) return void f(false);
      let e = () => {
        f(b.useNewHoverStyle && z(u))
      };
      e();
      let t = requestAnimationFrame(e);
      return () => {
        cancelAnimationFrame(t)
      }
    }, [v, b.useNewHoverStyle]), (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(B, k(M({}, o), {
        onClick: () => s(L.L.TAKE_ACTION),
        listItemRef: c,
        children: [(0, r.jsx)("div", {
          ref: u,
          className: _,
          style: null != y ? {
            background: y
          } : true,
          children: null != v && (0, r.jsx)("img", {
            src: v,
            className: a()(D.marketingButtonBackgroundImage, p && D.marketingButtonBackgroundImageFaded),
            alt: "",
            "aria-hidden": true
          })
        }), (0, r.jsx)(G, {})]
      })), (0, r.jsx)(N.Z, {
        displayOptions: l,
        targetElementRef: c,
        onClick: () => s(L.L.TAKE_ACTION),
        onRequestClose: () => s(L.L.USER_DISMISS)
      })]
    })
  },
  K = e => {
    var {
      dismissContent: t
    } = e, n = U(e, ["dismissContent"]);
    let l = i.useRef(null);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(B, k(M({}, n), {
        onClick: () => t(L.L.TAKE_ACTION),
        listItemRef: l
      })), (0, r.jsx)(j.Z, {
        targetElementRef: l,
        onClick: () => t(L.L.TAKE_ACTION),
        onRequestClose: () => t(L.L.USER_DISMISS)
      })]
    })
  },
  Q = e => {
    let {
      selected: t,
      onClick: n,
      locationState: i,
      listItemRef: l
    } = e, {
      shopButtonDisplayOptions: a,
      dismissShopButtonDC: s
    } = (0, P.Z)(), o = (0, y.Y)({
      location: "CollectiblesShopButton"
    }), u = !(0, p.$sL)() && o, [d, f] = (0, O.US)(u ? [c.z.WISHLIST_SHOP_BUTTON_POPOVER] : []), g = {
      selected: t,
      locationState: i,
      onClick: () => {
        s(), null == n || n()
      },
      listItemRef: l
    };
    if (null != a) switch (a.type) {
      case A.k2.TOOLTIP:
        return (0, r.jsx)(W, k(M({}, g), {
          displayOptions: a
        }));
      case A.k2.COACHTIP:
        return (0, r.jsx)(Y, k(M({}, g), {
          displayOptions: a
        }));
      case A.k2.BADGE:
        return (0, r.jsx)(V, M({}, g));
      case A.k2.COACHMARK:
        return (0, r.jsx)(q, k(M({
          dismissContent: s
        }, g), {
          displayOptions: a
        }))
    }
    return d === c.z.WISHLIST_SHOP_BUTTON_POPOVER ? (0, r.jsx)(K, k(M({}, g), {
      dismissContent: f
    })) : (0, r.jsx)(B, M({}, g))
  }