/** Chunk was on 61344 **/
/** chunk id: 401901, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => p,
  A: () => f
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
let f = Chunk64700.memo(function(e) {
  let {
    streamId: t,
    onResize: n,
    wrapperClassName: l,
    videoComponent: a,
    className: p,
    fit: f = "contain",
    mirror: m = false,
    paused: g = false,
    streamPreviewURL: A,
    videoSpinnerContext: b,
    userId: _,
    streamKey: y
  } = e, [v, E] = i.useState(true);
  (0, u.A)({
    location: "VideoStream",
    videoSpinnerContext: b,
    userId: _,
    streamId: t,
    loading: v,
    paused: g
  });
  let {
    onReady: O
  } = (0, c.A)({
    streamId: t,
    userId: _,
    loading: v,
    videoSpinnerContext: b,
    streamKey: y,
    paused: g
  }), C = i.useCallback(() => {
    E(false), O()
  }, [O]);
  return (0, r.jsxs)("div", {
    className: s()(h.wrapper, l),
    children: [null != t && (0, r.jsx)(a, {
      className: s()(h.video, (0, d.t)(h, "video", f), {
        [h.mirror]: m
      }, p),
      streamId: t,
      onResize: n,
      onReady: C,
      paused: g
    }), g ? null : (0, r.jsx)("div", {
      className: s()(h.previewWrapper, {
        [h.loading]: v
      }),
      children: v && (0, r.jsxs)(i.Fragment, {
        children: [null != A ? (0, r.jsx)("img", {
          src: A,
          alt: "",
          className: h.previewImage
        }) : (0, r.jsx)("div", {
          className: h.emptyPreviewWrapper,
          children: (0, r.jsx)("div", {
            className: h.emptyPreview
          })
        }), (0, r.jsx)(o.y$y, {
          className: h.spinner
        })]
      })
    })]
  })
})