/** Chunk was on 21738 **/
/** chunk id: 213750, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => Q
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk934551 = require("./934551.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk701363 = require("./701363.jsx"),
  Chunk736653 = require("./736653.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk920064 = require("./920064.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk7584 = require("./7584.js"),
  Chunk821589 = require("./821589.js"),
  Chunk979286 = require("./979286.js"),
  Chunk335657 = require("./335657.js"),
  Chunk252362 = require("./252362.jsx"),
  Chunk540063 = require("./540063.jsx"),
  Chunk870308 = require("./870308.js"),
  Chunk998694 = require("./998694.js"),
  Chunk158216 = require("./158216.js"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk134848 = require("./134848.js");

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
  var n, r, i, l = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }
  if (l = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.getOwnPropertyNames(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      return i
    }(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
  return l
}
let G = e => {
    let {
      badgeIcon: t,
      badgeText: n
    } = e, i = null != t && "" !== t ? o[t] : true;
    return (0, r.jsx)("div", {
      className: D.newBadge,
      children: (0, r.jsx)(c.Exy, {
        type: null != n && "" !== n ? {
          text: n
        } : "new",
        variant: "expressive",
        icon: i
      })
    })
  },
  V = () => {
    let {
      noCache: e,
      includeUnpublished: t
    } = (0, j.A)();
    return (0, S.y)(P.G2.HOME, {
      noCache: e,
      includeUnpublished: t,
      includeBundles: true
    }, true, true), null
  },
  B = e => {
    let {
      selected: t,
      locationState: n,
      icon: l,
      onClick: a,
      collectibleShopTab: o,
      onMouseEnter: c,
      onMouseLeave: u,
      children: d
    } = e, p = U(e, ["selected", "locationState", "icon", "onClick", "collectibleShopTab", "onMouseEnter", "onMouseLeave", "children"]), g = (0, s.rm)("shop"), f = _.A.HOME_PAGE_SHOP_TAB, {
      analyticsLocations: A
    } = (0, b.Ay)(f), [E, O] = i.useState(false), y = i.useCallback(() => {
      true !== a && a(), true !== o && (0, v.Cz)({
        tab: o,
        analyticsLocations: A,
        analyticsSource: f
      }), O(true), (0, v.Sw)({
        analyticsSource: f,
        analyticsLocations: A
      })
    }, [f, A, a, O, o]), I = w.BVt.COLLECTIBLES_SHOP;
    return (0, r.jsxs)(r.Fragment, {
      children: [E && (0, r.jsx)(V, {}), (0, r.jsx)(m.z9, k(M({
        selected: t,
        route: I,
        icon: null != l ? l : h.U1X,
        text: R.intl.string(R.t.pWG4ze),
        locationState: n
      }, g, p), {
        onMouseEnter: c,
        onMouseLeave: u,
        onClick: y,
        children: d
      }))]
    })
  },
  H = e => (0, r.jsx)(B, k(M({}, e), {
    children: (0, r.jsx)(G, {})
  })),
  F = Chunk64700.memo(function(e) {
    var t;
    let {
      displayOptions: n,
      assetId: i,
      reducedMotion: l = false
    } = e, a = null != i ? (0, E.A)(i, h._3J.SIZE_80, !l) : true, s = n.title(), o = null == (t = n.body) ? true : t.call(n), c = null == o || "" === o;
    return (0, r.jsxs)("div", {
      className: D.shopMarketingTooltipContent,
      children: [(0, r.jsx)("div", {
        className: D.avatarContainer,
        children: (0, r.jsx)(h.euF, {
          className: D.avatar,
          src: n.imageSrc,
          avatarDecoration: a,
          size: h._3J.SIZE_80,
          "aria-hidden": true
        })
      }), (0, r.jsxs)("div", {
        className: D.shopMarketingTooltipText,
        children: [(0, r.jsx)(h.Heading, {
          variant: c ? "heading-sm/medium" : "heading-sm/bold",
          children: s
        }), !c && (0, r.jsx)(h.Text, {
          variant: "text-xs/normal",
          className: D.marketingBadgeTooltipContent,
          children: o
        })]
      })]
    })
  }),
  Y = e => {
    if (null == e.current || null == e.current.parentElement) returnfalse;
    let t = e.current.parentElement.offsetWidth;
    return t >= 175 && t <= 230
  },
  K = e => {
    var t, n, l, s, o, c, d, g, m, _, b, E;
    let O, y, {
        displayOptions: v
      } = e,
      S = U(e, ["displayOptions"]),
      C = (0, u.bG)([A.A], () => A.A.useReducedMotion),
      [N, T] = i.useState(0),
      [j, x] = i.useState(false),
      [P, w] = i.useState(false),
      L = i.useRef(null),
      V = i.useRef(null),
      H = (0, f.Ay)(),
      K = (0, p.Mw)(H);
    j ? K ? (O = null == (t = v.entryPointBackgroundAssets) ? true : t.srcDarkHovered, y = null == (l = v.entrypointBackgroundStyle) || null == (n = l.hovered) ? true : n.dark) : (O = null == (s = v.entryPointBackgroundAssets) ? true : s.srcLightHovered, y = null == (c = v.entrypointBackgroundStyle) || null == (o = c.hovered) ? true : o.light) : K ? (O = null == (d = v.entryPointBackgroundAssets) ? true : d.srcDark, y = null == (m = v.entrypointBackgroundStyle) || null == (g = m.resting) ? true : g.dark) : (O = null == (_ = v.entryPointBackgroundAssets) ? true : _.srcLight, y = null == (E = v.entrypointBackgroundStyle) || null == (b = E.resting) ? true : b.light);
    let W = i.useCallback(e => {
        v.assetIds.length > 0 && T(e => (e + 1) % v.assetIds.length), x(true);
        let t = () => {
          w(Y(L))
        };
        t(), V.current = requestAnimationFrame(t), null == e || e()
      }, [v.assetIds.length]),
      q = i.useCallback(e => {
        x(false), w(false), null != V.current && (cancelAnimationFrame(V.current), V.current = null), null == e || e()
      }, []);
    i.useEffect(() => () => {
      null != V.current && cancelAnimationFrame(V.current)
    }, []);
    let z = v.title();
    return (0, r.jsx)(h.STz, {
      "data-migration-pending": true,
      text: (0, r.jsx)(F, {
        displayOptions: v,
        assetId: v.assetIds[N],
        reducedMotion: C
      }),
      tooltipClassName: D.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      allowOverflow: true,
      hideOnClick: false,
      "aria-label": "string" == typeof z ? z : R.intl.string(R.t.rSXaxY),
      children: e => (0, r.jsxs)(B, k(M(k(M({
        className: null != v.entryPointClassName ? (0, I.t)(D, v.entryPointClassName) : true
      }, S), {
        icon: v.entryPointIcon
      }), e), {
        onMouseEnter: () => W(e.onMouseEnter),
        onMouseLeave: () => q(e.onMouseLeave),
        children: [(0, r.jsx)("div", {
          ref: L,
          className: D.marketingButtonBackgroundNew,
          style: {
            background: y
          },
          children: null != O && (0, r.jsx)("img", {
            src: O,
            className: a()(D.marketingButtonBackgroundImage, P && D.marketingButtonBackgroundImageFaded),
            alt: "",
            "aria-hidden": true
          })
        }), (0, r.jsx)(G, {
          badgeIcon: v.badgeIcon,
          badgeText: v.badgeText
        })]
      }))
    })
  },
  W = e => {
    let {
      displayOptions: t
    } = e, n = U(e, ["displayOptions"]), l = i.useMemo(() => {
      var e;
      let n = null != t.emojiName ? null == (e = y.Ay.getByName(t.emojiName)) ? true : e.surrogates : null;
      return (0, r.jsxs)(h.Text, {
        variant: "text-sm/medium",
        className: D.marketingBadgeTooltipContent,
        children: [null != n && (0, r.jsx)(g.A, {
          emojiName: n
        }), t.title()]
      })
    }, [t]);
    return (0, r.jsx)(h.STz, {
      "data-migration-pending": true,
      text: l,
      tooltipClassName: D.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      hideOnClick: false,
      "aria-label": t.title(),
      children: e => (0, r.jsx)(B, k(M({}, n, e), {
        children: (0, r.jsx)(G, {
          badgeIcon: t.badgeIcon,
          badgeText: t.badgeText
        })
      }))
    })
  },
  q = e => {
    var t, n;
    let {
      displayOptions: l,
      dismissContent: s
    } = e, o = U(e, ["displayOptions", "dismissContent"]), c = i.useRef(null), u = i.useRef(null), [d, h] = i.useState(false), g = (0, f.Ay)(), m = (0, p.Mw)(g), A = l.entryPointBackgroundAssets, _ = l.entrypointBackgroundStyle, b = m ? null == A ? true : A.srcDarkHovered : null == A ? true : A.srcLightHovered, E = m ? null == _ || null == (t = _.hovered) ? true : t.dark : null == _ || null == (n = _.hovered) ? true : n.light;
    return i.useEffect(() => {
      if (null == b || "" === b) return void h(false);
      let e = () => {
        h(Y(u))
      };
      e();
      let t = requestAnimationFrame(e);
      return () => {
        cancelAnimationFrame(t)
      }
    }, [b]), (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(B, k(M({}, o), {
        onClick: () => s(L.i.TAKE_ACTION),
        listItemRef: c,
        children: [(0, r.jsx)("div", {
          ref: u,
          className: D.marketingButtonBackgroundNew,
          style: null != E ? {
            background: E
          } : true,
          children: null != b && (0, r.jsx)("img", {
            src: b,
            className: a()(D.marketingButtonBackgroundImage, d && D.marketingButtonBackgroundImageFaded),
            alt: "",
            "aria-hidden": true
          })
        }), (0, r.jsx)(G, {
          badgeIcon: l.badgeIcon,
          badgeText: l.badgeText
        })]
      })), (0, r.jsx)(C.A, {
        displayOptions: l,
        targetElementRef: c,
        onClick: () => s(L.i.TAKE_ACTION),
        onRequestClose: () => s(L.i.USER_DISMISS)
      })]
    })
  },
  z = e => {
    let {
      dismissContent: t
    } = e, n = U(e, ["dismissContent"]), l = i.useRef(null);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(B, k(M({}, n), {
        onClick: () => t(L.i.TAKE_ACTION),
        listItemRef: l
      })), (0, r.jsx)(N.A, {
        targetElementRef: l,
        onClick: () => t(L.i.TAKE_ACTION),
        onRequestClose: () => t(L.i.USER_DISMISS)
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
    } = (0, T.A)(), o = !(0, h.ueM)(), [c, u] = (0, O.kn)(o ? [d.M.WISHLIST_SHOP_BUTTON_POPOVER] : []), p = {
      selected: t,
      locationState: i,
      onClick: () => {
        s(), null == n || n()
      },
      listItemRef: l
    };
    if (null != a) switch (a.type) {
      case x.FF.TOOLTIP:
        return (0, r.jsx)(W, k(M({}, p), {
          displayOptions: a
        }));
      case x.FF.COACHTIP:
        return (0, r.jsx)(K, k(M({}, p), {
          displayOptions: a
        }));
      case x.FF.BADGE:
        return (0, r.jsx)(H, M({}, p));
      case x.FF.COACHMARK:
        return (0, r.jsx)(q, k(M({
          dismissContent: s
        }, p), {
          displayOptions: a
        }))
    }
    return c === d.M.WISHLIST_SHOP_BUTTON_POPOVER ? (0, r.jsx)(z, k(M({}, p), {
      dismissContent: u
    })) : (0, r.jsx)(B, M({}, p))
  }