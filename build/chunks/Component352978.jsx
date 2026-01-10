/** Chunk was on 69813 **/
/** chunk id: 352978, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => p,
  Z: () => g
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk885524 = require("./885524.js"),
  Chunk38755 = require("./38755.js"),
  Chunk153066 = require("./153066.js"),
  Chunk542133 = require("./542133.js"),
  p = ((r = {}).CONTAIN = "contain", r.COVER = "cover", r);
let g = Chunk473749.memo(function(e) {
  let {
    streamId: t,
    onResize: n,
    wrapperClassName: r,
    videoComponent: a,
    className: p,
    fit: g = "contain",
    mirror: b = false,
    paused: m = false,
    streamPreviewURL: h,
    videoSpinnerContext: E,
    userId: v,
    streamKey: _
  } = e, [y, O] = i.useState(true);
  (0, u.Z)({
    location: "VideoStream",
    videoSpinnerContext: E,
    userId: v,
    streamId: t,
    loading: y,
    paused: m
  });
  let {
    onReady: C
  } = (0, s.Z)({
    streamId: t,
    userId: v,
    loading: y,
    videoSpinnerContext: E,
    streamKey: _,
    paused: m
  }), S = i.useCallback(() => {
    O(false), C()
  }, [C]);
  return (0, l.jsxs)("div", {
    className: o()(f.wrapper, r),
    children: [null != t && (0, l.jsx)(a, {
      className: o()(f.video, (0, d.l)(f, "video", g), {
        [f.mirror]: b
      }, p),
      streamId: t,
      onResize: n,
      onReady: S,
      paused: m
    }), m ? null : (0, l.jsx)("div", {
      className: o()(f.previewWrapper, {
        [f.loading]: y
      }),
      children: y && (0, l.jsxs)(i.Fragment, {
        children: [null != h ? (0, l.jsx)("img", {
          src: h,
          alt: "",
          className: f.previewImage
        }) : (0, l.jsx)("div", {
          className: f.emptyPreviewWrapper,
          children: (0, l.jsx)("div", {
            className: f.emptyPreview
          })
        }), (0, l.jsx)(c.$jN, {
          className: f.spinner
        })]
      })
    })]
  })
})