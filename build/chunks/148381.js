/** Chunk was on 79477 **/
n.d(t, {
  Z: () => m
}), n(47120);
var r = n(200651),
  l = n(192379),
  s = n(120356),
  i = n.n(s),
  a = n(481060),
  o = n(493773),
  c = n(958707),
  u = n(711597),
  d = n(314872);

function m(e) {
  let {
    title: t,
    scrollerClassName: n,
    scrollerInnerClassName: s,
    children: m
  } = e, p = l.useRef(null), [h, g] = l.useState(!1), [x, v] = l.useState(!1), f = l.useCallback(() => {
    let {
      current: e
    } = p;
    null != e && (g(!e.isScrolledToTop()), v(!e.isScrolledToBottom()))
  }, []);
  return (0, o.Ng)(() => f()), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: i()(d.title, d.scrollWrapper),
      children: [(0, r.jsx)(a.vwX, {
        className: u.formItemTitle,
        children: t
      }), (0, r.jsx)(c.Z, {
        separator: h
      })]
    }), (0, r.jsx)("div", {
      className: n,
      children: (0, r.jsx)(a.Den, {
        ref: p,
        className: i()(d.scrollerInner, s, {
          [d.bottomSeparator]: x
        }),
        onScroll: f,
        children: m
      })
    })]
  })
}