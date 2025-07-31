/** Chunk was on 96887 **/
r.d(t, {
  Z: () => u
}), r(388685);
var a = r(255367),
  n = r(73800),
  i = r(120356),
  s = r.n(i),
  o = r(802433),
  l = r(680295),
  c = r(313305),
  d = r(241822);
let u = e => {
  let {
    profileEffectId: t,
    isHovering: r,
    forCollectedModal: i = !1,
    isPurchased: u,
    removeSetHeight: f = !1
  } = e, v = i ? 250 : .1, [p, h] = n.useState(!0);
  return (n.useEffect(() => {
    if (!0 !== i) h(!1);
    else {
      let e = setTimeout(() => {
        h(!1)
      }, v);
      return () => {
        clearTimeout(e)
      }
    }
  }, [v, i]), null != t) ? (0, a.jsxs)("div", {
    className: s()(c.previewContainer, {
      [c.previewContainerAnimation]: i,
      [c.previewContainerSetHeight]: !f
    }),
    children: [(0, a.jsx)("img", {
      src: d,
      alt: " ",
      className: i ? c.previewForCollected : c.preview,
      "aria-hidden": !0
    }), !p && (0, a.jsx)("div", {
      className: u ? c.purchasedEffect : void 0,
      children: (0, a.jsx)(l.Z, {
        profileEffectId: t,
        useThumbnail: !0,
        autoPlay: i,
        restartMethod: o.j.FromStart,
        resetOnHover: !0,
        isHovering: r,
        introDelay: v,
        useOpacityOnHover: !1,
        shopPreview: !0
      })
    })]
  }) : null
}