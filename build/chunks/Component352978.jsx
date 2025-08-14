/** Chunk was on web.js **/
/** chunk id: 352978, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => f,
  Z: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk885524 = require("./885524.js"),
  Chunk38755 = require("./38755.js"),
  Chunk153066 = require("./153066.js"),
  Chunk412418 = require("./412418.js"),
  f = function(e) {
    return e.CONTAIN = "contain", e.COVER = "cover", e
  }({});
let _ = Chunk73800.memo(function(e) {
  let {
    streamId: t,
    onResize: n,
    wrapperClassName: o,
    videoComponent: f,
    className: _,
    fit: p = "contain",
    mirror: h = false,
    paused: m = false,
    streamPreviewURL: g,
    videoSpinnerContext: E,
    userId: b,
    streamKey: y
  } = e, [O, v] = i.useState(true);
  (0, c.Z)({
    location: "VideoStream",
    videoSpinnerContext: E,
    userId: b,
    streamId: t,
    loading: O,
    paused: m
  });
  let {
    onReady: I
  } = (0, l.Z)({
    streamId: t,
    userId: b,
    loading: O,
    videoSpinnerContext: E,
    streamKey: y,
    paused: m
  }), T = i.useCallback(() => {
    v(false), I()
  }, [I]);
  return (0, r.jsxs)("div", {
    className: a()(d.wrapper, o),
    children: [null != t && (0, r.jsx)(f, {
      className: a()(d.video, (0, u.l)(d, "video", p), {
        [d.mirror]: h
      }, _),
      streamId: t,
      onResize: n,
      onReady: T,
      paused: m
    }), m ? null : (0, r.jsx)("div", {
      className: a()(d.previewWrapper, {
        [d.loading]: O
      }),
      children: O && (0, r.jsxs)(i.Fragment, {
        children: [null != g ? (0, r.jsx)("img", {
          src: g,
          alt: "",
          className: d.previewImage
        }) : (0, r.jsx)("div", {
          className: d.emptyPreviewWrapper,
          children: (0, r.jsx)("div", {
            className: d.emptyPreview
          })
        }), (0, r.jsx)(s.$jN, {
          className: d.spinner
        })]
      })
    })]
  })
})