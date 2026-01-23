/** Chunk was on 31748 **/
/** chunk id: 401901, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => p,
  A: () => g
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk183325 = require("./183325.js"),
  Chunk778862 = require("./778862.js"),
  Chunk821589 = require("./821589.js"),
  Chunk463689 = require("./463689.js"),
  p = ((r = {}).CONTAIN = "contain", r.COVER = "cover", r);
let g = Chunk64700.memo(function(e) {
  let {
    streamId: t,
    onResize: n,
    wrapperClassName: r,
    videoComponent: a,
    className: p,
    fit: g = "contain",
    mirror: m = false,
    paused: _ = false,
    streamPreviewURL: h,
    videoSpinnerContext: y,
    userId: A,
    streamKey: b
  } = e, [E, v] = i.useState(true);
  (0, u.A)({
    location: "VideoStream",
    videoSpinnerContext: y,
    userId: A,
    streamId: t,
    loading: E,
    paused: _
  });
  let {
    onReady: O
  } = (0, c.A)({
    streamId: t,
    userId: A,
    loading: E,
    videoSpinnerContext: y,
    streamKey: b,
    paused: _
  }), x = i.useCallback(() => {
    v(false), O()
  }, [O]);
  return (0, l.jsxs)("div", {
    className: o()(f.wrapper, r),
    children: [null != t && (0, l.jsx)(a, {
      className: o()(f.video, (0, d.t)(f, "video", g), {
        [f.mirror]: m
      }, p),
      streamId: t,
      onResize: n,
      onReady: x,
      paused: _
    }), _ ? null : (0, l.jsx)("div", {
      className: o()(f.previewWrapper, {
        [f.loading]: E
      }),
      children: E && (0, l.jsxs)(i.Fragment, {
        children: [null != h ? (0, l.jsx)("img", {
          src: h,
          alt: "",
          className: f.previewImage
        }) : (0, l.jsx)("div", {
          className: f.emptyPreviewWrapper,
          children: (0, l.jsx)("div", {
            className: f.emptyPreview
          })
        }), (0, l.jsx)(s.y$y, {
          className: f.spinner
        })]
      })
    })]
  })
})