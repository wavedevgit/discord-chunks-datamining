/** Chunk was on 96888 **/
n.d(t, {
  Z: () => c
});
var o = n(200651);
n(192379);
var i = n(120356),
  a = n.n(i),
  s = n(481060),
  l = n(259580),
  r = n(366089);

function c(e) {
  let {
    options: t,
    onClick: n,
    className: i,
    hideCaret: c
  } = e;
  return (0, o.jsx)("div", {
    className: a()(r.root, i),
    children: t.map((e, t) => (0, o.jsxs)(s.P3F, {
      onClick: () => n(e),
      className: a()(r.option, e.className),
      children: [(0, o.jsx)(s.Text, {
        className: r.text,
        color: "none",
        variant: "text-md/normal",
        children: e.label
      }), !(null == c ? void 0 : c(e)) && (0, o.jsx)(l.Z, {
        className: r.caret,
        direction: l.Z.Directions.RIGHT
      })]
    }, t))
  })
}