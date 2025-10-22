/** Chunk was on 17360 **/
/** chunk id: 352978, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => p,
  Z: () => _
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
let _ = Chunk647438.memo(function(e) {
  let {
    streamId: t,
    onResize: n,
    wrapperClassName: r,
    videoComponent: a,
    className: p,
    fit: _ = "contain",
    mirror: m = false,
    paused: g = false,
    streamPreviewURL: v,
    videoSpinnerContext: b,
    userId: E,
    streamKey: h
  } = e, [S, y] = l.useState(true);
  (0, u.Z)({
    location: "VideoStream",
    videoSpinnerContext: b,
    userId: E,
    streamId: t,
    loading: S,
    paused: g
  });
  let {
    onReady: O
  } = (0, s.Z)({
    streamId: t,
    userId: E,
    loading: S,
    videoSpinnerContext: b,
    streamKey: h,
    paused: g
  }), I = l.useCallback(() => {
    y(false), O()
  }, [O]);
  return (0, i.jsxs)("div", {
    className: o()(f.wrapper, r),
    children: [null != t && (0, i.jsx)(a, {
      className: o()(f.video, (0, d.l)(f, "video", _), {
        [f.mirror]: m
      }, p),
      streamId: t,
      onResize: n,
      onReady: I,
      paused: g
    }), g ? null : (0, i.jsx)("div", {
      className: o()(f.previewWrapper, {
        [f.loading]: S
      }),
      children: S && (0, i.jsxs)(l.Fragment, {
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