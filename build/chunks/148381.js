/** Chunk was on 79477 **/
n.d(t, {
  Z: () => m
}), n(47120);
var l = n(200651),
  r = n(192379),
  s = n(120356),
  i = n.n(s),
  a = n(481060),
  o = n(493773),
  c = n(958707),
  u = n(382840),
  d = n(26633);

function m(e) {
  let {
    title: t,
    scrollerClassName: n,
    scrollerInnerClassName: s,
    children: m
  } = e, g = r.useRef(null), [h, x] = r.useState(!1), [p, v] = r.useState(!1), f = r.useCallback(() => {
    let {
      current: e
    } = g;
    null != e && (x(!e.isScrolledToTop()), v(!e.isScrolledToBottom()))
  }, []);
  return (0, o.Ng)(() => f()), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: i()(d.title, d.scrollWrapper),
      children: [(0, l.jsx)(a.vwX, {
        className: u.formItemTitle,
        children: t
      }), (0, l.jsx)(c.Z, {
        separator: h
      })]
    }), (0, l.jsx)("div", {
      className: n,
      children: (0, l.jsx)(a.Den, {
        ref: g,
        className: i()(d.scrollerInner, s, {
          [d.bottomSeparator]: p
        }),
        onScroll: f,
        children: m
      })
    })]
  })
}