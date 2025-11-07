/** Chunk was on 86642 **/
/** chunk id: 352978, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => f,
  Z: () => h
}), require("./388685.js");
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk885524 = require("./885524.js"),
  Chunk38755 = require("./38755.js"),
  Chunk153066 = require("./153066.js"),
  Chunk412418 = require("./412418.js"),
  f = ((i = {}).CONTAIN = "contain", i.COVER = "cover", i);
let h = Chunk647438.memo(function(e) {
  let {
    streamId: t,
    onResize: n,
    wrapperClassName: i,
    videoComponent: a,
    className: f,
    fit: h = "contain",
    mirror: m = false,
    paused: g = false,
    streamPreviewURL: b,
    videoSpinnerContext: y,
    userId: C,
    streamKey: _
  } = e, [v, x] = l.useState(true);
  (0, u.Z)({
    location: "VideoStream",
    videoSpinnerContext: y,
    userId: C,
    streamId: t,
    loading: v,
    paused: g
  });
  let {
    onReady: O
  } = (0, c.Z)({
    streamId: t,
    userId: C,
    loading: v,
    videoSpinnerContext: y,
    streamKey: _,
    paused: g
  }), E = l.useCallback(() => {
    x(false), O()
  }, [O]);
  return (0, r.jsxs)("div", {
    className: o()(p.wrapper, i),
    children: [null != t && (0, r.jsx)(a, {
      className: o()(p.video, (0, d.l)(p, "video", h), {
        [p.mirror]: m
      }, f),
      streamId: t,
      onResize: n,
      onReady: E,
      paused: g
    }), g ? null : (0, r.jsx)("div", {
      className: o()(p.previewWrapper, {
        [p.loading]: v
      }),
      children: v && (0, r.jsxs)(l.Fragment, {
        children: [null != b ? (0, r.jsx)("img", {
          src: b,
          alt: "",
          className: p.previewImage
        }) : (0, r.jsx)("div", {
          className: p.emptyPreviewWrapper,
          children: (0, r.jsx)("div", {
            className: p.emptyPreview
          })
        }), (0, r.jsx)(s.$jN, {
          className: p.spinner
        })]
      })
    })]
  })
})