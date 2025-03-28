/** Chunk was on 82081 **/
n.d(t, {
  M: () => y,
  U_: () => E,
  VK: () => w,
  t4: () => v,
  tE: () => A
}), n(47120), n(266796);
var r = n(200651),
  a = n(192379),
  o = n(120356),
  i = n.n(o),
  s = n(442837),
  c = n(704215),
  l = n(481060),
  d = n(607070),
  b = n(70097),
  u = n(605236),
  m = n(930153),
  f = n(822857),
  p = n(622562),
  h = n(921944),
  _ = n(388032),
  O = n(175722),
  g = n(447489),
  x = n(484885);

function j() {
  return (j = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function C(e, t) {
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
let v = () => (0, m.Lk)(document.body.style.getPropertyValue("--custom-app-panels-height"), 56) + 8,
  N = {
    discover: c.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
    shop: c.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK
  },
  y = e => {
    let {
      onboardingCoachmarkType: t,
      prevCoachmarksDismissed: n = !0,
      onShowCoachmarkHandler: r
    } = e, o = (0, u.wE)(c.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL), {
      enabled: i
    } = (0, f.W)({
      location: "virtual_currency_onboarding_coachmark"
    }), s = (0, u.wE)(N[t]), l = i && o && n && !s, d = a.useCallback(() => {
      s || (0, u.EW)(N[t], {
        forceTrack: !0,
        dismissAction: h.L.USER_DISMISS
      })
    }, [s, t]), [b, m] = a.useState(!1);
    return a.useEffect(() => {
      l ? b || (void 0 !== r && r(), m(!0)) : b && m(!1)
    }, [l, r, b]), {
      shouldShow: b,
      closeCoachmarkIfOpen: d
    }
  },
  T = e => (0, r.jsx)(l.zxk, C(k({}, e), {
    "aria-label": _.NW.string(_.t.cpT0Cg),
    look: l.zxk.Looks.BLANK,
    size: l.zxk.Sizes.NONE,
    wrapperClassName: O.closeButton,
    innerClassName: O.closeButtonInner,
    children: (0, r.jsx)(l.Dio, {
      size: "refresh_sm",
      className: O.closeButtonIcon
    })
  })),
  w = e => {
    let {
      invertTail: t,
      leftOffset: n,
      rightOffset: a,
      tailSpineClassName: o,
      tailTargetInnerClassName: s
    } = e;
    return (0, r.jsxs)("div", {
      className: i()(O.tail, t ? O.tailPositionInverted : O.tailPositionNormal),
      style: {
        left: n,
        right: a
      },
      children: [(0, r.jsx)("div", {
        className: i()(O.tailSpine, o)
      }), (0, r.jsx)("div", {
        className: i()(O.tailTargetOuter, t ? O.tailTargetPositionInverted : O.tailTargetPositionNormal),
        children: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "8",
          height: "8",
          viewBox: "0 0 8 8",
          fill: "none",
          children: (0, r.jsx)("circle", {
            cx: "50%",
            cy: "50%",
            r: "3",
            className: i()(O.tailTargetInner, s)
          })
        })
      })]
    })
  },
  I = () => (0, s.e7)([d.Z], () => d.Z.useReducedMotion) ? (0, r.jsx)("img", {
    src: g.Z,
    className: O.orbAsset,
    alt: "Orb"
  }) : (0, r.jsxs)(b.Z, {
    autoPlay: !0,
    loop: !0,
    className: O.orbAsset,
    children: [(0, r.jsx)("source", {
      src: x.Z,
      type: "video/webm"
    }), (0, r.jsx)("img", {
      src: g.Z,
      className: O.orbAsset,
      alt: "Orb"
    })]
  }),
  P = e => {
    let {
      titleText: t,
      descriptionText: n,
      onClose: a,
      onCtaClick: o,
      ctaText: i,
      iconComponent: s,
      tailLeftOffset: c = 22,
      renderTail: d,
      invertCoachmark: b = !1,
      coachmarkRef: u
    } = e;
    return (0, r.jsxs)("div", {
      className: O.container,
      ref: u,
      children: [(0, r.jsx)(T, {
        onClick: a
      }), s, (0, r.jsxs)("div", {
        className: O.content,
        children: [(0, r.jsx)(l.X6q, {
          className: O.title,
          variant: "heading-md/bold",
          children: t
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          className: O.description,
          children: n
        })]
      }), void 0 !== i && (0, r.jsx)(l.zxk, {
        className: O.ctaButton,
        color: l.zxk.Colors.BRAND,
        look: l.zxk.Looks.FILLED,
        onClick: o,
        fullWidth: !0,
        children: i
      }), d && (0, r.jsx)(w, {
        leftOffset: c,
        invertTail: b
      })]
    })
  },
  A = e => {
    var t = j({}, function(e) {
      if (null == e) throw TypeError("Cannot destructure " + e);
      return e
    }(e));
    return (0, r.jsx)(P, k({
      iconComponent: (0, r.jsx)(I, {})
    }, t))
  };

function E(e) {
  let {
    calculateVisibility: t,
    backgroundElementRef: n,
    calculateBaseOffsets: o,
    offsetControlRef: i,
    children: s,
    key: c,
    coachmarkRef: l,
    onGetBackgroundElementDimensions: d
  } = e, [b, u] = a.useState(!1), [m, f] = a.useState(!0), h = a.useCallback(e => {
    let n = t(e);
    n !== m && f(n)
  }, [m, t]), _ = a.useCallback(e => {
    h(e);
    let t = e.top < window.innerHeight / 2;
    t !== b && u(t)
  }, [b, h]), O = a.useCallback(e => {
    let t = o(e, b),
      {
        verticalOffset: n
      } = t,
      r = function(e, t) {
        if (null == e) return {};
        var n, r, a = function(e, t) {
          if (null == e) return {};
          var n, r, a = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
      }(t, ["verticalOffset"]);
    return (void 0 !== d && d(e), b) ? C(k({}, r), {
      top: e.height + n
    }) : void 0 !== l && null !== l.current ? C(k({}, r), {
      top: -l.current.offsetHeight - n
    }) : C(k({}, r), {
      bottom: e.height + n
    })
  }, [b, o, d, l]);
  return (0, r.jsx)(p.E, {
    backgroundElementRef: n,
    offsetControlRef: i,
    style: {
      visibility: m ? "visible" : "hidden"
    },
    getOffsetsRelativeToElement: O,
    fallbackAbsoluteOffsets: {
      top: 0,
      left: 0
    },
    onGetBoundingRect: _,
    children: a.Children.map(s, e => a.cloneElement(e, {
      invertCoachmark: b
    }))
  }, c)
}