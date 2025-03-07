/** Chunk was on web.js **/
"use strict";
n.d(t, {
  A4: () => p,
  b6: () => l.b
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(481060),
  l = n(317257),
  c = n(583478),
  u = n(960919),
  d = n(816202);
let f = () => (0, r.jsx)("img", {
    className: d.notificationBadge,
    src: n(808824),
    alt: ""
  }),
  _ = "balance-widget-pill",
  p = (0, i.forwardRef)(function(e, t) {
    let {
      balance: n,
      balanceWidgetMode: o = l.b.DEFAULT,
      showNotificationBadge: p,
      onClick: h,
      onMouseEnter: m,
      onMouseLeave: g,
      onMouseDown: E,
      className: v
    } = e, b = d.default;
    switch (o) {
      case l.b.HIGHLIGHTED:
        b = d.highlighted;
        break;
      case l.b.SELECTED:
        b = d.selected
    }
    let [y, O] = (0, i.useState)(!1), I = null === n;
    (0, i.useEffect)(() => {
      I && !y && (O(!0), setTimeout(() => {
        O(!1)
      }, 500))
    }, [I, O, y]);
    let S = I || y,
      T = y ? null : n;
    return (0, r.jsx)(s.P3F, {
      onClick: S ? void 0 : h,
      className: d.clickable,
      children: (0, r.jsxs)("span", {
        onMouseEnter: m,
        onMouseLeave: g,
        onMouseDown: E,
        id: _,
        ref: t,
        className: a()(d.container, b, v, {
          [d.containerLoading]: S
        }),
        children: [(0, r.jsx)(u.M, {
          loading: S
        }), (0, r.jsx)(c.Z, {
          value: T,
          className: S ? d.counterLoading : void 0
        }), p && (0, r.jsx)(f, {})]
      })
    })
  })