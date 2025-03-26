/** Chunk was on 52272 **/
n.d(t, {
  Z: () => s
});
var r = n(200651),
  i = n(657707),
  o = n(793030),
  a = n(834129),
  l = n(84848);

function s(e) {
  let {
    channel: t,
    content: n,
    subtitle: s,
    compact: c,
    action: u
  } = e;
  return (0, r.jsxs)(a.Z, {
    iconNode: t.isGroupDM() ? (0, r.jsx)(i.Dkj, {
      size: "md",
      color: "var(--premium-tier-2-purple-for-gradients-2)"
    }) : (0, r.jsx)(i.vdY, {
      size: "md",
      color: "var(--premium-tier-2-purple-for-gradients-2)"
    }),
    iconContainerClassName: l.iconContainer,
    compact: c,
    contentClassName: l.content,
    children: [(0, r.jsxs)("div", {
      className: l.textContainer,
      children: [(0, r.jsx)(o.xv, {
        variant: "text-md/medium",
        color: "header-primary",
        children: n
      }), null != s && (0, r.jsx)(o.xv, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: s
      })]
    }), u]
  })
}