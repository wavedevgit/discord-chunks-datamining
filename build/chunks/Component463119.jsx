/** Chunk was on 1272 **/
/** chunk id: 463119, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => K
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
  Chunk959088 = require("./959088.js");

function R(e) {
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

function D(e, t) {
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

function M(e, t) {
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
let k = e => {
    let {
      color: t
    } = e;
    return (0, r.jsx)(p.IGR, {
      className: L.newBadge,
      color: null != t ? t : u.Z.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT.css,
      text: w.intl.string(w.t.y2b7CA)
    })
  },
  U = () => {
    let {
      noCache: e,
      includeUnpublished: t
    } = (0, j.Z)();
    return (0, C.E)(P.AW.HOME, {
      noCache: e,
      includeUnpublished: t,
      includeBundles: true
    }, true, true), null
  },
  G = e => {
    var {
      selected: t,
      locationState: n,
      icon: l,
      onClick: a,
      collectibleShopTab: s,
      onMouseEnter: c,
      onMouseLeave: u,
      children: d
    } = e, f = M(e, ["selected", "locationState", "icon", "onClick", "collectibleShopTab", "onMouseEnter", "onMouseLeave", "children"]);
    let h = (0, o.JA)("shop"),
      m = b.Z.HOME_PAGE_SHOP_TAB,
      {
        analyticsLocations: E
      } = (0, _.ZP)(m),
      [O, v] = i.useState(false),
      I = i.useCallback(() => {
        true !== a && a(), true !== s && (0, y.mK)({
          tab: s,
          analyticsLocations: E,
          analyticsSource: m
        }), v(true), (0, y.Sm)({
          analyticsSource: m,
          analyticsLocations: E
        })
      }, [m, E, a, v, s]),
      C = A.Z5c.COLLECTIBLES_SHOP;
    return (0, r.jsxs)(r.Fragment, {
      children: [O && (0, r.jsx)(U, {}), (0, r.jsx)(g.Qj, D(R({
        selected: t,
        route: C,
        icon: null != l ? l : p.EOn,
        text: w.intl.string(w.t.pWG4ze),
        locationState: n
      }, h, f), {
        onMouseEnter: c,
        onMouseLeave: u,
        onClick: I,
        children: d
      }))]
    })
  },
  H = e => (0, r.jsx)(G, D(R({}, e), {
    children: (0, r.jsx)(k, {})
  })),
  B = Chunk473749.memo(function(e) {
    var t;
    let {
      displayOptions: n,
      assetId: i,
      reducedMotion: l = false
    } = e, a = null != i ? (0, E.Z)(i, p.EFr.SIZE_80, !l) : true, o = n.title(), s = null == (t = n.body) ? true : t.call(n), c = null == s || "" === s;
    return (0, r.jsxs)("div", {
      className: L.shopMarketingTooltipContent,
      children: [(0, r.jsx)("div", {
        className: L.avatarContainer,
        children: (0, r.jsx)(p.qEK, {
          className: L.avatar,
          src: n.imageSrc,
          avatarDecoration: a,
          size: p.EFr.SIZE_80,
          "aria-hidden": true
        })
      }), (0, r.jsxs)("div", {
        className: L.shopMarketingTooltipText,
        children: [(0, r.jsx)(p.Heading, {
          variant: c ? "heading-sm/medium" : "heading-sm/bold",
          children: o
        }), !c && (0, r.jsx)(p.Text, {
          variant: "text-xs/normal",
          className: L.marketingBadgeTooltipContent,
          children: s
        })]
      })]
    })
  }),
  V = e => {
    if (null == e.current || null == e.current.parentElement) returnfalse;
    let t = e.current.parentElement.offsetWidth;
    return t >= 175 && t <= 230
  },
  F = e => {
    let t, n;
    var l, o, c, u, f, g, b, _, E, O, v, y, {
        displayOptions: C
      } = e,
      S = M(e, ["displayOptions"]);
    let T = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
      [N, j] = i.useState(0),
      [x, P] = i.useState(false),
      [A, Z] = i.useState(false),
      U = i.useRef(null),
      H = i.useRef(null),
      F = (0, h.ZP)(),
      z = (0, d.wj)(F);
    x ? z ? (t = null == (l = C.entryPointBackgroundAssets) ? true : l.srcDarkHovered, n = null == (c = C.entrypointBackgroundStyle) || null == (o = c.hovered) ? true : o.dark) : (t = null == (u = C.entryPointBackgroundAssets) ? true : u.srcLightHovered, n = null == (g = C.entrypointBackgroundStyle) || null == (f = g.hovered) ? true : f.light) : z ? (t = null == (b = C.entryPointBackgroundAssets) ? true : b.srcDark, n = null == (E = C.entrypointBackgroundStyle) || null == (_ = E.resting) ? true : _.dark) : (t = null == (O = C.entryPointBackgroundAssets) ? true : O.srcLight, n = null == (y = C.entrypointBackgroundStyle) || null == (v = y.resting) ? true : v.light);
    let Y = i.useCallback(e => {
        C.assetIds.length > 0 && j(e => (e + 1) % C.assetIds.length), P(true);
        let t = () => {
          Z(V(U))
        };
        t(), H.current = requestAnimationFrame(t), null == e || e()
      }, [C.assetIds.length]),
      W = i.useCallback(e => {
        P(false), Z(false), null != H.current && (cancelAnimationFrame(H.current), H.current = null), null == e || e()
      }, []);
    i.useEffect(() => () => {
      null != H.current && cancelAnimationFrame(H.current)
    }, []);
    let K = C.title();
    return (0, r.jsx)(p.aML, {
      "data-migration-pending": true,
      text: (0, r.jsx)(B, {
        displayOptions: C,
        assetId: C.assetIds[N],
        reducedMotion: T
      }),
      tooltipClassName: L.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      allowOverflow: true,
      hideOnClick: false,
      "aria-label": "string" == typeof K ? K : w.intl.string(w.t.rSXaxY),
      children: e => (0, r.jsxs)(G, D(R(D(R({
        className: null != C.entryPointClassName ? (0, I.l)(L, C.entryPointClassName) : true
      }, S), {
        icon: C.entryPointIcon
      }), e), {
        onMouseEnter: () => Y(e.onMouseEnter),
        onMouseLeave: () => W(e.onMouseLeave),
        children: [(0, r.jsx)("div", {
          ref: U,
          className: L.marketingButtonBackgroundNew,
          style: {
            background: n
          },
          children: null != t && (0, r.jsx)("img", {
            src: t,
            className: a()(L.marketingButtonBackgroundImage, A && L.marketingButtonBackgroundImageFaded),
            alt: "",
            "aria-hidden": true
          })
        }), (0, r.jsx)(k, {
          color: C.badgeColor
        })]
      }))
    })
  },
  z = e => {
    var {
      displayOptions: t
    } = e, n = M(e, ["displayOptions"]);
    let l = i.useMemo(() => {
      var e;
      let n = null != t.emojiName ? null == (e = v.ZP.getByName(t.emojiName)) ? true : e.surrogates : null;
      return (0, r.jsxs)(p.Text, {
        variant: "text-sm/medium",
        className: L.marketingBadgeTooltipContent,
        children: [null != n && (0, r.jsx)(f.Z, {
          emojiName: n
        }), t.title()]
      })
    }, [t]);
    return (0, r.jsx)(p.aML, {
      "data-migration-pending": true,
      text: l,
      tooltipClassName: L.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      hideOnClick: false,
      "aria-label": t.title(),
      children: e => (0, r.jsx)(G, D(R({}, n, e), {
        children: (0, r.jsx)(k, {
          color: t.badgeColor
        })
      }))
    })
  },
  Y = e => {
    var t, n, {
        displayOptions: l,
        dismissContent: o
      } = e,
      s = M(e, ["displayOptions", "dismissContent"]);
    let c = i.useRef(null),
      u = i.useRef(null),
      [p, f] = i.useState(false),
      g = (0, h.ZP)(),
      m = (0, d.wj)(g),
      b = l.entryPointBackgroundAssets,
      _ = l.entrypointBackgroundStyle,
      E = m ? null == b ? true : b.srcDarkHovered : null == b ? true : b.srcLightHovered,
      O = m ? null == _ || null == (t = _.hovered) ? true : t.dark : null == _ || null == (n = _.hovered) ? true : n.light;
    return i.useEffect(() => {
      if (null == E || "" === E) return void f(false);
      let e = () => {
        f(V(u))
      };
      e();
      let t = requestAnimationFrame(e);
      return () => {
        cancelAnimationFrame(t)
      }
    }, [E]), (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(G, D(R({}, s), {
        onClick: () => o(Z.L.TAKE_ACTION),
        listItemRef: c,
        children: [(0, r.jsx)("div", {
          ref: u,
          className: L.marketingButtonBackgroundNew,
          style: null != O ? {
            background: O
          } : true,
          children: null != E && (0, r.jsx)("img", {
            src: E,
            className: a()(L.marketingButtonBackgroundImage, p && L.marketingButtonBackgroundImageFaded),
            alt: "",
            "aria-hidden": true
          })
        }), (0, r.jsx)(k, {})]
      })), (0, r.jsx)(S.Z, {
        displayOptions: l,
        targetElementRef: c,
        onClick: () => o(Z.L.TAKE_ACTION),
        onRequestClose: () => o(Z.L.USER_DISMISS)
      })]
    })
  },
  W = e => {
    var {
      dismissContent: t
    } = e, n = M(e, ["dismissContent"]);
    let l = i.useRef(null);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(G, D(R({}, n), {
        onClick: () => t(Z.L.TAKE_ACTION),
        listItemRef: l
      })), (0, r.jsx)(T.Z, {
        targetElementRef: l,
        onClick: () => t(Z.L.TAKE_ACTION),
        onRequestClose: () => t(Z.L.USER_DISMISS)
      })]
    })
  },
  K = e => {
    let {
      selected: t,
      onClick: n,
      locationState: i,
      listItemRef: l
    } = e, {
      shopButtonDisplayOptions: a,
      dismissShopButtonDC: o
    } = (0, N.Z)(), s = !(0, p.$sL)(), [u, d] = (0, O.US)(s ? [c.z.WISHLIST_SHOP_BUTTON_POPOVER] : []), f = {
      selected: t,
      locationState: i,
      onClick: () => {
        o(), null == n || n()
      },
      listItemRef: l
    };
    if (null != a) switch (a.type) {
      case x.k2.TOOLTIP:
        return (0, r.jsx)(z, D(R({}, f), {
          displayOptions: a
        }));
      case x.k2.COACHTIP:
        return (0, r.jsx)(F, D(R({}, f), {
          displayOptions: a
        }));
      case x.k2.BADGE:
        return (0, r.jsx)(H, R({}, f));
      case x.k2.COACHMARK:
        return (0, r.jsx)(Y, D(R({
          dismissContent: o
        }, f), {
          displayOptions: a
        }))
    }
    return u === c.z.WISHLIST_SHOP_BUTTON_POPOVER ? (0, r.jsx)(W, D(R({}, f), {
      dismissContent: d
    })) : (0, r.jsx)(G, R({}, f))
  }