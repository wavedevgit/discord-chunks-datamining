/** Chunk was on web.js **/
/** chunk id: 295435, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk916616 = require("./916616.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk558522 = require("./558522.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk22643 = require("./22643.js");

function _(e) {
  let t = i.useRef(null),
    n = e.media;
  if (n.loadingState === c.f.LOADED_NOT_FOUND) return (0, r.jsx)(l.u, {
    text: f.intl.string(f.t.UvDfMz),
    position: "bottom",
    align: "center",
    targetElementRef: t,
    children: (0, r.jsx)("div", {
      className: o()(e.className, p.notFoundPlaceholder, {
        [p.hiddenSpoilers]: e.hiddenSpoilers
      }),
      style: {
        width: e.placeholderWidth,
        height: e.placeholderHeight
      },
      role: "img",
      children: (0, r.jsx)(u.Z, {
        ref: t,
        className: p.brokenImageIcon
      })
    })
  });
  let a = n.loadingState === c.f.LOADING ? d.zo9.LOADING : d.zo9.ERROR;
  return (0, r.jsx)(s.E, {
    className: o()(e.className, {
      [p.hiddenSpoilers]: e.hiddenSpoilers
    }),
    readyState: a,
    src: "",
    width: e.placeholderWidth,
    height: e.placeholderHeight,
    maxWidth: e.maxWidth,
    maxHeight: e.maxHeight,
    mediaLayoutType: e.mediaLayoutType,
    useFullWidth: e.useFullWidth,
    zoomable: false
  })
}