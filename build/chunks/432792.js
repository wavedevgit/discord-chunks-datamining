/** Chunk was on 82081 **/
n.d(t, {
  M: () => k,
  U_: () => I,
  VK: () => P,
  t4: () => C,
  tE: () => T
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
  f = n(930153),
  m = n(822857),
  p = n(622562),
  O = n(921944),
  h = n(388032),
  _ = n(175722),
  g = n(447489),
  j = n(484885);

function x() {
  return (x = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function v(e) {
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

function y(e, t) {
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
let C = () => (0, f.Lk)(document.body.style.getPropertyValue("--custom-app-panels-height"), 56) + 8,
  N = {
    discover: c.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
    shop: c.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK
  },
  k = e => {
    let {
      onboardingCoachmarkType: t,
      prevCoachmarksDismissed: n = !0,
      onShowCoachmarkHandler: r
    } = e, o = (0, u.wE)(c.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL), {
      enabled: i
    } = (0, m.W)({
      location: "virtual_currency_onboarding_coachmark"
    }), s = (0, u.wE)(N[t]), l = i && o && n && !s, d = a.useCallback(() => {
      s || (0, u.EW)(N[t], {
        forceTrack: !0,
        dismissAction: O.L.USER_DISMISS
      })
    }, [s, t]), [b, f] = a.useState(!1);
    return a.useEffect(() => {
      l ? b || (void 0 !== r && r(), f(!0)) : b && f(!1)
    }, [l, r, b]), {
      shouldShow: b,
      closeCoachmarkIfOpen: d
    }
  },
  w = e => (0, r.jsx)(l.zxk, y(v({}, e), {
    "aria-label": h.NW.string(h.t.cpT0Cg),
    look: l.zxk.Looks.BLANK,
    size: l.zxk.Sizes.NONE,
    wrapperClassName: _.closeButton,
    innerClassName: _.closeButtonInner,
    children: (0, r.jsx)(l.Dio, {
      size: "refresh_sm",
      className: _.closeButtonIcon
    })
  })),
  P = e => {
    let {
      invertTail: t,
      leftOffset: n,
      rightOffset: a
    } = e;
    return (0, r.jsxs)("div", {
      className: i()(_.tail, t ? _.tailPositionInverted : _.tailPositionNormal),
      style: {
        left: n,
        right: a
      },
      children: [(0, r.jsx)("div", {
        className: _.tailSpine
      }), (0, r.jsx)("div", {
        className: i()(_.tailTargetOuter, t ? _.tailTargetPositionInverted : _.tailTargetPositionNormal),
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
            className: _.tailTargetInner
          })
        })
      })]
    })
  },
  A = () => (0, s.e7)([d.Z], () => d.Z.useReducedMotion) ? (0, r.jsx)("img", {
    src: g.Z,
    className: _.orbAsset,
    alt: "Orb"
  }) : (0, r.jsxs)(b.Z, {
    autoPlay: !0,
    loop: !0,
    className: _.orbAsset,
    children: [(0, r.jsx)("source", {
      src: j.Z,
      type: "video/webm"
    }), (0, r.jsx)("img", {
      src: g.Z,
      className: _.orbAsset,
      alt: "Orb"
    })]
  }),
  E = e => {
    let {
      titleText: t,
      descriptionText: n,
      onClose: a,
      tailLeftOffset: o = 22,
      renderTail: i,
      invertCoachmark: s = !1,
      iconComponent: c,
      coachmarkRef: d
    } = e;
    return (0, r.jsxs)("div", {
      className: _.container,
      ref: d,
      children: [(0, r.jsx)(w, {
        onClick: a
      }), c, (0, r.jsxs)("div", {
        className: _.content,
        children: [(0, r.jsx)(l.X6q, {
          className: _.title,
          variant: "heading-md/bold",
          children: t
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          className: _.description,
          children: n
        })]
      }), i && (0, r.jsx)(P, {
        leftOffset: o,
        invertTail: s
      })]
    })
  },
  T = e => {
    var t = x({}, function(e) {
      if (null == e) throw TypeError("Cannot destructure " + e);
      return e
    }(e));
    return (0, r.jsx)(E, v({
      iconComponent: (0, r.jsx)(A, {})
    }, t))
  };

function I(e) {
  let {
    calculateVisibility: t,
    backgroundElementRef: n,
    calculateBaseOffsets: o,
    offsetControlRef: i,
    children: s,
    key: c,
    coachmarkRef: l,
    onGetBackgroundElementDimensions: d
  } = e, [b, u] = a.useState(!1), [f, m] = a.useState(!0), O = a.useCallback(e => {
    let n = t(e);
    n !== f && m(n)
  }, [f, t]), h = a.useCallback(e => {
    O(e);
    let t = e.top < window.innerHeight / 2;
    t !== b && u(t)
  }, [b, O]), _ = a.useCallback(e => {
    let t = o(e),
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
    return (void 0 !== d && d(e), b) ? y(v({}, r), {
      top: e.height + n
    }) : void 0 !== l && null !== l.current ? y(v({}, r), {
      top: -l.current.offsetHeight - n
    }) : y(v({}, r), {
      bottom: e.height + n
    })
  }, [b, o, d, l]);
  return (0, r.jsx)(p.E, {
    backgroundElementRef: n,
    offsetControlRef: i,
    style: {
      visibility: f ? "visible" : "hidden"
    },
    getOffsetsRelativeToElement: _,
    fallbackAbsoluteOffsets: {
      top: 0,
      left: 0
    },
    onGetBoundingRect: h,
    children: a.Children.map(s, e => a.cloneElement(e, {
      invertCoachmark: b
    }))
  }, c)
}