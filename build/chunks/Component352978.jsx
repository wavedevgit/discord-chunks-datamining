/** Chunk was on 13140 **/
/** chunk id: 352978, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => f,
  Z: () => h
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk885524 = require("./885524.js"),
  Chunk38755 = require("./38755.js"),
  Chunk153066 = require("./153066.js"),
  Chunk412418 = require("./412418.js"),
  f = ((r = {}).CONTAIN = "contain", r.COVER = "cover", r);
let h = Chunk647438.memo(function(e) {
  let {
    streamId: t,
    onResize: n,
    wrapperClassName: r,
    videoComponent: a,
    className: f,
    fit: h = "contain",
    mirror: m = false,
    paused: g = false,
    streamPreviewURL: b,
    videoSpinnerContext: _,
    userId: y,
    streamKey: C
  } = e, [v, O] = l.useState(true);
  (0, u.Z)({
    location: "VideoStream",
    videoSpinnerContext: _,
    userId: y,
    streamId: t,
    loading: v,
    paused: g
  });
  let {
    onReady: x
  } = (0, c.Z)({
    streamId: t,
    userId: y,
    loading: v,
    videoSpinnerContext: _,
    streamKey: C,
    paused: g
  }), E = l.useCallback(() => {
    O(false), x()
  }, [x]);
  return (0, i.jsxs)("div", {
    className: o()(p.wrapper, r),
    children: [null != t && (0, i.jsx)(a, {
      className: o()(p.video, (0, d.l)(p, "video", h), {
        [p.mirror]: m
      }, f),
      streamId: t,
      onResize: n,
      onReady: E,
      paused: g
    }), g ? null : (0, i.jsx)("div", {
      className: o()(p.previewWrapper, {
        [p.loading]: v
      }),
      children: v && (0, i.jsxs)(l.Fragment, {
        children: [null != b ? (0, i.jsx)("img", {
          src: b,
          alt: "",
          className: p.previewImage
        }) : (0, i.jsx)("div", {
          className: p.emptyPreviewWrapper,
          children: (0, i.jsx)("div", {
            className: p.emptyPreview
          })
        }), (0, i.jsx)(s.$jN, {
          className: p.spinner
        })]
      })
    })]
  })
})