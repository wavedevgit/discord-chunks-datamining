/** Chunk was on 51724 **/
n.d(t, {
  V9: () => O,
  ek: () => C
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(512969),
  o = n(351773),
  c = n(100527),
  d = n(906732),
  u = n(335131),
  m = n(341907),
  p = n(23547),
  g = n(790542),
  h = n(317257),
  f = n(120786),
  x = n(970815),
  b = n(82856),
  N = n(981631),
  _ = n(215023),
  E = n(388032),
  j = n(577956);
let C = {
    START: j.alignLeft,
    END: j.alignRight
  },
  O = e => {
    let {
      showNotificationBadge: t,
      ctaText: n,
      ctaOnClick: s,
      isCoachmarkEnabled: O = !0,
      linkText: v = E.NW.string(E.t["7f4H7O"]),
      linkTo: S,
      cardAlignment: T = C.START,
      className: I
    } = e, {
      balance: y
    } = (0, g.A)(), [A, P] = i.useState(h.b.DEFAULT), [R, D] = i.useState(!1), [Z, w] = i.useState(!1), k = (0, l.TH)(), {
      analyticsLocations: W
    } = (0, d.ZP)(c.Z.VIRTUAL_CURRENCY_BALANCE_WIDGET), L = i.useRef(null), {
      shouldOpen: B
    } = (0, b.lJ)({
      backgroundElementRef: L
    }), {
      shouldOpen: M
    } = (0, p.Mm)({
      backgroundElementRef: L,
      isCoachmarkEnabled: O,
      onCloseCallback: N.dG4,
      onClickPill: N.dG4,
      linkOnClick: () => {
        (0, m.navigateToQuestHome)()
      },
      ctaOnClick: () => {
        k.pathname !== N.Z5c.COLLECTIBLES_SHOP && (0, u.mK)({
          openInLayer: !1,
          tab: _.AW.ORBS,
          analyticsLocations: W,
          analyticsSource: c.Z.VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK
        })
      }
    }), U = M || B;
    i.useEffect(() => {
      if (!O) return;
      let e = (0, p.wH)();
      (0, b.Pe)() || e || U ? (w(!0), D(!1)) : w(!1)
    }, [O, U]);
    let V = i.useCallback(() => {
        let e = !R;
        P(e ? h.b.SELECTED : h.b.DEFAULT), D(e)
      }, [R]),
      G = i.useCallback(() => {
        R && V()
      }, [R, V]),
      F = (0, o.Z)(null, G);
    return (0, r.jsxs)("div", {
      className: a()(j.container, I, {
        [j.hidden]: Z,
        [j.visible]: !Z
      }),
      children: [(0, r.jsx)(x.A4, {
        ref: L,
        balance: y,
        balanceWidgetMode: U ? h.b.DEFAULT : A,
        onMouseDown: e => {
          e.stopPropagation()
        },
        onClick: V,
        showNotificationBadge: t
      }), R && (0, r.jsx)("div", {
        className: a()(j.cardContainer, T, {
          [j.hidden]: Z,
          [j.visible]: !Z
        }),
        ref: F,
        children: (0, r.jsx)(f.L, {
          ctaText: n,
          ctaOnClick: () => {
            V(), s()
          },
          linkText: v,
          linkTo: S
        })
      })]
    })
  };
O.CardAlignment = C