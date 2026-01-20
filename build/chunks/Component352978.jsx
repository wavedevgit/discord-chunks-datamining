/** Chunk was on 11010 **/
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
    mirror: m = false,
    paused: b = false,
    streamPreviewURL: h,
    videoSpinnerContext: v,
    userId: E,
    streamKey: y
  } = e, [_, O] = l.useState(true);
  (0, u.Z)({
    location: "VideoStream",
    videoSpinnerContext: v,
    userId: E,
    streamId: t,
    loading: _,
    paused: b
  });
  let {
    onReady: C
  } = (0, s.Z)({
    streamId: t,
    userId: E,
    loading: _,
    videoSpinnerContext: v,
    streamKey: y,
    paused: b
  }), S = l.useCallback(() => {
    O(false), C()
  }, [C]);
  return (0, i.jsxs)("div", {
    className: o()(f.wrapper, r),
    children: [null != t && (0, i.jsx)(a, {
      className: o()(f.video, (0, d.l)(f, "video", g), {
        [f.mirror]: m
      }, p),
      streamId: t,
      onResize: n,
      onReady: S,
      paused: b
    }), b ? null : (0, i.jsx)("div", {
      className: o()(f.previewWrapper, {
        [f.loading]: _
      }),
      children: _ && (0, i.jsxs)(l.Fragment, {
        children: [null != h ? (0, i.jsx)("img", {
          src: h,
          alt: "",
          className: f.previewImage
        }) : (0, i.jsx)("div", {
          className: f.emptyPreviewWrapper,
          children: (0, i.jsx)("div", {
            className: f.emptyPreview
          })
        }), (0, i.jsx)(c.$jN, {
          className: f.spinner
        })]
      })
    })]
  })
})