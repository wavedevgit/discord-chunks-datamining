/** Chunk was on 27805 **/
i.d(t, {
  A4: () => E,
  b6: () => a.b
}), i(47120);
var n = i(200651),
  r = i(192379),
  o = i(120356),
  s = i.n(o),
  l = i(481060),
  a = i(317257),
  c = i(583478),
  d = i(960919),
  u = i(247489);
let h = () => (0, n.jsx)("img", {
    className: u.notificationBadge,
    src: i(808824),
    alt: ""
  }),
  E = (0, r.forwardRef)(function(e, t) {
    let {
      balance: i,
      balanceWidgetMode: o = a.b.DEFAULT,
      showNotificationBadge: E,
      onClick: g,
      onMouseEnter: _,
      onMouseLeave: L,
      onMouseDown: m,
      className: p
    } = e, C = u.default;
    switch (o) {
      case a.b.HIGHLIGHTED:
        C = u.highlighted;
        break;
      case a.b.SELECTED:
        C = u.selected
    }
    let [f, O] = (0, r.useState)(!1), N = null === i;
    (0, r.useEffect)(() => {
      N && !f && (O(!0), setTimeout(() => {
        O(!1)
      }, 500))
    }, [N, O, f]);
    let b = N || f,
      v = f ? null : i;
    return (0, n.jsx)(l.P3F, {
      onClick: b ? void 0 : g,
      className: u.clickable,
      children: (0, n.jsxs)("span", {
        onMouseEnter: _,
        onMouseLeave: L,
        onMouseDown: m,
        id: "balance-widget-pill",
        ref: t,
        className: s()(u.container, C, p, {
          [u.containerLoading]: b
        }),
        children: [(0, n.jsx)(d.M, {
          loading: b
        }), (0, n.jsx)(c.Z, {
          value: v,
          className: b ? u.counterLoading : void 0
        }), E && (0, n.jsx)(h, {})]
      })
    })
  })