/** Chunk was on 82081 **/
n.d(t, {
  M: () => y,
  VK: () => k,
  WS: () => A,
  t4: () => v,
  tE: () => I
}), n(388685), n(953529);
var r = n(200651),
  o = n(192379),
  a = n(120356),
  i = n.n(a),
  s = n(442837),
  c = n(704215),
  l = n(481060),
  u = n(350810),
  d = n(607070),
  b = n(70097),
  m = n(605236),
  f = n(930153),
  p = n(822857),
  h = n(622562),
  _ = n(937860),
  O = n(921944),
  g = n(973792),
  j = n(447489),
  C = n(484885);

function N() {
  return (N = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}
let v = () => (0, f.Lk)(document.body.style.getPropertyValue("--custom-app-panels-height"), 56) + 8,
  x = {
    discover: c.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
    shop: c.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK
  },
  y = e => {
    let {
      onboardingCoachmarkType: t,
      prevCoachmarksDismissed: n = !0,
      onShowCoachmarkHandler: r
    } = e, a = (0, m.wE)(c.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL), {
      enabled: i
    } = (0, p.W)({
      location: "virtual_currency_onboarding_coachmark"
    }), s = x[t], l = (0, m.wE)(s), u = i && a && n && !l, d = o.useCallback(function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "CLOSE";
      l || (0, m.EW)(x[t], {
        forceTrack: !0,
        dismissAction: "CTA_CLICK" === e ? O.L.TAKE_ACTION : O.L.USER_DISMISS,
        groupName: O.R.VIRTUAL_CURRENCY_ONBOARDING
      })
    }, [l, t]), [b, f] = o.useState(!1);
    return o.useEffect(() => {
      u ? b || ((0, m.kk)(s, {
        groupName: O.R.VIRTUAL_CURRENCY_ONBOARDING
      }), void 0 !== r && r(), f(!0)) : b && f(!1)
    }, [u, r, b, s]), {
      shouldShow: b,
      closeCoachmarkIfOpen: d
    }
  },
  k = e => {
    let {
      invertTail: t,
      leftOffset: n,
      rightOffset: o,
      tailSpineClassName: a,
      tailTargetInnerClassName: s
    } = e;
    return (0, r.jsxs)("div", {
      className: i()(g.tail, t ? g.tailPositionInverted : g.tailPositionNormal),
      style: {
        left: n,
        right: o
      },
      children: [(0, r.jsx)("div", {
        className: i()(g.tailSpine, a)
      }), (0, r.jsx)("div", {
        className: i()(g.tailTargetOuter, t ? g.tailTargetPositionInverted : g.tailTargetPositionNormal),
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
            className: i()(g.tailTargetInner, s)
          })
        })
      })]
    })
  },
  T = e => {
    let {
      customIconSrcs: t
    } = e, n = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), o = void 0 !== t ? t.animated : C.Z, a = void 0 !== t ? t.static : j.Z;
    return n || null == o ? (0, r.jsx)("img", {
      src: a,
      className: g.orbAsset,
      alt: "Orb"
    }) : (0, r.jsxs)(b.Z, {
      autoPlay: !0,
      loop: !0,
      className: g.orbAsset,
      children: [(0, r.jsx)("source", {
        src: C.Z,
        type: "video/webm"
      }), (0, r.jsx)("img", {
        src: j.Z,
        className: g.orbAsset,
        alt: "Orb"
      })]
    })
  },
  w = e => {
    let {
      titleText: t,
      descriptionText: n,
      onClose: o,
      onCtaClick: a,
      ctaText: i,
      iconComponent: s,
      tailLeftOffset: c = 22,
      renderTail: u,
      invertCoachmark: d = !1,
      coachmarkRef: b
    } = e;
    return (0, r.jsxs)("div", {
      className: g.container,
      ref: b,
      children: [(0, r.jsx)(_.s, {
        onClick: o
      }), s, (0, r.jsxs)("div", {
        className: g.content,
        children: [(0, r.jsx)(l.X6q, {
          className: g.title,
          variant: "heading-md/bold",
          children: t
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          className: g.description,
          children: n
        })]
      }), void 0 !== i && (0, r.jsx)(l.zxk, {
        className: g.ctaButton,
        color: l.zxk.Colors.BRAND,
        look: l.zxk.Looks.FILLED,
        onClick: a,
        fullWidth: !0,
        children: i
      }), u && (0, r.jsx)(k, {
        leftOffset: c,
        invertTail: d
      })]
    })
  },
  I = e => {
    var t = N({}, function(e) {
      if (null == e) throw TypeError("Cannot destructure " + e);
      return e
    }(e));
    return (0, r.jsx)(w, function(e) {
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
    }({
      iconComponent: (0, r.jsx)(T, {
        customIconSrcs: t.customIconSrcs
      })
    }, t))
  };

function A(e) {
  let {
    calculateVisibility: t,
    children: n,
    popoutElement: a,
    positionControlRef: i,
    targetElementRef: s,
    defaultCoachmarkPosition: c,
    disableAutoInvert: d,
    onGetTargetElementDimensions: b,
    spacing: m
  } = e, [f, p] = o.useState("bottom" === c), [_, O] = o.useState(!0), [g, j] = o.useState(String(Date.now())), C = (0, u.Z)(), N = o.useCallback(e => {
    let n = t(e);
    n !== _ && O(n)
  }, [_, t]), v = s.current, x = o.useCallback(() => {
    null != i && null != i.current && i.current.updateElementPosition()
  }, [i]);
  o.useEffect(() => (null != v && v.ownerDocument.addEventListener("scroll", x, !0), () => {
    null != v && v.ownerDocument.removeEventListener("scroll", x, !0)
  }), [v, x]);
  let y = o.useCallback(e => {
    let {
      height: t,
      width: n,
      elementBoundingRect: r,
      hasElementPositionChanged: o
    } = e;
    if (null != b && b({
        height: t,
        width: n
      }), null != r) {
      if (N(r), o && j(String(Date.now())), d) return;
      let e = r.top < window.innerHeight / 2;
      if (e === f) return;
      p(e), j(String(Date.now()))
    }
  }, [f, N, b, d]);
  (0, h.fu)({
    onGetElementDimensionsAndBoundingRect: y,
    positionControlRef: i,
    shouldPollPositionOnMount: !0,
    targetElementRef: s
  });
  let k = o.Children.map(a, e => o.cloneElement(e, {
      invertCoachmark: f
    })),
    T = o.useMemo(() => d ? null != c ? c : "bottom" : f ? "bottom" : "top", [d, c, f]),
    w = _ && !C;
  return (0, r.jsx)(l.yRy, {
    autoInvert: !1,
    renderPopout: () => k,
    position: T,
    align: "left",
    shouldShow: w,
    spacing: m,
    positionKey: g,
    animation: l.yRy.Animation.TRANSLATE,
    targetElementRef: s,
    children: () => n
  })
}