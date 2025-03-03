/** Chunk was on 76030 **/
n.d(t, {
  Z: () => l
}), n(47120);
var r = n(200651),
  i = n(192379),
  a = n(558522),
  o = n(200135);

function l(e) {
  let {
    imageBackground: t,
    applicationName: n,
    imageClassName: l,
    imageNotFoundClassName: s
  } = e, [c, d] = i.useState(!1);
  return "not-found" === t.state || c ? (0, r.jsx)("div", {
    className: s,
    children: (0, r.jsx)(a.Z, {
      className: o.brokenImageIcon
    })
  }) : "loading" === t.state ? null : (0, r.jsx)("img", {
    alt: n,
    className: l,
    src: t.url,
    onError: () => d(!0)
  })
}