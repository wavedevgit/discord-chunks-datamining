/** Chunk was on 94904 **/
r.d(t, {
  b: () => a
});
var n = r(255367),
  o = r(73800),
  c = r(120356),
  i = r.n(c),
  l = r(481060),
  s = r(135169);

function a(e) {
  let {
    chunks: t,
    columns: r,
    className: c
  } = e, a = o.useMemo(() => ({
    "--secure-frames-columns": r
  }), [r]);
  return null == t ? (0, n.jsx)("div", {
    className: s.loading,
    children: (0, n.jsx)(l.$jN, {})
  }) : (0, n.jsx)("div", {
    style: a,
    className: i()(s.code, c),
    children: t.map((e, t) => (0, n.jsx)("div", {
      className: i()(s.chunk, {
        [s.divider]: t > r - 1
      }),
      children: (0, n.jsx)(l.Text, {
        className: s.codeText,
        variant: "code",
        color: "text-default",
        children: e
      })
    }, "".concat(e, "-").concat(t)))
  })
}