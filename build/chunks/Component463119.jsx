/** Chunk was on 1272 **/
/** chunk id: 463119, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => B
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
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
  Chunk633302 = require("./633302.js"),
  Chunk153066 = require("./153066.js"),
  Chunk335131 = require("./335131.js"),
  Chunk364111 = require("./364111.js"),
  Chunk729700 = require("./729700.jsx"),
  Chunk681435 = require("./681435.js"),
  Chunk81136 = require("./81136.js"),
  Chunk302800 = require("./302800.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk677372 = require("./677372.js");

function x(e) {
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

function A(e, t) {
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

function Z(e, t) {
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
let w = e => {
    let {
      color: t
    } = e;
    return (0, r.jsx)(s.IGR, {
      className: P.newBadge,
      color: null != t ? t : m.Z.STATUS_DANGER_BACKGROUND,
      text: j.intl.string(j.t.y2b7CA)
    })
  },
  L = () => {
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
  R = e => {
    var {
      selected: t,
      locationState: n,
      icon: a,
      onClick: o,
      collectibleShopTab: c,
      onMouseEnter: d,
      onMouseLeave: p,
      children: g
    } = e, m = Z(e, ["selected", "locationState", "icon", "onClick", "collectibleShopTab", "onMouseEnter", "onMouseLeave", "children"]);
    let b = (0, l.JA)("shop"),
      _ = f.Z.HOME_PAGE_SHOP_TAB,
      {
        analyticsLocations: E
      } = (0, h.ZP)(_),
      [y, v] = i.useState(false),
      I = i.useCallback(() => {
        true !== o && o(), true !== c && (0, O.mK)({
          openInLayer: false,
          tab: c,
          analyticsLocations: E,
          analyticsSource: _
        }), v(true), (0, O.Sm)({
          analyticsSource: _,
          analyticsLocations: E
        })
      }, [_, E, o, v, c]),
      S = T.Z5c.COLLECTIBLES_SHOP;
    return (0, r.jsxs)(r.Fragment, {
      children: [y && (0, r.jsx)(L, {}), (0, r.jsx)(u.Qj, A(x({
        selected: t,
        route: S,
        icon: null != a ? a : s.EOn,
        text: j.intl.string(j.t.pWG4zc),
        locationState: n
      }, b, m), {
        onMouseEnter: d,
        onMouseLeave: p,
        onClick: I,
        children: g
      }))]
    })
  },
  D = e => (0, r.jsx)(R, A(x({}, e), {
    children: (0, r.jsx)(w, {})
  })),
  k = Chunk647438.memo(function(e) {
    var t;
    let {
      displayOptions: n,
      assetId: i,
      reducedMotion: l = false
    } = e, a = null != i ? (0, g.Z)(i, s.EFr.SIZE_80, !l) : true, o = n.title(), c = null == (t = n.body) ? true : t.call(n), u = null == c || "" === c;
    return (0, r.jsxs)("div", {
      className: P.shopMarketingTooltipContent,
      children: [(0, r.jsx)("div", {
        className: P.avatarContainer,
        children: (0, r.jsx)(s.qEK, {
          className: P.avatar,
          src: n.imageSrc,
          avatarDecoration: a,
          size: s.EFr.SIZE_80,
          "aria-hidden": true
        })
      }), (0, r.jsxs)("div", {
        className: P.shopMarketingTooltipText,
        children: [(0, r.jsx)(s.X6q, {
          variant: u ? "heading-sm/medium" : "heading-sm/bold",
          children: o
        }), !u && (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          className: P.marketingBadgeTooltipContent,
          children: c
        })]
      })]
    })
  }),
  M = e => {
    let t, n;
    var l, c, u, f, h, g, m, b, O, E, y, v, {
        displayOptions: I
      } = e,
      S = Z(e, ["displayOptions"]);
    let C = (0, a.e7)([p.Z], () => p.Z.useReducedMotion),
      [T, N] = i.useState(0),
      [L, D] = i.useState(false),
      M = (0, d.ZP)(),
      U = (0, o.wj)(M);
    L ? U ? (t = null == (l = I.entryPointBackgroundAssets) ? true : l.srcDarkHovered, n = null == (u = I.entrypointBackgroundStyle) || null == (c = u.hovered) ? true : c.dark) : (t = null == (f = I.entryPointBackgroundAssets) ? true : f.srcLightHovered, n = null == (g = I.entrypointBackgroundStyle) || null == (h = g.hovered) ? true : h.light) : U ? (t = null == (m = I.entryPointBackgroundAssets) ? true : m.srcDark, n = null == (O = I.entrypointBackgroundStyle) || null == (b = O.resting) ? true : b.dark) : (t = null == (E = I.entryPointBackgroundAssets) ? true : E.srcLight, n = null == (v = I.entrypointBackgroundStyle) || null == (y = v.resting) ? true : y.light);
    let G = i.useCallback(e => {
        I.assetIds.length > 0 && N(e => (e + 1) % I.assetIds.length), D(true), null == e || e()
      }, [I.assetIds.length]),
      B = i.useCallback(e => {
        D(false), null == e || e()
      }, []),
      V = I.title();
    return (0, r.jsx)(s.ua7, {
      text: (0, r.jsx)(k, {
        displayOptions: I,
        assetId: I.assetIds[T],
        reducedMotion: C
      }),
      tooltipClassName: P.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      allowOverflow: true,
      hideOnClick: false,
      "aria-label": "string" == typeof V ? V : j.intl.string(j.t.rSXaxc),
      children: e => (0, r.jsxs)(R, A(x(A(x({
        className: null != I.entryPointClassName ? (0, _.l)(P, I.entryPointClassName) : true
      }, S), {
        icon: I.entryPointIcon
      }), e), {
        onMouseEnter: () => G(e.onMouseEnter),
        onMouseLeave: () => B(e.onMouseLeave),
        children: [(0, r.jsx)("div", {
          className: P.marketingButtonBackground,
          style: {
            background: n
          },
          children: null != t && (0, r.jsx)("img", {
            src: t,
            className: P.marketingButtonBackgroundImage,
            alt: "",
            "aria-hidden": true
          })
        }), (0, r.jsx)(w, {
          color: I.badgeColor
        })]
      }))
    })
  },
  U = e => {
    var {
      displayOptions: t
    } = e, n = Z(e, ["displayOptions"]);
    let l = i.useMemo(() => {
      var e;
      let n = null != t.emojiName ? null == (e = b.ZP.getByName(t.emojiName)) ? true : e.surrogates : null;
      return (0, r.jsxs)(s.Text, {
        variant: "text-sm/medium",
        className: P.marketingBadgeTooltipContent,
        children: [null != n && (0, r.jsx)(c.Z, {
          emojiName: n
        }), t.title()]
      })
    }, [t]);
    return (0, r.jsx)(s.ua7, {
      text: l,
      tooltipClassName: P.marketingBadgeTooltip,
      position: "right",
      delay: 100,
      hideOnClick: false,
      "aria-label": t.title(),
      children: e => (0, r.jsx)(R, A(x({}, n, e), {
        children: (0, r.jsx)(w, {
          color: t.badgeColor
        })
      }))
    })
  },
  G = e => {
    var t, n, {
        displayOptions: l,
        dismissContent: a
      } = e,
      s = Z(e, ["displayOptions", "dismissContent"]);
    let c = i.useRef(null),
      u = (0, d.ZP)(),
      p = (0, o.wj)(u),
      f = l.entryPointBackgroundAssets,
      h = l.entrypointBackgroundStyle,
      g = p ? null == f ? true : f.srcDarkHovered : null == f ? true : f.srcLightHovered,
      m = p ? null == h || null == (t = h.hovered) ? true : t.dark : null == h || null == (n = h.hovered) ? true : n.light;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(R, A(x({}, s), {
        onClick: () => a(N.L.TAKE_ACTION),
        listItemRef: c,
        children: [(0, r.jsx)("div", {
          className: P.marketingButtonBackground,
          style: null != m ? {
            background: m
          } : true,
          children: null != g && (0, r.jsx)("img", {
            src: g,
            className: P.marketingButtonBackgroundImage,
            alt: "",
            "aria-hidden": true
          })
        }), (0, r.jsx)(w, {})]
      })), (0, r.jsx)(y.Z, {
        displayOptions: l,
        targetElementRef: c,
        onClick: () => a(N.L.TAKE_ACTION),
        onRequestClose: () => a(N.L.USER_DISMISS)
      })]
    })
  },
  B = e => {
    let {
      selected: t,
      onClick: n,
      locationState: i,
      listItemRef: l
    } = e, {
      shopButtonDisplayOptions: a,
      dismissShopButtonDC: o
    } = (0, v.Z)(), s = {
      selected: t,
      locationState: i,
      onClick: () => {
        o(), null == n || n()
      },
      listItemRef: l
    };
    if (null != a) switch (a.type) {
      case S.k2.TOOLTIP:
        return (0, r.jsx)(U, A(x({}, s), {
          displayOptions: a
        }));
      case S.k2.COACHTIP:
        return (0, r.jsx)(M, A(x({}, s), {
          displayOptions: a
        }));
      case S.k2.BADGE:
        return (0, r.jsx)(D, x({}, s));
      case S.k2.COACHMARK:
        return (0, r.jsx)(G, A(x({
          dismissContent: o
        }, s), {
          displayOptions: a
        }))
    }
    return (0, r.jsx)(R, x({}, s))
  }