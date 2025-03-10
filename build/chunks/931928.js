/** Chunk was on 45847 **/
n.d(t, {
  ED: () => h,
  fO: () => C,
  qp: () => p
}), n(47120);
var l = n(200651),
  r = n(192379),
  i = n(512969),
  o = n(442837),
  a = n(540059),
  s = n(703656),
  c = n(664915),
  u = n(432792),
  d = n(981631),
  E = n(642145),
  f = n(388032);
let h = e => {
    let {
      onClose: t,
      renderTail: n,
      invertCoachmark: r,
      tailLeftOffset: i = 22,
      coachmarkRef: o
    } = e;
    return (0, l.jsx)(u.tE, {
      titleText: f.NW.string(f.t["3B4+wM"]),
      descriptionText: f.NW.format(f.t.V6DQX1, {
        quantity: 200
      }),
      onClose: t,
      renderTail: n,
      tailLeftOffset: i,
      invertCoachmark: r,
      coachmarkRef: o
    })
  },
  _ = [d.Z5c.ME, d.Z5c.COLLECTIBLES_SHOP, d.Z5c.NITRO_HOME],
  C = e => {
    let {
      onClose: t,
      renderTail: n = !1,
      backgroundElementRef: E
    } = e, f = r.useRef(null), [p, g] = r.useState(22), O = r.useRef(null), T = (0, a.Q3)("VirtualCurrency: DiscoveryOnboardingCoachmark"), I = r.useCallback(e => {
      if (T) {
        let t = window.innerHeight - ((0, u.t4)() + C.COACHMARK_VERTICAL_OFFSET);
        return e.top <= t
      }
      return !0
    }, [T]), S = (0, o.e7)([c.Z], () => c.Z.getExpandedFolders().size);
    r.useEffect(() => {
      null !== f.current && f.current.updateElementOffsetsWithPolling()
    }, [S]);
    let N = (0, i.TH)(),
      A = r.useCallback(() => ({
        left: 0,
        verticalOffset: C.COACHMARK_VERTICAL_OFFSET
      }), []),
      v = r.useCallback(e => {
        p !== e.width / 2 && g(Math.floor(e.width / 2) - 1)
      }, [p]);
    return (0, l.jsx)(u.U_, {
      offsetControlRef: f,
      backgroundElementRef: E,
      coachmarkRef: O,
      calculateVisibility: I,
      calculateBaseOffsets: A,
      onGetBackgroundElementDimensions: v,
      children: (0, l.jsx)(h, {
        onClose: () => {
          _.includes(N.pathname) || (0, s.uL)(d.Z5c.ME), t()
        },
        renderTail: n,
        tailLeftOffset: p,
        coachmarkRef: O
      })
    })
  };
C.COACHMARK_VERTICAL_OFFSET = 10;
let p = e => {
  let {
    isVirtualCurrencyEnabled: t,
    discoveryButtonRef: n,
    scrollToBottom: l
  } = e, i = (0, a.Q3)("VirtualCurrency: DiscoveryOnboardingCoachmark"), o = r.useCallback(() => {
    if (i && null !== n.current) {
      let e = (0, u.t4)();
      n.current.getBoundingClientRect().bottom > window.innerHeight - e && l()
    }
  }, [i, n, l]), {
    shouldShow: s,
    closeCoachmarkIfOpen: c
  } = (0, u.M)({
    onboardingCoachmarkType: "discover",
    onShowCoachmarkHandler: o
  });
  return t ? {
    shouldShow: s,
    closeCoachmarkIfOpen: c,
    questId: E.V
  } : {
    shouldShow: !1,
    closeCoachmarkIfOpen: d.dG4,
    questId: void 0
  }
}