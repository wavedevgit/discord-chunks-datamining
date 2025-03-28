/** Chunk was on 49522 **/
n.d(t, {
  ED: () => O,
  fO: () => S,
  qp: () => I
}), n(47120);
var l = n(200651),
  r = n(192379),
  i = n(512969),
  o = n(442837),
  a = n(704215),
  s = n(540059),
  c = n(605236),
  u = n(703656),
  d = n(664915),
  E = n(432792),
  f = n(981631),
  p = n(921944),
  h = n(46140),
  C = n(388032);

function _(e) {
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
let O = e => (0, l.jsx)(E.tE, _({
    titleText: C.NW.string(C.t.KnWRQU),
    descriptionText: C.NW.format(C.t["xYx+WV"], {
      quantity: 200
    }),
    ctaText: C.NW.string(C.t.v4HbPz)
  }, e)),
  g = [f.Z5c.ME, f.Z5c.COLLECTIBLES_SHOP, f.Z5c.NITRO_HOME],
  S = e => {
    var {
      onClose: t,
      backgroundElementRef: n
    } = e, a = function(e, t) {
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
    }(e, ["onClose", "backgroundElementRef"]);
    let c = r.useRef(null),
      [p, h] = r.useState(22),
      C = r.useRef(null),
      I = (0, s.Q3)("VirtualCurrency: DiscoveryOnboardingCoachmark"),
      T = r.useCallback(e => {
        if (I) {
          let t = window.innerHeight - ((0, E.t4)() + S.COACHMARK_VERTICAL_OFFSET);
          return e.top <= t
        }
        return !0
      }, [I]),
      N = (0, o.e7)([d.Z], () => d.Z.getExpandedFolders().size);
    r.useEffect(() => {
      null !== c.current && c.current.updateElementOffsetsWithPolling()
    }, [N]);
    let b = (0, i.TH)(),
      v = r.useCallback(() => ({
        left: 0,
        verticalOffset: S.COACHMARK_VERTICAL_OFFSET
      }), []),
      m = r.useCallback(e => {
        p !== e.width / 2 && h(Math.floor(e.width / 2) - 1)
      }, [p]);
    return (0, l.jsx)(E.U_, {
      offsetControlRef: c,
      backgroundElementRef: n,
      coachmarkRef: C,
      calculateVisibility: T,
      calculateBaseOffsets: v,
      onGetBackgroundElementDimensions: m,
      children: (0, l.jsx)(O, _({
        onClose: () => {
          g.includes(b.pathname) || (0, u.uL)(f.Z5c.ME), t()
        },
        tailLeftOffset: p,
        coachmarkRef: C
      }, a))
    })
  };
S.COACHMARK_VERTICAL_OFFSET = 10;
let I = e => {
  let {
    isVirtualCurrencyEnabled: t,
    discoveryButtonRef: n,
    scrollToBottom: l
  } = e, i = (0, s.Q3)("VirtualCurrency: DiscoveryOnboardingCoachmark"), o = r.useCallback(() => {
    if (i && null !== n.current) {
      let e = (0, E.t4)();
      n.current.getBoundingClientRect().bottom > window.innerHeight - e && l()
    }
  }, [i, n, l]), {
    shouldShow: u,
    closeCoachmarkIfOpen: d
  } = (0, E.M)({
    onboardingCoachmarkType: "discover",
    onShowCoachmarkHandler: o
  });
  return t ? {
    shouldShow: u,
    questId: h.V6,
    closeCoachmarkIfOpen: d,
    onClose: () => {
      (0, c.EW)(a.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, {
        forceTrack: !0,
        dismissAction: p.L.USER_DISMISS
      }), d()
    },
    onCtaClick: d
  } : {
    shouldShow: !1,
    questId: void 0,
    closeCoachmarkIfOpen: f.dG4,
    onClose: f.dG4,
    onCtaClick: f.dG4
  }
}