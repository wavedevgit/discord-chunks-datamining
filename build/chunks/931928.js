/** Chunk was on 56650 (33b0f97b2e76d752.js) **/
n.d(t, {
  ED: () => p,
  fO: () => g,
  qp: () => T
}), n(47120);
var l = n(200651),
  r = n(192379),
  i = n(512969),
  a = n(442837),
  o = n(540059),
  s = n(703656),
  c = n(664915),
  u = n(751648),
  d = n(432792),
  E = n(981631),
  f = n(642145),
  C = n(388032),
  _ = n(907254);
let h = () => (0, l.jsx)("div", {
    className: _.svgContainer,
    children: (0, l.jsx)("img", {
      src: n(39017),
      className: _.svg,
      alt: "Quests Icon"
    })
  }),
  p = e => {
    let {
      onClose: t,
      renderTail: n,
      invertCoachmark: r,
      tailLeftOffset: i = 22,
      coachmarkRef: a
    } = e;
    return (0, l.jsx)(d.tE, {
      titleText: C.NW.string(C.t["3B4+wM"]),
      descriptionText: C.NW.format(C.t.V6DQX1, {
        quantity: 200
      }),
      onClose: t,
      renderTail: n,
      tailLeftOffset: i,
      invertCoachmark: r,
      coachmarkRef: a,
      children: (0, l.jsx)(h, {})
    })
  },
  O = [E.Z5c.ME, E.Z5c.COLLECTIBLES_SHOP, E.Z5c.NITRO_HOME],
  g = e => {
    let {
      onClose: t,
      renderTail: n = !1,
      backgroundElementRef: f
    } = e, C = r.useRef(null), [_, h] = r.useState(22), T = r.useRef(null), I = (0, o.Q3)("VirtualCurrency: DiscoveryOnboardingCoachmark"), S = r.useCallback(e => {
      if (I) {
        let t = window.innerHeight - ((0, d.t4)() + g.COACHMARK_VERTICAL_OFFSET);
        return e.top <= t
      }
      return !0
    }, [I]), N = (0, a.e7)([c.Z], () => c.Z.getExpandedFolders().size);
    r.useEffect(() => {
      null !== C.current && C.current.updateElementOffsetsWithPolling()
    }, [N]);
    let A = (0, i.TH)(),
      v = r.useCallback(() => ({
        left: 0,
        verticalOffset: g.COACHMARK_VERTICAL_OFFSET
      }), []),
      b = r.useCallback(e => {
        _ !== e.width / 2 && h(Math.floor(e.width / 2) - 1)
      }, [_]);
    return (0, l.jsx)(d.U_, {
      offsetControlRef: C,
      backgroundElementRef: f,
      coachmarkRef: T,
      calculateVisibility: S,
      calculateBaseOffsets: v,
      onGetBackgroundElementDimensions: b,
      children: (0, l.jsx)(p, {
        onClose: () => {
          O.includes(A.pathname) || (0, s.uL)(E.Z5c.ME), (0, u.U9)(["shop"]), t()
        },
        renderTail: n,
        tailLeftOffset: _,
        coachmarkRef: T
      })
    })
  };
g.COACHMARK_VERTICAL_OFFSET = 10;
let T = e => {
  let {
    isVirtualCurrencyEnabled: t,
    discoveryButtonRef: n,
    scrollToBottom: l
  } = e, i = (0, o.Q3)("VirtualCurrency: DiscoveryOnboardingCoachmark"), a = r.useCallback(() => {
    if (i && null !== n.current) {
      let e = (0, d.t4)();
      n.current.getBoundingClientRect().bottom > window.innerHeight - e && l()
    }
  }, [i, n, l]), {
    shouldShow: s,
    closeCoachmarkIfOpen: c
  } = (0, d.M)({
    onboardingCoachmarkType: "discover",
    onShowCoachmarkHandler: a
  });
  return t ? {
    shouldShow: s,
    closeCoachmarkIfOpen: c,
    questId: f.V
  } : {
    shouldShow: !1,
    closeCoachmarkIfOpen: E.dG4,
    questId: void 0
  }
}