/** Chunk was on 97387 **/
n.d(t, {
  M: () => m,
  U_: () => j,
  VK: () => P,
  t4: () => b,
  tE: () => R
}), n(47120), n(266796);
var l = n(200651),
  r = n(192379),
  i = n(120356),
  o = n.n(i),
  a = n(442837),
  s = n(704215),
  c = n(481060),
  u = n(607070),
  d = n(70097),
  E = n(605236),
  f = n(930153),
  p = n(822857),
  h = n(622562),
  C = n(921944),
  _ = n(388032),
  O = n(175722),
  g = n(447489),
  S = n(484885);

function T() {
  return (T = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l])
    }
    return e
  }).apply(this, arguments)
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = l
    })
  }
  return e
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = () => (0, f.Lk)(document.body.style.getPropertyValue("--custom-app-panels-height"), 56) + 8,
  v = {
    discover: s.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
    shop: s.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK
  },
  m = e => {
    let {
      onboardingCoachmarkType: t,
      prevCoachmarksDismissed: n = !0,
      onShowCoachmarkHandler: l
    } = e, i = (0, E.wE)(s.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL), {
      enabled: o
    } = (0, p.W)({
      location: "virtual_currency_onboarding_coachmark"
    }), a = (0, E.wE)(v[t]), c = o && i && n && !a, u = r.useCallback(() => {
      a || (0, E.EW)(v[t], {
        forceTrack: !0,
        dismissAction: C.L.USER_DISMISS
      })
    }, [a, t]), [d, f] = r.useState(!1);
    return r.useEffect(() => {
      c ? d || (void 0 !== l && l(), f(!0)) : d && f(!1)
    }, [c, l, d]), {
      shouldShow: d,
      closeCoachmarkIfOpen: u
    }
  },
  A = e => (0, l.jsx)(c.zxk, N(I({}, e), {
    "aria-label": _.NW.string(_.t.cpT0Cg),
    look: c.zxk.Looks.BLANK,
    size: c.zxk.Sizes.NONE,
    wrapperClassName: O.closeButton,
    innerClassName: O.closeButtonInner,
    children: (0, l.jsx)(c.Dio, {
      size: "refresh_sm",
      className: O.closeButtonIcon
    })
  })),
  P = e => {
    let {
      invertTail: t,
      leftOffset: n,
      rightOffset: r
    } = e;
    return (0, l.jsxs)("div", {
      className: o()(O.tail, t ? O.tailPositionInverted : O.tailPositionNormal),
      style: {
        left: n,
        right: r
      },
      children: [(0, l.jsx)("div", {
        className: O.tailSpine
      }), (0, l.jsx)("div", {
        className: o()(O.tailTargetOuter, t ? O.tailTargetPositionInverted : O.tailTargetPositionNormal),
        children: (0, l.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "8",
          height: "8",
          viewBox: "0 0 8 8",
          fill: "none",
          children: (0, l.jsx)("circle", {
            cx: "50%",
            cy: "50%",
            r: "3",
            className: O.tailTargetInner
          })
        })
      })]
    })
  },
  y = () => (0, a.e7)([u.Z], () => u.Z.useReducedMotion) ? (0, l.jsx)("img", {
    src: g.Z,
    className: O.orbAsset,
    alt: "Orb"
  }) : (0, l.jsxs)(d.Z, {
    autoPlay: !0,
    loop: !0,
    className: O.orbAsset,
    children: [(0, l.jsx)("source", {
      src: S.Z,
      type: "video/webm"
    }), (0, l.jsx)("img", {
      src: g.Z,
      className: O.orbAsset,
      alt: "Orb"
    })]
  }),
  L = e => {
    let {
      titleText: t,
      descriptionText: n,
      onClose: r,
      onCtaClick: i,
      ctaText: o,
      iconComponent: a,
      tailLeftOffset: s = 22,
      renderTail: u,
      invertCoachmark: d = !1,
      coachmarkRef: E
    } = e;
    return (0, l.jsxs)("div", {
      className: O.container,
      ref: E,
      children: [(0, l.jsx)(A, {
        onClick: r
      }), a, (0, l.jsxs)("div", {
        className: O.content,
        children: [(0, l.jsx)(c.X6q, {
          className: O.title,
          variant: "heading-md/bold",
          children: t
        }), (0, l.jsx)(c.Text, {
          variant: "text-sm/medium",
          className: O.description,
          children: n
        })]
      }), void 0 !== o && (0, l.jsx)(c.zxk, {
        className: O.ctaButton,
        color: c.zxk.Colors.BRAND,
        look: c.zxk.Looks.FILLED,
        onClick: i,
        fullWidth: !0,
        children: o
      }), u && (0, l.jsx)(P, {
        leftOffset: s,
        invertTail: d
      })]
    })
  },
  R = e => {
    var t = T({}, function(e) {
      if (null == e) throw TypeError("Cannot destructure " + e);
      return e
    }(e));
    return (0, l.jsx)(L, I({
      iconComponent: (0, l.jsx)(y, {})
    }, t))
  };

function j(e) {
  let {
    calculateVisibility: t,
    backgroundElementRef: n,
    calculateBaseOffsets: i,
    offsetControlRef: o,
    children: a,
    key: s,
    coachmarkRef: c,
    onGetBackgroundElementDimensions: u
  } = e, [d, E] = r.useState(!1), [f, p] = r.useState(!0), C = r.useCallback(e => {
    let n = t(e);
    n !== f && p(n)
  }, [f, t]), _ = r.useCallback(e => {
    C(e);
    let t = e.top < window.innerHeight / 2;
    t !== d && E(t)
  }, [d, C]), O = r.useCallback(e => {
    let t = i(e),
      {
        verticalOffset: n
      } = t,
      l = function(e, t) {
        if (null == e) return {};
        var n, l, r = function(e, t) {
          if (null == e) return {};
          var n, l, r = {},
            i = Object.keys(e);
          for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
          return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
        }
        return r
      }(t, ["verticalOffset"]);
    return (void 0 !== u && u(e), d) ? N(I({}, l), {
      top: e.height + n
    }) : void 0 !== c && null !== c.current ? N(I({}, l), {
      top: -c.current.offsetHeight - n
    }) : N(I({}, l), {
      bottom: e.height + n
    })
  }, [d, i, u, c]);
  return (0, l.jsx)(h.E, {
    backgroundElementRef: n,
    offsetControlRef: o,
    style: {
      visibility: f ? "visible" : "hidden"
    },
    getOffsetsRelativeToElement: O,
    fallbackAbsoluteOffsets: {
      top: 0,
      left: 0
    },
    onGetBoundingRect: _,
    children: r.Children.map(a, e => r.cloneElement(e, {
      invertCoachmark: d
    }))
  }, s)
}