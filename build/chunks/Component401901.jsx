/** Chunk was on 31748 **/
/** chunk id: 401901, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => p,
  A: () => b
}), require("./896048.js");
var l, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk183325 = require("./183325.js"),
  Chunk778862 = require("./778862.js"),
  Chunk821589 = require("./821589.js"),
  Chunk463689 = require("./463689.js"),
  p = ((l = {}).CONTAIN = "contain", l.COVER = "cover", l);
let b = Chunk64700.memo(function(e) {
  let {
    streamId: t,
    onResize: n,
    wrapperClassName: l,
    videoComponent: a,
    className: p,
    fit: b = "contain",
    mirror: g = false,
    paused: m = false,
    streamPreviewURL: h,
    videoSpinnerContext: A,
    userId: y,
    streamKey: _
  } = e, [E, v] = i.useState(true);
  (0, u.A)({
    location: "VideoStream",
    videoSpinnerContext: A,
    userId: y,
    streamId: t,
    loading: E,
    paused: m
  });
  let {
    onReady: O
  } = (0, c.A)({
    streamId: t,
    userId: y,
    loading: E,
    videoSpinnerContext: A,
    streamKey: _,
    paused: m
  }), x = i.useCallback(() => {
    v(false), O()
  }, [O]);
  return (0, r.jsxs)("div", {
    className: s()(f.wrapper, l),
    children: [null != t && (0, r.jsx)(a, {
      className: s()(f.video, (0, d.t)(f, "video", b), {
        [f.mirror]: g
      }, p),
      streamId: t,
      onResize: n,
      onReady: x,
      paused: m
    }), m ? null : (0, r.jsx)("div", {
      className: s()(f.previewWrapper, {
        [f.loading]: E
      }),
      children: E && (0, r.jsxs)(i.Fragment, {
        children: [null != h ? (0, r.jsx)("img", {
          src: h,
          alt: "",
          className: f.previewImage
        }) : (0, r.jsx)("div", {
          className: f.emptyPreviewWrapper,
          children: (0, r.jsx)("div", {
            className: f.emptyPreview
          })
        }), (0, r.jsx)(o.y$y, {
          className: f.spinner
        })]
      })
    })]
  })
})