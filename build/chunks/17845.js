/** Chunk was on 37697 **/
n.d(t, {
  Z: () => p
}), n(266796);
var r = n(200651),
  i = n(192379),
  a = n(120356),
  l = n.n(a),
  o = n(780384),
  s = n(481060),
  c = n(410030),
  d = n(395542);

function u(e) {
  let {
    title: t
  } = e;
  return (0, r.jsx)(s.X6q, {
    className: l()(d.title, d.uppercase),
    variant: "display-lg",
    color: "header-primary",
    children: t
  })
}

function p(e) {
  let {
    title: t,
    description: n,
    button: a,
    className: p,
    children: m
  } = e, h = (0, c.ZP)(), g = (0, o.wj)(h), _ = i.useMemo(() => Array.isArray(t) ? t.map((e, t) => (0, r.jsx)(u, {
    title: e
  }, t)) : (0, r.jsx)(u, {
    title: t
  }), [t]);
  return (0, r.jsxs)("div", {
    className: l()(d.container, p),
    children: [(0, r.jsx)("div", {
      className: d.content,
      children: (0, r.jsxs)("div", {
        className: d.textContainer,
        children: [_, null != n && (0, r.jsx)(s.Text, {
          className: d.description,
          variant: "text-md/medium",
          color: g ? "text-muted" : "header-primary",
          children: n
        }), null != a && (0, r.jsx)("div", {
          className: d.buttonContainer,
          children: a
        })]
      })
    }), m]
  })
}