/** Chunk was on 25222 **/
t.d(n, {
  Z: () => c
}), t(47120);
var o = t(200651),
  r = t(192379),
  a = t(558522),
  i = t(200135);

function c(e) {
  let {
    imageBackground: n,
    applicationName: t,
    imageClassName: c,
    imageNotFoundClassName: l
  } = e, [d, s] = r.useState(!1);
  return "not-found" === n.state || d ? (0, o.jsx)("div", {
    className: l,
    children: (0, o.jsx)(a.Z, {
      className: i.brokenImageIcon
    })
  }) : "loading" === n.state ? null : (0, o.jsx)("img", {
    alt: t,
    className: c,
    src: n.url,
    onError: () => s(!0)
  })
}