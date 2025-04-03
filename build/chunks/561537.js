/** Chunk was on 10451 **/
n.d(t, {
  l: () => l
});
var r = n(200651),
  i = n(192379),
  s = n(557533),
  a = n.n(s),
  o = n(293302);

function l(e) {
  let {
    className: t,
    header: n,
    headerClassName: s,
    children: l
  } = e, c = i.useMemo(() => {
    let e = !1;
    return i.Children.forEach(l, t => {
      null != t && (e = !0)
    }), e
  }, [l]);
  return (0, r.jsxs)("div", {
    className: a()(o.wrapper, t),
    children: [(0, r.jsx)("div", {
      className: a()(o.header, s),
      children: n
    }), c && (0, r.jsx)("div", {
      className: o.content,
      children: l
    })]
  })
}