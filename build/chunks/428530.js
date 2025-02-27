/** Chunk was on 93886 **/
n.d(t, {
  Z: () => f
}), n(47120), n(301563);
var r = n(200651);
n(192379);
var a = n(189223),
  i = n(692547),
  l = n(410030),
  o = n(95398),
  s = n(981631),
  c = n(710662);
let d = {
  base00: i.Z.colors.BACKGROUND_SECONDARY.css,
  base03: i.Z.colors.TEXT_WARNING.css,
  base07: i.Z.colors.TEXT_NORMAL.css,
  base08: i.Z.colors.TEXT_MUTED.css,
  base09: i.Z.colors.TEXT_POSITIVE.css,
  base0B: i.Z.colors.TEXT_WARNING.css,
  base0D: i.Z.colors.TEXT_BRAND.css
};

function u(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) t[n] = r;
  return t
}
let m = u(d),
  h = u(d);

function x(e) {
  return s.Jn9.test(e) ? (0, r.jsx)(o.ZP, {
    type: o.ZP.Types.TEXT,
    children: () => (0, r.jsx)(r.Fragment, {
      children: e
    })
  }) : e
}

function f(e) {
  let {
    data: t
  } = e, n = (0, l.ZP)();
  return (0, r.jsx)("div", {
    className: c.inspectorWrapper,
    children: (0, r.jsx)(a.L, {
      data: t,
      theme: "light" === n ? h : m,
      invertTheme: !1,
      valueRenderer: x,
      shouldExpandNode: () => !0
    })
  })
}