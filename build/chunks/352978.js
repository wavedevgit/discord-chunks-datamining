/** Chunk was on 12416 **/
n.d(t, {
  L: () => f,
  Z: () => m
}), n(47120);
var r, l = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(481060),
  c = n(763520),
  u = n(153066),
  d = n(293106),
  f = ((r = {}).CONTAIN = "contain", r.COVER = "cover", r);
let m = i.memo(function(e) {
  let {
    streamId: t,
    onResize: n,
    wrapperClassName: r,
    videoComponent: o,
    className: f,
    fit: m = "contain",
    mirror: p = !1,
    paused: h = !1,
    streamPreviewURL: v,
    videoSpinnerContext: b,
    userId: g
  } = e, [y, E] = i.useState(!0), [O] = i.useState(() => new c.o("VideoStream"));
  i.useEffect(() => {
    h || (y ? O.onSpinnerStarted() : null != t && O.trackSpinnerDuration(b, g, t))
  }, [y, h, t, O, b, g]);
  let S = i.useCallback(() => {
    E(!1)
  }, []);
  return (0, l.jsxs)("div", {
    className: a()(d.wrapper, r),
    children: [null != t && (0, l.jsx)(o, {
      className: a()(d.video, (0, u.l)(d, "video", m), {
        [d.mirror]: p
      }, f),
      streamId: t,
      onResize: n,
      onReady: S,
      paused: h
    }), h ? null : (0, l.jsx)("div", {
      className: a()(d.previewWrapper, {
        [d.loading]: y
      }),
      children: y && (0, l.jsxs)(i.Fragment, {
        children: [null != v ? (0, l.jsx)("img", {
          src: v,
          alt: "",
          className: d.previewImage
        }) : (0, l.jsx)("div", {
          className: d.emptyPreviewWrapper,
          children: (0, l.jsx)("div", {
            className: d.emptyPreview
          })
        }), (0, l.jsx)(s.$jN, {
          className: d.spinner
        })]
      })
    })]
  })
})