/** Chunk was on 13323 **/
n.d(t, {
  Z: () => u
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  o = n(481060),
  l = n(388032),
  c = n(667415);
let d = i.createContext({
  isOpen: !1,
  toggleOpen: () => {}
});

function u(e) {
  let {
    children: t
  } = e, [n, s] = i.useReducer(e => !e, !1), a = i.useMemo(() => ({
    isOpen: n,
    toggleOpen: s
  }), [n]);
  return (0, r.jsx)(d.Provider, {
    value: a,
    children: t(n)
  })
}
u.Toggle = function(e) {
  let {
    className: t,
    text: n
  } = e, {
    isOpen: s,
    toggleOpen: u
  } = i.useContext(d), m = s ? o.u04 : o.CJ0, g = null != n ? n : s ? l.NW.string(l.t.fgq1go) : l.NW.string(l.t.XJuakJ);
  return (0, r.jsxs)(o.P3F, {
    className: a()(c.toggle, t),
    onClick: u,
    children: [(0, r.jsx)(o.Text, {
      variant: "heading-sm/semibold",
      tag: "div",
      color: "currentColor",
      children: g
    }), (0, r.jsx)(m, {
      size: "sm",
      color: "currentColor"
    })]
  })
}