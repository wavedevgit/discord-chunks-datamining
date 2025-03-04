/** Chunk was on 12416 **/
n.d(t, {
  Z: () => c
});
var r = n(200651);
n(192379);
var l = n(120356),
  i = n.n(l),
  o = n(481060),
  a = n(622263);
let s = e => {
  let {
    className: t,
    onDismiss: n,
    "aria-label": l
  } = e;
  return (0, r.jsx)(o.zxk, {
    look: o.zxk.Looks.BLANK,
    size: o.zxk.Sizes.NONE,
    onClick: n,
    className: i()(a.dismissButton, t),
    "aria-label": l,
    children: (0, r.jsx)(o.Dio, {
      size: "xs",
      color: "currentColor",
      colorClass: a.dismissIcon
    })
  })
};
s.displayName = "DismissButton";
let c = s