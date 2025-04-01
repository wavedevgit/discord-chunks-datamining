/** Chunk was on 13323 **/
n.d(t, {
  Z: () => l
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  o = n(317220);

function l(e) {
  let {
    message: t,
    error: n,
    onClick: i,
    submitting: l,
    className: c,
    ctaMessage: d
  } = e;
  return (0, r.jsxs)("div", {
    className: s()(o.container, c),
    children: [(0, r.jsxs)("div", {
      className: o.textContainer,
      children: [(0, r.jsx)(a.P4T, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: o.warningIcon
      }), (0, r.jsx)(a.LZC, {
        size: 10,
        horizontal: !0
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(a.LZC, {
          size: 1
        }), (0, r.jsx)(a.Text, {
          className: o.info,
          variant: "text-sm/normal",
          children: t
        }), null != n && (0, r.jsx)(a.Text, {
          className: s()(o.info, o.error),
          variant: "text-sm/normal",
          children: n
        })]
      })]
    }), (0, r.jsx)(a.LZC, {
      size: 16,
      horizontal: !0
    }), (0, r.jsx)(a.zxk, {
      className: o.undoButton,
      color: a.zxk.Colors.LINK,
      look: a.zxk.Looks.LINK,
      size: a.zxk.Sizes.ICON,
      onClick: i,
      submitting: l,
      children: d
    })]
  })
}