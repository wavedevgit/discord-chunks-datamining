/** Chunk was on 51724 **/
n.d(t, {
  Z: () => p
}), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(913527),
  l = n.n(a),
  o = n(481060),
  c = n(55935),
  d = n(955204),
  u = n(674680),
  m = n(791134);

function p(e) {
  let {
    achievementId: t,
    dateUnlocked: n
  } = e, i = (0, d.oX)(t);
  if (null == i) return null;
  let a = null != n,
    {
      name: p,
      description: g,
      hideDescriptionUntilUnlock: h,
      onAction: f
    } = i,
    x = h && !a,
    b = a ? "header-primary" : "text-muted",
    N = a ? "header-secondary" : "text-muted",
    _ = l()(n),
    E = null != f && a,
    C = E ? o.P3F : "div";
  return (0, r.jsxs)(C, {
    className: s()(m.container, E && m.actionable),
    onClick: () => {
      E && f()
    },
    children: [(0, r.jsx)("div", {
      className: m.iconContainer,
      children: (0, r.jsx)(u.Z, {
        achievementId: t,
        size: u.Z.Sizes.SIZE_40,
        unlocked: a
      })
    }), (0, r.jsxs)("div", {
      className: m.nameContainer,
      children: [null != n && (0, r.jsx)(o.Text, {
        variant: "text-xxs/semibold",
        color: "text-muted",
        className: m.unlocked,
        children: (0, c.Y4)(_)
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: b,
        children: p()
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: N,
        children: x ? "?????" : g()
      })]
    })]
  })
}