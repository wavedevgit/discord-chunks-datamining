/** Chunk was on 10451 **/
n.d(t, {
  Z: () => c
}), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(600164),
  o = n(339325),
  l = n(685786);

function c(e) {
  let {
    features: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.map((e, t) => (0, r.jsxs)(a.Z, {
      align: a.Z.Align.CENTER,
      className: s()(l.marginTop20, o.feature, {
        [o.featureBorder]: 0 !== t
      }),
      children: [null != e.icon ? (0, r.jsx)("div", {
        className: s()(o.icon, e.icon)
      }) : null, (0, r.jsxs)("div", {
        children: [null != e.title ? (0, r.jsx)("div", {
          className: s()(l.marginBottom8, o.title),
          children: e.title
        }) : null, (0, r.jsx)("div", {
          className: o.description,
          children: e.description
        })]
      })]
    }, t))
  })
}