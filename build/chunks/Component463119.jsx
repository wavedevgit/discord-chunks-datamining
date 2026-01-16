/** Chunk was on 1272 **/
/** chunk id: 463119, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => q
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
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

function D(e) {
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

function M(e, t) {
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

function k(e, t) {
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
let U = e => {
    let {
      badgeIcon: t,
      badgeText: n
    } = e, i = null != t && "" !== t ? s[t] : true;
    return (0, r.jsx)("div", {
      className: R.newBadge,
      children: (0, r.jsx)(c.Cts, {
        type: null != n && "" !== n ? {
          text: n
        } : "new",
        variant: "expressive",
        icon: i
      })
    })
  },
  G = () => {
    let {
      noCache: e,
      includeUnpublished: t
    } = (0, x.Z)();
    return (0, S.E)(A.AW.HOME, {
      noCache: e,
      includeUnpublished: t,
      includeBundles: true
    }, true, true), null
  },
  H = e => {
    var {
      selected: t,
      locationState: n,
      icon: l,
      onClick: a,
      collectibleShopTab: s,
      onMouseEnter: c,
      onMouseLeave: u,
      children: d
    } = e, p = k(e, ["selected", "locationState", "icon", "onClick", "collectibleShopTab", "onMouseEnter", "onMouseLeave", "children"]);
    let g = (0, o.JA)("shop"),
      m = E.Z.HOME_PAGE_SHOP_TAB,
      {
        analyticsLocations: b
      } = (0, _.ZP)(m),
      [O, I] = i.useState(false),
      v = i.useCallback(() => {
        true !== a && a(), true !== s && (0, C.mK)({
          tab: s,
          analyticsLocations: b,
          analyticsSource: m
        }), I(true), (0, C.Sm)({
          analyticsSource: m,
          analyticsLocations: b
        })
      }, [m, b, a, I, s]),
      y = Z.Z5c.COLLECTIBLES_SHOP;
    return (0, r.jsxs)(r.Fragment, {
      children: [O && (0, r.jsx)(G, {}), (0, r.jsx)(h.Qj, M(D({
        selected: t,
        route: y,
        icon: null != l ? l : f.EOn,
        text: L.intl.string(L.t.pWG4ze),
        locationState: n
      }, g, p), {
        onMouseEnter: c,
        onMouseLeave: u,
        onClick: v,
        children: d
      }))]
    })
  },
  B = e => (0, r.jsx)(H, M(D({}, e), {
    children: (0, r.jsx)(U, {})
  })),
  V = Chunk473749.memo(function(e) {
    var t;
    let {
      displayOptions: n,
      assetId: i,
      reducedMotion: l = false
    } = e, a = null != i ? (0, O.Z)(i, f.EFr.SIZE_80, !l) : true, o = n.title(), s = null == (t = n.body) ? true : t.call(n), c = null == s || "" === s;
    return (0, r.jsxs)("div", {
      className: R.shopMarketingTooltipContent,
      children: [(0, r.jsx)("div", {
        className: R.avatarContainer,
        children: (0, r.jsx)(f.qEK, {
          className: R.avatar,
          src: n.imageSrc,
          avatarDecoration: a,
          size: f.EFr.SIZE_80,
          "aria-hidden": true
        })
      }), (0, r.jsxs)("div", {
        className: R.shopMarketingTooltipText,
        children: [(0, r.jsx)(f.Heading, {
          variant: c ? "heading-sm/medium" : "heading-sm/bold",
          children: o
        }), !c && (0, r.jsx)(f.Text, {
          variant: "text-xs/normal",
          className: R.marketingBadgeTooltipContent,
          children: s
        })]
      })]
    })
  }),
  F = e => {
    if (null == e.current || null == e.current.parentElement) returnfalse;
    let t = e.current.parentElement.offsetWidth;
    return t >= 175 && t <= 230
  },
  z = e => {
    let t, n;
    var l, o, s, c, d, g, h, E, _, O, I, v, {
        displayOptions: C
      } = e,
      S = k(e, ["displayOptions"]);
    let T = (0, u.e7)([b.Z], () => b.Z.useReducedMotion),
      [N, j] = i.useState(0),
      [x, P] = i.useState(false),
      [A, Z] = i.useState(false),
      w = i.useRef(null),
      G = i.useRef(null),
      B = (0, m.ZP)(),
      z = (0, p.wj)(B);
    x ? z ? (t = null == (l = C.entryPointBackgroundAssets) ? true : l.srcDarkHovered, n = null == (s = C.entrypointBackgroundStyle) || null == (o = s.hovered) ? true : o.dark) : (t = null == (c = C.entryPointBackgroundAssets) ? true : c.srcLightHovered, n = null == (g = C.entrypointBackgroundStyle) || null == (d = g.hovered) ? true : d.light) : z ? (t = null == (h = C.entryPointBackgroundAssets) ? true : h.srcDark, n = null == (_ = C.entrypointBackgroundStyle) || null == (E = _.resting) ? true : E.dark) : (t = null == (O = C.entryPointBackgroundAssets) ? true : O.srcLight, n = null == (v = C.entrypointBackgroundStyle) || null == (I = v.resting) ? true : I.light);
    let Y = i.useCallback(e => {
        C.assetIds.length > 0 && j(e => (e + 1) % C.assetIds.length), P(true);
        let t = () => {
          Z(F(w))
        };
        t(), G.current = requestAnimationFrame(t), null == e || e()
      }, [C.assetIds.length]),
      W = i.useCallback(e => {
        P(false), Z(false), null != G.current && (cancelAnimationFrame(G.current), G.current = null), null == e || e()
      }, []);
    i.useEffect(() => () => {
      null != G.current && cancelAnimationFrame(G.current)
    }, []);
    let K = C.title();
    return (0, r.jsx)(f.aML, {
      "data-migration-pending": true,
      text: (0, r.jsx)(V, {
        displayOptions: C,
        assetId: C.assetIds[N],
        reducedMotion: T
      }),
      tooltipClassName: R.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      allowOverflow: true,
      hideOnClick: false,
      "aria-label": "string" == typeof K ? K : L.intl.string(L.t.rSXaxY),
      children: e => (0, r.jsxs)(H, M(D(M(D({
        className: null != C.entryPointClassName ? (0, y.l)(R, C.entryPointClassName) : true
      }, S), {
        icon: C.entryPointIcon
      }), e), {
        onMouseEnter: () => Y(e.onMouseEnter),
        onMouseLeave: () => W(e.onMouseLeave),
        children: [(0, r.jsx)("div", {
          ref: w,
          className: R.marketingButtonBackgroundNew,
          style: {
            background: n
          },
          children: null != t && (0, r.jsx)("img", {
            src: t,
            className: a()(R.marketingButtonBackgroundImage, A && R.marketingButtonBackgroundImageFaded),
            alt: "",
            "aria-hidden": true
          })
        }), (0, r.jsx)(U, {
          badgeIcon: C.badgeIcon,
          badgeText: C.badgeText
        })]
      }))
    })
  },
  Y = e => {
    var {
      displayOptions: t
    } = e, n = k(e, ["displayOptions"]);
    let l = i.useMemo(() => {
      var e;
      let n = null != t.emojiName ? null == (e = v.ZP.getByName(t.emojiName)) ? true : e.surrogates : null;
      return (0, r.jsxs)(f.Text, {
        variant: "text-sm/medium",
        className: R.marketingBadgeTooltipContent,
        children: [null != n && (0, r.jsx)(g.Z, {
          emojiName: n
        }), t.title()]
      })
    }, [t]);
    return (0, r.jsx)(f.aML, {
      "data-migration-pending": true,
      text: l,
      tooltipClassName: R.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      hideOnClick: false,
      "aria-label": t.title(),
      children: e => (0, r.jsx)(H, M(D({}, n, e), {
        children: (0, r.jsx)(U, {
          badgeIcon: t.badgeIcon,
          badgeText: t.badgeText
        })
      }))
    })
  },
  W = e => {
    var t, n, {
        displayOptions: l,
        dismissContent: o
      } = e,
      s = k(e, ["displayOptions", "dismissContent"]);
    let c = i.useRef(null),
      u = i.useRef(null),
      [d, f] = i.useState(false),
      g = (0, m.ZP)(),
      h = (0, p.wj)(g),
      b = l.entryPointBackgroundAssets,
      E = l.entrypointBackgroundStyle,
      _ = h ? null == b ? true : b.srcDarkHovered : null == b ? true : b.srcLightHovered,
      O = h ? null == E || null == (t = E.hovered) ? true : t.dark : null == E || null == (n = E.hovered) ? true : n.light;
    return i.useEffect(() => {
      if (null == _ || "" === _) return void f(false);
      let e = () => {
        f(F(u))
      };
      e();
      let t = requestAnimationFrame(e);
      return () => {
        cancelAnimationFrame(t)
      }
    }, [_]), (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(H, M(D({}, s), {
        onClick: () => o(w.L.TAKE_ACTION),
        listItemRef: c,
        children: [(0, r.jsx)("div", {
          ref: u,
          className: R.marketingButtonBackgroundNew,
          style: null != O ? {
            background: O
          } : true,
          children: null != _ && (0, r.jsx)("img", {
            src: _,
            className: a()(R.marketingButtonBackgroundImage, d && R.marketingButtonBackgroundImageFaded),
            alt: "",
            "aria-hidden": true
          })
        }), (0, r.jsx)(U, {
          badgeIcon: l.badgeIcon,
          badgeText: l.badgeText
        })]
      })), (0, r.jsx)(T.Z, {
        displayOptions: l,
        targetElementRef: c,
        onClick: () => o(w.L.TAKE_ACTION),
        onRequestClose: () => o(w.L.USER_DISMISS)
      })]
    })
  },
  K = e => {
    var {
      dismissContent: t
    } = e, n = k(e, ["dismissContent"]);
    let l = i.useRef(null);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(H, M(D({}, n), {
        onClick: () => t(w.L.TAKE_ACTION),
        listItemRef: l
      })), (0, r.jsx)(N.Z, {
        targetElementRef: l,
        onClick: () => t(w.L.TAKE_ACTION),
        onRequestClose: () => t(w.L.USER_DISMISS)
      })]
    })
  },
  q = e => {
    let {
      selected: t,
      onClick: n,
      locationState: i,
      listItemRef: l
    } = e, {
      shopButtonDisplayOptions: a,
      dismissShopButtonDC: o
    } = (0, j.Z)(), s = !(0, f.$sL)(), [c, u] = (0, I.US)(s ? [d.z.WISHLIST_SHOP_BUTTON_POPOVER] : []), p = {
      selected: t,
      locationState: i,
      onClick: () => {
        o(), null == n || n()
      },
      listItemRef: l
    };
    if (null != a) switch (a.type) {
      case P.k2.TOOLTIP:
        return (0, r.jsx)(Y, M(D({}, p), {
          displayOptions: a
        }));
      case P.k2.COACHTIP:
        return (0, r.jsx)(z, M(D({}, p), {
          displayOptions: a
        }));
      case P.k2.BADGE:
        return (0, r.jsx)(B, D({}, p));
      case P.k2.COACHMARK:
        return (0, r.jsx)(W, M(D({
          dismissContent: o
        }, p), {
          displayOptions: a
        }))
    }
    return c === d.z.WISHLIST_SHOP_BUTTON_POPOVER ? (0, r.jsx)(K, M(D({}, p), {
      dismissContent: u
    })) : (0, r.jsx)(H, D({}, p))
  }