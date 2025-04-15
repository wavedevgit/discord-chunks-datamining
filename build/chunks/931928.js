/** Chunk was on 64213 **/
n.d(t, {
  ED: () => _,
  fO: () => x,
  qp: () => E
}), n(388685);
var r = n(200651),
  i = n(192379),
  s = n(512969),
  a = n(442837),
  l = n(704215),
  o = n(540059),
  c = n(605236),
  d = n(703656),
  u = n(664915),
  m = n(432792),
  g = n(981631),
  p = n(921944),
  h = n(46140),
  f = n(388032);

function b(e) {
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
let _ = e => (0, r.jsx)(m.tE, b({
    titleText: f.NW.string(f.t.KnWRQU),
    descriptionText: f.NW.format(f.t["xYx+WV"], {
      quantity: 200
    }),
    ctaText: f.NW.string(f.t.v4HbPz),
    renderTail: !0
  }, e)),
  N = [g.Z5c.ME, g.Z5c.COLLECTIBLES_SHOP, g.Z5c.NITRO_HOME],
  x = e => {
    var {
      onClose: t,
      onCtaClick: n,
      targetElementRef: l,
      isGuildBarScrolling: c,
      children: p
    } = e, h = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          s = Object.keys(e);
        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["onClose", "onCtaClick", "targetElementRef", "isGuildBarScrolling", "children"]);
    let f = i.useRef(null),
      [E, j] = i.useState(22),
      C = i.useRef(null),
      O = (0, o.Q3)("VirtualCurrency: DiscoveryOnboardingCoachmark"),
      S = i.useCallback(e => {
        if (O) {
          let t = window.innerHeight - ((0, m.t4)() + x.COACHMARK_VERTICAL_OFFSET);
          return e.top <= t
        }
        return !0
      }, [O]),
      v = (0, a.e7)([u.Z], () => u.Z.getExpandedFolders().size);
    i.useEffect(() => {
      null !== f.current && f.current.updateElementPositionWithPolling()
    }, [v]), i.useEffect(() => {
      null !== f.current && f.current.updateElementPosition()
    }, [c]);
    let T = (0, s.TH)().pathname,
      I = i.useCallback(() => {
        N.includes(T) || (0, d.uL)(g.Z5c.ME), n()
      }, [T, n]),
      y = i.useCallback(e => {
        let t = Math.floor(e.width / 2) - 2;
        E !== t && j(t)
      }, [E]);
    return (0, r.jsx)(m.WS, {
      positionControlRef: f,
      targetElementRef: l,
      coachmarkRef: C,
      calculateVisibility: S,
      onGetTargetElementDimensions: y,
      defaultCoachmarkPosition: "bottom",
      popoutElement: (0, r.jsx)(_, b({
        onClose: t,
        onCtaClick: I,
        tailLeftOffset: E,
        coachmarkRef: C
      }, h)),
      spacing: 8,
      children: p
    })
  };
x.COACHMARK_VERTICAL_OFFSET = 10;
let E = e => {
  let {
    isVirtualCurrencyEnabled: t,
    discoveryButtonRef: n,
    scrollToBottom: r
  } = e, s = (0, o.Q3)("VirtualCurrency: DiscoveryOnboardingCoachmark"), a = i.useCallback(() => {
    if (s && null !== n.current) {
      let e = (0, m.t4)();
      n.current.getBoundingClientRect().bottom > window.innerHeight - e && r()
    }
  }, [s, n, r]), {
    shouldShow: d,
    closeCoachmarkIfOpen: u
  } = (0, m.M)({
    onboardingCoachmarkType: "discover",
    onShowCoachmarkHandler: a
  }), f = i.useCallback(() => {
    (0, c.EW)(l.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, {
      dismissAction: p.L.INDIRECT_ACTION,
      groupName: p.R.VIRTUAL_CURRENCY_ONBOARDING
    }), u()
  }, [u]), b = i.useCallback(() => u("CTA_CLICK"), [u]);
  return t ? {
    shouldShow: d,
    questId: h.V6,
    closeCoachmarkIfOpen: u,
    onClose: f,
    onCtaClick: b
  } : {
    shouldShow: !1,
    questId: void 0,
    closeCoachmarkIfOpen: g.dG4,
    onClose: g.dG4,
    onCtaClick: g.dG4
  }
}