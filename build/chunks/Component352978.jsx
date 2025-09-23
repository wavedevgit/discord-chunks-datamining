/** Chunk was on 47387 **/
/** chunk id: 352978, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => p,
  Z: () => m
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk885524 = require("./885524.js"),
  Chunk38755 = require("./38755.js"),
  Chunk153066 = require("./153066.js"),
  Chunk980584 = require("./980584.js"),
  p = ((r = {}).CONTAIN = "contain", r.COVER = "cover", r);
let m = Chunk647438.memo(function(e) {
  let {
    streamId: t,
    onResize: n,
    wrapperClassName: r,
    videoComponent: a,
    className: p,
    fit: m = "contain",
    mirror: E = false,
    paused: g = false,
    streamPreviewURL: b,
    videoSpinnerContext: S,
    userId: v,
    streamKey: O
  } = e, [h, y] = i.useState(true);
  (0, c.Z)({
    location: "VideoStream",
    videoSpinnerContext: S,
    userId: v,
    streamId: t,
    loading: h,
    paused: g
  });
  let {
    onReady: _
  } = (0, s.Z)({
    streamId: t,
    userId: v,
    loading: h,
    videoSpinnerContext: S,
    streamKey: O,
    paused: g
  }), j = i.useCallback(() => {
    y(false), _()
  }, [_]);
  return (0, l.jsxs)("div", {
    className: o()(f.wrapper, r),
    children: [null != t && (0, l.jsx)(a, {
      className: o()(f.video, (0, d.l)(f, "video", m), {
        [f.mirror]: E
      }, p),
      streamId: t,
      onResize: n,
      onReady: j,
      paused: g
    }), g ? null : (0, l.jsx)("div", {
      className: o()(f.previewWrapper, {
        [f.loading]: h
      }),
      children: h && (0, l.jsxs)(i.Fragment, {
        children: [null != b ? (0, l.jsx)("img", {
          src: b,
          alt: "",
          className: f.previewImage
        }) : (0, l.jsx)("div", {
          className: f.emptyPreviewWrapper,
          children: (0, l.jsx)("div", {
            className: f.emptyPreview
          })
        }), (0, l.jsx)(u.$jN, {
          className: f.spinner
        })]
      })
    })]
  })
})