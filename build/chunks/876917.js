/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => _
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(802433),
  l = n(680295),
  c = n(175536),
  u = n(241822);
let d = .1,
  f = 250,
  _ = e => {
    let {
      profileEffectId: t,
      isHovering: n,
      forCollectedModal: o = !1,
      isPurchased: _,
      removeSetHeight: p = !1
    } = e, h = o ? f : d, [g, m] = i.useState(!0);
    return (i.useEffect(() => {
      if (!0 !== o) m(!1);
      else {
        let e = setTimeout(() => {
          m(!1)
        }, h);
        return () => {
          clearTimeout(e)
        }
      }
    }, [h, o]), null != t) ? (0, r.jsxs)("div", {
      className: a()(c.previewContainer, {
        [c.previewContainerAnimation]: o,
        [c.previewContainerSetHeight]: !p
      }),
      children: [(0, r.jsx)("img", {
        src: u,
        alt: " ",
        className: o ? c.previewForCollected : c.preview,
        "aria-hidden": !0
      }), !g && (0, r.jsx)("div", {
        className: _ ? c.purchasedEffect : void 0,
        children: (0, r.jsx)(l.Z, {
          profileEffectId: t,
          useThumbnail: !0,
          autoPlay: o,
          restartMethod: s.j.FromStart,
          resetOnHover: !0,
          isHovering: n,
          introDelay: h,
          useOpacityOnHover: !1,
          shopPreview: !0
        })
      })]
    }) : null
  }