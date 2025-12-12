/** Chunk was on 48615 **/
/** chunk id: 352978, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => p,
  Z: () => b
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
let b = Chunk473749.memo(function(e) {
  let {
    streamId: t,
    onResize: n,
    wrapperClassName: r,
    videoComponent: a,
    className: p,
    fit: b = "contain",
    mirror: m = false,
    paused: g = false,
    streamPreviewURL: v,
    videoSpinnerContext: h,
    userId: E,
    streamKey: _
  } = e, [y, S] = l.useState(true);
  (0, u.Z)({
    location: "VideoStream",
    videoSpinnerContext: h,
    userId: E,
    streamId: t,
    loading: y,
    paused: g
  });
  let {
    onReady: O
  } = (0, s.Z)({
    streamId: t,
    userId: E,
    loading: y,
    videoSpinnerContext: h,
    streamKey: _,
    paused: g
  }), C = l.useCallback(() => {
    S(false), O()
  }, [O]);
  return (0, i.jsxs)("div", {
    className: o()(f.wrapper, r),
    children: [null != t && (0, i.jsx)(a, {
      className: o()(f.video, (0, d.l)(f, "video", b), {
        [f.mirror]: m
      }, p),
      streamId: t,
      onResize: n,
      onReady: C,
      paused: g
    }), g ? null : (0, i.jsx)("div", {
      className: o()(f.previewWrapper, {
        [f.loading]: y
      }),
      children: y && (0, i.jsxs)(l.Fragment, {
        children: [null != v ? (0, i.jsx)("img", {
          src: v,
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