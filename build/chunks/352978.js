/** Chunk was on 75862 **/
n.d(t, {
  L: () => g,
  Z: () => h
}), n(47120);
var r, l = n(200651),
  i = n(192379),
  a = n(120356),
  o = n.n(a),
  s = n(46973),
  u = n(846519),
  c = n(481060),
  d = n(763520),
  f = n(878001),
  m = n(70956),
  p = n(153066),
  E = n(93019),
  g = ((r = {}).CONTAIN = "contain", r.COVER = "cover", r);
let v = 20 * m.Z.Millis.SECOND,
  h = i.memo(function(e) {
    let {
      streamId: t,
      onResize: n,
      wrapperClassName: r,
      videoComponent: a,
      className: m,
      fit: g = "contain",
      mirror: h = !1,
      paused: S = !1,
      streamPreviewURL: b,
      videoSpinnerContext: y,
      userId: O,
      streamKey: Z
    } = e, [I, j] = i.useState(!0), [x] = i.useState(() => new d.o("VideoStream")), _ = i.useRef(new u.V7), N = y === d.m.SELF_STREAM || y === d.m.REMOTE_STREAM ? s.Yn.STREAM : s.Yn.DEFAULT;
    i.useEffect(() => {
      if (S || null == t) return;
      let e = _.current;
      return e.start(v, () => {
        (0, f.K)(t, O, N, Z)
      }), () => {
        e.stop()
      }
    }, [S, t, N, Z, O]), i.useEffect(() => {
      S || (I ? x.onSpinnerStarted() : null != t && x.trackSpinnerDuration(y, O, t))
    }, [I, S, t, x, y, O]);
    let w = i.useCallback(() => {
      j(!1), _.current.stop(), (0, f.w)(N, O)
    }, [O, N]);
    return (0, l.jsxs)("div", {
      className: o()(E.wrapper, r),
      children: [null != t && (0, l.jsx)(a, {
        className: o()(E.video, (0, p.l)(E, "video", g), {
          [E.mirror]: h
        }, m),
        streamId: t,
        onResize: n,
        onReady: w,
        paused: S
      }), S ? null : (0, l.jsx)("div", {
        className: o()(E.previewWrapper, {
          [E.loading]: I
        }),
        children: I && (0, l.jsxs)(i.Fragment, {
          children: [null != b ? (0, l.jsx)("img", {
            src: b,
            alt: "",
            className: E.previewImage
          }) : (0, l.jsx)("div", {
            className: E.emptyPreviewWrapper,
            children: (0, l.jsx)("div", {
              className: E.emptyPreview
            })
          }), (0, l.jsx)(c.$jN, {
            className: E.spinner
          })]
        })
      })]
    })
  })