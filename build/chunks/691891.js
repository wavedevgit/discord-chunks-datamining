/** Chunk was on 55697 **/
n.d(t, {
  Z: () => c
});
var r = n(200651);
n(192379);
var i = n(120356),
  l = n.n(i),
  o = n(481060),
  a = n(447651);
let s = e => {
  let {
    className: t,
    onDismiss: n,
    "aria-label": i
  } = e;
  return (0, r.jsx)(o.zxk, {
    look: o.zxk.Looks.BLANK,
    size: o.zxk.Sizes.NONE,
    onClick: n,
    className: l()(a.dismissButton, t),
    "aria-label": i,
    children: (0, r.jsx)(o.Dio, {
      size: "xs",
      color: "currentColor",
      colorClass: a.dismissIcon
    })
  })
};
s.displayName = "DismissButton";
let c = s