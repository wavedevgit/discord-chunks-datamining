/** Chunk was on 46746 **/
n.d(t, {
  Z: () => f
}), n(47120);
var r = n(200651),
  l = n(192379),
  i = n(120356),
  s = n.n(i),
  o = n(481060),
  a = n(493773),
  c = n(958707),
  d = n(711597),
  u = n(314872);

function f(e) {
  let {
    title: t,
    scrollerClassName: n,
    scrollerInnerClassName: i,
    children: f
  } = e, h = l.useRef(null), [m, p] = l.useState(!1), [x, g] = l.useState(!1), _ = l.useCallback(() => {
    let {
      current: e
    } = h;
    null != e && (p(!e.isScrolledToTop()), g(!e.isScrolledToBottom()))
  }, []);
  return (0, a.Ng)(() => _()), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s()(u.title, u.scrollWrapper),
      children: [(0, r.jsx)(o.vwX, {
        className: d.formItemTitle,
        children: t
      }), (0, r.jsx)(c.Z, {
        separator: m
      })]
    }), (0, r.jsx)("div", {
      className: n,
      children: (0, r.jsx)(o.Den, {
        ref: h,
        className: s()(u.scrollerInner, i, {
          [u.bottomSeparator]: x
        }),
        onScroll: _,
        children: f
      })
    })]
  })
}