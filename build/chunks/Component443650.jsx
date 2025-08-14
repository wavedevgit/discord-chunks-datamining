/** Chunk was on 88806 **/
/** chunk id: 443650, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk809086 = require("./809086.jsx"),
  Chunk312886 = require("./312886.js");

function a(e) {
  let {
    className: t,
    onClose: r
  } = e;
  return (0, n.jsx)(l.P3F, {
    className: c()(u.closeButtonContainer, t),
    onClick: r,
    children: (0, n.jsx)(l.Dio, {
      size: "xs",
      color: "currentColor",
      className: u.closeButtonIcon
    })
  })
}

function s(e) {
  let {
    guildProductListing: t,
    onClose: r,
    className: o
  } = e;
  return (0, n.jsxs)(l.xBx, {
    className: c()(u.header, o),
    separator: false,
    children: [(0, n.jsx)(i.Z, {
      className: u.headerImage,
      listing: t,
      imageSize: 500,
      alt: ""
    }), (0, n.jsx)(a, {
      className: u.closeButton,
      onClose: r
    })]
  })
}